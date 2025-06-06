
import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Sparkles, Zap, Rocket, Crown, Star, Brain, Code, Database, Cpu, Bot, Globe } from 'lucide-react';
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

  const techIcons = [Brain, Code, Database, Cpu, Bot, Globe];

  // Shuffle images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % techImages.length);
        setIsVisible(true);
      }, 300);
    }, 3000);

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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Dynamic Tech Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 opacity-10"
          style={{
            backgroundImage: `url(${techImages[currentImageIndex]})`,
            filter: 'blur(1px)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-gray-900/90 to-black/95"></div>
      </div>
      
      {/* Floating Tech Elements */}
      <div className="absolute inset-0">
        {techIcons.map((Icon, index) => (
          <div
            key={index}
            className={`absolute animate-bounce opacity-20`}
            style={{
              top: `${20 + (index * 15)}%`,
              left: `${10 + (index * 15)}%`,
              animationDelay: `${index * 0.5}s`,
              animationDuration: `${3 + index}s`
            }}
          >
            <Icon className="w-12 h-12 text-violet-400" />
          </div>
        ))}
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full opacity-40 animate-pulse blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full opacity-50 animate-bounce blur-lg"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full opacity-35 animate-pulse delay-1000 blur-2xl"></div>
        <div className="absolute bottom-20 right-32 w-20 h-20 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 rounded-full opacity-30 animate-bounce delay-500 blur-lg"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Content */}
          <div className="text-left space-y-8 animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-4 rounded-2xl">
                <Crown className="w-12 h-12 text-white" />
              </div>
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-500 fill-current animate-pulse" style={{animationDelay: `${i * 0.2}s`}} />
                ))}
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none">
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                HemTech
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl mt-4 text-gray-300">
                Digital Solutions
              </span>
            </h1>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="text-2xl md:text-3xl font-bold text-white bg-gradient-to-r from-violet-600/20 to-purple-600/20 backdrop-blur-sm px-8 py-4 rounded-full border border-violet-400/30">
                BUILD • MANAGE • GROW
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 hover:from-violet-700 hover:via-purple-700 hover:to-blue-700 text-white px-10 py-6 text-xl font-black rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110"
              >
                <Sparkles className="mr-3" size={24} />
                Get Started
                <ArrowRight className="ml-3" size={24} />
              </Button>
              
              <Button 
                onClick={scrollToServices}
                variant="outline" 
                size="lg"
                className="border-2 border-violet-400 text-violet-400 hover:bg-gradient-to-r hover:from-violet-600 hover:to-purple-600 hover:text-white px-10 py-6 text-xl font-black rounded-full transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-2xl bg-transparent backdrop-blur-md"
              >
                <Play className="mr-3" size={24} />
                Our Services
              </Button>
            </div>
          </div>

          {/* Right side - Shuffling Images & Tech Showcase */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-violet-400/20">
              {/* Main shuffling image */}
              <div 
                className={`absolute inset-0 transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
              >
                <img 
                  src={techImages[currentImageIndex]}
                  alt="Tech Innovation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/80 via-transparent to-blue-900/60"></div>
              </div>
              
              {/* Floating tech cards */}
              <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg animate-bounce border border-white/20">
                <Brain className="w-8 h-8 text-violet-400 mb-2" />
                <p className="text-sm font-bold text-white">AI Solutions</p>
              </div>
              
              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg animate-bounce delay-300 border border-white/20">
                <Code className="w-8 h-8 text-blue-400 mb-2" />
                <p className="text-sm font-bold text-white">Development</p>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg animate-bounce delay-500 border border-white/20">
                <Database className="w-8 h-8 text-purple-400 mb-2" />
                <p className="text-sm font-bold text-white">SEO & Marketing</p>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg animate-bounce delay-700 border border-white/20">
                <Globe className="w-8 h-8 text-green-400 mb-2" />
                <p className="text-sm font-bold text-white">Global Reach</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20 max-w-6xl mx-auto">
          <div className="text-center p-8 bg-white/5 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 border border-white/10">
            <div className="text-5xl font-black bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-3">25+</div>
            <div className="text-white font-bold">Projects Delivered</div>
            <div className="text-violet-400 text-sm mt-1">🏆 Successful</div>
          </div>
          
          <div className="text-center p-8 bg-white/5 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 border border-white/10">
            <div className="text-5xl font-black bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-3">20+</div>
            <div className="text-white font-bold">Global Clients</div>
            <div className="text-blue-400 text-sm mt-1">⭐ 5-Star Reviews</div>
          </div>
          
          <div className="text-center p-8 bg-white/5 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 border border-white/10">
            <div className="text-5xl font-black bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-3">3+</div>
            <div className="text-white font-bold">Years Excellence</div>
            <div className="text-amber-400 text-sm mt-1">🚀 Industry Leader</div>
          </div>
          
          <div className="text-center p-8 bg-white/5 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 border border-white/10">
            <div className="text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-3">100%</div>
            <div className="text-white font-bold">Success Rate</div>
            <div className="text-green-400 text-sm mt-1">💯 Guaranteed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
