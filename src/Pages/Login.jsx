import React from 'react'
import { Link } from "react-router-dom";
import Nav2 from '../component/Nav2';

function Login() {
  return (
    <>
    <Nav2/>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-[#C084FC] rounded-lg shadow-lg w-full max-w-lg p-8 space-y-6 md:h-[50vh] ">
      <form className="space-y-4 md:space-y-6">
        <div>
          <label className="block text-sm font-medium text-white md:text-2xl">Email</label>
          <input
            type="email"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white md:text-2xl">Password</label>
          <input
            type="password"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="••••••••"
          />
        </div>
        <div
          className="w-full mt-4 px-4 py-2 text-white bg-[blue] rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 md:text-2xl text-center"
        >
        <Link to={`/home`}> Login</Link> 
        </div>
      </form>
    
    </div>
  </div>
  </>
  )
}

export default Login