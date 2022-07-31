import React , { useEffect, useState }from 'react';
import { Icon } from '@iconify/react';
import "./explore_sp_profile_info_styles.css"
import { Rating, Avatar, Badge, styled} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ExploreSpInfo = ({ id }) => {

    let navigate = useNavigate();
    function handleClick(){
        navigate('/appointment/' + id)
    }
    
    // initializing values
    const [addr, setAddr] = useState('');
    const [img, setImage] = useState(null);
    const [isEdit, setIsEdit] = useState(false);
    const [fullName, setFullName] = useState('');
    const [numRating, setNumRating] = useState(0);
    const [rating, setRating] = useState(0);
    const [file, setFile] = useState('');

    // dummy get request to get data
    useEffect(() => {
        setImage(`http://localhost:5000/explore-profile-photo/${id}`)
        fetch(`http://localhost:5000/explore-sp-profile/${id}`, {credentials: 'include'}).then(response =>
          response.json().then(data => {
            setAddr(data.address);
            setFullName(data.full_name);
            setNumRating(data.num_ratings);
            setRating(data.avg_rating);
            console.log(data.num_ratings);
            console.log(data.avg_rating);
          })
        );
        setAddr("100 Lorem Ipsum Road - M1C 0B7");
        setFullName("Lorem Ipsum Salons");
        setNumRating(50);
        setRating(4.2);
      }, []);

    return(
        <div id="service_provider_info">
            <div id="service_provider_left">
                <form>
                    <div><Avatar alt="Lorem Ipsum Salons" src={img} sx={{ width: 150, height: 150, mb: 1 }} id="sp_photo"/></div>
                </form>
            </div>

            <div id="service_provider_right">
                <div id="first_line">
                    <div id="service_provider_name">{fullName}</div>
                    <div><button id="req_appointment" onClick={handleClick}>Request an Appointment</button></div>
                </div>
                <div id="rating">
                    <span className="rating_num">{rating.toFixed(1)}</span>
                    <Rating name="read-only" size="medium" value={rating} precision={0.1} readOnly />
                    <span className="rating_num">({numRating})</span>
                </div>

                <div id="services_completed"> <span>75 </span>Services Completed</div>
                <div id="editable_line">
                        <div id="user_address">{addr}</div>
                </div>

            </div>
        </div>
    )
}

export default ExploreSpInfo