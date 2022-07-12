import React, {useState, useEffect} from 'react';

import ServiceProviderProfile from './components/service_provider_profile/service_provider_profile.jsx';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App(){

  return (
    <body>
        <ServiceProviderProfile/>
    </body>
  )
 }
export default App;
