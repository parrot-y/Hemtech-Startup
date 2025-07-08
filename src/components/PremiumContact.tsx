import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PremiumContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    message: ''
  });
  const { toast } = useToast();

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

    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      console.log('Form submitted:', formData);
      
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours via email or WhatsApp.",
      });
      
      setFormData({
        name: '',
        email: '',
        budget: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  const openWhatsApp = () => {
    const message = "Hi! I'm interested in your digital services. Can we discuss my project?";
    window.open(`https://wa.me/254742321521?text=${encodeURIComponent(message)}`, '_blank');
  };

  const budgetOptions = [
    'Under KES 25k',
    'KES 25k - 50k',
    'KES 50k - 100k',
    'KES 100k - 200k',
    'Over KES 200k'
  ];

  return (
    <section id="contact" className="section-premium">
      {/* Background Elements */}
      <div className="tech-bg">
        <div className="tech-shape"></div>
        <div className="tech-shape"></div>
      </div>

      <div className="container-premium relative z-10">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 bg-gold/10 text-gold border border-gold/30 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4" />
            Get In Touch
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something{' '}
            <span className="gradient-text">Amazing Together</span>
          </h2>
          
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Ready to transform your digital presence? Get in touch and let's discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="slide-in-left">
            <div className="card-premium">
              <h3 className="text-2xl font-bold text-light mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-gold/20 p-3 rounded-full mr-4">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-light">Phone / WhatsApp</h4>
                    <p className="text-muted">+254 742 321 521</p>
                    <p className="text-muted">+254 713 707 483</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-gold/20 p-3 rounded-full mr-4">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-light">Email</h4>
                    <p className="text-muted">hemtech101@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-gold/20 p-3 rounded-full mr-4">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-light">Location</h4>
                    <p className="text-muted">Nairobi, Kenya 🇰🇪</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="mt-8 pt-8 border-t border-gold/30">
                <h4 className="font-semibold text-light mb-4">Quick Contact</h4>
                <button
                  onClick={openWhatsApp}
                  className="btn-premium btn-primary w-full"
                >
                  <MessageCircle className="mr-2" size={20} />
                  WhatsApp Us Now
                </button>
              </div>

              {/* Response Time */}
              <div className="mt-8 pt-8 border-t border-gold/30">
                <h4 className="font-semibold text-light mb-4">Response Time</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-gold" />
                      <span className="text-muted">WhatsApp</span>
                    </div>
                    <span className="text-gold font-semibold">Within 1 hour</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-gold" />
                      <span className="text-muted">Email</span>
                    </div>
                    <span className="text-gold font-semibold">Within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="slide-in-right">
            <div className="card-premium">
              <h3 className="text-2xl font-bold text-light mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="form-premium">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="budget" className="form-label">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">Select your budget range</option>
                    {budgetOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-textarea"
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-premium btn-primary w-full text-lg py-4"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumContact;