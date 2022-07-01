### Note: PB.md does not contain completed User Stories from Sprint 1

# Unfinished User Stories from previous Sprint carried over to Sprint 2

## As a first time User, I want to be able to sign up with a newly registered account that securely stores my information

- The Sign Up page should include a choice of signing up as a service provider or as a customer, followed by several information that each type of user has to fill.
- Service provider has to fill out information for the following: full name, email address, password, services provided, government-issued photo ID, and an address.
- Customer has to fill out information for the following: full name, email address,  password, government-issued photo and an address. 
- Error prompts should be displayed if the user picks a username or email address that already exists in the database. 
- Error prompts should be displayed if user enters invalid input



Tasks: 
- Check for pw regex (minimum length: 8 characters) and improve address regex
- Set Submit Button to send Request to Flask API
- Set up Flask API to handle registration requests
- Let the user know if creation is successful by success popup/message + redirect user to Login page
- Return to frontend if email is taken + error popup/message if email is already taken

Updated weight of user story: 8


## As a returning User, I want to be able to log back into the account that I previously registered using my username and password for the system to authenticate me and redirect me to the appropriate homepage.

- Error messages should be displayed if the user types a wrong username or password.

Tasks:
- Privilege Logic (Limit access to relevant actions)
- Let the user know if login is successful by success popup/message + redirect to login page
- Set up Flask API to handle login requests and return sessionID to user
- Return to frontend if email - password is wrong + error popup/message if email - password is already taken

Updated weight of user story: 8


## As a User, I want to be able to navigate to other pages by clicking components of the navigation bar

- If the user is not logged in, the navigation bar should include clickable buttons that redirect the user to an About Us, FAQ, Contact Us, and Sign Up / Log In page. 
- If the user is logged in as a service provider, the navigation bar should include clickable buttons that redirect the user to the About Us, FAQ, Contact Us, My Appointment, dropdown for manage/logging out/delete account. 
- If the user is logged in as a customer, the navigation bar should include clickable buttons that redirect the user to the About Us, FAQ, Contact Us, Explore, My Appointments, dropdown for manage/logging out/delete account.

Updated weight of user story: 5

# User Stories taken from Backlog to be done in Sprint 2

## As a User, I want my messages sent in the Contact Us page to be stored internally so I can receive future responses to my inquiries

- Connect frontend and backend: data is stored in the database (Full name, email, subject and message)

Weight of user story: 8

## As a customer, I want to be able to see and customize my profile by adding a profile picture and changing my location so that I can update service providers whom I booked an appointment with with my picture and location.


Tasks:
- User information section including editable components: address, and save changes button
- Editable profile photo
- Set up Flask API to handle profile related requests
- editing data of user accordingly in the database - address, profile photo
- get data of user to display name, rating, number of services ordered, address

Weight of user story: 40

# Remaining User Stories

