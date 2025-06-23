import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "👋 Hi! I'm Ask Hemtech AI, your digital assistant. How can I help you today?\n\n🚀 Quick options:\n• Get pricing info\n• See our services\n• Contact our team\n• View portfolio",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('service') || message.includes('what do you do')) {
      return "🎯 **Hemtech's Premium Services:**\n\n🌐 **Web Development** (From KSh 25,000)\n• Custom responsive websites\n• E-commerce solutions\n• Performance optimization\n\n🎨 **Digital Branding** (From KSh 15,000)\n• Logo & brand identity\n• Visual design systems\n• Marketing materials\n\n📈 **SEO & Marketing** (From KSh 20,000)\n• Search engine optimization\n• Digital marketing campaigns\n• Content strategy\n\n📱 **Mobile Solutions** (From KSh 50,000)\n• Native & cross-platform apps\n• UI/UX design\n• App store optimization\n\nWhich service interests you most? 🚀";
    }
    
    if (message.includes('price') || message.includes('cost') || message.includes('how much')) {
      return "💰 **Transparent Pricing - Premium Quality:**\n\n🌐 **Web Development:**\n• Basic Website: KSh 25,000\n• Business Website: KSh 45,000\n• E-commerce: KSh 75,000\n\n🎨 **Digital Branding:**\n• Logo Package: KSh 15,000\n• Complete Brand Identity: KSh 35,000\n• Brand Guidelines: KSh 25,000\n\n📈 **SEO & Marketing:**\n• SEO Audit: KSh 10,000\n• Monthly SEO: KSh 20,000\n• Full Campaign: KSh 50,000\n\n📱 **Mobile Apps:**\n• Simple App: KSh 50,000\n• Business App: KSh 100,000\n• Complex App: KSh 200,000\n\n✅ **FREE consultation included!**\nReady to start? Contact us! 📱";
    }
    
    if (message.includes('contact') || message.includes('phone') || message.includes('email') || message.includes('reach')) {
      return "📞 **Contact Hemtech Directly:**\n\n📱 **WhatsApp (Fastest Response):**\n+254 742 321 521\n+254 713 707 483\n\n📧 **Email:**\nhemtech101@gmail.com\n\n📍 **Location:**\nNairobi, Kenya 🇰🇪\n\n⚡ **Response Times:**\n• WhatsApp: Within 1 hour\n• Email: Within 24 hours\n• Phone: Same day\n\nClick the WhatsApp button for instant chat! 💬";
    }
    
    if (message.includes('web') || message.includes('website') || message.includes('design')) {
      return "🌐 **Premium Web Development:**\n\n✨ **What You Get:**\n• Mobile-first responsive design\n• Lightning-fast performance\n• SEO optimization\n• Security features\n• Analytics integration\n• Content management system\n\n💰 **Pricing:**\n• Basic: KSh 25,000\n• Business: KSh 45,000\n• E-commerce: KSh 75,000\n\n🎯 **Results:**\n• Professional credibility\n• Increased conversions\n• Better user experience\n• Search engine visibility\n\nSee our portfolio for examples! 🚀";
    }
    
    if (message.includes('mobile') || message.includes('app') || message.includes('android') || message.includes('ios')) {
      return "📱 **Mobile App Development:**\n\n⚡ **Our Expertise:**\n• Native iOS & Android apps\n• Cross-platform solutions\n• UI/UX design\n• App store optimization\n• Backend integration\n• Push notifications\n\n💰 **Investment:**\n• Simple App: KSh 50,000\n• Business App: KSh 100,000\n• Complex App: KSh 200,000\n\n🎯 **Benefits:**\n• Direct customer engagement\n• Increased brand loyalty\n• New revenue streams\n• Competitive advantage\n\nLet's discuss your app idea! 🚀";
    }
    
    if (message.includes('brand') || message.includes('logo') || message.includes('identity')) {
      return "🎨 **Digital Branding Excellence:**\n\n🎯 **Complete Brand Solutions:**\n• Logo design & variations\n• Brand color palette\n• Typography system\n• Visual guidelines\n• Business card design\n• Social media templates\n\n💰 **Packages:**\n• Logo Only: KSh 15,000\n• Brand Identity: KSh 35,000\n• Complete Package: KSh 55,000\n\n📈 **Impact:**\n• Professional appearance\n• Brand recognition\n• Customer trust\n• Market differentiation\n\nLet's create your brand identity! 🌟";
    }
    
    if (message.includes('seo') || message.includes('marketing') || message.includes('google') || message.includes('ranking')) {
      return "📈 **SEO & Digital Marketing:**\n\n🎯 **Our Services:**\n• Keyword research & optimization\n• On-page & technical SEO\n• Content marketing strategy\n• Google Ads management\n• Social media marketing\n• Analytics & reporting\n\n💰 **Investment:**\n• SEO Audit: KSh 10,000\n• Monthly SEO: KSh 20,000\n• Full Campaign: KSh 50,000\n\n🚀 **Results:**\n• Higher search rankings\n• Increased website traffic\n• More qualified leads\n• Better ROI\n\nReady to dominate search results? 🏆";
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('start')) {
      return "👋 **Welcome to Hemtech!**\n\nI'm Ask Hemtech AI, here to help you with:\n\n🌐 **Premium Web Development**\n🎨 **Digital Branding & Design**\n📈 **SEO & Digital Marketing**\n📱 **Mobile App Development**\n\n✨ **Why Choose Hemtech?**\n• 50+ successful projects\n• 100% client satisfaction\n• 24/7 support available\n• Transparent pricing\n• Kenya-based team\n\n🚀 **Ready to transform your business?**\nAsk me about pricing, services, or contact our team directly!\n\nWhat can I help you with today? 💪";
    }
    
    if (message.includes('portfolio') || message.includes('work') || message.includes('examples') || message.includes('projects')) {
      return "🏆 **Our Impressive Portfolio:**\n\n✅ **Recent Success Stories:**\n• Renovyte - Construction company website\n• VID Logistics - Transportation platform\n• UzuEats - Food delivery application\n• Willy Auto - Automotive dealership\n• Maringa Law Firm - Legal services\n• Immanuel Junior Academy - Educational site\n\n📊 **Our Track Record:**\n• 50+ completed projects\n• 100% client satisfaction\n• Industries: Construction, Food, Legal, Education, E-commerce, Logistics\n\n🎯 **Each project features:**\n• Modern, responsive design\n• Fast performance\n• SEO optimization\n• Mobile-first approach\n\nWant to see your business featured next? Let's create something amazing! 🚀";
    }
    
    if (message.includes('whatsapp') || message.includes('chat') || message.includes('message')) {
      return "📱 **WhatsApp - Connect Instantly:**\n\n✅ **Hemtech's WhatsApp:**\n+254 742 321 521\n\n⚡ **Why WhatsApp?**\n• Instant responses (within 1 hour)\n• Direct chat with our team\n• Share files & ideas easily\n• Voice messages supported\n• Video calls available\n\n🚀 **Just click the green WhatsApp button!**\n\nOr use this link: https://wa.me/254742321521\n\nI'm here 24/7, but our team responds fastest on WhatsApp! 💬";
    }
    
    if (message.includes('process') || message.includes('how do you work') || message.includes('steps')) {
      return "🎯 **Our Proven 5-Step Process:**\n\n**1️⃣ Discovery & Consultation** (FREE)\n• Understand your goals\n• Analyze requirements\n• Define project scope\n• Set timeline & budget\n\n**2️⃣ Strategy & Planning**\n• Create project roadmap\n• Design wireframes\n• Plan user experience\n• Technical architecture\n\n**3️⃣ Design & Development**\n• Create stunning designs\n• Develop functionality\n• Regular progress updates\n• Quality assurance testing\n\n**4️⃣ Review & Refinement**\n• Client feedback integration\n• Final testing & optimization\n• Performance tuning\n• Security checks\n\n**5️⃣ Launch & Support**\n• Go live deployment\n• Training & documentation\n• Ongoing support\n• Performance monitoring\n\n✅ **This process ensures 100% client satisfaction!**\n\nReady to start? Let's chat! 🚀";
    }
    
    if (message.includes('time') || message.includes('how long') || message.includes('duration') || message.includes('timeline')) {
      return "⏰ **Project Timelines - Fast & Reliable:**\n\n🌐 **Web Development:**\n• Basic Website: 1-2 weeks\n• Business Website: 2-3 weeks\n• E-commerce Site: 3-4 weeks\n\n🎨 **Digital Branding:**\n• Logo Design: 3-5 days\n• Brand Identity: 1-2 weeks\n• Complete Package: 2-3 weeks\n\n📱 **Mobile Apps:**\n• Simple App: 4-6 weeks\n• Business App: 6-8 weeks\n• Complex App: 8-12 weeks\n\n📈 **SEO & Marketing:**\n• Setup: 1 week\n• Initial Results: 2-4 weeks\n• Significant Impact: 2-3 months\n\n✅ **We always deliver on time!**\n\nNeed it faster? We offer rush delivery! ⚡";
    }
    
    return "🤖 **Thanks for your question!**\n\nI'm Ask Hemtech AI, and I can help you with:\n\n• 💰 Pricing information\n• 🌐 Service details\n• 📞 Contact information\n• 🏆 Portfolio examples\n• ⏰ Project timelines\n• 🎯 Our process\n\n**For detailed discussions, contact our team:**\n📱 WhatsApp: +254 742 321 521\n📧 Email: hemtech101@gmail.com\n\n**Try asking about:**\n\"pricing\", \"services\", \"portfolio\", \"contact\", \"process\", \"timeline\"\n\nHow can I help transform your business? 🚀";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/254742321521?text=Hi! I need help with my digital project', '_blank');
  };

  return (
    <>
      {/* Chat Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="glow-button bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white rounded-full w-16 h-16 shadow-2xl border-2 border-white relative"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="chat"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MessageCircle size={24} />
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Notification dot */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
            >
              <Sparkles size={10} className="text-white" />
            </motion.div>
          </Button>
        </motion.div>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 right-6 w-96 h-[500px] glass-morphism rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-white/20"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white p-4 flex items-center">
              <div className="bg-white/20 p-2 rounded-full mr-3">
                <Bot size={20} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold">Ask Hemtech AI</h3>
                <p className="text-sm opacity-90">Online • Responds instantly</p>
              </div>
              <div className="flex items-center space-x-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={openWhatsApp}
                  className="bg-green-500 hover:bg-green-600 p-2 rounded-full transition-colors"
                  title="WhatsApp"
                >
                  <Phone size={16} />
                </motion.button>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles size={16} className="text-yellow-300" />
                </motion.div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-white/5 to-white/10">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-3 rounded-2xl shadow-sm ${
                      message.isBot
                        ? 'bg-white/90 text-gray-800 border border-gray-200'
                        : 'bg-gradient-to-r from-blue-600 to-green-500 text-white'
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.isBot && <Bot size={16} className="mt-1 text-blue-600 flex-shrink-0" />}
                      {!message.isBot && <User size={16} className="mt-1 flex-shrink-0" />}
                      <div className="text-sm whitespace-pre-line leading-relaxed">{message.text}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/90 text-gray-800 px-4 py-3 rounded-2xl max-w-xs shadow-sm border border-gray-200">
                    <div className="flex items-center space-x-2">
                      <Bot size={16} className="text-blue-600" />
                      <div className="flex space-x-1">
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                          className="w-2 h-2 bg-blue-600 rounded-full"
                        />
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                          className="w-2 h-2 bg-blue-600 rounded-full"
                        />
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                          className="w-2 h-2 bg-blue-600 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/20 bg-white/5">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder-gray-300 focus:border-blue-400 focus:ring-blue-400 rounded-xl"
                />
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={handleSendMessage}
                    size="icon"
                    className="glow-button bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 rounded-xl shadow-lg"
                  >
                    <Send size={16} />
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;