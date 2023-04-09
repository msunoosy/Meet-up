import React, { useState,useEffect } from 'react'

import Meetuplist from '../Components/meetups/Meetuplist';

function Allmeetups() {
    const [loading, setLoading] = useState(true)
    const [loadedMeetups, setLoadedMeetups] = useState([])

    useEffect(()=>{
        setLoading(true)
        fetch('https://meet-up-8a3e5-default-rtdb.firebaseio.com/meetups.json').then(res => {
            return res.json();
        }).then(data => {
             const meetups=[]

             for(const key in data) {
                const meetup={
                    id:key,
                    ...data[key]
                }
                meetups.push(meetup)
             }

            setLoading(false)
            setLoadedMeetups(meetups)
        })
    },[])



    if (loading) {
        <section>
            <p>Loding...</p>
        </section>
    }


    return (
        <section>
            <h1>All Meetups</h1>
            <Meetuplist meetups={loadedMeetups} />
        </section>
    )
}

export default Allmeetups