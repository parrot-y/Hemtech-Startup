
import React from 'react';
import { ArrowRight, Play, Sparkles, Zap, Rocket, Crown, Star } from 'lucide-react';
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
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-violet-50/80 via-purple-50/60 to-blue-50/80"></div>
      
      {/* Enhanced floating elements with premium colors */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-violet-400/30 to-purple-400/30 rounded-full opacity-40 animate-pulse blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-full opacity-50 animate-bounce blur-lg"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-r from-purple-400/25 to-pink-400/25 rounded-full opacity-35 animate-pulse delay-1000 blur-2xl"></div>
        <div className="absolute bottom-20 right-32 w-20 h-20 bg-gradient-to-r from-indigo-400/30 to-violet-400/30 rounded-full opacity-30 animate-bounce delay-500 blur-lg"></div>
      </div>
      
      {/* Premium pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%25236366f1%22%20fill-opacity%3D%220.08%22%3E%3Ccircle%20cx%3D%2240%22%20cy%3D%2240%22%20r%3D%226%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Premium title with crown effect */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Crown className="w-16 h-16 text-violet-600 animate-pulse" />
              <div className="absolute -top-2 -right-2">
                <Star className="w-6 h-6 text-yellow-500 animate-spin" />
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-gray-900 mb-8 leading-none">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent animate-pulse drop-shadow-2xl">
              BIZINTEL
            </span>
          </h1>
          
          <div className="flex justify-center items-center gap-3 mb-6">
            <Zap className="w-8 h-8 text-yellow-500 animate-bounce" />
            <p className="text-3xl md:text-4xl text-gray-800 font-bold bg-white/60 backdrop-blur-sm px-6 py-2 rounded-full">
              World-Class Digital Excellence
            </p>
            <Rocket className="w-8 h-8 text-blue-500 animate-bounce delay-300" />
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-16 max-w-5xl mx-auto leading-relaxed bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/50">
            At BIZINTEL, we craft world-class digital experiences powered by cutting-edge AI technology. 
            Based in Kenya, we serve ambitious brands ready to dominate the digital landscape with premium websites, 
            strategic social media, stunning graphics, and revolutionary AI solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
            <Button 
              onClick={scrollToPortfolio}
              size="lg" 
              className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 hover:from-violet-700 hover:via-purple-700 hover:to-blue-700 text-white px-12 py-6 text-2xl font-black rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-pulse border-4 border-white/30"
            >
              <Sparkles className="mr-4" size={28} />
              View Portfolio 
              <ArrowRight className="ml-4" size={28} />
            </Button>
            
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              size="lg"
              className="border-4 border-violet-600 text-violet-600 hover:bg-gradient-to-r hover:from-violet-600 hover:to-purple-600 hover:text-white px-12 py-6 text-2xl font-black rounded-full transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-2xl bg-white/90 backdrop-blur-md"
            >
              <Play className="mr-4" size={28} />
              Get Free Quote
            </Button>
          </div>

          {/* Enhanced premium stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="text-center p-10 bg-gradient-to-br from-white/80 to-violet-50/80 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 border-2 border-violet-200/50">
              <div className="text-6xl font-black bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-4">25+</div>
              <div className="text-gray-800 font-bold text-lg">Premium Projects Delivered</div>
              <div className="text-violet-600 text-sm mt-2">🏆 Award-Winning Work</div>
            </div>
            <div className="text-center p-10 bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 border-2 border-blue-200/50">
              <div className="text-6xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">20+</div>
              <div className="text-gray-800 font-bold text-lg">Satisfied Global Clients</div>
              <div className="text-blue-600 text-sm mt-2">⭐ 5-Star Reviews</div>
            </div>
            <div className="text-center p-10 bg-gradient-to-br from-white/80 to-amber-50/80 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 border-2 border-amber-200/50">
              <div className="text-6xl font-black bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent mb-4">3+</div>
              <div className="text-gray-800 font-bold text-lg">Years of Excellence</div>
              <div className="text-amber-600 text-sm mt-2">🚀 Industry Leader</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
