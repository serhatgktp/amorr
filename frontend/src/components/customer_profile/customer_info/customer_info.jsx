import React , { useEffect, useState }from 'react';
import './customer_info_styles.css'
import { Icon } from '@iconify/react';
import { Rating, Avatar, Badge, styled} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CustomerInfo = () => {
    const [user, setUser] = useState({full_name: "", address: "", total_rating: 0, num_ratings: 0, profile_photo: null});
    const [addr, setAddr] = useState('')
    const [img, setImage] = useState(null);
    const [isEdit, setIsEdit] = useState(false);
    const [fullName, setFullName] = useState('');
    const [file, setFile] = useState('')

    useEffect(() => {
        setImage("http://localhost:5000/get-profile-photo");
        fetch("http://localhost:5000/get-profile", {credentials: 'include'}).then(response =>
          response.json().then(data => {
            setUser(data);
            setAddr(data.address);
            setFullName(data.full_name);
          })
        );

      }, []);

    const imageHandler = (e) => {
        const selected = e.target.files[0];
        setFile(e.target.files[0])
        console.log("file is set")
        if(selected){
            let reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
            }

            reader.readAsDataURL(selected);
        }
    }
    
    const handleChange = (e) => {
        setAddr(e.target.value)
    }

    // exit editing mode when user presses enter or escape
    const onKeyDown = (event) => {
        if (event.key === "Enter" || event.key === "Escape"){
            setIsEdit(false);
            event.target.blur();
        }
    }

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
        }).then(response => {
            if (response.ok){
                setTimeout(function () {
                    window.location.reload();
                }, 1300);
            }
        })
    }
    
    return(
        <div id="customer_info">

            <div id="customer_left">
                <form>
                    <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent={
                        <label htmlFor="change_photo" className="image-upload" id="change_photo_label"><Icon icon="mdi:pencil" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'20px'}}/></label>
                    }>
                        <div><Avatar alt="" src={img} sx={{ width: 120, height: 120, mb: 1 }} id="customer_photo"/></div>
                    </Badge>
                        <input type="file" name="pic" id="change_photo" accept="image/*" onChange={imageHandler}/>
                        <button id="upload_image" type="submit" onClick={handlePicSubmit}>Save profile photo</button>
                </form>
            </div>

            <div id="customer_right">

                <div id="customer_name">{fullName}</div>

                <div id="rating">
                    <span className="rating_num">4.5</span>
                    <Rating name="read-only" size="medium" value={4.5} precision={0.5} readOnly />
                    <span className="rating_num">(4)</span>
                </div>

                <div id="services_ordered"> <span>75 </span>Services Ordered</div>
                <div id="editable_line">
                    {!isEdit ? 
                    (
                        <div id="user_address">{addr}<button id="edit_button" onClick={ () => {setIsEdit(true)}}><Icon icon="mdi:pencil" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'20px', marginLeft: '7px'}}/></button></div>
                    ) : (
                        <div id="editable_input"><input id="new_address" value={addr} onChange={handleChange} onKeyDown={onKeyDown} /></div>
                    ) }
                    <button id="save_changes" onClick={handleSubmit}>Save Address</button>
                </div>

            </div>
        </div>
    )
}

export default CustomerInfo