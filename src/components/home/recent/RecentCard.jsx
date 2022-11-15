import React from "react"
import {TiChartArea} from 'react-icons/ti'
import {BiBed} from 'react-icons/bi'
import {MdOutlineBathroom} from 'react-icons/md'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'


const RecentCard = ({list,favs,setFavourites}) => {

  const addToFav=(val)=>{
    
    // let favourites=[]
    //  favourites=JSON.parse(localStorage.getItem("favourites"))
    //  if(favourites)
    //  {
    //   favourites.push(val);
    //  }
    //  else
    //  {
    //   favourites=[]
    //   favourites.push(val);
    //  }
    //  localStorage.setItem("favourites",JSON.stringify(favourites))

    console.log(val,favs,favs.length);
    let favourites=JSON.parse(JSON.stringify(favs))
    let index=favourites.findIndex(f=>f.id==val.id)
    console.log(index,"index");
    if(index>-1)
    favourites.splice(index,1);
    else
    favourites.push(val)

    setFavourites(favourites)


  }

  const checkIfFav=(id)=>{
    if(favs.find(m=>m.id==id))
    return true;
    return false;
  }

  return (
    <>
      <div className='content grid3 mtop'>
        {list.map((val, index) => {
          const { cover, category, location, name, price, type,beds,bathrooms,area,id } = val
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <div className='category'>
                  <span className="price">
                  <span className="num">${price}</span> <span className="price-text">/month</span>
                  </span>
                  <div className="heart" onClick={()=>addToFav(val)}>
                    <div className="fa">
                   {!checkIfFav(id)? <AiOutlineHeart size={30} />:<AiFillHeart size={30} color="#4c84d7"/>}
                    </div>
                  </div>
                
                </div>
                <h4>{name}</h4>
                <p>
                  <i className='fa fa-location-dot'></i> {location}
                </p>
              </div>
              <div className='button flex'>
                <div className="item-box">
                  <div className="icon">
                    <BiBed/>
                  </div>
                  <p className='icon-name'>{beds} beds</p> 
                </div>
                <div className="item-box">
                  <div className="icon">
                    <MdOutlineBathroom/>
                  </div>
                  <p className='icon-name'>{bathrooms} bathrooms</p> 
                </div>
                <div className="item-box">
                  <div className="icon">
                    <TiChartArea/>
                  </div>
                  <p className='icon-name'>{area}m2</p> 
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard
