import React, { useEffect } from 'react';
import { Monitor, Hotel, Palette, Share2, Smartphone, Bot, ArrowRight } from 'lucide-react';

const ModernServices = () => {
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

    const animatedElements = document.querySelectorAll('.fade-in, .scale-in');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: Monitor,
      title: 'Web Development',
      description: 'Custom websites that convert visitors into customers.',
      tiers: [
        { 
          name: 'Essential', 
          price: 'KES 25k', 
          features: ['Responsive Design', 'SEO Ready', 'Contact Forms', '5 Pages'] 
        },
        { 
          name: 'Professional', 
          price: 'KES 50k', 
          features: ['CMS Integration', 'Analytics', 'Blog Setup', '10 Pages'] 
        },
        { 
          name: 'Enterprise', 
          price: 'KES 90k+', 
          features: ['E-commerce', 'Custom Features', 'Unlimited Pages', 'Priority Support'] 
        }
      ]
    },
    {
      icon: Hotel,
      title: 'Booking Systems',
      description: 'Complete booking solutions with payment integration.',
      tiers: [
        { 
          name: 'Starter', 
          price: 'KES 15k', 
          features: ['Basic Booking', 'Calendar', 'Email Alerts', 'Reports'] 
        },
        { 
          name: 'Business', 
          price: 'KES 35k', 
          features: ['Payment Gateway', 'Multi-property', 'Customer Portal', 'SMS'] 
        },
        { 
          name: 'Premium', 
          price: 'KES 65k', 
          features: ['API Integration', 'Mobile App', 'Analytics', 'Channel Manager'] 
        }
      ]
    },
    {
      icon: Palette,
      title: 'Digital Branding',
      description: 'Brand identity that makes you unforgettable.',
      tiers: [
        { 
          name: 'Essential', 
          price: 'KES 10k', 
          features: ['Logo Design', 'Brand Colors', 'Style Guide', 'Business Cards'] 
        },
        { 
          name: 'Professional', 
          price: 'KES 25k', 
          features: ['Brand Kit', 'Templates', 'Social Media Kit', 'Strategy'] 
        },
        { 
          name: 'Premium', 
          price: 'KES 45k', 
          features: ['Animated Brand', 'Video Assets', 'Full Suite', 'Consultation'] 
        }
      ]
    }
  ];

  return (
    <section id="services" className="section section-white">
      <div className="container">
        {/* Minimal Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="section-title text-royal-blue">
            Services That <span className="text-gold">Deliver</span>
          </h2>
          <p className="section-subtitle">
            Three core services. Unlimited possibilities.
          </p>
        </div>

        {/* Services Grid - Space Efficient */}
        <div className="grid grid-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="scale-in will-change-transform"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Header */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-gold to-royal-blue rounded-full flex items-center justify-center mx-auto mb-6 transition-transform hover:scale-110 hover:rotate-6">
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-royal-blue mb-3">{service.title}</h3>
                <p className="text-text-light leading-relaxed mb-8">{service.description}</p>
              </div>
              
              {/* Pricing Tiers - Sleek Cards */}
              <div className="space-y-4">
                {service.tiers.map((tier, tierIndex) => (
                  <div key={tierIndex} className="pricing-card">
                    <div className="flex justify-between items-center mb-4">
                      <div className="pricing-tier">{tier.name}</div>
                      <div className="pricing-price text-lg font-bold">{tier.price}</div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-text-light flex items-center">
                          <div className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    {tierIndex === 1 && (
                      <button 
                        onClick={scrollToContact}
                        className="btn-primary w-full group"
                      >
                        Get Quote
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA - Minimal */}
        <div className="text-center mt-20 fade-in">
          <button
            onClick={scrollToContact}
            className="btn-primary group text-lg px-8 py-4"
          >
            Start Your Project
            <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ModernServices;