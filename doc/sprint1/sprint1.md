# Sprint 1 

**Sprint Goal:**

- Learn important tools/frameforks.
- Create a functioning website using which a user can log in, sign-up, and see static pages such as "About Us", "Contact Us", and "FAQs" with and without logging in. 
- Have a functioning navigation bar to go from one page to another. 

---

**Meeting Dates:** 
- First stand-up (2022/05/30)
    - Discussed which user stories to work on.
    - Setting up the tools.

- Second stand-up (2022/05/31)
    - Evaluated points for the user stories.
    - Divided the user stories into tasks and assigned them to the team members.
    - Added tasks on JIRA.

- Third stand-up (2022/06/01)
    - Met with the product owner to get approval for the wireframe. 
    - Updated wireframe according to the needs of the product owner. 

- Fourth stand-up (2022/06/02)
    - Discussed CRC cards. 
    - Reviewed the final wireframe.

- Fifth stand-up (2022/06/06)
    - Went over the CRC cards.
    - Updated the team about the progress made by each member.

- Sixth stand-up (2022/06/07)
    - Updated the team about the progress made by each member. 

- Seventh stand-up (2022/06/08)
    - Discussed sprint1.md breakdown
    - Updated the team about the progress made by each member.

---

**Particpants:** Annanya Sharma, Christopher Nathanael, Efkan Serhat Goktepe, Jumana Fanous, Mir Safwat Ayser, Shannon Budiman, Theora Gavrila Pui

---

**The user stories we chose to work on are the following (with the breakdown and points assigned):**
-  As a user, I want to be able to see the home page without having to sign up and login, so that I can browse through the website first and decide from then on if I am interested in the services that they provide or if I am interested in joining amorr’s service providers. The following is the task breakdown: 

    - Front End page (Home/Explore page with the following sections: Cover page with search bar, Dashboard, Quick Guide)
    - Privilege Logic in the flask
    - **Points assigned = 13**

-  As a user, I want to be able to navigate to other pages of the website easily by having a navigation bar at the top of every web page (or a drop down menu in the case of mobile web pages.) 
If the user is not logged in, the navigation bar should include clickable buttons that redirect the user to an About Us page, List of Services page, Contact Us page, and Sign Up / Log In page. The following is the task breakdown: 
    - Navigation bar (assuming that other pages are initialized/working)
    - **Points assigned = 1**

- As a new user, I want to be able to create a unique account that I can log back into so that I can save and securely access the data that I have put during my login sessions. The following is the task breakdown:
    - Setup registration (Backend)
    - Registration Page (for both customer and service provider)
    - Check for email address if it is already taken
    - Check for regex
    - Error popup/message if email is already taken
    - Setup Profile Viewing Page
    - **Points assigned = 20**


- As a registered user, I want to be able to log in with my username and password so that the system can authenticate me and redirect me to the homepage with the corresponding navigation bar according to my type of user (service provider or customer). The following is the task breakdown:
    - Checking Database of User existance
    - Check validity of password
    -  Login Page
    - Privilege Logic
    - **Points assigned = 13**


- As a user, I would like to be able to access a page containing the contact information of the amorr customer support team. The follwoing is the task breakdown: 
    - Frontend for 'Contact Us'
    - **Points assigned = 3**

- As a user, I would like to be able to learn more about the CEO and the company by accessing a page that contains that information.The following is the task breakdown: 
    - Frontend for 'About Us'
    - **Points assigned = 3**

- As a user, before signing up, I would like to be able to read the Terms of Service of becoming a user or service provider through a Terms of Service and Privacy policy page. The following is the task breakdown: 
    - Frontend for 'Terms of Service and Privacy policy'
    - Hyperlink which navigates to the page
    - **Points assigned = 1**

- As a user, I would like to be able to see Frequently Asked Questions on the platform. The following is the task breakdown: 
    - Frontend for 'FAQ'
    - **Points assigned = 3**

---

**Team Capacity = 57**

