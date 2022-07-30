import React from "react";
import './explore_sp_profile_styles.css'
import ExploreSpPriceList from "./explore_sp_price_list/explore_sp_price_list";
import ExploreSpBio from "./explore_sp_profile_bio/explore_sp_profile_bio";
import ExploreSpInfo from "./explore_sp_profile_info/explore_sp_profile_info";
import { useParams } from "react-router-dom";

const ExploreSpProfile = () => {

    const { id } = useParams();

    console.log("This SP's id is " + id);

    return(
        <body>
            <ExploreSpInfo SP={id}/>
            <div id="service_provider_profile_body_section">
                <ExploreSpBio/>
                <ExploreSpPriceList/>
            </div>
        </body>
    )
}

export default ExploreSpProfile