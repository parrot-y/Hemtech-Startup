import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, AlertCircle, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Received!",
      description: "We'll contact you within 2 hours via WhatsApp or email.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const whatsappNumber = "+254742321521";
  const whatsappMessage = "Hi! I need digital services for my business. Can we discuss?";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const openWhatsApp = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-12 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Amazing
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business? Get in touch and let's make it happen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 shadow-lg border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 lg:mb-8">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-green-500/20 p-3 rounded-full mr-4">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Phone / WhatsApp</h4>
                    <p className="text-gray-300">+254 742 321 521</p>
                    <p className="text-gray-300">+254 713 707 483</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-blue-500/20 p-3 rounded-full mr-4">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-gray-300">vidonyihemstone99@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-purple-500/20 p-3 rounded-full mr-4">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Location</h4>
                    <p className="text-gray-300">Nairobi, Kenya 🇰🇪</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <h4 className="font-semibold text-white mb-4">Quick Contact</h4>
                <Button
                  onClick={openWhatsApp}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-base"
                >
                  <MessageCircle className="mr-2" size={20} />
                  WhatsApp Me Now
                </Button>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <h4 className="font-semibold text-white mb-4">Response Time</h4>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-green-400" />
                      <span>WhatsApp</span>
                    </div>
                    <span className="text-green-400 font-semibold">Within 30 mins</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-blue-400" />
                      <span>Email</span>
                    </div>
                    <span className="text-blue-400 font-semibold">Within 2 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-purple-400" />
                      <span>Phone Call</span>
                    </div>
                    <span className="text-purple-400 font-semibold">Same day</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 shadow-lg border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Send a Message</h3>
              
              {/* Form status note */}
              <div className="mb-6 p-4 bg-amber-500/20 border border-amber-400/30 rounded-lg">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-amber-400 mr-2 mt-0.5" />
                  <div className="text-sm text-amber-200">
                    <p className="font-semibold mb-1">Quick Response:</p>
                    <p>For fastest response, use WhatsApp. This form sends to our email system.</p>
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400"
                      placeholder="+254 700 000 000"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2 text-white focus:border-purple-400 focus:ring-purple-400"
                    >
                      <option value="" className="text-gray-900">Select a service</option>
                      <option value="web-design" className="text-gray-900">Web Development</option>
                      <option value="social-media" className="text-gray-900">Social Media Management</option>
                      <option value="seo" className="text-gray-900">SEO & Marketing</option>
                      <option value="ai-integration" className="text-gray-900">AI Integration</option>
                      <option value="other" className="text-gray-900">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400"
                    placeholder="Tell me about your project, goals, timeline, and budget..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 lg:py-4 px-6 rounded-xl font-semibold text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;