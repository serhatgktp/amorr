import React, {useState, useEffect} from 'react'
import './login-page-styles.css'
import SuccessLoginPopup from '../success_login_popup/SuccessLoginPopup';
import  { useNavigate } from 'react-router-dom'

const Login = () => {
    // Initial values is empty
    const [email_address, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    // For redirection to other pages later
    const navigate = useNavigate();

    // Initial Settings for Success Login Popup is FALSE, so the Success Login Popup is not rendered
    const [triggerLoginSuccessPopup, setLoginTriggerSuccessPopup] = useState(false);

    // Form submission handler
    const handleSubmit = (e) => {
        e.preventDefault();
        const requestbody = {email_address, password};
        
        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(requestbody)
        }).then(response => {
          if (response.ok) {
            // If login correctly, render Success Login Popup
            setLoginTriggerSuccessPopup(true);
            // Set a timer to close the popup after 1.2 seconds for redirecting
            setTimeout(function () {
                setLoginTriggerSuccessPopup(false);
                // Redirect to Home (TODO: or My Profile page according to type of user) after
                navigate('/home');
            }, 1300);
          }
        //   else if (response.status == 401) {
        //     // If 401 UNAUTHORIZED, means Email/Password is taken, so render an Error Popup
        //     setTriggererrorPopup(true);
        //   }
          else { // response is not ok
            throw new Error(response.statusText)
          }
          }).catch(err => {
            console.log(err)
          })
    };

    return(
        <body className='login_page'>
            <div className='tools'></div>
            <div id="container">
                <div id="slogan">
                    <div className="Heading">Beauty services <br />at your <span id="doorstep">doorstep.</span></div>
                    <div className="Subheading">Hairdressers, Barbers, Masseurs, Makeup Artists, <br/>Eyebrow and Eyelash techs, and more</div>
                </div>

                <div id="LoginCard">
                    <form onSubmit={ handleSubmit }>
                        <input 
                            type="text" 
                            placeholder="Email Address" 
                            value={email_address} 
                            onChange={(e) => setEmailAddress(e.target.value)}/>
                        <input 
                            type="password" 
                            placeholder="Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}/>
                        <button type="submit" id="login">LOG IN</button>
                    </form>
                </div>
            </div>
            <SuccessLoginPopup trigger={triggerLoginSuccessPopup} />
        </body>
    )
}

export default Login
