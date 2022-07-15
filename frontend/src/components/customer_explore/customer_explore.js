import React from "react";
import InteractiveCard from "./interactive_sp_cards/interactive_sp_cards";
import './customer_explore_styles.css'
import { BrowserRouter as Router } from 'react-router-dom'

const CustomerExplore = () => {
    const SP = {name: "Lorem Ipsum Salons", rating: 4.0, num_rating: 50, services: 75, fee: 4.95};
    return(
        <InteractiveCard SP={SP}/>
    )
}

export default CustomerExplore