import React,{useEffect,useState} from 'react'
import Recent from '../home/recent/Recent'
// import { list } from '../data/Data'
const Favourites = ({favs,setFavourites}) => {
const [list, seTlist] = useState([])

useEffect(() => {
let arr=[]
arr=JSON.parse(localStorage.getItem("favourites"))
console.log(arr,"list");
seTlist(arr)
}, [])


  return (
   <>
   <Recent title={"Favourites"} subtitle="These are the favourites rent houses!" list={favs} favs={favs} setFavourites={setFavourites}/>
   </>
  )
}

export default Favourites