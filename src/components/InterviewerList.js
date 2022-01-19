import React from 'react'
import "components/InterviewerList.scss"
import InterviewerListItem from './InterviewerListItem';
import classNames from 'classnames';

export default function InterviewerList(props) {

  const interviewerList = props.interviewers.map(interviewer => <InterviewerListItem 
    key={interviewer.id} 
    {...interviewer} 
    selected={interviewer.id === props.interviewer} 
    setInterviewer={props.setInterviewer} 
    />);

    const listClass = classNames("interviewers__list", {
      "interviewers__list--selected": props.selected
    })

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className={listClass} onClick={() => props.setInterviewer}>{ interviewerList }</ul>
    </section>
  )
}
