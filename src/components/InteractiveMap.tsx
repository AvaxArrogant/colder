import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Users, Warehouse, Truck, Construction } from 'lucide-react';

const InteractiveMap = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locations = [
    {
      id: 'houston',
      name: 'Houston Facility',
      city: 'Houston, TX',
      coordinates: { x: 45, y: 65 }, // Percentage positions on the map
      address: '1234 Port Boulevard, Houston, TX 77011',
      phone: '(713) 555-0123',
      email: 'houston@sorbellorefrigerated.com',
      hours: '24/7 Operations',
      status: 'operational',
      features: ['USDA FSIS Inspection', 'Cold Storage', 'Cross-docking', 'Transportation Hub'],
      stats: {
        capacity: '250,000 sq ft',
        employees: '45+',
        established: '1985'
      },
      description: 'Our flagship facility serving the Gulf Coast region with comprehensive cold chain services.'
    },
    {
      id: 'newjersey',
      name: 'New Jersey Facility',
      city: 'Newark, NJ',
      coordinates: { x: 75, y: 35 },
      address: '5678 Harbor Drive, Newark, NJ 07114',
      phone: '(973) 555-0456',
      email: 'newjersey@sorbellorefrigerated.com',
      hours: '24/7 Operations',
      status: 'operational',
      features: ['USDA FSIS Inspection', 'Cold Storage', 'Import Processing', 'Distribution Center'],
      stats: {
        capacity: '180,000 sq ft',
        employees: '32+',
        established: '1998'
      },
      description: 'Strategic East Coast location serving major northeastern markets and import operations.'
    },
    {
      id: 'pacific',
      name: 'Pacific Coast Facility',
      city: 'Coming Soon',
      coordinates: { x: 15, y: 45 },
      address: 'West Coast Location - Details Coming Soon',
      phone: 'Contact Main Office',
      email: 'info@sorbellorefrigerated.com',
      hours: 'Planned 24/7 Operations',
      status: 'coming-soon',
      features: ['USDA FSIS Inspection', 'Cold Storage', 'Pacific Import Hub', 'Advanced Technology'],
      stats: {
        capacity: '300,000+ sq ft',
        employees: 'Hiring Now',
        established: '2025'
      },
      description: 'Expanding our network to serve the Pacific Coast with state-of-the-art facilities.'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-6 py-3 mb-6">
            <MapPin className="h-5 w-5 text-blue-600" />
            <span className="text-blue-800 font-medium">Interactive Location Map</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
            Strategic <span className="text-blue-600">Nationwide</span> Network
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Click on any location to explore our facilities positioned at key ports across the United States for maximum efficiency and minimal transit time.
          </p>
        </div>

        {/* Interactive Map */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="relative">
            {/* Map Background */}
            <div className="relative h-96 bg-gradient-to-br from-blue-100 to-slate-100 overflow-hidden">
              {/* Simplified US Map Outline */}
              <svg 
                viewBox="0 0 100 60" 
                className="absolute inset-0 w-full h-full"
                style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
              >
                {/* Simplified US outline */}
                <path
                  d="M10,45 L15,40 L20,35 L25,30 L35,25 L45,20 L55,18 L65,20 L75,25 L85,30 L90,35 L88,45 L85,50 L80,52 L70,54 L60,55 L50,54 L40,52 L30,50 L20,48 L10,45 Z"
                  fill="rgba(148, 163, 184, 0.3)"
                  stroke="rgba(148, 163, 184, 0.5)"
                  strokeWidth="0.5"
                />
              </svg>

              {/* Location Markers */}
              {locations.map((location) => (
                <div
                  key={location.id}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
                    selectedLocation?.id === location.id ? 'scale-125 z-20' : 'hover:scale-110 z-10'
                  }`}
                  style={{
                    left: `${location.coordinates.x}%`,
                    top: `${location.coordinates.y}%`
                  }}
                  onClick={() => setSelectedLocation(location)}
                >
                  {/* Marker */}
                  <div className={`relative ${
                    location.status === 'coming-soon' 
                      ? 'text-orange-600' 
                      : selectedLocation?.id === location.id 
                      ? 'text-blue-600' 
                      : 'text-slate-600 hover:text-blue-600'
                  }`}>
                    {location.status === 'coming-soon' ? (
                      <Construction className="h-8 w-8" />
                    ) : (
                      <MapPin className="h-8 w-8" />
                    )}
                    
                    {/* Pulse Animation */}
                    {selectedLocation?.id === location.id && (
                      <div className="absolute inset-0 animate-ping">
                        <MapPin className="h-8 w-8 text-blue-400 opacity-75" />
                      </div>
                    )}
                  </div>

                  {/* Location Label */}
                  <div className={`absolute top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap transition-all duration-300 ${
                    selectedLocation?.id === location.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}>
                    <div className="bg-white px-3 py-1 rounded-lg shadow-lg border border-slate-200">
                      <div className="text-sm font-semibold text-slate-800">{location.name}</div>
                      <div className="text-xs text-slate-600">{location.city}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Instructions */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-md">
              <p className="text-sm text-slate-700 font-medium">Click markers to explore facilities</p>
            </div>
          </div>

          {/* Location Details Panel */}
          {selectedLocation && (
            <div className="p-8 border-t border-slate-200 bg-gradient-to-r from-slate-50 to-blue-50">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Basic Information */}
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-2 rounded-full ${
                      selectedLocation.status === 'coming-soon' 
                        ? 'bg-orange-100 text-orange-600' 
                        : 'bg-blue-100 text-blue-600'
                    }`}>
                      {selectedLocation.status === 'coming-soon' ? (
                        <Construction className="h-6 w-6" />
                      ) : (
                        <MapPin className="h-6 w-6" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800">{selectedLocation.name}</h3>
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        selectedLocation.status === 'coming-soon'
                          ? 'bg-orange-100 text-orange-600'
                          : 'bg-green-100 text-green-600'
                      }`}>
                        {selectedLocation.status === 'coming-soon' ? 'Coming Soon' : 'Operational'}
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-6 leading-relaxed">{selectedLocation.description}</p>

                  {/* Contact Information */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-slate-400" />
                      <span className="text-slate-700">{selectedLocation.address}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-slate-400" />
                      <span className="text-slate-700">{selectedLocation.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-slate-400" />
                      <span className="text-slate-700">{selectedLocation.email}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-slate-400" />
                      <span className="text-slate-700">{selectedLocation.hours}</span>
                    </div>
                  </div>
                </div>

                {/* Facility Details */}
                <div>
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <Warehouse className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                      <div className="text-sm font-semibold text-slate-800">{selectedLocation.stats.capacity}</div>
                      <div className="text-xs text-slate-600">Capacity</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <Users className="h-6 w-6 text-green-600 mx-auto mb-2" />
                      <div className="text-sm font-semibold text-slate-800">{selectedLocation.stats.employees}</div>
                      <div className="text-xs text-slate-600">Team Members</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                      <Clock className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                      <div className="text-sm font-semibold text-slate-800">{selectedLocation.stats.established}</div>
                      <div className="text-xs text-slate-600">Established</div>
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-3">Available Services:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedLocation.features.map((feature, index) => (
                        <div key={index} className="bg-white rounded-lg px-3 py-2 text-sm text-slate-700 shadow-sm border border-slate-200">
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="mt-6">
                    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                      selectedLocation.status === 'coming-soon'
                        ? 'bg-orange-600 text-white hover:bg-orange-700'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}>
                      {selectedLocation.status === 'coming-soon' ? 'Get Updates' : 'Contact Facility'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
            <div className="text-slate-600">Strategic Locations</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">730K+</div>
            <div className="text-slate-600">Total Sq Ft Capacity</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">48</div>
            <div className="text-slate-600">States Served</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;