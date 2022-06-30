import React from 'react';
import Navbar from './components/Navbar/Navbar.js'
import CustomerRegistration from './components/customer_registration/customer_registration.jsx';
import ServiceProviderRegistration from './components/service_provider_registration/service_provider_registration.jsx';

function App(){
  return (
    <body>
    <Navbar/>
    <ServiceProviderRegistration/>
    </body>
  )
 }
export default App;