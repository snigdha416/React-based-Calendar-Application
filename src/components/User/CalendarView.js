
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // import the calendar styles

const CalendarView = ({ companies }) => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Generate events from communications
    const eventsList = companies.flatMap((company) =>
      company.communications.map((comm) => ({
        date: new Date(comm.date),
        company: company.name,
        communicationType: comm.type,
        status: comm.status,
        notes: comm.notes,
      }))
    );
    setEvents(eventsList);
  }, [companies]);

  // Handle date change on calendar
  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  // Get events for the selected date
  const getEventsForDate = (selectedDate) => {
    return events.filter(
      (event) =>
        event.date.toDateString() === selectedDate.toDateString() // compare just the date part
    );
  };

  const eventsForSelectedDate = getEventsForDate(date);

  return (
    <div className="calendar-container">
      <div className="calendar">
        <Calendar onChange={handleDateChange} value={date} />
      </div>

      <div className="events-list">
        <h3>Communications on {date.toDateString()}:</h3>
        <ul>
          {eventsForSelectedDate.length === 0 ? (
            <li>No communications for this date.</li>
          ) : (
            eventsForSelectedDate.map((event, index) => (
              <li key={index}>
                <strong>{event.company}</strong> - {event.communicationType} (
                {event.status})
                {event.notes && <p>Notes: {event.notes}</p>}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default CalendarView;

