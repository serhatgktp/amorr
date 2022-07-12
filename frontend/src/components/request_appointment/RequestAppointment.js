import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './RequestAppointment.css'

function RequestAppointment() {
    const [date, setDate] = useState(new Date());
    
    const onChange = date => {
        setDate(date);
    };

    return (
        <div className="RA_dateCalendar">
            <Calendar onChange={onChange} value={date} />
        </div>
    )
}

export default RequestAppointment