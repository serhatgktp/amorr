import React , { useEffect, useState }from 'react';
import { Rating, Avatar } from '@mui/material';
import './sp_all_reviews.css'
import ServiceProviderReviewCard from './service_provider_review';

function SPAllReviews() {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        /*fetch("http://localhost:5000/get-sp-reviews", {credentials: 'include'}).then(response =>
          response.json().then(data => {
            setReviews(data)
          })
        );*/
        setReviews(
            [
                {
                    id: 1,
                    date: "2022-07-30",
                    full_name: "Mirabelle OwO",
                    rating: "5",
                    review: "Requested for a natural bridesmaid makeup and it was really soft and light! I really like it. Would recommend!"
                },
                {
                    id: 2,
                    date: "2022-07-29",
                    full_name: "Gawr Gura",
                    rating: "4",
                    review: "Wanted soft pink hair for my wedding day, but it was abit too dark, but only a bit! Other than that, my overall experience was very good! Thanks!"
                }
            ]
        )
      }, []);
      
    return (
        <>
            <div id="reviews_heading">Reviews</div>
            <div>
                {reviews.map(data => (
                <ServiceProviderReviewCard review={data}/>
                ))}
            </div>
        </>
    )
    }

export default SPAllReviews