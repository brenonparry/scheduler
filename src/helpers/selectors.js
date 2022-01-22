export const getAppointmentsForDay = (state, day) => {
  const filteredDays = state.days.filter((filteredDay) => filteredDay.name === day);

  let appointmentArray = [];

  if (filteredDays.length !== 0) {
    for (const element of filteredDays[0].appointments) {
      appointmentArray.push(state.appointments[element]);
    
    }
  }

  return appointmentArray;
}

export const getInterview = (state, interveiw) => {

  if(interveiw) {
    return {...interveiw, interviewer: state.interviewers[interveiw.interviewer]};
  }  
  
  return null
}
