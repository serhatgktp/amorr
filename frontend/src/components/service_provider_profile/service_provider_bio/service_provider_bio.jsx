import React , { useEffect, useState }from 'react';
import './service_provider_bio_styles.css'
import { Icon } from '@iconify/react';
import './service_provider_bio_styles.css'

const ServiceProviderBio = () => {
    const [bio, setBio] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const [fullName, setFullName] = useState('');
    useEffect(() => {
        fetch("http://localhost:5000/get-sp-profile", {credentials: 'include'}).then(response =>
          response.json().then(data => {
            setBio(data.bio);
            console.log(bio);
            setFullName(data.full_name);
          })
        );

      }, []);
    const onKeyDown = (event) => {
        if (event.key === "Enter" || event.key === "Escape"){
            setIsEdit(false);
            event.target.blur();
        }
    }
    const handleChange = (e) => {
        setBio(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEdit(false);
        e.target.blur();
        var requestbody = new Object();
        requestbody.bio = bio;
        fetch("http://localhost:5000/edit-bio", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            credentials: "include",
            body: JSON.stringify(requestbody)
        })
    }
    return(
        <div id="service_provider_bio">
        <div id="service_provider_name">About {fullName}</div>
                    {!isEdit ? 
                    (
                        <div id="user_address">{bio}<button id="edit_button" onClick={ () => {setIsEdit(true)}}><Icon icon="mdi:pencil"  /></button></div>
                    ) : (
                        <textarea id="new_address" maxlength="1500" rows="10" cols="50" value={bio} onChange={handleChange} onKeyDown={onKeyDown} ></textarea>
                    ) }
                    <button id="save_changes" onClick={handleSubmit}>Save Changes</button>
        </div>
    )
}

export default ServiceProviderBio