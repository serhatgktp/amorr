import React from 'react'
import './explore_sp_price_list_styles.css'
import { Icon } from '@iconify/react';

const read_only_row = ( {swp, handleEditClick} ) => {
  return (
    <div className="member_list">
        <div className="service_text">
            <div className="user_service">{swp.service}</div>
        </div>
        <div className="editable_price">
            <div className="user_price">${swp.price}</div>
        </div>
    </div>
  )
}

export default read_only_row