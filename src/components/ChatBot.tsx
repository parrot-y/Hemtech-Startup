import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles, Phone, Mail, Globe } from 'lucide-react';
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
      text: "👋 Hi! I'm HemTech's AI assistant. How can I help you today?\n\n🚀 Quick options:\n• Get pricing info\n• See our services\n• Contact Hemstone\n• View portfolio",
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
      return "🎯 HemTech offers these game-changing services:\n\n🌐 **Web Development** (Ksh 15K-65K)\n• Mobile-first design\n• Lightning fast\n• SEO ready\n\n🤖 **AI Integration** (Ksh 25K-100K)\n• Smart chatbots\n• Process automation\n• Data insights\n\n📈 **SEO & Marketing** (Ksh 8K-35K/month)\n• Google rankings\n• More customers\n• Growth strategy\n\n📱 **Social Media** (Ksh 12K-45K/month)\n• Daily content\n• Brand building\n• Viral growth\n\nWhich one interests you? 🚀";
    }
    
    if (message.includes('price') || message.includes('cost') || message.includes('how much')) {
      return "💰 **Transparent Pricing - No Hidden Fees:**\n\n🌐 **Websites:**\n• Starter: Ksh 15,000\n• Pro: Ksh 35,000\n• Premium: Ksh 65,000\n\n🤖 **AI Solutions:**\n• Basic: Ksh 25,000\n• Advanced: Ksh 50,000\n• Enterprise: Ksh 100,000\n\n📈 **Monthly Services:**\n• SEO: Ksh 8K-35K/month\n• Social Media: Ksh 12K-45K/month\n\n✅ **FREE consultation included!**\n\nReady to start? Click the WhatsApp button! 📱";
    }
    
    if (message.includes('contact') || message.includes('phone') || message.includes('email') || message.includes('reach')) {
      return "📞 **Contact Hemstone Directly:**\n\n📱 **WhatsApp (Fastest):**\n+254 742 321 521\n+254 713 707 483\n\n📧 **Email:**\nvidonyihemstone99@gmail.com\n\n📍 **Location:**\nNairobi, Kenya 🇰🇪\n\n⚡ **Response Times:**\n• WhatsApp: 30 minutes\n• Email: 2 hours\n• Phone: Same day\n\nClick the green WhatsApp button for instant chat! 💬";
    }
    
    if (message.includes('web') || message.includes('website') || message.includes('design')) {
      return "🌐 **Website Development That Converts:**\n\n✨ **What You Get:**\n• Mobile-first responsive design\n• Lightning-fast loading\n• SEO optimization\n• Security features\n• Analytics setup\n\n💰 **Pricing:**\n• Starter: Ksh 15,000\n• Pro: Ksh 35,000\n• Premium: Ksh 65,000\n\n🎯 **Results:**\n• Professional credibility\n• More customers\n• 24/7 availability\n• Better than competitors\n\nSee our portfolio and get started! 🚀";
    }
    
    if (message.includes('ai') || message.includes('artificial intelligence') || message.includes('chatbot') || message.includes('automation')) {
      return "🤖 **AI Integration - The Future is Now:**\n\n⚡ **Smart Solutions:**\n• AI chatbots (like me!)\n• Process automation\n• Smart analytics\n• Content generation\n• Intelligent recommendations\n\n💰 **Investment:**\n• Basic: Ksh 25,000\n• Advanced: Ksh 50,000\n• Enterprise: Ksh 100,000\n\n🎯 **ROI:**\n• Cut costs by 50%\n• Work 10x smarter\n• Better decisions\n• Future-proof business\n\nThis is our premium service - let's discuss your AI needs! 🚀";
    }
    
    if (message.includes('social media') || message.includes('social') || message.includes('instagram') || message.includes('facebook')) {
      return "📱 **Social Media That Actually Works:**\n\n🎨 **What We Do:**\n• Daily engaging content\n• Professional graphics & videos\n• Growth strategy\n• Community building\n• Viral campaigns\n\n💰 **Monthly Packages:**\n• Starter: Ksh 12,000\n• Pro: Ksh 25,000\n• Premium: Ksh 45,000\n\n📈 **Results:**\n• Brand awareness\n• Customer loyalty\n• More leads\n• Viral growth\n\nLet's make your brand famous! 🌟";
    }
    
    if (message.includes('seo') || message.includes('marketing') || message.includes('google') || message.includes('ranking')) {
      return "📈 **SEO & Marketing That Dominates:**\n\n🎯 **Services:**\n• Google top rankings\n• Local SEO domination\n• Content strategy\n• Competitor analysis\n• Performance tracking\n\n💰 **Monthly Investment:**\n• Starter: Ksh 8,000\n• Pro: Ksh 18,000\n• Premium: Ksh 35,000\n\n🚀 **Results:**\n• More website visitors\n• Higher sales\n• Beat competitors\n• Sustainable growth\n\nReady to dominate Google? Let's talk! 🏆";
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('start')) {
      return "👋 **Welcome to HemTech!**\n\nI'm here to help transform your business with:\n\n🌐 **Stunning Websites**\n🤖 **AI Solutions**\n📈 **SEO & Marketing**\n📱 **Social Media Growth**\n\n✨ **Why Choose HemTech?**\n• 10+ successful projects\n• 100% client satisfaction\n• 24/7 support\n• Transparent pricing\n\n🚀 **Ready to grow your business?**\nAsk me about pricing, services, or contact Hemstone directly!\n\nWhat can I help you with today? 💪";
    }
    
    if (message.includes('portfolio') || message.includes('work') || message.includes('examples') || message.includes('projects')) {
      return "🏆 **Our Amazing Portfolio:**\n\n✅ **Recent Projects:**\n• Renovyte - Construction website\n• VID Logistics - Transportation platform\n• UzuEats - Food delivery app\n• Willy Auto - Car dealership\n• Maringa Law Firm - Legal services\n• Streams Motorcycles - E-commerce\n• Educational platforms\n\n📊 **Track Record:**\n• 10+ completed projects\n• 100% client satisfaction\n• Industries: Construction, Food, Legal, Education, E-commerce\n\n🎯 **Each project showcases:**\n• Modern design\n• Mobile optimization\n• Fast performance\n• SEO ready\n\nWant to see your business featured next? Let's build something amazing! 🚀";
    }
    
    if (message.includes('whatsapp') || message.includes('chat') || message.includes('message')) {
      return "📱 **WhatsApp - Fastest Way to Reach Us:**\n\n✅ **Hemstone's WhatsApp:**\n+254 742 321 521\n\n⚡ **Why WhatsApp?**\n• Instant responses (30 mins)\n• Direct chat with Hemstone\n• Share files & ideas easily\n• Voice messages\n• Video calls available\n\n🚀 **Just click the green WhatsApp button on this site!**\n\nOr use this link: https://wa.me/254742321521\n\nI'm here 24/7, but Hemstone responds fastest on WhatsApp! 💬";
    }
    
    if (message.includes('process') || message.includes('how do you work') || message.includes('steps')) {
      return "🎯 **Our Proven 5-Step Process:**\n\n**1️⃣ Consultation** (FREE)\n• Understand your needs\n• Set clear goals\n• Plan timeline & budget\n\n**2️⃣ Prototype**\n• Create initial designs\n• Get your feedback\n• Refine the concept\n\n**3️⃣ Build**\n• Develop your solution\n• Regular updates\n• Quality assurance\n\n**4️⃣ Review**\n• Test everything\n• Your final approval\n• Make adjustments\n\n**5️⃣ Launch & Support**\n• Go live!\n• Training provided\n• Ongoing support\n\n✅ **This process has delivered 100% client satisfaction!**\n\nReady to start? Let's chat! 🚀";
    }
    
    if (message.includes('time') || message.includes('how long') || message.includes('duration') || message.includes('timeline')) {
      return "⏰ **Project Timelines - Fast & Reliable:**\n\n🌐 **Websites:**\n• Basic: 1-2 weeks\n• Pro: 2-3 weeks\n• Premium: 3-4 weeks\n\n🤖 **AI Integration:**\n• Simple: 2-3 weeks\n• Complex: 4-6 weeks\n• Enterprise: 6-8 weeks\n\n📱 **Social Media:**\n• Setup: 3-5 days\n• Content: Ongoing daily\n\n📈 **SEO Results:**\n• Initial: 2-4 weeks\n• Significant: 2-3 months\n\n✅ **We always deliver on time!**\n\nNeed it faster? We offer rush delivery! ⚡";
    }
    
    return "🤖 **Thanks for your question!**\n\nI'm still learning, but I can help you with:\n\n• 💰 Pricing information\n• 🌐 Service details\n• 📞 Contact information\n• 🏆 Portfolio examples\n• ⏰ Project timelines\n• 🎯 Our process\n\n**For detailed answers, contact Hemstone directly:**\n📱 WhatsApp: +254 742 321 521\n📧 Email: vidonyihemstone99@gmail.com\n\n**Or try asking about:**\n\"pricing\", \"services\", \"portfolio\", \"contact\", \"process\"\n\nHow can I help you grow your business? 🚀";
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
    window.open('https://wa.me/254742321521?text=Hi! I need help with my business', '_blank');
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full w-14 h-14 lg:w-16 lg:h-16 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 border-2 border-white"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 lg:bottom-24 right-4 lg:right-6 w-80 lg:w-96 h-96 lg:h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 flex items-center">
            <div className="bg-white/20 p-2 rounded-full mr-3">
              <Bot size={20} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">HemTech AI Assistant</h3>
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
              <Sparkles size={16} className="animate-pulse" />
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-sm px-4 py-3 rounded-2xl shadow-sm ${
                    message.isBot
                      ? 'bg-white text-gray-800 border border-gray-200'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.isBot && <Bot size={16} className="mt-1 text-purple-600 flex-shrink-0" />}
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
                    <Bot size={16} className="text-purple-600" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
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
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-xl"
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl shadow-lg"
              >
                <Send size={16} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;