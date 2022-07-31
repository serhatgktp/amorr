import React from 'react';  
import peacock from "../../assets/about_us/peacock.png"; 
import './styles.css';

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
            <p className="p1">
            Amorr is a web application that serves as an online platform providing 
            users with the luxury of choosing and receiving various services such as 
            haircuts, manicures, massages, makeup, and more in the comfort of their home.
            </p>
            <p className="p2">
            Amorr provides a convenient way to find and have beauty services provided to people who:
            <br></br>
            <br></br>Do not have the time (Scheduling issues or Traffic)
            <br></br>Do not have the means of transportation
            <br></br>Do not know about the quality of service
            </p>
            <p className="p1">
            Customers and service providers in Amorr go through a rigorous sign-up process to ensure authenticity and security of both our clients and service providers. 
            So what are you waiting for? Join Amorr and explore the beauty services world now!
            </p>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <button className="click">Connect with Us </button>
              <img src={peacock} className="img-peacock" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default App;