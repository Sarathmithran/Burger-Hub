import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-white shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li><a>Link</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Link 1</a></li>
                  <li><a>Link 2</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-gray-900">BURGER HUB</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-gray-900">
            <li><a>Link</a></li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="bg-white rounded-t-none p-2">
                  <li><a>Link 1</a></li>
                  <li><a>Link 2</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default Navbar