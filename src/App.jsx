import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marque from './components/Marque'
import About from './components/About'
import Footer from './components/Footer'
import Questions from './components/Questions'
import Test from './components/Test'
import Home from './components/Home'
import QuestionCard from './components/QuestionCard'
import LocomotiveScroll from 'locomotive-scroll';
import Signin from './components/Signin'
import Result from './components/Result'
import {Routes,Route} from 'react-router-dom'


function App() {
  
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full h-screen  text-white'>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/about' element ={<About/>}/>
        <Route path='/signin' element ={<Signin/>}/>
        <Route path='/questCard' element ={<Questions/>}/>
        <Route path='/test' element ={<Test/>}/>
        <Route path='/result' element ={<Result/>}/>
        </Routes>

      

        



      
    </div>
    
  )
}

export default App