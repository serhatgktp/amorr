### Note: PB.md does not contain completed User Stories from Sprint 1

## Unfinished User Stories from previous Sprint carried over to Sprint 2

### As a first time User, I want to be able to sign up with a newly registered account that securely stores my information

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


### As a returning User, I want to be able to log back into the account that I previously registered using my username and password for the system to authenticate me and redirect me to the appropriate homepage.

- Error messages should be displayed if the user types a wrong username or password.

Tasks:
- Privilege Logic (Limit access to relevant actions)
- Let the user know if login is successful by success popup/message + redirect to login page
- Set up Flask API to handle login requests and return sessionID to user
- Return to frontend if email - password is wrong + error popup/message if email - password is already taken

Updated weight of user story: 8


### As a User, I want to be able to navigate to other pages by clicking components of the navigation bar

- If the user is not logged in, the navigation bar should include clickable buttons that redirect the user to an About Us, FAQ, Contact Us, and Sign Up / Log In page. 
- If the user is logged in as a service provider, the navigation bar should include clickable buttons that redirect the user to the About Us, FAQ, Contact Us, My Appointment, dropdown for manage/logging out/delete account. 
- If the user is logged in as a customer, the navigation bar should include clickable buttons that redirect the user to the About Us, FAQ, Contact Us, Explore, My Appointments, dropdown for manage/logging out/delete account.

Updated weight of user story: 5

## User Stories taken from Backlog to be done in Sprint 2

### As a User, I want my messages sent in the Contact Us page to be stored internally so I can receive future responses to my inquiries

- Connect frontend and backend: data is stored in the database (Full name, email, subject and message)

Weight of user story: 8

### As a customer, I want to be able to see and customize my profile by adding a profile picture and changing my location so that I can update service providers whom I booked an appointment with with my picture and location.

- Information such as customer name, customer rating, services ordered, address and profile picture should be present
- Customer should be able to edit address, profile picture, and click a “save changes” button to save the changes made

Tasks:
- User information section including editable components: address, and save changes button
- Editable profile photo
- Set up Flask API to handle profile related requests
- editing data of user accordingly in the database - address, profile photo
- get data of user to display name, rating, number of services ordered, address

Weight of user story: 40

### As a user, I want to have a profile photo attached to my account so customers/service providers can recognize me

- Profile Photo should be visible from the profile page
- Profile Photo should be editable from the profile page
- Profile photo should be stored so I do not have to set a picture every time I log back into my account

Tasks:
- Editable profile photo in frontend
- Set default profile photo in profile page to GET request response

Weight of user story: 1

## Remaining User Stories in the Backlog for Future Sprints

### As a logged in user, I want to be able to log out by clicking on the log out button on the navigation bar at any web pages so that other users that are not me will not be able to access the system without verifying their credentials.

- The home page and navigation bar should return to that of a user that is not logged in
- Redirection to the home page once logged out successfully

### As a user, I want to be able to delete my account and have my information removed from the system/website if I do not wish to use the service anymore.
- There should be a button that allows me to delete my account 
- The deletion should be confirmed by asking me again if I actually wish to delete my account.

### As a user, I would like to be able to communicate with my client / service provider on a chat feature after a confirmation of the service has been made, so that I can inquire and discuss the appointment further.

- Chat feature should only be enabled after a confirmation of the service has been made
- Service providers should be able to receive messages sent by the client
- Customers should be able to receive messages sent by the service providers
- Messages can include text and images

### Customer User Stories:

### As a customer, I would like to be able to filter and sort the services provided based on proximity, ratings, average price so that it is easier for me to find my desired service provider
- Customers are able to choose between different filters to their liking, results shown should correspond to the filters
- Service providers who do not satisfy the filters should not be shown to the user
- Service providers can be sorted by price, ratings, and proximity

### As a customer, I want to be able to scroll through a list of service providers after I select a type of service and apply filters from the Home page. 
- There should scrollable page where the customer can see the results
- There should be options to change and add filters and see corresponding results
- Customers should be able to see the rating of the service provider, the number of services they have completed, transportation fee, the services they provide, and average cost 

### As a customer, I want to be able to view the selected service provider’s profile with their posts and reviews so that I can select my service provider carefully and see if certain service providers have ongoing discounts, closures, promotions, etc.

- There should be an independently scrollable price list of all the services provided
- There should be a biography section which shows a short description about the service provider
- Information such as the rating of the service provider, the number of services they have completed, transportation fee, the services they provide, average - - cost, address, should be present
- Customer should be able to see posts uploaded by the service provider
- Customer should be able to see the reviews given by previous clients of the service provider
- There should be a button to request appointment

