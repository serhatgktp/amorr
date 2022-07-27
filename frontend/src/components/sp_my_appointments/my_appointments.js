import React, { Fragment, useState, useEffect } from 'react'
import AppointmentCard from './appointment_card';
import './my_appointment.css'

const my_appointments = ( ) => {
    const [waitingApptList, setWaitingApptList] = useState([
        {name: "カワイイ", price:"32.22", time:"7:00PM", date:"26 July 2022"},
        {name: "Customer 2", price:"32.22", time:"7:00PM", date:"26 July 2022"},
        {name: "Customer 3", price:"32.22", time:"7:00PM", date:"26 July 2022"},
        {name: "Customer 4", price:"32.22", time:"7:00PM", date:"26 July 2022"},
        {name: "Customer 5", price:"32.22", time:"7:00PM", date:"26 July 2022"}
    ]);

    const [confirmedApptList, setConfirmedApptList] = useState([
        {name: "A", price:"32.22", time:"7:00PM", date:"26 July 2022"},
        {name: "B", price:"32.22", time:"7:00PM", date:"26 July 2022"},
        {name: "C", price:"32.22", time:"7:00PM", date:"26 July 2022"},
        {name: "D", price:"32.22", time:"7:00PM", date:"26 July 2022"},
        {name: "E", price:"32.22", time:"7:00PM", date:"26 July 2022"}
    ]);

    const [pastApptList, setPastApptList] = useState([
        {name: "UwU", price:"32.22", time:"7:00PM", date:"26 July 2022"},
        {name: "OwO", price:"32.22", time:"7:00PM", date:"26 July 2022"},
        {name: "IwI", price:"32.22", time:"7:00PM", date:"26 July 2022"}
    ]);

    return (
      <div className="sp_my_appointments">
          <div className="appointment_section">
            <div className="type_of_appointment_heading">Awaiting Confirmation</div>
            <div className="list_of_appointments">
                {waitingApptList.map((appt) => (
                        <AppointmentCard appt={appt}/>
                ))}
            </div>
          </div>

          <div className="appointment_section">
            <div className="type_of_appointment_heading">Confirmed Appointments</div>
            <div className="list_of_appointments">
                {confirmedApptList.map((appt) => (
                        <AppointmentCard appt={appt}/>
                ))}
            </div>
          </div>

          <div className="appointment_section">
            <div className="type_of_appointment_heading">Past Appointments</div>
            <div className="list_of_appointments">
                {pastApptList.map((appt) => (
                        <AppointmentCard appt={appt}/>
                ))}
            </div>
          </div>
      </div>
    )
  }

  
export default my_appointments