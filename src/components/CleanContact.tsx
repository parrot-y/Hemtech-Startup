import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
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
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
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
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  const openWhatsApp = () => {
    const message = "Hi! I'm interested in your digital services. Can we discuss my project?";
    window.open(`https://wa.me/254742321521?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contact" className="section section-white">
      <div className="container">
        {/* Minimal Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="section-title text-royal-blue">
            Let's <span className="text-gold">Connect</span>
          </h2>
          <p className="section-subtitle">
            Ready to build something amazing?
          </p>
        </div>

        <div className="grid grid-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info - Clean */}
          <div className="fade-in">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-royal-blue mb-8">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center p-6 bg-off-white rounded-xl hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-royal-blue mb-1">Phone / WhatsApp</h4>
                      <p className="text-text-light">+254 742 321 521</p>
                      <p className="text-text-light">+254 713 707 483</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-6 bg-off-white rounded-xl hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-royal-blue mb-1">Email</h4>
                      <p className="text-text-light">hemtech101@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-6 bg-off-white rounded-xl hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-royal-blue mb-1">Location</h4>
                      <p className="text-text-light">Nairobi, Kenya 🇰🇪</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="pt-8 border-t border-gray-200">
                <button
                  onClick={openWhatsApp}
                  className="btn-primary w-full"
                >
                  <MessageCircle className="mr-3" size={20} />
                  WhatsApp Now
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form - Sleek */}
          <div className="fade-in">
            <div className="bg-off-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-royal-blue mb-8">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Your Email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-2 gap-4">
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <div>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                    >
                      <option value="">Select Service</option>
                      <option value="web-development">Web Development</option>
                      <option value="booking-systems">Booking Systems</option>
                      <option value="digital-branding">Digital Branding</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all resize-none"
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
      </div>
    </section>
  );
};

export default CleanContact;