import React, { useState, useEffect } from 'react';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';

const CleanTestimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Kenya',
      role: 'CEO',
      content: 'Hemtech delivered an exceptional website that perfectly captures our brand. The attention to detail and professional approach exceeded our expectations.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Michael Ochieng',
      company: 'Nairobi Logistics',
      role: 'Operations Manager',
      content: 'The team at Hemtech transformed our digital presence completely. Our new website has increased our leads by 300% in just three months.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Grace Wanjiku',
      company: 'Sunrise Academy',
      role: 'Principal',
      content: 'Working with Hemtech was a pleasure. They created a beautiful, functional website for our school that parents and students love.',
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
    const interval = setInterval(nextTestimonial, 5000);
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
    <section id="testimonials" className="section section-dark">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 bg-neon-green/20 text-neon-green border border-neon-green/30 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Client Testimonials
          </div>
          
          <h2 className="section-title text-white mb-6">
            What Our <span style={{ color: 'var(--neon-green)' }}>Clients Say</span>
          </h2>
          
          <p className="section-subtitle text-gray-300">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with Hemtech.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="testimonials-carousel fade-in">
          <div className="testimonial-slide">
            {/* Quote Icon */}
            <Quote className="w-16 h-16 text-neon-green/30 mx-auto mb-6" />
            
            {/* Rating */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            
            {/* Content */}
            <p className="testimonial-text">
              "{testimonials[currentIndex].content}"
            </p>
            
            {/* Author */}
            <div className="flex items-center justify-center">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full mr-4 border-4 border-neon-green/30"
                loading="lazy"
              />
              <div className="text-center">
                <div className="testimonial-author">{testimonials[currentIndex].name}</div>
                <div className="text-gray-400">{testimonials[currentIndex].role}</div>
                <div className="text-electric-blue font-medium">{testimonials[currentIndex].company}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="carousel-controls">
            <button onClick={prevTestimonial} className="carousel-btn">
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
                      ? 'bg-neon-green'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
            
            <button onClick={nextTestimonial} className="carousel-btn">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-4 mt-16 pt-16 border-t border-gray-600 fade-in">
          <div className="text-center">
            <div className="text-4xl font-bold text-neon-green mb-2">50+</div>
            <div className="text-gray-400 font-medium">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-neon-green mb-2">100%</div>
            <div className="text-gray-400 font-medium">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-neon-green mb-2">3+</div>
            <div className="text-gray-400 font-medium">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-neon-green mb-2">24/7</div>
            <div className="text-gray-400 font-medium">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleanTestimonials;