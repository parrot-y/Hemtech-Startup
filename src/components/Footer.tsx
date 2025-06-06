
import React from 'react';
import { Github, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Crown, Star } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Twitter, href: "https://x.com/Human_hem", label: "Twitter" },
    { icon: Github, href: "https://github.com/parrot-y", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/hemstone-agufana-093346364/", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Premium Web Design",
    "AI-Powered Solutions",
    "Social Media Mastery",
    "Brand Identity Design",
    "SEO & Digital Marketing",
    "Content Creation",
    "E-commerce Development"
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-violet-900/20 to-gray-900 text-white relative overflow-hidden">
      {/* Premium background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2523ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info with Premium Branding */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Crown className="w-8 h-8 text-violet-400 mr-2" />
              <h3 className="text-4xl font-black bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                BIZINTEL
              </h3>
            </div>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
              <span className="text-sm text-gray-300 ml-2">5.0 Client Rating</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              World-class digital solutions powered by AI. We don't just build websites - we craft digital empires that dominate markets and captivate audiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-full hover:bg-gradient-to-r hover:from-violet-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 border border-gray-700 hover:border-violet-500"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-violet-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-violet-400 transition-colors duration-200 hover:underline font-medium"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Premium Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-violet-400">Premium Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 hover:text-violet-400 transition-colors duration-200 cursor-pointer font-medium">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-violet-400">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-violet-400 mr-3" />
                <div>
                  <div className="text-gray-300 font-medium">+254 742 321 521</div>
                  <div className="text-gray-300 font-medium">+254 713 707 483</div>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-violet-400 mr-3" />
                <span className="text-gray-300 font-medium">vidonyihemstone99@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-violet-400 mr-3" />
                <span className="text-gray-300 font-medium">Nairobi, Kenya 🇰🇪</span>
              </div>
            </div>
            
            <div className="mt-6 p-6 bg-gradient-to-r from-violet-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl border border-violet-500/30">
              <p className="text-white font-bold mb-3">Ready to dominate your market? 🚀</p>
              <a
                href="https://wa.me/254742321521"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>

        {/* Premium Bottom Section */}
        <div className="border-t border-gray-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} BIZINTEL. All rights reserved. Crafted with 💜 in Kenya. 
              <span className="text-violet-400 font-semibold ml-2">World-Class Digital Solutions.</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors duration-200 font-medium">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors duration-200 font-medium">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors duration-200 font-medium">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
