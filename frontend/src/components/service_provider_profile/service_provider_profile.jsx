import React from "react";
import ServiceProviderInfo from "./service_provider_info/service_provider_info";
import ServiceProviderBio from "./service_provider_bio/service_provider_bio";
const ServiceProviderProfile = () => {
    return(
        <div>
            <ServiceProviderInfo/>
            <ServiceProviderBio/>
        </div>
        
    )
}

export default ServiceProviderProfile