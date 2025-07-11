import React, { useState, useEffect } from 'react';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';

const CleanTestimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Kenya',
      role: 'CEO',
      content: 'Hemtech delivered exceptional results. Our website perfectly captures our brand and has increased leads by 300%.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Michael Ochieng',
      company: 'Nairobi Logistics',
      role: 'Operations Manager',
      content: 'Professional, fast, and results-driven. The team transformed our digital presence completely.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Grace Wanjiku',
      company: 'Sunrise Academy',
      role: 'Principal',
      content: 'Beautiful, functional website that parents and students love. Exceeded all our expectations.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
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

    const animatedElements = document.querySelectorAll('.fade-in');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" className="section section-royal">
      <div className="container">
        {/* Minimal Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="section-title text-white">
            Client <span className="text-gold">Love</span>
          </h2>
          <p className="section-subtitle text-gray-300">
            Real feedback from real clients.
          </p>
        </div>

        {/* Testimonial Carousel - Sleek */}
        <div className="max-w-4xl mx-auto fade-in">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="text-center p-12 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-gold/50 mx-auto mb-8" />
              
              {/* Rating */}
              <div className="flex justify-center mb-8">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-current" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-xl text-white mb-8 leading-relaxed font-light">
                "{testimonials[currentIndex].content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center justify-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full mr-4 border-2 border-gold/30 lazy-load"
                  loading="lazy"
                />
                <div className="text-left">
                  <div className="text-gold font-semibold text-lg">{testimonials[currentIndex].name}</div>
                  <div className="text-gray-300 text-sm">{testimonials[currentIndex].role}</div>
                  <div className="text-white font-medium text-sm">{testimonials[currentIndex].company}</div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 gap-6">
              <button 
                onClick={prevTestimonial} 
                className="w-12 h-12 bg-gold/20 hover:bg-gold text-white rounded-full flex items-center justify-center transition-all hover:scale-110"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-gold scale-125'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial} 
                className="w-12 h-12 bg-gold/20 hover:bg-gold text-white rounded-full flex items-center justify-center transition-all hover:scale-110"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats - Minimal */}
        <div className="grid grid-4 mt-20 pt-16 border-t border-white/10 fade-in">
          <div className="text-center">
            <div className="text-3xl font-bold text-gold mb-2">50+</div>
            <div className="text-gray-300 text-sm uppercase tracking-wide">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold mb-2">100%</div>
            <div className="text-gray-300 text-sm uppercase tracking-wide">Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold mb-2">3+</div>
            <div className="text-gray-300 text-sm uppercase tracking-wide">Years</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold mb-2">24/7</div>
            <div className="text-gray-300 text-sm uppercase tracking-wide">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleanTestimonials;