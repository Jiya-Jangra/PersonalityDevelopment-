import React from 'react'
import image from './Illustration.jpeg'
import '../index.css'
import { useNavigate } from 'react-router-dom';


function Test() {
  
  const navigate = useNavigate();

  const goToques = () => {
    navigate('/questCard'); // Navigates to the /about route
  };


  return (
    <div className=' gyan  h-screen bg-cover bg-center p-10 flex justify-center items-center ' >

        <div className="likh h-[70vh] w-[80vw] flex flex-col justify-center items-center text-lg font-bold text-black opacity-300">
          
            <p className='opacity-100'>To improve <span>Something</span></p>
            <p className='opacity-100'>You should know about what is that <span>Something</span></p>
            <p className='opacity-100'>Evaluate yourself with proven Questions </p>

            <button className='bg-zinc-600 rounded-full p-2'onClick={goToques} >Test Now</button>
        </div>

    </div>
  )
}

export default Test