from flask import Flask, render_template, request, g, redirect, url_for, make_response, jsonify
from werkzeug.utils import secure_filename  # For uploading files to the filesystem
import os                   # For navigating the filesystem
from sys import platform    # To check operating system for correct file path format for filesystem
import configparser # For retrieving credentials
import pymysql as pms   # For Inserting
import mysql_utils as mu    # MySQL Helper Module
import hashlib  # For password encryption
import string   # For generating sessionIDs
import random   # For randomizing sessionIDs
import pandas as pd

from flask_cors import CORS, cross_origin   # For front end request issue


# Database Settings
config = configparser.ConfigParser()
config.read('db_config.ini')

host = config['mysql']['host']
user = config['mysql']['user']
password = config['mysql']['password']
db = config['mysql']['db']

config = {
    'host': host,
    'user': user,
    'password': password,
    'db': db
}

### Global variables

# Session Info
SESSIONS = dict() # Contains session_id and email_address

# Determine OS and determine image uploads folder
if platform == "win32": # Windows
    path = os.path.abspath('../frontend/src/assets/profile_photos')
    UPLOAD_FOLDER = path.replace("\\", "/")
elif platform == "linux" or platform == "linux2" or platform == "darwin": # linux or OSX
    UPLOAD_FOLDER = os.path.abspath('../frontend/src/assets/profile_photos')

# List of allowed file extensions
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg'])

### End of global variables

# Initialize Flask App
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
CORS(app, support_credentials=True)

# Generate new session
def newSessionID():
    print('Generating a new SessionID')
    letters = string.ascii_letters
    sessionId = ''.join(random.choice(letters) for i in range(256))
    print(sessionId)
    return sessionId

# Login 
#########
@app.route('/login', methods=['POST'])
@cross_origin(supports_credentials=True)
def login():
    if request.method == 'POST':
        content_type = request.headers.get('Content-Type')
        r = request

        if (content_type == 'application/json'):    # Case for JSON request body 
            json = r.json
            email_address = json['email_address']
            password = json['password']
        
        else:                                       # Case for submitted form
            email_address = r.form['email_address']
            password = r.form['password']
        
        print('Attempting login:\n' + 'email_address: ' + email_address + '\npassword: ' + password)
        return attempt_login(email_address, password)
    
def attempt_login(email_address,password):
    if check_credentials(email_address,password):
        sessionId = newSessionID()
        user_data = mu.load(config, 'amorr.users', f'SELECT * FROM amorr.users WHERE email_address = \'{email_address}\'')
        user = User(user_data[0])
        SESSIONS[sessionId] = user

        resp = make_response(
            jsonify(
                {"message": f"Login successful for {user.email_address}"}
            ),
            200,
        )
        resp.headers["Content-Type"] = "application/json"
        resp.set_cookie('sessionId', sessionId, max_age=60*30)
    else:
        resp = make_response(
            jsonify(
                {"message": "Incorrect username or password"}
            ),
            401,
        )
        resp.headers["Content-Type"] = "application/json"
    return resp

def check_credentials(email_address, password):
    user = mu.load(config, 'amorr.users', f'SELECT * FROM amorr.users WHERE email_address = \'{email_address}\'')
    if len(user) == 0:
        print("User does not exist")
        return False
    if user[0]['email_address'] == email_address and user[0]['password'] == hashlib.md5(str(password).encode()).hexdigest():
            print('Login successful!\n')
            return True
    print('Login failed!\n')
    return False
###    
# End of login


# Register
#########
@app.route('/register', methods=['POST'])
@cross_origin(supports_credentials=True)
def register():
    if request.method == 'POST':
        return do_register()

def do_register():  # Assuming username, password, & email regex is implemented on front-end

    content_type = request.headers.get('Content-Type')
    r = request

    if (content_type == 'application/json'):    # Case for JSON request body 
        json = r.json
        email_address = json['email_address']
        address = json['address']
        user_type = json['user_type']
        full_name = json['full_name']
        password = json['password']
    
    else:                                       # Case for submitted form
        email_address = r.form['email_address']
        address = r.form['address']
        user_type = r.form['user_type']
        full_name = r.form['full_name']
        password = r.form['password']


    # print("Received data: ", email_address, address, user_type, full_name, password)  

    identical_emails = mu.load(config, 'amorr.users', f'SELECT * FROM amorr.users WHERE email_address = \'{email_address}\'')

    if len(identical_emails) != 0:
        resp = make_response(
            jsonify(
                {"message": "Email is already in use!"}
            ),
            400,
        )

    else:    
        new_user = {'email_address':[email_address], 'address':[address], 'user_type':[user_type], 'full_name':[full_name], 'password':[hashlib.md5(str(password).encode()).hexdigest()]}
        df = pd.DataFrame.from_dict(new_user)
        mu.insert(config, 'users', df)  # Insert new user into users table

        if user_type == 'Customer':
            user = mu.load(config, 'amorr.users', f'SELECT * FROM amorr.users WHERE email_address = \'{email_address}\'')
            user_id = user[0]['uid']
            d = {'uid':[user_id], 'total_rating':['0'], 'num_ratings':['0']}
            df = pd.DataFrame.from_dict(d)
            mu.insert(config, 'customers', df)  # Create new entry for new customer user

        # No case for service provider as of now. SP registration form is not complete yet.

        resp = make_response(
            jsonify(
                {"message": "Registration successful!"}
            ),
            200,
        )
        resp.headers["Content-Type"] = "application/json"
        
    return resp

