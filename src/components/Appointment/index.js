import React from 'react'
import "components/Appointment/styles.scss"
import Header from 'components/Appointment/Header';
import Show from 'components/Appointment/Show';
import Empty from 'components/Appointment/Empty';
import useVisualMode from 'hooks/useVisualMode';
import Form from './Form';
import Status from './Status';
import Confirm from './Confirm';

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";

export default function Appointment(props) {
  console.log("Appointment Props: ", props)
  const { mode, transition, back } = useVisualMode(props.interview ? SHOW : EMPTY);

  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING)
    props.bookInterview(props.id, interview)
      .then(() => transition(SHOW))
  }

  const deleteAppoinment = () => {
    transition(DELETING)

    props.cancelInterview(props.id)
      .then(() => transition(EMPTY))
  }

  return (
    <article className="appointment">
      <Header time={props.time} />
      
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && props.interview && (
        <Show
          key={props.id}
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM)}
        />
      )}
      {mode === CREATE && 
        <Form 
          interviewers={props.interviewers} 
          student=""
          interviewer={null}
          onCancel={back} 
          onSave={save} 
        />}
        
        {mode === SAVING && <Status message="Hold Your Beans"/>}
        {mode === DELETING && <Status message="Hold Your Beans"/>}
        {mode === CONFIRM && 
          <Confirm 
            onDelete={deleteAppoinment}  
            onCancel={back}   
            message="Ah shit, here we go again"/>}

    </article>


  )
}
