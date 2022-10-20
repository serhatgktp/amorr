import React from 'react'
import './contact_us_popup.css'
import { Icon } from '@iconify/react';

function contact_us_popup(props) {
  return (props.trigger) ? ( // if triggered, it will display this popup
    <div className="ContactUsPopup">
        <div className="CUP_overlay"></div>
        <div className="CUP_content">
            <div className="CUP_upper">
              <Icon id="CUP_icon" icon="icon-park-outline:check-one"/>
            </div>
            <div className="CUP_lower">
              <h1 id="CUP_heading">Message Sent!</h1>
              <p id="CUP_para">Please wait...</p>
            </div>
        </div>
    </div>
  ) : ""; // else it will show nothing
}

export default contact_us_popup
