import React, {useState, useEffect} from 'react';

import CustomerExplore from './components/customer_explore/customer_explore'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App(){

  return (
    <body>
    <CustomerExplore/>
    </body>
  )
 }
export default App;
