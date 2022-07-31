### Note: PB.md does not contain completed User Stories from Sprint 1, 2, 3

## Unfinished User Stories from previous Sprint carried over to Sprint 4

### As a customer, I want to be able to view the selected service provider’s profile with their bio and list of services so that I can select my service provider carefully

- There should be an independently scrollable price list of all the services provided
- There should be a biography section which shows a short description about the service provider
- Information such as the rating of the service provider, the number of services they have completed, transportation fee, the services they provide, average - - cost, address, should be present
- Customer should be able to see posts uploaded by the service provider
- Customer should be able to see the reviews given by previous clients of the service provider
- There should be a button to request appointment

Tasks:
- Imitate SP profile page but not editable (Strictly Frontend)
- Request an appointment button when pressed brings the user to the appointment booking page
- Sending dynamic GET request for specific service provider's information
- Handle GET request in the Flask API for initial fetching of SP information

Weight of user story: 20


### As a customer, I want to be able to specifically select the services I want from a specific service provider and specify the time of appointment that is most convenient for me 

- There should be a list of timings (either in the format of a list or table) that the service provider provides and a customer could choose a slot and then specify the time.
- There should be a calendar (or list format) of dates that the customer can choose 
- There should be a list of the services provided by the service provider and the customer should be able to specify the number of services requested of each service type
- The subtotal should be displayed
- There should be a button for a customer to checkout and pay

Tasks:
- User inputs for customer to select a date and time for the appointment
- Displaying scrollable services provided and their prices with ability to add quantity for each service
- Displaying subtotal for the chosen services and checkout button
- Sending GET request to fetch services provided + prices from the db
- Handling GET request in Flask API to fetch list of services + prices from the db
- Sending POST request to add appointment
- Flask API POST request to add appointment

Weight of user story: 40

## User Stories taken from Backlog to be done in Sprint 4

### As a service provider, I would like to see a page that contains a list of all my awaiting confirmation, confirmed, and past appointments with information related to each appointment.

- The page should have three independently scrollable sections for appointments that are awaiting for confirmation, confirmed, and completed respectively
- The name of the customer, total price, list of services, time, date and address of appointment should be displayed for each appointment

Tasks: 
- Interactive individual appointment card with the appointment details
- Independently scrollable sections for appointments that are awaiting confirmation, confirmed, and completed
- Sending GET requests for awaiting confirmation, confirmed, and completed appointments
- Flask API GET requests for awaiting confirmation, confirmed, and completed appointments

Updated weight of user story: 40

### As a customer, I would like to see a page that contains a list of all my awaiting confirmation, confirmed, and past appointments with information related to each appointment.

- The page should have three independently scrollable sections for appointments that are awaiting for confirmation, confirmed, and completed respectively
- The name of the service provider, total price, list of services, time, date and address of appointment should be displayed for each appointment
- There should be a "Make a Review" button for completed appointments that have not been reviewed by the customer

Tasks: 
- Individual appointment cards and independent scrollable sections for appointments that are awaiting, confirmed, and past
- Sending GET requests for awaiting confirmation, confirmed, and completed appointments
- Flask API GET requests for awaiting confirmation, confirmed, and completed appointments
- Redirecting to respective review page using dynamic endpoints

Updated weight of user story: 5

### As a service provider, I want to be able to see pending appointment requests where I can accept or reject requests, and mark an appointment as done, so I can plan my schedule ahead and protect myself from suspicious clients, clients with bad ratings, etc

- Service providers should be able to move an appointment request from the pending section to the accepted section or removed if rejected
- Appointment requests should have 2 selections/buttons: accept or reject

Tasks: 
- Ability to accept, reject, and mark done appointments
- Sending POST requests to reject / accept / mark an appointment as done
- Flask API POST requests to update status of appointment (if accepted change to confirmed, if rejected remove from appointment list, if mark as done move to past appointments).

Updated weight of user story: 8

### As a customer, I would like to be able to rate a service that I had so that other customers can know better about the quality of service of the corresponding service provider

- Customers should be able to see the name of the service provider the review is for
- Customers are able to rate a service out of 5 stars and post text alongside this rating

Tasks: 
- The number of stars to give for rating and a textbox for body message
- Sending POST request for rating and message
- Sending GET request for SP name
- Flask API POST request for storing the rating, message, date of review
- Flask API GET request to get SP name

Updated weight of user story: 13

### As a service provider, I want to be able to view all reviews I have received including the message and rating of each review so I know how to improve my service

- The list of reviews should appear under the service provider’s profile on both the customer and service provider’s side. 

Tasks: 
- Individual review cards: show pfp, name of customer, ratings, date, review text
- All reviews under service provider profile page
- Sending GET request for service provider’s reviews
- Flask API GET request to get service provider’s reviews

Updated weight of user story: 13


## Remaining User Stories in the Backlog (Delighter/Extra Features)

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

### As a customer, I would like to see a popup page, after clicking on the “More Info” button in the list of my appointments page, containing the full details of an appointment with a link to chat with the service provider and a button to cancel the appointment. 
- Details of the appointment should include: date requested, date confirmed, appointment status, appointment date, appointment time, appointment address, and payment method 

### As a customer, I would like to be able to see all the reviews I have previously written
- Customers are able to view a lists of previously made reviews (maybe under profile)

### Service Provider User Stories:

### As a service provider, I want to be able to view posts I have previously written including all the relevant information inside each post 
- Service Providers are able to view a lists of previously made Posts (maybe under profile) including the data contained in the respective post

### As a service provider, I want to be able to create posts under my profile where I can not only write texts but also attach images so I can keep clients updated regarding ongoing discounts, closures, promotions, etc
- Service providers should be able to create time stamped posts that include text and images attached

### As a service provider, I would like to see a popup page, after clicking on the “More Info” button in the list of my appointments page, containing the full details of an appointment with different information specified depending on the type of appointment. 
- Details of the appointment should include: date requested, date confirmed, appointment status, appointment date, appointment time, appointment address, and payment method
- There should be information to indicate which type of appointment was selected.
- If awaiting confirmation, there should be a button to accept/reject and chat with the customer
- If appointment was rejected, there should be a button to remove the appointment from the service provider’s own list
- If the appointment is completed, there should be a button to give a rating to the customer

### As a service provider, I want to be able to rate my customer that has completed an appointment so that other service providers can see their potential customer ratings before accepting/rejecting an appointment.
- Service providers are able to rate their customer out of 5 stars, but should not be able to write review
- Ratings should dynamically show in the profile of the Customer
