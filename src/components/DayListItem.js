import React from 'react'
import "components/DayListItem.scss"
import classNames from "classnames";

export default function DayListItem(props) {
  const formatSpots = () => {
    return props.spots === 0 ? "no spots remaining" : (props.spots === 1 ? "1 spot remaining" : `${props.spots} spots remaining`)
  };

  const listClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": (props.spots === 0)
  });

  return (
    <li data-testid={props.name} className={listClass} onClick={() => props.setDay(props.name)} selected={props.selected}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
};
