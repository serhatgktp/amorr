import './styles.css'

import * as React from 'react';
import { Icon } from '@iconify/react';


import paints from "../../assets/contact_us/paints.png";



const ContactUs = () => {
    return(
        <body className='contact_us_wrapper'>
            <div className='container'>
                <div className='left'>
                    <div><img src={paints} className="paints" alt="paints" /></div>
                    <div className="belowImage">
                        <span> Have questions about <br/>features, pricing, services or <br/>simply want to reach out? <br/>Our team would love to help.</span>
                        <br/>
                        <br/>
                        <span className="info"><Icon icon="ant-design:instagram-filled" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'28px' }}/>  amorr_ca</span>
                        <br></br>
                        <span className="info"><Icon icon="akar-icons:twitter-fill" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'28px' }}/>  real_amorr_ca</span>
                        <br></br>
                        <span className="info"><Icon icon="fluent:mail-16-filled" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'28px' }}/>  contactus@amorr.ca</span>
                        <br></br>
                        <span className="info"><Icon icon="carbon:location-filled" inline={true} style={{ verticalAlign: '-0.2em', fontSize:'28px' }}/>  1265 Military Trail</span>
                        <br></br>
                    </div>
                </div>

                <div className="right">
                    <div className="heading">Contact Us</div>
                    
                    <div className="box">
                        <form>
                            <div className="inputs">
                                <div className="input"><input type="text" placeholder="Full Name"/></div>
                                <div className="input"><input type="text" placeholder="Email Address" required/></div>
                                <div className="input"><input type="text" placeholder="Subject"/></div>
                                <div className="input1" id="message"><textarea className="textbox" rows="10" cols="40" type="text" placeholder="Type your message here..."/></div>
                                <button id="service">Send Message <Icon icon="akar-icons:arrow-right" inline={true} style={{ verticalAlign: '-0.3em', fontSize:'28px' }}/></button>
                            </div>
                        </form>
                    </div>
                    
                </div>

            </div>
        </body>
    );
}

export default ContactUs; 