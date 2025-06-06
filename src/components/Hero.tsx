
import React from 'react';
import { ArrowRight, Play, Sparkles, Zap, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced gradient background with more vibrant colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-50 via-blue-50 to-indigo-200"></div>
      
      {/* Animated floating elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-25 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-32 w-12 h-12 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full opacity-20 animate-bounce delay-500"></div>
      </div>
      
      {/* Enhanced pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%25239C92AC%22%20fill-opacity%3D%220.15%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Enhanced title with sparkle effect */}
          <div className="flex justify-center mb-4">
            <Sparkles className="w-8 h-8 text-purple-600 animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
              BIZINTEL
            </span>
          </h1>
          
          <div className="flex justify-center items-center gap-2 mb-4">
            <Zap className="w-6 h-6 text-yellow-500" />
            <p className="text-2xl md:text-3xl text-gray-700 font-semibold">
              Your Creative Partner in Digital Excellence
            </p>
            <Rocket className="w-6 h-6 text-blue-500" />
          </div>
          
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
            At BIZINTEL, we bring your ideas to life through stunning web design, engaging social media, 
            impactful graphics, and cutting-edge AI solutions that grow your business. Based in Kenya, we serve bold brands ready to stand out in the digital world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              onClick={scrollToPortfolio}
              size="lg" 
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white px-10 py-5 text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-pulse"
            >
              <Sparkles className="mr-3" size={24} />
              View Portfolio 
              <ArrowRight className="ml-3" size={24} />
            </Button>
            
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              size="lg"
              className="border-3 border-purple-600 text-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white px-10 py-5 text-xl font-bold rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl bg-white/80 backdrop-blur-sm"
            >
              <Play className="mr-3" size={24} />
              Request Free Quote
            </Button>
          </div>

          {/* Enhanced stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 bg-gradient-to-br from-white/70 to-purple-50/70 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 border border-purple-200">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">25+</div>
              <div className="text-gray-700 font-semibold">Projects Completed</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-white/70 to-blue-50/70 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 border border-blue-200">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">20+</div>
              <div className="text-gray-700 font-semibold">Happy Clients</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-white/70 to-pink-50/70 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 border border-pink-200">
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-3">3+</div>
              <div className="text-gray-700 font-semibold">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
