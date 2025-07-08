import React, { useEffect } from 'react';
import { ArrowRight, Play, Code, Smartphone, Palette, Share2, Bot, Layers } from 'lucide-react';

const PremiumHero = () => {
  useEffect(() => {
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

    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    { icon: Code, title: 'Web & App Dev', delay: '0s' },
    { icon: Smartphone, title: 'Hotel Booking', delay: '0.1s' },
    { icon: Palette, title: 'Branding', delay: '0.2s' },
    { icon: Share2, title: 'Social Media', delay: '0.3s' },
    { icon: Bot, title: 'AI Integration', delay: '0.4s' },
    { icon: Layers, title: 'Design', delay: '0.5s' },
  ];

  return (
    <section id="home" className="hero-premium">
      {/* Animated Background */}
      <div className="tech-bg">
        <div className="tech-grid"></div>
        <div className="tech-shape"></div>
        <div className="tech-shape"></div>
        <div className="tech-shape"></div>
      </div>

      <div className="container-premium">
        <div className="hero-content">
          {/* Main Heading */}
          <h1 className="hero-title fade-in">
            <span className="block">Build.</span>
            <span className="block gradient-text">Manage.</span>
            <span className="block">Grow.</span>
          </h1>

          <p className="hero-subtitle fade-in">
            HemTech is a Kenyan-born digital agency combining innovation, design & AI to help businesses grow smarter.
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons fade-in">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-premium btn-primary"
            >
              Start a Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            
            <button
              onClick={() => scrollToSection('portfolio')}
              className="btn-premium btn-secondary"
            >
              <Play className="mr-2 w-5 h-5" />
              See Our Work
            </button>
          </div>

          {/* Features Grid */}
          <div className="features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-item scale-in"
                style={{ animationDelay: feature.delay }}
              >
                <div className="feature-icon">
                  <feature.icon />
                </div>
                <h3 className="text-lg font-semibold text-light">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumHero;