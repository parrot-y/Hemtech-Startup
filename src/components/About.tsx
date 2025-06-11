import React from 'react';
import { Heart, Target, Zap, Crown, Star, Sparkles, CheckCircle, Users, Award, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/5 to-indigo-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-indigo-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="mb-8">
              <img
                src="/lovable-uploads/c5eccfbc-273a-4d6e-adbc-6709cd55c4a4.png"
                alt="Hemstone Vidonyi - HemTech Founder"
                className="w-full max-w-md mx-auto lg:mx-0 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border border-gray-200"
              />
            </div>
          </div>
          
          <div className="animate-fade-in">
            <div className="flex items-center mb-6">
              <Crown className="w-10 h-10 text-blue-600 mr-4" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Meet{' '}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  HemTech
                </span>
              </h2>
            </div>
            
            <div className="mb-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Sparkles className="w-6 h-6 text-blue-600 mr-2" />
                Digital Studio by Hemstone Vidonyi
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                HemTech is a modern digital studio that transforms businesses through expertly designed websites, 
                strategic content, and innovative marketing solutions. We specialize in creating exceptional digital 
                experiences that drive real business results.
              </p>
            </div>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Whether you're a startup looking to make your mark, an entrepreneur scaling your business, 
              or an established company ready to dominate digitally — HemTech provides everything your brand 
              needs to thrive online.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With a passion for design, digital strategy, and cutting-edge technology, we don't just build websites — 
              we create digital empires that captivate audiences and generate sustainable growth.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8 border border-blue-100">
              <p className="text-xl font-semibold text-gray-900 text-center italic flex items-center justify-center">
                <Star className="w-6 h-6 text-yellow-500 mr-2" />
                "Let's build something brilliant together."
                <Star className="w-6 h-6 text-yellow-500 ml-2" />
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-2xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-gray-100">
                <Heart className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Passionate</h3>
                <p className="text-sm text-gray-600">Driven by creativity and excellence in every project</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-2xl hover:bg-indigo-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-gray-100">
                <Target className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Strategic</h3>
                <p className="text-sm text-gray-600">Results-focused approach that delivers measurable growth</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-2xl hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-gray-100">
                <Zap className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Innovative</h3>
                <p className="text-sm text-gray-600">Cutting-edge technology and creative solutions</p>
              </div>
            </div>

            {/* Additional Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-1" />
                  <span className="text-2xl font-bold text-blue-600">10+</span>
                </div>
                <div className="text-sm text-gray-600 font-medium">Projects Completed</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 text-green-500 mr-1" />
                  <span className="text-2xl font-bold text-indigo-600">100%</span>
                </div>
                <div className="text-sm text-gray-600 font-medium">Client Satisfaction</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-5 h-5 text-green-500 mr-1" />
                  <span className="text-2xl font-bold text-purple-600">3+</span>
                </div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-5 h-5 text-green-500 mr-1" />
                  <span className="text-2xl font-bold text-green-600">24/7</span>
                </div>
                <div className="text-sm text-gray-600 font-medium">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;