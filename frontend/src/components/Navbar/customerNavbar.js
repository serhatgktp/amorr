import React, {useEffect} from "react";
import "./Navbar.css";
import LogoutIcon from '@mui/icons-material/Logout';
import { Avatar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
import { useRef, useState } from 'react';
import LogoutPopup from '../logout-popup/logoutPopup';

const CustomerNavbar = () => {
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [triggerLogoutPopup, setTriggerLogoutPopup] = useState(false);
  const [img, setImage] = useState(null);

  useEffect(() => {
    setImage("http://localhost:5000/get-profile-photo")
  }, []);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = (e) => {
    // e.preventDefault();
    // setTriggerLogoutPopup(true);
    // setTimeout(function () {
    //   setTriggerLogoutPopup(false);
    // }, 3000);
    
    fetch("http://localhost:5000/logout", {
        method: 'POST',
        credentials: "include",
    }).then(response => {
        if (response.ok){
            // setTriggerLogoutPopup(true);
            setTimeout(function () {
                // setTriggerLogoutPopup(false);
                window.location.reload();
            }, 1300);
        }
    })
  }

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
        <a href="/explore"><b>Explore</b></a>
        <a href="/customer-my-appointments"><b>My Appointments</b></a>
      </div>
      <div className="icon">
      <IconButton 
        className="icon"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        size="large"
        sx = {{  width: 50, height: 50}}
      ><Avatar alt="" src={img} sx={{ width: 50, height: 50, boxShadow: 3}}/>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem sx={{ fontSize: '15px', fontFamily: 'Poppins', color: 'black', backgroundColor: 'white', borderColor: '#d46f5e' }}><SettingsIcon/>  <a href="/profile"><b>Manage Account</b></a></MenuItem>
        <MenuItem sx={{fontSize: '15px',fontFamily: 'Poppins', color: 'black', backgroundColor: 'white', borderColor: '#d46f5e' }}><DeleteIcon />  <a href="/delete-account"><b>Delete Account</b></a></MenuItem>
        <MenuItem sx={{ fontSize: '15px',fontFamily: 'Poppins', color: 'black', backgroundColor: 'white', borderColor: '#d46f5e' }}><LogoutIcon />  <a  onClick={handleLogout}><b>Logout</b></a></MenuItem>
      </Menu>
      </div>
      <LogoutPopup trigger={triggerLogoutPopup}/>
    </div>
  );
};

export default CustomerNavbar;