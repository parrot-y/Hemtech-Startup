import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles, Phone, Mail } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const PremiumChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "👋 Hi! I'm HemTech AI, your digital assistant. How can I help you today?\n\n🚀 Quick options:\n• Get pricing info\n• See our services\n• Contact our team\n• View portfolio",
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
      return "🎯 **HemTech's Premium Services:**\n\n🌐 **Web Development** (From KES 25k)\n• Custom responsive websites\n• E-commerce solutions\n• Performance optimization\n\n🏨 **Hotel Booking** (From KES 15k)\n• Booking systems\n• Payment integration\n• Management tools\n\n🎨 **Digital Branding** (From KES 10k)\n• Logo & brand identity\n• Visual design systems\n• Marketing materials\n\n📱 **Mobile Solutions** (From KES 60k)\n• Native & cross-platform apps\n• UI/UX design\n• App store optimization\n\n🤖 **AI Integration** (From KES 35k)\n• Chatbots & automation\n• Data analysis\n• Custom AI solutions\n\nWhich service interests you most? 🚀";
    }
    
    if (message.includes('price') || message.includes('cost') || message.includes('how much')) {
      return "💰 **Transparent Pricing - Premium Quality:**\n\n🌐 **Web Development:**\n• Basic: KES 25k\n• Pro: KES 50k\n• Enterprise: KES 90k+\n\n🏨 **Hotel Booking:**\n• Starter: KES 15k\n• Business: KES 35k\n• Premium: KES 65k\n\n🎨 **Digital Branding:**\n• Essential: KES 10k\n• Professional: KES 25k\n• Premium: KES 45k\n\n📱 **Mobile Apps:**\n• Simple: KES 60k\n• Advanced: KES 120k\n• Enterprise: KES 200k+\n\n🤖 **AI Integration:**\n• Starter: KES 35k\n• Professional: KES 70k\n• Enterprise: KES 150k+\n\n✅ **FREE consultation included!**\nReady to start? Contact us! 📱";
    }
    
    if (message.includes('contact') || message.includes('phone') || message.includes('email') || message.includes('reach')) {
      return "📞 **Contact HemTech Directly:**\n\n📱 **WhatsApp (Fastest Response):**\n+254 742 321 521\n+254 713 707 483\n\n📧 **Email:**\nhemtech101@gmail.com\n\n📍 **Location:**\nNairobi, Kenya 🇰🇪\n\n⚡ **Response Times:**\n• WhatsApp: Within 1 hour\n• Email: Within 24 hours\n• Phone: Same day\n\nClick the WhatsApp button for instant chat! 💬";
    }
    
    if (message.includes('web') || message.includes('website') || message.includes('design')) {
      return "🌐 **Premium Web Development:**\n\n✨ **What You Get:**\n• Mobile-first responsive design\n• Lightning-fast performance\n• SEO optimization\n• Security features\n• Analytics integration\n• Content management system\n\n💰 **Pricing:**\n• Basic: KES 25k\n• Pro: KES 50k\n• Enterprise: KES 90k+\n\n🎯 **Results:**\n• Professional credibility\n• Increased conversions\n• Better user experience\n• Search engine visibility\n\nSee our portfolio for examples! 🚀";
    }
    
    if (message.includes('mobile') || message.includes('app') || message.includes('android') || message.includes('ios')) {
      return "📱 **Mobile App Development:**\n\n⚡ **Our Expertise:**\n• Native iOS & Android apps\n• Cross-platform solutions\n• UI/UX design\n• App store optimization\n• Backend integration\n• Push notifications\n\n💰 **Investment:**\n• Simple App: KES 60k\n• Advanced App: KES 120k\n• Enterprise App: KES 200k+\n\n🎯 **Benefits:**\n• Direct customer engagement\n• Increased brand loyalty\n• New revenue streams\n• Competitive advantage\n\nLet's discuss your app idea! 🚀";
    }
    
    if (message.includes('ai') || message.includes('artificial intelligence') || message.includes('automation')) {
      return "🤖 **AI Integration Services:**\n\n🎯 **Our AI Solutions:**\n• Intelligent chatbots\n• Process automation\n• Data analysis & insights\n• Machine learning models\n• Natural language processing\n• Predictive analytics\n\n💰 **Packages:**\n• Starter: KES 35k\n• Professional: KES 70k\n• Enterprise: KES 150k+\n\n📈 **Impact:**\n• Reduced operational costs\n• Improved efficiency\n• Better customer service\n• Data-driven decisions\n\nReady to embrace AI? 🌟";
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('start')) {
      return "👋 **Welcome to HemTech!**\n\nI'm HemTech AI, here to help you with:\n\n🌐 **Premium Web Development**\n🏨 **Hotel Booking Systems**\n🎨 **Digital Branding & Design**\n📱 **Mobile App Development**\n🤖 **AI Integration**\n📈 **Social Media Management**\n\n✨ **Why Choose HemTech?**\n• 50+ successful projects\n• 100% client satisfaction\n• 24/7 support available\n• Transparent pricing\n• Kenya-based team\n\n🚀 **Ready to transform your business?**\nAsk me about pricing, services, or contact our team directly!\n\nWhat can I help you with today? 💪";
    }
    
    if (message.includes('portfolio') || message.includes('work') || message.includes('examples') || message.includes('projects')) {
      return "🏆 **Our Impressive Portfolio:**\n\n✅ **Recent Success Stories:**\n• Renovyte - Construction company website\n• VID Logistics - Transportation platform\n• UzuEats - Food delivery application\n• Willy Auto - Automotive dealership\n• Maringa Law Firm - Legal services\n• Immanuel Junior Academy - Educational site\n\n📊 **Our Track Record:**\n• 50+ completed projects\n• 100% client satisfaction\n• Industries: Construction, Food, Legal, Education, E-commerce, Logistics\n\n🎯 **Each project features:**\n• Modern, responsive design\n• Fast performance\n• SEO optimization\n• Mobile-first approach\n\nWant to see your business featured next? Let's create something amazing! 🚀";
    }
    
    if (message.includes('whatsapp') || message.includes('chat') || message.includes('message')) {
      return "📱 **WhatsApp - Connect Instantly:**\n\n✅ **HemTech's WhatsApp:**\n+254 742 321 521\n\n⚡ **Why WhatsApp?**\n• Instant responses (within 1 hour)\n• Direct chat with our team\n• Share files & ideas easily\n• Voice messages supported\n• Video calls available\n\n🚀 **Just click the green WhatsApp button!**\n\nOr use this link: https://wa.me/254742321521\n\nI'm here 24/7, but our team responds fastest on WhatsApp! 💬";
    }
    
    return "🤖 **Thanks for your question!**\n\nI'm HemTech AI, and I can help you with:\n\n• 💰 Pricing information\n• 🌐 Service details\n• 📞 Contact information\n• 🏆 Portfolio examples\n• ⏰ Project timelines\n• 🎯 Our process\n\n**For detailed discussions, contact our team:**\n📱 WhatsApp: +254 742 321 521\n📧 Email: hemtech101@gmail.com\n\n**Try asking about:**\n\"pricing\", \"services\", \"portfolio\", \"contact\", \"process\", \"timeline\"\n\nHow can I help transform your business? 🚀";
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
    <div className="chatbot-container">
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="chatbot-toggle"
      >
        {isOpen ? <X /> : <MessageCircle />}
        
        {/* Notification dot */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
          <Sparkles size={10} className="text-white" />
        </div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="flex items-center">
              <div className="bg-primary-blue/20 p-2 rounded-full mr-3">
                <Bot size={20} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold">HemTech AI</h3>
                <p className="text-sm opacity-90">Online • Responds instantly</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={openWhatsApp}
                  className="bg-green-500 hover:bg-green-600 p-2 rounded-full transition-colors"
                  title="WhatsApp"
                >
                  <Phone size={16} />
                </button>
                <div className="animate-spin">
                  <Sparkles size={16} className="text-primary-blue" />
                </div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs px-4 py-3 rounded-2xl shadow-sm ${
                    message.isBot
                      ? 'bg-card-bg border border-border-color text-light'
                      : 'bg-gradient-gold text-primary-blue'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.isBot && <Bot size={16} className="mt-1 text-gold flex-shrink-0" />}
                    {!message.isBot && <User size={16} className="mt-1 flex-shrink-0" />}
                    <div className="text-sm whitespace-pre-line leading-relaxed">{message.text}</div>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-card-bg border border-border-color px-4 py-3 rounded-2xl max-w-xs shadow-sm">
                  <div className="flex items-center space-x-2">
                    <Bot size={16} className="text-gold" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gold rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="chatbot-input">
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything..."
              className="form-input flex-1 mr-2"
            />
            <button
              onClick={handleSendMessage}
              className="btn-premium btn-primary p-3"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PremiumChatBot;