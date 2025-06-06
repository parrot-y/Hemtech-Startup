
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic Tech Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 opacity-20"
          style={{
            backgroundImage: `url(${techImages[currentImageIndex]})`,
            filter: 'blur(1px)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/95 via-violet-50/90 via-purple-50/85 to-blue-50/90"></div>
      </div>
      
      {/* Floating Tech Elements */}
      <div className="absolute inset-0">
        {techIcons.map((Icon, index) => (
          <div
            key={index}
            className={`absolute animate-bounce opacity-30`}
            style={{
              top: `${20 + (index * 15)}%`,
              left: `${10 + (index * 15)}%`,
              animationDelay: `${index * 0.5}s`,
              animationDuration: `${3 + index}s`
            }}
          >
            <Icon className="w-12 h-12 text-violet-600" />
          </div>
        ))}
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-violet-400/30 to-purple-400/30 rounded-full opacity-40 animate-pulse blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-full opacity-50 animate-bounce blur-lg"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-r from-purple-400/25 to-pink-400/25 rounded-full opacity-35 animate-pulse delay-1000 blur-2xl"></div>
        <div className="absolute bottom-20 right-32 w-20 h-20 bg-gradient-to-r from-indigo-400/30 to-violet-400/30 rounded-full opacity-30 animate-bounce delay-500 blur-lg"></div>
      </div>
      
      {/* Matrix-style pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%25236366f1%22%20fill-opacity%3D%220.08%22%3E%3Ccircle%20cx%3D%2240%22%20cy%3D%2240%22%20r%3D%226%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
      
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
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-none">
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                HemTech
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl mt-4 text-gray-700">
                Digital Solutions
              </span>
            </h1>
            
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-8 h-8 text-yellow-500 animate-bounce" />
              <p className="text-xl md:text-2xl text-gray-800 font-bold bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-violet-200">
                Professional Digital Solutions for Brands That Want to Win
              </p>
              <Rocket className="w-8 h-8 text-blue-500 animate-bounce delay-300" />
            </div>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 max-w-2xl">
              HemTech is a modern digital studio led by Hemstone Vidonyi. We help brands grow through expertly designed websites, 
              content, and marketing. Whether you're just starting or scaling, we provide everything your brand needs to thrive online.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 hover:from-violet-700 hover:via-purple-700 hover:to-blue-700 text-white px-10 py-6 text-xl font-black rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-pulse border-4 border-white/30"
              >
                <Sparkles className="mr-3" size={24} />
                Get a Free Quote
                <ArrowRight className="ml-3" size={24} />
              </Button>
              
              <Button 
                onClick={scrollToServices}
                variant="outline" 
                size="lg"
                className="border-4 border-violet-600 text-violet-600 hover:bg-gradient-to-r hover:from-violet-600 hover:to-purple-600 hover:text-white px-10 py-6 text-xl font-black rounded-full transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-2xl bg-white/90 backdrop-blur-md"
              >
                <Play className="mr-3" size={24} />
                View Services
              </Button>
            </div>
          </div>

          {/* Right side - Shuffling Images & Tech Showcase */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              {/* Main shuffling image */}
              <div 
                className={`absolute inset-0 transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
              >
                <img 
                  src={techImages[currentImageIndex]}
                  alt="Tech Innovation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/60 via-transparent to-blue-900/40"></div>
              </div>
              
              {/* Floating tech cards */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg animate-bounce">
                <Brain className="w-8 h-8 text-violet-600 mb-2" />
                <p className="text-sm font-bold text-gray-800">AI Solutions</p>
              </div>
              
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg animate-bounce delay-300">
                <Code className="w-8 h-8 text-blue-600 mb-2" />
                <p className="text-sm font-bold text-gray-800">Web Development</p>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg animate-bounce delay-500">
                <Database className="w-8 h-8 text-purple-600 mb-2" />
                <p className="text-sm font-bold text-gray-800">SEO & Marketing</p>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg animate-bounce delay-700">
                <Globe className="w-8 h-8 text-green-600 mb-2" />
                <p className="text-sm font-bold text-gray-800">Global Reach</p>
              </div>
            </div>
            
            {/* Floating elements around the image */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full animate-spin opacity-80"></div>
            <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse opacity-80"></div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20 max-w-6xl mx-auto">
          <div className="text-center p-8 bg-gradient-to-br from-white/90 to-violet-50/90 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 border-2 border-violet-200/50">
            <div className="text-5xl font-black bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-3">25+</div>
            <div className="text-gray-800 font-bold">Projects Delivered</div>
            <div className="text-violet-600 text-sm mt-1">🏆 Award-Winning</div>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-white/90 to-blue-50/90 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 border-2 border-blue-200/50">
            <div className="text-5xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">20+</div>
            <div className="text-gray-800 font-bold">Global Clients</div>
            <div className="text-blue-600 text-sm mt-1">⭐ 5-Star Reviews</div>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-white/90 to-amber-50/90 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 border-2 border-amber-200/50">
            <div className="text-5xl font-black bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent mb-3">3+</div>
            <div className="text-gray-800 font-bold">Years Excellence</div>
            <div className="text-amber-600 text-sm mt-1">🚀 Industry Leader</div>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-white/90 to-green-50/90 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 border-2 border-green-200/50">
            <div className="text-5xl font-black bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-3">100%</div>
            <div className="text-gray-800 font-bold">Success Rate</div>
            <div className="text-green-600 text-sm mt-1">💯 Guaranteed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
