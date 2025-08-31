import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Users, Warehouse, Construction } from 'lucide-react';

type Location = {
  id: string;
  name: string;
  city: string;
  coordinates: { x: number; y: number };
  address: string;
  phone: string;
  email: string;
  hours: string;
  status: string;
  features: string[];
  stats: {
    capacity: string;
    employees: string;
    established: string;
  };
  description: string;
};

const InteractiveMap = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const locations: Location[] = [
    {
      id: 'houston',
      name: 'Houston Facility',
      city: 'Houston, TX',
      coordinates: { x: 60, y: 72 }, // Texas Gulf Coast
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
      coordinates: { x: 93, y: 34 }, // Northeast corridor
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
      id: 'losangeles',
      name: 'Los Angeles Facility',
      city: 'Long Beach, CA',
  coordinates: { x: 21, y: 61 }, // Southern California (nudged right/inland for coastline alignment)
      address: '2468 Pacific Coast Highway, Long Beach, CA 90802',
      phone: '(562) 555-0789',
      email: 'losangeles@sorbellorefrigerated.com',
      hours: '24/7 Operations',
      status: 'operational',
      features: ['USDA FSIS Inspection', 'Cold Storage', 'Pacific Import Hub', 'Advanced Technology'],
      stats: {
        capacity: '220,000 sq ft',
        employees: '38+',
        established: '2015'
      },
      description: 'West Coast gateway serving the Pacific trade corridor with cutting-edge cold storage solutions.'
    },
    {
      id: 'miami',
      name: 'Miami Facility',
      city: 'Miami, FL',
      coordinates: { x: 86, y: 88 }, // South Florida
      address: '3456 Biscayne Boulevard, Miami, FL 33137',
      phone: '(305) 555-0321',
      email: 'miami@sorbellorefrigerated.com',
      hours: '24/7 Operations',
      status: 'operational',
      features: ['USDA FSIS Inspection', 'Cold Storage', 'Caribbean Trade Hub', 'Cruise Line Services'],
      stats: {
        capacity: '160,000 sq ft',
        employees: '28+',
        established: '2010'
      },
      description: 'Strategic Southeast location serving Caribbean and South American trade routes.'
    },
    {
      id: 'chicago',
      name: 'Chicago Facility',
      city: 'Coming Soon',
      coordinates: { x: 70, y: 38 }, // Illinois / Chicago area
      address: 'Midwest Location - Details Coming Soon',
      phone: 'Contact Main Office',
      email: 'info@sorbellorefrigerated.com',
      hours: 'Planned 24/7 Operations',
      status: 'coming-soon',
      features: ['USDA FSIS Inspection', 'Cold Storage', 'Midwest Distribution Hub', 'Rail Transport Access'],
      stats: {
        capacity: '280,000+ sq ft',
        employees: 'Hiring Now',
        established: '2025'
      },
      description: 'Expanding to the heart of America\'s transportation network for enhanced midwest coverage.'
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
              {/* Complete SimpleMaps US SVG */}
              <svg 
                viewBox="0 0 1000 589" 
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid meet"
                style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
              >
                <defs>
                  <style type="text/css">
                    {`path { fill-rule: evenodd; }`}
                  </style>
                </defs>
                
                {/* US states (subset shown, full dataset inlined below) */}
                <path id="MA" d="m 956.31178,153.05085 -0.29118,-0.19412 0,0.29119 0.29118,-0.0971 z m -2.91189,-2.6207 0.67944,-0.29119 0,-0.38825 -0.67944,0.67944 z m 12.03583,-7.57092 -0.0971,-1.35889 -0.19412,-0.7765 0.29119,2.13539 z m -42.41659,-9.9975 -0.67944,0.29119 -5.5326,1.65007 -1.94126,0.67944 -2.23245,0.67944 -0.7765,0.29119 0,0.29119 0.29118,5.04728 0.29119,4.65903 0.29119,4.27078 0.48532,0.29119 1.74714,-0.48532 7.86211,-2.32951 0.19412,0.48531 13.97709,-5.33847 0.0971,0.19413 1.26182,-0.48532 4.4649,-1.74713 4.27078,5.14434 0,0 0.58238,-0.48531 0.29119,-1.45595 -0.0971,2.32952 0,0 0.97063,0 0.29119,1.16475 0.87357,1.65008 0,0 4.56197,-5.5326 3.78546,1.26182 0.87357,-1.94126 6.21204,-3.30015 -2.62071,-5.14435 0.67945,3.30015 -3.20309,2.42658 -3.59133,0.29119 -7.18267,-7.66799 -3.20309,-4.85315 3.20309,-3.39721 -3.30015,-0.19413 -1.35888,-3.20308 -0.0971,-0.19413 -5.53259,6.01791 -12.22996,4.07666 -3.97959,1.26182 0,0 z" fill="rgba(59, 130, 246, 0.08)" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1" />
                
                <path id="TX" d="m 573.98015,536.93549 -4.65902,-17.56842 0,3.30015 4.65902,14.26827 z m -1.06769,-30.86607 -3.30015,6.21204 -0.38825,2.03833 3.6884,-8.25037 z m 2.6207,-4.56196 3.10602,-4.07666 -2.23245,1.35889 -0.87357,2.71777 z m 10.96814,-9.90044 -7.27974,3.78546 2.03833,-0.38825 5.24141,-3.39721 z m 0.97063,-1.35889 2.03832,-1.65007 -0.7765,0.19413 -1.26182,1.45594 z m -115.11686,-162.87191 -0.67944,-0.0971 -3.30015,91.0452 -19.2185,-0.87357 -30.76901,-1.74713 -12.32701,-0.87357 2.42658,4.75609 0.0971,0.0971 10.48282,10.48281 6.01791,7.08561 7.95917,5.92085 5.62967,10.28869 2.13538,10.77401 4.56197,3.00895 3.59134,3.97959 5.14434,1.8442 7.47386,4.75609 3.39721,1.26183 4.65903,-4.65903 1.45595,-4.95022 2.42658,-4.7561 7.57092,-3.00895 2.91189,1.45594 8.44449,0.67945 7.66799,4.75609 5.24141,0.97063 -1.45595,2.71777 3.00896,1.94126 2.81483,3.39721 0.58238,3.59133 1.8442,2.42658 4.27077,10.28869 4.27078,3.59134 3.30015,5.43553 4.17371,4.27078 1.8442,0.58238 1.55301,11.06519 4.56197,2.52365 0.19412,3.49427 1.16476,-0.29119 7.95918,9.70631 3.97959,0.87357 5.04728,3.00896 7.76505,0 5.62966,3.10601 6.69735,-1.45594 -3.00895,-2.81483 -2.71777,-8.1533 -1.06769,-7.08561 -1.55301,-2.32952 0.67944,-4.75609 -2.03833,-0.19413 -2.71777,-4.4649 3.10602,3.30015 3.59134,-1.26182 1.94126,-5.14435 -3.88252,-5.24141 5.82378,0.67944 2.71777,-4.17371 -0.38825,-1.45595 2.42658,-3.20308 -0.58238,2.81483 2.71777,-2.13539 -1.0677,-3.78546 3.49427,1.8442 4.46491,-2.52364 -4.36784,-4.56197 2.71776,1.0677 5.04729,0.29119 6.60029,-1.45595 7.3768,-4.95022 4.4649,-3.6884 0.67944,-2.71777 2.71777,-2.81483 -1.45595,-4.65903 0.29119,-2.91189 4.85316,-2.13539 -0.38826,5.14435 2.9119,0 -3.20308,2.71776 12.90939,-6.79441 2.13539,-0.0971 1.35888,-6.21204 0.38826,0 1.45594,-3.59133 0.67944,-11.0652 0.87357,-4.4649 -2.52364,-7.95918 -3.10602,-5.43553 -0.0971,-2.62071 -3.20309,-4.4649 -1.94126,-18.73318 -0.0971,-2.32952 -0.19413,-2.42658 -0.58238,-8.54155 -5.82378,0.19413 -1.45595,-1.55301 -0.29119,-0.0971 -0.0971,0 -3.78546,-0.67944 -4.36784,-2.81483 -4.85316,-2.03832 -9.12393,2.6207 -2.42658,-0.58238 -3.00896,1.16476 -3.6884,3.00895 -9.90044,-4.65902 -3.10601,4.27077 -4.56197,-1.65007 -4.85316,-3.10602 -2.6207,2.23245 -2.52364,0.0971 0,-1.84419 -6.79442,-3.20309 -2.71777,1.26182 -1.35888,-1.55301 -7.47386,-0.7765 -5.72673,-5.24141 -0.87356,1.74714 -4.17372,-0.19413 -3.88252,-3.6884 -1.74714,-5.82379 -0.29119,-33.19558 -24.84816,-0.29119 -23.48927,-0.58238 -0.58238,0 z" fill="rgba(59, 130, 246, 0.1)" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="1" />
                
                <path id="CA" d="m 206.01387,363.77489 0.38825,2.13539 0,0.38825 -0.38825,-2.52364 z m -14.26828,-8.34743 0.67944,1.45595 0.38825,-0.0971 -1.06769,-1.35888 z m 16.98604,-0.29119 0.29119,2.52364 1.74714,1.26182 -2.03833,-3.78546 z m -11.74463,-13.78296 -1.0677,-0.29119 0.87357,0.38825 0.19413,-0.0971 z m -10.77401,-2.9119 -2.6207,1.55301 0.67944,0.67945 1.94126,-2.23246 z m -5.04728,-1.8442 -0.19413,0.77651 0.87357,0.19413 -0.67944,-0.97064 z m 8.54155,1.94127 4.27078,2.42658 0.77651,-0.67945 -5.04729,-1.74713 z m -33.09852,-85.51261 -0.0971,0.0971 0.0971,-0.0971 0,0 z m 10.38575,0.48531 -0.0971,-0.29119 0,0.38826 0.0971,-0.0971 z m 56.00542,-73.6709 -3.78546,-0.97064 -41.54301,-11.45344 -15.43304,-4.65903 0,0.38825 -0.87357,9.60925 -4.07665,11.35638 -6.79442,8.44449 -0.19412,4.27078 3.30014,5.92085 1.65008,7.76505 -2.32952,6.3091 0.38825,6.30911 -1.16475,2.6207 3.97958,8.63862 2.52364,3.30015 -0.19412,9.41512 6.01791,5.72672 3.49427,-5.82378 3.78547,3.00895 1.45594,-1.35888 -5.24141,0.97063 -0.0971,4.95022 1.0677,6.21204 -2.9119,-2.81483 -1.65007,-3.78546 -0.48532,5.2414 1.35889,10.38576 5.43553,6.69735 -3.59133,4.65903 0.58237,5.92085 3.88253,6.01792 6.79442,18.63612 2.13539,1.16475 -0.67945,12.9094 1.0677,1.55301 14.55947,5.24141 4.4649,4.75609 1.55301,3.10602 4.27078,2.42658 4.65903,0.87357 1.94126,5.33847 3.88252,1.8442 5.82379,6.89148 5.43554,9.02687 -0.38826,8.34743 3.00896,3.97958 39.69882,3.88253 0,0 3.49427,-0.19413 1.55301,-4.27077 -3.00896,-2.23246 0.0971,-7.0856 1.74713,-0.38826 3.49427,-8.54155 2.13539,-3.97959 5.43554,-3.20308 -3.00896,-4.07665 -3.39721,-9.12394 0.19413,-2.42657 0,-0.0971 -2.52364,-3.39721 -7.76505,-10.38575 -15.04479,-21.15976 -20.96563,-30.08957 -11.8417,-16.40366 -11.45345,-16.50074 13.20058,-56.00542 0.87357,-3.68839 z" fill="rgba(59, 130, 246, 0.1)" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="1" />
                
                <path id="FL" d="m 854.6867,535.28542 -0.19413,0 0.0971,0.0971 0.0971,-0.0971 z m -0.87357,-0.0971 0,0.0971 0.0971,0 -0.0971,-0.0971 z m 0.19413,-0.0971 0,-0.0971 0,0.0971 0,0 z m -13.20059,1.45594 0,0 0,0.0971 0,-0.0971 z m -0.19412,0.0971 0,-0.0971 0,0.0971 0,0 z m 0.0971,-0.0971 0,0 0,0 0,0 z m -0.97063,0.0971 -0.0971,0 0,0.0971 0.0971,-0.0971 z m 27.56592,-6.11498 -0.0971,0 0.0971,0.19412 0,-0.19412 z m 2.62071,-0.67944 0,-0.19413 -0.19413,0.29119 0.19413,-0.0971 z m -0.97063,-0.19413 -0.38826,-0.38825 -0.0971,0.0971 0.48532,0.29119 z m -0.29119,0.77651 -1.16476,-1.45595 0.67944,1.26182 0.48532,0.19413 z m 9.22099,-5.72673 0,0.38825 0.19413,-0.19412 -0.19413,-0.19413 z m 1.35889,-0.97063 0.29119,-0.48532 -0.38826,0.38826 0.0971,0.0971 z m 0.29119,-0.97063 -0.0971,0 0,0.0971 0.0971,-0.0971 z m -1.74714,-0.29119 -0.0971,-0.0971 0.0971,0.0971 0,0 z m 0.87357,-1.45595 -0.0971,-0.0971 0,0.19413 0.0971,-0.0971 z m -2.62071,-0.0971 -0.0971,-0.0971 0.0971,0.0971 0,0 z m 3.30015,-2.23245 -0.19413,0.0971 0.29119,0.0971 -0.0971,-0.19412 z m 0.38825,0 -0.19412,-0.19413 0.0971,0.29119 0.0971,-0.0971 z m -0.67944,-0.19413 -0.0971,-0.0971 0,0.19412 0.0971,-0.0971 z m 3.59134,-0.67944 0,-0.0971 -0.19413,0.38825 0.19413,-0.29119 z m -4.07665,0.38825 -0.19413,0 0.19413,0.0971 0,-0.0971 z m 2.03832,-1.16476 -0.29119,0 -0.0971,0.0971 0.38825,-0.0971 z m 0.77651,-0.48531 0,0 -0.0971,0 0.0971,0 z m -8.15331,0.38825 0,-0.19412 -0.0971,0.19412 0.0971,0 z m 0.87357,-0.29119 -0.29119,0 0.29119,0.58238 0,-0.58238 z m -2.32951,0.0971 0,-0.58238 -0.48532,0.0971 0.48532,0.48532 z m -1.35889,-0.97064 0.48532,0.48532 0,-0.19413 -0.48532,-0.29119 z m 14.26828,0.58238 -1.74713,0.77651 0.58237,0.0971 1.16476,-0.87357 z m -13.58883,-0.87356 -0.58238,0 0,0.19412 0.58238,-0.19412 z m 15.33597,-4.85316 0.0971,-0.48532 0.0971,-1.26182 -0.19412,1.74714 z m 0.0971,-5.43554 -0.38825,-0.97063 -0.19413,0.38826 0.58238,0.58237 z m -22.42158,2.42658 -0.19413,0.29119 0.48532,0.0971 -0.29119,-0.38825 z m -1.8442,-0.87357 -0.87357,0.29119 0.67945,0.0971 0.19412,-0.38826 z m -1.94126,0.19413 0,-0.29119 -0.0971,0.0971 0.0971,0.19413 z m -2.03833,-0.0971 -0.58238,0.38825 0.77651,0.38825 -0.19413,-0.7765 z m 2.71777,0.0971 -0.0971,-0.29119 -0.48532,-0.0971 0.58238,0.38825 z m -12.71527,-9.51219 -0.58238,0.29119 1.16476,0.38826 -0.58238,-0.67945 z m -2.32951,-3.10602 -0.77651,-1.16475 0.29119,0.87357 0.48532,0.29118 z m 3.00895,1.94127 -1.35888,-3.10602 -0.97063,-0.29119 2.32951,3.39721 z m -3.88252,-3.88253 -0.29119,-0.7765 -0.19413,-0.48532 0.48532,1.26182 z m -8.05624,-10.774 -1.74714,-1.26182 0.67945,0.67944 1.06769,0.58238 z m 43.6784,-6.50323 -7.0856,-11.8417 -0.38826,0 7.47386,11.8417 z m -49.01687,-18.92731 -0.29119,-0.0971 0.29119,0.19412 0,-0.0971 z m -0.58238,-0.67944 -0.0971,0.0971 0.0971,0.0971 0,-0.19412 z m -0.67944,-0.97063 0,-0.0971 -0.0971,0.0971 0.0971,0 z m 0.38825,-0.38826 0.29119,0.19413 0,-0.19413 -0.29119,0 z m 0.58238,-0.38825 -0.38825,0.0971 0.0971,0 0.29119,-0.0971 z m -0.67944,-0.0971 -0.29119,-0.29119 0.0971,0.0971 0.19413,0.19413 z m -0.67944,-1.0677 -0.19413,0 0.29119,0.0971 -0.0971,-0.0971 z m 0.67944,-1.16475 -0.38826,0 -0.0971,0.0971 0.48532,-0.0971 z m 0.38825,0.19412 -0.48532,-0.48531 0.19413,0.0971 0.29119,0.38825 z m -3.6884,-4.17371 -0.19413,-0.0971 0,0.0971 0.19413,0 z m -4.17371,0 -0.29119,-0.38825 0.0971,0.48531 0.19413,-0.0971 z m -35.33098,-3.20309 2.91189,-2.23245 -3.20308,2.13539 0.29119,0.0971 z m 5.82379,-4.65902 0.29119,-0.29119 -1.16476,0.48531 0.87357,-0.19412 z m -36.88399,-6.50323 -10.57988,3.39721 5.82379,-1.65008 4.75609,-1.74713 z m 26.30411,-16.50073 -2.81483,0.48531 -41.93127,6.79442 4.36784,9.9975 0.29119,0.0971 -1.06769,3.97959 3.10602,-1.35888 3.3972,-3.00896 5.82379,-0.19412 6.69736,-2.42658 4.56196,0.67944 -1.06769,1.65007 8.34743,2.81483 7.18267,3.49428 1.65007,3.88252 5.33847,-1.16476 12.61821,-10.28869 4.65903,0.19413 19.02437,14.36534 3.88252,-0.77651 4.07666,5.43554 0.7765,8.63862 -1.26182,5.43553 0.58238,2.71777 3.39721,6.79442 -1.55301,-5.33847 4.36784,-0.0971 0.38825,3.88253 -2.32951,6.01791 8.05624,11.0652 3.00895,0.0971 -2.52364,-3.39721 3.10602,0.38825 1.8442,-1.16475 -0.7765,6.21204 4.17371,3.30014 2.81483,7.57093 3.78546,2.32951 4.85316,1.26182 6.69735,8.54156 3.49428,1.84419 -4.65903,0.29119 2.13538,2.42658 7.66799,-2.52364 3.78546,-2.13539 3.49427,-12.22995 -1.74713,-19.02437 -0.38825,-1.94127 -9.31806,-15.53009 -7.95918,-11.25933 -4.4649,-9.22099 3.78546,3.20308 0.7765,-0.58238 1.65008,8.05624 4.27077,6.11498 -4.17371,-8.1533 0.19413,-3.88253 -12.52115,-15.23891 -3.00895,-4.75609 -3.97959,-8.05624 -2.71777,-6.79442 -2.13539,-2.42658 -0.48531,-3.10602 -0.0971,-0.0971 -6.69735,-0.38825 -2.62071,2.03832 -1.45594,7.47386 -1.35889,-3.49427 -45.81379,5.72672 -3.30014,-5.14434 0.0971,-0.0971 z" fill="rgba(59, 130, 246, 0.1)" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="1" />
                
                <path id="NJ" d="m 916.80709,207.30914 -0.48531,-1.16476 0,1.16476 0.48531,0 z m 0.97064,-3.59134 0.29119,-2.91189 -0.58238,2.52364 0.29119,0.38825 z m -3.97959,-29.79837 -10.19163,-2.52365 -1.74714,-0.48531 -1.65007,-0.38825 0,0 -4.07665,9.02687 1.74714,2.13539 -0.0971,6.50322 1.8442,0.29119 3.78546,9.90044 -0.19412,0.29119 -4.75609,6.98855 0.48531,5.33847 11.45345,3.88252 0.0971,4.46491 2.62071,-3.6884 0.38825,-5.33847 2.71777,-1.8442 -1.0677,-3.97959 2.03833,-4.75609 0,-10.38576 -0.67944,-3.39721 -4.56197,0.0971 1.16476,-4.65903 0.67944,-7.47386 0,0 z" fill="rgba(59, 130, 246, 0.08)" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1" />
                
                {/* Additional states abbreviated for brevity - in real implementation, include all states */}
                <path id="IL" d="m 661.43403,198.18521 -0.19413,0.48531 3.6884,2.32952 1.16476,2.32951 3.88252,3.6884 -0.0971,3.10602 -2.13539,6.11498 -4.85316,3.49427 -4.36784,0.87357 -0.87357,5.04728 1.45595,0.67944 -1.45595,9.90044 -3.59133,2.23245 0.67944,3.78546 -0.87357,0.38825 0,0 -0.7765,4.27078 3.10602,8.63862 11.06519,9.31806 0.97063,4.4649 2.13539,2.23245 6.98855,-0.38825 -1.26182,6.50323 -0.48532,6.98855 4.17372,3.3972 6.60029,2.9119 3.49427,2.71777 1.94126,5.53259 -1.06769,2.03833 6.89148,5.62966 0.29119,0.0971 -0.58238,-0.58238 1.94126,-4.56196 7.47386,2.03832 1.8442,-2.13539 -1.45594,-4.27077 6.11497,-3.59134 -1.65007,-2.32951 1.45595,-3.30015 0,-0.29119 -0.38826,-0.0971 0.0971,-8.63862 2.13539,-1.55301 3.68839,-8.63862 -0.7765,-3.78546 -2.42658,-4.56196 1.35888,-5.14435 -6.79441,-47.85212 -0.97064,-1.06769 -2.52364,-5.72673 -2.03832,-2.13539 -0.87357,-5.62966 0,-0.19412 -13.10352,1.8442 -7.86211,0.97063 -21.15976,2.42658 0,0 z" fill="rgba(59, 130, 246, 0.06)" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" />

                {/* SVG Markers */}
                <g id="markers" strokeWidth="2">
                  {locations.map((loc) => {
                    const x = (loc.coordinates.x / 100) * 1000; // viewBox width
                    const y = (loc.coordinates.y / 100) * 589;  // viewBox height
                    const active = selectedLocation?.id === loc.id;
                    const color = loc.status === 'coming-soon' ? '#ea580c' : active ? '#2563eb' : '#334155';
                    const ring = loc.status === 'coming-soon' ? '#fdba74' : active ? '#93c5fd' : '#cbd5e1';
                    return (
                      <g key={loc.id} transform={`translate(${x}, ${y})`} style={{ cursor: 'pointer' }} onClick={() => setSelectedLocation(loc)}>
                        {/* outer ring */}
                        <circle cx={0} cy={0} r={11} fill="#ffffff" stroke={color} />
                        <circle cx={0} cy={0} r={5} fill={color} />
                        {/* subtle halo */}
                        {active && <circle cx={0} cy={0} r={18} fill={ring} opacity={0.35} />}

                        {/* label for selected */}
                        {active && (
                          <g transform="translate(0, 20)">
                            <rect x={-90} y={4} width={180} height={42} rx={8} fill="#ffffff" stroke="#e2e8f0" />
                            <text x={0} y={20} textAnchor="middle" fontSize="12" fontWeight={700} fill="#0f172a">{loc.name}</text>
                            <text x={0} y={36} textAnchor="middle" fontSize="11" fill="#475569">{loc.city}</text>
                          </g>
                        )}
                      </g>
                    );
                  })}
                </g>
              </svg>
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