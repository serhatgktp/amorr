import './review_rating.css'

import React, { useEffect } from 'react'
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
// import Axios from 'react'; 
import { useState } from "react"; 
import { Icon } from '@iconify/react';
import { useParams } from "react-router-dom";
import  { useNavigate } from 'react-router-dom';
import ReviewPopup from '../review_popup/review_popup';


const labels = {
    1: 'Poor',
    2: 'Bad',
    3: 'Ok',
    4: 'Good',
    5: 'Excellent',
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}


const ReviewRate = () => {

    let {appointment_id} = useParams();
    const uri = "http://localhost:5000/review/" + JSON.stringify(appointment_id).replaceAll("\"", '');
    const [value, setValue] = React.useState(5);
    const [hover, setHover] = React.useState(-1);
    const [spName, setSpName] = useState(''); 
    const [review, setReview] = useState('');
    const [triggerReviewPopup, setReviewPopup] = useState(false);
    const navigate = useNavigate(); 
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {
            rating: value,
            review: review
        }
        setIsPending(true);

        fetch(uri, {
            method: 'POST', 
            headers: {"Content-Type": "application/json"},
            credentials: "include",
            body: JSON.stringify(body)
        }).then(response => {
            if (response.ok){
                setReviewPopup(true); 
                setTimeout(function () {
                    setReviewPopup(false);
                    navigate('/customer-my-appointments');
                    window.location.reload(); 
                }, 1300); 
                setIsPending(false); 
            }else{
                throw new Error(response.statusTest)
            }
        }).catch(err =>{
            console.log(err)
        })
    };

    useEffect(() => {
        // get SP name
        fetch(uri, {credentials:'include'}).then(response =>
            response.json().then(data => {
                setSpName(data);
            }));
    }, []); 


    return(
        <body className='review_rating_wrapper'>
            <div className='container'>
                
                <div className="right">
                    <div className="heading">Write a Review!</div>
                    
                    <div className="box">

                        <p className='into'>Thanks for choosing <span className='a'>a</span><span className= 'morr'>morr</span>, we strive to provide the highest quality service and your feedback would be greatly appreciated as it will help us make sure we serve you and other amazing customers well in the future.</p>
                        
                        <p> Rating for <span style={{fontWeight: '600'}}>{spName.full_name}</span></p>

                        <Box
                            sx={{
                                width: 200,
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            >
                            <Rating
                                name="hover-feedback"
                                value={value}
                                precision={1}
                                getLabelText={getLabelText}
                                onChange={(event, newValue) => {
                                setValue(newValue);
                                }}
                                onChangeActive={(event, newHover) => {
                                setHover(newHover);
                                }}
                                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                            />
                            {value !== null && (
                                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                            )}
                        </Box>

                        <form onSubmit={handleSubmit}>
                            <div className="inputs">

                                <div className="input1" id="review"><textarea 
                                    className="textbox"
                                    rows="10" 
                                    cols="40" 
                                    required
                                    value={review}
                                    onChange={(e)=> setReview(e.target.value)}
                                    type="text" placeholder="Type your review here..."/>
                                </div>


                                { !isPending && <button id="service" type="submit" >Send Review <Icon icon="akar-icons:arrow-right" inline={true} style={{ verticalAlign: '-0.3em', fontSize:'28px' }}/></button>}
                                { isPending && <button disabled id="service" type="submit">Sending ... <Icon icon="akar-icons:arrow-right" inline={true} style={{ verticalAlign: '-0.3em', fontSize:'28px' }}/></button>}
                            </div>
                        </form>
                    </div>
                    
                </div>

            </div>
            <ReviewPopup trigger={triggerReviewPopup}/>
        </body>
    );
}

export default ReviewRate; 