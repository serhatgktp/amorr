import React, {useState} from 'react';
import "./customer_registration.css";
import ErrorPopup from '../error_registration_popup/errorPopup';
import SuccessRegistrationPopup from '../success_registration_popup/SuccessRegistrationPopup';

const CustomerRegistration = () => {

  const initialValues = { email: "", name: "", password: "", repassword: "", address: "", ID: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const initialErrors = { email: false, name: false, password: false, repassword: false, address: false};
  const [formErrors, setFormErrors] = useState(initialErrors);

  // Initial Settings for Error Popup is FALSE, so the Error Popup is not rendered
  const [triggererrorPopup, setTriggererrorPopup] = useState(false);
  // Initial Settings for Success Popup is FALSE, so the Success Popup is not rendered
  const [triggerSuccessPopup, setTriggerSuccessPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    // this one is for changing the styling of the textbox

    // this is the actual check if we should send the request
    const errors = { email: false, name: false, password: false, repassword: false, address: false};
    const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const name_regex = /^[a-zA-Z ]+$/;
    const alphanum_regex = /^[a-zA-z0-9]{8,}$/;
    const addr_regex = /^[0-9]{1,5}[a-zA-z0-9 ,-.]{3,}[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;

    if (!formValues.email) {
      errors.email = true;
    } else if (!email_regex.test(formValues.email)) {
      errors.email = true;
    }
    if (!formValues.name) {
      errors.name = true;
    } else if (!name_regex.test(formValues.name)) {
      errors.name = true;
    }

    if (!formValues.password) {
      errors.password = true;
    } else if (!alphanum_regex.test(formValues.password)) {
    errors.password = true;
    }

    if (!formValues.repassword) {
      errors.repassword = true;
    }
    else if (!(formValues.repassword === formValues.password)){
      errors.repassword = true;
    }

    if (!formValues.address) {
      errors.address = true;
    }
    else if (!addr_regex.test(formValues.address)) {
      errors.address = true;
    }

    // only send request if it satisfies all regex
    if(!(errors.email || errors.name || errors.password || errors.repassword || errors.address)){
      
      var requestbody = new Object();
      requestbody.email_address = formValues.email;
      requestbody.address = formValues.address;
      requestbody.user_type = "Customer";
      requestbody.full_name = formValues.name;
      requestbody.password = formValues.password;
      
      fetch('http://localhost:5000/register', {
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(requestbody)
      }).then(response => {
        if (response.ok) {
          // If registered correctly, render Success Popup
          setTriggerSuccessPopup(true);
        }
        else if (response.status == 400) {
          // If 400 BAD REQUEST, means Email is taken, so render Error Popup
          setTriggererrorPopup(true);
        }
        else { // response is not ok
          throw new Error(response.statusText)
        }
        }).catch(err => {
          console.log(err)
        })
    }  
  };
  
  const validate = (values) => {
    const errors = { email: false, name: false, password: false, repassword: false, address: false};
    const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const name_regex = /^[a-zA-Z ]+$/;
    const alphanum_regex = /^[a-zA-z0-9]{8,}$/;
    const addr_regex = /^[0-9]{1,5}[a-zA-z ,-.]{3,}[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;

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

    if (!values.password) {
      errors.password = true;
    } else if (!alphanum_regex.test(values.password)) {
    errors.password = true;
    }

    if (!values.repassword) {
      errors.repassword = true;
    }
    else if (!(values.repassword === values.password)){
      errors.repassword = true;
    }

    if (!values.address) {
      errors.address = true;
    }
    else if (!addr_regex.test(values.address)) {
      errors.address = true;
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
                    placeholder="Enter Email"
                    value={formValues.email}
                    onChange={handleChange}
                  /></div>
                  <div className={`input ${formErrors.name ? 'input-error' : ''}`}><input 
                  type="text"
                  name="name"
                  placeholder="Enter Full Name"
                  value={formValues.name}
                  onChange={handleChange}
                  /></div>
                </div>

                <div className='row'>
                <div className={`input ${formErrors.password ? 'input-error' : ''}`}><input 
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={formValues.password}
                  onChange={handleChange}
                  /></div>
                  <div className={`input ${formErrors.repassword ? 'input-error' : ''}`}><input 
                  type="password"
                  name="repassword"
                  placeholder="Re-enter password"
                  value={formValues.repassword}
                  onChange={handleChange}
                  /></div>
                </div>

                <div className='row'>
                <div className={`input ${formErrors.address ? 'input-error' : ''}`}><input 
                  type="text"
                  name="address"
                  placeholder="Enter Address"
                  value={formValues.address}
                  onChange={handleChange}
                  /></div>
                  <div className="input" id="attachFile">
                    <label for="myFile">Attach ID: </label>
                    <input className="id" type="file" id="myFile" name="filename"/>
                  </div>
                </div>
              </div>

              <div className="cardFooter">
                <span className='terms'>By clicking SIGN UP, I agree to amorr's <a href='/#'>terms and conditions</a> and <a href='/#'>privacy policy</a></span>
                <input className="submit" type="submit" value="SIGN UP" />
              </div>  
          </form>
        </section>
        <div className='tools'></div>
        <ErrorPopup trigger={triggererrorPopup} redirection="/customer-register"/>
        <SuccessRegistrationPopup trigger={triggerSuccessPopup}></SuccessRegistrationPopup>
        </body>
  );
};

export default CustomerRegistration;