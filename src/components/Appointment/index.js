import React from 'react'
import "components/Appointment/styles.scss"
import Header from 'components/Appointment/Header';
import Show from 'components/Appointment/Show';
import Empty from 'components/Appointment/Empty';


export default function Appointment(props) {

  // const appointmentTime = () => {
  //   let text = "No Appointments"
  //   if (props.time) {
  //     text = "Appointment at " + (props.time);
  //   }
  //   return text
  // }
  return (
    <article className="appointment">
    <Header time={props.time}/>
    {props.interview ? <Show key={props.id} student={props.interview.student} interviewer={props.interview.interviewer}/> : <Empty />}
    </article>

  
  )
}
