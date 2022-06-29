import React from 'react'
import './styles.css'
import { Icon, InlineIcon } from '@iconify/react';
import { Rating } from '@mui/material';

const CustomerInfo = () => {
    return(
        <div id="customer_info">

            <div id="customer_name">Sans Calibri</div>
            <div id="rating">
                <span className="rating_num">4.0</span>
                <Rating name="read-only" size="medium" value={4.5} precision={0.5} readOnly />
                <span className="rating_num">(50)</span>
            </div>
            <div> <span>75 </span>Services Ordered</div>
            
        </div>
    )
}

export default CustomerInfo