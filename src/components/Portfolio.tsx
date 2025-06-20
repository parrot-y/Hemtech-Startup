import React from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: 'Renovyte',
      category: 'Construction',
      description: 'Modern renovation company website with professional branding',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop',
      technologies: ['Modern Design', 'Mobile Ready', 'Fast Loading'],
      link: 'https://hemvid76.wixstudio.com/renovyte',
      github: '#'
    },
    {
      title: 'VID Logistics',
      category: 'Transportation',
      description: 'Professional logistics platform with service showcase',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
      technologies: ['Business Focus', 'Professional', 'Responsive'],
      link: 'https://vidlogistics.webnode.page/',
      github: '#'
    },
    {
      title: 'UzuEats',
      category: 'Food Delivery',
      description: 'Vibrant food delivery platform with modern UI',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      technologies: ['Food Tech', 'User Friendly', 'Mobile First'],
      link: 'https://uzueats.webnode.page/',
      github: '#'
    },
    {
      title: 'Willy Auto',
      category: 'Automotive',
      description: 'Car dealership website with inventory management',
      image: 'https://images.unsplash.com/photo-1493238792000-8113da705763?w=600&h=400&fit=crop',
      technologies: ['Automotive', 'Inventory', 'Professional'],
      link: 'https://willyauto.webnode.page/',
      github: '#'
    },
    {
      title: 'Maringa Law Firm',
      category: 'Legal Services',
      description: 'Professional law firm website built for trust',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop',
      technologies: ['Legal', 'Professional', 'Trustworthy'],
      link: 'https://maringalawfirm.webnode.page/',
      github: '#'
    },
    {
      title: 'Streams Motorcycles',
      category: 'E-commerce',
      description: 'Motorcycle dealership with product showcase',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      technologies: ['E-commerce', 'Product Showcase', 'Sales'],
      link: 'https://streams.webnode.page/',
      github: '#'
    },
    {
      title: 'Tutor Gurus',
      category: 'Education',
      description: 'Online tutoring platform for personalized learning',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop',
      technologies: ['Education', 'Learning', 'Interactive'],
      link: 'https://tutorgurus.mystrikingly.com/',
      github: '#'
    },
    {
      title: 'Cheskings Guru',
      category: 'Consulting',
      description: 'Professional consulting services platform',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop',
      technologies: ['Consulting', 'Business', 'Professional'],
      link: 'https://cheskingsguru.mystrikingly.com/',
      github: '#'
    },
    {
      title: 'Immanuel Junior Academy',
      category: 'Education',
      description: 'Educational institution showcasing academic programs',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      technologies: ['Education', 'Academic', 'Modern'],
      link: 'https://friendly-tartufo-246c4c.netlify.app/',
      github: '#'
    }
  ];

  const categories = ['All', 'Construction', 'Transportation', 'Food Delivery', 'Automotive', 'Legal Services', 'E-commerce', 'Education', 'Consulting'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const openProject = (url: string) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/254742321521?text=Hi! I want a website like these', '_blank');
  };

  return (
    <section id="portfolio" className="py-12 lg:py-20 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-8 lg:mb-12 leading-relaxed">
            Real projects, real results. See what we've built for businesses like yours.
          </p>

          {/* Category Filter - Mobile Optimized */}
          <div className="flex flex-wrap justify-center gap-2 lg:gap-3 mb-8">
            {categories.slice(0, 5).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 lg:px-6 py-2 lg:py-3 rounded-full font-semibold transition-all duration-300 text-xs lg:text-sm shadow-lg hover:shadow-xl transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-2xl scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-blue-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.slice(0, 6).map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 overflow-hidden border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 lg:px-4 py-1 lg:py-2 rounded-full text-xs lg:text-sm font-semibold shadow-lg backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center text-white">
                    <Sparkles className="w-4 h-4 mr-2" />
                    <span className="text-xs lg:text-sm font-medium">Live Project</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 lg:p-6">
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-3 lg:mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4 lg:mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-2 lg:px-3 py-1 rounded-full text-xs font-medium border border-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2 lg:gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold text-xs lg:text-sm"
                    onClick={() => openProject(project.link)}
                  >
                    <ExternalLink size={14} className="mr-1 lg:mr-2" />
                    View Live
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-gray-300 text-gray-600 hover:bg-gray-600 hover:text-white transition-all duration-300 font-semibold text-xs lg:text-sm"
                  >
                    <Github size={14} className="mr-1 lg:mr-2" />
                    Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 lg:mt-16">
          <Button
            onClick={openWhatsApp}
            size="lg"
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-8 lg:px-12 py-4 lg:py-6 text-lg lg:text-xl font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110"
          >
            <Sparkles className="mr-3" size={24} />
            Get Your Website Like These
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;