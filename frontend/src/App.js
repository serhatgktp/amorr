import React, {useState, useEffect} from 'react';

import CustomerNavbar from './components/Navbar/customerNavbar.js';
import ServiceProviderNavbar from './components/Navbar/serviceProviderNavbar.js';
import Navbar from './components/Navbar/Navbar.js';
import AboutUs from './components/about_us/about_us';
import ContactUs from './components/contact_us/contact_us';
import CustomerRegistration from './components/customer_registration/customer_registration';
import ServiceProviderRegistration from './components/service_provider_registration/service_provider_registration';
import FAQ from './components/FAQ/FAQpage';
import Home from './components/home/Home';
import LoginSignupLanding from './components/initial_login_signup_landing/login_signup_landing';
import InitialLogin from './components/initial-login/initial-login';
import InitialSignUp from './components/initial-signup/initial-signup';
import Login from './components/login-page/login-page';
import CustomerProfile from './components/customer_profile/customer_profile';
import ServiceProviderProfile from './components/service_provider_profile/service_provider_profile.jsx';
import CustomerExplore from './components/customer_explore/customer_explore.jsx';
import DeleteAccount from './components/delete_account/delete_account';
import ExploreSpProfile from './components/explore__sp_profile/explore_sp_profile.js';
import RequestAppointment from './components/request_appointment/RequestAppointment';
import ServiceProviderAppointments from './components/sp_my_appointments/my_appointments';
import CustomerAppointments from './components/customer_my_appointments/my_appointments';
import ReviewRating from './components/review_rating/review_rating';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App(){
  
  const [loggedIn,setLoggedIn] = useState(false); //assuming default value is false
  const [type,setType] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/check-user-type", {credentials: 'include'}).then(response =>
    response.json().then(data => {
      console.log(data);
      console.log(data.user_type != "Guest");
      if (data.user_type == "Guest") {
        setLoggedIn(false);
        setType(false);
      }
      else if(data.user_type == "Customer"){
        setType(true);
        setLoggedIn(true);
      }else{
        setType(false);
        setLoggedIn(true);
      }
    })
    );
  }, [loggedIn, type]);

  return (
    <body>
    <div>
    {!loggedIn && !type ? <Navbar/> : ''}
    {loggedIn && type ? <CustomerNavbar/> : ''}
    {loggedIn && !type ? <ServiceProviderNavbar/>:''}
    </div>
    <Router>
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/customer-register' element={<CustomerRegistration/>} />
        <Route path='/sp-register' element={<ServiceProviderRegistration/>} />
        <Route path='/FAQ' element={<FAQ/>} />
        <Route path='/initial-signup-landing' element={<LoginSignupLanding/>} />
        <Route path='/initial-login' element={<InitialLogin/>} />
        <Route path='/initial-signup' element={<InitialSignUp/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/profile' element={<CustomerProfile/>}/>
        <Route path='/sp_profile' element={<ServiceProviderProfile/>}/>
        <Route path='/explore' element={<CustomerExplore/>}/>
        <Route path='/logout' element={<InitialLogin/>}/>
        <Route path = '/delete-account' element={<DeleteAccount/>}></Route>
        <Route path = '/appointment/:id' element={<RequestAppointment/>}></Route>
        <Route path = '/explore-sp/:id' element={<ExploreSpProfile/>}></Route>
        <Route path = '/sp-my-appointments' element={<ServiceProviderAppointments/>}></Route>
        <Route path = '/customer-my-appointments' element={<CustomerAppointments/>}></Route>
        <Route path = '/review/:appointment_id' element={<ReviewRating/>}></Route>
      </Routes>
    </Router>
    </body>
  )
 }
export default App;