import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot, User, Minimize2 } from 'lucide-react';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      message: 'Hello! I\'m here to help you with your cold chain logistics needs. How can I assist you today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickReplies = [
    'USDA Inspection Services',
    'Cold Storage Pricing',
    'Emergency Services',
    'Request Quote',
    'Facility Locations'
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      type: 'user',
      message: inputMessage,
      timestamp: new Date()
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        message: 'Thank you for your message! A member of our team will respond shortly. For immediate assistance, please call our 24/7 hotline at (555) 911-COLD.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleQuickReply = (reply: string) => {
    const newMessage = {
      id: messages.length + 1,
      type: 'user',
      message: reply,
      timestamp: new Date()
    };

    setMessages([...messages, newMessage]);

    // Simulate bot response based on quick reply
    setTimeout(() => {
      let botMessage = '';
      switch (reply) {
        case 'USDA Inspection Services':
          botMessage = 'Our USDA FSIS inspection services are available 24/7 with average processing times under 24 hours. Would you like to know more about our inspection capabilities?';
          break;
        case 'Cold Storage Pricing':
          botMessage = 'Our cold storage pricing varies based on temperature requirements, duration, and volume. I can connect you with our pricing team for a custom quote. What type of products do you need to store?';
          break;
        case 'Emergency Services':
          botMessage = 'We offer 24/7 emergency inspection and logistics services. For immediate emergency assistance, please call (555) 911-COLD. What type of emergency service do you need?';
          break;
        case 'Request Quote':
          botMessage = 'I\'d be happy to help you get a quote! Please provide details about your needs: product type, volume, timeline, and preferred location. You can also fill out our contact form for a detailed quote.';
          break;
        case 'Facility Locations':
          botMessage = 'We have facilities in Houston, TX and Newark, NJ, with a Pacific Coast location coming soon. Which location would you like to know more about?';
          break;
        default:
          botMessage = 'Thank you for your inquiry. A team member will respond shortly with detailed information.';
      }

      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        message: botMessage,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 group"
        >
          <MessageCircle className="h-6 w-6" />
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
            1
          </div>
        </button>
        
        {/* Tooltip */}
        <div className="absolute bottom-full left-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="bg-slate-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
            Chat with us!
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`fixed bottom-6 left-6 z-50 transition-all duration-300 ${
      isMinimized ? 'w-80 h-16' : 'w-80 h-96'
    }`}>
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden h-full flex flex-col">
        {/* Chat Header */}
        <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-500 rounded-full p-2">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">SRS Support</h3>
              <p className="text-blue-100 text-xs">Online now</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-blue-100 hover:text-white transition-colors duration-200"
            >
              <Minimize2 className="h-4 w-4" />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="text-blue-100 hover:text-white transition-colors duration-200"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-xs ${
                    message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}>
                    <div className={`rounded-full p-2 ${
                      message.type === 'user' ? 'bg-blue-600' : 'bg-slate-200'
                    }`}>
                      {message.type === 'user' ? (
                        <User className="h-3 w-3 text-white" />
                      ) : (
                        <Bot className="h-3 w-3 text-slate-600" />
                      )}
                    </div>
                    <div className={`rounded-lg p-3 ${
                      message.type === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-800'
                    }`}>
                      <p className="text-sm">{message.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-slate-500 mb-2">Quick options:</p>
                <div className="flex flex-wrap gap-1">
                  {quickReplies.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => handleQuickReply(reply)}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs px-2 py-1 rounded-full transition-colors duration-200"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-slate-200">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                For emergencies, call (555) 911-COLD
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LiveChat;