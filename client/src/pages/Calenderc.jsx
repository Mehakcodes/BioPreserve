
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../App.css';

const localizer = momentLocalizer(moment);
const eventData = [
  {
    id: 1,
    title: 'Wildlife Watch',
    location: 'Rohini Sec 24, New Delhi',
    start: new Date(2024, 4, 1, 0, 0, 0),
    end: new Date(2024, 4, 1, 2, 0, 0),
  },
  {
    id: 2,
    title: 'Heritage Fair',
    location: 'Rohini Sec 24, New Delhi',
    start: new Date(2024, 4, 4, 9, 0, 0),
    end: new Date(2024, 4, 4, 13, 0, 0),
  },
  {
    id: 3,
    title: 'Green Gathering',
    location: 'Rohini Sec 24, New Delhi',
    start: new Date(2024, 4, 15, 9, 0, 0),
    end: new Date(2024, 4, 15, 13, 0, 0),
  },
  {
    id: 4,
    title: 'Paw Protection',
    location: 'Rohini Sec 24, New Delhi',
    start: new Date(2024, 4, 30, 8, 30, 0),
    end: new Date(2024, 4, 30, 12, 30, 0),
  },
  {
    id: 5,
    title: 'Heritage Expo',
    location: 'Rohini Sec 24, New Delhi',
    start: new Date(2024, 4, 2, 8, 30, 0),
    end: new Date(2024, 4, 2, 12, 30, 0),
  },
  {
    id: 6,
    title: 'Biodiversity Day',
    location: 'Rohini Sec 24, New Delhi',
    start: new Date(2024, 4, 20, 10, 0, 0),
    end: new Date(2024, 4, 20, 17, 0, 0),
  },
  {
    id: 7,
    title: 'Green Gathering',
    location: 'Rohini Sec 24, New Delhi',
    start: new Date(2024, 3, 15, 9, 0, 0),
    end: new Date(2024, 3, 15, 17, 0, 0),
  },
  {
    id: 8,
    title: 'Earth Guardians Meet',
    location: 'Rohini Sec 24, New Delhi',
    start: new Date(2024, 4, 25, 10, 0, 0),
    end: new Date(2024, 4, 25, 16, 0, 0),
  },
  {
    id: 9,
    title: 'Biodiversity Bash',
    location: 'Rohini Sec 24, New Delhi',
    start: new Date(2024, 4, 5, 9, 0, 0),
    end: new Date(2024, 4, 5, 17, 0, 0),
  },
  {
    id: 10,
    title: 'Wildlife Watch',
    location: 'Rohini Sec 24, New Delhi',
    start: new Date(2024, 4, 10, 14, 0, 0),
    end: new Date(2024, 4, 10, 18, 0, 0),
  },
  {
    id: 11,
    title: 'Nature Care Day',
    location: 'Rohini Sec 24, New Delhi',
    start: new Date(2024, 3, 22, 10, 0, 0),
    end: new Date(2024, 3, 22, 16, 0, 0),
  },
];

const Event = ({ event }) => (
  <span>
    <strong>{event.title}</strong>
    <br />
    <em>{event.location}</em>
  </span>
);

const Calenderc = () => {
  const [events, setEvents] = useState(eventData);

  return (
    <div style={{ height: '100vh' }}>
      <Calendar
        className='black-calendar text-white'
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
        components={{
          event: Event,
        }}
      />
    </div>
  );
};

export default Calenderc;
