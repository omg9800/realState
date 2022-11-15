import React, { useState, useEffect } from "react";
import Hero from "./hero/Hero";
import Recent from "./recent/Recent";
import { list } from "../data/Data";

const Home = ({ favs, setFavourites }) => {
  const [data, setData] = useState(list);
  const [price, setPrice] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [filterOptions, setFilterOptions] = useState({
    searchText: "",
    location: "",
    moveInDate: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log("handle", name, value);
    setFilterOptions((prevState) => ({ ...prevState, [name]: value }));
  };

  const handlePrice = (e) => {
    const value = e.target.value;
    setPrice(value);
  };

  const handlePropertyType = (e) => {
    const value = e.target.value;
    setPropertyType(value);
  };

  const filterPrice = (wholeArr) => {
    let priceArr = price.split(",");
    
    let arr = wholeArr.filter((d) => {
      if (d.price < parseInt(priceArr[1]) && d.price >= parseInt(priceArr[0]))
        return true;
      return false;
    });

    return arr;
  };
  const filterType = (wholeArr) => {
    let arr = wholeArr.filter((l) => {
      if (propertyType == "") return true;
      return l.type == propertyType;
    });
    return arr;
  };

  const filterLocation = (wholeArr) => {
    let arr = wholeArr.filter((l) => {
      if (filterOptions.location == "") return true;
      return l.location
        .toLowerCase()
        .includes(filterOptions.location.toLowerCase());
    });
    return arr;
  };

  const filterMoveInDate = (wholeArr) => {
    let arr = wholeArr.filter((l) => {
      if (filterOptions.moveInDate == "") return true;
      return l.moveInDate == filterOptions.moveInDate;
    });
    return arr;
  };

  const filterSearch = (wholeArr) => {
    console.log(filterOptions.searchText,wholeArr);
    let arr = wholeArr.filter((l) => {
      if (filterOptions.searchText == "") return true;
      return l.name
        .toLowerCase()
        .includes(filterOptions.searchText.toLowerCase());
    });
    return arr;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let tobeFiltered = list;

    let arr=tobeFiltered ;

    console.log(tobeFiltered,"tobeFiltered");
    if(propertyType!="")
    arr=filterType(tobeFiltered);
    if (price != "") 
    arr = filterPrice(arr);
    if(filterOptions.location!="")
    arr = filterLocation(arr);
    if(filterOptions.moveInDate!="")
    arr = filterMoveInDate(arr);
    if(filterOptions.searchText!="")
    arr = filterSearch(arr);
    setData(arr);
  };

  return (
    <>
      <Hero
        favs={favs}
        handleChange={handleChange}
        handlePrice={handlePrice}
        handlePropertyType={handlePropertyType}
        handleSubmit={handleSubmit}
        filterOptions={filterOptions}
        price={price}
        propertyType={propertyType}
      />
      <Recent
        favs={favs}
        setFavourites={setFavourites}
        list={data}
        title={"Properties to be Rented!"}
        subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
      />
    </>
  );
};

export default Home;
