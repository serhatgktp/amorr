import React , { Fragment, useState, useEffect }from 'react';
import { Icon } from '@iconify/react';
import './service_provider_list_prices.css'
import { Divider } from '@mui/material';
import ReadOnlyRow from './read_only_row';
import EditableRow from './editable_row';

const ServiceProviderListPrices = () => {

    // initial values
    const [servicesPricesList, setServicesPricesList] = useState([]);
    const [addNewData, setAddNewData] = useState(
        {service: "", price:""}
    )
    const [editServiceId, setEditServiceId] = useState(null);
    const [editData, setEditData] =  useState(
        {service: "", price:""}
    )
    
    // GET REQUEST TO GET LIST OF SERVICES AND PRICES
    useEffect(() => {
        fetch("http://localhost:5000/get-sp-price-list", {credentials: 'include'}).then(response =>
          response.json().then(data => {
            setServicesPricesList(data);
          })
        );
      }, []);

    
    //******** EDITING HANDLERS START ********//
    // checking which service is selected when edit button is clicked
    const handleEditClick = (e, swp) => {
        e.preventDefault();
        setEditServiceId(swp.service_id);

        const formValues = {
            service: swp.service,
            price: swp.price
        }
        setEditData(formValues);
    }

    // handling editting existing service / price inputs
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
            service_id: editServiceId,
            service: editData.service,
            price: editData.price
        }

        // copy
        const newServicesPricesList = [...servicesPricesList];
        
        // update by replacing
        const index = servicesPricesList.findIndex((swp) => swp.service_id === editServiceId);
        newServicesPricesList[index] = edittedServicePrice;

        setServicesPricesList(newServicesPricesList);
        
        // finished editting, so reinitialize the state
        setEditServiceId(null);

        // POST REQUEST to send the editted service and price with service id  
        fetch("http://localhost:5000/edit-sp-price-list", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            credentials: "include",
            body: JSON.stringify(edittedServicePrice)
        }).then(response => {
            if (response.ok){
                window.location.reload();
            }
        })
    }

    const handleCancelClick = () => {
        setEditServiceId(null);
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

        // POST REQUEST to send new service and price 
        var requestbody = new Object();
        fetch("http://localhost:5000/add-sp-price-list", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            credentials: "include",
            body: JSON.stringify(newServicePrice)
        }).then(response => {
            if (response.ok) {
                window.location.reload();
            }
        })
    }
    //******** ADDING HANDLERS END ********//

    return(
        <div id="service_provider_list_prices">
            <div id="price_list_heading">Price List</div>
            <Divider id="price_list_divider" textAlign="center" variant="fullWidth" style={{width: '100%', borderBottomWidth: 2}}/>
            
            <div id="list_of_prices">
                {servicesPricesList.map((swp) => (
                    <Fragment>
                        { editServiceId === swp.service_id ? ( 
                            <EditableRow 
                                editData={editData} 
                                handleEditChange={handleEditChange} 
                                handleSaveEdit={handleSaveEdit}
                                handleCancelClick={handleCancelClick}/> 
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
                        maxlength="40"
                        required="required"
                        placeholder="Service"
                        onChange={handleAddChange}
                    />
                    <input
                        id="input_price"
                        type="number"
                        name="price"
                        min="0"
                        step=".01"
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