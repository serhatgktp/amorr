import React from 'react'
import './review_popup.css'
import { Icon } from '@iconify/react';

function review_popup(props) {
  return (props.trigger) ? ( // if triggered, it will display this popup
    <div className="ReviewPopup">
        <div className="R_overlay"></div>
        <div className="R_content">
            <div className="R_upper">
              <Icon id="R_icon" icon="icon-park-outline:check-one"/>
            </div>
            <div className="R_lower">
              <h1 id="R_heading">Thank you!</h1>
              <p id="R_para">Please wait...</p>
            </div>
        </div>
    </div>
  ) : ""; // else it will show nothing
}

export default review_popup
