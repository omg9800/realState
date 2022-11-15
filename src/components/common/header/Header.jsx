import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"
import { AiOutlineHeart} from 'react-icons/ai'

const Header = ({favs}) => {
  const [navList, setNavList] = useState(false)

  console.log(favs,"favs");
  
  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            {/* <img src='./images/logo.png' alt='' /> */}
            <p className="bold gr">Estatery</p>
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex'>
            <Link to="/favs" className="favs">
              <AiOutlineHeart size={30}/>
              <p className="fav-nums">{favs.length}</p>
            </Link>
            <button className='btn1'>
              <i className='fa fa-sign-out'></i> Sign In
            </button>
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
