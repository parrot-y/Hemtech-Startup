import React, { useEffect } from 'react';
import { Target, Users, Award, Zap, CheckCircle } from 'lucide-react';

const CleanAbout = () => {
  useEffect(() => {
    // Intersection Observer for lazy loading animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Target,
      title: 'Strategic Innovation',
      description: 'Data-driven strategies powered by AI and cutting-edge technology for measurable business growth.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled professionals with deep expertise in modern web technologies and AI integration.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Premium quality work with meticulous attention to detail and pixel-perfect execution.'
    },
    {
      icon: Zap,
      title: 'Rapid Delivery',
      description: 'Lightning-fast turnaround times without compromising on quality or functionality.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
    { number: '3+', label: 'Years Experience' },
    { number: '100%', label: 'Success Rate' }
  ];

  return (
    <section id="about" className="modern-section">
      {/* Background Elements */}
      <div className="animated-bg">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>

      <div className="modern-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side - Content */}
          <div className="slide-in-left">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-yellow-600/10 text-yellow-400 border border-yellow-600/30 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <CheckCircle className="w-4 h-4" />
                About HemTech
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Crafting Digital{' '}
                <span className="gradient-text">Excellence</span>
              </h2>
              
              <div className="space-y-6 text-lg leading-relaxed mb-8">
                <p className="text-gray-300">
                  HemTech is a Kenyan-born digital agency combining innovation, design & AI to help businesses grow smarter. 
                  We transform ideas into powerful digital experiences that drive real results.
                </p>

                <p className="text-gray-300">
                  From concept to launch, we work closely with schools, businesses, and startups across Kenya 
                  to deliver cutting-edge solutions that exceed expectations and accelerate growth.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="modern-card scale-hover"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <feature.icon className="w-8 h-8 text-yellow-400 mb-4" />
                  <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image and Stats */}
          <div className="slide-in-right relative">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="HemTech Team"
                className="lazy-image w-full h-96 object-cover rounded-2xl shadow-xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent rounded-2xl"></div>
              
              {/* Floating stats card */}
              <div className="absolute -bottom-8 -left-8 modern-card shadow-xl">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-yellow-400" />
                  <span className="font-semibold text-white">Trusted by 30+ Clients</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold gradient-text">100%</div>
                    <div className="text-xs text-gray-300">Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold gradient-text">24/7</div>
                    <div className="text-xs text-gray-300">Support</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleanAbout;