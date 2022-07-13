import React , { useEffect, useState }from 'react';
import './service_provider_info_styles.css'
import { Icon } from '@iconify/react';
import { Rating, Avatar, requirePropFactory, useScrollTrigger } from '@mui/material';

const ServiceProviderInfo = () => {

    // initializing values
    const [user, setUser] = useState({full_name: "", address: "", total_rating: 0, num_ratings: 0, profile_photo: null});
    const [addr, setAddr] = useState('');
    const [img, setImage] = useState(null);
    const [isEdit, setIsEdit] = useState(false);
    const [fullName, setFullName] = useState('');

    // dummy get request to get data
    useEffect(() => {
        /*fetch("http://localhost:5000/get-profile", {credentials: 'include'}).then(response =>
          response.json().then(data => {
            setUser(data);
            console.log(data);
          })
        );*/
        setUser({full_name: "Lorem Ipsum Salons", address: "100 Lorem Ipsum Road - M1C 0B6", total_rating: 0, num_ratings: 0, profile_photo: null})
        setAddr("100 Lorem Ipsum Road - M1C 0B6");
        setFullName("Lorem Ipsum Salons");
        setImage(require("../../../assets/profile_photos/4.jpg"))
      }, []);

    // for handling changing profile photo
    const imageHandler = (e) => {
        const selected = e.target.files[0];

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

    return(
        <div id="service_provider_info">

            <div id="service_provider_left">
                <div><Avatar alt="Lorem Ipsum Salons" src={img} sx={{ width: 110, height: 110, mb: 1 }}/></div>
                <input type="file" name="image-upload" id="change_photo" accept="image/*" onChange={imageHandler}/>
                <div id="photo_label">
                    <label htmlFor="change_photo" className="image-upload" id="change_photo_label">Change profile photo</label>
                </div>
            </div>

            <div id="service_provider_right">

                <div id="service_provider_name">{fullName}</div>

                <div id="rating">
                    <span className="rating_num">4.5</span>
                    <Rating name="read-only" size="medium" value={4.5} precision={0.5} readOnly />
                    <span className="rating_num">(4)</span>
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