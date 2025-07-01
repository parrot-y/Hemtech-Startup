import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const EliteHero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-white">
      <div className="container-elite">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Content */}
          <div className="mb-12">
            <div className="mb-6">
              <span className="text-sm font-medium text-gray-600 tracking-wide uppercase">
                Elite Web Design & AI Integration Agency
              </span>
            </div>
            
            <h1 className="mb-6 font-extrabold text-gray-900 leading-tight">
              Award Winning<br />
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                Web Design Agency
              </span>
            </h1>
            
            <div className="mb-4">
              <p className="text-lg text-gray-600 font-medium">
                We are helping brands in the digital age.
              </p>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-12">
              Don't Build a Website, Build Growth
            </h2>
          </div>

          {/* Service Navigation */}
          <nav className="service-navigation">
            <span className="service-tab active">01 Web Design</span>
            <span className="service-tab">02 AI Integration</span>
            <span className="service-tab">03 Social Media</span>
            <span className="service-tab">04 E-Commerce</span>
          </nav>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button onClick={scrollToContact} className="btn-elite btn-primary-elite">
              Start Your Transformation
              <ArrowRight className="ml-2" size={20} />
            </button>
            <button onClick={scrollToPortfolio} className="btn-elite btn-secondary-elite">
              <Play className="mr-2" size={20} />
              View Our Work
            </button>
          </div>

          {/* Portfolio Preview Grid */}
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <div className="device-mockup">
                <div className="device-screen">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
                    alt="Renovyte Construction Website"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Renovyte Construction</h3>
                <p className="text-sm text-gray-600">Modern construction company platform</p>
              </div>
            </div>

            <div className="portfolio-item">
              <div className="device-mockup">
                <div className="device-screen">
                  <img
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop"
                    alt="VID Logistics Platform"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">VID Logistics</h3>
                <p className="text-sm text-gray-600">Professional logistics platform</p>
              </div>
            </div>

            <div className="portfolio-item">
              <div className="device-mockup">
                <div className="device-screen">
                  <img
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop"
                    alt="UzuEats Food Delivery"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">UzuEats</h3>
                <p className="text-sm text-gray-600">Modern food delivery platform</p>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="stats-grid mt-16 pt-16 border-t border-gray-200">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EliteHero;