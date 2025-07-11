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
      description: 'Data-driven strategies powered by cutting-edge technology for measurable business growth.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled professionals with deep expertise in modern web technologies and digital solutions.'
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
    <section id="about" className="section section-soft">
      <div className="container">
        <div className="grid grid-2 items-center gap-8">
          
          {/* Left side - Content */}
          <div className="slide-in-left">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-neon-green/10 text-neon-green border border-neon-green/30 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <CheckCircle className="w-4 h-4" />
                About HemTech
              </div>
              
              <h2 className="section-title text-dark-blue mb-6">
                Crafting Digital{' '}
                <span style={{ color: 'var(--neon-green)' }}>Excellence</span>
              </h2>
              
              <div className="space-y-6 text-lg leading-relaxed mb-8">
                <p className="text-gray-700">
                  HemTech is a Kenyan-born digital agency combining innovation, design & technology to help businesses grow smarter. 
                  We transform ideas into powerful digital experiences that drive real results.
                </p>

                <p className="text-gray-700">
                  From concept to launch, we work closely with schools, businesses, and startups across Kenya 
                  to deliver cutting-edge solutions that exceed expectations and accelerate growth.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="card"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <div className="card-icon">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-dark-blue mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
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
                className="w-full h-80 object-cover rounded-xl shadow-lg"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent rounded-xl"></div>
              
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 card shadow-xl bg-white">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-neon-green" />
                  <span className="font-semibold text-dark-blue">Trusted by 30+ Clients</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-neon-green">100%</div>
                    <div className="text-xs text-gray-600">Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-neon-green">24/7</div>
                    <div className="text-xs text-gray-600">Support</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Images Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=200&fit=crop"
                alt="Modern Office Workspace"
                className="w-full h-32 object-cover rounded-xl shadow-lg"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop"
                alt="Digital Innovation"
                className="w-full h-32 object-cover rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>

            {/* Animated Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 stats-section">
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-green mb-2">{counters.projects}+</div>
                <div className="text-sm text-gray-600 font-medium">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-green mb-2">{counters.clients}+</div>
                <div className="text-sm text-gray-600 font-medium">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-green mb-2">{counters.years}+</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-green mb-2">{counters.satisfaction}%</div>
                <div className="text-sm text-gray-600 font-medium">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleanAbout;