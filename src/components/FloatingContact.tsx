import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, X } from 'lucide-react';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contact Options Menu */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 w-64">
          <h3 className="font-semibold text-slate-800 mb-3">Get in Touch</h3>
          <div className="space-y-2">
            <a
              href="tel:(555)123-4567"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200"
            >
              <div className="bg-green-100 p-2 rounded-full">
                <Phone className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <div className="font-medium text-slate-800">Call Now</div>
                <div className="text-sm text-slate-600">(555) 123-4567</div>
              </div>
            </a>
            
            <a
              href="mailto:info@sorbellorefrigerated.com"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200"
            >
              <div className="bg-blue-100 p-2 rounded-full">
                <Mail className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <div className="font-medium text-slate-800">Send Email</div>
                <div className="text-sm text-slate-600">Quick response</div>
              </div>
            </a>

            <a
              href="#contact"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              <div className="bg-purple-100 p-2 rounded-full">
                <MessageCircle className="h-4 w-4 text-purple-600" />
              </div>
              <div>
                <div className="font-medium text-slate-800">Contact Form</div>
                <div className="text-sm text-slate-600">Detailed inquiry</div>
              </div>
            </a>
          </div>
          
          {/* Emergency Contact */}
          <div className="mt-4 pt-4 border-t border-slate-200">
            <a
              href="tel:(555)911-2653"
              className="flex items-center space-x-2 text-red-600 hover:text-red-800 transition-colors duration-200"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">Emergency: (555) 911-COLD</span>
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform ${
          isOpen ? 'rotate-45 bg-slate-600' : 'hover:scale-110'
        }`}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>

      {/* Pulse animation when closed */}
      {!isOpen && (
        <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-20"></div>
      )}
    </div>
  );
};

export default FloatingContact;