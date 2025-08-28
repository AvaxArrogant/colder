import React from 'react';
import { Snowflake, Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    services: [
      { label: 'USDA FSIS Inspections', href: '#services' },
      { label: 'Cold Storage', href: '#services' },
      { label: 'Supply Chain Solutions', href: '#services' },
      { label: 'Transportation', href: '#services' }
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Process', href: '#process' },
      { label: 'Locations', href: '#locations' },
      { label: 'Careers', href: '#careers' }
    ],
    resources: [
      { label: 'Compliance Center', href: '#' },
      { label: 'Industry News', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'FAQs', href: '#' }
    ]
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Snowflake className="h-6 w-6 text-white" />
              </div>
              <div className="text-white font-bold text-xl">
                Sorbello Refrigerated Services
              </div>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Three generations of excellence in refrigerated logistics and USDA FSIS import inspection services. Driven by dedication, defined by distinction.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-slate-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-slate-300">info@sorbellorefrigerated.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 mt-1" />
                <span className="text-slate-300">1234 Port Boulevard<br />Houston, TX 77011</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Certifications & Compliance</h4>
            <div className="flex flex-wrap justify-center items-center space-x-8 text-slate-400">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-slate-800 rounded border border-slate-700 flex items-center justify-center">
                  <span className="text-xs font-bold">USDA</span>
                </div>
                <span>USDA FSIS Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-slate-800 rounded border border-slate-700 flex items-center justify-center">
                  <span className="text-xs font-bold">ISO</span>
                </div>
                <span>ISO 9001:2015</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-slate-800 rounded border border-slate-700 flex items-center justify-center">
                  <span className="text-xs font-bold">SQF</span>
                </div>
                <span>SQF Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © 2024 Sorbello Refrigerated Services LLC. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-4 text-sm">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <span className="text-slate-600">•</span>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;