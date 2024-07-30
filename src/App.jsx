import TopBar from './TopBar'
import WeatherData from './WeatherData'
import './App.css'
import MapComponent from './MapComponent'

function App() {
  return (
    <>
      <div className='app-container'>
        <TopBar/>
        {/* <WeatherData/> */}
        <MapComponent/>
      </div>
    </>
  )
}

export default App
