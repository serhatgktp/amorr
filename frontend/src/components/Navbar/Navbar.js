import React from "react";
import "./Navbar.css";
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    
    <div className="Navbar">
       <h1 class="logo">
                <span>
                    <span>a</span>
                    <span>morr</span>
                </span>
        </h1>
      <div className="nav-items" >
        
        <a href="/home"><b>About</b></a>
        <a href="/about"><b>FAQ</b></a>
        <a href="/contact"><b>Contact</b></a>       
      </div>
      <Button variant="contained" sx={{ fontFamily: 'Poppins', color: 'white', backgroundColor: '#d46f5e', borderColor: '#d46f5e' }}>LOG IN / SIGN UP</Button>
    </div>
  );
};

export default Navbar;