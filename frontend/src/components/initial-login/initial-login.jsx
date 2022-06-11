import React from 'react'
import './initial-login-styles.css'
import { Icon, InlineIcon } from '@iconify/react';

const InitialLogin = () => {
    return(
        <body>
            <div className='tools'></div>
            <div id="container">
                <div id="slogan">
                    <div className="Heading">Beauty services <br />at your <span id="doorstep">doorstep.</span></div>
                    <div className="Subheading">Hairdressers, Barbers, Masseurs, Makeup Artists, <br/>Eyebrow and Eyelash techs, and more</div>
                </div>

                <div id="LoginCard">
                    <div>
                        <div id="LoginPrompt">Weclome back!</div>
                        <div id="LoginSubheading">I am a...</div>
                    </div>
                    <br/>
                    <button id="service"><Icon icon="bx:store" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'28px' }}/> SERVICE PROVIDER</button>
                    <br/>
                    <button id="customer"><Icon icon="bi:person-fill" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'28px' }}/> CUSTOMER</button>
                </div>
            </div>

        </body>
    )
}

export default InitialLogin