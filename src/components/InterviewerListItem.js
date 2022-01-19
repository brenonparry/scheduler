import React from 'react'
import "components/InterviewerListItem.scss"
import classNames from 'classnames'

export default function InterviewerListItem(props) {

  const listClass = classNames("interviewers__item", {
      "interviewers__item--selected": props.selected,
    }
  )

  return (
  <li className={listClass} onClick={() => props.setInterviewer(props.id)}>
    <img
      className="interviewers__item-image"
      src={ props.avatar }
      alt="Sylvia Palmer"
    />
    {props.selected === true && <>{ props.name }</>}
  </li>
  )
}