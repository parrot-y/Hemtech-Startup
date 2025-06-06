
import React from 'react';
import { Monitor, Smartphone, Palette, TrendingUp, Search, Video, Brain, Bot, Zap, Sparkles, Star, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Web Design & Development',
      description: 'Business websites, portfolios, landing pages, and e-commerce platforms with modern design',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile-First', 'CMS Integration']
    },
    {
      icon: Smartphone,
      title: 'Social Media Management',
      description: 'Complete social media strategy, content creation, and growth optimization',
      features: ['Content Creation', 'Page Optimization', 'Growth Strategy', 'Analytics', 'Engagement']
    },
    {
      icon: Palette,
      title: 'Brand Design & Identity',
      description: 'Complete brand identity including logos, brand kits, and marketing materials',
      features: ['Logo Design', 'Brand Identity', 'Print Design', 'Digital Assets', 'Style Guides']
    },
    {
      icon: Search,
      title: 'SEO & Digital Marketing',
      description: 'Comprehensive SEO optimization and digital marketing strategies for growth',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Local SEO', 'Content Marketing']
    },
    {
      icon: Brain,
      title: 'AI Integration Solutions',
      description: 'Cutting-edge AI solutions including chatbots, automation, and intelligent analytics',
      features: ['AI Chatbots', 'Process Automation', 'Data Analytics', 'AI Content Generation', 'Smart Recommendations'],
      premium: true
    },
    {
      icon: Video,
      title: 'Content & Media Production',
      description: 'Professional video editing, content writing, and multimedia production services',
      features: ['Video Editing', 'Content Writing', 'Photography', 'Multimedia', 'Social Media Content']
    }
  ];

  const packages = [
    {
      name: 'Starter',
      price: 'Ksh 7,500',
      originalPrice: 'Ksh 10,000',
      features: [
        '1-page professional website',
        '3 social media post designs',
        'Basic brand color + font guide',
        'Mobile responsive design',
        '1 revision round',
        'Basic SEO setup'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      price: 'Ksh 12,000',
      originalPrice: 'Ksh 18,000',
      features: [
        '3-page website with animations',
        '10 social media designs',
        'Complete brand kit',
        'Advanced SEO optimization',
        '2 revision rounds',
        'Contact form integration',
        'Google Analytics setup'
      ],
      popular: true,
      color: 'from-violet-600 to-purple-600'
    },
    {
      name: 'Enterprise',
      price: 'Ksh 22,000',
      originalPrice: 'Ksh 35,000',
      features: [
        '5-page website + E-commerce',
        'Unlimited social media designs',
        'Complete brand identity',
        'AI chatbot integration',
        'Premium SEO & marketing',
        'Strategy & feedback calls',
        'Unlimited revisions',
        '3 months free support'
      ],
      popular: false,
      color: 'from-amber-500 to-orange-500'
    }
  ];

  const aiServices = [
    { service: 'AI Chatbot integration for customer service', price: 'Ksh 8,000+' },
    { service: 'AI Content Generation setup (blogs, social media)', price: 'Ksh 6,000+' },
    { service: 'AI-powered analytics and insights dashboard', price: 'Ksh 10,000+' },
    { service: 'AI Email automation and personalization', price: 'Ksh 7,000+' },
    { service: 'AI Recommendation system for e-commerce', price: 'Ksh 15,000+' },
    { service: 'AI Data analysis and business intelligence', price: 'Ksh 18,000+' }
  ];

  const standardAddOns = [
    { service: 'Logo design', price: 'Ksh 3,000+' },
    { service: 'Extra web page', price: 'Ksh 1,000 per page' },
    { service: 'Monthly social media management', price: 'From Ksh 4,000' },
    { service: 'Video/Reels editing', price: 'Ksh 2,000 per video' },
    { service: 'Email marketing setup', price: 'Ksh 3,000+' },
    { service: 'Facebook/Instagram Ads management', price: 'From Ksh 5,000 per month' },
    { service: 'Google My Business optimization', price: 'Ksh 2,000' },
    { service: 'Website maintenance & updates', price: 'From Ksh 3,000 per month' }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 via-violet-50/30 to-blue-50/30 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-80 h-80 bg-gradient-to-r from-violet-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <Crown className="w-12 h-12 text-violet-600 animate-pulse" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            World-Class <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Comprehensive digital solutions powered by cutting-edge AI technology. Your success is our mission.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group border border-white/50 ${
                service.premium ? 'ring-2 ring-violet-500/50' : ''
              }`}
            >
              {service.premium && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center">
                    <Zap className="w-4 h-4 mr-2" />
                    AI POWERED
                  </div>
                </div>
              )}
              
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                service.premium 
                  ? 'bg-gradient-to-r from-violet-100 to-purple-100 group-hover:from-violet-200 group-hover:to-purple-200' 
                  : 'bg-gradient-to-r from-blue-100 to-indigo-100 group-hover:from-blue-200 group-hover:to-indigo-200'
              }`}>
                <service.icon className={`w-10 h-10 ${service.premium ? 'text-violet-600' : 'text-blue-600'}`} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <div className={`w-2 h-2 rounded-full mr-3 ${service.premium ? 'bg-violet-600' : 'bg-blue-600'}`}></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Pricing Packages */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Success Package</span>
            </h3>
            <p className="text-xl text-gray-600">Transparent pricing, exceptional value, guaranteed results</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/50 ${
                  pkg.popular ? 'ring-2 ring-violet-500 scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-3 rounded-full text-sm font-bold flex items-center shadow-lg">
                      <Star className="w-4 h-4 mr-2" />
                      MOST POPULAR
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">{pkg.name}</h4>
                  <div className="mb-4">
                    <div className="text-5xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                      {pkg.price}
                    </div>
                    <div className="text-lg text-gray-500 line-through">{pkg.originalPrice}</div>
                    <div className="text-sm text-green-600 font-semibold">Limited Time Offer</div>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  onClick={scrollToContact}
                  className={`w-full py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 hover:from-violet-700 hover:via-purple-700 hover:to-blue-700 text-white shadow-lg'
                      : 'border-2 border-violet-600 text-violet-600 hover:bg-gradient-to-r hover:from-violet-600 hover:to-purple-600 hover:text-white'
                  }`}
                  variant={pkg.popular ? 'default' : 'outline'}
                >
                  Get Started Now
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* AI Services Showcase */}
        <div className="bg-gradient-to-r from-violet-900 via-purple-900 to-blue-900 rounded-3xl p-12 mb-16 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2523ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
          
          <div className="relative z-10 text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Brain className="w-12 h-12 text-white" />
              </div>
            </div>
            <h3 className="text-4xl font-bold mb-4">
              AI-Powered Solutions <span className="text-yellow-400">🚀</span>
            </h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Stay ahead of the competition with our cutting-edge AI integrations that automate, optimize, and accelerate your business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Zap className="w-5 h-5 text-yellow-400 mr-3" />
                    <span className="font-semibold">{service.service}</span>
                  </div>
                  <span className="text-yellow-400 font-bold">{service.price}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button
              onClick={scrollToContact}
              className="bg-white text-violet-900 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              <Sparkles className="mr-2" />
              Explore AI Solutions
            </Button>
          </div>
        </div>

        {/* Standard Add-ons */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Additional <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h3>
            <p className="text-gray-600">Enhance your package with these premium add-ons</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {standardAddOns.map((addon, index) => (
              <div key={index} className="flex justify-between items-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                <span className="text-gray-700 font-medium">{addon.service}</span>
                <span className="font-bold text-violet-600">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