### As a customer, I want to be able to see the different available slot timings provided by the service provider so that I can book the timing which is most convenient for me, without compromising other duties that I have to fulfill. 

- There should be a list of timings (either in the format of a list or table) that the service provider provides and a customer could choose a slot and then specify the time.
- There should be a calendar (or list format) of dates that the customer can choose 
- There should be a status bar that indicates the availability of the service provider on the date and time chosen
- There should be a list of the services provided by the service provider and the customer should be able to specify the number of services requested of each service type
- The subtotal should be displayed
- There should be a button for a customer to checkout and pay

### As a customer, after requesting an appointment, I should be prompted to a payment pop up so that I can pay for the service and see the breakdown of the final payment being made to the service provider and tip them according to my satisfaction.

- Customer should fill in the name on card, card number, expiry date of the card, and CVC code
- Popup should display the name, email address, and address of the customer
- Popup should display an order summary which includes the appointment date and time and the price breakdown
- Customer should be able to click the “confirm payment” button to confirm the payment

### As a customer, I would like to see a page that contains a list of all my awaiting confirmation, confirmed, and past appointments with brief key information related to each appointment and a button to see full details of each appointment so that I can look back on past appointments or stay up to date on my upcoming appointments. 

- They must be able to click on a “More Info” button where customers will be able to see all details related to that task
- The page should have three independently scrollable sections for appointments that are awaiting confirmation, confirmed, and completed respectively
- The name of the service provider, the price, date and time of appointment should be displayed for each appointment

### As a customer, I would like to see a popup page, after clicking on the “More Info” button in the list of my appointments page, containing the full details of an appointment with a link to chat with the service provider and a button to cancel the appointment. 
- Details of the appointment should include: date requested, date confirmed, appointment status, appointment date, appointment time, appointment address, and payment method 

### As a customer, I would like to be able to rate a service that I had so that other customers can know better about the quality of service of the corresponding service provider.
- Customers are able to rate a service out of 5 stars and post text and pictures alongside this rating
- Written reviews should be able to be seen by other customers and the service provider

### As a customer, I would like to be able to see all the reviews I have previously written
- Customers are able to view a lists of previously made reviews (maybe under profile)

### Service Provider User Stories:

### As a service provider, I want to be able to view posts I have previously written including all the relevant information inside each post 
- Service Providers are able to view a lists of previously made Posts (maybe under profile) including the data contained in the respective post

### As a service provider, I want to be able to create posts under my profile where I can not only write texts but also attach images so I can keep clients updated regarding ongoing discounts, closures, promotions, etc
- Service providers should be able to create time stamped posts that include text and images attached

### As a service provider, I want to be able to view all reviews I have received including the message and rating of each review so I know how to improve my service
- Service Providers are able to view a lists of previously received Reviews (maybe under profile) including the data contained in the respective review

### As a service provider, I would like to see a page that contains a list of all my awaiting confirmation, confirmed, and past appointments with brief key information related to each appointment and a button to see full details of each appointment so that I can look back on past appointments or stay up to date on my upcoming appointments. 
- They must be able to click on a “More Info” button where customers will be able to see all details related to that task
- The page should have three independently scrollable sections for appointments that are awaiting confirmation, confirmed, and completed respectively
- The name of the customer, the price, date and time of appointment should be displayed for each appointment

### As a service provider, I would like to see a popup page, after clicking on the “More Info” button in the list of my appointments page, containing the full details of an appointment with different information specified depending on the type of appointment. 
- Details of the appointment should include: date requested, date confirmed, appointment status, appointment date, appointment time, appointment address, and payment method
- There should be information to indicate which type of appointment was selected.
- If awaiting confirmation, there should be a button to accept/reject and chat with the customer
- If appointment was rejected, there should be a button to remove the appointment from the service provider’s own list
- If the appointment is completed, there should be a button to give a rating to the customer

### As a service provider, I want to be able to see pending appointment requests where I can accept or reject requests so I can plan my schedule ahead and protect myself from suspicious clients, clients with bad ratings, etc
- Ensure that every appointment request is recorded even if service provider is not logged in
- Service providers account has a page dedicated to appointment requests
- Service providers should be able to move an appointment request from the pending section to the accepted section or dropped if rejected
- Appointment request page has 2 section/possible types of content shown
- Pending appointment requests
- Accepted appointment requests

### As a service provider, I want to be able to rate my customer that has completed an appointment so that other service providers can see their potential customer ratings before accepting/rejecting an appointment.
- Service providers are able to rate their customer out of 5 stars, but should not be able to write review