#########
# End of register

# get-profile
#########
@app.route('/get-profile', methods=['GET'])
def get_profile():
    if request.method == 'GET':
        return fetch_profile()
def fetch_profile():  # Fetch full name and address from database

    user_id = get_user_id()
    if user_id == -1:
        resp = make_response( jsonify( {"message": "Please log in to view your profile"} ), 400, )
        return resp

    user = mu.load(config, 'amorr.users', f'SELECT * FROM amorr.users WHERE uid = \'{user_id}\'')
    customer = mu.load(config, 'amorr.customers', f'SELECT * FROM amorr.customers WHERE uid = \'{user_id}\'')
    pfp_path = mu.load(config, 'amorr.profile_photos', f'SELECT * FROM amorr.profile_photos WHERE uid = \'{user_id}\'')
    if len(user) == 0 or len(customer) == 0 or len(pfp_path) == 0:
        resp = make_response(
            jsonify(
                {"message": "User not found!"}
            ),
            404,
        )
    else:
        full_name = user[0]['full_name']
        address = user[0]['address']
        total_rating = customer[0]['total_rating']
        num_ratings = customer[0]['num_ratings']
        profile_pic_path = pfp_path[0]['pfp_path']

        resp = make_response(
            jsonify(
                {'full_name': full_name,
                'address': address,
                'total_rating': total_rating,
                'num_ratings': num_ratings,
                'profile_pic_path': profile_pic_path,
                }
            ),
            200,
        )
    resp.headers["Content-Type"] = "application/json"
    return resp
#########
# End of get-profile

# upload-profile-photo
#########
@app.route('/upload-profile-photo', methods=['POST'])
def upload_file():  # Expects one image and sessionID

    files = request.files
    user_id = str(get_user_id())
    if user_id == -1:
        resp = make_response(jsonify( {'message': 'Must be logged in to edit profile photo'} ), 400,)
        return resp
    else:
        print("Attempting to update profile picture for user:", user_id)

    # check if the post request has 'pic' (<input type="file" name="pic" />)
    if 'pic' not in files:
        resp = make_response(jsonify( {'message': 'No file was attached to the request'} ), 400,)
        return resp


    file = files['pic'] # Type <werkzeug.FileStorage>

    # if user does not select file, the browser submits an empty string for filename
    if file.filename == '':
        resp = make_response(jsonify( {'message': 'No file was selected'} ), 400,)
        return resp


    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        filetype = '.' + filename.rsplit('.', 1)[1].lower()
        # file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        # file.save(app.config['UPLOAD_FOLDER'] + '/' + filename)
        file_save_path = app.config['UPLOAD_FOLDER'] + '/' + user_id + filetype
        file.save(file_save_path)   # Save image to upload folder

        # Delete old path if user already has a pfp path in the database
        rows = mu.load(config, 'amorr.profile_photos', f'SELECT * FROM amorr.profile_photos WHERE uid = \'{user_id}\'')
        if len(rows) > 0:
            mu.delete(config, [f'uid = \'{user_id}\''], 'amorr.profile_photos') # Delete old path

        file_relative_path = '../../../assets/profile_photos/' + filename
        d = {'uid':[user_id], 'pfp_path':[file_relative_path]}
        df = pd.DataFrame.from_dict(d)
        mu.insert(config, 'profile_photos', df) # Insert new pfp_path into database

        resp = make_response(jsonify( {'message': 'Profile photo was successfully changed!'} ), 200,)
        return resp

    elif not allowed_file(file.filename):   # Unsupported file type
        resp = make_response(jsonify( {'message': 'File type not supported!'} ), 400,)
        return resp

    # File is None
    resp = make_response(jsonify( {'message': 'Request could not be completed'} ), 500,)
    return resp

def allowed_file(filename):         # Check if file type is in ALLOWED_EXTENSIONS
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
#########
# End of upload-profile-photo

@app.route('/') # For testing upload-profile-photo
def render_homepage():
    return render_template('dummy_image_upload.html')

@app.route('/test-login') # For testing upload-profile-photo
def test_login():
    return attempt_login('efkan@amorr.com', 'fa6834fsf6')

def get_user_id():   # uid is used to identify each user
    if 'sessionId' in request.cookies:
        if request.cookies.get('sessionId') in SESSIONS.keys():
            return SESSIONS[request.cookies.get('sessionId')].uid
    return -1   # Session not found

################################################################################################################################################
################################################################################################################################################
################################################################################################################################################

if __name__ == "__main__":
    app.run()

################################################################################################################################################
################################################################################################################################################
################################################################################################################################################

# Classes (for now)

class User:
    def __init__(self, sql_data):
        self.email_address = sql_data['email_address']
        self.user_type = sql_data['user_type']
        self.uid  = sql_data['uid']
        if self.user_type  == 'Customer':
            self.privilege_title = 'Customer'
        elif self.user_type  == 'Service Provider':
            self.privilege_title = 'Service Provider'
        elif self.user_type  == 'Admin':
            self.privilege_title = 'Admin'
        else:
            self.privilege_title = 'Unknown'