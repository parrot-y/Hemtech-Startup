import React, { useEffect, useState } from 'react';
import { Target, Users, Award, Zap, CheckCircle } from 'lucide-react';

const CleanAbout = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    satisfaction: 0
  });

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
          
          // Start counting animation when stats section comes into view
          if (entry.target.classList.contains('stats-section')) {
            startCounting();
          }
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .stats-section');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const startCounting = () => {
    const targets = {
      projects: 50,
      clients: 30,
      years: 3,
      satisfaction: 100
    };

    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        projects: Math.floor(targets.projects * progress),
        clients: Math.floor(targets.clients * progress),
        years: Math.floor(targets.years * progress),
        satisfaction: Math.floor(targets.satisfaction * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targets); // Ensure final values are exact
      }
    }, stepDuration);
  };

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

          {/* Right side - Images and Stats */}
          <div className="slide-in-right relative">
            {/* Main Team Image */}
            <div className="relative mb-8">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="HemTech Professional Team"
                className="lazy-image w-full h-80 object-cover rounded-2xl shadow-xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent rounded-2xl"></div>
              
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 modern-card shadow-xl bg-white/10 backdrop-blur-lg">
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

            {/* Secondary Images Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=200&fit=crop"
                alt="Modern Office Workspace"
                className="lazy-image w-full h-32 object-cover rounded-xl shadow-lg"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop"
                alt="Digital Innovation"
                className="lazy-image w-full h-32 object-cover rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>

            {/* Animated Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 stats-section">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">{counters.projects}+</div>
                <div className="text-sm text-gray-300 font-medium">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">{counters.clients}+</div>
                <div className="text-sm text-gray-300 font-medium">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">{counters.years}+</div>
                <div className="text-sm text-gray-300 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">{counters.satisfaction}%</div>
                <div className="text-sm text-gray-300 font-medium">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleanAbout;