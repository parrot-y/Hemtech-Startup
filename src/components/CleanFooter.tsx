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
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ];

  const services = [
    'Web Development',
    'Digital Branding',
    'SEO & Marketing',
    'Mobile Solutions',
    'UI/UX Design'
  ];

  return (
    <footer className="section section-dark">
      <div className="container py-16">
        {/* Header Section */}
        <div className="text-center mb-12 fade-in">
          <h3 className="text-4xl font-bold text-white mb-4">
            Hemtech<span style={{ color: 'var(--electric-blue)' }}>.</span>
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Kenya's premier digital agency crafting cutting-edge solutions for modern businesses.
          </p>
        </div>

        <div className="grid grid-4 mb-12">
          {/* Company Info */}
          <div className="space-y-6 fade-in">
            <h4 className="text-xl font-bold text-white">About Hemtech</h4>
            <p className="text-gray-300 leading-relaxed">
              We specialize in creating exceptional digital experiences that drive business growth 
              and success in the modern digital landscape.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 fade-in">
            <h4 className="text-xl font-bold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-electric-blue transition-colors duration-200 font-medium flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-electric-blue rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6 fade-in">
            <h4 className="text-xl font-bold text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-neon-green rounded-full mr-3"></div>
                  <span className="text-gray-300 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 fade-in">
            <h4 className="text-xl font-bold text-white">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-electric-blue mr-3 flex-shrink-0" />
                <div className="text-gray-300">
                  <div className="text-sm">+254 742 321 521</div>
                  <div className="text-sm">+254 713 707 483</div>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-electric-blue mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">hemtech101@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-electric-blue mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Nairobi, Kenya 🇰🇪</span>
              </div>
            </div>
            
            <div className="mt-6">
              <a
                href="https://wa.me/254742321521"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                💬 WhatsApp Now
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 pt-8 fade-in">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 flex items-center">
              © {currentYear} Hemtech. All rights reserved. Crafted with 💙 in Kenya.
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors duration-200 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-electric-blue transition-colors duration-200 text-sm">
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="btn-secondary p-2"
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