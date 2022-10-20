import React from 'react'
import './login_signup_landing_styles.css'
import  { useNavigate } from 'react-router-dom'

const LoginSignupLanding = () => {
    // For redirection
    const navigate = useNavigate();

    const handleLoginClick = (e) => {
        navigate('/login');
    }
    const handleSignUpClick = (e) => {
        navigate('/initial-signup');
    }
    const handleContinueClick = (e) => {
        navigate('/home');
    }

    return(
        <body className='LoginSignupLanding'>
            <div className='tools'></div>
            <div id="container">
                <div id="slogan">
                    <div className="Heading">Beauty services <br />at your <span id="doorstep">doorstep.</span></div>
                    <div className="Subheading">Hairdressers, Barbers, Masseurs, Makeup Artists, <br/>Eyebrow and Eyelash techs, and more</div>
                </div>

                <div id="LoginCard">
                    <button id="login" onClick={handleLoginClick}>LOG IN</button>
                    <br/>
                    <button id="signup" onClick={handleSignUpClick}>SIGN UP</button>
                    <br/>
                    <button id="continue" onClick={handleContinueClick}>Continue as GUEST</button>
                </div>
            </div>

        </body>
    )
}

export default LoginSignupLanding
