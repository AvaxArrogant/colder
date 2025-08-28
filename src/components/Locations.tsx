import React from 'react';
import { MapPin, Phone, Clock, Mail, Construction } from 'lucide-react';

const Locations = () => {
  const locations = [
    {
      name: 'Houston Facility',
      address: '1234 Port Boulevard, Houston, TX 77011',
      phone: '(713) 555-0123',
      email: 'houston@sorbellorefrigerated.com',
      hours: '24/7 Operations',
      features: ['USDA FSIS Inspection', 'Cold Storage', 'Cross-docking', 'Transportation Hub'],
      status: 'operational'
    },
    {
      name: 'New Jersey Facility',
      address: '5678 Harbor Drive, Newark, NJ 07114',
      phone: '(973) 555-0456',
      email: 'newjersey@sorbellorefrigerated.com',
      hours: '24/7 Operations',
      features: ['USDA FSIS Inspection', 'Cold Storage', 'Import Processing', 'Distribution Center'],
      status: 'operational'
    },
    {
      name: 'Pacific Coast Facility',
      address: 'Coming Soon - West Coast Location',
      phone: 'Contact Main Office',
      email: 'info@sorbellorefrigerated.com',
      hours: 'Planned 24/7 Operations',
      features: ['USDA FSIS Inspection', 'Cold Storage', 'Pacific Import Hub', 'Advanced Technology'],
      status: 'coming-soon'
    }
  ];

  return (
    <section id="locations" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-6 py-3 mb-6">
            <MapPin className="h-5 w-5 text-blue-600" />
            <span className="text-blue-800 font-medium">Our Locations</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
            Strategic <span className="text-blue-600">Nationwide</span> Network
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Positioned at key ports across the United States to serve your import and export needs with maximum efficiency and minimal transit time.
          </p>
        </div>

        {/* Map Placeholder */}
        <div className="mb-16 bg-gradient-to-br from-blue-100 to-slate-100 rounded-2xl p-8 text-center">
          <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-slate-800 mb-2">Interactive Facility Map</h3>
          <p className="text-slate-600 mb-4">
            Explore our strategically located facilities across major U.S. ports
          </p>
          <div className="text-sm text-slate-500 bg-white rounded-lg p-4 max-w-md mx-auto">
            [Interactive map would be integrated here showing Houston, New Jersey, and planned Pacific Coast locations with detailed facility information]
          </div>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border ${
                location.status === 'coming-soon' 
                  ? 'border-orange-200 bg-gradient-to-br from-white to-orange-50' 
                  : 'border-slate-200 hover:-translate-y-2'
              }`}
            >
              {/* Status Badge */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-slate-800">{location.name}</h3>
                {location.status === 'coming-soon' ? (
                  <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Construction className="h-4 w-4" />
                    <span>Coming Soon</span>
                  </div>
                ) : (
                  <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                    Operational
                  </div>
                )}
              </div>

              {/* Contact Information */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-slate-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">{location.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-slate-400 flex-shrink-0" />
                  <span className="text-slate-600">{location.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-slate-400 flex-shrink-0" />
                  <span className="text-slate-600 break-all">{location.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-slate-400 flex-shrink-0" />
                  <span className="text-slate-600">{location.hours}</span>
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-sm font-semibold text-slate-800 mb-3">Services Available:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {location.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex} 
                      className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-md text-center"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6">
                <button 
                  className={`w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 ${
                    location.status === 'coming-soon'
                      ? 'bg-orange-100 text-orange-600 hover:bg-orange-200'
                      : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                  }`}
                >
                  {location.status === 'coming-soon' ? 'Get Updates' : 'Contact Facility'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Coverage Map */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-slate-800 mb-8">Service Coverage Area</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">SE</span>
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Southeast Region</h4>
              <p className="text-slate-600 text-sm">Houston facility serves Gulf Coast ports and southeastern distribution</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">NE</span>
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Northeast Region</h4>
              <p className="text-slate-600 text-sm">New Jersey facility covers East Coast ports and northeast markets</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-orange-600 font-bold text-xl">W</span>
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">West Coast Region</h4>
              <p className="text-slate-600 text-sm">Planned Pacific facility will serve West Coast ports and western markets</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;