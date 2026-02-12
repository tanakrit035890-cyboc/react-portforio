import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Profile from './components/Profile'
import Portforio from './components/Portforio'
import Education from './components/Education'
import Contact from './components/Contact'
const App = () => {
  return (
    <div className='bg-gray-700 pb-4'>
      <Navbar/>
      <Hero/>
      <Education/>
      <Profile/>
      <About/>
      <Portforio/><br /><br />
      <Contact/>
    </div>
  )
}

export default App