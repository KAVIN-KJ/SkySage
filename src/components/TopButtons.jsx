import React, { useState } from 'react';
import '../styles/TopButtons.css'; // Adjust the path based on your folder structure
import { useEffect } from 'react';
import axios from 'axios';
const TopButtons = ({setQuery,setResponse}) => {



    const cities = [
        {
            id: 1,
            name: 'London'
        },
        {
            id: 2,
            name: 'Tokyo'
        },
        {
            id: 3,
            name: 'Vegas'
        },
        {
            id: 4,
            name: 'New York'
        },
        {
            id: 5,
            name: 'Osaka'
        },
    ];



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


// *********** FOR CHART ************** 

 
    return (
        <div className="top-buttons-container">
            {cities.map((city) => (
                <button 
                    key={city.id} 
                    className="city-button"
                    onClick={() => {setQuery({ q: city.name });setChartCity(city.name) }}
                >
                    {city.name}
                </button>
            ))}
        </div>
    );
}

export default TopButtons;
