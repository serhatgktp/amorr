import React from 'react'
import './ErrorLoginPopup.css'
import { Icon } from '@iconify/react';

function ErrorLoginPopup(props) {
  return (props.trigger) ? (
    <div className="errorLoginPopup">
        <div className="overlay"></div>
        <div className="errorLoginPopupContent">
            <div className="loginpopupUpper">
              <Icon id="errorLoginIcon" icon="charm:circle-cross"/>
            </div>
            <div className="loginpopupLower">
              <h1 id="errorLoginHeading">Error!</h1>
              <p id="errorLoginPara">The email/password you entered is wrong.</p>
              <a href="/login" id="contBtn" onClick={() => props.setTrigger(false)}>Try Again</a>
            </div>
        </div>
  </div>
  ) : "";
}

export default ErrorLoginPopup