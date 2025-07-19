import React from 'react'
import HeroSection from '../../components/heroSection/HeroSection'
import FeaturedSection from '../../components/featuredSection/FeaturedSection'
import MenuSection from '../../components/menuSection/MenuSection'
import CustomerReview from '../../components/customerReview/CustomerReview'
import StatsSection from '../../components/statsSection/StatsSection'

const Home = () => {
  return (
    <>
        <HeroSection/>
        <MenuSection/>
        {/* <FeaturedSection/> */}
        <StatsSection/>
        <CustomerReview/>
    </>
  )
}

export default Home