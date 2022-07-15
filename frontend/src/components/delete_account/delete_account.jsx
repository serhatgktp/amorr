// import './Delete_popup'

import * as React from 'react';
import { useState } from "react"; 
// import Axios from 'react'; 
import './delete_account.css'

const DeleteAccount = () => {

    

    const handleYes= () => {

        // fetch('http://localhost:5000/delete-account', {
        //     method: 'DELETE',
        //     headers: {"Content-Type": "application/json"},
        // }).then(response => {
        //     if (response.ok){
        //         console.log('User Deleted!'); 
        //         window.location.reload();
        //     }else {
        //         throw new Error(response.statusText)
        //     }
        // }).catch(err => {
        //     console.log(err)
        // })
    };

    return(
        <body className='delete_account_wrapper'>
            <div className="DAbox">
                <h1 className='DeleteAccount'> Delete Account! </h1>
                <p className='sure'> Are you sure you want to delete your account? </p>
                <p className='sure'> Deleting account will result in losing all your data.</p>

                <button className = 'yes' onClick={handleYes}> <a href='/initial-signup-landing' >Yes</a> </button>
                <button className='no'> <a href='/home' >No</a></button>
            </div>
            
            {/* <DeletePopup trigger={triggerDeletePopup} /> */}
        </body>
    );
}

export default DeleteAccount; 
