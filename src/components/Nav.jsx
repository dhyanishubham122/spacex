import React from 'react'
import logo from '../assets/SpaceX-Logo.svg.png'
function Nav() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black text-white shadow-lg">
      <div className="flex items-center space-x-2">
        <img
          src={logo}
          alt="SpaceX Logo"
          className="h-8"
        />
        {/* <span className="text-xl font-semibold tracking-wide">SpaceX</span> */}
      </div>
      <h1 className="text-2xl font-bold tracking-wide transition-all duration-300 hover:scale-110 hover:text-blue-400">
        VR Automation Assessment
      </h1>
    </nav>
  )
}

export default Nav