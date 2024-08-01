// ********* WORK IN PROGRESS **********


import { APIProvider,Map } from '@vis.gl/react-google-maps'
import axios from 'axios';
import { useEffect, useState } from 'react';
import response from './test.json'
function WeatherData(props){

const [forecast,setForecast] = useState([]);

const apiKey = '49f83439ae31ba4840afc2609a55c758';
const city = props.city;
const units = 'metric';
const getCurrentWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
const getForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`
        useEffect(()=>{
            if(city!=""||city!=null||city!=undefined){
            axios.get(getForecast)
            .then((response)=>{
                setForecast(response.data.list);
                console.log("Request Sent");
            })
            .catch((error)=>{
                console.log(error);
            })
        }
        },[city])
        // useEffect(()=>{
        //     console.log(response)
        //     setForecast(response.data.list)
        // },[])
    return(
        <>
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