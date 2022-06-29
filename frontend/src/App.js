import React from 'react';
import Navbar from './components/Navbar/Navbar.js'
import Home from './components/home/Home';
import SuccessPopup from './components/success_registration_popup/SuccessPopup.js';

function App(){
  return (
    <body>
    <Navbar/>
    <SuccessPopup/>
    </body>
  )
 }
export default App;