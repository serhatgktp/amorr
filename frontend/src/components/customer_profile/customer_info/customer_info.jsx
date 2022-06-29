import React , { useState }from 'react';
import './styles.css'
import { Icon, InlineIcon } from '@iconify/react';
import { Rating, Avatar } from '@mui/material';
import customer from "../../../assets/customer_profile/customer.jpg";
import InlineEdit from "./editable"

const CustomerInfo = () => {

    const address = "100 Lorem Ipsum Road - M1C 0B7"
    const [value, setValue] = useState(address);

    return(
        <div id="customer_info">
            <div id="customer_left">
                <div><Avatar alt="Sans Calibri" src={customer} sx={{ width: 100, height: 100 }}/></div>
                <div id="change_photo">Change profile photo</div>
            </div>
            <div id="customer_name">Sans Calibri</div>
            <div id="rating">
                <span className="rating_num">4.5</span>
                <Rating name="read-only" size="medium" value={4.5} precision={0.5} readOnly />
                <span className="rating_num">(50)</span>
            </div>
            <div> <span>75 </span>Services Ordered</div>
            <InlineEdit value={value} setValue={setValue}/>
        </div>
    )
}

export default CustomerInfo