import React from 'react';
import { Monitor, Smartphone, Palette, TrendingUp, Search, Video, Brain, Bot, Zap, Sparkles, Star, Crown, Globe, Mail, Camera, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile-First', 'CMS Integration'],
      pricing: {
        starter: 'Ksh 15,000',
        pro: 'Ksh 35,000',
        premium: 'Ksh 65,000'
      },
      benefits: ['Professional online presence', 'Increased credibility', 'Better user experience', '24/7 availability']
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Cutting-edge AI solutions including chatbots, automation, and intelligent analytics',
      features: ['AI Chatbots', 'Process Automation', 'Data Analytics', 'AI Content Generation', 'Smart Recommendations'],
      pricing: {
        starter: 'Ksh 25,000',
        pro: 'Ksh 50,000',
        premium: 'Ksh 100,000'
      },
      benefits: ['Reduced operational costs', 'Improved efficiency', 'Better customer service', 'Data-driven insights'],
      premium: true
    },
    {
      icon: Search,
      title: 'SEO & Digital Marketing',
      description: 'Comprehensive SEO strategies and digital marketing to boost your online visibility',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Local SEO', 'Analytics & Reporting'],
      pricing: {
        starter: 'Ksh 8,000/month',
        pro: 'Ksh 18,000/month',
        premium: 'Ksh 35,000/month'
      },
      benefits: ['Higher search rankings', 'Increased organic traffic', 'Better ROI', 'Brand visibility']
    },
    {
      icon: TrendingUp,
      title: 'Social Media Management',
      description: 'Complete social media strategy, content creation, and growth optimization',
      features: ['Content Creation', 'Monthly Packages', 'Growth Strategy', 'Analytics', 'Community Management'],
      pricing: {
        starter: 'Ksh 12,000/month',
        pro: 'Ksh 25,000/month',
        premium: 'Ksh 45,000/month'
      },
      benefits: ['Increased brand awareness', 'Better engagement', 'Lead generation', 'Customer loyalty']
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started',
      features: [
        'Basic website or service setup',
        'Essential features included',
        'Email support',
        '1 revision round',
        'Basic analytics'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Pro',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced features and customization',
        'Priority support',
        'Multiple revision rounds',
        'Advanced analytics',
        'Monthly consultations',
        'Performance optimization'
      ],
      popular: true,
      color: 'from-indigo-600 to-purple-600'
    },
    {
      name: 'Premium',
      description: 'Enterprise-level solutions',
      features: [
        'Full-scale custom solutions',
        '24/7 dedicated support',
        'Unlimited revisions',
        'Advanced integrations',
        'Weekly consultations',
        'Custom development',
        'Priority feature requests'
      ],
      popular: false,
      color: 'from-purple-600 to-pink-600'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-80 h-80 bg-gradient-to-r from-blue-400/5 to-indigo-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-r from-indigo-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional digital solutions designed to transform your business and drive growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 ${
                service.premium ? 'ring-2 ring-blue-500/20' : ''
              }`}
            >
              {service.premium && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
                    <Zap className="w-4 h-4 mr-2" />
                    AI POWERED
                  </div>
                </div>
              )}
              
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mr-4 ${
                  service.premium 
                    ? 'bg-gradient-to-r from-blue-100 to-indigo-100' 
                    : 'bg-gradient-to-r from-gray-100 to-blue-50'
                }`}>
                  <service.icon className={`w-8 h-8 ${service.premium ? 'text-blue-600' : 'text-indigo-600'}`} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              {/* What We Do */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">What We Do:</h4>
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
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Pricing Tiers:</h4>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div className="text-center p-2 bg-blue-50 rounded-lg">
                    <div className="font-semibold text-blue-600">Starter</div>
                    <div className="text-gray-600">{service.pricing.starter}</div>
                  </div>
                  <div className="text-center p-2 bg-indigo-50 rounded-lg">
                    <div className="font-semibold text-indigo-600">Pro</div>
                    <div className="text-gray-600">{service.pricing.pro}</div>
                  </div>
                  <div className="text-center p-2 bg-purple-50 rounded-lg">
                    <div className="font-semibold text-purple-600">Premium</div>
                    <div className="text-gray-600">{service.pricing.premium}</div>
                  </div>
                </div>
              </div>

              {/* What You Gain */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">What You Gain:</h4>
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
                onClick={scrollToContact}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Choose Plan
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Pricing Comparison */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Plan</span>
            </h3>
            <p className="text-lg text-gray-600">Transparent pricing for every business size</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 ${
                  tier.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full text-sm font-bold flex items-center shadow-lg">
                      <Star className="w-4 h-4 mr-2" />
                      MOST POPULAR
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h4>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  onClick={scrollToContact}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white shadow-lg'
                      : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                  }`}
                  variant={tier.popular ? 'default' : 'outline'}
                >
                  Book Consultation
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-12 py-6 text-lg font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110"
          >
            <Sparkles className="mr-3" size={24} />
            Get Your Free Quote Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;