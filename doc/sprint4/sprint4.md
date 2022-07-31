# Sprint 4

**Sprint Goal:**

- Implementing the newly learn frameworks and tools.
- Displaying profile picture in nav bar.
- Add functionality to request appointments.
- Customers being able to rate and review service providers.
- Service providers being able to see list of requested, pending and past appointments.
- Customers being able to look at service providers profile. 
- Customers being able to see their requesting, confirmed and past appointments.
- Service providers being able to see all the reviews they recieved.

---

**Meeting Dates:** 
- First stand-up (2022-07-19)
    - Discussed uer stories.
    - Prepared JIRA board.
    - Prepared the demo for sprint 3.

- Second stand-up (2022-07-26)
    - Chosen tasks.

- Third stand-up (2022-07-27)
    - Updated the team with individual progress.

- Fourth stand-up (2022-07-28)
    - Updated the team with individual progress.
    - Assignned the documents to submit.

- Fifth stand-up (2022-07-29)
    - Updated the team with individual progress.

- Sixth stand-up (2022-07-30)
    - Updated the team with individual progress.
    - Review the documents that had to be submitted.

---

**Particpants:** Annanya Sharma, Christopher Nathanael, Efkan Serhat Goktepe, Jumana Fanous, Mir Safwat Ayser, Shannon Budiman, Theora Gavrila Pui

---

**The user stories we chose to work on are the following (with the breakdown and points assigned):**
-  (STAC-88) As a service provider, I would like to see a page that contains a list of all my awaiting confirmation, confirmed, and past appointments with information related to each appointment. The following is the task breakdown: 

    - Independently scrollable sections for appointments that are awaiting confirmation, confirmed, and completed.
    - Interactive individual appointment card with the appointment details.
    - Sending GET requests for awaiting confirmation, confirmed, and completed appointments.
    - Flask API GET requests for awaiting confirmation, confirmed, and completed appointments.
    - **Points assigned = 40**

-  (STAC-103) As a customer, I want to be able to view the selected service provider’s profile with their bio and list of services so that I can select my service provider carefully. The following is the task breakdown: 

    - Sending dynamic GET request for specific service provider's information.
    - Request an appointment button when pressed brings the user to the appointment booking page.
    - Handle GET request in the Flask API for initial fetching of SP information.
    - Imitate SP profile page but not editable (Strictly Frontend).
    - **Points assigned = 20**

-  (STAC-94) As a customer, I want to be able to specifically select the services I want from a specific service provider and specify the time of appointment that is most convenient for me. The following is the task breakdown: 

    - Sending GET request to fetch services provided + prices from the db.
    - Displaying scrollable services provided and their prices with ability to add quantity for each service.
    - Displaying subtotal for the chosen services and checkout button.
    - Sending POST request to add appointment.
    - Flask API POST request to add appointment.
    - Handling GET request in Flask API to fetch list of services + prices from the db.
    - User inputs for customer to select a date and time for the appointment.
    - **Points assigned = 40**

-  (STAC-91) As a customer, I would like to be able to rate a service that I had so that other customers can know better about the quality of service of the corresponding service provider. The following is the task breakdown: 

    - Sending POST request for rating and message.
    - The number of stars to give for rating and a textbox for body message
    - Flask API POST request for storing the rating, message, date of review.
    - Sending GET request for SP name.
    - Flask API GET request to get SP name.
    - **Points assigned = 13**

-  (STAC-96) As a customer, I would like to see a page that contains a list of all my awaiting confirmation, confirmed, and past appointments with information related to each appointment. The following is the task breakdown: 

    - Individual appointment cards and independent scrollable sections for appointments that are awaiting, confirmed, and past.
    - Sending GET requests for awaiting confirmation, confirmed, and completed appointments.
    - Flask API GET requests for awaiting confirmation, confirmed, and completed appointments.
    - Redirecting to respective review page using dynamic endpoints.
    - **Points assigned = 5**


-  (STAC-98) As a service provider, I want to be able to see pending appointment requests where I can accept or reject requests, and mark an appointment as done, so I can plan my schedule ahead and protect myself from suspicious clients, clients with bad ratings, etc. The following is the task breakdown: 

    - Ability to accept, reject, and mark done appointments.
    - Sending POST requests to reject / accept / mark an appointment as done.
    - Flask API POST requests to update status of appointment (if accepted change to confirmed, if rejected remove from appointment list, if mark as done move to past appointments).
    - **Points assigned = 8**

