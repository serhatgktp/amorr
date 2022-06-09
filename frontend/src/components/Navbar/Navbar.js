import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    
    <div className="Navbar">
       <h1 class="hdg_guide">
                <span>
                    <span>a</span>
                    <span>morr</span>
                </span>
        </h1>
      <div className="nav-items" >
        
        <a href="/home"><b>About</b></a>
        <a href="/about"><b>FAQ</b></a>
        <a href="/contact"><b>Contact</b></a>
        <a href="/explore"><b>Explore</b></a>
        <a href="/appointments"><b>My Appointments</b></a>
      </div>
    </div>
  );
};

export default Navbar;