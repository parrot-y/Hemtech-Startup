import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const ModernNavbar = () => {
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

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <div className="navbar-brand">
          Hemtech<span style={{ color: 'var(--gold)' }}>.</span>
        </div>
        
        {/* Desktop Navigation */}
        <ul className="navbar-nav hidden md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2 hover:text-gold transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-royal-blue/95 backdrop-blur-sm border-t border-gold/20">
          <ul className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className="block py-3 px-4 text-white hover:text-gold hover:bg-white/5 transition-all rounded-lg"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default ModernNavbar;