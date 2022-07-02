import React from 'react';

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
import CustomerProfile from './components/customer_profile/customer_profile'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

//'./components//'

function App(){
  return (
    <body> 
    <CustomerProfile/>
    </body>
  )
 }
export default App;