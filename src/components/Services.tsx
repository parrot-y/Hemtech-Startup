
import React from 'react';
import { Monitor, Smartphone, Palette, TrendingUp, Search, Video, Brain, Bot, Zap, Sparkles, Star, Crown, Globe, Mail, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Web Design & Development',
      description: 'Responsive, custom-built websites that convert visitors into customers',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile-First', 'CMS Integration']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      features: ['Native Development', 'Cross-Platform', 'UI/UX Design', 'App Store Optimization', 'Push Notifications']
    },
    {
      icon: Brain,
      title: 'AI Integration for Business',
      description: 'Cutting-edge AI solutions including chatbots, automation, and intelligent analytics',
      features: ['AI Chatbots', 'Process Automation', 'Data Analytics', 'AI Content Generation', 'Smart Recommendations'],
      premium: true
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Comprehensive SEO strategies to boost your search engine rankings',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Local SEO', 'Analytics & Reporting']
    },
    {
      icon: TrendingUp,
      title: 'Social Media Management',
      description: 'Complete social media strategy, content creation, and growth optimization',
      features: ['Content Creation', 'Monthly Packages', 'Growth Strategy', 'Analytics', 'Community Management']
    },
    {
      icon: Palette,
      title: 'Logo & Brand Identity Design',
      description: 'Complete brand identity including logos, brand kits, and marketing materials',
      features: ['Logo Design', 'Brand Identity', 'Brand Guidelines', 'Digital Assets', 'Print Materials']
    },
    {
      icon: Globe,
      title: 'Extra Web Pages / Landing Pages',
      description: 'High-converting landing pages and additional website pages',
      features: ['Landing Pages', 'Sales Funnels', 'A/B Testing', 'Conversion Optimization', 'Analytics Setup']
    },
    {
      icon: Monitor,
      title: 'Website Maintenance & Updates',
      description: 'Ongoing website maintenance, updates, and technical support',
      features: ['Regular Updates', 'Security Monitoring', 'Performance Optimization', 'Backup Management', '24/7 Support']
    },
    {
      icon: TrendingUp,
      title: 'Facebook / Instagram Ads Management',
      description: 'Professional social media advertising campaigns that drive results',
      features: ['Campaign Strategy', 'Ad Creation', 'Audience Targeting', 'Performance Tracking', 'ROI Optimization']
    },
    {
      icon: Search,
      title: 'Google My Business Optimization',
      description: 'Local SEO optimization to improve your Google Business presence',
      features: ['Profile Optimization', 'Review Management', 'Local Citations', 'Maps Optimization', 'Local SEO']
    },
    {
      icon: Video,
      title: 'Video Editing / Reels / Content Creation',
      description: 'Professional video editing and content creation for social media',
      features: ['Video Editing', 'Social Media Reels', 'Motion Graphics', 'Color Grading', 'Audio Enhancement']
    },
    {
      icon: Mail,
      title: 'Email Marketing Setup',
      description: 'Professional email marketing campaigns and automation setup',
      features: ['Email Templates', 'Automation Setup', 'List Management', 'Campaign Analytics', 'A/B Testing']
    }
  ];

  const packages = [
    {
      name: 'Starter Package',
      price: 'Ksh 7,500',
      originalPrice: 'Ksh 10,000',
      features: [
        'One-page professional website',
        'Mobile responsive design',
        'Basic SEO setup',
        'Contact form integration',
        '1 revision round',
        'Social media integration'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Complete Brand Kit',
      price: 'Ksh 12,000',
      originalPrice: 'Ksh 18,000',
      features: [
        '3-page website with animations',
        'Complete brand identity',
        'Logo design & brand kit',
        'SEO optimization',
        'Google Analytics setup',
        '2 revision rounds',
        'Social media templates'
      ],
      popular: true,
      color: 'from-violet-600 to-purple-600'
    },
    {
      name: 'Monthly Social Media',
      price: 'From Ksh 4,000/month',
      originalPrice: 'Ksh 8,000/month',
      features: [
        'Daily social media posts',
        'Content creation & design',
        'Hashtag research',
        'Engagement management',
        'Monthly analytics report',
        'Story templates',
        'Growth strategy'
      ],
      popular: false,
      color: 'from-green-500 to-emerald-500'
    }
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
            Our <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Professional digital solutions designed to help your brand thrive online and dominate your market.
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
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">{service.description}</p>
              
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
              Choose Your <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Package</span>
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
                    <div className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
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

        <div className="text-center">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 hover:from-violet-700 hover:via-purple-700 hover:to-blue-700 text-white px-12 py-6 text-lg font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110"
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
