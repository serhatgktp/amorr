
import './styles.css'

import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { MuiThemeProvider, createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

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

    return(
        <body>

        <section className="registration">
          <form>
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
}

export default ServiceProviderRegistration
