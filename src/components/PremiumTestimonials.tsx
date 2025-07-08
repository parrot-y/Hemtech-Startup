import React, { useEffect, useState } from 'react';
import { Star, Quote, ArrowLeft, ArrowRight, Users } from 'lucide-react';

const PremiumTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

    const animatedElements = document.querySelectorAll('.fade-in, .scale-in');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Kenya',
      role: 'CEO',
      content: 'HemTech delivered an exceptional website that perfectly captures our brand. The AI integration has revolutionized our customer service.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Michael Ochieng',
      company: 'Nairobi Logistics',
      role: 'Operations Manager',
      content: 'The team at HemTech transformed our digital presence completely. Our new platform has increased efficiency by 300%.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Grace Wanjiku',
      company: 'Sunrise Academy',
      role: 'Principal',
      content: 'Working with HemTech was a pleasure. They created a beautiful, functional website that parents and students love.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ];

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

  const stats = [
    { number: '50+', label: 'Happy Clients' },
    { number: '100%', label: 'Satisfaction Rate' },
    { number: '3+', label: 'Years Experience' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <section className="section-premium">
      {/* Background Elements */}
      <div className="tech-bg">
        <div className="tech-shape"></div>
        <div className="tech-shape"></div>
      </div>

      <div className="container-premium relative z-10">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 bg-gold/10 text-gold border border-gold/30 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            Client Testimonials
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with HemTech.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="card-premium shadow-xl fade-in">
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <Quote className="w-16 h-16 text-gold opacity-20" />
            </div>
            
            {/* Rating */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-gold fill-current" />
              ))}
            </div>
            
            {/* Content */}
            <blockquote className="text-xl md:text-2xl text-light text-center mb-8 leading-relaxed italic">
              "{testimonials[currentIndex].content}"
            </blockquote>
            
            {/* Author */}
            <div className="flex items-center justify-center">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full mr-4 border-4 border-gold/30 shadow-lg"
              />
              <div className="text-center">
                <div className="font-bold text-light text-lg">{testimonials[currentIndex].name}</div>
                <div className="text-muted">{testimonials[currentIndex].role}</div>
                <div className="text-gold font-medium">{testimonials[currentIndex].company}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="btn-premium btn-ghost p-3"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gold'
                      : 'bg-gold/30'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="btn-premium btn-ghost p-3"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 fade-in">
          {stats.map((stat, index) => (
            <div key={index} className="text-center scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-muted font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumTestimonials;