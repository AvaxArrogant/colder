import React from 'react';
import { Calendar, ArrowRight, Clock, Tag } from 'lucide-react';

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'SRS Announces Pacific Coast Facility Expansion',
      excerpt: 'New state-of-the-art facility will serve West Coast importers with advanced USDA inspection capabilities and 300,000+ sq ft of cold storage.',
      date: '2024-03-15',
      readTime: '3 min read',
      category: 'Company News',
      image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg',
      featured: true
    },
    {
      id: 2,
      title: 'New USDA FSIS Regulations: What Importers Need to Know',
      excerpt: 'Understanding the latest federal inspection requirements and how SRS ensures full compliance for your import operations.',
      date: '2024-03-10',
      readTime: '5 min read',
      category: 'Industry Insights',
      image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg'
    },
    {
      id: 3,
      title: 'Cold Chain Technology: Real-Time Monitoring Advances',
      excerpt: 'How advanced temperature monitoring and IoT technology is revolutionizing cold storage management and compliance tracking.',
      date: '2024-03-05',
      readTime: '4 min read',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg'
    },
    {
      id: 4,
      title: 'SRS Achieves Record Processing Times in Q1 2024',
      excerpt: 'Average inspection processing time reduced to under 18 hours while maintaining 100% compliance rate across all facilities.',
      date: '2024-02-28',
      readTime: '2 min read',
      category: 'Performance',
      image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg'
    },
    {
      id: 5,
      title: 'Sustainability in Cold Chain: SRS Green Initiatives',
      excerpt: 'Our commitment to environmental responsibility through energy-efficient refrigeration systems and sustainable practices.',
      date: '2024-02-20',
      readTime: '4 min read',
      category: 'Sustainability',
      image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg'
    },
    {
      id: 6,
      title: 'Emergency Response: How SRS Handles Critical Shipments',
      excerpt: 'Case study on our 24/7 emergency inspection services and rapid response protocols for time-sensitive imports.',
      date: '2024-02-15',
      readTime: '6 min read',
      category: 'Case Study',
      image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg'
    }
  ];

  const categories = ['All', 'Company News', 'Industry Insights', 'Technology', 'Performance', 'Sustainability', 'Case Study'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredArticles = selectedCategory === 'All' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Company News': 'bg-blue-100 text-blue-600',
      'Industry Insights': 'bg-green-100 text-green-600',
      'Technology': 'bg-purple-100 text-purple-600',
      'Performance': 'bg-orange-100 text-orange-600',
      'Sustainability': 'bg-emerald-100 text-emerald-600',
      'Case Study': 'bg-red-100 text-red-600'
    };
    return colors[category as keyof typeof colors] || 'bg-slate-100 text-slate-600';
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-6 py-3 mb-6">
            <Calendar className="h-5 w-5 text-blue-600" />
            <span className="text-blue-800 font-medium">News & Insights</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
            Industry <span className="text-blue-600">Updates</span> & News
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest developments in cold chain logistics, USDA regulations, and SRS company updates.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        {selectedCategory === 'All' && (
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12 text-white">
                  <div className="inline-flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2 mb-6">
                    <Tag className="h-4 w-4" />
                    <span className="text-sm font-medium">Featured</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                    {newsArticles[0].title}
                  </h3>
                  <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                    {newsArticles[0].excerpt}
                  </p>
                  <div className="flex items-center space-x-6 mb-8">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-blue-200" />
                      <span className="text-blue-200 text-sm">{formatDate(newsArticles[0].date)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-blue-200" />
                      <span className="text-blue-200 text-sm">{newsArticles[0].readTime}</span>
                    </div>
                  </div>
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-semibold flex items-center space-x-2">
                    <span>Read Full Article</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={newsArticles[0].image} 
                    alt={newsArticles[0].title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent lg:bg-gradient-to-r lg:from-blue-600/50 lg:to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.slice(selectedCategory === 'All' ? 1 : 0).map((article) => (
            <article 
              key={article.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-slate-200"
            >
              {/* Article Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 leading-tight hover:text-blue-600 transition-colors duration-200">
                  {article.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                {/* Article Meta */}
                <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(article.date)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Read More Button */}
                <button className="flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200 group">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Load More / Newsletter Signup */}
        <div className="mt-16 text-center">
          <div className="bg-slate-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Stay Updated</h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest industry insights, regulatory updates, and SRS news delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto space-y-3 sm:space-y-0 sm:space-x-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
          
          <button className="bg-slate-100 text-slate-700 px-8 py-3 rounded-lg hover:bg-slate-200 transition-colors duration-200 font-semibold">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;