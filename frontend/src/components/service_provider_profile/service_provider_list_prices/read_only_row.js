import React from 'react'
import './service_provider_list_prices.css'
import { Icon } from '@iconify/react';

const read_only_row = ( {swp, handleEditClick} ) => {
  return (
    <div className="member_list">
        <div className="service_text">
            <div className="user_service">{swp.service}</div>
        </div>
        <div className="editable_price">
            <div className="user_price">{swp.price}</div>
        </div>
        <button id="edit_button" onClick={ (e) => handleEditClick(e, swp)}><Icon icon="mdi:pencil" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'20px', marginLeft: '7px'}}/></button>
    </div>
  )
}

export default read_only_row