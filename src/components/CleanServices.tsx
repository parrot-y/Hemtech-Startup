import React from 'react';
import { Monitor, Palette, Search, Smartphone, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-40 left-20 w-72 h-72 bg-gradient-to-r from-green-200/30 to-blue-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            y: [0, -40, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4" />
            Our Services
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Digital Solutions That{' '}
            <span className="text-green-500">Drive Results</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From stunning websites to comprehensive digital strategies, we deliver premium solutions 
            tailored to your business needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-white p-8 rounded-3xl h-full hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-green-200">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-green-50 p-4 mb-6 group-hover:bg-green-100 transition-colors">
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
                <div className="text-lg font-bold text-green-500 mb-4">{service.price}</div>
                
                {/* CTA */}
                <button className="w-full bg-gray-50 hover:bg-green-50 text-gray-700 hover:text-green-600 py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white p-8 rounded-3xl max-w-2xl mx-auto border border-gray-100">
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
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="ml-2 inline w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CleanServices;