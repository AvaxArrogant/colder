import React, { useState } from 'react';
import { Ship, FileCheck, Warehouse, Truck, CheckCircle, ArrowRight, Clock, Shield, Thermometer, MapPin } from 'lucide-react';

const ProductJourney = () => {
  const [activeStep, setActiveStep] = useState(0);

  const journeySteps = [
    {
      icon: Ship,
      title: 'Import Arrival',
      subtitle: 'Port Reception',
      description: 'Your cargo arrives at the port and is immediately transferred to our secure, temperature-controlled facility with real-time monitoring.',
      details: [
        'Immediate temperature verification upon arrival',
        'Secure facility transfer with chain of custody',
        'Real-time arrival notifications to stakeholders',
        'Initial documentation review and processing'
      ],
      duration: '2-4 hours',
      temperature: 'Maintained',
      status: 'Secure Transfer'
    },
    {
      icon: FileCheck,
      title: 'USDA FSIS Inspection',
      subtitle: 'Federal Compliance',
      description: 'Our certified inspectors conduct comprehensive federal compliance inspections according to USDA FSIS standards with expedited processing.',
      details: [
        'Thorough product examination by certified inspectors',
        'Complete documentation verification and validation',
        'Federal compliance certification and approval',
        'Expedited processing for urgent shipments'
      ],
      duration: '4-24 hours',
      temperature: 'Controlled',
      status: 'Under Inspection'
    },
    {
      icon: Warehouse,
      title: 'Cold Storage',
      subtitle: 'Optimal Preservation',
      description: 'Products are stored in our state-of-the-art temperature-controlled environment with continuous monitoring and inventory management.',
      details: [
        'Multiple temperature zones for different product types',
        '24/7 automated monitoring and alert systems',
        'Advanced inventory management and tracking',
        'Quality preservation protocols and procedures'
      ],
      duration: 'As needed',
      temperature: 'Multi-zone',
      status: 'Stored Safely'
    },
    {
      icon: Truck,
      title: 'Transportation',
      subtitle: 'Logistics Coordination',
      description: 'Coordinated logistics ensure your products reach their final destination while maintaining complete cold chain integrity.',
      details: [
        'Temperature-controlled vehicles with GPS tracking',
        'Real-time monitoring and route optimization',
        'Flexible scheduling and delivery options',
        'Cross-docking capabilities for efficiency'
      ],
      duration: '1-5 days',
      temperature: 'Maintained',
      status: 'In Transit'
    },
    {
      icon: CheckCircle,
      title: 'Delivery & Confirmation',
      subtitle: 'Mission Complete',
      description: 'Final delivery with complete documentation package and proof of maintained cold chain throughout the entire process.',
      details: [
        'Confirmed delivery with digital signature',
        'Complete temperature logs and documentation',
        'Comprehensive documentation package provided',
        'Customer satisfaction follow-up and support'
      ],
      duration: 'Complete',
      temperature: 'Verified',
      status: 'Delivered'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-6 py-3 mb-6">
            <ArrowRight className="h-5 w-5 text-blue-600" />
            <span className="text-blue-800 font-medium">Your Product's Journey</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
            From <span className="text-blue-600">Port to Destination</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Follow your products through our comprehensive cold chain process, where every step is carefully managed to ensure compliance, quality, and efficiency.
          </p>
        </div>

        {/* Journey Visualization */}
        <div className="relative mb-16">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 transform -translate-y-1/2 hidden lg:block">
            <div 
              className="h-full bg-blue-600 transition-all duration-1000 ease-out"
              style={{ width: `${((activeStep + 1) / journeySteps.length) * 100}%` }}
            ></div>
          </div>

          {/* Step Indicators */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              const isCompleted = activeStep > index;
              
              return (
                <div
                  key={index}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    isActive ? 'transform scale-105' : ''
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Step Circle */}
                  <div className={`relative z-10 w-20 h-20 mx-auto rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25' 
                      : isCompleted
                      ? 'bg-green-600 text-white'
                      : 'bg-white border-2 border-slate-300 text-slate-600 hover:border-blue-300'
                  }`}>
                    <Icon className="h-8 w-8" />
                  </div>

                  {/* Step Info */}
                  <div className="text-center mt-4">
                    <h3 className={`font-bold text-lg mb-1 transition-colors duration-300 ${
                      isActive ? 'text-blue-600' : 'text-slate-800'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-2">{step.subtitle}</p>
                    
                    {/* Quick Stats */}
                    <div className="space-y-1 text-xs text-slate-500">
                      <div className="flex items-center justify-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{step.duration}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-1">
                        <Thermometer className="h-3 w-3" />
                        <span>{step.temperature}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Step Details */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Step Information */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-blue-600 text-white rounded-full p-3">
                  {React.createElement(journeySteps[activeStep].icon, { className: "h-8 w-8" })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">{journeySteps[activeStep].title}</h3>
                  <p className="text-slate-600">{journeySteps[activeStep].subtitle}</p>
                </div>
              </div>
              
              <p className="text-slate-700 mb-6 leading-relaxed text-lg">
                {journeySteps[activeStep].description}
              </p>

              {/* Status Indicators */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 text-center">
                  <Clock className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-slate-800">{journeySteps[activeStep].duration}</div>
                  <div className="text-xs text-slate-600">Duration</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <Thermometer className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-slate-800">{journeySteps[activeStep].temperature}</div>
                  <div className="text-xs text-slate-600">Temperature</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <Shield className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-slate-800">{journeySteps[activeStep].status}</div>
                  <div className="text-xs text-slate-600">Status</div>
                </div>
              </div>
            </div>

            {/* Step Details */}
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Process Details:</h4>
              <ul className="space-y-3">
                {journeySteps[activeStep].details.map((detail, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8">
                <button
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                  className="flex items-center space-x-2 px-4 py-2 text-slate-600 hover:text-blue-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowRight className="h-4 w-4 rotate-180" />
                  <span>Previous</span>
                </button>
                
                <div className="text-sm text-slate-600">
                  Step {activeStep + 1} of {journeySteps.length}
                </div>
                
                <button
                  onClick={() => setActiveStep(Math.min(journeySteps.length - 1, activeStep + 1))}
                  disabled={activeStep === journeySteps.length - 1}
                  className="flex items-center space-x-2 px-4 py-2 text-slate-600 hover:text-blue-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>Next</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Journey Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md text-center border border-slate-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">99.8%</div>
            <div className="text-slate-600">On-Time Delivery</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center border border-slate-200">
            <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-slate-600">Compliance Rate</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center border border-slate-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-slate-600">Monitoring</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center border border-slate-200">
            <div className="text-3xl font-bold text-orange-600 mb-2">&lt;24hr</div>
            <div className="text-slate-600">Avg Processing</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductJourney;