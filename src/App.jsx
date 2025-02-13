import { useState,useEffect } from 'react'
import Navigation from './components/Nav'
import Spacexdetails from './components/spacexdetails'
import Footer from './components/footer'
import TotalLaunches from './components/totallaunches'
function App() {
 

  return (
    <>
    <Navigation/>
    <Spacexdetails/>
    <TotalLaunches/>
    <Footer/>
    </>
  )
}

export default App
