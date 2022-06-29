import React from 'react'
import './SuccessPopup.css'
import { Icon } from '@iconify/react';

function SuccessPopup() {
  return (
    <div className="successPopup">
        <div className="overlay"></div>
        <div className="sucessPopupContent">
            <div className="popupUpper">
              <Icon id="successIcon" icon="icon-park-outline:check-one"/>
            </div>
            <div className="popupLower">
              <h1 id="successHeading">Success!</h1>
              <p id="successPara">Your account has been successfully created.</p>
              <a href="#" id="contBtn">Continue</a>
            </div>
        </div>
  </div>
  )
}

export default SuccessPopup