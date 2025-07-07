import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Filter } from 'lucide-react';

const CleanPortfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      title: 'Renovyte Construction',
      category: 'Web Development',
      description: 'Modern construction company website with project showcase and client portal.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop',
      technologies: ['React', 'Tailwind CSS', 'Node.js'],
      link: 'https://hemvid76.wixstudio.com/renovyte'
    },
    {
      title: 'VID Logistics',
      category: 'Web Development',
      description: 'Professional logistics platform with real-time tracking and management system.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'Express', 'MongoDB'],
      link: 'https://vidlogistics.webnode.page/'
    },
    {
      title: 'UzuEats Food Delivery',
      category: 'Mobile App',
      description: 'Modern food delivery platform with real-time order tracking.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Firebase', 'Stripe'],
      link: 'https://uzueats.webnode.page/'
    },
    {
      title: 'Willy Auto Dealership',
      category: 'E-commerce',
      description: 'Comprehensive automotive dealership website with inventory management.',
      image: 'https://images.unsplash.com/photo-1493238792000-8113da705763?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL'],
      link: 'https://willyauto.webnode.page/'
    },
    {
      title: 'Maringa Law Firm',
      category: 'Professional Services',
      description: 'Professional law firm website with case management and client portal.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop',
      technologies: ['WordPress', 'Custom PHP', 'MySQL'],
      link: 'https://maringalawfirm.webnode.page/'
    },
    {
      title: 'Immanuel Junior Academy',
      category: 'Education',
      description: 'Modern educational institution website with student portal and resources.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: 'https://friendly-tartufo-246c4c.netlify.app/'
    }
  ];

  const categories = ['All', 'Web Development', 'Mobile App', 'E-commerce', 'Professional Services', 'Education'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="modern-section bg-gray-50">
      {/* Background Elements */}
      <div className="animated-bg">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>
      
      <div className="modern-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Filter className="w-4 h-4" />
            Our Portfolio
          </div>
          
          <h2 className="section-title text-gray-900 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          
          <p className="section-subtitle mb-8">
            Explore our latest work and see how we've helped businesses transform their digital presence.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`modern-button ${
                  selectedCategory === category
                    ? 'modern-button-primary'
                    : 'modern-button-secondary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="modern-grid modern-grid-3">
          {filteredProjects.map((project, index) => (
            <div key={index} className="modern-card scale-hover fade-in">
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <button
                    className="modern-button modern-button-primary"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <ExternalLink className="mr-2 w-4 h-4" />
                    View Project
                  </button>
                </div>
              </div>
              
              {/* Content */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-green-500 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Link */}
                <button
                  onClick={() => window.open(project.link, '_blank')}
                  className="flex items-center text-green-500 hover:text-green-600 font-semibold text-sm transition-colors duration-200"
                >
                  View Project
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 fade-in">
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="modern-button modern-button-primary text-lg px-8 py-4"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CleanPortfolio;