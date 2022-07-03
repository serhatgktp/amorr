import './styles.css'

import * as React from 'react';
import { useState } from "react"; 
// import Axios from 'react'; 
import { Icon } from '@iconify/react';

import paints from "../../assets/contact_us/paints.png";

// import axios from 'axios';


// const axios_ = axios.create({
//   baseURL: 'http://localhost:5000/contact',
//   headers: { 'Content-Type': 'application/json' },
// })

const ContactUs = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {fullname, email, subject, message};
        setIsPending(true);
        console.log(body);

        fetch('http://localhost:5000/contact', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        }).then(response => {
            if (response.ok){
                console.log('New message added'); 
                setIsPending(false)
            }else {
                throw new Error(response.statusText)
            }
            }).catch(err => {
            console.log(err)
          })

    };

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
                        <form onSubmit={handleSubmit}>
                            <div className="inputs">
                                <div className="input"><input
                                    type="text"
                                    required 
                                    value={fullname} 
                                    placeholder = "Full Name"
                                    onChange={(e)=> setFullname(e.target.value)}>
                                </input></div>

                                <div className="input"><input
                                    type="text"
                                    required
                                    value={email}
                                    placeholder="Email Address"
                                    onChange={(e)=> setEmail(e.target.value)}>
                                </input></div>

                                <div className="input"> <input 
                                    type="text"
                                    required
                                    value={subject}
                                    placeholder="Subject"
                                    onChange={(e)=> setSubject(e.target.value)}>
                                </input></div>

                                <div className="input1" id="message"><textarea 
                                    className="textbox"
                                    rows="10" 
                                    cols="40" 
                                    required
                                    value={message}
                                    onChange={(e)=> setMessage(e.target.value)}
                                    type="text" placeholder="Type your message here..."/>
                                </div>

                                { !isPending && <button id="service" type="submit">Send Message <Icon icon="akar-icons:arrow-right" inline={true} style={{ verticalAlign: '-0.3em', fontSize:'28px' }}/></button>}
                                { isPending && <button disabled id="service" type="submit">Sending ... <Icon icon="akar-icons:arrow-right" inline={true} style={{ verticalAlign: '-0.3em', fontSize:'28px' }}/></button>}
                            </div>
                        </form>
                    </div>
                    
                </div>

            </div>
        </body>
    );
}

export default ContactUs; 