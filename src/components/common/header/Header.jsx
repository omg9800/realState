import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"
import { AiOutlineHeart,AiOutlineClose} from 'react-icons/ai'
import {MdMenu} from 'react-icons/md'

const Header = ({favs}) => {
  const [navList, setNavList] = useState(false)

  console.log(favs,"favs");
  
  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <p className="bold gr">Estatery</p>
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
               <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
              <li>
               <Link to="/favs" className="favs">
              <AiOutlineHeart size={30}/>
              <p className="fav-nums">{favs.length}</p>
            </Link>
            </li>

            </ul>
          </div>
          <div className='button flex'>
           
            <button className='btn1'>
              <i className='fa fa-sign-out'></i> Sign In
            </button>
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{!navList ? <MdMenu className="menu" size={30} color="white"/> : <AiOutlineClose className="menu" size={25} color="white"/>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
