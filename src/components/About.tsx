
import React from 'react';
import { Heart, Target, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="mb-8">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
                alt="Hemstone Vidonyi - BIZINTEL Founder"
                className="w-full max-w-md mx-auto lg:mx-0 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              />
            </div>
          </div>
          
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Hemstone Vidonyi
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I help brands grow smarter and shine brighter online. With a passion for design, digital strategy, 
              and storytelling, I specialize in creating stunning websites, managing social media with intention, 
              and building visual identities that leave a lasting impression.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At BIZINTEL, it's not just about great visuals — it's about helping businesses in Kenya (and beyond) 
              design, manage, and grow their digital presence with confidence. Whether you're a startup, entrepreneur, 
              or small business, I'm here to turn your ideas into results.
            </p>
            
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-6 mb-8">
              <p className="text-xl font-semibold text-gray-800 text-center italic">
                "Let's build something brilliant together."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors duration-300">
                <Heart className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Passionate</h3>
                <p className="text-sm text-gray-600">Driven by creativity and excellence</p>
              </div>
              
              <div className="text-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300">
                <Target className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Strategic</h3>
                <p className="text-sm text-gray-600">Results-focused approach</p>
              </div>
              
              <div className="text-center p-4 bg-indigo-50 rounded-xl hover:bg-indigo-100 transition-colors duration-300">
                <Zap className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Innovative</h3>
                <p className="text-sm text-gray-600">Cutting-edge digital solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
