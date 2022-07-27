import React from 'react'
import { Icon } from '@iconify/react';
import { IconButton } from '@mui/material';
import './appointment_card.css'

const awaiting_card = ( {appt} ) => {
    return (
      <div className="appointment_card">
        <div className="customer_heading">Customer OwO</div>
          <div className="details">
              <div className="individual_detail"><Icon icon="cil:money" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'20px', marginLeft: '7px', marginRight:'10px'}}/>$30</div>
              <div className="individual_detail"><Icon icon="map:beauty-salon" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'20px', marginLeft: '7px', marginRight:'10px'}}/>Haircut, Massage</div>
              <div className="individual_detail"><Icon icon="bx:time" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'20px', marginLeft: '7px', marginRight:'10px'}}/>11:00AM</div>
              <div className="individual_detail"><Icon icon="uiw:date" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'20px', marginLeft: '7px', marginRight:'10px'}}/>26 June 2022</div>
              <div className="individual_detail"><Icon icon="akar-icons:location" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'20px', marginLeft: '7px', marginRight:'10px'}}/>1 Military Trail, M1C4Y7</div>
          </div>
          <div className="below_buttons">
            <IconButton><Icon icon="akar-icons:circle-check-fill" inline={true} style={{ color: "#009E60", verticalAlign: '-0.2em', fontSize:'30px'}}/></IconButton>
            <IconButton><Icon icon="akar-icons:circle-x-fill" inline={true} style={{ color: "#EE4B2B", verticalAlign: '-0.2em', fontSize:'30px'}}/></IconButton>
          </div>
      </div>
    )
  }

  
export default awaiting_card