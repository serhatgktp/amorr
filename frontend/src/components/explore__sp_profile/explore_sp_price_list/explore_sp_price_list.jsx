import React , { Fragment, useState, useEffect }from 'react';
import { Icon } from '@iconify/react';
import './explore_sp_price_list_styles.css'
import { Divider } from '@mui/material';
import ReadOnlyRow from './read_only_row';

const ExploreSpPriceList = ({ id }) => {

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
        /*fetch(`http://localhost:5000/explore-sp-price-list/${id}`, {credentials: 'include'}).then(response =>
          response.json().then(data => {
            setServicesPricesList(data);
          })
        );*/
        setServicesPricesList([
            {service_id: 1, service: 'Men Haircut', price: '30.00'},
            {service_id: 2, service: 'Women Haircut', price: '20.00'},
            {service_id: 3, service: 'Hair wash', price: '30.00'},
            {service_id: 4, service: 'Basic Perm', price: '100.00'},
            {service_id: 5, service: 'Massage', price: '25.00'},
            {service_id: 6, service: 'Women long hair', price: '30.00'},
            {service_id: 7, service: 'Men perm', price: '50.00'},
            {service_id: 8, service: 'Women c perm', price: '60.00'},
            {service_id: 9, service: 'Eyelash', price: '25.00'},
            {service_id: 10, service: 'Eyebrow tint', price: '25.00'}
    ])
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

    return(
        <div id="service_provider_list_prices">
            <div id="price_list_heading">Price List</div>
            <Divider id="price_list_divider" textAlign="center" variant="fullWidth" style={{width: '100%', borderBottomWidth: 2}}/>
            
            <div id="list_of_prices">
                {servicesPricesList.map((swp) => (
                    <Fragment>
                            <ReadOnlyRow swp={swp}/>
                    </Fragment>
                ))}
            </div>
        </div>
    )
}

export default ExploreSpPriceList