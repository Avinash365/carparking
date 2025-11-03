
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-3">
              <i className="ri-parking-fill text-white text-xl"></i>
            </div>
            <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: '"Pacifico", serif' }}>Parkiun</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-green-600 font-medium transition-colors cursor-pointer">HOW IT WORKS</a>
            <a href="#parking-types" className="text-gray-700 hover:text-green-600 font-medium transition-colors cursor-pointer">FEATURES</a>
            <a href="#about" className="text-gray-700 hover:text-green-600 font-medium transition-colors cursor-pointer">COMPANY</a>
            <a href="#pricing" className="text-gray-700 hover:text-green-600 font-medium transition-colors cursor-pointer">RESOURCES</a>
            <a href="#blog" className="text-gray-700 hover:text-green-600 font-medium transition-colors cursor-pointer">BLOG</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-4 py-2 text-sm">
              Sign In
            </button>
            <button className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl px-4 py-2 text-sm">
              Get App
            </button>
            
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl text-gray-700`}></i>
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-700 hover:text-green-600 font-medium transition-colors cursor-pointer">HOW IT WORKS</a>
              <a href="#parking-types" className="text-gray-700 hover:text-green-600 font-medium transition-colors cursor-pointer">FEATURES</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 font-medium transition-colors cursor-pointer">COMPANY</a>
              <a href="#pricing" className="text-gray-700 hover:text-green-600 font-medium transition-colors cursor-pointer">RESOURCES</a>
              <a href="#blog" className="text-gray-700 hover:text-green-600 font-medium transition-colors cursor-pointer">BLOG</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
