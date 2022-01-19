import React from 'react'
import DayListItem from './DayListItem'

export default function DayList(props) {
  const daylist = props.days.map(day => <DayListItem key={day.id} {...day} selected={day.name === props.day} setDay={props.setDay} />)
  return (
    <ul>
     {daylist}
   </ul>
  )
}
