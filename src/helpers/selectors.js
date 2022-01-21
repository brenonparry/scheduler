export const getAppointmentsForDay = (state, day) => {
  const filteredDays = state.days.filter((filteredDay) => filteredDay.name === day);

  // console.log("filteredDays: ", filteredDays)
  let appointmentArray = [];

  if (filteredDays.length !== 0) {
    for (const element of filteredDays[0].appointments) {
      appointmentArray.push(state.appointments[element]);
      // console.log(state.appointments[element])
    }
  }

  return appointmentArray;
}
