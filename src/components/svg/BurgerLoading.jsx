import React from 'react'
import './burgerLoading.css'

const BurgerLoading = () => {
  return (
    <div className="preloader">
      <div className="burger-container">
        <div className="burger">
          <div className="burger__bun burger__bun--top">
            <div className="burger__sesame burger__sesame--1"></div>
            <div className="burger__sesame burger__sesame--2"></div>
            <div className="burger__sesame burger__sesame--3"></div>
          </div>
          <div className="burger__lettuce"></div>
          <div className="burger__tomato"></div>
          <div className="burger__cheese"></div>
          <div className="burger__patty"></div>
          <div className="burger__bun burger__bun--bottom"></div>
        </div>
      </div>
      <p className="text-center text-md font-medium text-gray-800 dark:text-white mt-6">
        Preparing your item...
      </p>
    </div>
  )
}

export default BurgerLoading