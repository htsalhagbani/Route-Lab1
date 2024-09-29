import React from 'react'
import Nav from '../component/nav'

function Home() {
  return (
   <>
   <Nav/>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">Towiq Bootcamp</h1>
        
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Start Date:</h2>
          <p className="text-lg text-gray-700">March 1, 2024</p>
        </div>
        
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Location:</h2>
          <p className="text-lg text-gray-700">Online</p>
        </div>
        
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">About the Bootcamp:</h2>
          <p className="text-lg text-gray-700">
            Towiq Bootcamp is an intensive program designed to equip participants with the skills and knowledge needed to excel in the tech industry. 
            Through hands-on projects, mentorship, and real-world experience, participants will gain invaluable insights and practical skills.
          </p>
        </div>
        
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Target Audience:</h2>
          <p className="text-lg text-gray-700">
            This bootcamp is ideal for aspiring developers, data scientists, and tech enthusiasts who are eager to build a successful career in technology.
            Whether you're starting from scratch or looking to enhance your skills, Towiq Bootcamp is tailored for you.
          </p>
        </div>
        
        <div className="flex justify-center mt-8">
         
        </div>
      </div>
    </div>
    </>
  
  )
}

export default Home