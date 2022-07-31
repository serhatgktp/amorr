# The Frontend Documentation

How to update React Dependencies and start frontend:
```
yarn install
yarn start
```

## File Structure

The 'components' folder in src contains the folders for each page consisting of the respective .js, .jsx and .css files

Images are stored under the 'assets' folder in src within the folder corresponding to the page using the image

## Important Utils
### **Functional Components**
When using React, we greatly utilize functional components over class components as they are much easier to read and to test, with them being plain JavaScript functions. Thus, we end up with less code and make sure we always use best practices of programming. It is also easier to separate container and presentational components this way.  

<br />

### **MUI**
We also utilize the MUI, which is a library of UI components we can use to build React applications. MUI helps us make visually appealing systems quickly and easily, which also has the option for customization. For example, we use the Button component from MUI to style our buttons better. 
<br /><br />
Usage:
1. Install @mui/material and save in package.json dependencies<br />
> Installation using npm:
```
npm install @material-ui/core
```
> Installation using yarn:
```
yarn add @material-ui/core
```
2. For example, import Button component on top of .js / .jsx files: 
```
import Button from '@mui/material/Button';
```
3. Use Button component with icon name as icon parameter: 
```
<Button variant="contained">Hello World</Button>
```
4. We could also add more custom properties to style the Button component further. Properties such as: ```color, size, startIcon, endIcon, IconButton, etc.```

<br />

### **Iconify**
We also find iconify libraries to be useful when adding icons to our interface rather than "hardcoding" icons with images. For example, checkmark, cross, social media icons.<br /><br />
Usage:
1. Install @iconify/react and save in package.json dependencies<br />
> Installation using npm:
```
npm install --save-dev @iconify/react
```
> Installation using yarn:
```
yarn add --dev @iconify/react
```
2. Import Icon component on top of .js / .jsx files: 
```
import { Icon } from '@iconify/react';
```
3. Use Icon component with icon name as icon parameter: 
```
<Icon icon="mdi-light:home" />
```
4. We could also add more custom properties to style the Icon component further. Properties such as: ```inline, width, height, hFlip, vFlip, flip, rotate, color, onLoad.```

## Classes

### App.js, App.css
Returns all the working pages with routes to other pages. 

### about_us
Contains: about_us.js, styles.css
Returns a static About Us page which includes a short description of the product. 

### contact_us
Contains: contact_us.jsx, styles.css
Returns a Contact Us page and records the form sent in the database.

### contact_us_popup
Contains: contact_us_popup.jsx contact_us_popup.css
Returns a Contact Us popup to show the user that the form has been sent and to wait for redirection.

### customer_explore
Contains: interactive_sp_cards, customer_explore.jsx, customer_explore_styles.css
Returns an Explore page containing a list of all service providers with a functional search bar and functional filters based on the types of services provided. Each list is clickable. 

### customer_my_appointments
Contains: appointment_cards, my_appointments.js, my_appointments.css
Returns 3 different lists of appointments (awaiting confirmation, confirmed, past), in which for past, there is an option to leave a review if there hasn't been one yet. 

### customer_profile
Contains: customer_info, customer_profile.jsx, styles.css
Returns the profile of the customer, which has a profile picture, name, editable address, and the number of services ordered. 

### customer_registration
Contains: customer_registration.jsx, customer_registration.css
Returns the registration page for customer. 

### delete_account
Contains: delete_account.jsx, delete_account.css
Returns the delete account page, with a "Yes" or "No" option. 

### error_login_popup
Contains: ErrorLoginPopup.js, ErrorLoginPopup.css
Returns the error popup when logging in with the wrong credentials. 

### error_registration_popup
Contains: errorPopup.js, errorPopup.css
Returns the error popup when registering with an existing email in the database. 

### explore__sp_profile
Contains: explore_sp_price_list, explore_sp_profile_bio, explore_sp_profile_info, explore_sp_profile.js, explore_sp_profile_styles.css
Returns the individual service provider profile page when clicking on the interactive service provider card in the Explore page. 

### FAQ
Contains: FAQ.js, FAQ2.js, FAQpage.js, index.css
Returns the Frequently Asked Questions page. 

### home
Contains: CoverPage, Dashboard, QuickGuide, Home.js, Home_styles.css
Returns the main landing page, which is the Home page. 

### initial_login_signup_landing
Contains: initial_login_signup_landing.jsx, initial_login_signup_landing_styles.css
Returns the page for user to choose to login or signup or continue as a guest.

### initial_login
Contains: initial-login.jsx, initial-login-styles.css
Returns the page for user to choose to login as a customer or service provider. 

### initial-signup
Contains: initial-signup.jsx, initial-signup-styles.css
Returns the page for user to choose to register as a customer or service provider. 

### login-page
Contains: login-page.jsx, login-page-styles.css
Returns the login page with username and password. 

### logout-popup
Contains: logoutPopup.jsx, logoutPopup.css
Returns the popup when logging out. 

### Navbar
Contains: Navbar.js, customerNavbar.js, serviceProviderNavbar.js, Navbar.css
Returns 3 different navigation bars according to the type of user: a guest navbar, a customer navbar, a service provider navbar. 

### privacy_policy
Contains: PrivacyPolicy.js, PrivacyPolicy.css
Returns a static Privacy Policy page. 

### request_appointment
Contains: RequestAppointment.js, RequestAppointment.css, services_provided.js, services_provided.css
Returns a request appointment page which includes a calendar date picker, time picker, adding quantity to each list of services, subtotal, and checkout button. 

### review_popup
Contains: review_popup.jsx, review_popup.css
Returns a popup when a user sent a review successfully and redirects them to their My Appointments page. 

### review_rating
Contains: review_rating.jsx, review_rating.css
Returns a review page where a customer can give the service provider a rating and review for that particular appointment id. 

### service_provider_profile
Contains: service_provider_bio, service_provider_info, service_provider_list_prices, service_provider_reviews.js, service_provider_profile.jsx, service_provider_profile.css
Returns the service provider profile page in which the service provider can edit their profile picture, address, bio, and list of prices/services. 

### service_provider_registration
Contains: service_provider_registration.jsx, styles.css
Returns the registration page as a service provider. 

### sp_my_appointments
Contains: appointment_cards, my_appointments.js, my_appointments.css
Returns 3 different lists of appointments (awaiting confirmation, confirmed, past), in which for awaiting confirmation, a service provider can accept/reject the appointments, whereas for confirmed, a service provider can mark the appointment as done. 

### success_login_popup
Contains: SuccessLoginPopup.js, SuccessLoginPopup.css
Returns a popup when a user successfully logins. 

### success_registration_popup
Contains: SuccessRegistrationPopup.js, SuccessRegistrationPopup.css
Returns a popup when a user successfully registers their account. 
