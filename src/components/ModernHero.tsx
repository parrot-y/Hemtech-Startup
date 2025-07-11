import React, { useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';

const ModernHero = () => {
  useEffect(() => {
    // Create floating particles
    const createParticles = () => {
      const particlesContainer = document.querySelector('.hero-particles');
      if (!particlesContainer) return;

      // Clear existing particles
      particlesContainer.innerHTML = '';

      const particleCount = window.innerWidth < 768 ? 15 : 30;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 6}s`;
        particle.style.animationDuration = `${4 + Math.random() * 4}s`;
        particlesContainer.appendChild(particle);
      }
    };

    createParticles();

    // Intersection Observer for scroll reveal animations
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

    // Cleanup
    return () => {
      observer.disconnect();
    };
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
    <section id="home" className="hero-section">
      {/* Tech Video Background */}
      <video
        className="hero-video-background"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop"
      >
        <source
          src="https://player.vimeo.com/external/370467553.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>
      
      {/* Floating Particles */}
      <div className="hero-particles"></div>

      {/* Main Content */}
      <div className="hero-content">
        <div className="fade-in">
          <h1 className="hero-motto">
            Build. Manage. Grow.
          </h1>
          
          <p className="hero-subtitle">
            Digital solutions that drive real results
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 scale-in">
            <button
              onClick={scrollToContact}
              className="btn-primary group will-change-transform"
            >
              <span>Start Project</span>
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            
            <button
              onClick={scrollToPortfolio}
              className="btn-secondary group will-change-transform"
            >
              <Play className="mr-2 w-5 h-5 transition-transform group-hover:scale-110" />
              <span>View Work</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in">
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center opacity-70">
          <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;