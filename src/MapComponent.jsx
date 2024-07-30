// ********* WORK IN PROGRESS **********


import './styles/Map.css'
import { APIProvider,Map } from '@vis.gl/react-google-maps'
import axios from 'axios';
function MapComponent(){

const apiKey = '49f83439ae31ba4840afc2609a55c758';
const city = 'Coimbatore';
const units = 'metric';
const getCurrentWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

const getForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`

const fetchWeather = () => {
    axios.get(getCurrentWeather)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error)
        });
}
// fetchWeather()
const fetchForecast = () => {
    axios.get(getForecast)
    .then(response => {
        console.log(response.data);
    }).catch(error =>{
        console.error(error)
    })
}
fetchForecast()
    return(
        <>
           <div>
                <p>
                    API TESTING
                </p>

           </div>
        </>
    )
}
export default MapComponent