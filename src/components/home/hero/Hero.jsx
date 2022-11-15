import React, { useState, useEffect } from "react";
import Heading from "../../common/Heading";
import "./hero.css";
import {prices,propertyTypes} from "../../data/Data.js"
import Select from "../../common/Select";



const Hero = ({handleChange,handlePrice,handlePropertyType,handleSubmit,filterOptions,price,propertyType}) => {
  // const [searchText, setSearchText] = useState("");
  // const [location, setLocation] = useState("");




  // console.log(price,"prices");

  return (
    <>
      <section className="hero">
        <div className="container">
          <form className="form">
            <div className="search_container">
              <div className="search_header">
                <p className="bold">Search properties to rent</p>
              </div>
              <div className="search_bar">
                <input
                  type="text"
                  onChange={handleChange}
                  name="searchText"
                  value={filterOptions.searchText}
                  placeholder={"Search with search bar"}
                />
              </div>
            </div>
            <div className="flex">

              <div className="item">
                <span>Location</span>
                <input
                  type="text"
                  name="location"
                  value={filterOptions.location}
                  onChange={handleChange}
                  placeholder="Location"
                />
              </div>
              <div className="item">
                <span>When</span>
                <input
                  type="Date"
                  name="moveInDate"
                  value={filterOptions.moveInDate}
                  onChange={handleChange}
                  placeholder="Move In Date"
                />

              </div>
              <div className="item">
                <span>Price</span>
                <Select handleChange={handlePrice} options={prices} selected={price}/>
              </div>
              <div className="item">
                <span>Property Type</span>
                <Select handleChange={handlePropertyType} options={propertyTypes} selected={propertyType}/>
               
              </div>
             <div className="item last">
             <button className="btn1" onClick={(e) => handleSubmit(e)}>
               Search
              </button>
             </div>
             
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Hero;
