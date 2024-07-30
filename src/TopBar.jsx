import './styles/TopBar.css'
import search_light from './assets/search-icon-light.svg'
import logo from './assets/SkySage_logo_light.png'
import settings from './assets/settings.svg'
function TopBar(){
    return(
        <>
            <div className='container'>
                <img src={logo} alt="" />
                <div className='search-container'>
                    <input onBlur={(e)=>{ e.target.placeholder=""; }} onFocus={(e)=>{ e.target.placeholder="Enter Location" }} type="text" className='search' />
                    <img onClick={()=>{ document.getElementsByClassName(search).value }} src={search_light} alt="" />
                </div>
                <div className='options'>
                    <img alt="" style={{width:"70px"}} src={settings} />
                </div>
            </div>
        </>
    )
}
export default TopBar