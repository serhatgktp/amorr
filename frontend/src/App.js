import React from 'react';
import Navbar from './components/Navbar/Navbar.js'
// import CustomerRegistration from './components/customer_registration/customer_registration';
import ServiceRegistration from './components/service_provider_registration/service_provider_registration';

function App(){
  return (
    <body>
      <Navbar/>
      <ServiceRegistration/>
    </body>
  )
 }
export default App;