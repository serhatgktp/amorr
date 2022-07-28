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

    // const handleAcceptClick = (e, appt) => {
    //     e.preventDefault();

    //     const apptToAccept = {appt_id: appt.appt_id}

    //     console.log(apptToAccept)

    //     // POST REQUEST to accept the selected appointment to confirmed
    //     // fetch("http://localhost:5000/sp-accept-appt", {
    //     //     method: 'POST',
    //     //     headers: {"Content-Type": "application/json"},
    //     //     credentials: "include",
    //     //     body: JSON.stringify(apptToAccept)
    //     // }).then(response => {
    //     //     if (response.ok){
    //     //         window.location.reload();
    //     //     }
    //     // })
    // }

    // const handleRejectClick = (e, appt) => {
    //     e.preventDefault();

    //     const apptToReject = {appt_id: appt.appt_id}

    //     console.log(apptToReject)

    //     // POST REQUEST to accept the selected appointment to confirmed
    //     // fetch("http://localhost:5000/sp-reject-appt", {
    //     //     method: 'POST',
    //     //     headers: {"Content-Type": "application/json"},
    //     //     credentials: "include",
    //     //     body: JSON.stringify(apptToAccept)
    //     // }).then(response => {
    //     //     if (response.ok){
    //     //         window.location.reload();
    //     //     }
    //     // })
    // }

    // const handleDoneClick = (e, appt) => {
    //     e.preventDefault();

    //     const apptMarkDone = {appt_id: appt.appt_id}

    //     console.log(apptMarkDone)

    //     // POST REQUEST to accept the selected appointment to confirmed
    //     // fetch("http://localhost:5000/sp-mark-done-appt", {
    //     //     method: 'POST',
    //     //     headers: {"Content-Type": "application/json"},
    //     //     credentials: "include",
    //     //     body: JSON.stringify(apptToAccept)
    //     // }).then(response => {
    //     //     if (response.ok){
    //     //         window.location.reload();
    //     //     }
    //     // })
    // }

    // // GET REQUEST TO GET AWAITING CONFIRMATION APPOINTMENTS
    useEffect(() => {
        fetch("http://localhost:5000/appointments/awaiting", {credentials: 'include'}).then(response =>
          response.json().then(data => {
            setWaitingApptList(data);
          })
        );
      }, []);

    // // GET REQUEST TO GET CONFIRMED APPOINTMENTS
    useEffect(() => {
        fetch("http://localhost:5000/appointments/confirmed", {credentials: 'include'}).then(response =>
          response.json().then(data => {
            setConfirmedApptList(data);
          })
        );
      }, []);

    // // GET REQUEST TO GET PAST APPOINTMENTS
    useEffect(() => {
        fetch("http://localhost:5000/appointments/past", {credentials: 'include'}).then(response =>
          response.json().then(data => {
            setPastApptList(data);
          })
        );
      }, []);

    return (
      <div className="sp_my_appointments">
          <div className="appointment_section">
            <div className="type_of_appointment_heading">Awaiting Confirmation</div>
            <div className="list_of_appointments">
                {waitingApptList.map((appt) => (
                        // <AwaitingCard appt={appt} handleAcceptClick={handleAcceptClick} handleRejectClick={handleRejectClick}/>
                        <AwaitingCard appt={appt}/>
                ))}
            </div>
          </div>

          <div className="appointment_section">
            <div className="type_of_appointment_heading">Confirmed Appointments</div>
            <div className="list_of_appointments">
                {confirmedApptList.map((appt) => (
                        // <ConfirmedCard appt={appt} handleDoneClick={handleDoneClick}/>
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