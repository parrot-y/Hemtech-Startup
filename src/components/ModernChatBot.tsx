import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles, Phone } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ModernChatBot = () => {
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
      return "💰 **Transparent Pricing - Premium Quality:**\n\n🌐 **Web Development:**\n• Basic: KES 25k\n• Standard: KES 50k\n• Premium: KES 90k+\n\n🏨 **Hotel Booking:**\n• Starter: KES 15k\n• Business: KES 35k\n• Premium: KES 65k\n\n🎨 **Digital Branding:**\n• Essential: KES 10k\n• Professional: KES 25k\n• Premium: KES 45k\n\n📱 **Mobile Apps:**\n• Simple: KES 60k\n• Advanced: KES 120k\n• Enterprise: KES 200k+\n\n🤖 **AI Integration:**\n• Starter: KES 35k\n• Professional: KES 70k\n• Enterprise: KES 150k+\n\n✅ **FREE consultation included!**\nReady to start? Contact us! 📱";
    }
    
    if (message.includes('contact') || message.includes('phone') || message.includes('email') || message.includes('reach')) {
      return "📞 **Contact HemTech Directly:**\n\n📱 **WhatsApp (Fastest Response):**\n+254 742 321 521\n+254 713 707 483\n\n📧 **Email:**\nhemtech101@gmail.com\n\n📍 **Location:**\nNairobi, Kenya 🇰🇪\n\n⚡ **Response Times:**\n• WhatsApp: Within 1 hour\n• Email: Within 24 hours\n• Phone: Same day\n\nClick the WhatsApp button for instant chat! 💬";
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('start')) {
      return "👋 **Welcome to HemTech!**\n\nI'm HemTech AI, here to help you with:\n\n🌐 **Premium Web Development**\n🏨 **Hotel Booking Systems**\n🎨 **Digital Branding & Design**\n📱 **Mobile App Development**\n🤖 **AI Integration**\n📈 **Social Media Management**\n\n✨ **Why Choose HemTech?**\n• 50+ successful projects\n• 100% client satisfaction\n• 24/7 support available\n• Transparent pricing\n• Kenya-based team\n\n🚀 **Ready to transform your business?**\nAsk me about pricing, services, or contact our team directly!\n\nWhat can I help you with today? 💪";
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
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center relative"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        
        {/* Notification dot */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
          <Sparkles size={10} className="text-white" />
        </div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 flex items-center">
            <div className="bg-white/20 p-2 rounded-full mr-3">
              <Bot size={20} />
            </div>
            <div className="flex-1">
              <h3 className="font-bold">HemTech AI</h3>
              <p className="text-sm opacity-90">Online • Responds instantly</p>
            </div>
            <button
              onClick={openWhatsApp}
              className="bg-green-600 hover:bg-green-700 p-2 rounded-full transition-colors"
              title="WhatsApp"
            >
              <Phone size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs px-4 py-3 rounded-2xl shadow-sm ${
                    message.isBot
                      ? 'bg-white text-gray-800 border border-gray-200'
                      : 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.isBot && <Bot size={16} className="mt-1 text-green-600 flex-shrink-0" />}
                    {!message.isBot && <User size={16} className="mt-1 flex-shrink-0" />}
                    <div className="text-sm whitespace-pre-line leading-relaxed">{message.text}</div>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 px-4 py-3 rounded-2xl max-w-xs shadow-sm border border-gray-200">
                  <div className="flex items-center space-x-2">
                    <Bot size={16} className="text-green-600" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex space-x-2">
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-2 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModernChatBot;