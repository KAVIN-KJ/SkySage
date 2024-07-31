// ********* WORK IN PROGRESS **********


import './styles/Map.css'
import { APIProvider,Map } from '@vis.gl/react-google-maps'
import axios from 'axios';
import { useEffect, useState } from 'react';
import response from './test.json'
function WeatherData(){

const [forecast,setForecast] = useState([]);

const apiKey = '49f83439ae31ba4840afc2609a55c758';
const city = 'Antarctica';
const units = 'metric';
const getCurrentWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
const getForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`

// const fetchWeather = () => {
    // axios.get(getCurrentWeather)
    //     .then(response => {
    //         console.log(response.data);
    //     })
    //     .catch(error => {
    //         console.error(error)
    //     });
// }
// fetchWeather()
        // useEffect(()=>{
        //     axios.get(getForecast)
        //     .then((response)=>{
        //         setForecast(response.data.list);
        //     })
        //     .catch((error)=>{
        //         console.log(error);
        //     })
        // },[])
        useEffect(()=>{
            console.log(response)
            setForecast(response.data.list)
        },[])
    return(
        <>
        {console.log(forecast)}
           <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
                
                {
                    forecast.map((data,key)=>(
                            <div key={key} style={{border:"1px solid",width:"200px",padding:"20px",margin:"10px",borderRadius:"20px"}}>
                                <ul>
                                    <li>Feels Like : {data.main.feels_like}</li>
                                    <li>Humidity : {data.main.humidity}</li>
                                    <li>pressure : {data.main.pressure}</li>
                                    <li>Max Temp : {data.main.temp_max}</li>
                                    <li>Min Temp : {data.main.temp_min}</li>
                                </ul>
                            </div>
                    ))
                }

           </div>
        </>
    )
}
export default WeatherData