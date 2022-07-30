import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import './appointment_card.css'

const PastCard = ( {appt, handleReviewClick} ) => {    
    return (
      <div className="appointment_card">
        <div className="customer_heading">{appt.name}</div>
          <div className="details">
              <div className="individual_detail"><Icon icon="cil:money" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'20px', marginLeft: '7px', marginRight:'10px'}}/>${appt.price}</div>
              <div className="individual_detail"><Icon icon="map:beauty-salon" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'20px', marginLeft: '7px', marginRight:'10px'}}/>{appt.services}</div>
              <div className="individual_detail"><Icon icon="bx:time" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'20px', marginLeft: '7px', marginRight:'10px'}}/>{appt.time}</div>
              <div className="individual_detail"><Icon icon="uiw:date" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'20px', marginLeft: '7px', marginRight:'10px'}}/>{appt.date}</div>
              <div className="individual_detail"><Icon icon="akar-icons:location" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'20px', marginLeft: '7px', marginRight:'10px'}}/>{appt.address}</div>
          </div>
          { appt.reviewed==0 ? ( 
                <button id="mark_done_button" onClick={ (e) => handleReviewClick(e, appt)}>Write Review</button>
            ) : (
                ""
          )}
      </div>
    )
  }

  
export default PastCard