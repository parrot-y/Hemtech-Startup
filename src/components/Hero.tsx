import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Sparkles, Zap, Rocket, Star, Brain, Code, Database, Cpu, Bot, Globe, CheckCircle } from 'lucide-react';
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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full opacity-60 animate-pulse blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full opacity-50 animate-bounce blur-lg"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-r from-blue-400/5 to-cyan-400/5 rounded-full opacity-35 animate-pulse delay-1000 blur-2xl"></div>
        <div className="absolute bottom-20 right-32 w-20 h-20 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full opacity-30 animate-bounce delay-500 blur-lg"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Content */}
          <div className="text-left space-y-8 animate-fade-in">
            {/* Trust Badge */}
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-xl shadow-lg">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-gray-600">Trusted by 10+ businesses</span>
              </div>
            </div>
            
            {/* Main Headlines */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Build.
                </span>
                <br />
                <span className="text-gray-800">Manage.</span>
                <br />
                <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  Grow.
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                Your one-stop digital service provider. We transform businesses through 
                <span className="font-semibold text-blue-600"> cutting-edge web development</span>, 
                <span className="font-semibold text-indigo-600"> strategic SEO</span>, 
                <span className="font-semibold text-purple-600"> social media management</span>, and 
                <span className="font-semibold text-blue-600"> AI integration</span>.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Sparkles className="mr-2" size={20} />
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Button>
              
              <Button 
                onClick={scrollToServices}
                variant="outline" 
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl bg-white"
              >
                <Play className="mr-2" size={20} />
                See Pricing
              </Button>
            </div>

            {/* Social Proof Numbers */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-gray-600 font-medium">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">100%</div>
                <div className="text-sm text-gray-600 font-medium">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-gray-600 font-medium">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right side - Visual Content */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              {/* Main shuffling image */}
              <div 
                className={`absolute inset-0 transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
              >
                <img 
                  src={techImages[currentImageIndex]}
                  alt="Professional Digital Services"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-indigo-900/40"></div>
              </div>
              
              {/* Floating service cards */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg animate-bounce border border-blue-100">
                <Brain className="w-6 h-6 text-blue-600 mb-2" />
                <p className="text-sm font-semibold text-gray-800">AI Integration</p>
              </div>
              
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg animate-bounce delay-300 border border-indigo-100">
                <Code className="w-6 h-6 text-indigo-600 mb-2" />
                <p className="text-sm font-semibold text-gray-800">Web Development</p>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg animate-bounce delay-500 border border-purple-100">
                <Database className="w-6 h-6 text-purple-600 mb-2" />
                <p className="text-sm font-semibold text-gray-800">SEO & Marketing</p>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg animate-bounce delay-700 border border-green-100">
                <Globe className="w-6 h-6 text-green-600 mb-2" />
                <p className="text-sm font-semibold text-gray-800">Social Media</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;