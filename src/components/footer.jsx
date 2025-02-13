import React from 'react'

function footer() {
  return (
   <>
   <footer className="bg-black text-white text-center py-6 mt-2  shadow-lg ">
  <div className="container mx-auto px-6">
    <h2 className="text-2xl mt-6 md:text-3xl font-bold text-[#1c4fae] transition-transform transform hover:scale-105">
       Thanks for this Opportunity!
    </h2>
    <p className="text-lg md:text-xl mt-2 text-gray-300">
      Crafted with dedication by <span className="font-semibold text-[#1c4fae]">Shubham</span>
    </p>

    <div className="flex justify-center gap-6 mt-4">
      <a
        href="https://www.linkedin.com/in/shubham-dhyani-a22698204"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#1c4fae] hover:text-white transition-colors duration-300 text-2xl"
      >
        🔗 LinkedIn
      </a>
      <a
        href="https://github.com/dhyanishubham122"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-[#1c4fae] transition-colors duration-300 text-2xl"
      >
        💻 GitHub
      </a>
    </div>

    <p className="text-sm opacity-70 mt-3 text-gray-500">
      © {new Date().getFullYear()} All Rights Reserved VR Automation
    </p>
  </div>
</footer>


   </>
  )
}

export default footer