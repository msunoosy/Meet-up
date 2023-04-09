import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Mainnavigation.module.css'


export default function Mainnavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo} >React meetup</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/' >Allmeetups</Link>
                    </li>
                    <li>
                        <Link to='/newmeetups' >New meetups</Link>
                    </li>
                    <li>
                        <Link to='/favourites' >Favorite meetups</Link>
                    </li>
                </ul>
            </nav>
        </header>

    )
}
