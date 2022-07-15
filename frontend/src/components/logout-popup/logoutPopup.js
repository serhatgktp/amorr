import React from 'react'
import './logoutPopup.css'
import { Icon } from '@iconify/react';

function LogoutPopup(props) {
  return (props.trigger) ? (
    <div className="logoutPopup">
        <div className="overlay"></div>
        <div className="logoutPopupContent">
            <div className="logoutPopupUpper">
              <Icon id="logoutPopoutIcon" icon="ri:logout-box-r-line"/>
            </div>
            <div className="logoutPopupLower">
              <h1 id="logoutPopupHeading">Logged Out</h1>
              <p id="logoutPopupPara">You have succefully logged out of your account!</p>
              <a href="/logout" id="contBtn" onClick={() => props.setTrigger(false)}>Try Again</a>
            </div>
        </div>
  </div>
  ) : "";
}

export default LogoutPopup