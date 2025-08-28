import React from 'react';
import { Shield, Warehouse, Truck, Network, ArrowRight, ExternalLink, FileText, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'USDA FSIS Import Inspections',
      description: 'Comprehensive federal inspection services for meat, poultry, and egg products entering the United States with expedited processing.',
      features: ['24/7 inspection availability', 'Rapid processing times', 'Full compliance documentation', 'Expert regulatory guidance', 'Emergency inspection services', 'Digital documentation system'],
      color: 'blue',
      stats: { time: '< 24 hrs', metric: 'Average Processing' }
    },
    {
      icon: Warehouse,
      title: 'Cold Storage Management',
      description: 'State-of-the-art temperature-controlled storage facilities with advanced monitoring systems for optimal product preservation.',
      features: ['Multiple temperature zones', 'Real-time monitoring', 'Inventory management systems', 'Quick turnaround times', 'Blast freezing capabilities', 'Automated storage systems'],
      color: 'emerald',
      stats: { time: '500K+', metric: 'Sq Ft Capacity' }
    },
    {
      icon: Network,
      title: 'Supply Chain Solutions',
      description: 'End-to-end logistics coordination with advanced technology to streamline your cold chain operations nationwide.',
      features: ['Route optimization', 'Multi-modal transportation', 'Real-time tracking', 'Risk management', 'Customs coordination', 'Supply chain analytics'],
      color: 'purple',
      stats: { time: '99.8%', metric: 'On-Time Delivery' }
    },
    {
      icon: Truck,
      title: 'Logistics & Transportation',
      description: 'Specialized transportation services for temperature-sensitive cargo with comprehensive nationwide coverage and emergency response.',
      features: ['Temperature-controlled vehicles', 'GPS tracking', 'Expedited services', 'Cross-docking capabilities', 'Emergency transport', 'White glove delivery'],
      color: 'orange',
      stats: { time: '48 States', metric: 'Coverage Area' }
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
      emerald: 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white',
      purple: 'bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
      orange: 'bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getBorderClasses = (color: string) => {
    const colors = {
      blue: 'border-blue-200 group-hover:border-blue-400',
      emerald: 'border-emerald-200 group-hover:border-emerald-400',
      purple: 'border-purple-200 group-hover:border-purple-400',
      orange: 'border-orange-200 group-hover:border-orange-400'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-6 py-3 mb-6">
            <Shield className="h-5 w-5 text-blue-600" />
            <span className="text-blue-800 font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
            Comprehensive <span className="text-blue-600">Cold Chain</span> Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From USDA inspection to nationwide delivery, we provide integrated services that ensure your products maintain quality and compliance throughout the supply chain.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 border-2 ${getBorderClasses(service.color)}`}
              >
                {/* Stats Badge */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`rounded-2xl p-4 transition-all duration-300 ${getColorClasses(service.color)}`}>
                    <Icon className="h-8 w-8 transition-colors duration-300" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-slate-800">{service.stats.time}</div>
                    <div className="text-sm text-slate-600">{service.stats.metric}</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-slate-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                      <button className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 group/btn flex-1">
                        <span>Learn More</span>
                        <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </button>
                      <button className="flex items-center justify-center space-x-2 border border-slate-300 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors duration-200 group/btn2">
                        <FileText className="h-4 w-4" />
                        <span>Get Quote</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Service Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <Clock className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h4 className="font-bold text-slate-800 mb-2">Emergency Services</h4>
            <p className="text-slate-600 text-sm">24/7 emergency inspection and logistics support for urgent shipments</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <Shield className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <h4 className="font-bold text-slate-800 mb-2">100% Compliant</h4>
            <p className="text-slate-600 text-sm">Full regulatory compliance with USDA, FDA, and customs requirements</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <Network className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <h4 className="font-bold text-slate-800 mb-2">Contract-Free</h4>
            <p className="text-slate-600 text-sm">Flexible service agreements with no long-term contracts required</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 sm:p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Ready to streamline your cold chain?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let our experts design a custom solution that meets your specific import inspection and logistics needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-slate-50 transition-all duration-200 font-semibold transform hover:scale-105 shadow-lg">
                Request Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold transform hover:scale-105">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;