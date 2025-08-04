import React from 'react'
import HeroSection from '../../components/heroSection/HeroSection'
import MenuSection from '../../components/menuSection/MenuSection'
import CustomerReview from '../../components/customerReview/CustomerReview'
import StatsSection from '../../components/welcomeSection/WelcomeSection'

const Home = () => {
  return (
    <>
        <HeroSection/>
        <StatsSection/>
        <MenuSection/>
        <CustomerReview/>
    </>
  )
}

export default Home