import React from 'react'
import { Rating, Avatar, requirePropFactory } from '@mui/material';
import img from '../../../assets/customer_explore/sp.jpg'
import './interactive_sp_card_styles.css'
import { useNavigate, useHistory } from "react-router-dom";
function InteractiveCard({SP}) {
    let navigate = useNavigate();
    function handleClick() {
      navigate('/explore-sp/' + SP.id)
    }

    return (
        <div id="interactive_card" onClick={handleClick}>
            <div id="avatar"><Avatar alt="Lorem Ipsum Salons" src={img} sx={{ width: 120, height: 120, mb: 1 }}/></div>

            <div id="info_section">
                <div id="sp_name">{SP.name}</div>
                <div id="card_body">
                    <div id="rating">
                        <span className="rating_num">{SP.avg_rating.toFixed(1)}</span>
                        <Rating name="read-only" size="medium" value={SP.avg_rating} precision={0.1} readOnly />
                        <span className="rating_num">({SP.num_ratings})</span>
                    </div>
                    <div id="second_line">
                        <div id="services_completed"> <span>75</span> Services Completed</div>
                        <div><span>$</span> <span>4.95</span> Transportation Fee</div>
                    </div>

                    <div id="third_line">
                        <div>{SP.services}</div>
                        <div>Average Cost <span>$$$</span></div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default InteractiveCard