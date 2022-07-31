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
        fetch(`http://localhost:5000/explore-sp-price-list/${id}`, {credentials: 'include'}).then(response =>
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