--- 

The table below displays who worked on which task during this sprint. 

| Ticket Number    | Description     | Assigned to:    |
| ------------- | ------------- | -------- |
| STAC-66          | The home page should contain a cover page with updating heading text and a search bar.        |  Theora Pui |
| STAC-67          | The home page should contain a grid of clickable visual photos and texts containing the different service types offered.        |  Theora Pui |
| STAC-68          |  The home page should include a Quick Guide to using the website.      |  Theora Pui |
| STAC-44          |   If the user is not logged in, the navigation bar should include clickable buttons that redirect the user to an About Us page, FAQ page, Contact Us page, and Sign Up / Log In page.      |  dsfgsd |
| STAC-69          | If the user is logged in as a customer, then the navigation bar should additionally include Explore and My Appointments on the left side, a profile icon on the right side that leads to a dropdown to manage profile. delete account or logout.       |  dsfgsd |
| STAC-70          | If the user is logged in as a service provider, then the navigation bar should additionally include Home and My Appointments on the left side, a profile icon on the right side that leads to a dropdown to manage profile. delete account or logout.        |  dsfgsd |
| STAC-48          |  Error messages should be displayed if the user picks a username or email address that already exists in the database.       |  dsfgsd |
| STAC-45          |   Clicking Signup should bring the user to an initial signup page where they are prompt to either sign up as a customer or as a service provider.      |  Shannon Budiman |
| STAC-75          | Clicking login should bring the user to an initial login page where they are prompted to either login as a customer or a service provider.        |  Shannon Budiman |
| STAC-80          |  Error message should be displayed if the user fills in an invalid email or leaves one input unfilled.       |  Christopher Nathanael |
| STAC-46          |   Service provider has to fill out information for the following: full name, email address, password, government-issued photo ID, a selfie for confirmation, and an address.      |  Shannon Budiman |
| STAC-47          | Customer has to fill out information for the following: full name, email address, password, and an address.        |  Christopher Nathanael |
| STAC-82          | New users should be first prompted to login or signup, before selecting whether they would like to signup as a customer or a service provider      |   Shannon Budiman |
| STAC-71          | Implement Backend Registration. | dsfgsd |
| STAC-49         | Error messages should be displayed if the user types a wrong username or password.        |  dsfgsd |
| STAC-72          | Backend Login Implementation.        |  dsfgsd |
| STAC-81          | frontend login implmentation, user has to enter email and password           |     Shannon Budiman |
| STAC-50          |  There should be a 'Contact Us' page that users can view.       | Annanya Sharma |
| STAC-52          | There will be an ‘About Us’ page that anyone can view.        |  Jumana Fanous |
| STAC-54          | There will be a static ‘Terms of Service and Privacy Policy’ page that anyone can view.       |  Jumana Fanous |
| STAC-56          | There should be a static FAQ page that users can view.        |  dsfgsd |
| STAC-57          | There musn't be a sign-in requirement for a user to view the page.        |  dsfgsd |
| STAC-65          | Software Architecture Diagram.        |  dsfgsd |
| STAC-64          |  CRC Cards.       |  Theora Pui |
| STAC-77          |   Create sprint1.md      | Annanya Sharma |
| STAC-78          |   Complete RPM.md      |  dsfgsd |
| STAC-58          |  Initialize front end set up (React, Flask, npm, yarn)       |  Shannon Budiman |
| STAC-59          | Finalize storyboard design and accessible pages for each user type.        |  Shannon Budiman |
| STAC-60          |  Finalize storyboard design and accessible pages for each user type       |  Christopher Nathanael  |

--- 
**Spikes Recorded:**
- Few of the teammates had to uninstall a buggy version of Node.js and reinstall Node.js (16.15.0)
- Database is hosted on a local system, so everyone has to update it regularly. 
- Issues with frontend components positioning due to various screen sizes.
- React dependencies caused a lot of merge conflicts especially in yarn.lock and the json packages which had to be manually resolved
