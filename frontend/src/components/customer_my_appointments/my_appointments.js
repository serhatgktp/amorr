import React, { Fragment, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import AppointmentCard from './appointment_cards/appointment_card';
import AwaitingCard from './appointment_cards/awaiting_card';
import ConfirmedCard from './appointment_cards/confirmed_card';
import PastCard from './appointment_cards/past_card';
import './my_appointment.css'

const MyAppointments = () => {
    let navigate = useNavigate();

    const [waitingApptList, setWaitingApptList] = useState([]);
    const [confirmedApptList, setConfirmedApptList] = useState([]);
    const [pastApptList, setPastApptList] = useState([]);

    const handleReviewClick = (e, appt) => {
        e.preventDefault();
        // NAVIGATE TO REVIEW PAGE (DYNAMIC ENDPOINTS) 
        const reviewAndApptId = "/review/" + appt.appointment_id;
        setTimeout(function () {
          navigate(reviewAndApptId);
          window.location.reload();
      }, 500);
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