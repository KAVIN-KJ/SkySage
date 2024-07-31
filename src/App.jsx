import React from 'react'
import TopButtons from './components/TopButtons'
import Inputs from './components/Inputs'
import TimeAndLocation from './components/TimeAndLocation'
import TempandDetails from './components/TempandDetails'
import Forecast from './components/Forecast'
const App = () => {
  
  const getWeather = async() => {
    const data = await getWeatherData('weather',{q: 'berlin'})
    console.log(data);
  };

  getWeather();



  return (
    <div className='mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl from-cyan-600 shadow-gray-400 to-blue-00'>  
      <TopButtons/>
      <Inputs/>
      <TimeAndLocation/>
      <TempandDetails/>
      <Forecast/>
      <Forecast/>
  </div>

  )
}

export default App
