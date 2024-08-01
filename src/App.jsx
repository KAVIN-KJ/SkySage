
import TopBar from './TopBar'
import React, { useContext } from 'react'
import Chart from './Chart'
import './App.css'
import { querycontext } from './TopBar'
import LoadingComponent from './LoadingComponent'
import News from './News'
export default function App(){
  const query = useContext(querycontext);
  return(
    <>
    <div className='app-container'>
      <TopBar/>
      <News/>
      {/* <LoadingComponent/> */}
    </div>
    </>
  )
}