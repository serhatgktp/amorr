import React , { useEffect, useState }from 'react';
import { Rating, Avatar } from '@mui/material';
import './service_provider_review.css'

function ServiceProviderReviewCard({review}) {
    const [img, setImage] = useState(null);
    console.log(review);

    return (
        <div id="sp_review_card">
            <div id="review_card_top">
                <div id="review_info">
                    <div id="review_name">{review.full_name}</div>
                    <div><Rating name="read-only" size="medium" value={review.rating} precision={0.1} readOnly /></div>
                    <div>{review.date}</div>
                </div>
            </div>
            
            <div id="review_content">
                {review.review}
            </div>
        </div>
    )
    }

export default ServiceProviderReviewCard