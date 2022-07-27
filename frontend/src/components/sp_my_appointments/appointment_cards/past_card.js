import React from 'react'
import { Icon } from '@iconify/react';
import './appointment_card.css'

const past_card = ( {appt} ) => {
    return (
      <div className="appointment_card">
        <div className="customer_heading">Customer IwI</div>
          <div className="details">
              <div className="individual_detail"><Icon icon="cil:money" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'20px', marginLeft: '7px', marginRight:'10px'}}/>$30</div>
              <div className="individual_detail"><Icon icon="map:beauty-salon" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'20px', marginLeft: '7px', marginRight:'10px'}}/>Haircut, Massage</div>
              <div className="individual_detail"><Icon icon="bx:time" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'20px', marginLeft: '7px', marginRight:'10px'}}/>11:00AM</div>
              <div className="individual_detail"><Icon icon="uiw:date" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'20px', marginLeft: '7px', marginRight:'10px'}}/>26 June 2022</div>
              <div className="individual_detail"><Icon icon="akar-icons:location" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'20px', marginLeft: '7px', marginRight:'10px'}}/>1 Military Trail, M1C4Y7</div>
          </div>
      </div>
    )
  }

  
export default past_card