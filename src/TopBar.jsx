import './styles/TopBar.css'
import logo from './assets/SkySage_logo_light.png'
import test from './test.json'
import logout from './assets/power-off-svgrepo-com.svg'
import WeatherOverview from './WeatherOverview'
import { useState, useEffect } from 'react'
import News from './News'

function TopBar(){

    const [text,setText] = useState("Coimbatore")
    const [city,setCity] = useState("")
    const [response,setResponse] = useState(test)
    const [visible,setVisible] = useState(false)
    const apiKey = '49f83439ae31ba4840afc2609a55c758';
    const units = 'metric';
    const getForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`

    const handleLogout = ()=>{
        localStorage.setItem("currentUser","null");
        window.location.reload()
    }
    
    return(
        <>
                    <div className='topbar-container'>
                        <img className='skysage-logo' src={logo} alt="" />
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <span className='topbar-user-details'>Currently logged in as <b>{localStorage.getItem("currentUser")}</b></span>
                            <img onClick={handleLogout} className='logout-button' src={logout} alt="" />
                        </div>
                    </div>
                    <div className="content-container">                    
                    <WeatherOverview city={city} />
                    </div>
                    <div>
                        <News/>
                    </div>
        </>
    )
}
export default TopBar