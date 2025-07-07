import React from 'react';
import { Monitor, Palette, Search, Smartphone, ArrowRight, CheckCircle } from 'lucide-react';

const CleanServices = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Web Development',
      description: 'Custom websites built with cutting-edge technologies for optimal performance and user experience.',
      features: ['Responsive Design', 'Fast Loading', 'SEO Optimized', 'Mobile First'],
      price: 'From KSh 25,000'
    },
    {
      icon: Palette,
      title: 'Digital Branding',
      description: 'Complete brand identity solutions that make your business stand out in the digital landscape.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Marketing Materials'],
      price: 'From KSh 15,000'
    },
    {
      icon: Search,
      title: 'SEO & Marketing',
      description: 'Strategic digital marketing campaigns that drive traffic, leads, and conversions.',
      features: ['SEO Optimization', 'Content Strategy', 'Social Media', 'Analytics'],
      price: 'From KSh 20,000'
    },
    {
      icon: Smartphone,
      title: 'Mobile Solutions',
      description: 'Native and cross-platform mobile applications for iOS and Android devices.',
      features: ['Native Apps', 'Cross-Platform', 'UI/UX Design', 'App Store Optimization'],
      price: 'From KSh 50,000'
    }
  ];

  return (
    <section id="services" className="modern-section bg-gray-50">
      {/* Background Elements */}
      <div className="animated-bg">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>

      <div className="modern-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4" />
            Our Services
          </div>
          
          <h2 className="section-title text-gray-900 mb-6">
            Digital Solutions That{' '}
            <span className="gradient-text">Drive Results</span>
          </h2>
          
          <p className="section-subtitle">
            From stunning websites to comprehensive digital strategies, we deliver premium solutions 
            tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="modern-grid modern-grid-4 mb-16">
          {services.map((service, index) => (
            <div key={index} className="modern-card scale-hover fade-in">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-green-50 p-4 mb-6">
                <service.icon className="w-full h-full text-green-500" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>
              
              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Price */}
              <div className="text-lg font-bold gradient-text mb-4">{service.price}</div>
              
              {/* CTA */}
              <button className="modern-button modern-button-secondary w-full">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center fade-in">
          <div className="modern-card max-w-2xl mx-auto">
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
              className="modern-button modern-button-primary text-lg px-8 py-4"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleanServices;