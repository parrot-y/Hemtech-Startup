import React from 'react';
import { ArrowRight, Play, Sparkles, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg%20width='60'%20height='60'%20viewBox='0%200%2060%2060'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cg%20fill='none'%20fill-rule='evenodd'%3E%3Cg%20fill='%230033a0'%20fill-opacity='0.03'%3E%3Ccircle%20cx='30'%20cy='30'%20r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-green-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass-morphism px-4 py-2 rounded-full"
            >
              <Sparkles className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium text-gray-700">Premium Digital Agency</span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
              >
                <span className="gradient-text">Build.</span>
                <br />
                <span className="text-gray-900">Manage.</span>
                <br />
                <span className="gradient-text">Grow.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl"
              >
                Kenya's premier digital agency crafting
                <span className="font-semibold text-blue-600"> cutting-edge websites</span>,
                <span className="font-semibold text-green-500"> modern branding</span>, and
                <span className="font-semibold text-purple-600"> digital experiences</span> that drive results.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <Button onClick={scrollToContact} size="lg" className="glow-button bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <Zap className="mr-2" size={20} />
                Start Your Project
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button onClick={scrollToServices} variant="outline" size="lg" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 glass-morphism">
                <Play className="mr-2" size={20} />
                View Our Work
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
            >
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-sm text-gray-600 font-medium">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">100%</div>
                <div className="text-sm text-gray-600 font-medium">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-gray-600 font-medium">Support</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <motion.img
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=entropy&auto=format"
                alt="Modern Digital Agency"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-green-900/30"></div>

              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-6 left-6 glass-morphism p-4 rounded-xl shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg mb-2"></div>
                <p className="text-sm font-semibold text-white">Web Design</p>
              </motion.div>

              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} className="absolute top-6 right-6 glass-morphism p-4 rounded-xl shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-purple-500 rounded-lg mb-2"></div>
                <p className="text-sm font-semibold text-white">Branding</p>
              </motion.div>

              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 2 }} className="absolute bottom-6 left-6 glass-morphism p-4 rounded-xl shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-2"></div>
                <p className="text-sm font-semibold text-white">Development</p>
              </motion.div>

              <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }} className="absolute bottom-6 right-6 glass-morphism p-4 rounded-xl shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg mb-2"></div>
                <p className="text-sm font-semibold text-white">Digital Strategy</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
