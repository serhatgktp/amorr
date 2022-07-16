import React from "react";
import ServiceProviderBio from "./service_provider_bio/service_provider_bio";
import ServiceProviderInfo from "./service_provider_info/service_provider_info";

import ServiceProviderListPrices from "./service_provider_list_prices/service_provider_list_prices";

const ServiceProviderProfile = () => {
    return(
        <body>
            <ServiceProviderInfo/>
            <ServiceProviderBio/>
        </body>
    )
}

export default ServiceProviderProfile