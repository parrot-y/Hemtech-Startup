import React, { useEffect } from 'react';
import { Monitor, Hotel, Palette, Share2, Smartphone, Bot, ArrowRight, CheckCircle } from 'lucide-react';

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

  const services = [
    {
      icon: Monitor,
      title: 'Web Development',
      description: 'Custom websites built with cutting-edge technologies for optimal performance.',
      tiers: [
        { 
          name: 'Basic', 
          price: 'KES 25k', 
          features: ['Responsive Design', 'Basic SEO', 'Contact Forms', '5 Pages', 'Mobile Optimized'] 
        },
        { 
          name: 'Standard', 
          price: 'KES 50k', 
          features: ['CMS Integration', 'Advanced SEO', 'Analytics', '10 Pages', 'Blog Setup'] 
        },
        { 
          name: 'Premium', 
          price: 'KES 90k+', 
          features: ['E-commerce', 'Chatbot', 'Custom Features', 'Unlimited Pages', 'Priority Support'] 
        }
      ]
    },
    {
      icon: Hotel,
      title: 'Hotel Booking Systems',
      description: 'Complete booking systems with payment integration and management tools.',
      tiers: [
        { 
          name: 'Starter', 
          price: 'KES 15k', 
          features: ['Basic Booking', 'Calendar', 'Email Alerts', 'Room Management', 'Reports'] 
        },
        { 
          name: 'Business', 
          price: 'KES 35k', 
          features: ['Payment Gateway', 'Multi-property', 'Advanced Reports', 'Customer Portal', 'SMS Alerts'] 
        },
        { 
          name: 'Premium', 
          price: 'KES 65k', 
          features: ['API Integration', 'Mobile App', 'Analytics', 'Channel Manager', 'Custom Features'] 
        }
      ]
    },
    {
      icon: Palette,
      title: 'Digital Branding',
      description: 'Complete brand identity solutions that make your business stand out.',
      tiers: [
        { 
          name: 'Essential', 
          price: 'KES 10k', 
          features: ['Logo Design', 'Brand Colors', 'Style Guide', 'Business Cards', 'Letterhead'] 
        },
        { 
          name: 'Professional', 
          price: 'KES 25k', 
          features: ['Brand Kit', 'Templates', 'Guidelines', 'Social Media Kit', 'Brand Strategy'] 
        },
        { 
          name: 'Premium', 
          price: 'KES 45k', 
          features: ['Animated Brand', 'Video Assets', 'Full Suite', 'Brand Consultation', 'Implementation'] 
        }
      ]
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Strategic social media campaigns that drive engagement and growth.',
      tiers: [
        { 
          name: 'Basic', 
          price: 'KES 8k/mo', 
          features: ['Content Creation', '3 Platforms', 'Scheduling', '10 Posts/month', 'Basic Analytics'] 
        },
        { 
          name: 'Growth', 
          price: 'KES 15k/mo', 
          features: ['5 Platforms', 'Engagement', '20 Posts/month', 'Stories & Reels', 'Monthly Reports'] 
        },
        { 
          name: 'Premium', 
          price: 'KES 25k/mo', 
          features: ['Paid Ads', 'Strategy', 'Full Management', 'Unlimited Posts', 'Dedicated Manager'] 
        }
      ]
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      tiers: [
        { 
          name: 'Simple', 
          price: 'KES 60k', 
          features: ['Basic App', 'iOS/Android', 'Core Features', 'Basic UI', 'App Store Upload'] 
        },
        { 
          name: 'Advanced', 
          price: 'KES 120k', 
          features: ['Complex Logic', 'API Integration', 'Push Notifications', 'Advanced UI', 'Analytics'] 
        },
        { 
          name: 'Enterprise', 
          price: 'KES 200k+', 
          features: ['Custom Backend', 'Advanced Security', 'Scalability', 'Admin Panel', 'Maintenance'] 
        }
      ]
    },
    {
      icon: Bot,
      title: 'AI Integration',
      description: 'Intelligent automation and AI-powered solutions for modern businesses.',
      tiers: [
        { 
          name: 'Starter', 
          price: 'KES 35k', 
          features: ['Basic Chatbot', 'FAQ Automation', 'Simple AI', 'Email Integration', 'Basic Training'] 
        },
        { 
          name: 'Professional', 
          price: 'KES 70k', 
          features: ['Advanced AI', 'Data Analysis', 'Automation', 'CRM Integration', 'Custom Training'] 
        },
        { 
          name: 'Enterprise', 
          price: 'KES 150k+', 
          features: ['AI Suite', 'Machine Learning', 'Custom Models', 'API Access', 'Ongoing Support'] 
        }
      ]
    }
  ];

  return (
    <section id="services" className="modern-section">
      {/* Background Elements */}
      <div className="animated-bg">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>

      <div className="modern-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 bg-yellow-600/10 text-yellow-400 border border-yellow-600/30 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4" />
            Our Services
          </div>
          
          <h2 className="section-title mb-6">
            Digital Solutions That{' '}
            <span className="gradient-text">Drive Results</span>
          </h2>
          
          <p className="section-subtitle">
            From stunning websites to AI-powered solutions, we deliver premium services 
            tailored to accelerate your business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="modern-card scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Header */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-600/20 to-yellow-500/20 p-4 mb-4 border border-yellow-600/30">
                  <service.icon className="w-full h-full text-yellow-400" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">{service.description}</p>
              </div>
              
              {/* Pricing Tiers */}
              <div className="space-y-3">
                {service.tiers.map((tier, tierIndex) => (
                  <div key={tierIndex} className="pricing-card">
                    <div className="flex justify-between items-center mb-3">
                      <div className="tier-name">{tier.name}</div>
                      <div className="tier-price">{tier.price}</div>
                    </div>
                    <ul className="tier-features">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              {/* CTA */}
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="modern-button modern-button-secondary w-full mt-6"
              >
                Get Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 fade-in">
          <div className="modern-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-300 mb-6">
              Let's discuss your project and create something amazing together.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="modern-button modern-button-primary text-lg px-8 py-4"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernServices;