import React, { Fragment, useState, useEffect } from 'react'
import AppointmentCard from './appointment_card';
import './my_appointment.css'

const my_appointments = ( ) => {
    const appt = {name: "Customer Test", price:"32.22", time:"7:00PM", date:"26 July 2022"};

    return (
      <div className="my_appointments">
          <AppointmentCard appt={appt}/>
      </div>
    )
  }

  
export default my_appointments