import React from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
//import '@fullcalendar/core/main.css';
//import '@fullcalendar/daygrid/main.css';

function Calendar({events}) {
    return (
        <div>
            <div className="max-w-screen-lg mx-auto p-4">
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    events={events}
                />
            </div>
        </div>
    )
}

export default Calendar