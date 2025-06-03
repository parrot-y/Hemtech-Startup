
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
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
      text: "Hi! I'm BIZINTEL's AI assistant. How can I help you today? I can answer questions about our services, pricing, or help you get started with your project.",
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
      return "BIZINTEL offers web design, social media management, graphic design, SEO optimization, digital marketing, and content creation. We help businesses grow their digital presence!";
    }
    
    if (message.includes('price') || message.includes('cost') || message.includes('how much')) {
      return "Our pricing varies based on your specific needs. We offer custom packages for web design, social media management, and digital marketing. Would you like to schedule a free consultation to discuss your project?";
    }
    
    if (message.includes('contact') || message.includes('phone') || message.includes('email')) {
      return "You can reach Hemstone at:\n📞 +254 742 321 521 or +254 713 707 483\n📧 vidonyihemstone99@gmail.com\n📍 Nairobi, Kenya\n\nOr click the WhatsApp button to chat directly!";
    }
    
    if (message.includes('web design') || message.includes('website')) {
      return "We create stunning, responsive websites that help your business stand out online. Our web design services include custom design, mobile optimization, and SEO-friendly development. Ready to discuss your website project?";
    }
    
    if (message.includes('social media')) {
      return "Our social media management includes content creation, posting schedules, engagement strategies, and analytics. We help you build a strong online presence across all major platforms!";
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Welcome to BIZINTEL. I'm here to help you learn about our digital services. What would you like to know about?";
    }
    
    if (message.includes('portfolio') || message.includes('work') || message.includes('examples')) {
      return "You can view our portfolio section on this website to see examples of our work. We've completed 50+ projects for happy clients across Kenya and beyond!";
    }
    
    if (message.includes('whatsapp')) {
      return "Yes! You can chat with Hemstone directly on WhatsApp at +254 742 321 521. Just click any of the WhatsApp buttons on the site or use this link: https://wa.me/254742321521";
    }
    
    return "Thank you for your question! For detailed information about that topic, I'd recommend contacting Hemstone directly at +254 742 321 521 or vidonyihemstone99@gmail.com. He'll be happy to help you with your specific needs!";
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
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 flex items-center">
            <Bot className="mr-3" size={24} />
            <div>
              <h3 className="font-semibold">BIZINTEL Assistant</h3>
              <p className="text-sm opacity-90">Online now</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.isBot && <Bot size={16} className="mt-1 text-purple-600" />}
                    {!message.isBot && <User size={16} className="mt-1" />}
                    <div className="text-sm whitespace-pre-line">{message.text}</div>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg max-w-xs">
                  <div className="flex items-center space-x-2">
                    <Bot size={16} className="text-purple-600" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
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
