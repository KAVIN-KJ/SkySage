import React, { useEffect, useState } from 'react';
import Forecast from './components/Forecast';
import Inputs from './components/Inputs';
import TempandDetails from './components/TempandDetails';
import TimeAndLocation from './components/TimeAndLocation';
import TopButtons from './components/TopButtons';
import { getWeatherData } from './services/weatherservice';
import getFormattedWeatherData from './services/weatherservice';
import './styles/WeatherOverview.css'; 

const WeatherOverview = () => {

    const[query, setQuery] = useState({q:'madurai'})
    const[units, setUnits] = useState('metric')
    const[weather, setWeather] = useState(null)



    const getWeather = async() => {
        await getFormattedWeatherData({...query, units}).then((data) =>{
            setWeather(data);
        });
        console.log(data);
    };
    useEffect(() => {
        getWeather();
    }, [query, units]);
    
    return (
        <div className='weather-overview-container'>
            <TopButtons setQuery={setQuery}/>
            <Inputs setQuery={setQuery} setUnits={setUnits}/>
            {weather && (
                <>
                <TimeAndLocation weather={weather} />
                <TempandDetails weather={weather} />
                <Forecast title='3 hour step forecast ' data={weather.hourly} />
                <Forecast title='Daily forecast ' data={weather.daily} />
                </>
            )}
        </div>
    );
}

export default WeatherOverview;
