import React from 'react'
import './login-page-styles.css'
import { Icon, InlineIcon } from '@iconify/react';

const Login = () => {
    return(
        <body className='login_page'>
            <div className='tools'></div>
            <div id="container">
                <div id="slogan">
                    <div className="Heading">Beauty services <br />at your <span id="doorstep">doorstep.</span></div>
                    <div className="Subheading">Hairdressers, Barbers, Masseurs, Makeup Artists, <br/>Eyebrow and Eyelash techs, and more</div>
                </div>

                <div id="LoginCard">
                    <form>
                        <input type="text" placeholder="Email Address"/>
                        <input type="password" placeholder="Password"/>
                        <button id="login">LOG IN</button>
                    </form>
                </div>
            </div>

        </body>
    )
}

export default Login
