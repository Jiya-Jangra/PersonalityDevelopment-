import React from 'react'
import {motion} from 'framer-motion'

function Marque() {
  return (
    <div className='w-100vw py-20 bg-[#004D43] rounded-t-2xl'>
        <div className="text border-t-2 border-b-2 border-zinc-100  flex whitespace-nowrap gap-10 overflow-hidden items-center">
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity ,duration:5}}  className='text-[10vw] leading-none  font-bold pt-2 mb-1 -mt-5'>We are commited to make you better</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity ,duration:5}}  className='text-[10vw] leading-none  font-bold pt-2 mb-1 -mt-5'> We are commited to make you better</motion.h1>
        </div>
    </div>
  )
}

export default Marque

