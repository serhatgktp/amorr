import React , { useEffect, useState }from 'react';
import './service_provider_info_styles.css'
import { Icon } from '@iconify/react';
import { Rating, Avatar, Badge, styled} from '@mui/material';

const ServiceProviderInfo = () => {

    // initializing values
    const [user, setUser] = useState({full_name: "", address: "", total_rating: 0, num_ratings: 0, profile_photo: null});
    const [addr, setAddr] = useState('');
    const [img, setImage] = useState(null);
    const [isEdit, setIsEdit] = useState(false);
    const [fullName, setFullName] = useState('');
    const [numRating, setNumRating] = useState(0);
    const [rating, setRating] = useState(0);
    const [file, setFile] = useState('');

    // dummy get request to get data
    useEffect(() => {
        setImage("http://localhost:5000/get-profile-photo")
        fetch("http://localhost:5000/get-sp-profile", {credentials: 'include'}).then(response =>
          response.json().then(data => {
            setAddr(data.address);
            setFullName(data.full_name);
            setNumRating(data.num_ratings);
            setRating(data.avg_rating);
            console.log(data.num_ratings);
            console.log(data.avg_rating);
          })
        );
      }, []);

    // for handling changing profile photo
    const imageHandler = (e) => {
        const selected = e.target.files[0];
        setFile(e.target.files[0]);

        if(selected){
            let reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
            }

            reader.readAsDataURL(selected);
        }
    }
    
    // changing addr according to input
    const handleChange = (e) => {
        setAddr(e.target.value);
    }

    // exit editing mode when user presses enter or escape
    const onKeyDown = (event) => {
        if (event.key === "Enter" || event.key === "Escape"){
            setIsEdit(false);
            event.target.blur();
        }
    }
    
    // handling clicking save changes button
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEdit(false);
        e.target.blur();

        var requestbody = new Object();
        requestbody.new_address = addr;

        fetch("http://localhost:5000/edit-profile-address", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            credentials: "include",
            body: JSON.stringify(requestbody)
        }).then(response => {
            if (response.ok){
                setTimeout(function () {
                    window.location.reload();
                }, 1300);
            }
        })
    }

    const handlePicSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('pic', file)
        fetch("http://localhost:5000/upload-profile-photo", {
            method: 'POST',
            credentials: "include",
            body: data
        })
    }

    return(
        <div id="service_provider_info">
            <div id="service_provider_left">
                <form>
                    <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent={
                        <label htmlFor="change_photo" className="image-upload" id="change_photo_label"><Icon icon="mdi:pencil" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'20px'}}/></label>
                    }>
                        <div><Avatar alt="Lorem Ipsum Salons" src={img} sx={{ width: 120, height: 120, mb: 1 }} id="sp_photo"/></div>
                    </Badge>
                        <input type="file" name="pic" id="change_photo" accept="image/*" onChange={imageHandler}/>
                        <button id="upload_image" type="submit" onClick={handlePicSubmit}>Save profile photo</button>
                </form>
            </div>

            <div id="service_provider_right">

                <div id="service_provider_name">{fullName}</div>

                <div id="rating">
                    <span className="rating_num">{rating.toFixed(1)}</span>
                    <Rating name="read-only" size="medium" value={rating} precision={0.1} readOnly />
                    <span className="rating_num">({numRating})</span>
                </div>

                <div id="services_completed"> <span>75 </span>Services Completed</div>
                <div id="editable_line">
                    {!isEdit ? 
                    (
                        <div id="user_address">{addr}<button id="edit_button" onClick={ () => {setIsEdit(true)}}><Icon icon="mdi:pencil" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'20px', marginLeft: '7px'}}/></button></div>
                    ) : (
                        <div id="editable_input"><input id="new_address" value={addr} onChange={handleChange} onKeyDown={onKeyDown} /></div>
                    ) }
                    <button id="save_changes" onClick={handleSubmit}>Save Changes</button>
                </div>

            </div>
        </div>
    )
}

export default ServiceProviderInfo