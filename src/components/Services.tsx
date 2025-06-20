import React from 'react';
import { Monitor, Brain, Search, TrendingUp, CheckCircle, ArrowRight, Zap, Star, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Web Development',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      description: 'Stunning websites that convert visitors to customers',
      features: ['Mobile-First Design', 'Lightning Fast', 'SEO Ready', 'Secure & Reliable'],
      pricing: {
        starter: 'Ksh 15,000',
        pro: 'Ksh 35,000',
        premium: 'Ksh 65,000'
      },
      benefits: ['Professional presence', 'More customers', 'Better credibility', '24/7 availability']
    },
    {
      icon: Brain,
      title: 'AI Integration',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
      description: 'Smart automation that saves time and money',
      features: ['AI Chatbots', 'Smart Analytics', 'Process Automation', 'Intelligent Insights'],
      pricing: {
        starter: 'Ksh 25,000',
        pro: 'Ksh 50,000',
        premium: 'Ksh 100,000'
      },
      benefits: ['Cut costs by 50%', 'Work smarter', 'Better decisions', 'Future-ready'],
      premium: true
    },
    {
      icon: Search,
      title: 'SEO & Marketing',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=300&fit=crop',
      description: 'Get found by customers searching for you',
      features: ['Google Rankings', 'Local SEO', 'Content Strategy', 'Performance Reports'],
      pricing: {
        starter: 'Ksh 8,000/month',
        pro: 'Ksh 18,000/month',
        premium: 'Ksh 35,000/month'
      },
      benefits: ['More website visitors', 'Higher sales', 'Beat competitors', 'Grow faster']
    },
    {
      icon: TrendingUp,
      title: 'Social Media',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',
      description: 'Build your brand and engage customers daily',
      features: ['Daily Posts', 'Engaging Content', 'Growth Strategy', 'Community Building'],
      pricing: {
        starter: 'Ksh 12,000/month',
        pro: 'Ksh 25,000/month',
        premium: 'Ksh 45,000/month'
      },
      benefits: ['Brand awareness', 'Customer loyalty', 'More leads', 'Viral growth']
    }
  ];

  const openWhatsApp = () => {
    window.open('https://wa.me/254742321521?text=Hi! I want to discuss my project', '_blank');
  };

  return (
    <section id="services" className="py-12 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-80 h-80 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to dominate online
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 ${
                service.premium ? 'ring-2 ring-purple-500/20' : ''
              }`}
            >
              {service.premium && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 lg:px-6 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
                    <Zap className="w-4 h-4 mr-2" />
                    AI POWERED
                  </div>
                </div>
              )}
              
              {/* Service Image */}
              <div className="mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 lg:h-48 object-cover rounded-xl"
                />
              </div>
              
              <div className="flex items-center mb-4 lg:mb-6">
                <div className={`w-12 h-12 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center mr-4 ${
                  service.premium 
                    ? 'bg-gradient-to-r from-purple-100 to-pink-100' 
                    : 'bg-gradient-to-r from-gray-100 to-blue-50'
                }`}>
                  <service.icon className={`w-6 h-6 lg:w-8 lg:h-8 ${service.premium ? 'text-purple-600' : 'text-blue-600'}`} />
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 lg:mb-6 leading-relaxed text-sm lg:text-base">{service.description}</p>
              
              {/* Features */}
              <div className="mb-4 lg:mb-6">
                <h4 className="font-semibold text-gray-900 mb-3 text-sm lg:text-base">What You Get:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing Tiers */}
              <div className="mb-4 lg:mb-6">
                <h4 className="font-semibold text-gray-900 mb-3 text-sm lg:text-base">Pricing:</h4>
                <div className="grid grid-cols-3 gap-2 text-xs lg:text-sm">
                  <div className="text-center p-2 bg-blue-50 rounded-lg">
                    <div className="font-semibold text-blue-600">Starter</div>
                    <div className="text-gray-600">{service.pricing.starter}</div>
                  </div>
                  <div className="text-center p-2 bg-purple-50 rounded-lg">
                    <div className="font-semibold text-purple-600">Pro</div>
                    <div className="text-gray-600">{service.pricing.pro}</div>
                  </div>
                  <div className="text-center p-2 bg-pink-50 rounded-lg">
                    <div className="font-semibold text-pink-600">Premium</div>
                    <div className="text-gray-600">{service.pricing.premium}</div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3 text-sm lg:text-base">Results You'll See:</h4>
                <ul className="space-y-1">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <Star className="w-3 h-3 text-yellow-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                onClick={openWhatsApp}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-sm lg:text-base"
              >
                <MessageCircle className="mr-2 w-4 h-4" />
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <Button
            onClick={openWhatsApp}
            size="lg"
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 lg:px-12 py-4 lg:py-6 text-lg lg:text-xl font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110"
          >
            <MessageCircle className="mr-3" size={24} />
            Start Your Project Now - Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;