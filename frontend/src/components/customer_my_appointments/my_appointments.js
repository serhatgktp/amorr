import React, { Fragment, useState, useEffect } from 'react'
import AppointmentCard from './appointment_cards/appointment_card';
import AwaitingCard from './appointment_cards/awaiting_card';
import ConfirmedCard from './appointment_cards/confirmed_card';
import PastCard from './appointment_cards/past_card';
import './my_appointment.css'

const MyAppointments = () => {
    const [waitingApptList, setWaitingApptList] = useState([
      {appt_id: 1, name: "Customer 1", price:"99.99", services: "Extra Haircut, Massage", time:"7:00PM", date:"26 September 2022", address:"1 Uwu Road, M1C4Y7", reviewed:"1"},
      {appt_id: 2, name: "Customer 2", price:"32.22", services: "Eyebrow, Eyeliner", time:"8:00PM", date:"26 June 2022", address:"1 OwO Road, M1C4Y7", reviewed:"0"},
      {appt_id: 3, name: "Customer 3", price:"32.22", services: "Men's Haircut", time:"7:00AM", date:"26 July 2022", address:"1 EhE Road, M1C4Y7", reviewed:"0"}
    ]);
    const [confirmedApptList, setConfirmedApptList] = useState([
      {appt_id: 1, name: "Customer 1", price:"99.99", services: "Extra Haircut, Massage", time:"7:00PM", date:"26 September 2022", address:"1 Uwu Road, M1C4Y7", reviewed:"1"},
      {appt_id: 2, name: "Customer 2", price:"32.22", services: "Eyebrow, Eyeliner", time:"8:00PM", date:"26 June 2022", address:"1 OwO Road, M1C4Y7", reviewed:"0"},
      {appt_id: 3, name: "Customer 3", price:"32.22", services: "Men's Haircut", time:"7:00AM", date:"26 July 2022", address:"1 EhE Road, M1C4Y7", reviewed:"0"}
    ]);
    const [pastApptList, setPastApptList] = useState([
      {appt_id: 1, name: "Customer 1", price:"99.99", services: "Extra Haircut, Massage", time:"7:00PM", date:"26 September 2022", address:"1 Uwu Road, M1C4Y7", reviewed:"1"},
      {appt_id: 2, name: "Customer 2", price:"32.22", services: "Eyebrow, Eyeliner", time:"8:00PM", date:"26 June 2022", address:"1 OwO Road, M1C4Y7", reviewed:"0"},
      {appt_id: 3, name: "Customer 3", price:"32.22", services: "Men's Haircut", time:"7:00AM", date:"26 July 2022", address:"1 EhE Road, M1C4Y7", reviewed:"0"}
    ]);

    const handleReviewClick = (e, appt) => {
        e.preventDefault();

        const apptToMakeReview = {appt_id: appt.appointment_id}

        console.log(apptToMakeReview)

        // POST REQUEST to accept the selected appointment to confirmed
        // fetch("http://localhost:5000/modify-appointment/accept", {
        //     method: 'POST',
        //     headers: {"Content-Type": "application/json"},
        //     credentials: "include",
        //     body: JSON.stringify(apptToAccept)
        // }).then(response => {
        //     if (response.ok){
        //         window.location.reload();
        //     }
        // })
    }
    
    // useEffect(() => {
    //     // GET REQUEST TO GET AWAITING CONFIRMATION APPOINTMENTS
    //     fetch("http://localhost:5000/appointments/pending", {credentials: 'include'}).then(response =>
    //       response.json().then(data => {
    //         setWaitingApptList(data);
    //       }));
    //     // GET REQUEST TO GET CONFIRMED APPOINTMENTS
    //     fetch("http://localhost:5000/appointments/confirmed", {credentials: 'include'}).then(response =>
    //     response.json().then(data => {
    //       setConfirmedApptList(data);
    //     }));
    //     // GET REQUEST TO GET PAST APPOINTMENTS
    //     fetch("http://localhost:5000/appointments/complete", {credentials: 'include'}).then(response =>
    //     response.json().then(data => {
    //       setPastApptList(data);
    //     }));
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
                        <PastCard appt={appt} handleReviewClick={handleReviewClick}/>
                ))}
            </div>
          </div>
      </div>
    )
  }

  
export default MyAppointments