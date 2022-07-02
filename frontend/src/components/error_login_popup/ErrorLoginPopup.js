import React from 'react'
import './errorPopup.css'
import { Icon } from '@iconify/react';

function ErrorLoginPopup(props) {
  return (props.trigger) ? (
    <div className="errorPopup">
        <div className="overlay"></div>
        <div className="errorPopupContent">
            <div className="popupUpper">
              <Icon id="errorIcon" icon="charm:circle-cross"/>
            </div>
            <div className="popupLower">
              <h1 id="errorHeading">Error!</h1>
              <p id="errorPara">The email/password you entered is wrong.</p>
              <a href="/login" id="contBtn" onClick={() => props.setTrigger(false)}>Try Again</a>
            </div>
        </div>
  </div>
  ) : "";
}

export default ErrorLoginPopup