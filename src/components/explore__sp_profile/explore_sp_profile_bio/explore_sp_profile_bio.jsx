import React , { useEffect, useState }from 'react';
import './explore_sp_profile_bio_styles.css'
import { Icon } from '@iconify/react';


const ExploreSpBio = ({ id }) => {
    const [bio, setBio] = useState('');
    const [fullName, setFullName] = useState('');
    useEffect(() => {
        fetch(`http://localhost:5000/explore-sp-profile/${id}`, {credentials: 'include'}).then(response =>
          response.json().then(data => {
            setBio(data.bio);
            console.log(bio);
            setFullName(data.full_name);
          })
        );
      }, []);

    return(
        <div id="service_provider_bio">
            <div id="service_provider_name">About {fullName}</div>
            <div id="service_provider_bio_area">
                <div id="user_address">{bio}</div>
            </div>
        </div>
    )
}

export default ExploreSpBio