import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const ModernHero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="modern-hero">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="tech-grid"></div>
      </div>

      <div className="modern-container relative z-10">
        <div className="text-center">
          {/* Main Motto */}
          <div className="mb-8">
            <h1 className="hero-motto text-gray-900 leading-tight mb-6">
              Build. Manage. Grow.
            </h1>

            <p className="hero-subtitle text-gray-600 mb-12 max-w-2xl mx-auto">
              Smarter digital solutions for forward-thinking businesses
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={scrollToContact}
              className="modern-button modern-button-primary text-lg px-8 py-4"
            >
              Start a Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            
            <button
              onClick={scrollToPortfolio}
              className="modern-button modern-button-secondary text-lg px-8 py-4"
            >
              <Play className="mr-2 w-5 h-5" />
              See Our Work
            </button>
          </div>

          {/* Stats */}
          <div className="modern-grid modern-grid-3 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">50+</div>
              <div className="text-sm text-gray-600 font-medium">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">100%</div>
              <div className="text-sm text-gray-600 font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-sm text-gray-600 font-medium">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;