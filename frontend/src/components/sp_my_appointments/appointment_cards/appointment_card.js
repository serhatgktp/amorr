import React from 'react'
import { Icon } from '@iconify/react';
import './appointment_card.css'

const appointment_card = ( {appt} ) => {
    return (
        <div className="appointment_card">
          <div className="customer_heading">{appt.name}</div>
          <div className="details">
              <div className="individual_detail"><Icon icon="cil:money" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'20px', marginLeft: '7px', marginRight:'10px'}}/>${appt.price}</div>
              <div className="individual_detail"><Icon icon="bx:time" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'20px', marginLeft: '7px', marginRight:'10px'}}/>{appt.time}</div>
              <div className="individual_detail"><Icon icon="uiw:date" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'20px', marginLeft: '7px', marginRight:'10px'}}/>{appt.date}</div>
          </div>
          <button id="more_info_button">More Info</button>
      </div>
    )
  }

  
export default appointment_card