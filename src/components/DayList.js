import React from 'react'
import DayListItem from './DayListItem'

export default function DayList(props) {
  const daylist = props.days.map(day => <DayListItem key={day.id} {...day} selected={props.name === props.value} setDay={props.onChange} />)
  return (
    <ul>
     {daylist}
   </ul>
  )
}
