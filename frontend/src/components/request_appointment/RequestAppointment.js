import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './RequestAppointment.css'
import { Icon } from '@iconify/react';

function RequestAppointment() {
    const [date, setDate] = useState(new Date());
    
    const onChange = date => {
        setDate(date);
    };

    return (
        <div className="RA_left">
            <div className="RA_dateCalendar">
                <Calendar 
                    onChange={onChange}
                    value={date}
                    maxDate={new Date(2024, 12, 31)} // can only select dates within 2 years
                    minDate={new Date()} // cannot select dates before today
                    minDetail='year'
                />
            </div>
            <div class="RA_text">
                <span className='RA_selectedDateText'>
                    <Icon id="RA_dateIcon" icon="fontisto:date"/>
                    Selected Date:{' '}
                    {date.toDateString()}
                </span>
            </div>
        </div>
    )
}

export default RequestAppointment