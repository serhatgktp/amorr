import React from 'react'
import { Icon } from '@iconify/react';
import './service_provider_list_prices.css'

const editable_row = ( {editData, handleEditChange, handleSaveEdit, handleCancelClick} ) => {
  return (
    <div className="member_list">
         <div className="service_text">
            <input 
                className="new_service" 
                type="text" 
                name="service"
                maxlength="40"
                value={editData.service} 
                onChange={handleEditChange}/>
        </div>
        <div className="editable_price">
            <input 
                className="new_price" 
                type="number" 
                min="0"
                step=".01"
                name="price"
                value={editData.price} 
                onChange={handleEditChange}/>
        </div>
        <button id="edit_button" onClick={ (e) => handleSaveEdit(e)}><Icon icon="bx:save" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'25px', marginLeft: '7px'}}/></button>
        <button id="edit_button" onClick={ (e) => handleCancelClick()}><Icon icon="ic:outline-cancel" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'25px', marginLeft: '7px'}}/></button>
    </div>
  )
}

export default editable_row