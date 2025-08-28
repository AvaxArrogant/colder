import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      quote: "SRS has been our trusted cold chain partner for over 8 years. Their USDA inspection process is seamless, and their 24/7 availability has saved us countless times during urgent shipments. The family-owned approach really shows in their personal attention to detail.",
      author: "Maria Rodriguez",
      title: "Supply Chain Director",
      company: "Global Foods Import Co.",
      logo: "GF",
      rating: 5,
      location: "Houston, TX"
    },
    {
      id: 2,
      quote: "What sets SRS apart is their contract-free approach and genuine partnership mentality. They treat our products like their own family business depends on it. The temperature monitoring and compliance documentation is always perfect.",
      author: "David Chen",
      title: "Operations Manager",
      company: "Pacific Seafood Distributors",
      logo: "PSD",
      rating: 5,
      location: "Newark, NJ"
    },
    {
      id: 3,
      quote: "Three generations of excellence really means something at SRS. Their expertise in USDA FSIS regulations and cold storage management has streamlined our entire import process. We've never had a compliance issue since partnering with them.",
      author: "Jennifer Thompson",
      title: "Compliance Officer",
      company: "Premium Meat Imports LLC",
      logo: "PMI",
      rating: 5,
      location: "Houston, TX"
    },
    {
      id: 4,
      quote: "The speed and reliability of SRS's inspection services is unmatched. When we have emergency shipments, they respond immediately. Their team understands the urgency of our business and always delivers on their promises.",
      author: "Robert Martinez",
      title: "Logistics Coordinator",
      company: "Fresh Express International",
      logo: "FEI",
      rating: 5,
      location: "Newark, NJ"
    },
    {
      id: 5,
      quote: "SRS's technology integration and real-time monitoring gives us complete visibility into our cold chain. The documentation they provide is comprehensive and always audit-ready. It's like having an extension of our own team.",
      author: "Sarah Kim",
      title: "Quality Assurance Manager",
      company: "Arctic Foods Distribution",
      logo: "AFD",
      rating: 5,
      location: "Houston, TX"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-6 py-3 mb-6">
            <Star className="h-5 w-5 text-blue-600" />
            <span className="text-blue-800 font-medium">Client Testimonials</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
            What Our <span className="text-blue-600">Partners</span> Say
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Hear from industry leaders who trust SRS with their most critical cold chain operations and USDA inspection needs.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="relative h-96 flex items-center">
              {/* Testimonial Content */}
              <div className="w-full px-8 sm:px-12 lg:px-16 py-8">
                <div className="max-w-4xl mx-auto text-center">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="h-12 w-12 text-blue-600 mx-auto opacity-50" />
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg sm:text-xl lg:text-2xl text-slate-700 leading-relaxed mb-8 font-medium">
                    "{testimonials[currentSlide].quote}"
                  </blockquote>

                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center justify-center space-x-4">
                    {/* Company Logo/Initial */}
                    <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                      {testimonials[currentSlide].logo}
                    </div>
                    
                    <div className="text-left">
                      <div className="font-bold text-slate-800 text-lg">
                        {testimonials[currentSlide].author}
                      </div>
                      <div className="text-slate-600">
                        {testimonials[currentSlide].title}
                      </div>
                      <div className="text-blue-600 font-medium">
                        {testimonials[currentSlide].company}
                      </div>
                      <div className="text-slate-500 text-sm">
                        {testimonials[currentSlide].location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-slate-50 transition-colors duration-200 z-10"
              >
                <ChevronLeft className="h-6 w-6 text-slate-600" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-slate-50 transition-colors duration-200 z-10"
              >
                <ChevronRight className="h-6 w-6 text-slate-600" />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="bg-slate-50 px-8 py-4">
              <div className="flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide 
                        ? 'bg-blue-600 w-8' 
                        : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-slate-600 font-medium">Satisfied Clients</div>
            <div className="text-slate-500 text-sm">Across all industries</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">4.9/5</div>
            <div className="text-slate-600 font-medium">Average Rating</div>
            <div className="text-slate-500 text-sm">Based on client feedback</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">25+</div>
            <div className="text-slate-600 font-medium">Years Experience</div>
            <div className="text-slate-500 text-sm">Three generations strong</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Ready to join our satisfied clients?</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Experience the SRS difference with our contract-free, family-owned approach to cold chain excellence.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold transform hover:scale-105">
            Start Your Partnership
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;