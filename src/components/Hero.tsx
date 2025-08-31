import { ArrowRight, Shield, Clock, Globe, Download, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 pt-16 sm:pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Hero Background Image */}
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-slate-900/85 to-blue-800/90"></div>
        </div>
        {/* Animated particles/snowflakes effect */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-300/40 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12 md:pt-16 pb-24 sm:pb-28">
        <div className="max-w-4xl mx-auto">
          {/* Main Tagline - visually improved */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            America's Trusted<br />
            <span className="text-blue-300">Cold Chain</span>
            <br />
            <span className="text-blue-300">Three Generations</span> <span className="text-white">Strong</span>
          </h1>

          {/* Value Statement */}
          <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Your premier USDA FSIS import inspection and cold storage partner. Three generations of family-owned excellence delivering contract-free service, 24/7 operations, and unmatched reliability in refrigerated logistics.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 font-semibold text-lg flex items-center space-x-2 group transform hover:scale-105">
              <span>Discover Our Services</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-slate-800 transition-all duration-300 font-semibold text-lg flex items-center space-x-2 group transform hover:scale-105">
              <Download className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-200" />
              <span>Download Brochure</span>
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-4 rounded-xl hover:bg-white/20 transition-all duration-300 font-medium flex items-center space-x-2 group">
              <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
              <span>Watch Video</span>
            </button>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-md rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-blue-300 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-white font-semibold text-xl mb-3">24/7 Operations</h3>
              <p className="text-blue-100 leading-relaxed">Round-the-clock service for urgent inspection needs and emergency logistics</p>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-md rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-blue-300 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-white font-semibold text-xl mb-3">USDA Certified</h3>
              <p className="text-blue-100 leading-relaxed">Full compliance with federal inspection standards and regulatory requirements</p>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-md rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-8 w-8 text-blue-300 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-white font-semibold text-xl mb-3">National Network</h3>
              <p className="text-blue-100 leading-relaxed">Strategic locations across major U.S. ports with expanding coverage</p>
            </div>
          </div>
        </div>
      </div>

  {/* Scroll Indicator (behind content, non-interactive) */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-0 pointer-events-none hidden md:block" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;