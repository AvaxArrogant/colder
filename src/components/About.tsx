import React from 'react';
import { Users, Heart, Target, TrendingUp, Shield, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Users,
      title: 'Family',
      description: 'Three generations of dedication to building lasting relationships with our clients and community.'
    },
    {
      icon: Heart,
      title: 'Respect',
      description: 'Treating every client, partner, and team member with dignity and professional courtesy.'
    },
    {
      icon: Target,
      title: 'Commitment',
      description: 'Unwavering dedication to meeting deadlines and exceeding expectations in every project.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Improvement',
      description: 'Always evolving our processes and technology to deliver better results for our clients.'
    },
    {
      icon: Shield,
      title: 'Safety & Quality',
      description: 'Maintaining the highest standards in food safety, regulatory compliance, and service quality.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-6 py-3 mb-6">
            <Award className="h-5 w-5 text-blue-600" />
            <span className="text-blue-800 font-medium">About Sorbello Refrigerated Services</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
            Three Generations of <span className="text-blue-600">Excellence</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Built on family values and industry expertise, SRS has grown from a local operation into a trusted nationwide partner for refrigerated logistics and USDA inspection services.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-800">Our Legacy</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Founded as a family business, Sorbello Refrigerated Services has built its reputation on unwavering commitment to quality and service. What started as a local refrigerated storage operation has evolved into a comprehensive cold chain logistics provider.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Today, we operate as one of the premier USDA FSIS import inspection facilities in the United States, serving importers and exporters who demand the highest standards of compliance, efficiency, and reliability.
            </p>
            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-blue-600">
              <p className="text-slate-700 italic">
                "Our approach is simple: treat every client's cargo as if it were our own family business. No contracts, no complications—just exceptional service built on trust and results."
              </p>
              <p className="text-slate-800 font-semibold mt-2">— SRS Leadership Team</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-2xl">
            <h4 className="text-2xl font-bold text-slate-800 mb-6">By the Numbers</h4>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">3</div>
                <div>
                  <div className="font-semibold text-slate-800">Generations</div>
                  <div className="text-slate-600 text-sm">of family leadership</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">24</div>
                <div>
                  <div className="font-semibold text-slate-800">Hour Operations</div>
                  <div className="text-slate-600 text-sm">365 days a year</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">∞</div>
                <div>
                  <div className="font-semibold text-slate-800">Contract-Free Service</div>
                  <div className="text-slate-600 text-sm">Flexibility you can trust</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div>
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="bg-blue-100 group-hover:bg-blue-600 transition-colors duration-300 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 text-center mb-3">{value.title}</h4>
                  <p className="text-slate-600 text-center leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;