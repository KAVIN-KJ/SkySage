import './styles/TopBar.css'
import search_light from './assets/search-icon-light.svg'
import logo from './assets/SkySage_logo_light.png'
import settings from './assets/settings.svg'
import test from './test.json'
import axios from 'axios'
import WeatherOverview from './WeatherOverview'
import { useState, useEffect } from 'react'
import { BiCurrentLocation } from 'react-icons/bi'
import Chart from './Chart'
import News from './News'
import LoadingComponent from './LoadingComponent'
import Inputs from './components/Inputs'

function TopBar(){

    
    const [text,setText] = useState("Coimbatore")
    const [query,setQuery] = useState("")
    const [response,setResponse] = useState(test)
    const [loading,setLoading] = useState(false)

    const apiKey = '49f83439ae31ba4840afc2609a55c758';
    const units = 'metric';
    const getForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${apiKey}&units=${units}`

    useEffect(()=>{
        if(query){
            setLoading(true);
            console.log("Request Sent");
        axios.get(getForecast)
        .then((recieve)=>{
            setResponse(recieve);
            setLoading(false);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    },[query])



    return(
        <>
                <div className='container'>
                    <img src={logo} alt="" />
                    <div className='search-container'>
                        <input 
                        onChange={(e)=>{setText(e.target.value)}}
                        type="text" className='search' id='search' 
                        placeholder='Search For any Major City'/>  
                        <img onClick={()=>{ setQuery(text);setText(); document.getElementById('search').value="" }} src={search_light} alt="" />
                    </div>
                    <div className='options'>
                        <img alt="" style={{width:"70px"}} src={settings} />
                    </div>
                </div>
                    <div className="content-container">
                    {loading ? (<LoadingComponent/>) : (<Chart response={response} city={query} />)}
                    
                    <WeatherOverview city={query} />
                    </div>
                    <News/>
        </>
    )
}
export default TopBar