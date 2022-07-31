import React , { useEffect, useState }from 'react';
import { Rating, Avatar } from '@mui/material';
import './service_provider_review.css'

function ServiceProviderReviewCard() {

    const [img, setImage] = useState(null);

    return (
        <div id="sp_review_card">
            <div id="review_card_top">
                <div><Avatar alt="Sans Serif Calibri" src={img} sx={{ width: 90, height: 90, mb: 1 }} id="review_photo"/></div>
                
                <div id="review_info">
                    <div id="review_name">Sans Serif Calibri</div>
                    <div><Rating name="read-only" size="medium" value={4} precision={0.1} readOnly /></div>
                    <div>1 January 2022</div>
                </div>
            </div>
            
            <div id="review_content">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
                dicta sunt explicabo.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
                dicta sunt explicabo.
            </div>
        </div>
    )
    }

export default ServiceProviderReviewCard