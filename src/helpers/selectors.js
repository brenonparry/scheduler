export const getAppointmentsForDay = (state, day) => {
  const filteredDays = state.days.filter((filteredDay) => filteredDay.name === day);

  let appointmentArray = [];

  if (filteredDays.length !== 0) {
    for (const element of filteredDays[0].appointments) {
      appointmentArray.push(state.appointments[element]);

    };
  };

  return appointmentArray;
};

export const getInterview = (state, interveiw) => {

  if (interveiw) {
    return { ...interveiw, interviewer: state.interviewers[interveiw.interviewer] };
  };

  return null;
};

export const getInterviewersForDay = (state, day) => {
  const filteredDays = state.days.filter((filteredDay) => filteredDay.name === day);

  let interviewersArray = [];

  if (filteredDays[0]) {
    const interviewersById = filteredDays[0].interviewers
    interviewersById.map((interviewer) => interviewersArray.push(state.interviewers[interviewer]));
  };

  return interviewersArray;
};