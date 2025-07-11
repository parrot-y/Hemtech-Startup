import React from 'react';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const CleanFooter = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Contact', id: 'contact' },
  ];

  const services = [
    'Web Development',
    'Digital Branding',
    'Booking Systems',
    'Mobile Solutions'
  ];

  return (
    <footer className="section section-royal">
      <div className="container py-16">
        {/* Header Section */}
        <div className="text-center mb-12 fade-in">
          <h3 className="text-4xl font-bold text-white mb-4">
            Hemtech<span style={{ color: 'var(--gold)' }}>.</span>
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Digital solutions that drive real results.
          </p>
        </div>

        <div className="grid grid-4 mb-12">
          {/* Company Info */}
          <div className="space-y-6 fade-in">
            <h4 className="text-xl font-bold text-white">About</h4>
            <p className="text-gray-300 leading-relaxed">
              We create exceptional digital experiences that transform businesses and drive growth.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 fade-in">
            <h4 className="text-xl font-bold text-white">Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-gold transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6 fade-in">
            <h4 className="text-xl font-bold text-white">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 fade-in">
            <h4 className="text-xl font-bold text-white">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                <div className="text-gray-300">
                  <div className="text-sm">+254 742 321 521</div>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">hemtech101@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Nairobi, Kenya</span>
              </div>
            </div>
            
            <div className="mt-6">
              <a
                href="https://wa.me/254742321521"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-6 py-3"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 fade-in">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} Hemtech. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-gold/20 hover:bg-gold text-white rounded-full flex items-center justify-center transition-all hover:scale-110"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CleanFooter;