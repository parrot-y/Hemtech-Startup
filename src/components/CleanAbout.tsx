import React from 'react';
import { Target, Users, Award, Zap, CheckCircle } from 'lucide-react';

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
    <section id="about" className="modern-section bg-white">
      {/* Background Elements */}
      <div className="animated-bg">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>

      <div className="modern-container relative z-10">
        <div className="modern-grid modern-grid-2 items-center">
          
          {/* Left side - Content */}
          <div className="fade-in">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <CheckCircle className="w-4 h-4" />
                About Hemtech
              </div>
              
              <h2 className="section-title text-gray-900 mb-6">
                Crafting Digital{' '}
                <span className="gradient-text">Excellence</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-8">
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
            </div>

            {/* Features Grid */}
            <div className="modern-grid modern-grid-2">
              {features.map((feature, index) => (
                <div key={index} className="modern-card scale-hover">
                  <feature.icon className="w-8 h-8 text-green-500 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative fade-in">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Hemtech Team"
                className="w-full h-96 object-cover rounded-3xl shadow-large"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent rounded-3xl"></div>
              
              {/* Floating stats card */}
              <div className="absolute -bottom-8 -left-8 modern-card shadow-large">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="font-semibold text-gray-900">Trusted by 30+ Clients</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold gradient-text">100%</div>
                    <div className="text-xs text-gray-600">Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold gradient-text">24/7</div>
                    <div className="text-xs text-gray-600">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleanAbout;