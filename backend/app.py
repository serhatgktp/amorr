import datetime
from flask import Flask, render_template, request, g, redirect, url_for, make_response, jsonify, send_from_directory
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
import requests # Importing for sending images

from flask_cors import CORS, cross_origin   # For handling cross-origin requests

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
    path = os.path.abspath('image_uploads')
    UPLOAD_FOLDER = path.replace("\\", "/")
elif platform == "linux" or platform == "linux2" or platform == "darwin": # linux or OSX
    UPLOAD_FOLDER = os.path.abspath('image_uploads')

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

        if user_type == 'Service Provider':  # Handle additional field
            type_of_services = json['type_of_services'] 
    
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

        user = mu.load(config, 'amorr.users', f'SELECT * FROM amorr.users WHERE email_address = \'{email_address}\'')
        user_id = user[0]['uid']

        pfp_dict = {'uid':[user_id], 'pfp_path':['default.jpg']}
        pfp_df = pd.DataFrame.from_dict(pfp_dict)
        mu.insert(config, 'profile_photos', pfp_df) # Create entry for default profile photo path for new user

        if user_type == 'Customer':
            d = {'uid':[user_id], 'total_rating':['0'], 'num_ratings':['0']}
            df = pd.DataFrame.from_dict(d)
            mu.insert(config, 'customers', df)  # Create new entry for new customer user

        # Case for service provider
        if user_type == 'Service Provider':
            d = {'uid':[user_id], 'bio':[''], 'type_of_services':[str(type_of_services)]}
            df = pd.DataFrame.from_dict(d)
            mu.insert(config, 'service_providers', df)  # Create new entry for new customer user

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

# ContactUs 
#########
@app.route('/contact', methods=['POST'])
@cross_origin(supports_credentials=True)
def contact():
    if request.method == 'POST':
        return do_contact()

def do_contact():

    content_type = request.headers.get('Content-Type')
    r = request 

    if (content_type == 'application/json'):
        json = r.json
        fullname = json['fullname']
        email = json['fullname']
        subject = json['subject']
        message = json['message']

    else:
        fullname = r.form['fullname']
        email = r.form['fullname']
        subject = r.form['subject']
        message = r.form['message']

    new_message = {'fullname': [fullname], 'email': [email], 'subject': [subject], 'message': [message] }
    df = pd.DataFrame.from_dict(new_message)
    mu.insert(config, 'contact_us', df)
    resp = make_response(
        jsonify(
            {"message": "Sent message!"}
        ),
        200,
    )
    resp.headers["Content-Type"] = "application/json"

    return resp

#########
# End of ContactUs



# Delete Account 
#########

@app.route('/delete-account', methods=['POST'])
@cross_origin(supports_credentials=True)
def delete_account():
    if request.method == 'POST':
        return fetch()
def fetch(): # gets uid
    user_id = get_user_id()

    if user_id == -1:
        resp = make_response(jsonify( {'message': 'User not logged in'} ), 400,)
        return resp

    user = mu.load(config, 'amorr.users', f'SELECT * FROM amorr.users WHERE uid = \'{user_id}\'')
    if len(user) == 0:
        resp = make_response(
            jsonify(
                {"message": "User not found!"}
            ),
            404,
        )
    else: 
        user_email = SESSIONS[request.cookies.get('sessionId')].email_address
        del SESSIONS[request.cookies.get('sessionId')]

        mu.delete(config, [f'uid = \'{user_id}\''], 'amorr.users')
        resp = make_response(
         jsonify(
             {"message": "Deleted User!"}
         ),
         200,
     )
    resp.headers["Content-Type"] = "application/json"
    resp.set_cookie('sessionId', '', expires=0)
    return resp

#########
# End of Delete Account 

