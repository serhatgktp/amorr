import React, { Fragment, useState, useEffect } from 'react'
import AppointmentCard from './appointment_card';
import './my_appointment.css'

const my_appointments = ( ) => {
    const appt = {name: "Customer Test", price:"32.22", time:"7:00PM", date:"26 July 2022"};

    return (
      <div className="sp_my_appointments">
          <div className="appointment_section">
            <div className="type_of_appointment_heading">Awaiting Confirmation</div>
            <div className="list_of_appointments">
                <AppointmentCard appt={appt}/>
                <AppointmentCard appt={appt}/>
                <AppointmentCard appt={appt}/>
                <AppointmentCard appt={appt}/>
                <AppointmentCard appt={appt}/>
            </div>
          </div>
      </div>
    )
  }

  
export default my_appointments