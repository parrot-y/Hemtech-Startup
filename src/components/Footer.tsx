
import React from 'react';
import { Github, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Crown, Star, Zap, Rocket } from 'lucide-react';

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
    "Web Design & Development",
    "Mobile App Development", 
    "AI Integration Solutions",
    "SEO Optimization",
    "Social Media Management",
    "Brand Identity Design",
    "Email Marketing Setup"
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-violet-900 to-purple-900">
      {/* Enhanced Background with Dynamic Shapes */}
      <div className="absolute inset-0">
        {/* Large gradient orbs for visibility */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-violet-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-r from-blue-500/25 to-indigo-500/25 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-32 left-32 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-32 w-72 h-72 bg-gradient-to-r from-indigo-500/25 to-violet-500/25 rounded-full blur-2xl animate-bounce delay-500"></div>
        
        {/* Geometric shapes for modern look */}
        <div className="absolute top-10 right-40 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 transform rotate-45 animate-spin opacity-60" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-pink-500/20 to-rose-500/20 transform rotate-12 animate-pulse"></div>
      </div>
      
      {/* Premium grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2523ffffff%22%20fill-opacity%3D%220.08%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <Crown className="w-12 h-12 text-violet-400 mr-3" />
            <h3 className="text-6xl font-black bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              HEMTECH
            </h3>
            <Zap className="w-12 h-12 text-yellow-400 ml-3 animate-bounce" />
          </div>
          <div className="flex justify-center items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current animate-pulse" style={{animationDelay: `${i * 0.2}s`}} />
            ))}
            <span className="text-lg text-white ml-3 font-bold">5.0 Client Rating</span>
          </div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            🚀 Professional Digital Solutions for Brands That Want to Win. We don't just build websites - we create digital empires that dominate markets and captivate audiences worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info with Enhanced Branding */}
          <div className="lg:col-span-1 bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center mb-6">
              <Rocket className="w-10 h-10 text-violet-400 mr-3 animate-bounce" />
              <h4 className="text-2xl font-bold text-white">Digital Studio</h4>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Where cutting-edge technology meets creative excellence. We transform ideas into digital masterpieces that lead industries and drive real business growth.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="bg-gradient-to-r from-violet-600/20 to-purple-600/20 backdrop-blur-sm p-4 rounded-2xl hover:bg-gradient-to-r hover:from-violet-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-110 border border-violet-400/30 hover:border-violet-400 group"
                >
                  <social.icon size={24} className="text-white group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
            <h4 className="text-2xl font-bold mb-6 text-violet-400 flex items-center">
              <Star className="w-6 h-6 mr-2 animate-spin" />
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-violet-400 transition-all duration-200 hover:underline font-semibold text-lg flex items-center group"
                  >
                    <span className="w-2 h-2 bg-violet-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* HemTech Services */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
            <h4 className="text-2xl font-bold mb-6 text-violet-400 flex items-center">
              <Zap className="w-6 h-6 mr-2 animate-pulse" />
              Our Services
            </h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full mr-3 animate-pulse" style={{animationDelay: `${index * 0.1}s`}}></div>
                  <span className="text-gray-300 hover:text-violet-400 transition-colors duration-200 cursor-pointer font-medium text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Contact Info */}
          <div className="bg-gradient-to-br from-violet-600/20 to-purple-600/20 backdrop-blur-md p-8 rounded-3xl border-2 border-violet-400/30 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
            <h4 className="text-2xl font-bold mb-6 text-white flex items-center">
              <Crown className="w-6 h-6 mr-2 animate-bounce" />
              Get In Touch
            </h4>
            <div className="space-y-6">
              <div className="flex items-center bg-white/10 p-4 rounded-2xl">
                <Phone className="w-6 h-6 text-violet-400 mr-4" />
                <div>
                  <div className="text-white font-bold text-lg">+254 742 321 521</div>
                  <div className="text-white font-bold text-lg">+254 713 707 483</div>
                </div>
              </div>
              <div className="flex items-center bg-white/10 p-4 rounded-2xl">
                <Mail className="w-6 h-6 text-violet-400 mr-4" />
                <span className="text-white font-bold text-lg">vidonyihemstone99@gmail.com</span>
              </div>
              <div className="flex items-center bg-white/10 p-4 rounded-2xl">
                <MapPin className="w-6 h-6 text-violet-400 mr-4" />
                <span className="text-white font-bold text-lg">Nairobi, Kenya 🇰🇪</span>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl border-2 border-green-400/30">
              <p className="text-white font-bold mb-4 text-lg flex items-center">
                <Rocket className="w-6 h-6 mr-2 animate-bounce" />
                Ready to dominate your market? 🚀
              </p>
              <a
                href="https://wa.me/254742321521"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-green-400/50"
              >
                💬 WhatsApp Now
              </a>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t-2 border-violet-500/30 mt-16 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
            <div className="text-gray-300 text-lg mb-4 md:mb-0 flex items-center">
              <Crown className="w-6 h-6 text-violet-400 mr-2" />
              © {currentYear} HemTech. All rights reserved. Crafted with 💜 in Kenya. 
              <span className="text-violet-400 font-bold ml-2 flex items-center">
                <Star className="w-4 h-4 mr-1 animate-spin" />
                Professional Digital Solutions.
                <Zap className="w-4 h-4 ml-1 animate-pulse" />
              </span>
            </div>
            <div className="flex space-x-8 text-lg">
              <a href="#" className="text-gray-300 hover:text-violet-400 transition-colors duration-200 font-bold border-b-2 border-transparent hover:border-violet-400">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-violet-400 transition-colors duration-200 font-bold border-b-2 border-transparent hover:border-violet-400">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-violet-400 transition-colors duration-200 font-bold border-b-2 border-transparent hover:border-violet-400">
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
