import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Download, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    need: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        need: '',
        message: ''
      });
    }, 3000);
  };

  const handleDownloadBrochure = () => {
    // In a real application, this would trigger a PDF download
    console.log('Downloading capabilities brochure...');
    // For demo purposes, we'll just show an alert
    alert('Capabilities brochure download started!');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['Main: (555) 123-4567', 'Emergency: (555) 123-4568'],
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@sorbellorefrigerated.com', 'operations@sorbellorefrigerated.com'],
      action: 'Send Email'
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      details: ['1234 Port Boulevard', 'Houston, TX 77011'],
      action: 'Get Directions'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['24/7 Operations', 'Emergency Service Available'],
      action: 'View Schedule'
    }
  ];

  const serviceOptions = [
    'USDA FSIS Import Inspection',
    'Cold Storage Management',
    'Supply Chain Solutions',
    'Logistics & Transportation',
    'Emergency Services',
    'Consultation',
    'Other'
  ];

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Thank You!</h2>
            <p className="text-lg text-slate-600 mb-6">
              Your message has been received. We'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => setIsSubmitted(false)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
              >
                Send Another Message
              </button>
              <button 
                onClick={handleDownloadBrochure}
                className="bg-slate-100 text-slate-800 px-6 py-3 rounded-lg hover:bg-slate-200 transition-colors duration-200 font-semibold flex items-center space-x-2"
              >
                <Download className="h-4 w-4" />
                <span>Download Brochure</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-6 py-3 mb-6">
            <Mail className="h-5 w-5 text-blue-600" />
            <span className="text-blue-800 font-medium">Contact Us</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
            Let's <span className="text-blue-600">Connect</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your cold chain logistics needs? Our team is standing by to provide expert guidance and customized solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-8">Get in Touch</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mb-4 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-2">{info.title}</h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-slate-600 text-sm mb-1">{detail}</p>
                    ))}
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm mt-3 transition-colors duration-200">
                      {info.action}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <button 
                  onClick={handleDownloadBrochure}
                  className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium flex items-center justify-center space-x-2"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Capabilities Brochure</span>
                </button>
                <button className="w-full bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium flex items-center justify-center space-x-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>Start Live Chat</span>
                </button>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-red-800 mb-2 flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Emergency Service</span>
              </h4>
              <p className="text-red-700 mb-3">
                For urgent inspection needs or critical cold chain emergencies, call our 24/7 hotline:
              </p>
              <p className="text-xl font-bold text-red-800">(555) 911-COLD</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              {/* Company and Service Need */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Company Name"
                  />
                </div>
                <div>
                  <label htmlFor="need" className="block text-sm font-medium text-slate-700 mb-2">
                    What You Need *
                  </label>
                  <select
                    id="need"
                    name="need"
                    required
                    value={formData.need}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  >
                    <option value="">Select your need...</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none"
                  placeholder="Tell us about your needs..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all duration-200 font-semibold flex items-center justify-center space-x-2 transform hover:scale-105"
              >
                <span>Send Message</span>
                <Send className="h-5 w-5" />
              </button>
            </form>

            {/* Form Footer */}
            <div className="mt-6 pt-6 border-t border-slate-200">
              <p className="text-sm text-slate-500 text-center mb-4">
                We'll respond to your inquiry within 24 hours during business days.
              </p>
              <div className="flex justify-center">
                <button 
                  onClick={handleDownloadBrochure}
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center space-x-2 transition-colors duration-200"
                >
                  <Download className="h-4 w-4" />
                  <span>Download our capabilities brochure while you wait</span>
                </button>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;