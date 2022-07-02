import React, {useState, useEffect} from 'react'
import './login-page-styles.css'
import SuccessLoginPopup from '../success_login_popup/SuccessLoginPopup';

const Login = () => {
    const [email_address, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    // Initial Settings for Success Login Popup is FALSE, so the Success Login Popup is not rendered
    const [triggerLoginSuccessPopup, setLoginTriggerSuccessPopup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestbody = {email_address, password};
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
