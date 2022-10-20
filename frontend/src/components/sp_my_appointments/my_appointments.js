import React, { Fragment, useState, useEffect } from 'react'
import AppointmentCard from './appointment_cards/appointment_card';
import AwaitingCard from './appointment_cards/awaiting_card';
import ConfirmedCard from './appointment_cards/confirmed_card';
import PastCard from './appointment_cards/past_card';
import './my_appointment.css'

const MyAppointments = () => {
    const [waitingApptList, setWaitingApptList] = useState([]);
    const [confirmedApptList, setConfirmedApptList] = useState([]);
    const [pastApptList, setPastApptList] = useState([]);

    const handleAcceptClick = (e, appt) => {
        e.preventDefault();

        const apptToAccept = {appt_id: appt.appointment_id}

        console.log(apptToAccept)

        // POST REQUEST to accept the selected appointment to confirmed
        fetch("http://localhost:5000/modify-appointment/accept", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            credentials: "include",
            body: JSON.stringify(apptToAccept)
        }).then(response => {
            if (response.ok){
                window.location.reload();
            }
        })
    }

    const handleRejectClick = (e, appt) => {
        e.preventDefault();

        const apptToReject = {appt_id: appt.appointment_id}

        console.log(apptToReject)

        // POST REQUEST to accept the selected appointment to confirmed
        fetch("http://localhost:5000/modify-appointment/reject", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            credentials: "include",
            body: JSON.stringify(apptToReject)
        }).then(response => {
            if (response.ok){
                window.location.reload();
            }
        })
    }

    const handleDoneClick = (e, appt) => {
        e.preventDefault();

        const apptMarkDone = {appt_id: appt.appointment_id}

        console.log(apptMarkDone)

        // POST REQUEST to accept the selected appointment to confirmed
        fetch("http://localhost:5000/modify-appointment/complete", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            credentials: "include",
            body: JSON.stringify(apptMarkDone)
        }).then(response => {
            if (response.ok){
                window.location.reload();
            }
        })
    }

    useEffect(() => {
        // GET REQUEST TO GET AWAITING CONFIRMATION APPOINTMENTS
        fetch("http://localhost:5000/appointments/pending", {credentials: 'include'}).then(response =>
          response.json().then(data => {
            setWaitingApptList(data);
          }));
        // GET REQUEST TO GET CONFIRMED APPOINTMENTS
        fetch("http://localhost:5000/appointments/confirmed", {credentials: 'include'}).then(response =>
        response.json().then(data => {
          setConfirmedApptList(data);
        }));
        // GET REQUEST TO GET PAST APPOINTMENTS
        fetch("http://localhost:5000/appointments/complete", {credentials: 'include'}).then(response =>
        response.json().then(data => {
          setPastApptList(data);
        }));
      }, []);

    return (
      <div className="sp_my_appointments">
          <div className="appointment_section">
            <div className="type_of_appointment_heading">Awaiting Confirmation</div>
            <div className="list_of_appointments">
                {waitingApptList.map((appt) => (
                        <AwaitingCard appt={appt} handleAcceptClick={handleAcceptClick} handleRejectClick={handleRejectClick}/>
                ))}
            </div>
          </div>

          <div className="appointment_section">
            <div className="type_of_appointment_heading">Confirmed Appointments</div>
            <div className="list_of_appointments">
                {confirmedApptList.map((appt) => (
                        <ConfirmedCard appt={appt} handleDoneClick={handleDoneClick}/>
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

  
export default MyAppointments