-  (STAC-138) As a service provider, I want to be able to view all reviews I have received including the message and rating of each review so I know how to improve my service. The following is the task breakdown:

    - Individual review cards: show pfp, name of customer, ratings, date, review text.
    - Sending GET request for service provider’s reviews.
    - Flask API GET request to get service provider’s reviews.
    - All reviews under service provider profile page
    - **Points assigned = 13**
    
---

**Team Capacity = 139**

--- 

The table below displays who worked on which task during this sprint. 

| Ticket Number    | Description     | Assigned to:    |
| ------------- | ------------- | -------- |
| STAC-191         | Independently scrollable sections for appointments that are awaiting confirmation, confirmed, and completed.       |  Theora Pui |
| STAC-192         | Interactive individual appointment card with the appointment details.       |  Theora Pui |
| STAC-194          | Sending GET requests for awaiting confirmation, confirmed, and completed appointments.       | Theora Pui  |
| STAC-195          | Flask API GET requests for awaiting confirmation, confirmed, and completed appointments.       | Serhat Goktepe  |
| STAC-160          | Sending dynamic GET request for specific service provider's information.       |  Christopher Nathaneal |
| STAC-161          | Request an appointment button when pressed brings the user to the appointment booking page.       | Jumana Fanous  |
| STAC-162        | Handle GET request in the Flask API for initial fetching of SP information.       | Serhat Goktepe  |
| STAC-214       | Imitate SP profile page but not editable (Strictly Frontend).       | Shannon Budiman  |
| STAC-168          | Sending GET request to fetch services provided + prices from the db.       |  Mir Safwat Ayser |
| STAC-170        | Displaying scrollable services provided and their prices with ability to add quantity for each service.       | Mir Safwat Ayser|
| STAC-173         | Displaying subtotal for the chosen services and checkout button.       |   Mir Safwat Ayser|
| STAC-215       | Sending POST request to add appointment.       |  Jumana Fanous |
| STAC-216       | Flask API POST request to add appointment.       |  Serhat Goktepe |
| STAC-169       | Handling GET request in Flask API to fetch list of services + prices from the db.       | Serhat Goktepe  |
| STAC-172       | User inputs for customer to select a date and time for the appointment.       |  Theora Pui |
| STAC-197          | Sending POST request for rating and message.       | Annanya Sharma  |
| STAC-196       | The number of stars to give for rating and a textbox for body message.       | Annanya Sharma  |
| STAC-198       | Flask API POST request for storing the rating, message, date of review.       |  serhat Goktepe |
| STAC-219       | Sending GET request for SP name.       |  Annanya Sharma |
| STAC-221       | Flask API GET request to get SP name.       | Theora Pui  |
| STAC-200       | Individual appointment cards and independent scrollable sections for appointments that are awaiting, confirmed, and past.       |  Theora Pui |
| STAC-202     | Sending GET requests for awaiting confirmation, confirmed, and completed appointments.       |  Theora Pui |
| STAC-203       | Flask API GET requests for awaiting confirmation, confirmed, and completed appointments.       |  Serhat Goktepe |
| STAC-220       | Redirecting to respective review page using dynamic endpoints.       | Theora Pui  |
| STAC-204          | Ability to accept, reject, and mark done appointments.       | Theora Pui  |
| STAC-205       | Sending POST requests to reject / accept / mark an appointment as done.       | Theora Pui  |
| STAC-206       | Flask API POST requests to update status of appointment (if accepted change to confirmed, if rejected remove from appointment list, if mark as done move to past appointments).      | Serhat Goktepe |
| STAC-207         | Individual review cards: show pfp, name of customer, ratings, date, review text.       |  Shannon Budiman |
| STAC-208       | Sending GET request for service provider’s reviews.       | Shannon Budiman  |
| STAC-209       | Flask API GET request to get service provider’s reviews.       |  Theora Pui |
| STAC-217       | All reviews under service provider profile page.       | Shannon Budiman   |

--- 
**Spikes Recorded:**
- Sprint 3 started a bit late because of the c01 assignment.
