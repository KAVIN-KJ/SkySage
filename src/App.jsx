import React from 'react'
import TopBar from './TopBar'
import './App.css'

import WeatherOverview from './WeatherOverview'
import Chart from './Chart'
import News from './News'
const App = () => {
  
  return (
    <div>
      <WeatherOverview/>
      <News/>
    </div>

  )
}
export default App