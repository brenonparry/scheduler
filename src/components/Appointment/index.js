import React from 'react'
import "components/Appointment/styles.scss"
import Header from 'components/Appointment/Header';
import Show from 'components/Appointment/Show';
import Empty from 'components/Appointment/Empty';
import useVisualMode from 'hooks/useVisualMode';
import Form from './Form';
import Status from './Status';
import Confirm from './Confirm';
import Error from './Error';

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

export default function Appointment(props) {

  const { mode, transition, back } = useVisualMode(props.interview ? SHOW : EMPTY);

  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING)
    props.bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch(() => transition(ERROR_SAVE, true));
  };

  const deleteAppoinment = () => {
    transition(DELETING, true)

    props.cancelInterview(props.id)
      .then(() => transition(EMPTY))
      .catch(() => transition(ERROR_DELETE, true));
  };

  return (
    <article className="appointment">
      <Header time={props.time} />

      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && props.interview &&
        <Show
          key={props.id}
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM)}
          onEdit={() => transition(EDIT)}
        />
      }

      {mode === CREATE &&
        <Form
          student=""
          interviewers={props.interviewers}
          interviewer={null}
          onCancel={back}
          onSave={save}
        />
      }

      {mode === EDIT &&
        <Form
          student={props.interview.student}
          interviewers={props.interviewers}
          interviewer={props.interview.interviewer.id}
          onCancel={back}
          onSave={save}
        />
      }

      {mode === SAVING && <Status message="Saving...Hold Your Beans" />}
      {mode === DELETING && <Status message="Deleting...Hold Your Beans" />}

      {mode === CONFIRM &&
        <Confirm
          onDelete={deleteAppoinment}
          onCancel={back}
          message="Are you sure you have it in you to do this?"
        />
      }


      {mode === ERROR_SAVE &&
        <Error onClose={back} message="ERROR: Cannot save appointment. Sorry dawg" />}
      {mode === ERROR_DELETE &&
        <Error onClose={back} message="ERROR: Cannot delete appointment. Sorry dawg" />}

    </article>

  );
};
