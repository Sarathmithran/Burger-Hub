import React from 'react'
import HeroSection from '../../components/heroSection/HeroSection'
import MenuSection from '../../components/menuSection/MenuSection'
import CustomerReview from '../../components/customerReview/CustomerReview'
import StatsSection from '../../components/statsSection/StatsSection'

const Home = () => {
  return (
    <>
        <HeroSection/>
        <MenuSection/>
        <StatsSection/>
        <CustomerReview/>
    </>
  )
}

export default Home