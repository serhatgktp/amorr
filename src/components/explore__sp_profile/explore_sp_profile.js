import React from "react";
import { useParams } from 'react-router-dom';
import './explore_sp_profile_styles.css'
import ExploreSpPriceList from "./explore_sp_price_list/explore_sp_price_list";
import ExploreSpBio from "./explore_sp_profile_bio/explore_sp_profile_bio";
import ExploreSpInfo from "./explore_sp_profile_info/explore_sp_profile_info";

const ExploreSpProfile = () => {

    const { id } = useParams();

    return(
        <body>
            <ExploreSpInfo id={id}/>
            <div id="service_provider_profile_body_section">
                <ExploreSpBio id={id}/>
                <ExploreSpPriceList id={id}/>
            </div>
        </body>
    )
}

export default ExploreSpProfile