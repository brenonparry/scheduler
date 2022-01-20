import React from 'react'
import "components/Appointment/styles.scss"

export default function Appointment(props) {

  const appointmentTime = () => {
    let text = "No Appointments"
    if (props.time) {
      text = "Appointment at " + (props.time);
    }
    return text
  }
  return (
    <article className="appointment">{appointmentTime()}</article>
  )
}
