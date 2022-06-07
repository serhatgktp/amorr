
import './styles.css'

import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

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
        <main className="registration">
            <form>
                <div><span className="newTo">New to <font color="#d46f5e">a</font><font color="#345392">morr</font>? </span>
                <span>I am a service provider for</span>
                <span className="selector">
                    <FormControl sx={{ m: 1, width: 300, backgroundColor: 'white', marginTop: 0}}>
                        <InputLabel id="services-checkbox-label"><font family='Poppins'>Types of Services Provided</font></InputLabel>
                        <Select
                        labelId="services-checkbox-label"
                        id="services-checkbox"
                        multiple
                        value={serviceType}
                        onChange={handleChange}

                        // temporary workaround weird bug where dropdown label is not spaced properly
                        input={<OutlinedInput label="ListServices"/>}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                        >
                        {services.map((service) => (
                            <MenuItem key={service} value={service}>
                            <Checkbox checked={serviceType.indexOf(service) > -1} />
                            <ListItemText primary={service} />
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                </span>
                </div>
                <div className="inputs">
                    <label></label><input type="text" placeholder="Email Address" />
                    <label><input type="text" placeholder="Full Name" /></label><br />
                    <label><input type="password" placeholder="Password" /></label>
                    <label><input type="password" placeholder="Re-enter password" /></label><br />
                    <label><input className="Address" type="text" placeholder="Address, City, Province, Postal Code" /></label>
                    <label className="idLabel">Attach ID: <input className="id" type="file" id="myFile" name="filename" /></label>
                    <p>By clicking SIGN UP, I agree to amorr's <a>term's and conditions</a> and <a>privacy policy</a></p>
                </div>   
                <input className="submit" type="submit" value="Submit" />
            </form>
        </main>
    );
}

export default ServiceProviderRegistration