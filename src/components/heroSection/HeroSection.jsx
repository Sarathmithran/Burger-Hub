import React from 'react';
import heroVideo from '../../assets/video/hero-video.mp4';
import heroImg from '../../assets/img/hero.webp';

const HeroSection = () => {
  return (
    <div className="hero min-h-screen relative overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto" 
        poster={heroImg} // Shows while video loads
        aria-label="Background video showing our product in action"
      >
        <source src={heroVideo} type="video/mp4" />
        {/* Fallback Img */}
        <img src={heroImg} alt="Hero section background" />
      </video>
      
      {/* Overlay */}
      <div className="hero-overlay relative z-10"></div>
      
      <div className="hero-content text-neutral-content text-center relative z-20">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome to Burger Hub</h1>
          <p className="mb-5">
            Craving something unforgettable? Our handcrafted burgers are made with the freshest ingredients and boldest flavors. 
            Come taste what greatness really means.
          </p>
          <button className="btn bg-orange-500 hover:bg-orange-600 broder border-none shadow">Order Now</button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection