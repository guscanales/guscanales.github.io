import React from 'react'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      <div className="text-center max-w-4xl mx-auto">
        <div className="float mb-8">
          <div className="icon-container glow">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
          DevLab
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
          Innovative AI Development Solutions
        </p>
        
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          We specialize in cutting-edge AI development, web applications, and mobile solutions. 
          Transform your ideas into reality with our expert team.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="mailto:gustavo.canaleslopez@gmail.com" className="btn btn-primary">
            Contact
          </a>
          {/* <button className="btn btn-secondary">
            Learn More
          </button> */}
        </div>
      </div>
    </section>
  )
}

export default Hero