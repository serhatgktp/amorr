import React , { Fragment, useState }from 'react';
import { Icon } from '@iconify/react';
import './service_provider_list_prices.css'
import { Divider } from '@mui/material';
import ReadOnlyRow from './read_only_row';
import EditableRow from './editable_row';

const ServiceProviderListPrices = () => {
    // exit editing mode when user presses enter or escape
    // const onKeyDown = (event) => {
    //     if (event.key === "Enter" || event.key === "Escape" ){
    //         setIsEdit(false);
    //         event.target.blur();
    //     }
    // }

    const dummy_data = [
        {service: 'Men Haircut', price: '$30.00'},
        {service: 'Women Haircut', price: '$20.00'},
        {service: 'Hair wash', price: '$30.00'},
        {service: 'Basic Perm', price: '$100.00'},
        {service: 'Massage', price: '$25.00'}
    ];

    // initial values
    const [servicesPricesList, setServicesPricesList] = useState(dummy_data);
    const [addNewData, setAddNewData] = useState(
        {service: "", price:""}
    )
    const [checkService, setCheckService] = useState(null);
    const [editData, setEditData] =  useState(
        {service: "", price:""}
    )
    
    //******** EDITING HANDLERS START ********//
    // checking which service is selected when edit button is clicked
    const handleEditClick = (e, swp) => {
        e.preventDefault();
        setCheckService(swp.service);

        const formValues = {
            service: swp.service,
            price: swp.price
        }
        setEditData(formValues);
    }

    // handling editting existing service / price
    const handleEditChange = (e) => {
        e.preventDefault();
        
        // name refers to 'service' or 'price'
        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value;

        const newData = { ...editData };
        newData[fieldName] = fieldValue;
        setEditData(newData);
        console.log(editData);
    }

    // handling actually editting the service + price
    const handleSaveEdit = (e) => {
        e.preventDefault();

        const edittedServicePrice = {
            service: editData.service,
            price: editData.price
        }

        // copy
        const newServicesPricesList = [...servicesPricesList];
        
        // update by replacing
        const index = servicesPricesList.findIndex((swp) => swp.service === checkService);
        newServicesPricesList[index] = edittedServicePrice;

        setServicesPricesList(newServicesPricesList);
        
        // finished editting
        setCheckService(null);

        console.log(servicesPricesList);
    }
    //******** EDITING HANDLERS END ********//

    //******** ADDING HANDLERS START ********//
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

        // copy and add
        const newServicesPricesList = [...servicesPricesList, newServicePrice];
        setServicesPricesList(newServicesPricesList);

        // clear the inputs
        const clearedServicePrice = {service: "", price:""};
        setAddNewData(clearedServicePrice);

        console.log(servicesPricesList);
    }
    //******** ADDING HANDLERS END ********//

    return(
        <div id="service_provider_list_prices">
            <div id="price_list_heading">Price List</div>
            <Divider id="price_list_divider" textAlign="center" variant="fullWidth" style={{width: '100%', borderBottomWidth: 2}}/>
            
            <div id="list_of_prices">
                {servicesPricesList.map((swp) => (
                    <Fragment>
                        { checkService === swp.service ? ( 
                            <EditableRow editData={editData} handleEditChange={handleEditChange} handleSaveEdit={handleSaveEdit}/> 
                        ) : (
                            <ReadOnlyRow swp={swp} handleEditClick={handleEditClick}/>
                        )}
                    </Fragment>
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
        </div>
    )
}

export default ServiceProviderListPrices