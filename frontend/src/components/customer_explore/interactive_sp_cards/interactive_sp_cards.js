import React from 'react'
import { Rating, Avatar, requirePropFactory } from '@mui/material';
import img from '../../../assets/customer_explore/sp.jpg'
import './interactive_sp_card_styles.css'
import { useNavigate, useHistory } from "react-router-dom";
function InteractiveCard({SP}) {
    let navigate = useNavigate();
    function handleClick() {
      navigate('/home')
    }

    return (
        <div id="interactive_card" onClick={handleClick}>
            <div id="avatar"><Avatar alt="Lorem Ipsum Salons" src={img} sx={{ width: 120, height: 120, mb: 1 }}/></div>

            <div id="info_section">
                <div id="sp_name">{SP.name}</div>
                <div id="card_body">
                    <div id="rating">
                        <span className="rating_num">4.0</span>
                        <Rating name="read-only" size="medium" value={4.0} precision={0.5} readOnly />
                        <span className="rating_num">({SP.num_rating})</span>
                    </div>
                    <div id="second_line">
                        <div id="services_completed"> <span>{SP.services}</span> Services Completed</div>
                        <div><span>$</span> <span>{SP.fee}</span> Transportation Fee</div>
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