import React, { useState, useEffect } from 'react';
import { Menu, X, Snowflake } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Locations', href: '#locations' },
    { label: 'Careers', href: '#careers' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Snowflake className="h-6 w-6 text-white" />
            </div>
            <div className={`font-bold text-xl whitespace-nowrap leading-tight transition-colors duration-200 ${isScrolled ? 'text-slate-800' : 'text-white'}`}>
              SRS
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-medium transition-colors duration-200 relative group ${isScrolled ? 'text-slate-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isScrolled ? 'bg-blue-600' : 'bg-white'} transition-all duration-200 group-hover:w-full`}></span>
              </a>
            ))}
            <button className={`px-6 py-2 rounded-lg transition-colors duration-200 font-medium ${isScrolled ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-blue-700 hover:bg-blue-100'}`}>
              Get Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-slate-700" />
            ) : (
              <Menu className="h-6 w-6 text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <nav className="py-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-4 pt-4">
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                  Get Quote
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;