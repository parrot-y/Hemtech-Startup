import React from 'react';
import { Target, Users, Award, Zap } from 'lucide-react';

const EliteAbout = () => {
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
    <section id="about" className="section-elite bg-gray-50">
      <div className="container-elite">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div>
            <div className="mb-8">
              <div className="mb-6">
                <span className="text-sm font-medium text-gray-600 tracking-wide uppercase">
                  About Hemtech
                </span>
              </div>
              
              <h2 className="mb-6 font-bold text-gray-900">
                We are helping brands in the digital age.
              </h2>
              
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8">
                Don't Build a Website, Build Growth
              </h3>
              
              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  At Hemtech, we're passionate about transforming businesses through innovative digital solutions. 
                  Our team of expert designers and developers creates stunning, high-performance websites and 
                  digital experiences that drive growth and success.
                </p>

                <p className="text-lg leading-relaxed">
                  From concept to launch, we work closely with schools, businesses, and startups across Kenya 
                  to deliver cutting-edge solutions that exceed expectations and deliver real results.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="card-elite">
                  <feature.icon className="w-8 h-8 text-green-500 mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Hemtech Team"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-2xl"></div>
              
              {/* Floating stats card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="w-6 h-6 text-green-500" />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EliteAbout;