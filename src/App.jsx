import Forecast from './components/Forecast';
import Inputs from './components/Inputs';
import TempandDetails from './components/TempandDetails';
import TimeAndLocation from './components/TimeAndLocation';
import TopButtons from './components/TopButtons'
import getFormattedWeatherData from './services/weatherservice';
import WeatherOverview from './WeatherOverview';
const App = () => {
  
  const getWeather = async() => {
    const data = await getFormattedWeatherData({ q: 'berlin', units: 'metric' })
    console.log(data);
  };

  getWeather();



  return (
    <div >  
      {/* <TopButtons/>
      <Inputs/>
      <TimeAndLocation/>
      <TempandDetails/>
      <Forecast/>
      <Forecast/> */}
      <WeatherOverview/>
  </div>

  )
}

export default App
