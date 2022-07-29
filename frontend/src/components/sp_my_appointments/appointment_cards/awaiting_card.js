import React from 'react'
import { Icon } from '@iconify/react';
import { IconButton } from '@mui/material';
import './appointment_card.css'

const AwaitingCard = ( {appt, handleAcceptClick, handleRejectClick} ) => {
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
          <div className="below_buttons">
            <IconButton onClick={ (e) => handleAcceptClick(e, appt)}><Icon icon="akar-icons:circle-check-fill" inline={true} style={{ color: "#009E60", verticalAlign: '-0.2em', fontSize:'30px'}}/></IconButton>
            <IconButton onClick={ (e) => handleRejectClick(e, appt)}><Icon icon="akar-icons:circle-x-fill" inline={true} style={{ color: "#EE4B2B", verticalAlign: '-0.2em', fontSize:'30px'}}/></IconButton>
          </div>
      </div>
    )
  }

  
export default AwaitingCard