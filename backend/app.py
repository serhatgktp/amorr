from flask import Flask, render_template, request, g, redirect, url_for, make_response, jsonify
import configparser # For retrieving credentials
import pymysql as pms   # For Inserting
import mysql_utils as mu    # MySQL Helper Module
import hashlib  # For password encryption
import string   # For generating sessionIDs
import random   # For randomizing sessionIDs
import pandas as pd
from flask import Flask, jsonify
from flask_cors import CORS, cross_origin


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

# Session Info & User Privileges
SESSIONS = dict() # Contains session_id and user_id
PRIVILEGES = {"Guest":0, "Customer":1, "Service Provider":2, "Admin":3,}

# Initialize Flask App
app = Flask(__name__)
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
    print("identical_emails:", identical_emails, len(identical_emails))

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
        mu.insert(config, 'users', df)
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

def get_userid():
    if 'sessionId' in request.cookies:
        if request.cookies.get('sessionId') in SESSIONS.keys():
            return SESSIONS[request.cookies.get('sessionId')].userid

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
        if self.user_type  == 'Customer':
            self.privilege_title = 'Customer'
        elif self.user_type  == 'Service Provider':
            self.privilege_title = 'Service Provider'
        elif self.user_type  == 'Admin':
            self.privilege_title = 'Admin'
        else:
            self.privilege_title = 'Unknown'
