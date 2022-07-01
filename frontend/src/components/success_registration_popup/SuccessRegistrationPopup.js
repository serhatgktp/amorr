import React from 'react'
import './SuccessRegistrationPopup.css'
import { Icon } from '@iconify/react';

function SuccessRegistrationPopup(props) {
  return (props.trigger) ? ( // if triggered, it will display this popup
    <div className="successRegistrationPopup">
        <div className="SRP_overlay"></div>
        <div className="SRP_content">
            <div className="SRP_upper">
              <Icon id="SRP_icon" icon="icon-park-outline:check-one"/>
            </div>
            <div className="SRP_lower">
              <h1 id="SRP_heading">Success!</h1>
              <p id="SRP_para">Your account has been successfully created.</p>
              <a href="#" id="SRP_contBtn">Continue</a>
            </div>
        </div>
  </div>
  ) : ""; // else it will show nothing
}

export default SuccessRegistrationPopup