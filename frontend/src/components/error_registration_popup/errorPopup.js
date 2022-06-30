import React from 'react'
import './errorPopup.css'
import { Icon } from '@iconify/react';

function errorPopup(props) {
  return (props.trigger) ? (
    <div className="errorPopup">
        <div className="overlay"></div>
        <div className="errorPopupContent">
            <div className="popupUpper">
              <Icon id="errorIcon" icon="charm:circle-cross"/>
            </div>
            <div className="popupLower">
              <h1 id="errorHeading">Error!</h1>
              <p id="errorPara">The email you entered has already been taken! Please enter a new email.</p>
              <a href="/#" id="contBtn" onClick={() => props.setTrigger(false)}>Try Again</a>
            </div>
        </div>
  </div>
  ) : "";
}

export default errorPopup