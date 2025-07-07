import React from 'react';
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

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  React.useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="modern-section bg-white">
      {/* Background Elements */}
      <div className="animated-bg">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>

      <div className="modern-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Client Testimonials
          </div>
          
          <h2 className="section-title text-gray-900 mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          
          <p className="section-subtitle">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with Hemtech.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="modern-card shadow-large fade-in">
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <Quote className="w-16 h-16 text-green-500 opacity-20" />
            </div>
            
            {/* Rating */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
              ))}
            </div>
            
            {/* Content */}
            <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed italic">
              "{testimonials[currentIndex].content}"
            </blockquote>
            
            {/* Author */}
            <div className="flex items-center justify-center">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full mr-4 border-4 border-white shadow-medium"
              />
              <div className="text-center">
                <div className="font-bold text-gray-900 text-lg">{testimonials[currentIndex].name}</div>
                <div className="text-gray-600">{testimonials[currentIndex].role}</div>
                <div className="text-green-500 font-medium">{testimonials[currentIndex].company}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="modern-button modern-button-secondary p-3"
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
                      ? 'bg-green-500'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="modern-button modern-button-secondary p-3"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="modern-grid modern-grid-4 mt-16 pt-16 border-t border-gray-200 fade-in">
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">50+</div>
            <div className="text-gray-600 font-medium">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">100%</div>
            <div className="text-gray-600 font-medium">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">3+</div>
            <div className="text-gray-600 font-medium">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-gray-600 font-medium">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleanTestimonials;