import './styles.css'

import { useRef, useState, useEffect} from 'react';
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

import {ErrorPopup} from '../error_registration_popup/errorPopup';
import SuccessPopup from '../success_registration_popup/SuccessPopup';

const ITEM_HEIGHT = 45;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const services = [
  'Hairdresser',
  'Barber',
  'Cleaner',
  'Massage',
  'Makeup',
  'Eyebrow Tech',
  'Eyelash Tech',
];

const ServiceProviderRegistration = () => {

    const [serviceType, setServiceType] = React.useState([]);

    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setServiceType(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };

  const initialValues = { email: "", name: "", password: "", repassword: "", address: "", ID: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const initialErrors = { email: false, name: false, password: false, repassword: false, address: false};
  const [formErrors, setFormErrors] = useState(initialErrors);
  
  // Initial Settings for Success Popup is FALSE, so the Success Popup is not rendered
  const [triggererrorPopup, setTriggererrorPopup] = useState(false);
  const [triggerSuccessPopup, setTriggerSuccessPopup] = useState(false);
  
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    // If registered correctly, render Success Popup
    setTriggererrorPopup(true);
    setTriggerSuccessPopup(true);
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
                <span className="provide">I provide the following services</span>
                <span className="selector">
                    <FormControl sx={{ m: 1, width: 275, backgroundColor: 'white', marginTop: 0, borderRadius: 10, pt: 0}}>
                        <InputLabel id="services-checkbox-label"><font family='Poppins'>Types of Services Provided</font></InputLabel>
                        <Select
                        labelId="services-checkbox-label"
                        id="services-checkbox"
                        multiple
                        value={serviceType}
                        onChange={handleChange}

                        // temporary workaround weird bug where dropdown label is not spaced properly
                        input={<OutlinedInput sx={{borderRadius: 10, pt: 0, height:55}} label="Types of Services Provided"/>}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                        >
                        {services.map((service) => (
                            <MenuItem style= {{fontFamily:'poppins'}} key={service} value={service}>
                            <Checkbox checked={serviceType.indexOf(service) > -1} />
                            <ListItemText primary={service} />
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                </span>
              </div>

              <div className="inputs">
                <div className='row'>
                  <div className={`input ${formErrors.email ? 'input-error' : ''}`}><input
                    type="text"
                    name="email"
                    placeholder="Enter Email"
                    value={formValues.email}
                    onChange={handleChanges}
                  /></div>
                  <div className={`input ${formErrors.name ? 'input-error' : ''}`}><input 
                  type="text"
                  name="name"
                  placeholder="Enter Full Name"
                  value={formValues.name}
                  onChange={handleChanges}
                  /></div>
                </div>

                <div className='row'>
                <div className={`input ${formErrors.password ? 'input-error' : ''}`}><input 
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={formValues.password}
                  onChange={handleChanges}
                  /></div>
                  <div className={`input ${formErrors.repassword ? 'input-error' : ''}`}><input 
                  type="password"
                  name="repassword"
                  placeholder="Re-enter password"
                  value={formValues.repassword}
                  onChange={handleChanges}
                  /></div>
                </div>

                <div className='row'>
                <div className={`input ${formErrors.address ? 'input-error' : ''}`}><input 
                  type="text"
                  name="address"
                  placeholder="Enter Address"
                  value={formValues.address}
                  onChange={handleChanges}
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
        <ErrorPopup trigger={triggererrorPopup} />
        <SuccessPopup trigger={triggerSuccessPopup}></SuccessPopup>
        </body>
  );
}

export default ServiceProviderRegistration
