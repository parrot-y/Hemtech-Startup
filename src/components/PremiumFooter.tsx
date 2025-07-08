import React from 'react';
import { Mail, Phone, MapPin, ArrowUp, MessageCircle } from 'lucide-react';

const PremiumFooter = () => {
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
    'Hotel Booking Systems',
    'Digital Branding',
    'Social Media Management',
    'Mobile App Development',
    'AI Integration'
  ];

  return (
    <footer className="section-premium bg-primary-blue relative overflow-hidden">
      {/* Background Elements */}
      <div className="tech-bg">
        <div className="tech-shape"></div>
        <div className="tech-shape"></div>
      </div>
      
      <div className="container-premium relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 fade-in">
          <h3 className="text-4xl font-bold text-light mb-4">
            HemTech<span className="text-gold">.</span>
          </h3>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Kenya's premier digital agency combining innovation, design & AI to help businesses grow smarter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6 fade-in">
            <h4 className="text-xl font-bold text-light">About HemTech</h4>
            <p className="text-muted leading-relaxed">
              We specialize in creating exceptional digital experiences that drive business growth 
              and success in the modern digital landscape.
            </p>
            <div className="flex space-x-3">
              <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
                <span className="text-primary-blue font-bold text-sm">f</span>
              </div>
              <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
                <span className="text-primary-blue font-bold text-sm">t</span>
              </div>
              <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
                <span className="text-primary-blue font-bold text-sm">in</span>
              </div>
              <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
                <span className="text-primary-blue font-bold text-sm">ig</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 fade-in">
            <h4 className="text-xl font-bold text-light">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted hover:text-gold transition-colors duration-200 font-medium flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6 fade-in">
            <h4 className="text-xl font-bold text-light">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3"></div>
                  <span className="text-muted text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 fade-in">
            <h4 className="text-xl font-bold text-light">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                <div className="text-muted">
                  <div className="text-sm">+254 742 321 521</div>
                  <div className="text-sm">+254 713 707 483</div>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                <span className="text-muted text-sm">hemtech101@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                <span className="text-muted text-sm">Nairobi, Kenya 🇰🇪</span>
              </div>
            </div>
            
            <div className="mt-6">
              <a
                href="https://wa.me/254742321521"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium btn-primary w-full"
              >
                <MessageCircle className="mr-2 w-4 h-4" />
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gold/30 pt-8 fade-in">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted mb-4 md:mb-0 flex items-center">
              © {currentYear} HemTech. All rights reserved. Crafted with 💛 in Kenya.
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-muted hover:text-gold transition-colors duration-200 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-muted hover:text-gold transition-colors duration-200 text-sm">
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="btn-premium btn-ghost p-2"
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

export default PremiumFooter;