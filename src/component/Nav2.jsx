import React from 'react'
import { Link } from "react-router-dom";

function Nav2() {
  return (
    <div className="navbar  bg-purple-400">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><Link to={`/home`}>Home</Link></li>
         
        </ul>
      </div>
      <p className="btn btn-ghost text-xl text-white md:text-4xl">Twiq Academy</p>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
      <p className="text-3xl hover:bg-gray-200 px-2 py-1 rounded cursor-pointer text-white"><Link to={`/home`}>Home</Link></p>
      </ul>
    </div>
    <div className="navbar-end">
      <p className="btn text-xl"><Link to={`/Login`}>Login</Link></p>
    </div>
  </div>
  )
}

export default Nav2