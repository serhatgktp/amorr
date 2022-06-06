from flask import Flask, render_template, request, g, redirect, url_for, make_response
import configparser # For retrieving credentials
import pymysql as pms   # For Inserting
import mysql_utils as mu    # MySQL Helper Module
import hashlib  # For password encryption
import string   # For generating sessionIDs
import random   # For randomizing sessionIDs
import pandas as pd

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

# Generate new session
def newSessionID():
    print('Generating a new SessionID')
    letters = string.ascii_letters
    sessionId = ''.join(random.choice(letters) for i in range(256))
    print(sessionId)
    return sessionId

# Login Page
#
###
@app.route('/login', methods=['GET','POST'])
def login():
    if request.method == 'POST':
        print('Attempting login:\n' + 'username: ' + request.form['username'] + '\npassword: ' + request.form['password'])
        return attempt_login(request.form['username'],request.form['password'])
    else:
        return show_login_page()

def attempt_login(username,password):
    if check_credentials(username,password):
        if 'sessionId' in request.cookies:
            print('Pass')
        else:
            print('Fail')    
        sessionId = newSessionID()
        # user_data = d.query_assoc("SELECT * FROM login_credentials WHERE username = '" + username + "'")[0]
        user_data = mu.load(config, 'amorr.users', f'SELECT * FROM amorr.users WHERE uname = \'{username}\'')
        user = User(user_data[0])
        SESSIONS[sessionId] = user
        resp = make_response(redirect('/'))
        resp.set_cookie('sessionId', sessionId, max_age=60*30)
        return resp
    # return show_login_page(login_failed = True)
    return make_response("Incorrect username or password", 401)

def show_login_page(login_failed=False):
    #return 'Login Page'
    print("showing login page")
    return render_template('dummy_login.html', login_failed=login_failed)

def check_credentials(username, password):
    # rows = d.query('SELECT * FROM login_credentials')
    user = mu.load(config, 'amorr.users', f'SELECT * FROM amorr.users WHERE uname = \'{username}\'')
    if len(user) == 0:
        print("User does not exist")
        return False
    if user[0]['uname'] == username and user[0]['pwd'] == hashlib.md5(str(password).encode()).hexdigest():
            print('Login successful!\n')
            return True
    print('Login failed!\n')
    return False
###
#    
# End of login

# Register Page
#
###
@app.route('/register', methods=['GET','POST'])
def register():
    if request.method == 'POST':
        return do_register()
    else:
        return show_register_page()

def do_register():  # Assuming username, password, & email regex is implemented on front-end
    r = request
    email = r.form['email']
    username = r.form['username']
    password = r.form['password']
    r_password = r.form['r_password']
    privilege = r.form['privilege']

    print(username, password, r_password, privilege)

    identical_users = mu.load(config, 'amorr.users', f'SELECT * FROM amorr.users WHERE uname = \'{username}\'')
    if len(identical_users) != 0:
        print("Username already exists!")
        return show_register_page()
    identical_emails = mu.load(config, 'amorr.users', f'SELECT * FROM amorr.users WHERE email = \'{email}\'')
    if len(identical_emails) != 0:
        print("Email is already in use!")
        return show_register_page()

    new_user = {'email':[email], 'uname':[username], 'pwd':[password], 'privilege':[privilege], 'uid':['0000']}
    df = pd.DataFrame.from_dict(new_user)
    mu.insert(config, 'users', df)
    print('Registered successfully!\n')
    return show_login_page()


def show_register_page():
    return render_template('dummy_register.html')

###
#
# End of register

def get_userid():
    if 'sessionId' in request.cookies:
        if request.cookies.get('sessionId') in SESSIONS.keys():
            return SESSIONS[request.cookies.get('sessionId')].userid

################################################################################################################################################
################################################################################################################################################
################################################################################################################################################

# Home Page
@app.route("/")
def home():
    return render_template("dummy_home.html")

@app.route("/admin")
def admin():
    return redirect(url_for("home"))    # Redirect to the function passed in the string

if __name__ == "__main__":
    app.run()

################################################################################################################################################
################################################################################################################################################
################################################################################################################################################

# Classes (for now)

class User:
    def __init__(self, sql_data):
        self.username = sql_data['uname']
        self.privilege = sql_data['privilege']
        if self.privilege  == '0':
            self.privilege_title = 'Guest'
        elif self.privilege  == '1':
            self.privilege_title = 'Customer'
        elif self.privilege  == '2':
            self.privilege_title = 'Service Provider'
        elif self.privilege  == '3':
            self.privilege_title = 'Admin'
        else:
            self.privilege_title = 'Unknown'
