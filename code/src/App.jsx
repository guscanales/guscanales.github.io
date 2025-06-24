import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'
import PrivacyPolicy from './components/PrivacyPolicy'
import PrivacyPolicyES from './components/PrivacyPolicyES'
import ParticleBackground from './components/ParticleBackground'

function App() {
  return (
    <div className="App">
      <ParticleBackground />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            {/* <Services />
            <Contact /> */}
          </>
        } />
        <Route path="/policy" element={<PrivacyPolicy />} />
        <Route path="/policy-es" element={<PrivacyPolicyES />} />
      </Routes>
    </div>
  )
}

export default App