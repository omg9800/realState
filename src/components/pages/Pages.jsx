import React,{useState,useEffect} from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import Favourites from "../favourites/Favourites"

const Pages = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
console.log(favourites,"changed!!");
  }, [favourites])
  
  return (
    <>
      <Router>
        <Header favs={favourites}/>
        <Switch>
          <Route exact path='/' component={() => <Home favs={favourites} setFavourites={setFavourites}/>} />
          <Route exact path='/favs' component={() => <Favourites favs={favourites} setFavourites={setFavourites}/>} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
