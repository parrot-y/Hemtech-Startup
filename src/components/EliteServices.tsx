import React from 'react';
import { Monitor, Palette, Search, Smartphone, ArrowRight } from 'lucide-react';

const EliteServices = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Custom Web Design & Development',
      description: 'Enterprise-grade custom solutions with brand-aligned visual identity and performance-optimized architecture.',
      features: ['Responsive Design', 'Fast Loading', 'SEO Optimized', 'Mobile First'],
      price: 'From KSh 25,000'
    },
    {
      icon: Palette,
      title: 'AI Integration Services',
      description: 'Intelligent chatbot implementation, automated customer service systems, and AI-powered personalization engines.',
      features: ['Smart Chatbots', 'Automation', 'Personalization', 'Analytics'],
      price: 'From KSh 50,000'
    },
    {
      icon: Search,
      title: 'SEO & Digital Marketing',
      description: 'Strategic digital marketing campaigns that drive traffic, leads, and conversions with data-driven approaches.',
      features: ['SEO Optimization', 'Content Strategy', 'Social Media', 'Analytics'],
      price: 'From KSh 20,000'
    },
    {
      icon: Smartphone,
      title: 'Mobile Solutions',
      description: 'Native and cross-platform mobile applications for iOS and Android devices with exceptional user experience.',
      features: ['Native Apps', 'Cross-Platform', 'UI/UX Design', 'App Store Optimization'],
      price: 'From KSh 75,000'
    }
  ];

  return (
    <section id="services" className="section-elite bg-white">
      <div className="container-elite">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-sm font-medium text-gray-600 tracking-wide uppercase">
              Our Services
            </span>
          </div>
          
          <h2 className="mb-6 font-bold text-gray-900">
            The Power of Great Website<br />
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Web Design Services
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From stunning websites to comprehensive digital strategies, we deliver premium solutions 
            tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="card-elite group">
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-600 to-green-500 p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-full h-full text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>
              
              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Price */}
              <div className="text-lg font-bold text-green-500 mb-4">{service.price}</div>
              
              {/* CTA */}
              <button className="btn-elite btn-secondary-elite w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-green-500 group-hover:text-white group-hover:border-transparent transition-all duration-300">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gray-50 p-8 rounded-2xl max-w-2xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-600 mb-6">
              Let's discuss your project and create something amazing together.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-elite btn-primary-elite"
            >
              Start Your Project
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EliteServices;