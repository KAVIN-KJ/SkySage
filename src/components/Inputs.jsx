import React, { useState } from 'react';
import { BiSearch, BiCurrentLocation } from "react-icons/bi";
import '../styles/Inputs.css'; // Adjust the path based on your folder structure

const Inputs = ({setQuery, setUnits}) => {
  const[city,setCity] = useState("");
  const handleSearchClick = () => {
    if (city !== '') setQuery({q : city})
  }


  return (
    <div className="inputs-container">
      <div className="inputs-wrapper">
        <input 
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text" 
          placeholder="search city..." 
          className="inputs-search"
        />
        <BiSearch size={30} className="icon"
        onClick={handleSearchClick}
        />
        <BiCurrentLocation size={30} className="icon"/>
      </div>
      <div className="units-wrapper">
        <button className="unit-button"
        onClick={()=> setUnits("metric")}>°C</button>
        <p className="separator">|</p>
        <button className="unit-button"
        onClick={()=> setUnits("imperial")}>°F</button>
      </div>
    </div>
  )
}

export default Inputs;
