# Backend Documentation

Python Dependencies:
```
pip install pymysql
pip install pandas
pip install flask
```

## 1) Configuration

The `config` dictionary is initialized with the database server credentials from `db.ini` to smoothly connect to the desired server. Changes in server credentials will only require changes in `db.ini` and no other file.

## 2) Sessions

Sessions are aggregated in the `SESSIONS` dictionary. A `sessionId` string is generated whenever a user successfully logs in.
The key/value pair `sessionId`:`User(sql_data)` is added to the `SESSIONS` dictionary after each user login.
Each entry has a maximum age of 30 minutes (1800 seconds).

## 3) Classes

### User()

Constructor: `__init__(self, sql_data)`  
    Params: Dict sql_data  
    "Initialized with dictionary `sql_data`"

Data Structure:
- str email_address
- str user_type
- str uid

"User class for managing users"

## 4) Methods

### newSessionID()
Params: None  
Return: sessionId  
"Returns a randomly-generated string that represents a logged-in user's sessionID"  

### login()
Params: None  
Returns: `attempt_login(...)` or `render_template(...)`  
"Manages GET/POST requests to the `/login` route  

### attempt_login(username,password)
Params: str username, str password  
Returns: `make_response(...)`  
"Attemps to log in user. If login is successful, redirect to the home page. Otherwise return response 'Incorrect username or password'"  

### check_credentials(username,password)
Params: str username, str password  
Returns: Bool  
"Compares arguments to user credentials in the database. If the arguments match exactly with the credentials of a user in the database, return True. Otherwise, return False."  

### show_login_page()
Params: None  
Returns: `redir  ect(/login)`
"Redirects the user to the `/login` route  

### register()
Params: None  
Returns: `do_register()` or `show_register_page()`  
"Handles GET/POST requests for the `/register` route. If GET request is received, return `show_register_page()`. Otherwise, return `do_register()` (attempt to register a new user).  

### do_register()
Params: None  
Returns: `show_register_page()` or `show_login_page()`  
"Attempt to register a new user by creating a new user entry with the parameters from the incoming POST request. Check if the username or email has already been used before creating a new user. Upon success, redirect to the `/login` route. Otherwise, return `show_register_page()`  

### show_register_page()
Params: None  
Returns: `render_template('dummy_register.html')`  
"Render the registration page"  

### get_userid()
Params: None  
Returns: Str  
"Return the userid of the user of the current session"  

### home()
Params: None  
Returns: `render_template("dummy_home.html")`  
"Render the home page."  

### admin()
Params: None  
Returns: redirect(url_for("home"))  
"Serves the purpose of a test function"  