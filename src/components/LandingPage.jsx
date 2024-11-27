import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import image from './image.png';
import video from './kaplan.mp4' ;
import { useNavigate } from 'react-router-dom';


function LandingPage() {
  const navigate = useNavigate();

  const goToTest = () => {
    navigate('/test'); // Navigates to the /about route
  };
  return (
    <div className='w-full h-[505.3px] data-scroll  data-scroll-speed=-".1" pt-1 flex justify-between text-black '>
      <video
        className="absolute h-full w-full top-0 object-cover   -z-[1]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      
      
      <div className='textstructure flex flex-col justify-center items-center text-white mt-[9vh] ml-[30vw]'>
        <div className="masker ">
          <h1 className='uppercase text-6xl -leading-[5vw] tracking-tight font-medium'>CULTIVATE</h1>
        </div>
        <div className="masker ">
          <h1 className='uppercase text-5xl -leading-[5vw] tracking-tight font-medium'>The Professionalism</h1>
        </div>
        <div className="masker ">
          <h1 className='uppercase text-6xl -leading-[5vw] tracking-tight font-medium'>WITHIN YOU</h1>
        </div>
        <div className="masker w-[10vw] h-[8vh] bg-zinc-500 rounded-full border-t-[2px] relative top-[20px]  ">
          <p className='relative top-[6px] left-[40px] text-lg font-bold flex gap-1 items-center' onClick={goToTest} style={{ cursor: 'pointer' }}>Start <GoArrowUpRight /></p>
          
        </div>

      </div>

        
    </div>
  )
}

export default LandingPage