import React from 'react'
import { Icon } from '@iconify/react';
import './appointment_card.css'

const appointment_card = ( ) => {
    return (
      <div className="appointment_card">
          <div className="customer_heading">Customer Name</div>
          <div className="details">
              <div className="individual_detail"><Icon icon="cil:money" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'20px', marginLeft: '7px', marginRight:'10px'}}/>$49.95</div>
              <div className="individual_detail"><Icon icon="bx:time" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'20px', marginLeft: '7px', marginRight:'10px'}}/>7:00PM</div>
              <div className="individual_detail"><Icon icon="uiw:date" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'20px', marginLeft: '7px', marginRight:'10px'}}/>26 July 2022</div>
          </div>
          <button id="more_info_button">More Info</button>
      </div>
    )
  }

  
export default appointment_card