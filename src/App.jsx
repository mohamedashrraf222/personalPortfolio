import React from 'react'
import Nav from './assets/nav'
import About from './assets/about'
import Footer from './assets/footer'
import Projects from './assets/projects'
import Certificates from './assets/cirtif'
import Contact from './assets/contact'

function App() {
  
  return (
    <div>
      <Nav />
      <div className='myBody'>
      <About />
      <Projects />
      <Certificates />
      <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