# get-profile
#########
@app.route('/get-profile', methods=['GET'])
@cross_origin(supports_credentials=True)
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
    pfp_path = mu.load(config, 'amorr.profile_photos', f'SELECT * FROM amorr.profile_photos WHERE uid = \'{user_id}\'') # Currently unused and redundant
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
        profile_pic_path = pfp_path[0]['pfp_path']  # Currently unused and redundant

        resp = make_response(
            jsonify(
                {'full_name': full_name,
                'address': address,
                'total_rating': total_rating,
                'num_ratings': num_ratings,
                'profile_pic_path': profile_pic_path,   # Currently unused and redundant
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
@cross_origin(supports_credentials=True)
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
        
        file_save_path = app.config['UPLOAD_FOLDER'] + '/' + user_id + filetype
        file.save(file_save_path)   # Save image to upload folder

        # Update the existing profile path entry for the user
        sql = f'UPDATE amorr.profile_photos SET pfp_path = \'{user_id + filetype}\' WHERE uid = \'{user_id}\';'
        mu.query(config, sql)

        # resp = make_response(jsonify( {'message': 'Profile photo was successfully changed!'} ), 200,)
        return redirect("http://localhost:3000/profile", code=200)

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

# get-profile-photo
#########
@app.route('/get-profile-photo', methods=['GET'])
@cross_origin(supports_credentials=True)
def get_pfp():
    user_id = str(get_user_id())
    if user_id == "-1":
        resp = make_response(jsonify( {'message': 'Must be logged in to see your profile photo'} ), 400,)
        return resp

    pfp_path = mu.load(config, 'amorr.profile_photos', f'SELECT * FROM amorr.profile_photos WHERE uid = \'{user_id}\'')
    if len(pfp_path) == 0:
        resp = make_response(
            jsonify(
                {"message": f"pfp_path not found for user! (uid: {user_id})"}
            ),
            404,
        )
        return resp
    else:
        img_path = pfp_path[0]['pfp_path']
        filetype = img_path.rsplit('.', 1)[1].lower()   # File type without the '.'
        print("\n\n\nPATH1 :",UPLOAD_FOLDER,f"filetype = {filetype}\n\n\n")
        
        resp = send_from_directory(UPLOAD_FOLDER, img_path, mimetype=f'image/{filetype}')

        return resp     # Should return with response code 200 if successful

#########
# get-profile-photo

# edit-profile-address
#########
@app.route('/edit-profile-address', methods=['POST'])
@cross_origin(supports_credentials=True)
def edit_profile_address():  # Change address on profile
    if request.method == 'POST':
        user_id = get_user_id()
        if user_id == -1:
            resp = make_response( jsonify( {"message": "Please log in to edit your address"} ), 400, )
            return resp

        content_type = request.headers.get('Content-Type')
        r = request

        if (content_type == 'application/json'):    # Case for JSON request body 
            json = r.json
            new_address = json['new_address']
        else:                                       # Case for submitted form
            new_address = r.form['new_address']

        sql = f'UPDATE amorr.users SET address = \'{new_address}\' WHERE uid = \'{user_id}\';'
        mu.query(config, sql)

        resp = make_response( jsonify( {"message": "Address has been successfully updated!"} ), 200, )
        return resp

#########
# End of edit-profile-address

# get-sp-price-list
#########
@app.route('/get-sp-price-list', methods=['GET'])
@cross_origin(supports_credentials=True)
def get_price_list():
    user_id = get_user_id()
    if user_id == -1:
        resp = make_response( jsonify( {"message": "You must be logged in to view your profile"} ), 400, )
        return resp
    user = mu.load(config, 'amorr.users', f'SELECT * FROM amorr.users WHERE uid = \'{user_id}\'')
    if len(user) == 0:
        resp = make_response(
            jsonify(
                {"message": f"User not found! (uid: {user_id})"}
            ),
            404,
        )
    sql = f"SELECT * FROM amorr.services WHERE uid = '{user_id}'"
    data = mu.load(config, 'amorr.services', sql)
    if len(data) == 0:
        resp = make_response(jsonify([]), 200, )    # Return an empty array
    else:
        services = []
        for row in data:
            services.append({'service_id':row['service_id'], 'service':row['name'], 'price':row['price']})
        resp = make_response(jsonify(services), 200, )    # Return services as an array of dictionaries
    return resp
#########
# End of get-sp-price-list

# get-sp-price-list-customer
#########
@app.route('/get-sp-price-list-customer', methods=['GET'])
@cross_origin(supports_credentials=True)
def get_price_list_customer():
    r = request
    content_type = request.headers.get('Content-Type')
    if content_type == 'application/json':  # Case for JSON request body 
        json = r.json
        user_id = json['uid']
    else:   # Case for submitted form
        user_id = r.form['uid']
        
    sql = f"SELECT * FROM amorr.services WHERE uid = '{user_id}'"
    data = mu.load(config, 'amorr.services', sql)
    if len(data) == 0:
        resp = make_response(jsonify({}), 200, )    # Return an empty dict
    else:
        services = []
        for row in data:
            services.append({'service':row['name'], 'price':row['price']})
        resp = make_response(jsonify(services), 200, )    # Return services as an array of dictionaries
    return resp
#########
# End of get-sp-price-list-customer

# check-user-type
#########
@app.route('/check-user-type', methods=['GET'])
@cross_origin(supports_credentials=True)
def check_user_type():
    user_id = get_user_id()
    if user_id == -1:
        resp = make_response( jsonify( {"user_type": "Guest"} ), 200, )
    else:
        user_type = SESSIONS[request.cookies.get('sessionId')].user_type
        resp = make_response( jsonify( {"user_type": f"{user_type}"} ), 200, )
    return resp
#########
# End of check-user-type

# @app.route('/') # For testing upload-profile-photo
# def render_homepage():
#     return render_template('dummy_image_upload.html')

@app.route('/test-login') # For testing upload-profile-photo
def test_login():
    return attempt_login('efkan@amorr.com', 'fa6834fsf6')

def get_user_id():   # uid is used to identify each user
    if 'sessionId' in request.cookies:
        if request.cookies.get('sessionId') in SESSIONS.keys():
            return SESSIONS[request.cookies.get('sessionId')].uid
    return -1   # Session not found

def get_user_type():
    if 'sessionId' in request.cookies:
        if request.cookies.get('sessionId') in SESSIONS.keys():
            return SESSIONS[request.cookies.get('sessionId')].user_type
    return -1   # Session not found

# logout
#########
@app.route('/logout', methods=['POST'])
@cross_origin(supports_credentials=True)
def logout():
    user_id = get_user_id()
    if user_id == -1:
        resp = make_response( jsonify( {"Message": "User is not signed in, therefore cannot log out"} ), 400, )
    else:
        user_email = SESSIONS[request.cookies.get('sessionId')].email_address

        del SESSIONS[request.cookies.get('sessionId')]  # Delete session from flask server sessions

        resp = make_response( jsonify( {"user_type": f"Logout successful for: {user_email}"} ), 200, )
        resp.set_cookie('sessionId', '', expires=0) # Set sessionId to expire immediately
        # resp.delete_cookie('sessionId')
    return resp
#########
# End of logout

#########
# End of check-user-type

# get-sp-profile
#########
@app.route('/get-sp-profile', methods=['GET'])
@cross_origin(supports_credentials=True)
def get_sp_profile():
    if request.method == 'GET':
        return fetch_sp_profile()
def fetch_sp_profile():  # Fetch full name and address from database

    user_id = get_user_id()
    if user_id == -1:
        resp = make_response( jsonify( {"message": "Please log in to view your profile"} ), 400, )
        return resp

    user = mu.load(config, 'amorr.users', f'SELECT * FROM amorr.users WHERE uid = \'{user_id}\'')
    sp = mu.load(config, 'amorr.service_providers', f'SELECT * FROM amorr.service_providers WHERE uid = \'{user_id}\'')
    if len(user) == 0 or len(sp) == 0:
        resp = make_response(
            jsonify(
                {"message": "User not found!"}
            ),
            404,
        )
    else:
        full_name = user[0]['full_name']
        address = user[0]['address']

        bio = sp[0]['bio']
        services = sp[0]['type_of_services']
        
        sql = f'SELECT COUNT(*) FROM amorr.sp_reviews WHERE recipient_uid = \'{user_id}\''
        num_ratings = mu.load(config, 'amorr.sp_reviews', query=sql)[0]['COUNT(*)']
        
        sql = f'SELECT AVG(rating) FROM amorr.sp_reviews WHERE recipient_uid = \'{user_id}\''

        avg = mu.load(config, 'amorr.sp_reviews', query=sql)[0]['AVG(rating)']
        if avg is not None:
            avg_rating = round(mu.load(config, 'amorr.sp_reviews', query=sql)[0]['AVG(rating)'], 1)
        else:
            avg_rating = 'No reviews yet'


        resp = make_response(
            jsonify(
                {
                'full_name': full_name,
                'address': address,
                'avg_rating': avg_rating,
                'num_ratings': num_ratings,
                'bio':bio,
                'services':services
                }
            ),
            200,
        )
    resp.headers["Content-Type"] = "application/json"
    return resp
#########
# End of get-sp-profile

# edit-bio
#########
@app.route('/edit-bio', methods=['POST'])
@cross_origin(supports_credentials=True)
def edit_bio():
    user_id = get_user_id()
    if user_id == -1:   # Check if user is signed in
        resp = make_response( jsonify( {"Message": "Must be logged in before editing bio"} ), 400, )
        return resp
    sp_user = mu.load(config, 'amorr.service_providers', f'SELECT * FROM amorr.service_providers WHERE uid = \'{user_id}\'')
    if len(sp_user) == 0:
        resp = make_response( jsonify( {"Message": "User could not be determined as a valid service provider"} ), 404, )
        return resp
    elif len(sp_user) > 1:
        resp = make_response( jsonify( {"Message": "Internal error: multiple records found for same user"} ), 500, )
        return resp
    content_type = request.headers.get('Content-Type')
    r = request
    if (content_type == 'application/json'):    # Case for JSON request body 
        json = r.json
        new_bio = json['bio']
    else:                                       # Case for submitted form
        new_bio = r.form['bio']
    sql = f'UPDATE amorr.service_providers SET bio = \'{new_bio}\' WHERE uid = \'{user_id}\';'
    mu.query(config, sql)
    resp = make_response( jsonify( {"Message": "Bio edit request was successful!"} ), 200,)
    return resp
#########
# End of edit-bio

# edit-sp-price-list
#########
@app.route('/edit-sp-price-list', methods=['POST'])
@cross_origin(supports_credentials=True)
def edit_pricelist():
    user_id = get_user_id()
    if user_id == -1:
        resp = make_response( jsonify( {"Message": "Must be signed in to edit price list!"} ), 400, )
        return resp
    r = request
    content_type = request.headers.get('Content-Type')
    if content_type == 'application/json':    # Case for JSON request body 
        json = r.json
        service_id = json['service_id']
        service = json['service']
        new_price = json['price']
    
    else:                                       # Case for submitted form
        service_id = r.form['service_id']
        service = r.form['service']
        new_price = r.form['price']
    
    sql = f'UPDATE amorr.services SET price = \'{new_price}\' WHERE service_id = \'{service_id}\';'
    mu.query(config, sql)
    sql = f'UPDATE amorr.services SET name = \'{service}\' WHERE service_id = \'{service_id}\';'
    mu.query(config, sql)

    resp = make_response( jsonify( {"message": f"Price for service '{service}' was successfully updated!"} ), 200,)    
    return resp
#########
# End of edit-sp-price-list

# add-sp-price-list
#########
@app.route('/add-sp-price-list', methods=['POST'])
@cross_origin(supports_credentials=True)
def add_pricelist():
    user_id = get_user_id()
    if user_id == -1:
        resp = make_response( jsonify( {"Message": "Must be signed in to add a service to their price list!"} ), 400, )
        return resp
    r = request
    content_type = request.headers.get('Content-Type')
    if content_type == 'application/json':    # Case for JSON request body 
        json = r.json
        service = json['service']
        price = json['price']
    
    else:                                       # Case for submitted form
        service = r.form['service']
        price = r.form['price']

    sql = f"INSERT INTO amorr.services (uid, name, price) VALUES ('{user_id}', '{service}', '{price}');"
    mu.query(config, sql)

    resp = make_response( jsonify( {"message": f"Service '{service}' was successfully added!"} ), 200,)    
    return resp
#########
# End of add-sp-price-list

# fetch-service-providers
#########
@app.route('/fetch-service-providers', methods=['GET'])
@cross_origin(supports_credentials=True)
def fetch_sps():
    sql = "SELECT * FROM users as u INNER JOIN service_providers as sp ON u.uid = sp.uid"
    sp_list = mu.load(config, 'amorr.users', sql)
    if len(sp_list) == 0:
        resp = make_response( jsonify([]), 200,)    # No SPs were found in the database
        return resp
    
    return_data = []
    for sp in sp_list:
        uid = sp['uid']
        sql = f"SELECT COUNT(*) FROM amorr.sp_reviews WHERE recipient_uid = '{uid}'"
        num_ratings = mu.load(config, 'amorr.sp_reviews', query=sql)[0]['COUNT(*)']
        sql = f"SELECT AVG(rating) FROM amorr.sp_reviews WHERE recipient_uid = '{uid}'"
        avg = mu.load(config, 'amorr.sp_reviews', query=sql)[0]['AVG(rating)']
        if avg is not None:
            avg_rating = round(mu.load(config, 'amorr.sp_reviews', query=sql)[0]['AVG(rating)'], 1)
        else:
            avg_rating = 'No reviews yet'
        tos_str = sp['type_of_services']
        tos = tos_str.strip('][').split(', ')   # Convert from string to list
        for i in range(len(tos)):
            tos[i] = tos[i].strip("'")
        if len(tos) == 1:
            services_str = tos[0]
        elif len(tos) == 2:
            services_str = tos[0] + " and " + tos[1]
        else:
            services_str = tos[0] + ", " + tos[1] + " and more"
        sp_dict = {}
        sp_dict['id'] = uid
        sp_dict['name'] = sp['full_name']
        sp_dict['avg_rating'] = avg_rating
        sp_dict['num_ratings'] = num_ratings
        sp_dict['tos'] = tos
        sp_dict['services'] = services_str
        return_data.append(sp_dict)
    resp = make_response( jsonify(return_data), 200,)
    return resp
#########
# End of fetch-service-providers

# get-appointments
#########
@app.route('/appointments/<status>', methods=['GET'])
@cross_origin(supports_credentials=True)
def get_appts(status):

    if status!='pending' and status!='confirmed' and status!='complete' and status!='rejected':   # Undefined endpoint
        resp = make_response( jsonify( {"message": "Endpoint not recognized!"} ), 405, )
        return resp

    uid = get_user_id()
    if uid == -1:   # User not logged in
        resp = make_response( jsonify( {"message": "Please log in to view your appointments!"} ), 400, )
        return resp

    user_type = get_user_type()
    if(user_type == 'Customer'):
        name_uid = "sp_uid"
    else:
        name_uid = "customer_uid"

    query = f"""
        select a.appointment_id, u.full_name as name, a.services, a.time, a.date, a.price, a.address, a.reviewed from
        amorr.appointments as a
        inner join
        amorr.users as u
        on a.{name_uid} = u.uid
        where status = '{status}'
        """

    if (user_type == 'Customer'):
        query = query + f" and a.customer_uid = '{uid}'"
    else:
        query = query + f" and a.sp_uid = '{uid}'"

    data = mu.load(config, "amorr.users", query=query)

    for i in range(len(data)):
        services = data[i]['services']
        services = services.replace("'", "")
        services = services.replace("[", "")
        services = services.replace("]", "")
        data[i]['services'] = services

    return_data = data
    resp = make_response( jsonify(return_data), 200,)
    return resp
#########
# get-appointments

# modify-appointment
#########
@app.route('/modify-appointment/<action>', methods=['POST'])
@cross_origin(supports_credentials=True)
def modify_appt(action):
    if action == "accept":
        status = "Confirmed"
    elif action == "reject":
        status = "Rejected"
    elif action == "complete":
        status = "Complete"
    else:
        resp = make_response( jsonify( {"message": "Endpoint not recognized!"} ), 405, )
        return resp

    uid = get_user_id()
    if uid == -1:   # User not logged in
        resp = make_response( jsonify( {"message": "Please log in to modify your appointments!"} ), 400, )
        return resp
    user_type = get_user_type()
    if(user_type == 'Customer'):    # User not SP
        resp = make_response( jsonify( {"message": "You are not permitted to use this endpoint"} ), 401, )
        return resp

    r = request
    content_type = request.headers.get('Content-Type')
    if content_type == 'application/json':  # Case for JSON request body 
        json = r.json
        appt_id = json['appt_id']
    else:   # Case for submitted form
        appt_id = r.form['appt_id']

    query = f"UPDATE amorr.appointments SET status = '{status}' WHERE appointment_id = '{appt_id}';"
    mu.query(config, query)
    resp = make_response( jsonify( {"message": f"Status for appointment {appt_id} set to {status}"} ), 200, )
    return resp
#########
# End of modify-appointment

# add-review
#########
@app.route('/review/<appt_id>', methods=['POST'])
@cross_origin(supports_credentials=True)
def add_review(appt_id):
    uid = get_user_id()
    if uid == -1:   # User not logged in
        resp = make_response( jsonify( {"message": "You must be logged in to leave a review!"} ), 400, )
        return resp

    # Fetch appointment
    query = f"SELECT * FROM amorr.appointments WHERE appointment_id = '{appt_id}'"
    appt = mu.load(config, 'amorr.appointments', query)
    if len(appt) == 0:
        resp = make_response( jsonify( {"message": "Appointment not found"} ), 404, )
        return resp

    # Check if logged in user was the customer of this appointment
    if int(appt[0]['customer_uid']) != int(uid):
        resp = make_response( jsonify( {"message": "Appointment is for a different customer!"} ), 401, )
        return resp

    # Fetch SP uid from appointment
    sp_uid = appt[0]['sp_uid']

    # Set reviewed = 1 in appointments table
    query = f"UPDATE amorr.appointments SET reviewed = '1' WHERE appointment_id = '{appt_id}'"
    mu.query(config, query)

    r = request
    content_type = request.headers.get('Content-Type')
    if content_type == 'application/json':  # Case for JSON request body 
        json = r.json
        rating = json['rating']
        review = json['review']
    else:   # Case for submitted form
        rating = r.form['rating']
        review = r.form['review']

    date = str(datetime.date.today().strftime('%Y-%m-%d'))

    new_review = {'appointment_id':[appt_id], 'reviewer_uid':[uid], 'recipient_uid':[sp_uid], 'rating':[rating], 'review':[review], 'date':[date]}
    df = pd.DataFrame.from_dict(new_review)
    mu.insert(config, 'sp_reviews', df)
    
    resp = make_response( jsonify( {"message": "Review submitted!"} ), 200, )
    return resp
#########
# End of add-review

# get-sp-reviews
#########
@app.route('/get-sp-reviews', methods=['GET'])
@cross_origin(supports_credentials=True)
def get_sp_reviews():
    if request.method == 'GET':
        return fetch_sp_reviews()
def fetch_sp_reviews():  # Fetch full name and address from database

    user_id = get_user_id()
    if user_id == -1:
        resp = make_response( jsonify( {"message": "Please log in to view your profile"} ), 400, )
        return resp

    user = mu.load(config, 'amorr.users', f'SELECT * FROM amorr.users WHERE uid = \'{user_id}\'')
    sp = mu.load(config, 'amorr.service_providers', f'SELECT * FROM amorr.service_providers WHERE uid = \'{user_id}\'')
    if len(user) == 0 or len(sp) == 0:
        resp = make_response(
            jsonify(
                {"message": "User not found!"}
            ),
            404,
        )
    else:
        query = f"""
        SELECT u.full_name, r.rating, r.date, r.review 
        FROM amorr.users as u, amorr.sp_reviews as r
        WHERE r.recipient_uid = {user_id} AND r.reviewer_uid = u.uid;
        """

        data = mu.load(config, 'amorr.sp_reviews', query=query)

        resp = make_response(jsonify(data), 200,)
    resp.headers["Content-Type"] = "application/json"
    return resp
#########
# End of get-sp-reviews

# get-sp-name-of-appt
#########
@app.route('/review/<appointment_id>', methods=['GET'])
@cross_origin(supports_credentials=True)
def get_sp_name_of_appt(appointment_id):

    uid = get_user_id()
    if uid == -1:   # User not logged in
        resp = make_response( jsonify( {"message": "Please log in!"} ), 400, )
        return resp
    user_type = get_user_type()
    if(user_type == 'Service Provider'):    # User not Customer
        resp = make_response( jsonify( {"message": "You are not permitted to use this endpoint"} ), 401, )
        return resp

    query = f"""
        SELECT full_name 
        FROM amorr.users as user, amorr.appointments as appt 
        WHERE user.uid = appt.sp_uid AND appt.appointment_id={appointment_id};
        """
    data = mu.load(config, 'amorr.users', query=query)
    if len(data) == 0:
        resp = make_response(jsonify({"message": "Appointment not found!"}), 404,)
    else:
        resp = make_response(jsonify({"full_name": data[0]['full_name']}), 200,)
    resp.headers["Content-Type"] = "application/json"
    return resp
#########
# End of get-sp-name-of-appt

# explore-sp-price-list
#########
@app.route('/explore-sp-price-list/<sp_uid>', methods=['GET'])
@cross_origin(supports_credentials=True)
def get_pricelist(sp_uid):
    query = f"SELECT service_id, name as service, price FROM amorr.services WHERE uid = '{sp_uid}'"
    data = mu.load(config, 'amorr.services', query)
    resp = make_response(jsonify(data), 200,)
    resp.headers["Content-Type"] = "application/json"
    return resp
#########
# End of explore-sp-price-list

# explore-sp-profile
#########
@app.route('/explore-sp-profile/<sp_uid>', methods=['GET'])
@cross_origin(supports_credentials=True)
def explore_sp_profile(sp_uid):
    query = f"""
            SELECT u.full_name, u.address, s.bio
            FROM users as u INNER JOIN service_providers as s
            ON u.uid = s.uid
            WHERE u.uid = {sp_uid};
            """
    data = mu.load(config, 'null', query)
    data = data[0]

    sql = f'SELECT COUNT(*) FROM amorr.sp_reviews WHERE recipient_uid = \'{sp_uid}\''
    num_ratings = mu.load(config, 'amorr.sp_reviews', query=sql)[0]['COUNT(*)']
    data['num_ratings'] = num_ratings

    sql = f'SELECT AVG(rating) FROM amorr.sp_reviews WHERE recipient_uid = \'{sp_uid}\''
    avg = mu.load(config, 'amorr.sp_reviews', query=sql)[0]['AVG(rating)']

    if avg is not None:
        avg_rating = round(mu.load(config, 'amorr.sp_reviews', query=sql)[0]['AVG(rating)'], 1)
    else:
        avg_rating = 'No reviews yet'

    data['avg_rating'] = avg_rating

    resp = make_response(jsonify(data), 200,)
    resp.headers["Content-Type"] = "application/json"
    return resp
#########
# End of explore-sp-profile

# explore-profile-photo
#########
@app.route('/explore-profile-photo/<sp_uid>', methods=['GET'])
@cross_origin(supports_credentials=True)
def get_sp_photo(sp_uid):
    pfp_path = mu.load(config, 'amorr.profile_photos', f'SELECT * FROM amorr.profile_photos WHERE uid = \'{sp_uid}\'')
    if len(pfp_path) == 0:
        resp = make_response(
            jsonify(
                {"message": f"pfp_path not found for user! (uid: {sp_uid})"}
            ),
            404,
        )
        return resp
    else:
        img_path = pfp_path[0]['pfp_path']
        filetype = img_path.rsplit('.', 1)[1].lower()   # File type without the '.'
        # print("\n\n\nPATH1 :",UPLOAD_FOLDER,f"filetype = {filetype}\n\n\n")
        
        resp = send_from_directory(UPLOAD_FOLDER, img_path, mimetype=f'image/{filetype}')
        return resp     # Should return with response code 200 if successful
#########
# End of explore-profile-photo



################################################################################################################################################
################################################################################################################################################
################################################################################################################################################

if __name__ == "__main__":
    app.run()

################################################################################################################################################
################################################################################################################################################
################################################################################################################################################