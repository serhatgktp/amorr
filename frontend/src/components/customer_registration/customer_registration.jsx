import React from 'react';
import "./customer_registration.css";

const CustomerRegistration = () => {

  return(
    <body>
      <div className='registration_form'><span className='new_to'>New to <font color="#d46f5e">a</font><font color="#345392">morr</font>?</span><span className='customer_text'> I am a Customer</span>
      <form className="inputs" method="post">
                    <label></label><input type="text" placeholder="Email Address" className="left"/>
                    <label><input type="text" placeholder="Full Name" /></label><br />
                    <label><input type="password" placeholder="Password" className="left"/></label>
                    <label><input type="password" placeholder="Re-enter password" /></label><br />
                    <label><input type="text" placeholder="Address" className="left" id="address"/></label>
                    <label className="idLabel">Attach ID: <input className="id" type="file" id="myFile" name="filename" /></label>
                    <div><p className="terms">By clicking SIGN UP, I agree to amorr's <a>term's and conditions</a> and <a>privacy policy</a></p></div><br /> 
                <br/><input className="submit" type="submit" value="SIGN UP" />
      </form>
      </div>


      <div className='tools'></div>
    </body>
  );
};

export default CustomerRegistration;