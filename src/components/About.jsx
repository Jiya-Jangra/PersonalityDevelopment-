import React from 'react'
import image from "./first.png" ; 
import image2 from "./second.png"; 
import image3 from "./third.png"

function About() {
  return (
    <div className='w-full p-20 data-scroll  data-scroll-speed=".7" bg-[#B2A8F4] text-black'>

      <div className="container p-10 flex  overflow-hidden  justify-center items-center">
        <div className="photu w-[40vw] ">
          <img src={image} alt='' className='h-10vh w-10vw'></img>
        </div>
        <div className="text bg-gray-500 rounded-l-full p-10 w-[55vw] text-white text-md -leading-[5vw] tracking-tight">
          <p>Success in one's work is less about the obstacles encountered, and more about cultivating the confidence and resilience to navigate through them. The real breakthrough comes not from external solutions, but from the growth of character within.</p>
        </div>
      </div>  

      <div className="container p-10 flex  gap-10 justify-center items-center">
        <div className="text bg-gray-500 w-[55vw] p-10 text-white text-md -leading-[5vw] tracking-tight  rounded-r-full">
          <p>We have the ability to stand by your side, helping you unlock your potential and achieve success together. With our support, you'll not only overcome challenges but thrive beyond them</p>
        </div>
        <div className="photu  ">
        <img src={image2} alt='' className='h-10vh w-10vw'></img>
        </div>
      </div> 

      <div className="container p-10 flex  gap-10 justify-center rounded-r-full items-center">
      <div className="photu ">
        <img src={image3} alt='' className='h-10vh w-10vw'></img>
        </div>
        <div className="text bg-gray-500 p-10 text-white w-[55vw] text-md rounded-l-full -leading-[5vw] tracking-tight">
          <p>We are committed to building a unique partnership with you, offering personalized guidance to help you unlock your potential. Together, we'll navigate challenges and pave the way to your success, hand in hand</p>
        </div>

      </div> 


      <button className='flex gap-10 items-center px-10 py-6 bg-zinc-800 mt-10 rounded-full text-white '>Read More 
        <div className='w-2 h-2 rounded-full bg-zinc-100 '></div>
      </button>
    </div>
  )
}

export default About