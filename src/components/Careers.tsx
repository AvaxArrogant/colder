import React from 'react';
import { Users, TrendingUp, Heart, Shield, ArrowRight, Star, Award, DollarSign, Calendar } from 'lucide-react';

const Careers = () => {
  const benefits = [
    {
      icon: Users,
      title: 'Team-Centric Culture',
      description: 'Join a close-knit team where every voice matters and collaboration drives success.'
    },
    {
      icon: TrendingUp,
      title: 'Growth Opportunities',
      description: 'Advance your career with comprehensive training and clear paths for professional development.'
    },
    {
      icon: Heart,
      title: 'Family Values',
      description: 'Work in an environment that values work-life balance and treats employees like family.'
    },
    {
      icon: Shield,
      title: 'Comprehensive Benefits',
      description: 'Competitive compensation with full health, dental, vision, and retirement benefits.'
    },
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Industry-leading salaries with performance bonuses and profit-sharing opportunities.'
    },
    {
      icon: Award,
      title: 'Recognition Programs',
      description: 'Employee appreciation programs, service awards, and professional development support.'
    }
  ];

  const employeeTestimonials = [
    {
      name: 'Michael Johnson',
      position: 'Senior USDA Inspector',
      tenure: '8 years',
      quote: 'SRS truly feels like family. The leadership team values our input and provides excellent training opportunities. I\'ve grown both professionally and personally here.',
      rating: 5
    },
    {
      name: 'Lisa Chen',
      position: 'Cold Storage Operations Supervisor',
      tenure: '5 years',
      quote: 'The work-life balance here is exceptional. Management understands that happy employees provide better service, and it shows in how they treat us.',
      rating: 5
    },
    {
      name: 'Carlos Rodriguez',
      position: 'Logistics Coordinator',
      tenure: '3 years',
      quote: 'I love the variety in my work and the opportunity to solve complex logistics challenges. The team is supportive and the company invests in our success.',
      rating: 5
    }
  ];

  const positions = [
    {
      title: 'USDA FSIS Inspector',
      department: 'Quality Assurance',
      location: 'Houston, TX / Newark, NJ',
      type: 'Full-time',
      salary: '$65,000 - $85,000',
      description: 'Conduct federal inspections and ensure compliance with USDA FSIS regulations.',
      requirements: ['USDA FSIS certification', '3+ years inspection experience', 'Strong attention to detail'],
      posted: '2024-03-10'
    },
    {
      title: 'Cold Storage Operations Manager',
      department: 'Operations',
      location: 'Houston, TX',
      type: 'Full-time',
      salary: '$75,000 - $95,000',
      description: 'Oversee daily warehouse operations and maintain optimal storage conditions.',
      requirements: ['5+ years warehouse management', 'Cold storage experience', 'Leadership skills'],
      posted: '2024-03-08'
    },
    {
      title: 'Logistics Coordinator',
      department: 'Transportation',
      location: 'Newark, NJ',
      type: 'Full-time',
      salary: '$55,000 - $70,000',
      description: 'Coordinate shipments and manage transportation logistics for cold chain products.',
      requirements: ['Transportation experience', 'Strong communication skills', 'Problem-solving abilities'],
      posted: '2024-03-05'
    },
    {
      title: 'Maintenance Technician',
      department: 'Facilities',
      location: 'Multiple Locations',
      type: 'Full-time',
      salary: '$50,000 - $65,000',
      description: 'Maintain refrigeration systems and facility equipment to ensure optimal performance.',
      requirements: ['HVAC/Refrigeration certification', 'Electrical knowledge', 'Preventive maintenance experience'],
      posted: '2024-03-01'
    },
    {
      title: 'Quality Assurance Specialist',
      department: 'Quality Assurance',
      location: 'Houston, TX',
      type: 'Full-time',
      salary: '$60,000 - $75,000',
      description: 'Ensure quality standards and compliance across all facility operations.',
      requirements: ['Food safety certification', 'Quality management experience', 'Analytical skills'],
      posted: '2024-02-28'
    },
    {
      title: 'Customer Service Representative',
      department: 'Customer Relations',
      location: 'Remote/Houston, TX',
      type: 'Full-time',
      salary: '$45,000 - $55,000',
      description: 'Provide exceptional customer service and support to clients nationwide.',
      requirements: ['Customer service experience', 'Strong communication skills', 'Problem resolution abilities'],
      posted: '2024-02-25'
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return `${diffDays} days ago`;
  };

  return (
    <section id="careers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-6 py-3 mb-6">
            <Users className="h-5 w-5 text-blue-600" />
            <span className="text-blue-800 font-medium">Careers at SRS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
            Build Your <span className="text-blue-600">Future</span> With Us
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Join a growing company that values family traditions, professional excellence, and creating lasting relationships. We're always looking for dedicated professionals to join our team.
          </p>
        </div>

        {/* Employee Testimonials */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-12">What Our Team Says</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {employeeTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-slate-700 mb-4 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-slate-200 pt-4">
                  <div className="font-semibold text-slate-800">{testimonial.name}</div>
                  <div className="text-slate-600 text-sm">{testimonial.position}</div>
                  <div className="text-blue-600 text-sm font-medium">{testimonial.tenure} with SRS</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Culture Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-3xl font-bold text-slate-800 mb-6">Why Work at SRS?</h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At Sorbello Refrigerated Services, we believe our people are our greatest asset. As a family-owned business, we foster an environment where everyone feels valued, respected, and empowered to contribute to our shared success.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our commitment to continuous improvement means you'll always have opportunities to learn, grow, and advance your career while working with cutting-edge technology and industry-leading practices.
            </p>
            
            {/* Company Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">4.8/5</div>
                <div className="text-slate-600 text-sm">Employee Satisfaction</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-600">95%</div>
                <div className="text-slate-600 text-sm">Retention Rate</div>
              </div>
            </div>
            
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold flex items-center space-x-2">
              <span>View All Positions</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mb-4 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">{benefit.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Open Positions */}
        <div>
          <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">Current Opportunities</h3>
          <div className="space-y-6 mb-12">
            {positions.map((position, index) => (
              <div key={index} className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:border-blue-200 hover:-translate-y-1">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h4 className="text-xl font-semibold text-slate-800">{position.title}</h4>
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                        {position.type}
                      </span>
                      <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                        {position.salary}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 mb-4">
                      <span className="flex items-center space-x-1">
                        <span className="font-medium">Department:</span>
                        <span>{position.department}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <span className="font-medium">Location:</span>
                        <span>{position.location}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>Posted {formatDate(position.posted)}</span>
                      </span>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-4">{position.description}</p>
                    
                    {/* Requirements */}
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-slate-800 mb-2">Key Requirements:</h5>
                      <div className="flex flex-wrap gap-2">
                        {position.requirements.map((req, reqIndex) => (
                          <span key={reqIndex} className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 lg:mt-0 lg:ml-6 flex flex-col sm:flex-row lg:flex-col space-y-2 sm:space-y-0 sm:space-x-2 lg:space-x-0 lg:space-y-2">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium">
                      Apply Now
                    </button>
                    <button className="bg-slate-100 text-slate-800 px-6 py-2 rounded-lg hover:bg-slate-200 transition-all duration-200 font-medium">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Don't See Your Role? */}
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8 text-center mb-12">
            <h4 className="text-2xl font-bold text-slate-800 mb-4">Don't see the perfect role?</h4>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              We're always interested in connecting with talented individuals who share our values. Send us your resume and let us know how you'd like to contribute to our team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
                Submit General Application
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 font-semibold">
                Email Your Resume
              </button>
            </div>
          </div>

          {/* Hiring Process */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <h4 className="text-2xl font-bold text-slate-800 mb-6 text-center">Our Hiring Process</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xl">1</span>
                </div>
                <h5 className="font-semibold text-slate-800 mb-2">Application</h5>
                <p className="text-slate-600 text-sm">Submit your application and resume online</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xl">2</span>
                </div>
                <h5 className="font-semibold text-slate-800 mb-2">Phone Screen</h5>
                <p className="text-slate-600 text-sm">Initial conversation with our HR team</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xl">3</span>
                </div>
                <h5 className="font-semibold text-slate-800 mb-2">Interview</h5>
                <p className="text-slate-600 text-sm">Meet with the hiring manager and team</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xl">4</span>
                </div>
                <h5 className="font-semibold text-slate-800 mb-2">Welcome</h5>
                <p className="text-slate-600 text-sm">Join the SRS family and start your journey</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;