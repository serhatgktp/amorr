import React from 'react'
import './initial-signup-styles.css'
import { Icon, InlineIcon } from '@iconify/react';
import  { useNavigate } from 'react-router-dom'

const InitialSignUp = () => {
    // For redirection
    const navigate = useNavigate();

    const handleSPRegistrationClick = (e) => {
        navigate('/sp-register');
    }
    const handleCustomerRegistrationClick = (e) => {
        navigate('/customer-register');
    }

    return(
        <body className='initial_sign_up'>
            <div className='tools'></div>
            <div id="container">
                <div id="slogan">
                    <div className="Heading">Beauty services <br />at your <span id="doorstep">doorstep.</span></div>
                    <div className="Subheading">Hairdressers, Barbers, Masseurs, Makeup Artists, <br/>Eyebrow and Eyelash techs, and more</div>
                </div>

                <div id="LoginCard">
                    <div>
                        <div id="LoginPrompt">New to <font color='#D46F5E'>a</font><font color="#345392">morr</font>?</div>
                        <div id="LoginSubheading">I am a...</div>
                    </div>
                    <br/>
                    <button id="service" onClick={handleSPRegistrationClick}><Icon icon="bx:store" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'28px' }}/> SERVICE PROVIDER</button>
                    <br/>
                    <button id="customer" onClick={handleCustomerRegistrationClick}><Icon icon="bi:person-fill" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'28px' }}/> CUSTOMER</button>
                </div>
            </div>

        </body>
    )
}

export default InitialSignUp