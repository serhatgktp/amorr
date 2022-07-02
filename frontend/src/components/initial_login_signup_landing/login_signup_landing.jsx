import React from 'react'
import './login_signup_landing_styles.css'

const LoginSignupLanding = () => {
    return(
        <body className='LoginSignupLanding'>
            <div className='tools'></div>
            <div id="container">
                <div id="slogan">
                    <div className="Heading">Beauty services <br />at your <span id="doorstep">doorstep.</span></div>
                    <div className="Subheading">Hairdressers, Barbers, Masseurs, Makeup Artists, <br/>Eyebrow and Eyelash techs, and more</div>
                </div>

                <div id="LoginCard">
                    <button id="login">LOG IN</button>
                    <br/>
                    <button id="signup">SIGN UP</button>
                    <br/>
                    <button id="continue">Continue as GUEST</button>
                </div>
            </div>

        </body>
    )
}

export default LoginSignupLanding
