import React from "react";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import logo from '../../assets/img/logo.png'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 pt-20">
      <div className="text-center max-w-2xl mx-auto">
        <div className="relative mb-8">
          <h1 className="text-[8rem] md:text-[12rem] text-red-500 font-black leading-none select-none">
            404
          </h1>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-bounce">
              <div className="w-10 h-20 md:w-20 md:h-30 bg-white rounded-full flex items-center justify-center shadow-2xl">
                <img src={logo} alt="logo" className="w-6 h-6 md:w-16 md:h-16" />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Oops! Page Not Found
          </h2>
          <p className="text-md text-gray-500 max-w-md mx-auto">
            Looks like this page went on a burger hunt and got lost! 
            Don't worry, we'll help you find your way back to our delicious menu.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <Link to={'/'} className="btn bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 border-none btn-md">
            <Home className="size-4"/>
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;