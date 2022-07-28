import React, { Fragment, useState, useEffect } from 'react'
import AppointmentCard from './appointment_cards/appointment_card';
import AwaitingCard from './appointment_cards/awaiting_card';
import ConfirmedCard from './appointment_cards/confirmed_card';
import PastCard from './appointment_cards/past_card';
import './my_appointment.css'

const my_appointments = ( ) => {
    const [waitingApptList, setWaitingApptList] = useState([
        {appt_id: 1, name: "Customer 1", price:"99.99", services: "Extra Haircut, Massage", time:"7:00PM", date:"26 September 2022", address:"1 Uwu Road, M1C4Y7"},
        {appt_id: 2, name: "Customer 2", price:"32.22", services: "Eyebrow, Eyeliner", time:"8:00PM", date:"26 June 2022", address:"1 OwO Road, M1C4Y7"},
        {appt_id: 3, name: "Customer 3", price:"32.22", services: "Men's Haircut", time:"7:00AM", date:"26 July 2022", address:"1 EhE Road, M1C4Y7"},
        {appt_id: 4, name: "Customer 4", price:"32.22", services: "Bob Cut", time:"9:00PM", date:"20 July 2022", address:"1 WrW Road, M1C4Y7"},
        {appt_id: 5, name: "Customer 5", price:"32.22", services: "Hairdye", time:"11:11PM", date:"26 July 2022", address:"1 ZuZ Road, M1C4Y7"}
    ]);

    const [confirmedApptList, setConfirmedApptList] = useState([
        {appt_id: 1, name: "Customer 1", price:"99.99", services: "Extra Haircut, Massage", time:"7:00PM", date:"26 September 2022", address:"1 Uwu Road, M1C4Y7"},
        {appt_id: 2, name: "Customer 2", price:"32.22", services: "Eyebrow, Eyeliner", time:"8:00PM", date:"26 June 2022", address:"1 OwO Road, M1C4Y7"},
        {appt_id: 3, name: "Customer 3", price:"32.22", services: "Men's Haircut", time:"7:00AM", date:"26 July 2022", address:"1 EhE Road, M1C4Y7"},
        {appt_id: 4, name: "Customer 4", price:"32.22", services: "Bob Cut", time:"9:00PM", date:"20 July 2022", address:"1 WrW Road, M1C4Y7"},
        {appt_id: 5, name: "Customer 5", price:"32.22", services: "Hairdye", time:"11:11PM", date:"26 July 2022", address:"1 ZuZ Road, M1C4Y7"}
    ]);

    const [pastApptList, setPastApptList] = useState([
        {appt_id: 1, name: "Customer 1", price:"99.99", services: "Extra Haircut, Massage", time:"7:00PM", date:"26 September 2022", address:"1 Uwu Road, M1C4Y7"},
        {appt_id: 2, name: "Customer 2", price:"32.22", services: "Eyebrow, Eyeliner", time:"8:00PM", date:"26 June 2022", address:"1 OwO Road, M1C4Y7"},
        {appt_id: 3, name: "Customer 3", price:"32.22", services: "Men's Haircut", time:"7:00AM", date:"26 July 2022", address:"1 EhE Road, M1C4Y7"},
        {appt_id: 4, name: "Customer 4", price:"32.22", services: "Bob Cut", time:"9:00PM", date:"20 July 2022", address:"1 WrW Road, M1C4Y7"},
        {appt_id: 5, name: "Customer 5", price:"32.22", services: "Hairdye", time:"11:11PM", date:"26 July 2022", address:"1 ZuZ Road, M1C4Y7"}
    ]);

    // // GET REQUEST TO GET AWAITING CONFIRMATION APPOINTMENTS
    // useEffect(() => {
    //     fetch("http://localhost:5000/get-sp-awaiting-appts", {credentials: 'include'}).then(response =>
    //       response.json().then(data => {
    //         setWaitingApptList(data);
    //       })
    //     );
    //   }, []);

    // // GET REQUEST TO GET CONFIRMED APPOINTMENTS
    // useEffect(() => {
    //     fetch("http://localhost:5000/get-sp-confirmed-appts", {credentials: 'include'}).then(response =>
    //       response.json().then(data => {
    //         setConfirmedApptList(data);
    //       })
    //     );
    //   }, []);

    // // GET REQUEST TO GET PAST APPOINTMENTS
    // useEffect(() => {
    //     fetch("http://localhost:5000/get-sp-past-appts", {credentials: 'include'}).then(response =>
    //       response.json().then(data => {
    //         setPastApptList(data);
    //       })
    //     );
    //   }, []);

    return (
      <div className="sp_my_appointments">
          <div className="appointment_section">
            <div className="type_of_appointment_heading">Awaiting Confirmation</div>
            <div className="list_of_appointments">
                {waitingApptList.map((appt) => (
                        <AwaitingCard appt={appt}/>
                ))}
            </div>
          </div>

          <div className="appointment_section">
            <div className="type_of_appointment_heading">Confirmed Appointments</div>
            <div className="list_of_appointments">
                {confirmedApptList.map((appt) => (
                        <ConfirmedCard appt={appt}/>
                ))}
            </div>
          </div>

          <div className="appointment_section">
            <div className="type_of_appointment_heading">Past Appointments</div>
            <div className="list_of_appointments">
                {pastApptList.map((appt) => (
                        <PastCard appt={appt}/>
                ))}
            </div>
          </div>
      </div>
    )
  }

  
export default my_appointments