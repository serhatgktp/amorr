import React from 'react'
import './SuccessLoginPopup.css'
import { Icon } from '@iconify/react';

function SuccessLoginPopup(props) {
  return (props.trigger) ? ( // if triggered, it will display this popup
    <div className="successPopup">
        <div className="overlay"></div>
        <div className="sucessPopupContent">
            <div className="popupUpper">
              <Icon id="successIcon" icon="icon-park-outline:check-one"/>
            </div>
            <div className="popupLower">
              <h1 id="successHeading">Login Successful!</h1>
              <p id="successPara">Please wait while redirecting...</p>
            </div>
        </div>
    </div>
  ) : ""; // else it will show nothing
}

export default SuccessLoginPopup