import React from 'react'
import Meetupitems from './Meetupitems'
import classes from "./Meetuplist.module.css"

export default function Meetuplist(props) {
  return (
   <ul className={classes.list}>
    {props.meetups.map(meetup=><Meetupitems key={meetup.id} 
    id={meetup.id}  image={meetup.image}
    title={meetup.title} address={meetup.address}
    description={meetup.description} ></Meetupitems>)}
   </ul>
  )
}
