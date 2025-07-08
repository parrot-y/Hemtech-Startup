import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const PremiumNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`navbar-premium ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container-premium">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="navbar-brand">
            HemTech<span className="text-gold">.</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="navbar-nav hidden md:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="nav-link"
                >
                  {item.name}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-premium btn-primary ml-4"
              >
                Get Started
              </button>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gold text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="nav-link block w-full text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="btn-premium btn-primary w-full"
                >
                  Get Started
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default PremiumNavbar;