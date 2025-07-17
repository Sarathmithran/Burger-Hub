import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import HeroSection from '../../components/heroSection/HeroSection'
import Carousel from '../../components/carousel/Carousel'

const Home = () => {
  return (
    <>
        <Navbar/>
        <HeroSection/>
        <Carousel/>
    </>
  )
}

export default Home