import React from 'react'
import NavBar from './NavBar';
import Hero from './Hero';
import Services from './Services';
import AboutUs from './AboutUs';
import Gallery from './Gallery';
import Prices from './Prices';
const Home = () => {
  return (
    <div>
        <NavBar/>
        <Hero/>
        <Services/>
        <AboutUs/>
        <Gallery/>
        <Prices/>
    </div>
  )
}

export default Home;