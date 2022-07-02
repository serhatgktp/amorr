import React from 'react'
import './SuccessLoginPopup.css'
import { Icon } from '@iconify/react';

function SuccessLoginPopup(props) {
  return (props.trigger) ? ( // if triggered, it will display this popup
    <div className="successLoginPopup">
        <div className="SLP_overlay"></div>
        <div className="SLP_content">
            <div className="SLP_upper">
              <Icon id="SLP_icon" icon="icon-park-outline:check-one"/>
            </div>
            <div className="SLP_lower">
              <h1 id="SLP_heading">Login Successful!</h1>
              <p id="SLP_para">Please wait while redirecting...</p>
            </div>
        </div>
    </div>
  ) : ""; // else it will show nothing
}

export default SuccessLoginPopup