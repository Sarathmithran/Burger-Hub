import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import HeroSection from '../../components/heroSection/HeroSection'
import FeaturedSection from '../../components/featuredSection/FeaturedSection'
import Footer from '../../components/footer/Footer'
import MenuSection from '../../components/menuSection/MenuSection'
import CustomerReview from '../../components/customerReview/CustomerReview'
import StatsSection from '../../components/statsSection/StatsSection'

const Home = () => {
  return (
    <>
        <Navbar/>
        <HeroSection/>
        <MenuSection/>
        {/* <FeaturedSection/> */}
        <StatsSection/>
        <CustomerReview/>
        <Footer/>
    </>
  )
}

export default Home