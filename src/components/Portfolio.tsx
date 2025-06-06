
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: 'Renovyte',
      category: 'Web Design',
      description: 'Modern renovation and construction company website with sleek design',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop',
      technologies: ['Wix Studio', 'Modern Design', 'Construction'],
      link: 'https://hemvid76.wixstudio.com/renovyte',
      github: '#'
    },
    {
      title: 'VID Logistics',
      category: 'Business Website',
      description: 'Professional logistics and transportation services platform',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
      technologies: ['WebNode', 'Business', 'Logistics'],
      link: 'https://vidlogistics.webnode.page/our-services/',
      github: '#'
    },
    {
      title: 'UzuEats',
      category: 'Food & Restaurant',
      description: 'Vibrant food delivery and restaurant website with modern UI',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      technologies: ['WebNode', 'Food Tech', 'Delivery'],
      link: 'https://uzueats.webnode.page/',
      github: '#'
    },
    {
      title: 'Willy Auto',
      category: 'Automotive',
      description: 'Professional automotive services and car dealership website',
      image: 'https://images.unsplash.com/photo-1493238792000-8113da705763?w=600&h=400&fit=crop',
      technologies: ['WebNode', 'Automotive', 'Services'],
      link: 'https://willyauto.webnode.page/',
      github: '#'
    },
    {
      title: 'Maringa Law Firm',
      category: 'Legal Services',
      description: 'Professional law firm website with contact and consultation features',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop',
      technologies: ['WebNode', 'Legal', 'Professional'],
      link: 'https://maringalawfirm.webnode.page/contact/',
      github: '#'
    },
    {
      title: 'Streams Motorcycles',
      category: 'E-commerce',
      description: 'Motorcycle dealership and parts website with product showcase',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      technologies: ['WebNode', 'E-commerce', 'Motorcycles'],
      link: 'https://streams.webnode.page/motorcycles/',
      github: '#'
    },
    {
      title: 'Tutor Gurus',
      category: 'Education',
      description: 'Online tutoring platform connecting students with expert tutors',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop',
      technologies: ['Strikingly', 'Education', 'Learning'],
      link: 'https://tutorgurus.mystrikingly.com/',
      github: '#'
    },
    {
      title: 'Cheskings Guru',
      category: 'Consulting',
      description: 'Professional consulting services with expertise showcase',
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

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Real projects I've built for clients - showcasing diverse industries and creative solutions
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white/80 text-gray-600 hover:bg-gray-100 shadow-sm hover:scale-105'
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
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Site
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-gray-300 text-gray-600 hover:bg-gray-600 hover:text-white transition-all duration-300"
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
            className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
