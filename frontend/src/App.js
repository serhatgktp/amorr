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
    <Navbar/>
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

      </Routes>
    </Router>
    </body>
  )
 }
export default App;