# Backend Documentation

Python Dependencies:
```
pip install pymysql
pip install pandas
pip install flask
pip install requests
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
Returns: `attempt_login(...)`
"Manages POST request to the `/login` route  

### attempt_login(username,password)
Params: str username, str password  
Returns: JSON Response
"Attemps to log in user. Return response message based on whether login was successful.

### check_credentials(username,password)
Params: str username, str password  
Returns: Bool  
"Compares arguments to user credentials in the database. If the arguments match exactly with the credentials of a user in the database, return True. Otherwise, return False."  

### register()
Params: None  
Returns: `do_register()`
"Handles POST request for the `/register` route. Attempts to register a new user.  

### do_register()
Params: None  
Returns: JSON Response
"Attempt to register a new user by creating a new user entry with the parameters from the incoming POST request. Check if the username or email has already been used before creating a new user. Return response message based on whether registration was successful.

### get_user_id()
Params: None  
Returns: Str  
"Return the userid of the user of the current session"  

### render_homepage()
Params: None  
Returns: `return render_template('dummy_image_upload.html')`  
"Renders a page intended for testing"

### do_contact()
Params: None
Returns: JSON Response
"Handles the submitted form from the 'Contact Us' page. Stores received information in database."

### contact()
Params: None
Returns: `do_contact()`
"Calls do_contact()"

### get_profile()
Params: None
Returns: `fetch_profile()`
"Calls fetch_profile()"

### fetch_profile()
Params: None
Returns: JSON Response
"Fetches profile information of the current user"

### upload_file()
Params: None
Returns: JSON Response
"Allows current user to upload a profile picture (overwriting the previous one)"

### edit_profile_address()
Params: None
Returns: JSON Response
"Allows editing of the current user's address"

### get_pfp()
Params: None
Returns: Image file
"Fetches user's profile image"

### edit_profile_address()
Params: None
Returns: JSON Response
"Replaces user's profile address in DB with the address received in the request body"

### get_price_list()
Params: None
Returns: JSON Response
"Fetches SP's service-price list"

### check_user_type()
Params: None
Returns: JSON Response
"Indicates whether user is a Guest (not logged in), Customer, Service Provider, or Admin"

### get_sp_profile()
Params: None
Returns: JSON Response
"Fetches all information belonging to a service provider"
