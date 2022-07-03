import React , { useEffect, useState }from 'react';
import './customer_info_styles.css'
import { Icon } from '@iconify/react';
import { Rating, Avatar, requirePropFactory } from '@mui/material';
import InlineEdit from "./editable"
import image from "../../../assets/customer_profile/customer.jpg"
import pic from "../../../assets/profile_photos/4.jpg"

const CustomerInfo = () => {

    const [user, setUser] = useState({full_name: "", address: "", total_rating: 0, num_ratings: 0, profile_photo: null});

    useEffect(() => {
        fetch("http://localhost:5000/get-profile", {credentials: 'include'}).then(response =>
          response.json().then(data => {
            setUser(data);
            console.log(data);
          })
        );
      }, []);


    const [img, setImage] = useState(null);

    let address = "190 drive M1P 0B7";
    console.log(address);
    const [value, setValue] = useState(address);

    const imageHandler = (e) => {
        const selected = e.target.files[0];

        if(selected){
            let reader = new FileReader();
            reader.onload = () => {
                console.log("hello");
                setImage(reader.result);
            }

            reader.readAsDataURL(selected);
        }
    }

    return(
        <div id="customer_info">

            <div id="customer_left">
                <div><Avatar alt="Sans Calibri" src={img} sx={{ width: 100, height: 100, mb: 1 }}/></div>
                <input type="file" name="image-upload" id="change_photo" accept="image/*" onChange={imageHandler}/>
                <div id="photo_label">
                    <label htmlFor="change_photo" className="image-upload" id="change_photo_label">Change profile photo</label>
                </div>
            </div>

            <div id="customer_right">

                <div id="customer_name">{user.full_name}</div>

                <div id="rating">
                    <span className="rating_num">4.5</span>
                    <Rating name="read-only" size="medium" value={4.5} precision={0.5} readOnly />
                    <span className="rating_num">({user.num_ratings})</span>
                </div>

                <div id="services_ordered"> <span>75 </span>Services Ordered</div>
                <div id="user_address">{user.address}</div>
                <div id="editable_line">
                    <div id="editable_input"><span id="icon"><Icon icon="mdi:pencil" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'20px', marginRight: '10px'}}/></span><input id="new_address" placeholder='Enter new address'/></div>
                    <button id="save_changes">Save Changes</button>
                </div>

            </div>
        </div>
    )
}

export default CustomerInfo