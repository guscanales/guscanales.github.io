import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'
import ParticleBackground from './components/ParticleBackground'

function App() {
  return (
    <div className="App">
      <ParticleBackground />
      <Hero />
      {/* <Services />
      <Contact /> */}
    </div>
  )
}

export default App