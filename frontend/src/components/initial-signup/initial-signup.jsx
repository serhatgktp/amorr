import React from 'react'
import './initial-signup-styles.css'
import { Icon, InlineIcon } from '@iconify/react';

const InitialSignUp = () => {
    return(
        <body>
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
                    <button id="service"><Icon icon="bx:store" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'28px' }}/> SERVICE PROVIDER</button>
                    <br/>
                    <button id="customer"><Icon icon="bi:person-fill" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'28px' }}/> CUSTOMER</button>
                </div>
            </div>

            <div className='tools'></div>
        </body>
    )
}

export default InitialSignUp