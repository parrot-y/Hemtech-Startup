import React, { useEffect, useState } from 'react';
import { Target, Users, Award, Zap } from 'lucide-react';

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

    const duration = 2000;
    const steps = 60;
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
        setCounters(targets);
      }
    }, stepDuration);
  };

  const features = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Every pixel, every line of code crafted with purpose.'
    },
    {
      icon: Users,
      title: 'Impact',
      description: 'Real results that transform businesses and drive growth.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Award-winning design meets cutting-edge technology.'
    },
    {
      icon: Zap,
      title: 'Speed',
      description: 'Lightning-fast delivery without compromising quality.'
    }
  ];

  return (
    <section id="about" className="section section-off-white">
      <div className="container">
        {/* Minimal Hero Section */}
        <div className="about-hero fade-in mb-16">
          <h2 className="about-tagline">
            Digital Precision. Real Impact.
          </h2>
          
          <p className="about-description">
            Design. Tech. Strategy — crafted to elevate schools, startups, and smart businesses.
          </p>
          
          <div className="about-cta">
            Let's build what's next.
          </div>
        </div>

        {/* Features Grid - Minimal */}
        <div className="grid grid-4 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card scale-in will-change-transform"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-royal-blue rounded-full flex items-center justify-center mx-auto mb-4 transition-transform hover:scale-110">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-royal-blue mb-2">{feature.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Animated Stats - Clean */}
        <div className="grid grid-4 stats-section">
          <div className="text-center">
            <div className="text-4xl font-bold text-gold mb-2">{counters.projects}+</div>
            <div className="text-sm text-text-light font-medium uppercase tracking-wide">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gold mb-2">{counters.clients}+</div>
            <div className="text-sm text-text-light font-medium uppercase tracking-wide">Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gold mb-2">{counters.years}+</div>
            <div className="text-sm text-text-light font-medium uppercase tracking-wide">Years</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gold mb-2">{counters.satisfaction}%</div>
            <div className="text-sm text-text-light font-medium uppercase tracking-wide">Success</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleanAbout;