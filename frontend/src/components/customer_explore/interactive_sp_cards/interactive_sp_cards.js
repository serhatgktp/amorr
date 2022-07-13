import React from 'react'
import { Rating, Avatar, requirePropFactory } from '@mui/material';
import img from '../../../assets/customer_explore/sp.jpg'
import './interactive_sp_card_styles.css'
function InteractiveCard({SP}) {
  return (
    <div id="interactive_card">
        <div id="avatar"><Avatar alt="Lorem Ipsum Salons" src={img} sx={{ width: 100, height: 100, mb: 1 }}/></div>
        <div id="info_section">
            <div id="sp_name">Lorem Ipsum Salons</div>
            <div id="card_body">
                <div id="rating">
                    <span className="rating_num">4.0</span>
                    <Rating name="read-only" size="medium" value={4.0} precision={0.5} readOnly />
                    <span className="rating_num">(50)</span>
                </div>
                <div id="second_line">
                    <div id="services_completed"> <span>75 </span>Services Completed</div>
                    <div><span>$4.95</span> Transportation Fee</div>
                </div>

                <div id="third_line">
                    <div>Hairdresser, Makeup and more</div>
                    <div>Average Cost <span>$$$</span></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InteractiveCard