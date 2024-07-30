import './styles/TopBar.css'
import logo from './assets/SkySage_logo_light.png'
function TopBar(){
    return(
        <>
            <div className='container'>
                <img src={logo} alt="" />
                <input type="text" className='search' />
                <div className='options'>
                    
                </div>
            </div>
        </>
    )
}
export default TopBar