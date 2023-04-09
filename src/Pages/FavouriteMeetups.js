import React,{useContext} from 'react'
import FavoritesContext from '../store/favorites-context'
import Meetuplist from '../Components/meetups/Meetuplist';
export default function FavouriteMeetups() {

  const favoritesCtx=useContext(FavoritesContext)
  
  let content; 
  if (favoritesCtx.totalFavorites===0){
    content=<p>No Favorites Available</p>
  }else{
    content=<Meetuplist meetups={favoritesCtx.favorites}></Meetuplist>
  }

    
  return (
    <section>
    <h1>Favourite Meetups</h1> 
    {content}
   
    </section>
  )
}
