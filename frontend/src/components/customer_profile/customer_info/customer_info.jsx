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
                <div><Avatar alt="Sans Calibri" src={customer} sx={{ width: 100, height: 100, mb: 2 }}/></div>
                <div id="change_photo">Change profile photo</div>
            </div>

            <div id="customer_right">

                <div id="customer_name">Sans Calibri</div>

                <div id="rating">
                    <span className="rating_num">4.5</span>
                    <Rating name="read-only" size="medium" value={4.5} precision={0.5} readOnly />
                    <span className="rating_num">(50)</span>
                </div>

                <div id="services_ordered"> <span>75 </span>Services Ordered</div>

                <div id="editable_line">
                    <div id="editable_input"><span id="icon"><Icon icon="mdi:pencil" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'20px' }}/></span><InlineEdit value={value} setValue={setValue}/></div>
                    <button id="save_changes">Save Changes</button>
                </div>

            </div>
        </div>
    )
}

export default CustomerInfo