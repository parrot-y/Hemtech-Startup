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

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

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
    <section id="services" className="section section-light">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 bg-neon-green/10 text-neon-green border border-neon-green/30 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4" />
            Our Services
          </div>
          
          <h2 className="section-title text-dark-blue mb-6">
            Digital Solutions That{' '}
            <span style={{ color: 'var(--neon-green)' }}>Drive Results</span>
          </h2>
          
          <p className="section-subtitle text-gray-600">
            From stunning websites to AI-powered solutions, we deliver premium services 
            tailored to accelerate your business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Header */}
              <div className="mb-6">
                <div className="card-icon">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-dark-blue mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>
              </div>
              
              {/* Pricing Tiers */}
              <div className="space-y-4">
                {service.tiers.map((tier, tierIndex) => (
                  <div key={tierIndex} className="border border-gray-200 rounded-lg p-4 hover:border-neon-green transition-colors">
                    <div className="flex justify-between items-center mb-3">
                      <div className="font-semibold text-neon-green">{tier.name}</div>
                      <div className="font-bold text-dark-blue">{tier.price}</div>
                    </div>
                    <ul className="space-y-1">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                          <CheckCircle className="w-3 h-3 text-neon-green mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              {/* CTA */}
              <button 
                onClick={scrollToContact}
                className="btn-neon w-full mt-6 group"
              >
                Get Quote
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 fade-in">
          <div className="card max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-dark-blue mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-600 mb-6">
              Let's discuss your project and create something amazing together.
            </p>
            <button
              onClick={scrollToContact}
              className="btn-primary group"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernServices;