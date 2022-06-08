import React from 'react'
import './initial-signup-styles.css'

const InitialSignUp = () => {
    return(
        <body>
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
                <button>SERVICE PROVIDER</button>
                <br/>
                <button>CUSTOMER</button>
            </div>
        </body>
    )
}

export default InitialSignUp