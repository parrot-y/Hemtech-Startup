
import React from 'react';
import { Monitor, Smartphone, Palette, TrendingUp, Search, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Web Design',
      description: 'Business websites, portfolios, landing pages, and e-commerce setup',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile-First']
    },
    {
      icon: Smartphone,
      title: 'Social Media Management',
      description: 'Content creation, page setup & optimization, monthly growth strategies',
      features: ['Content Creation', 'Page Optimization', 'Growth Strategy', 'Analytics']
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Logos, posters & flyers, brand kits, and Canva templates',
      features: ['Logo Design', 'Brand Identity', 'Print Design', 'Digital Assets']
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Improve your online visibility and rank higher on Google',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Local SEO']
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies and campaign management',
      features: ['Ad Campaigns', 'Email Marketing', 'Content Strategy', 'Analytics']
    },
    {
      icon: Video,
      title: 'Content Creation',
      description: 'Video editing, content writing, and multimedia production',
      features: ['Video Editing', 'Content Writing', 'Photography', 'Multimedia']
    }
  ];

  const packages = [
    {
      name: 'Starter',
      price: 'Ksh 7,500',
      features: [
        '1-page website',
        '3 social media post designs',
        'Basic brand color + font guide',
        'Mobile responsive',
        '1 revision round'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: 'Ksh 12,000',
      features: [
        '3-page website',
        '10 social media designs',
        'Complete brand kit',
        'SEO optimization',
        '2 revision rounds',
        'Contact form integration'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: 'Ksh 22,000',
      features: [
        '5-page website',
        'Unlimited social media designs',
        'Complete brand identity',
        'Advanced SEO',
        'E-commerce functionality',
        'Strategy & feedback call',
        'Unlimited revisions'
      ],
      popular: false
    }
  ];

  const addOns = [
    { service: 'Logo design', price: 'Ksh 3,000+' },
    { service: 'Extra web page', price: 'Ksh 1,000' },
    { service: 'Video editing', price: 'Ksh 2,000' },
    { service: 'Social media management', price: 'From Ksh 4,000' },
    { service: 'Poster/Flyer', price: 'Ksh 1,000' },
    { service: 'Strategy call', price: 'Ksh 1,500' }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions to help your business thrive in Kenya's digital landscape
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="bg-gradient-to-r from-purple-100 to-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:from-purple-200 group-hover:to-blue-200 transition-all duration-300">
                <service.icon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Pricing Packages */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Service <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Packages</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                  pkg.popular ? 'ring-2 ring-purple-600 scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h4>
                  <div className="text-4xl font-bold text-purple-600 mb-4">{pkg.price}</div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button
                  onClick={scrollToContact}
                  className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white'
                      : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
                  }`}
                  variant={pkg.popular ? 'default' : 'outline'}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Add-ons */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Add-On Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <span className="text-gray-700 font-medium">{addon.service}</span>
                <span className="text-purple-600 font-bold">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
