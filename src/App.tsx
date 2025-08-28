import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CertificationBanner from './components/CertificationBanner';
import About from './components/About';
import Services from './components/Services';
import ProductJourney from './components/ProductJourney';
import Process from './components/Process';
import InteractiveMap from './components/InteractiveMap';
import Locations from './components/Locations';
import Testimonials from './components/Testimonials';
import News from './components/News';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LiveChat from './components/LiveChat';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <Hero />
      <CertificationBanner />
      <About />
      <Services />
      <ProductJourney />
      <Process />
      <InteractiveMap />
      <Locations />
      <Testimonials />
      <News />
      <Careers />
      <Contact />
      <Footer />
      <LiveChat />
    </div>
  );
}

export default App;