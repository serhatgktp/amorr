### Note: PB.md does not contain completed User Stories from Sprint 1 and Sprint 2

## Unfinished User Stories from previous Sprint carried over to Sprint 3

### As a User, I want to be able to set and update a profile picture for my account so future customers/service providers can recognize me easier during the day of the appointment

- Profile Photo should be visible from the profile page
- Profile Photo should be editable from the profile page
- Profile photo should be stored so I do not have to set a picture every time I log back into my account

Tasks: 
- Sending PUT request to updating the picture in the db after editing
- Storing the picture in the db 
- Handling PUT request in Flask API to update picture in the db
- Displaying the picture from initial GET request when rendering in the profile section (for customer and sp)
- Handling the GET request for profile picture in the Flask API

Updated weight of user story: 8

## User Stories taken from Backlog to be done in Sprint 3

### As a service provider, I want to be able to see my profile and customize my profile by adding a profile picture, location, type of service provided, price range, and a section where I can write any additional information

- Editable Bio and List of Prices should be accesible
- A main card displaying service provider information should be present

Tasks: 
- Editable list of services and their prices and ability to add service / price
- Editable Bio Section
- Sending POST request to edit list of services and prices / add a service and price
- Handling POST request in Flask API to handle the editing of the List of prices
- Sending GET request for the main card (name, location, etc)
- Sending GET request to retrieve the bio of the service provider
- Sending GET request to retrieve the list of prices
- Handle GET request in the Flask API for initial data fetching
- Information about the SP (rating, name etc) (Strictly Frontend, no functionality yet)
- Handling POST request in Flask API to handle the editing of the Bio
- sending POST request for editing address
- Handling GET request for list of prices

Weight of user story: 20

### As a customer, I want to be able to view the selected service provider’s profile with their bio and list of services so that I can select my service provider carefully

- There should be an independently scrollable price list of all the services provided
- There should be a biography section which shows a short description about the service provider
- Information such as the rating of the service provider, the number of services they have completed, transportation fee, the services they provide, average - - cost, address, should be present
- Customer should be able to see posts uploaded by the service provider
- Customer should be able to see the reviews given by previous clients of the service provider
- There should be a button to request appointment

Tasks:
- Display information about service provider by sending GET request for specific service provider's information
- Request an appointment button when pressed brings the user to the appointment booking page
- Handle GET request in the Flask API for initial fetching of SP information

Weight of user story: 20

### As a customer, I want to be able to scroll through a list of service providers and be able to filter my results

- Customers are able to choose between different filters to their liking, results shown should correspond to the filters
- Service providers who do not satisfy the filters should not be shown to the user
- There should scrollable page where the customer can see the results
- There should be options to change and add filters and see corresponding results
- Customers should be able to see the name, location, rating of the service provider, the number of services they have completed, the services they provide

Tasks:
- A scrollable page where customers can see a list of service providers
- Sending GET request to retrieve service providers from the database
- Handling GET request to return all service providers from the database
- Working filter and searchbar in frontend using datagrid or react .filter
- Interactive SP cards, to go to the SP profile page

Weight of user story: 20

### As a customer, I want to be able to specifically select the services I want from a specific service provider and specify the time of appointment that is most convenient for me 

- There should be a list of timings (either in the format of a list or table) that the service provider provides and a customer could choose a slot and then specify the time.
- There should be a calendar (or list format) of dates that the customer can choose 
- There should be a status bar that indicates the availability of the service provider on the date and time chosen
- There should be a list of the services provided by the service provider and the customer should be able to specify the number of services requested of each service type
- The subtotal should be displayed
- There should be a button for a customer to checkout and pay

Tasks:
- User inputs for customer to select a date and time for the appointment
- GET request to fetching services provided + prices from the db
- Handling GET request in Flask API to fetch list of services + prices from the db
- Displaying + independently scrollable card for the services provided
- Adding quantity to the services provided
- Displaying subtotal for the chosen services
- Button for checkout and payment

Weight of user story: 20

### As a logged in user, I want to be able to log out by clicking on the log out button on the navigation bar at any web pages so that other users that are not me will not be able to access the system without verifying their credentials.

- The home page and navigation bar should return to that of a user that is not logged in
- Redirection to the home page once logged out successfully

Tasks:
- Pop-up for confirming that user has been logged out
- Sending POST request from frontend to logout the user. Redirection to the home page with guest’s nav bar
- Handling POST request in flask to logout the user

Weight of user story: 3

### As a user, I want to be able to delete my account and have my information removed from the system/website if I do not wish to use the service anymore.
- There should be a button that allows me to delete my account 
- The deletion should be confirmed by asking me again if I actually wish to delete my account.

Tasks:
- Frontent for confirmation for deletion of the account
- Sending POST request from frontend to delete the info of the user from the db
- Handling POST request in flask to delete the info of the user from the db

Weight of user story: 3

## Remaining User Stories in the Backlog for Future Sprints

### As a user, I would like to be able to communicate with my client / service provider on a chat feature after a confirmation of the service has been made, so that I can inquire and discuss the appointment further.

- Chat feature should only be enabled after a confirmation of the service has been made
- Service providers should be able to receive messages sent by the client
- Customers should be able to receive messages sent by the service providers
- Messages can include text and images

### Customer User Stories:

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
- Ratings should dynamically show in the profile of the Customer


