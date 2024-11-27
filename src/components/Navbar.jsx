import React from 'react'

function Navbar() {
  return (
    <div className=' z-[999] flex justify-center item-center bg-[#D5D2FE] w-full px-20 py-[15px] z-[999] font-semibold'>
        <div className="logo"></div>
        <div className="links flex gap-10 ">
            
              <a href="/">Home</a>
              <a href="questCard">Take Test</a>
              <a href="">Assignment</a>
              <a href="/about">About Us</a>

            
        </div>
    </div>
  )
}

export default Navbar