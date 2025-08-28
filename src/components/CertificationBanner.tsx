import React from 'react';
import { Shield, Award, CheckCircle, Star } from 'lucide-react';

const CertificationBanner = () => {
  const certifications = [
    {
      icon: Shield,
      name: 'USDA FSIS',
      description: 'Certified Import Inspection Facility',
      color: 'text-green-600'
    },
    {
      icon: Award,
      name: 'SQF Certified',
      description: 'Safe Quality Food Program',
      color: 'text-blue-600'
    },
    {
      icon: CheckCircle,
      name: 'ISO 9001:2015',
      description: 'Quality Management System',
      color: 'text-purple-600'
    },
    {
      icon: Star,
      name: 'HACCP',
      description: 'Hazard Analysis Critical Control Points',
      color: 'text-orange-600'
    }
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">
            Certified Excellence in Cold Chain Compliance
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Our certifications ensure the highest standards of food safety, quality management, and regulatory compliance throughout your supply chain.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div 
                key={index}
                className="bg-slate-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md mb-4 group-hover:shadow-lg transition-shadow duration-300`}>
                  <Icon className={`h-8 w-8 ${cert.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{cert.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{cert.description}</p>
              </div>
            );
          })}
        </div>

        {/* Compliance Statement */}
        <div className="mt-12 bg-blue-50 rounded-2xl p-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-slate-800 mb-4">
              Regulatory Compliance You Can Trust
            </h3>
            <p className="text-slate-700 leading-relaxed mb-6">
              With over three generations of experience, SRS maintains the highest standards of regulatory compliance. 
              Our facilities are regularly audited and certified to ensure your products meet all federal requirements 
              for import inspection, storage, and distribution.
            </p>
            <div className="flex flex-wrap justify-center items-center space-x-8 text-sm text-slate-600">
              <span className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>FDA Registered</span>
              </span>
              <span className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>USDA Inspected</span>
              </span>
              <span className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Third-Party Audited</span>
              </span>
              <span className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Temperature Validated</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationBanner;