import React, { useEffect, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';

const ModernHero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

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

    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-up, .scale-in');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-fullscreen">
      {/* Video Background */}
      <div className="hero-video-container">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          poster="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop"
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        
        {/* Fallback Image for Mobile */}
        <div className="hero-fallback-image">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop" 
            alt="Digital Technology Background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Animated Tech Elements */}
      <div className="hero-tech-elements">
        <div className="floating-particles">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}></div>
          ))}
        </div>
        
        <div className="tech-grid-overlay"></div>
        
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-container">
          <div className="text-center">
            {/* Main Motto */}
            <div className="mb-8 md:mb-12 fade-in">
              <h1 className="hero-main-title">
                Build. Manage. Grow.
              </h1>

              <p className="hero-main-subtitle">
                Smarter digital solutions for forward-thinking businesses
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="hero-cta-container slide-in-up">
              <button
                onClick={scrollToContact}
                className="hero-btn hero-btn-primary"
              >
                <span>Start a Project</span>
                <ArrowRight className="btn-icon" />
              </button>
              
              <button
                onClick={scrollToPortfolio}
                className="hero-btn hero-btn-secondary"
              >
                <Play className="btn-icon-left" />
                <span>See Our Work</span>
              </button>
            </div>

            {/* Stats */}
            <div className="hero-stats scale-in">
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator fade-in">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default ModernHero;