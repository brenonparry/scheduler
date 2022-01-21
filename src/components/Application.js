import React, { useState, useEffect } from "react";
import { getAppointmentsForDay } from "helpers/selectors";
import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointment";
import axios from "axios";






export default function Application(props) {
  
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: []
  });

  const setDay = day => setState({ ...state, day });
  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const appointmentsLayout = dailyAppointments.map((appointment) => <Appointment key={appointment.id} {...appointment} />);

  
  useEffect(() => {

    const daysPromise = axios.get('/api/days');
    const appointmentPromise = axios.get('/api/appointments');
    const interviewersPromise = axios.get('/api/interviewers');
    const promises = [daysPromise, appointmentPromise, interviewersPromise];

    Promise.all(promises)
      .then((all) => {
        
        const days = all[0].data;
        const appointments = all[1].data;
        const interviewers = all[2].data;

        setState(prev => ({...prev, days: days, appointments: appointments}));
      })
      
  }, [])

  return (
    <main className="layout">
      <section className="sidebar">
      <img
        className="sidebar--centered"
        src="images/logo.png"
        alt="Interview Scheduler"
      />
        <hr className="sidebar__separator sidebar--centered" />
          <nav className="sidebar__menu">
          <DayList
            days={state.days}
            value={state.day}
            setDay={setDay}
          />
          </nav>
      <img
  className="sidebar__lhl sidebar--centered"
  src="images/lhl.png"
  alt="Lighthouse Labs"
/>
      </section>
      <section className="schedule" >
        {appointmentsLayout}
      </section>
    </main>
  );
}
