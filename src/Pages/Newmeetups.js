import React from 'react'
import Newmeetupform from '../Components/meetups/Newmeetupform'
import { useHistory } from 'react-router-dom';

export default function Newmeetups() {
const history=useHistory()


const addMeetupHandler=(meetupData)=>{
    fetch('https://meet-up-8a3e5-default-rtdb.firebaseio.com/meetups.json',{
        method:'POST',
        body:JSON.stringify(meetupData)
    }).then(()=>{
        history.replace('/ ')
    })

}

  return (
   <section>
    <h1> New meetups</h1>
    <Newmeetupform onAddMeetup={addMeetupHandler}/>
   </section>

  )
}
