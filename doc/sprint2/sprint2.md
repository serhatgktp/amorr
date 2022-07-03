# Sprint 2

**Sprint Goal:**

- Learn important tools/frameforks.
- Update frontent by letting users to edit their personal information. 
- Connect backend and frontend.
- Implement privilege logic.
- Have different nav-bars for the different types of user.
- Have pop-up success and failure alerts when logging or signing up.

---

**Meeting Dates:** 
- First stand-up (2022/06/14)
    - Made changes to the features in sprint 1.

- Second stand-up (2022/06/15)
    - Demo prepration.

- Third stand-up (2022/06/17)
    - Worked on provious user stories.

- Fourth stand-up (2022/06/20)
    - Worked on provious user stories.

- Fifth stand-up (2022/06/27)
    - Discussed the user stories.
    - Set up JIRA


- Sixth stand-up (2022/06/28)
    - Distributed the task among the team. 


- Seventh stand-up (2022/06/29)
    - Updated the team with the progress.

- Eighth stand-up (2022/06/30)
    - Updated the team with the progress. 

- Nineth stand-up (2022/07/02)
    - Went over the documents we need to submit.
    - Made some quick changes.

---

**Particpants:** Annanya Sharma, Christopher Nathanael, Efkan Serhat Goktepe, Jumana Fanous, Mir Safwat Ayser, Shannon Budiman, Theora Gavrila Pui

---

**The user stories we chose to work on are the following (with the breakdown and points assigned):**
-  (STAC-107) As a first time User, I want to be able to sign up with a newly registered account that securely stores my information. The following is the task breakdown: 

    - Return to frontend if email is taken + error popup/message if email is already taken.
    - Let the user know if creation is successful by success popup/message + redirect user to Login page.
    - Check for pw regex (minimum length: 8 characters) and improve address regex.
    - Set Submit Button to send Request to Flask API.
    - Set up Flask API to handle registration requests
    - **Points assigned = 8**

- (STAC-112) As a returning User, I want to be able to log back into the account that I previously registered using my username and password for the system to authenticate me and redirect me to the appropriate homepage. The following is the task breakdown:
    - Privilege Logic (Limit access to relevant actions).
    - Let the user know if login is successful by success popup/message + redirect to login page.
    - Set up Flask API to handle login requests and return sessionID to user.
    - Return to frontend if email - password is wrong + error popup/message if email - password is already taken.
    - **Points assigned = 8**

- (STAC-116) As a User, I want to be able to navigate to other pages by clicking components of the navigation bar. The follwoign is the task breakdown:
    - If the user is not logged in, the navigation bar should include clickable buttons that redirect the user to an About Us, FAQ, Contact Us, and Sign Up / Log In page.
    - If the user is logged in as a service provider, the navigation bar should include clickable buttons that redirect the user to the About Us, FAQ, Contact Us, My Appointment, dropdown for manage/logging out/delete account.
    - If the user is logged in as a customer, the navigation bar should include clickable buttons that redirect the user to the About Us, FAQ, Contact Us, Explore, My Appointments, dropdown for manage/logging out/delete account.
    - **Points assigned = 5**

- (STAC-120) As a User, I want my messages sent in the Contact Us page to be stored internally so I can receive future responses to my inquiries. The following is the task breakdown:
    - Connect frontend and backend: data is stored in the database (Full name, email, subject and message).
    -  **Points assigned = 8**

- (STAC-122) As a customer, I want to be able to see and customize my profile by adding a profile picture and changing my location so that I can update service providers whom I booked an appointment with with my picture and location. The following is the task breakdown:
    - User information section including editable components: address, and save changes button.
    - Editable profile photo.
    - get data of user to display name, rating, number of services ordered, address.
    - editing data of user accordingly in the database - address, profile photo.
    - Set up Flask API to handle profile related GET requests.
    - Set up Flask API to handle profile related POST requests.
    - **Points assigned = 40**

- (STAC-141) As a user, I want to have a profile photo attached to my account so customers/service providers can recognize me. The following is the task breakdown:
    - Set default profile photo in profile page to GET request response.
    - Editable profile photo in frontend.
    - **Points assigned = 1**

---

**Team Capacity = 70**

--- 

The table below displays who worked on which task during this sprint. 

| Ticket Number    | Description     | Assigned to:    |
| ------------- | ------------- | -------- |
| STAC-108          | Check for pw regex (minimum length: 8 characters) and improve address regex.        |  Christopher Nathanael |
| STAC-109          | Return to frontend if email is taken + error popup/message if email is already taken.        |  Jumana Fanous |
| STAC-110          | Let the user know if creation is successful by success popup/message + redirect user to Login page.        |  Theora Pui |
| STAC-128          | Set Submit Button to send Request to Flask API.        |  Christopher Nathanael |
| STAC-129          | Set up Flask API to handle registration requests.        |  Serhat Goktepe |
| STAC-113          | Privilege Logic (Limit access to relevant actions)        |  Serhat Goktepe |
| STAC-114          | Let the user know if login is successful by success popup/message + redirect to login page.        |  Theora Pui |
| STAC-130          | Set up Flask API to handle login requests and return sessionID to user.        | Serhat Goktepe  |
| STAC-133          | Return to frontend if email - password is wrong + error popup/message if email - password is already taken.        |  Jumana Fanous |
| STAC-117          | If the user is not logged in, the navigation bar should include clickable buttons that redirect the user to an About Us, FAQ, Contact Us, and Sign Up / Log In page.        | Mir Safwat Ayser  |
| STAC-118          | If the user is logged in as a service provider, the navigation bar should include clickable buttons that redirect the user to the About Us, FAQ, Contact Us, My Appointment, dropdown for manage/logging out/delete account.        |  Mir Safwat Ayser |
| STAC-119          | If the user is logged in as a customer, the navigation bar should include clickable buttons that redirect the user to the About Us, FAQ, Contact Us, Explore, My Appointments, dropdown for manage/logging out/delete account.        |  Mir Safwat Ayser |
| STAC-121          | Connect frontend and backend: data is stored in the database (Full name, email, subject and message). |  Annanya Sharma |
| STAC-123         | User information section including editable components: address, and save changes button.        | Shannon Budiman  |
| STAC-124          | Editable profile photo.        | Shannon Budiman  |
| STAC-144         |   Add POST request endpoint specifically for changing address.      | Serhat Goktepe |
| STAC-125          | Get data of user to display name, rating, number of services ordered, address.        | Shannon Budiman  |
| STAC-126          | Editing data of user accordingly in the database - address, profile photo.        |  Christopher Nathanael |
| STAC-131          | Set up Flask API to handle profile related GET requests.        |  Serhat Goktepe |
| STAC-134          | Set up Flask API to handle profile related POST requests.        | Christopher Nathanael  |
| STAC-142          | SSet default profile photo in profile page to GET request response.        | Christopher Nathanael  |

--- 
**Spikes Recorded:**
- Sprint 2 started a bit late because of the upcoming midterms and assignments.
- Issues with connecting the frontend and backend on react. 
