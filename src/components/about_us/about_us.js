import React from 'react';  
import peacock from "../../assets/about_us/peacock.png"; 
import './styles.css';
import { Icon } from '@iconify/react';

function App() {
    return (
      <div className='about_us_wrapper'>
        <div className="container">
          <div className="box">
            <div className="titleContainer">
              <h1 className="title">
                <span className="about">About</span>
                <span className="space"> </span>
                <span className="a">a</span>
                <span className="morr">morr</span>
              </h1>
            </div>
            <div className='about_amorr'>
              <p className="p">
              Amorr is a web application that serves as an online platform providing 
              users with the luxury of choosing and receiving various services such as 
              haircuts, manicures, massages, makeup, and more in the comfort of their home.
              </p>
              <p className="p">
              Amorr provides a convenient way to find and have beauty services provided to people who:
              <br></br>
              <br></br>Do not have the time (Scheduling issues or Traffic)
              <br></br>Do not have the means of transportation
              <br></br>Do not know about the quality of service
              </p>
              <p className="p">
              Customers and service providers in Amorr go through a rigorous sign-up process to ensure authenticity and security of both our clients and service providers. 
              So what are you waiting for? Join Amorr and explore the beauty services world now!
              </p>
            </div>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <a href="/contact/"><button id="service" type="submit">Connect With Us<Icon icon="akar-icons:arrow-right" inline={true} style={{ marginLeft:'7px', verticalAlign: '-0.3em', fontSize:'21px' }}/></button></a>
              <img src={peacock} className="img-peacock" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default App;