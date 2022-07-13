import React , { useEffect, useState }from 'react';
import { Icon } from '@iconify/react';
import { Rating, Avatar, requirePropFactory, useScrollTrigger } from '@mui/material';
import './service_provider_list_prices.css'

const ServiceProviderListPrices = () => {

    // initializing values
    const services_with_prices = [
        {service: 'Hairdresser', price: null},
        {service: 'Barber', price: null},
        {service: 'Cleaner', price: null},
        {service: 'Massage', price: null},
        {service: 'Makeup', price: null},
        {service: 'Eyebrow Tech', price: null},
        {service: 'Eyelash Tech', price: null},
      ];
    const list_ServicesPrices = services_with_prices.map((sp) => <li key={sp.service}>{sp.price}</li>);

    return(
        <div id="service_provider_list_prices">
            <div id="price_list_heading">Price List</div>
            <div id="list_of_prices">
                {list_ServicesPrices}
            </div>
        </div>
    )
}

export default ServiceProviderListPrices