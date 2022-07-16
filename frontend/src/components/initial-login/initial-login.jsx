import React from 'react'
import './initial-login-styles.css'
import { Icon, InlineIcon } from '@iconify/react';
import  { useNavigate } from 'react-router-dom'
import { useRef, useState, useEffect} from 'react';
import LogoutPopup from '../logout-popup/logoutPopup';

const InitialLogin = () => {
    // For redirection

    // Initial Settings for Logout Popup is FALSE, so the logout Popup is not rendered
    const [triggerLogoutPopup, setTriggerLogoutPopup] = useState(false);

    const navigate = useNavigate();
    const handleLoginClick = (e) => {
        navigate('/login');
        setTriggerLogoutPopup(true);
        console.log("works");
    }

    return(
        <body className='initial_login'>
            <div className='tools'></div>
            <div id="container">
                <div id="slogan">
                    <div className="Heading">Beauty services <br />at your <span id="doorstep">doorstep.</span></div>
                    <div className="Subheading">Hairdressers, Barbers, Masseurs, Makeup Artists, <br/>Eyebrow and Eyelash techs, and more</div>
                </div>

                <div id="LoginCard">
                    <div>
                        <div id="LoginPrompt">Weclome back!</div>
                        <div id="LoginSubheading">I am a...</div>
                    </div>
                    <br/>
                    <button id="service" onClick={handleLoginClick}><Icon icon="bx:store" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'28px' }}/> SERVICE PROVIDER</button>
                    <br/>
                    <button id="customer" onClick={handleLoginClick}><Icon icon="bi:person-fill" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'28px' }}/> CUSTOMER</button>
                </div>
            </div>
            <LogoutPopup trigger={triggerLogoutPopup}/>
        </body>
    )
}

export default InitialLogin