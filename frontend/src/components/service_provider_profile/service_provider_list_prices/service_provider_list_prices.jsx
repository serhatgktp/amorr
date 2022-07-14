import React , { useEffect, useState }from 'react';
import { Icon } from '@iconify/react';
import './service_provider_list_prices.css'
import { Divider } from '@mui/material';

const ServiceProviderListPrices = () => {

    // initializing values
    const [isEdit, setIsEdit] = useState(false);
    // changing price according to input
    const handleChange = (e) => { 
        e.preventDefault();
    }
    // exit editing mode when user presses enter or escape
    const onKeyDown = (event) => {
        if (event.key === "Enter" || event.key === "Escape" ){
            setIsEdit(false);
            event.target.blur();
        }
    }

    const dummy_data = [
        {service: 'Men Haircut', price: '$30.00'},
        {service: 'Women Haircut', price: '$20.00'},
        {service: 'Hair wash', price: '$30.00'},
        {service: 'Basic Perm', price: '$100.00'},
        {service: 'Massage', price: '$25.00'}
    ];

    const [servicesPricesList, setServicesPricesList] = useState(dummy_data);
    const [addNewData, setAddNewData] = useState(
        {service: "", price:""}
    ) 

    // handling changing text when adding a service / price
    const handleAddChange = (e) => {
        e.preventDefault();
        
        // name refers to 'service' or 'price'
        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value;

        const newData = { ...addNewData };
        newData[fieldName] = fieldValue;
        setAddNewData(newData);
        console.log(addNewData);
    }

    // handling actually adding the service + price
    const handleAdd = (e) => {
        e.preventDefault();

        const newServicePrice = {
            service: addNewData.service,
            price: addNewData.price
        }

        const newServicesPricesList = [...servicesPricesList, newServicePrice];
        setServicesPricesList(newServicesPricesList);
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
                {/* <div className="member_list">
                    <div className="service_text">Hairdresser -</div>
                    <div className="editable_price">
                        {!isEdit ? 
                        (
                            <div className="user_price">{hairPrice}<button id="edit_button" onClick={ () => {setIsEdit(true)}}><Icon icon="mdi:pencil" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'20px', marginLeft: '7px'}}/></button></div>
                        ) : (
                            <div className="editable_input"><input className="new_price" value={hairPrice} onChange={handleChange} onKeyDown={onKeyDown} /></div>
                        ) }
                    </div>
                </div> */}
                {servicesPricesList.map((swp) => (
                    <div className="member_list">
                        <div className="service_text">{swp.service} -</div>
                        <div className="editable_price">
                            {!isEdit ? 
                            (
                                <div className="user_price">{swp.price}<button id="edit_button" onClick={ () => {setIsEdit(true)}}><Icon icon="mdi:pencil" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'20px', marginLeft: '7px'}}/></button></div>
                            ) : (
                                <div className="editable_input"><input className="new_price" value={swp.price} onChange={handleChange} onKeyDown={onKeyDown} /></div>
                            ) }
                        </div>
                    </div>
                ))}
            </div>
            <div className="adding_service_and_price">
                <div id="add_service_heading">Add a Service:</div>
                <form id="add_service_form" onSubmit={handleAdd}>
                    <input 
                        id="input_service"
                        type="text"
                        name="service"
                        required="required"
                        placeholder="Service"
                        onChange={handleAddChange}
                    />
                    <input
                        id="input_price"
                        type="text"
                        name="price"
                        required="required"
                        placeholder="Price"
                        onChange={handleAddChange}
                    />
                    <button type="submit" id="add_service"><Icon icon="fluent:add-12-filled" style={{ fontSize: '16px' }}/></button>
                </form>
            </div>
            {/* <button id="save_changes" onClick={handleSubmit}>Save Changes</button> */}
        </div>
    )
}

export default ServiceProviderListPrices