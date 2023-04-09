import React from 'react'
import classes from "./Meetupitems.module.css"
import Card from '../ui/Card'

export default function Meetupitems(props) {
  return (
    <li className={classes.item}>
        <Card>
    <div className={classes.image}>
        <img src={props.image} alt={props.title}></img>
    </div>

    <div className={classes.content}>
        <h3>{props.title}</h3> 
        <address>{props.address}</address>
        <p>{props.description}</p>
    </div>
    <div className={classes.actions}>
        <button>ADD to fav</button>
    </div>
    </Card>
    </li>
  )
}
