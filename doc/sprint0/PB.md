### 1) As a service provider, I want to be able to see pending appointment requests where I can accept or reject requests so I can plan my schedule ahead and protect myself from suspicious clients, clients with bad ratings, etc
- Ensure that every appointment request is recorded even if service provider is not logged in
- Service providers account has a page dedicated to appointment requests
- Service providers should be able to move an appointment request from the pending section to the accepted section or dropped if rejected
- Appointment request page has 2 section/possible types of content shown
    - Pending appointment requests
    - Accepted appointment requests

### 2) As a service provider, I want to be able to customize my profile by adding a profile picture, location, type of service provided, price range, attach more images and a section where I can write any additional information so I can attract more potential customers as they better understand the services I am providing
- Service providers should be able to customize their profile and easily view the result of the changes, similar to when you view your profile in LinkedIn
- Make sure when service provider logs out and logs back in, changes are stored

### 3) As a service provider, I want to be able to create posts under my profile where I can not only write texts but also attach images so I can keep clients updated regarding ongoing discounts, closures, promotions, etc
- Service providers should be able to create time stamped posts that include text and images attached

### 4) As a customer, I would like to be able to rate a service that I had so that other customers can know better about the quality of service of the corresponding service provider
- Customers are able to rate a service out of 5 stars and post text and pictures alongside this rating
- Written reviews should be able to be seen by other customers and the service provider

### 5) As a customer, I would like to be able to filter and sort the services provided based on proximity, ratings, average price so that it is easier for me to find my desired service provider
- Customers are able to choose between different filters to their liking, results shown should correspond to the filters
- Service providers who do not satisfy the filters should not be shown to the user
- Service providers can be sorted by price, ratings, and proximity

### 6) As a service provider, I would like to be able to communicate with my client on a chat feature after a confirmation of the service has been made, so that I can contact the client for service details and for location confirmation if I get lost.
- Chat feature should only be enabled after a confirmation of the service has been made
- Service providers should be able to receive messages sent by the client
- Client should be able to receive messages sent by the service providers
- Messages can include text and images

### 7) As a user, I want to be able to see the different available slot timings provided by the service provider so that I can book the timing which is most convenient for me, without compromising other duties that I have to fulfill. 
- There should be a list of timings (either in the format of a list or table) that the service provider provides and a user could choose a slot and then specify the time. 

### 8) As a user, I want to make sure that I am able to see what payment is being made to the service provider and tip them according to my satisfaction. 
- The page should contain the user's information to ensure that the input provided by the user is correct. 
- There should be a feature to tip the service provider if the customer liked the service they provided. 

### 9) As a user, I want to be able to see the home page without having to sign up and login, so that I can browse through the website first and decide from then on if I am interested in the services that they provide or if I am interested in joining amorr’s service providers. 
- The home page should entail a navigation bar containing buttons that will redirect the user to various other pages, a search bar in which customers can specify the service they want, and a grid of visual photos containing the different service types. 

### 10) As a user, I want to be able to navigate to other pages of the website easily by having a navigation bar at the top of every web page or a drop down menu in the case of mobile web pages. 
- If the user is not logged in, the navigation bar should include clickable buttons that redirect the user to an About Us page, List of Services page, Contact Us page, and Sign Up / Log In page. 
- If the user is logged in as a service provider, the navigation bar should include clickable buttons that redirect the user to the About Us page, Contact Us page, their List of Orders page, My Profile page, and Log out button. 
- If the user is logged in as a customer, the navigation bar should include clickable buttons that redirect the user to the About Us page, List of Services page, List of My Orders page, My Profile page, and Log Out button.

### 11) As a new user, I want to be able to create a unique account that I can log back into so that I can save and securely access the data that I have put during my login sessions.
- The Sign Up page should include a choice of signing up as a service provider or as a customer, followed by several information that each type of user has to fill.
- Service provider has to fill out information for the following: full name, username, email address, password, government-issued photo ID, a selfie for confirmation, and an address.
- Customer has to fill out information for the following: full name, username, email address, password, and an address. 
- Error messages should be displayed if the user picks a username or email address that already exists in the database. 

### 12) As a registered user, I want to be able to log in with my username and password so that the system can authenticate me and redirect me to the home page with the corresponding navigation bar according to my type of user (service provider or customer). 
- Error messages should be displayed if the user types a wrong username or password.
- As a logged in user, I want to be able to log out by clicking on the log out button on the navigation bar at any web pages so that other users that are not me will not be able to access the system without verifying their credentials.
- The home page and navigation bar should return to that of a user that is not logged in.

### 13) As a user, I want to be able to see a log/history of my previous purchased services so that I can purchase a service from the same service provider again if desired/refer a service provider to a friend/relative.
- There should be a button on my home page that will redirect me to a list of my previous purchased services. Each item in the list should contain the type of service purchased, the name of the service provider, the price of the service and the date/time the service was purchased.

### 14) As a user, I would like to be able to access a page containing the contact information of the amorr customer support team.
- There should be a 'Contact Us' page that users can view
- There won’t be a sign-in requirement for a user to view the page

### 15) As a user, I would like to be able to learn more about the CEO and the company through accessing a page that contains that information.
- There will be an ‘About Us’ page that anyone can view
- There won't be a sign-in requirement for a user to view this page

### 16) As a user, before signing up, I would like to be able to read the Terms of Service of becoming a user or service provider through a Terms of Service and privacy Policy page.
- There will be a button that takes you to a ‘Terms of Service and Privacy Policy’ page that anyone can view
- The user won’t be required to sign-in/up to view this page

### 17) As a user, I want to be able to delete my account and have my information removed from the system/website if I do not wish to use the service anymore
- There should be a button in my accounts page that allows me to delete my account. The deletion should be confirmed by asking me again if I actually wish to delete my account.

### 18) As a user, I would like to be able to see Frequently Asked Questions on the platform.
- There should be a static FAQ page that users can view
- There musn't be a sign-in requirement for a user to view the page
    
### 19) As a service provider, I would like to see a log/history of all the tasks that I have completed so far.
- There must be a page where service providers may view their (completed) task history in chronological order
- This page must be exclusive to service providers

### 20) As a service provider, I would like to see a page that contains a list of all tasks that I have accepted. I would like to be able to click each task to expand them and view the details such as time, full task description, location, name of customer, address, image of map near task address, customer notes, and a link to the chat history with the customer.
- There must be a page where service providers may view a list of their active (i.e. accepted but not yet completed) tasks
- They must be able to click on each list item to expand it or view it on a separate page
- After expanding an item, they should be able to see all details related to that task

### 21) As a service provider, I would like to see a map image of the location that I must travel to for my task.
- There must be a small box with a (preferably interactive) map that displays the task location
- This box must be exclusive to the service provider