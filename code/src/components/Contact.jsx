import React from 'react'

const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Ready to transform your ideas into innovative solutions?
          </p>
        </div>
        
        <div className="card-hover contact-card">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center glow">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-gray-400 text-sm">Email us at</p>
                <p className="text-white font-semibold">hello@devlab.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center glow">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-gray-400 text-sm">Based in</p>
                <p className="text-white font-semibold">Worldwide</p>
              </div>
            </div>
          </div>
        </div>
        
        <button className="btn btn-primary text-lg">
          Start Your Project
        </button>
        
        <footer className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            © 2024 DevLab. Crafting the future with AI and innovation.
          </p>
        </footer>
      </div>
    </section>
  )
}

export default Contact