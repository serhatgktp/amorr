import React , { useEffect, useState }from 'react';
import { Icon } from '@iconify/react';
import './service_provider_list_prices.css'
import { Divider } from '@mui/material';

const ServiceProviderListPrices = () => {

    // initializing values
    const [hairPrice, setHairPrice] = useState('$');
    const [barberPrice, setBarberPrice] = useState('$');
    // const services_with_prices = [
    //     {service: 'Hairdresser', price: null},
    //     {service: 'Barber', price: null},
    //     {service: 'Cleaner', price: null},
    //     {service: 'Massage', price: null},
    //     {service: 'Makeup', price: null},
    //     {service: 'Eyebrow Tech', price: null},
    //     {service: 'Eyelash Tech', price: null},
    //   ];
    // const list_ServicesPrices = services_with_prices.map((sp) => <li key={sp.service}>{sp.price}</li>);

    const [isEdit, setIsEdit] = useState(false);
    const [isEdit2, setIsEdit2] = useState(false);

    // changing price according to input
    const handleChange = (e) => {
        setHairPrice(e.target.value);
    }
    const handleChange2 = (e) => {
        setBarberPrice(e.target.value);
    }

    // exit editing mode when user presses enter or escape
    const onKeyDown = (event) => {
        if (event.key === "Enter" || event.key === "Escape"){
            setIsEdit(false);
            event.target.blur();
        }
    }
    const onKeyDown2 = (event) => {
        if (event.key === "Enter" || event.key === "Escape"){
            setIsEdit2(false);
            event.target.blur();
        }
    }

    // handling clicking save changes button
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEdit(false);
        e.target.blur();

        /*var requestbody = new Object();
        requestbody.new_address = newAddr;

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
        })*/
    }

    return(
        <div id="service_provider_list_prices">
            <div id="price_list_heading">Price List</div>
            <Divider id="price_list_divider" textAlign="center" variant="fullWidth" style={{width: '100%', borderBottomWidth: 2}}/>
            <div id="list_of_prices">
                <div className="member_list">
                    <div className="service_text">Hairdresser -</div>
                    <div className="editable_price">
                        {!isEdit ? 
                        (
                            <div className="user_price">{hairPrice}<button id="edit_button" onClick={ () => {setIsEdit(true)}}><Icon icon="mdi:pencil" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'20px', marginLeft: '7px'}}/></button></div>
                        ) : (
                            <div className="editable_input"><input className="new_price" value={hairPrice} onChange={handleChange} onKeyDown={onKeyDown} /></div>
                        ) }
                    </div>
                </div>
                <div className="member_list">
                    <div className="service_text">Barber -</div>
                    <div className="editable_price">
                        {!isEdit2 ? 
                        (
                            <div className="user_price">{barberPrice}<button id="edit_button" onClick={ () => {setIsEdit2(true)}}><Icon icon="mdi:pencil" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'20px', marginLeft: '7px'}}/></button></div>
                        ) : (
                            <div className="editable_input"><input className="new_price" value={barberPrice} onChange={handleChange2} onKeyDown={onKeyDown2} /></div>
                        ) }
                    </div>
                </div>
            </div>
            <button id="save_changes" onClick={handleSubmit}>Save Changes</button>
        </div>
    )
}

export default ServiceProviderListPrices