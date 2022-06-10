import { useRef, useState, useEffect} from 'react';
import React from 'react';
import "./customer_registration.css";

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const NONEMPTY_REGEX = /([^\s])/

const CustomerRegistration = () => {

  return(
    <body>

        <section className="registration">
          <form>
              <div className="heading"><span className="newTo">Welcome to <font color="#d46f5e">a</font><font color="#345392">morr</font>! </span>
                <span className="provide">I am a new Customer</span>
              </div>

              <div className="inputs">
                <div className='row'>
                  <div className="input"><input type="text" placeholder="Email Address"/></div>
                  <div className="input"><input type="text" placeholder="Full Name"/></div>
                </div>

                <div className='row'>
                  <div className="input"><input type="password" placeholder="Password"/></div>
                  <div className="input"><input type="password" placeholder="Re-enter password"/></div>
                </div>

                <div className='row'>
                  <div className="input" id="address"><input type="text" placeholder="Address"/></div>
                  <div className="input" id="attachFile">
                    <label for="myFile">Attach ID: </label>
                    <input className="id" type="file" id="myFile" name="filename"/>
                  </div>
                </div>
              </div>

              <div className="cardFooter">
                <span className='terms'>By clicking SIGN UP, I agree to amorr's <a href='#'>term's and conditions</a> and <a href='#'>privacy policy</a></span>
                <input className="submit" type="submit" value="SIGN UP" />
              </div>  
          </form>
        </section>
        <div className='tools'></div>
        </body>
  );
};

export default CustomerRegistration;