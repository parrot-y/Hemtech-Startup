import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CleanContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

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
        phone: '',
        service: '',
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

  const openSocialMedia = (platform: string) => {
    toast({
      title: "Social Media",
      description: `${platform.charAt(0).toUpperCase() + platform.slice(1)} link will be added soon!`,
    });
  };

  return (
    <section id="contact" className="section section-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 bg-electric-blue/10 text-electric-blue border border-electric-blue/30 px-6 py-3 rounded-full text-sm font-medium mb-8">
            <MessageCircle className="w-5 h-5" />
            Get In Touch
          </div>
          
          <h2 className="section-title text-dark-blue mb-6">
            Let's Build Something{' '}
            <span style={{ color: 'var(--electric-blue)' }}>Amazing Together</span>
          </h2>
          
          <p className="section-subtitle text-gray-600">
            Ready to transform your digital presence? Get in touch and let's discuss your project.
            We're here to help you succeed in the digital world.
          </p>
        </div>

        <div className="grid grid-2 gap-12">
          {/* Contact Information */}
          <div className="fade-in">
            <div className="card">
              <div className="text-center mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop"
                  alt="HemTech Office"
                  className="w-full h-48 object-cover rounded-xl mb-6"
                  loading="lazy"
                />
                <h3 className="text-3xl font-bold text-dark-blue mb-4">Contact Information</h3>
                <p className="text-gray-600">We're always ready to help you succeed</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center p-4 bg-electric-blue/5 rounded-xl border border-electric-blue/20">
                  <div className="bg-electric-blue/20 p-4 rounded-xl mr-6">
                    <Phone className="w-6 h-6 text-electric-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark-blue mb-2">Phone / WhatsApp</h4>
                    <p className="text-electric-blue font-semibold">+254 742 321 521</p>
                    <p className="text-electric-blue font-semibold">+254 713 707 483</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-neon-green/5 rounded-xl border border-neon-green/20">
                  <div className="bg-neon-green/20 p-4 rounded-xl mr-6">
                    <Mail className="w-6 h-6 text-neon-green" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark-blue mb-2">Email</h4>
                    <p className="text-neon-green font-semibold">hemtech101@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-gray-100 rounded-xl border border-gray-200">
                  <div className="bg-gray-200 p-4 rounded-xl mr-6">
                    <MapPin className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark-blue mb-2">Location</h4>
                    <p className="text-gray-600 font-semibold">Nairobi, Kenya 🇰🇪</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-bold text-dark-blue mb-6 text-xl">Follow Us</h4>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => openSocialMedia('twitter')}
                    className="flex items-center justify-center p-3 bg-blue-50 hover:bg-blue-100 rounded-xl border border-blue-200 transition-all group"
                  >
                    <svg className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    <span className="ml-2 text-blue-500 font-medium">Twitter</span>
                  </button>
                  
                  <button
                    onClick={() => openSocialMedia('linkedin')}
                    className="flex items-center justify-center p-3 bg-blue-50 hover:bg-blue-100 rounded-xl border border-blue-200 transition-all group"
                  >
                    <svg className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span className="ml-2 text-blue-600 font-medium">LinkedIn</span>
                  </button>
                  
                  <button
                    onClick={() => openSocialMedia('instagram')}
                    className="flex items-center justify-center p-3 bg-pink-50 hover:bg-pink-100 rounded-xl border border-pink-200 transition-all group"
                  >
                    <svg className="w-5 h-5 text-pink-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.864 3.708 13.713 3.708 12.416s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.608c-.49 0-.875-.385-.875-.875s.385-.875.875-.875.875.385.875.875-.385.875-.875.875zm-4.262 1.297c-1.297 0-2.345 1.048-2.345 2.345s1.048 2.345 2.345 2.345 2.345-1.048 2.345-2.345-1.048-2.345-2.345-2.345z"/>
                    </svg>
                    <span className="ml-2 text-pink-500 font-medium">Instagram</span>
                  </button>
                  
                  <button
                    onClick={() => openSocialMedia('facebook')}
                    className="flex items-center justify-center p-3 bg-blue-50 hover:bg-blue-100 rounded-xl border border-blue-200 transition-all group"
                  >
                    <svg className="w-5 h-5 text-blue-700 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="ml-2 text-blue-700 font-medium">Facebook</span>
                  </button>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <button
                  onClick={openWhatsApp}
                  className="btn-primary w-full"
                >
                  <MessageCircle className="mr-3" size={20} />
                  WhatsApp Us Now
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in">
            <div className="card">
              <div className="text-center mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop"
                  alt="Send Message"
                  className="w-full h-48 object-cover rounded-xl mb-6"
                  loading="lazy"
                />
                <h3 className="text-3xl font-bold text-dark-blue mb-4">Send us a Message</h3>
                <p className="text-gray-600">Tell us about your project and we'll get back to you</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-2 gap-4">
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

                <div className="grid grid-2 gap-4">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="+254 700 000 000"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="service" className="form-label">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="hotel-booking">Hotel Booking Systems</option>
                      <option value="digital-branding">Digital Branding</option>
                      <option value="social-media">Social Media Management</option>
                      <option value="mobile-solutions">Mobile Solutions</option>
                      <option value="ai-integration">AI Integration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
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
                    rows={6}
                    className="form-input form-textarea"
                    placeholder="Tell us about your project, goals, timeline, and budget..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  <Send className="mr-3" size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 fade-in">
          <div className="card text-center bg-gradient-to-r from-electric-blue/5 to-neon-green/5 border-electric-blue/20">
            <div className="flex items-center justify-center mb-6">
              <CheckCircle className="w-12 h-12 text-electric-blue mr-4" />
              <h3 className="text-3xl font-bold text-dark-blue">Why Choose HemTech?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-electric-blue mb-2">50+</div>
                <div className="text-dark-blue font-semibold">Successful Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-electric-blue mb-2">100%</div>
                <div className="text-dark-blue font-semibold">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-electric-blue mb-2">24/7</div>
                <div className="text-dark-blue font-semibold">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleanContact;