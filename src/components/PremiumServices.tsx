import React, { useEffect } from 'react';
import { Monitor, Hotel, Palette, Share2, Smartphone, Bot, ArrowRight, CheckCircle } from 'lucide-react';

const PremiumServices = () => {
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

  const services = [
    {
      icon: Monitor,
      title: 'Web Development',
      description: 'Custom websites built with cutting-edge technologies for optimal performance.',
      tiers: [
        { name: 'Basic', price: 'KES 25k', features: ['Responsive Design', 'Basic SEO', 'Contact Forms'] },
        { name: 'Pro', price: 'KES 50k', features: ['CMS Integration', 'Advanced SEO', 'Analytics'] },
        { name: 'Enterprise', price: 'KES 90k+', features: ['E-commerce', 'Chatbot', 'Custom Features'] }
      ]
    },
    {
      icon: Hotel,
      title: 'Hotel Booking',
      description: 'Complete booking systems with payment integration and management tools.',
      tiers: [
        { name: 'Starter', price: 'KES 15k', features: ['Basic Booking', 'Calendar', 'Email Alerts'] },
        { name: 'Business', price: 'KES 35k', features: ['Payment Gateway', 'Reports', 'Multi-property'] },
        { name: 'Premium', price: 'KES 65k', features: ['API Integration', 'Mobile App', 'Analytics'] }
      ]
    },
    {
      icon: Palette,
      title: 'Digital Branding',
      description: 'Complete brand identity solutions that make your business stand out.',
      tiers: [
        { name: 'Essential', price: 'KES 10k', features: ['Logo Design', 'Brand Colors', 'Style Guide'] },
        { name: 'Professional', price: 'KES 25k', features: ['Brand Kit', 'Templates', 'Guidelines'] },
        { name: 'Premium', price: 'KES 45k', features: ['Animated Brand', 'Video Assets', 'Full Suite'] }
      ]
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Strategic social media campaigns that drive engagement and growth.',
      tiers: [
        { name: 'Basic', price: 'KES 8k/mo', features: ['Content Creation', '3 Platforms', 'Scheduling'] },
        { name: 'Growth', price: 'KES 15k/mo', features: ['Analytics', '5 Platforms', 'Engagement'] },
        { name: 'Premium', price: 'KES 25k/mo', features: ['Paid Ads', 'Strategy', 'Full Management'] }
      ]
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      tiers: [
        { name: 'Simple', price: 'KES 60k', features: ['Basic App', 'iOS/Android', 'Core Features'] },
        { name: 'Advanced', price: 'KES 120k', features: ['Complex Logic', 'API Integration', 'Push Notifications'] },
        { name: 'Enterprise', price: 'KES 200k+', features: ['Custom Backend', 'Advanced Security', 'Scalability'] }
      ]
    },
    {
      icon: Bot,
      title: 'AI Integration',
      description: 'Intelligent automation and AI-powered solutions for modern businesses.',
      tiers: [
        { name: 'Starter', price: 'KES 35k', features: ['Basic Chatbot', 'FAQ Automation', 'Simple AI'] },
        { name: 'Professional', price: 'KES 70k', features: ['Advanced AI', 'Data Analysis', 'Automation'] },
        { name: 'Enterprise', price: 'KES 150k+', features: ['AI Suite', 'Machine Learning', 'Custom Models'] }
      ]
    }
  ];

  return (
    <section id="services" className="section-premium">
      {/* Background Elements */}
      <div className="tech-bg">
        <div className="tech-shape"></div>
        <div className="tech-shape"></div>
      </div>

      <div className="container-premium relative z-10">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 bg-gold/10 text-gold border border-gold/30 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4" />
            Our Services
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Digital Solutions That{' '}
            <span className="gradient-text">Drive Results</span>
          </h2>
          
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            From stunning websites to AI-powered solutions, we deliver premium services 
            tailored to accelerate your business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-service scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Header */}
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-gold p-4 mb-6">
                  <service.icon className="w-full h-full text-primary-blue" />
                </div>
                
                <h3 className="text-xl font-bold text-light mb-3">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">{service.description}</p>
                
                {/* Pricing Tiers */}
                <div className="pricing-tiers">
                  {service.tiers.map((tier, tierIndex) => (
                    <div key={tierIndex} className="tier-card">
                      <div className="tier-price">{tier.price}</div>
                      <div className="text-sm font-semibold text-light mb-3">{tier.name}</div>
                      <ul className="space-y-1">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-xs text-muted">
                            <CheckCircle className="w-3 h-3 text-gold mr-1 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                
                {/* CTA */}
                <button className="btn-premium btn-ghost w-full mt-6">
                  Get Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 fade-in">
          <div className="card-premium max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-light mb-4">Ready to Transform Your Business?</h3>
            <p className="text-muted mb-6">
              Let's discuss your project and create something amazing together.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-premium btn-primary text-lg px-8 py-4"
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

export default PremiumServices;