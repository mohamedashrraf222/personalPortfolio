import React from 'react'
import Nav from './assets/nav'
import About from './assets/about'
import Footer from './assets/footer'
import Projects from './assets/projects'
import Certificates from './assets/certificates'

function App() {
  
  return (
    <div>
      <Nav />
      <div className='myBody'>
      <About />
      <Certificates />
      <Projects />
      </div>
      <Footer />
    </div>
  )
}

export default App
