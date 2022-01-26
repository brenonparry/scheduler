import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = (day) => setState({ ...state, day });

  const bookInterview = (id, interview, editing = false) => {

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const newState = {
      appointments,
    }
    if (!editing) {
      // const days = [...state.days]
      const days = JSON.parse(JSON.stringify(state.days))
      for (const day of days) {

        if (day.appointments.includes(id)) {
          day.spots--;
        }
      }
      console.log("STATE.DAYS: ", state.days)
      console.log("DAYS: ", days)
      newState['days'] = days
    }
    return (
      axios.put(`/api/appointments/${id}`, appointment)
        .then(() => setState({ ...state, ...newState }))
      
      );
    }

  const cancelInterview = (id) => {

    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };


    const days = [...state.days]
    for (const day of days) {

      if (day.appointments.includes(id)) {
        day.spots++;
      }
    }


    return (
      axios.delete(`/api/appointments/${id}`, appointment)
        .then(() => setState({ ...state, appointments, days }))

    );
  }

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

        setState(prev => ({ ...prev, days: days, appointments: appointments, interviewers: interviewers }));
      })

  }, [])

  return { state, setDay, bookInterview, cancelInterview };
}