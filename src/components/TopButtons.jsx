import React, { useState } from 'react';
import '../styles/TopButtons.css'; // Adjust the path based on your folder structure
import { useEffect } from 'react';
import axios from 'axios';
const TopButtons = ({setQuery,setResponse,cities}) => {


// *********** FOR CHART ************** 

    const [chartcity,setChartCity] = useState("")
  const apiKey = '49f83439ae31ba4840afc2609a55c758';
  const units = 'metric';
  const getForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${chartcity}&appid=${apiKey}&units=${units}`

    

useEffect(()=>{

  if(chartcity){
    axios.get(getForecast)
  .then((recieve)=>{
    setResponse(recieve);
  })
  .catch((error)=>{
    console.error(error);
  })
  }
},[chartcity]) 
    return (
        <div className="top-buttons-container">
            {cities.map((city,key) => (
                <button 
                    key={key} 
                    className="city-button"
                    onClick={() => {setQuery({ q: city });setChartCity(city) }}
                >
                    {city}
                </button>
            ))}
        </div>
    );
}

export default TopButtons;
