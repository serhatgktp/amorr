import React , { useEffect, useState }from 'react';
import './explore_sp_profile_bio_styles.css'
import { Icon } from '@iconify/react';


const ExploreSpBio = () => {
    const [bio, setBio] = useState('');
    const [fullName, setFullName] = useState('');
    useEffect(() => {
        /*fetch("http://localhost:5000/get-sp-profile", {credentials: 'include'}).then(response =>
          response.json().then(data => {
            setBio(data.bio);
            console.log(bio);
            setFullName(data.full_name);
          })
        );*/
        setBio("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
        setFullName("Lorem Ipsum Salons");
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