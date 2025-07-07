import React, { useState } from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started',
      monthlyPrice: 25000,
      annualPrice: 250000,
      features: [
        'Custom Website Design',
        'Mobile Responsive',
        'Basic SEO Setup',
        'Contact Forms',
        '3 Months Support',
        'SSL Certificate'
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      monthlyPrice: 45000,
      annualPrice: 450000,
      features: [
        'Everything in Starter',
        'E-commerce Integration',
        'Advanced SEO',
        'Analytics Setup',
        '6 Months Support',
        'Content Management',
        'Social Media Integration',
        'Performance Optimization'
      ],
      popular: true,
      cta: 'Most Popular'
    },
    {
      name: 'Enterprise',
      description: 'For large businesses and organizations',
      monthlyPrice: 75000,
      annualPrice: 750000,
      features: [
        'Everything in Professional',
        'Custom Development',
        'API Integrations',
        'Advanced Analytics',
        '12 Months Support',
        'Priority Support',
        'Training Sessions',
        'Maintenance & Updates'
      ],
      popular: false,
      cta: 'Contact Us'
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <section id="pricing" className="modern-section bg-white">
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
            Pricing Plans
          </div>
          
          <h2 className="section-title text-gray-900 mb-6">
            Simple, Transparent{' '}
            <span className="gradient-text">Pricing</span>
          </h2>
          
          <p className="section-subtitle mb-8">
            Choose the perfect plan for your business. All plans include our premium support and satisfaction guarantee.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              One-time
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-green-500' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
              <span className="ml-1 text-green-500 font-semibold">(Save 20%)</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="modern-grid modern-grid-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`modern-card scale-hover fade-in ${
                plan.popular 
                  ? 'border-2 border-green-500 shadow-large transform scale-105' 
                  : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">
                    {formatPrice(isAnnual ? plan.annualPrice : plan.monthlyPrice)}
                  </span>
                  <span className="text-gray-600 ml-2">
                    {isAnnual ? '/year' : '/project'}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`modern-button w-full ${
                  plan.popular
                    ? 'modern-button-primary'
                    : 'modern-button-secondary'
                }`}
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {plan.cta}
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 fade-in">
          <div className="modern-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-600 mb-6">
              We offer tailored packages for unique requirements. Let's discuss your specific needs.
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
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;