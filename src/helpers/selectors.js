const state = {
  days: [
    {
      id: 1,
      name: "Monday",
      appointments: [1, 2, 3]
    },
    {
      id: 2,
      name: "Tuesday",
      appointments: [4, 5]
    }
  ],
  appointments: {
    "1": { id: 1, time: "12pm", interview: null },
    "2": { id: 2, time: "1pm", interview: null },
    "3": {
      id: 3,
      time: "2pm",
      interview: { student: "Archie Cohen", interviewer: 2 }
    },
    "4": { id: 4, time: "3pm", interview: null },
    "5": {
      id: 5,
      time: "4pm",
      interview: { student: "Chad Takahashi", interviewer: 2 }
    }
  },
  interviewers: {
    "1": {  
      "id": 1,
      "name": "Sylvia Palmer",
      "avatar": "https://i.imgur.com/LpaY82x.png"
    },
    "2": {
      id: 2,
      name: "Tori Malcolm",
      avatar: "https://i.imgur.com/Nmx0Qxo.png"
    }
  }
};


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

export const getInterview = (state, interveiw) => {
  // console.log(interveiw)
  // console.log(state.interviewers[interveiw.interviewer])
  if(interveiw) {
    console.log("++++++++++++++++++++++++=", {...interveiw, interviewer: state.interviewers[interveiw.interviewer]})
    return {...interveiw, interviewer: state.interviewers[interveiw.interviewer]};
  }  
  
  return null
}
