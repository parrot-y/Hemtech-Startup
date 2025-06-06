
import React from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: 'Renovyte',
      category: 'Web Design',
      description: 'Modern renovation and construction company website with sleek design and professional branding',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop',
      technologies: ['Wix Studio', 'Modern Design', 'Construction'],
      link: 'https://hemvid76.wixstudio.com/renovyte',
      github: '#'
    },
    {
      title: 'VID Logistics',
      category: 'Business Website',
      description: 'Professional logistics and transportation services platform with comprehensive service showcase',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
      technologies: ['WebNode', 'Business', 'Logistics'],
      link: 'https://vidlogistics.webnode.page/our-services/',
      github: '#'
    },
    {
      title: 'UzuEats',
      category: 'Food & Restaurant',
      description: 'Vibrant food delivery and restaurant website with modern UI and seamless user experience',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      technologies: ['WebNode', 'Food Tech', 'Delivery'],
      link: 'https://uzueats.webnode.page/',
      github: '#'
    },
    {
      title: 'Willy Auto',
      category: 'Automotive',
      description: 'Professional automotive services and car dealership website with inventory management',
      image: 'https://images.unsplash.com/photo-1493238792000-8113da705763?w=600&h=400&fit=crop',
      technologies: ['WebNode', 'Automotive', 'Services'],
      link: 'https://willyauto.webnode.page/',
      github: '#'
    },
    {
      title: 'Maringa Law Firm',
      category: 'Legal Services',
      description: 'Professional law firm website with contact and consultation features, built for trust and credibility',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop',
      technologies: ['WebNode', 'Legal', 'Professional'],
      link: 'https://maringalawfirm.webnode.page/contact/',
      github: '#'
    },
    {
      title: 'Streams Motorcycles',
      category: 'E-commerce',
      description: 'Motorcycle dealership and parts website with comprehensive product showcase and sales features',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      technologies: ['WebNode', 'E-commerce', 'Motorcycles'],
      link: 'https://streams.webnode.page/motorcycles/',
      github: '#'
    },
    {
      title: 'Tutor Gurus',
      category: 'Education',
      description: 'Online tutoring platform connecting students with expert tutors for personalized learning',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop',
      technologies: ['Strikingly', 'Education', 'Learning'],
      link: 'https://tutorgurus.mystrikingly.com/',
      github: '#'
    },
    {
      title: 'Cheskings Guru',
      category: 'Consulting',
      description: 'Professional consulting services with expertise showcase and client testimonials',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop',
      technologies: ['Strikingly', 'Consulting', 'Business'],
      link: 'https://cheskingsguru.mystrikingly.com/',
      github: '#'
    }
  ];

  const categories = ['All', 'Web Design', 'Business Website', 'Food & Restaurant', 'Automotive', 'Legal Services', 'E-commerce', 'Education', 'Consulting'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const openProject = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/40 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-violet-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-6">
            <Sparkles className="w-12 h-12 text-violet-600 animate-pulse" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Portfolio <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">Excellence</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
            Real projects, real results. Each website crafted with precision, passion, and cutting-edge technology to deliver exceptional digital experiences.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 text-sm shadow-lg hover:shadow-xl transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 text-white shadow-2xl scale-105'
                    : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white border border-gray-200 hover:border-violet-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden border border-white/50"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center text-white">
                    <Sparkles className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Live Project</span>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 px-3 py-1 rounded-full text-xs font-medium border border-violet-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-violet-600 text-violet-600 hover:bg-gradient-to-r hover:from-violet-600 hover:to-purple-600 hover:text-white transition-all duration-300 font-semibold"
                    onClick={() => openProject(project.link)}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View Live
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-gray-300 text-gray-600 hover:bg-gray-600 hover:text-white transition-all duration-300 font-semibold"
                  >
                    <Github size={16} className="mr-2" />
                    Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 hover:from-violet-700 hover:via-purple-700 hover:to-blue-700 text-white px-12 py-6 text-lg font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110"
          >
            <Sparkles className="mr-3" size={24} />
            Explore All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
