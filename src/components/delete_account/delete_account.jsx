// import './Delete_popup'

import * as React from 'react';
import { useState } from "react"; 
// import Axios from 'react'; 
import './delete_account.css';
import  { useNavigate } from 'react-router-dom'

const DeleteAccount = () => {

    const navigate = useNavigate();    

    const handleYes= () => {

        fetch('http://localhost:5000/delete-account', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            credentials: 'include',
        }).then(response => {
            if (response.ok){
                console.log('User Deleted!'); 
                navigate('/initial-signup-landing');
                window.location.reload();
                
            }else {
                throw new Error(response.statusText)
            }
        }).catch(err => {
            console.log(err)
        })
    };

    const handleNo=()=>{
        navigate('/home');
    }

    return(
        <body className='delete_account_wrapper'>
            <div className="DAbox">
                <h1 className='DeleteAccount'> Delete Account! </h1>
                <p className='sure'> Are you sure you want to delete your account? </p>
                <p className='sure'> Deleting account will result in losing all your data.</p>

               
                <button className = 'yes' onClick={handleYes}> Yes </button>
                <button className='no' onClick={handleNo}> No </button>
                
            </div>
            
            {/* <DeletePopup trigger={triggerDeletePopup} /> */}
        </body>
    );
}

export default DeleteAccount; 
