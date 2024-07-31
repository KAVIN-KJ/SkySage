import './styles/TopBar.css'
import search_light from './assets/search-icon-light.svg'
import logo from './assets/SkySage_logo_light.png'
import settings from './assets/settings.svg'
import WeatherData from './WeatherData'
import { createContext, useState } from 'react'
import Chart from './Chart'

export const querycontext = createContext()
function TopBar(){


    const [text,setText] = useState("Coimbatore")
    const [query,setQuery] = useState("")
    return(
        <querycontext.Provider value={query}>

            <div className='container'>
                <img src={logo} alt="" />
                <div className='search-container'>
                    <input 
                     onChange={(e)=>{setText(e.target.value)}}
                     type="text" className='search' id='search' />  
                    <img onClick={()=>{ setQuery(text);setText(); document.getElementById('search').value="" }} src={search_light} alt="" />
                </div>
                <div className='options'>
                    <img alt="" style={{width:"70px"}} src={settings} />
                </div>
            </div>
            <Chart city={query} />
        </querycontext.Provider>
    )
}
export default TopBar