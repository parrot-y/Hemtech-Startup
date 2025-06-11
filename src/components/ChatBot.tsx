import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react';
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
      text: "Hi! I'm HemTech's AI assistant. How can I help you today? I can answer questions about our services, pricing, or help you get started with your project.",
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
      return "HemTech offers comprehensive digital services including:\n\n🌐 Web Development - Custom websites and applications\n🤖 AI Integration - Chatbots and automation\n📈 SEO & Digital Marketing - Boost your online presence\n📱 Social Media Management - Complete social strategy\n\nWhich service interests you most?";
    }
    
    if (message.includes('price') || message.includes('cost') || message.includes('how much')) {
      return "Our pricing is transparent and competitive:\n\n💼 Web Development: Ksh 15,000 - 65,000\n🤖 AI Integration: Ksh 25,000 - 100,000\n📈 SEO & Marketing: Ksh 8,000 - 35,000/month\n📱 Social Media: Ksh 12,000 - 45,000/month\n\nWould you like to schedule a free consultation to discuss your specific needs?";
    }
    
    if (message.includes('contact') || message.includes('phone') || message.includes('email')) {
      return "You can reach Hemstone at:\n\n📞 +254 742 321 521 or +254 713 707 483\n📧 vidonyihemstone99@gmail.com\n📍 Nairobi, Kenya\n\nOr click the WhatsApp button to chat directly! I'm also here 24/7 to help answer any questions.";
    }
    
    if (message.includes('web design') || message.includes('website')) {
      return "Our web development services include:\n\n✨ Custom responsive design\n⚡ Fast loading optimization\n📱 Mobile-first approach\n🔍 SEO optimization\n🛡️ Security features\n📊 Analytics integration\n\nPricing starts at Ksh 15,000 for starter packages. Ready to discuss your website project?";
    }
    
    if (message.includes('ai') || message.includes('artificial intelligence') || message.includes('chatbot')) {
      return "Our AI integration services are cutting-edge:\n\n🤖 Custom AI chatbots\n⚙️ Process automation\n📊 Data analytics & insights\n✍️ AI content generation\n🎯 Smart recommendations\n\nAI solutions start at Ksh 25,000. This is our premium service that can transform your business operations!";
    }
    
    if (message.includes('social media')) {
      return "Our social media management includes:\n\n📝 Daily content creation\n📸 Professional graphics & videos\n📈 Growth strategy development\n💬 Community engagement\n📊 Monthly analytics reports\n🎯 Targeted campaigns\n\nPackages start at Ksh 12,000/month. Let's grow your social presence!";
    }
    
    if (message.includes('seo') || message.includes('marketing')) {
      return "Our SEO & Digital Marketing services:\n\n🔍 Keyword research & optimization\n📈 On-page & technical SEO\n🌍 Local SEO optimization\n📊 Analytics & reporting\n💰 PPC campaign management\n📧 Email marketing\n\nStarting at Ksh 8,000/month. Ready to dominate search results?";
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Welcome to HemTech! 🚀\n\nI'm here to help you transform your business with our digital services. Whether you need a stunning website, AI integration, SEO boost, or social media management - we've got you covered!\n\nWhat can I help you with today?";
    }
    
    if (message.includes('portfolio') || message.includes('work') || message.includes('examples')) {
      return "Check out our impressive portfolio! We've completed 10+ successful projects including:\n\n🏗️ Renovyte - Construction company website\n🚚 VID Logistics - Transportation platform\n🍕 UzuEats - Food delivery website\n🚗 Willy Auto - Automotive services\n⚖️ Maringa Law Firm - Legal services\n🏍️ Streams Motorcycles - E-commerce\n🎓 Educational platforms\n\nEach project showcases our commitment to quality and innovation!";
    }
    
    if (message.includes('whatsapp')) {
      return "Yes! You can chat with Hemstone directly on WhatsApp at +254 742 321 521. \n\nJust click any of the WhatsApp buttons on the site or use this link: https://wa.me/254742321521\n\nFor instant responses, WhatsApp is the fastest way to reach us!";
    }
    
    if (message.includes('process') || message.includes('how do you work')) {
      return "Our proven 5-step process ensures success:\n\n1️⃣ Consultation - Understanding your needs\n2️⃣ Prototype - Creating initial designs\n3️⃣ Build - Developing your solution\n4️⃣ Review - Testing and refinements\n5️⃣ Launch & Support - Going live with ongoing support\n\nThis process has delivered 100% client satisfaction!";
    }
    
    return "Thank you for your question! 🙏\n\nFor detailed information about that topic, I'd recommend contacting Hemstone directly:\n📞 +254 742 321 521\n📧 vidonyihemstone99@gmail.com\n\nOr feel free to ask me about our services, pricing, portfolio, or process. I'm here to help! ✨";
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

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full w-16 h-16 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 border-2 border-white"
        >
          {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 flex items-center">
            <div className="bg-white/20 p-2 rounded-full mr-3">
              <Bot size={20} />
            </div>
            <div>
              <h3 className="font-semibold">HemTech Assistant</h3>
              <p className="text-sm opacity-90">Powered by AI • Online now</p>
            </div>
            <div className="ml-auto">
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
                  className={`max-w-xs px-4 py-3 rounded-2xl shadow-sm ${
                    message.isBot
                      ? 'bg-white text-gray-800 border border-gray-200'
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.isBot && <Bot size={16} className="mt-1 text-blue-600 flex-shrink-0" />}
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
                    <Bot size={16} className="text-blue-600" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
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
                className="flex-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl shadow-lg"
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