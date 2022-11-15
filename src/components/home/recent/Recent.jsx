import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = ({list,title,subtitle,favs,setFavourites}) => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title={title} subtitle={subtitle} />
          <RecentCard list={list} favs={favs} setFavourites={setFavourites} />
        </div>
      </section>
    </>
  )
}

export default Recent
