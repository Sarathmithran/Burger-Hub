import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import HeroSection from '../../components/heroSection/HeroSection'
import FeaturedSection from '../../components/featuredSection/FeaturedSection'
import Footer from '../../components/footer/Footer'
import MenuSection from '../../components/menuSection/MenuSection'
import CustomerReview from '../../components/customerReview/CustomerReview'

const Home = () => {
  return (
    <>
        <Navbar/>
        <HeroSection/>
        <MenuSection/>
        {/* <FeaturedSection/> */}
        <CustomerReview/>
        <Footer/>
    </>
  )
}

export default Home