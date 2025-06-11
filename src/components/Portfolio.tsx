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
      link: 'https://vidlogistics.webnode.page/',
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
      link: 'https://maringalawfirm.webnode.page/',
      github: '#'
    },
    {
      title: 'Streams Motorcycles',
      category: 'E-commerce',
      description: 'Motorcycle dealership and parts website with comprehensive product showcase and sales features',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      technologies: ['WebNode', 'E-commerce', 'Motorcycles'],
      link: 'https://streams.webnode.page/',
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
    },
    {
      title: 'Immanuel Junior Academy',
      category: 'Education',
      description: 'Modern educational institution website showcasing academic programs and school achievements',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      technologies: ['Netlify', 'Education', 'Academic'],
      link: 'https://friendly-tartufo-246c4c.netlify.app/',
      github: '#'
    }
  ];

  const categories = ['All', 'Web Design', 'Business Website', 'Food & Restaurant', 'Automotive', 'Legal Services', 'E-commerce', 'Education', 'Consulting'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const openProject = (url: string) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Real projects, real results. Each website crafted with precision and cutting-edge technology to deliver exceptional digital experiences.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 text-sm shadow-lg hover:shadow-xl transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-2xl scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-blue-300'
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
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 overflow-hidden border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm">
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
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium border border-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold"
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
            className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-12 py-6 text-lg font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110"
          >
            <Sparkles className="mr-3" size={24} />
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;