import Todo from "./Components/Todo"
import { Route,Switch  } from "react-router-dom";
import Allmeetups from "./Pages/Allmeetups";
import Newmeetups from "./Pages/Newmeetups";
import FavouriteMeetups from "./Pages/FavouriteMeetups";
import Layout from "./Components/layout/Layout";
 
function App() {
  return (
  <Layout>
   {/* <h1>My Todos</h1>
   <Todo text="React learning"></Todo>
   <Todo text="Master Piece"></Todo>
   <Todo text="go to learning"></Todo> */}
   
<Switch>
  <Route path="/" exact>
<Allmeetups></Allmeetups>
  </Route>
  <Route path="/newmeetups">
<Newmeetups></Newmeetups>
  </Route>
  <Route path='/favourites'>
<FavouriteMeetups></FavouriteMeetups>
  </Route>
</Switch>
  </Layout>
  );
}

export default App;
