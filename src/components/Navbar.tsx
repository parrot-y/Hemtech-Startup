import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/254742321521?text=Hi! I need digital services', '_blank');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              HemTech
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6 lg:space-x-8">
              {['home', 'services', 'portfolio', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 capitalize relative group ${
                    isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-purple-300'
                  }`}
                >
                  {item === 'home' ? 'Home' : item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
              <button
                onClick={openWhatsApp}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center"
              >
                <MessageCircle size={16} className="mr-2" />
                WhatsApp
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={openWhatsApp}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white p-2 rounded-full"
            >
              <MessageCircle size={18} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors duration-200 ${
                isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-purple-300'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg border-t border-gray-100">
            {['home', 'services', 'portfolio', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium transition-colors duration-200 capitalize w-full text-left"
              >
                {item === 'home' ? 'Home' : item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;