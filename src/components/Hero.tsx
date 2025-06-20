import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Sparkles, Zap, Rocket, Star, Brain, Code, Database, Cpu, Bot, Globe, CheckCircle, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Tech-focused images that will shuffle
  const techImages = [
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop&crop=entropy&auto=format',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&crop=entropy&auto=format',
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop&crop=entropy&auto=format',
    'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop&crop=entropy&auto=format',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=entropy&auto=format',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&crop=entropy&auto=format'
  ];

  // Shuffle images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % techImages.length);
        setIsVisible(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [techImages.length]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/254742321521?text=Hi! I need digital services for my business', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full opacity-60 animate-pulse blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full opacity-50 animate-bounce blur-lg"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full opacity-35 animate-pulse delay-1000 blur-2xl"></div>
        <div className="absolute bottom-20 right-32 w-20 h-20 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full opacity-30 animate-bounce delay-500 blur-lg"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left side - Content */}
          <div className="text-left space-y-6 lg:space-y-8 animate-fade-in">
            {/* Trust Badge */}
            <div className="flex items-center gap-3 mb-4 lg:mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 lg:p-3 rounded-xl shadow-lg">
                <Rocket className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-400" />
                <span className="text-xs lg:text-sm font-medium text-gray-300">Trusted by 10+ businesses</span>
              </div>
            </div>
            
            {/* Main Headlines */}
            <div className="space-y-3 lg:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Build.
                </span>
                <br />
                <span className="text-gray-100">Manage.</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Grow.
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                Transform your business with 
                <span className="font-semibold text-purple-400"> AI-powered solutions</span>, 
                <span className="font-semibold text-pink-400"> stunning websites</span>, and 
                <span className="font-semibold text-cyan-400"> growth strategies</span>.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-4 lg:pt-6">
              <Button 
                onClick={openWhatsApp}
                size="lg" 
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="mr-2" size={20} />
                Start Now - Free
                <ArrowRight className="ml-2" size={20} />
              </Button>
              
              <Button 
                onClick={scrollToServices}
                variant="outline" 
                size="lg"
                className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl bg-transparent"
              >
                <Play className="mr-2" size={20} />
                See Pricing
              </Button>
            </div>

            {/* Social Proof Numbers */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6 pt-6 lg:pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-purple-400">10+</div>
                <div className="text-xs lg:text-sm text-gray-400 font-medium">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-pink-400">100%</div>
                <div className="text-xs lg:text-sm text-gray-400 font-medium">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-cyan-400">24/7</div>
                <div className="text-xs lg:text-sm text-gray-400 font-medium">Support</div>
              </div>
            </div>
          </div>

          {/* Right side - Visual Content */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative w-full h-80 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
              {/* Main shuffling image */}
              <div 
                className={`absolute inset-0 transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
              >
                <img 
                  src={techImages[currentImageIndex]}
                  alt="Professional Digital Services"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-pink-900/40"></div>
              </div>
              
              {/* Floating service cards */}
              <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md p-3 lg:p-4 rounded-xl shadow-lg animate-bounce border border-purple-300/20">
                <Brain className="w-5 h-5 lg:w-6 lg:h-6 text-purple-400 mb-2" />
                <p className="text-xs lg:text-sm font-semibold text-white">AI Integration</p>
              </div>
              
              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-3 lg:p-4 rounded-xl shadow-lg animate-bounce delay-300 border border-pink-300/20">
                <Code className="w-5 h-5 lg:w-6 lg:h-6 text-pink-400 mb-2" />
                <p className="text-xs lg:text-sm font-semibold text-white">Web Dev</p>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md p-3 lg:p-4 rounded-xl shadow-lg animate-bounce delay-500 border border-cyan-300/20">
                <Database className="w-5 h-5 lg:w-6 lg:h-6 text-cyan-400 mb-2" />
                <p className="text-xs lg:text-sm font-semibold text-white">SEO & Marketing</p>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md p-3 lg:p-4 rounded-xl shadow-lg animate-bounce delay-700 border border-green-300/20">
                <Globe className="w-5 h-5 lg:w-6 lg:h-6 text-green-400 mb-2" />
                <p className="text-xs lg:text-sm font-semibold text-white">Social Media</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;