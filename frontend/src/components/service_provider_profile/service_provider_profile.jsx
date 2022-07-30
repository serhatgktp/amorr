import React from "react";
import ServiceProviderBio from "./service_provider_bio/service_provider_bio";
import ServiceProviderInfo from "./service_provider_info/service_provider_info";
import ServiceProviderListPrices from "./service_provider_list_prices/service_provider_list_prices";
import './service_provider_profile.css'
import ServiceProviderReviewCard from "./service_provider_reviews/service_provider_review";
import SPAllReviews from "./service_provider_reviews/sp_all_reviews";

const ServiceProviderProfile = () => {
    return(
        <body>
            <ServiceProviderInfo/>
            <div id="service_provider_profile_body_section">
                <ServiceProviderBio/>
                <ServiceProviderListPrices/>
            </div>
            <SPAllReviews/>
        </body>
    )
}

export default ServiceProviderProfile