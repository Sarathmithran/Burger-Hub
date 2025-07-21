import React, { useState } from 'react';
import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="navbar bg-gray-800 shadow-lg fixed top-0 right-0 left-0 z-50">
        <div className="navbar-start">
          <Link to={'/'} className="text-white transition-colors duration-200 cursor-pointer font-semibold flex items-center">
            <img src={logo} alt="logo" width={60} height={50}/>
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold text-orange-400">Burger</span>
              <span className="text-lg font-semibold text-white -mt-1">Hu<span className='text-orange-400'>B</span></span>
            </div>
          </Link>
        </div>
        
        <div className="navbar-end">
          {/* Desktop Menu */}
          <ul className="menu menu-horizontal px-1 hidden lg:flex">
            <li>
              <Link to={'/'} className="text-lg me-4 text-gray-200 hover:text-orange-400 hover:bg-transparent px-4 py-2 font-medium transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link to={'/menu'} className="text-lg me-4 text-gray-200 hover:text-orange-400 hover:bg-transparent px-4 py-2 font-medium transition-colors duration-200">
                Menu
              </Link>
            </li>
            <li>
              <a className="text-lg me-4 text-gray-200 hover:text-orange-400 hover:bg-transparent px-4 py-2 font-medium transition-colors duration-200">
                Blog
              </a>
            </li>
            <li>
              <a className="text-lg me-4 text-gray-200 hover:text-orange-400 hover:bg-transparent px-4 py-2 font-medium transition-colors duration-200">
                About
              </a>
            </li>
            <li>
              <a className="text-lg me-4 text-gray-200 hover:text-orange-400 hover:bg-transparent px-4 py-2 font-medium transition-colors duration-200">
                Contact
              </a>
            </li>
            <li>
              <Link to={'/login'} className="text-lg me-4 text-gray-200 hover:text-orange-400 hover:bg-transparent px-4 py-2 font-medium transition-colors duration-200">
                Login
              </Link>
            </li>
            <li className="tooltip tooltip-bottom" data-tip="Hurry-up">
              <a className="text-lg btn bg-orange-500 hover:bg-orange-600 border-orange-600 hover:border-orange-700 text-white transition-colors duration-200 rounded-full">
                Order Now
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="btn btn-ghost text-white p-2"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Full-Page Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-gray-800 z-50 lg:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
      }`}>
        <div className="flex justify-between items-center p-4 border-b border-gray-600">
          <Link to={'/'} className="text-white transition-colors duration-200 cursor-pointer font-semibold flex items-center">
            <img src={logo} alt="logo" width={60} height={50}/>
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold text-orange-400">Burger</span>
              <span className="text-lg font-semibold text-white -mt-1">Hu<span className='text-orange-400'>B</span></span>
            </div>
          </Link>
          <button
            onClick={closeMenu}
            className="btn btn-ghost text-white p-2"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        
        <div className="p-6">
          <ul className="space-y-6">
            <li className={`transform transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ transitionDelay: isMenuOpen ? '100ms' : '0ms' }}>
              <Link 
                to={'/'}
                onClick={closeMenu}
                className="block text-2xl text-gray-200 hover:text-orange-400 transition-colors duration-200 py-3 border-b border-gray-600 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li className={`transform transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ transitionDelay: isMenuOpen ? '150ms' : '0ms' }}>
              <Link
                to={'/menu'}
                onClick={closeMenu}
                className="block text-2xl text-gray-200 hover:text-orange-400 transition-colors duration-200 py-3 border-b border-gray-600 cursor-pointer"
              >
                Menu
              </Link>
            </li>
            <li className={`transform transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ transitionDelay: isMenuOpen ? '200ms' : '0ms' }}>
              <a
                onClick={closeMenu}
                className="block text-2xl text-gray-200 hover:text-orange-400 transition-colors duration-200 py-3 border-b border-gray-600 cursor-pointer"
              >
                Blog
              </a>
            </li>
            <li className={`transform transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ transitionDelay: isMenuOpen ? '250ms' : '0ms' }}>
              <a
                onClick={closeMenu}
                className="block text-2xl text-gray-200 hover:text-orange-400 transition-colors duration-200 py-3 border-b border-gray-600 cursor-pointer"
              >
                About
              </a>
            </li>
            <li className={`transform transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ transitionDelay: isMenuOpen ? '300ms' : '0ms' }}>
              <a
                onClick={closeMenu}
                className="block text-2xl text-gray-200 hover:text-orange-400 transition-colors duration-200 py-3 border-b border-gray-600 cursor-pointer"
              >
                Contact
              </a>
            </li>
            <li className={`transform transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ transitionDelay: isMenuOpen ? '300ms' : '0ms' }}>
              <Link
              to={'/login'}
                onClick={closeMenu}
                className="block text-2xl text-gray-200 hover:text-orange-400 transition-colors duration-200 py-3 border-b border-gray-600 cursor-pointer"
              >
                Login
              </Link>
            </li>
            <li className={`pt-4 transform transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ transitionDelay: isMenuOpen ? '350ms' : '0ms' }}>
              <a
                onClick={closeMenu}
                className="block w-full text-center text-xl bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg transition-colors duration-200 cursor-pointer"
              >
                Order Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;