# Sprint 3

**Sprint Goal:**

- Implementing the newly learn frameworks and tools.
- Being able to save pictures in the backend. 
- Displaying the pictures/data from the backend.
- Frontened for the appointments page, profile page for service provider
- Being able to log out from the account. 
- Being able to delete the account i.e delete data from the backend.

---

**Meeting Dates:** 
- First stand-up (2022/07/04)
    - Finished sprint 2.
    - Prepared the demo for sprint 2.

- Second stand-up (2022/07/05)
    - Selected user stories for the current sprint.
    - Picked user stories to work on.
    - Worked on pending tasks from the previous sprint.

- Third stand-up (2022/07/10)
    - Hot fixeses from previous sprint.
    - Set up JIRA.
    - Worked on pending tasks from previous sprint.
    - Started this sprints' tasks.

- Fourth stand-up (2022/07/11)
    - Updated the team with the progress. 

- Fifth stand-up (2022/07/12)
    - Updated the team with the progress. 


- Sixth stand-up (2022/07/14)
    - Updated the team with the progress. 


- Seventh stand-up (2022/06/15)
    - Updated the team with the progress.
    - Discussed the documentation.

---

**Particpants:** Annanya Sharma, Christopher Nathanael, Efkan Serhat Goktepe, Jumana Fanous, Mir Safwat Ayser, Shannon Budiman, Theora Gavrila Pui

---

**The user stories we chose to work on are the following (with the breakdown and points assigned):**
-  (STAC-97) As a user, I want to be able to delete my account and have my information removed from the system/website if I do not wish to use the service anymore. The following is the task breakdown: 

    - Frontent for confirmation for deletion of the account.
    - Sending POST request from frontend to delete the info of the user from the database.
    - Handling POST request in flask to delete the info of the user from the database.
    - **Points assigned = 3**


- (STAC-101) As a logged in user, I want to be able to log out by clicking on the log out button on the navigation bar at any web pages so that other users that are not me will not be able to access the system without verifying their credentials. The following is the breakdown:

    - Redirection to the home page with guest’s nav bar.
    - Sending POST request from frontend to logout the user.
    - Pop-up for confirming that user has been logged out.
    - Handling POST request in flask to logout the user.
    - **Points assigned = 3**
    
- (STAC-145) As a User, I want to be able to set and update a profile picture for my account so future customers/service providers can recognize me easier during the day of the appointment. The following is the breakdown:

    - Sending PUT request to updating the picture in the database after editing.
    - Displaying the picture from initial GET request when rendering in the profile section (for customer and service providers)
    - Storing the picture in the database.
    - Handling PUT request in Flask API to update picture in the database.
    - Handling the GET request for profile picture in the Flask API.
    - **Points assigned = 8**


- (STAC-89) As a service provider, I want to be able to see my profile and customize my profile by adding a profile picture, location, type of service provided, price range, and a section where I can write any additional information. The following is the breakdown:
    
    - Sending initial GET request to fetching data from db and set frontend components accordingly.
    - Displaying the data in frontend components.
    - Sending POST request to edit list of services and prices / add a service and price.
    - Sending GET request for the main card (name, location, etc).
    - Sending GET request to retrieve the bio of the service provider.
    - Sending GET request to retrieve the list of prices.
    - Editable list of services and their prices and ability to add service / price.
    - Editable Bio.
    - Handling POST request in Flask API to handle the editing of the List of prices.
    - Handling GET request for list of prices.
    - Handle GET request in the Flask API for initial data fetching.
    - Information about the SP (rating, name etc) (Strictly Frontend, no functionality yet).
    - Handling POST request in Flask API to handle the editing of the bio.
    - Sending POST request for editing address.
    - **Points assigned = 20**


- (STAC-102) As a customer, I want to be able to scroll through a list of service providers and be able to filter my results. The following is the task breakdown: 
    - A scrollable page where customers can see a list of service providers.
    - Sending GET request to retrieve service providers from the database.
    - Handling GET request to return all service providers from the database.
    - Working filter and searchbar in frontend using datagrid or react filter.
    - Interactive SP cards, to go to the SP profile page.
    - **Points assigned = 20**


---

**Team Capacity = 54**

--- 

The table below displays who worked on which task during this sprint. 

| Ticket Number    | Description     | Assigned to:    |
| ------------- | ------------- | -------- |
| STAC-147          | Sending PUT request to updating the picture in the db after editing.       | Shannon Budiman  |
| STAC-149          |  Displaying the picture from initial GET request when rendering in the profile section (for customer and sp)      |  Shannon Budiman |
| STAC-146          |   Storing the picture in the database.     |  Serhat Goktepe |
| STAC-148          |   Handling PUT request in Flask API to update picture in the database.     |  Serhat Goktepe |
| STAC-150          |   Handling the GET request for profile picture in the Flask API.     |    Serhat Goktepe |
| STAC-175          |   Frontent for confirmation for deletion of the account.     |  Annanya Sharma  |
| STAC-176          |   Sending POST request from frontend to delete the info of the user from the database.     |  Annanya Sharma |
| STAC-177          |   Handling POST request in flask to delete the info of the user from the database.     |  Annanya Sharma |
| STAC-          |        |   |
| STAC-          |        |   |
| STAC-          |        |   |
| STAC-          |        |   |
| STAC-          |        |   |
| STAC-          |        |   |
| STAC-          |        |   |
| STAC-          |        |   |
| STAC-          |        |   |
| STAC-          |        |   |
| STAC-          |        |   |
| STAC-          |        |   |
| STAC-          |        |   |
| STAC-          |        |   |
| STAC-          |        |   |
| STAC-          |        |   |
| STAC-          |        |   |
| STAC-          |        |   |
| STAC-          |        |   |
| STAC-          |        |   |
| STAC-          |        |   |
| STAC-          |        |   |
| STAC-          |        |   |
| STAC-          |        |   |



--- 
**Spikes Recorded:**
- Sprint 3 started a bit late because of the upcoming midterms and assignments.
- Issue with sending different requests from react to the server.
- Setting up profile picture and storing in the database.
