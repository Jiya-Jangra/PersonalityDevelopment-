import React from 'react'
import Navbar from './Navbar'
import LandingPage from './LandingPage'
import About from './About'
import Footer from './Footer'

function Home() {
  return (
    <div>
     <Navbar/>
     <LandingPage/>
     <About/>
     <Footer/>
    </div>
  )
}

export default Home