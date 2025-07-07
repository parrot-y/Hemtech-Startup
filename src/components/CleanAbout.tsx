import React from 'react';
import { Target, Users, Award, Zap, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const CleanAbout = () => {
  const features = [
    {
      icon: Target,
      title: 'Strategic Approach',
      description: 'Data-driven strategies that deliver measurable results for your business growth.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled professionals with years of experience in cutting-edge technologies.'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Premium quality work with attention to detail and pixel-perfect execution.'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising on quality or functionality.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-green-100/50 to-blue-100/50 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-blue-100/50 to-purple-100/50 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-medium">
                  <CheckCircle className="w-4 h-4" />
                  About Hemtech
                </div>
                
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Crafting Digital{' '}
                  <span className="text-green-500">Excellence</span>
                </h2>
                
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    At Hemtech, we're passionate about transforming businesses through innovative digital solutions. 
                    Our team of expert designers and developers creates stunning, high-performance websites and 
                    digital experiences that drive growth and success.
                  </p>

                  <p>
                    From concept to launch, we work closely with schools, businesses, and startups across Kenya 
                    to deliver cutting-edge solutions that exceed expectations and deliver real results.
                  </p>
                </div>
              </motion.div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 p-6 rounded-2xl hover:bg-green-50 transition-all duration-300 group"
                  >
                    <feature.icon className="w-8 h-8 text-green-500 mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <motion.img
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1 }}
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Hemtech Team"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent rounded-3xl"></div>
              
              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border"
              >
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="font-semibold text-gray-900">Trusted by 30+ Clients</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-green-500">100%</div>
                    <div className="text-xs text-gray-600">Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-500">24/7</div>
                    <div className="text-xs text-gray-600">Support</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CleanAbout;