import React from 'react'
import { Icon } from '@iconify/react';
import './service_provider_list_prices.css'

const editable_row = ( {editData, handleEditChange, handleSaveEdit} ) => {
  return (
    <div className="member_list">
         <div className="service_text">
                <div className="editable_input">
                    <input 
                        className="new_service" 
                        type="text" 
                        name="service"
                        value={editData.service} 
                        onChange={handleEditChange}/>
                </div>
        </div>
        <div className="editable_price">
                <div className="editable_input">
                    <input 
                        className="new_price" 
                        type="text" 
                        name="price"
                        value={editData.price} 
                        onChange={handleEditChange}/>
                    </div>
        </div>
        <button id="edit_button" onClick={ (e) => handleSaveEdit(e)}><Icon icon="bx:save" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'25px', marginLeft: '7px'}}/></button>
    </div>
  )
}

export default editable_row