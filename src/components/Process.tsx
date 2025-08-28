import React, { useState } from 'react';
import { Ship, FileCheck, Warehouse, Truck, CheckCircle, ArrowRight } from 'lucide-react';

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: Ship,
      title: 'Import Arrival',
      description: 'Your cargo arrives at the port and is immediately transferred to our secure, temperature-controlled facility.',
      details: [
        'Real-time arrival notifications',
        'Immediate temperature verification',
        'Secure facility transfer',
        'Documentation review begins'
      ]
    },
    {
      icon: FileCheck,
      title: 'USDA FSIS Inspection',
      description: 'Our certified inspectors conduct comprehensive federal compliance inspections according to USDA FSIS standards.',
      details: [
        'Thorough product examination',
        'Documentation verification',
        'Compliance certification',
        'Expedited processing available'
      ]
    },
    {
      icon: Warehouse,
      title: 'Cold Storage',
      description: 'Products are stored in our state-of-the-art temperature-controlled environment with continuous monitoring.',
      details: [
        'Multiple temperature zones',
        '24/7 monitoring systems',
        'Inventory management',
        'Quality preservation protocols'
      ]
    },
    {
      icon: Truck,
      title: 'Transportation',
      description: 'Coordinated logistics ensure your products reach their final destination maintaining cold chain integrity.',
      details: [
        'Temperature-controlled vehicles',
        'GPS tracking and monitoring',
        'Flexible scheduling options',
        'Cross-docking capabilities'
      ]
    },
    {
      icon: CheckCircle,
      title: 'Delivery & Confirmation',
      description: 'Final delivery with complete documentation and proof of maintained cold chain throughout the process.',
      details: [
        'Delivery confirmation',
        'Temperature logs provided',
        'Complete documentation package',
        'Customer satisfaction follow-up'
      ]
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-6 py-3 mb-6">
            <ArrowRight className="h-5 w-5 text-blue-600" />
            <span className="text-blue-800 font-medium">Our Process</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
            How <span className="text-blue-600">We Work</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From port to destination, every step is carefully managed to ensure compliance, quality, and efficiency in your cold chain logistics.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Interactive Steps */}
          <div className="space-y-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              
              return (
                <div
                  key={index}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border-2 ${
                    isActive 
                      ? 'bg-blue-50 border-blue-200 shadow-lg' 
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`rounded-full p-3 transition-all duration-300 ${
                      isActive ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold transition-colors duration-300 ${
                        isActive ? 'text-blue-600' : 'text-slate-800'
                      }`}>
                        Step {index + 1}: {step.title}
                      </h3>
                      <p className="text-slate-600 text-sm mt-1">{step.description}</p>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                      isActive 
                        ? 'bg-blue-600 border-blue-600' 
                        : 'border-slate-300'
                    }`}>
                      {isActive && <div className="w-2 h-2 bg-white rounded-full mx-auto mt-1"></div>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Step Details */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-blue-600 text-white rounded-full p-3">
                  {React.createElement(steps[activeStep].icon, { className: "h-8 w-8" })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">{steps[activeStep].title}</h3>
                  <p className="text-slate-600">Step {activeStep + 1} of {steps.length}</p>
                </div>
              </div>
              
              <p className="text-slate-700 mb-6 leading-relaxed">
                {steps[activeStep].description}
              </p>

              <h4 className="text-lg font-semibold text-slate-800 mb-4">Key Features:</h4>
              <ul className="space-y-3">
                {steps[activeStep].details.map((detail, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-slate-700">{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Progress Bar */}
              <div className="mt-8">
                <div className="bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-blue-600 h-full transition-all duration-500 ease-out"
                    style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                  ></div>
                </div>
                <p className="text-sm text-slate-600 mt-2 text-center">
                  {activeStep + 1} of {steps.length} steps
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Ready to experience our process?</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our streamlined process can benefit your import operations.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold flex items-center space-x-2 mx-auto">
            <span>Start Your Process</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;