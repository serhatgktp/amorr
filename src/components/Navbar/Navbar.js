import React from "react";
import "./Navbar.css";
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    
    <div className="Navbar">
       <h1 class="logo">
                <span>
                  <a href="/home">
                  <span>a</span>
                    <span>morr</span>
                  </a>
                    
                </span>
        </h1>
      <div className="nav-items" >
        
        <a href="/about"><b>About</b></a>
        <a href="/FAQ"><b>FAQ</b></a>
        <a href="/contact"><b>Contact</b></a>
        {/* <a href="/profile"><b>Profile</b></a>        */}
      </div>
      <Button  variant="contained" sx={{ fontFamily: 'Poppins', color: 'white', backgroundColor: '#d46f5e', borderColor: '#d46f5e' }}> <a href="/initial-signup-landing">LOG IN / SIGN UP</a></Button>
    </div>
  );
};

export default Navbar;
