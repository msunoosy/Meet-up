import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import classes from './Mainnavigation.module.css'
import FavoritesContext from '../../store/favorites-context'


export default function Mainnavigation() {
   const favoritesCtx=useContext(FavoritesContext)

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
                        <Link to='/favourites' >Favorite meetups <span className={classes.badge}>{favoritesCtx.totalFavorites}</span></Link>
                    </li>
                </ul>
            </nav>
        </header>

    )
}
