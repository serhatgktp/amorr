import { useRef, useState, useEffect} from 'react';
import React from 'react';
import "./customer_registration.css";

const CustomerRegistration = () => {

  const initialValues = { email: "", name: "", password: "", repassword: "", address: "", ID: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const initialErrors = { email: false, name: false, password: false, repassword: false, address: false, ID: false };
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    setFormErrors(validate(formValues));
    console.log(!formErrors.email && !formErrors.name);
    return (!formErrors.email && !formErrors.name);
  };
  
  const validate = (values) => {
    const errors = { email: false, name: false, password: false, repassword: false, address: false, ID: false };
    const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const name_regex = /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/i;
    if (!values.email) {
      errors.email = true;
    } else if (!email_regex.test(values.email)) {
      errors.email = true;
    }
    if (!values.name) {
      errors.name = true;
    } else if (!name_regex.test(values.name)) {
      errors.name = true;
    }


    return errors;
  };


  return(
    <body>

        <section className="registration">
          <form onSubmit={ handleSubmit }>
              <div className="heading"><span className="newTo">Welcome to <font color="#d46f5e">a</font><font color="#345392">morr</font>! </span>
                <span className="provide">I am a new Customer</span>
              </div>

              <div className="inputs">
                <div className='row'>
                  <div className={`input ${formErrors.email ? 'input-error' : ''}`}><input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={formValues.email}
                    onChange={handleChange}
                  /></div>
                  <div className={`input ${formErrors.name ? 'input-error' : ''}`}><input 
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formValues.name}
                  onChange={handleChange}
                  /></div>
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