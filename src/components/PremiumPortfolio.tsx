import React, { useEffect, useState } from 'react';
import { ExternalLink, ArrowRight, Filter, X } from 'lucide-react';

const PremiumPortfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in, .scale-in');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Renovyte Construction',
      category: 'Web Development',
      description: 'Modern construction company website with project showcase and client portal.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop',
      technologies: ['React', 'Tailwind CSS', 'Node.js'],
      link: 'https://hemvid76.wixstudio.com/renovyte',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'VID Logistics',
      category: 'Web Development',
      description: 'Professional logistics platform with real-time tracking and management system.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'Express', 'MongoDB'],
      link: 'https://vidlogistics.webnode.page/',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'UzuEats Food Delivery',
      category: 'Mobile App',
      description: 'Modern food delivery platform with real-time order tracking.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Firebase', 'Stripe'],
      link: 'https://uzueats.webnode.page/',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Willy Auto Dealership',
      category: 'E-commerce',
      description: 'Comprehensive automotive dealership website with inventory management.',
      image: 'https://images.unsplash.com/photo-1493238792000-8113da705763?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL'],
      link: 'https://willyauto.webnode.page/',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Maringa Law Firm',
      category: 'Professional Services',
      description: 'Professional law firm website with case management and client portal.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop',
      technologies: ['WordPress', 'Custom PHP', 'MySQL'],
      link: 'https://maringalawfirm.webnode.page/',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Immanuel Junior Academy',
      category: 'Education',
      description: 'Modern educational institution website with student portal and resources.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: 'https://friendly-tartufo-246c4c.netlify.app/',
      color: 'from-teal-500 to-green-500'
    }
  ];

  const categories = ['All', 'Web Development', 'Mobile App', 'E-commerce', 'Professional Services', 'Education'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="section-premium">
      {/* Background Elements */}
      <div className="tech-bg">
        <div className="tech-shape"></div>
        <div className="tech-shape"></div>
      </div>
      
      <div className="container-premium relative z-10">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center gap-2 bg-gold/10 text-gold border border-gold/30 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Filter className="w-4 h-4" />
            Our Portfolio
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed mb-8">
            Explore our latest work and see how we've helped businesses transform their digital presence.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`btn-premium ${
                  selectedCategory === category
                    ? 'btn-primary'
                    : 'btn-ghost'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="portfolio-item scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="portfolio-image"
              />
              
              <div className="portfolio-overlay">
                <div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.color} text-white mb-3`}>
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-light mb-2">{project.title}</h3>
                  <p className="text-muted text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium text-gold bg-gold/10 px-2 py-1 rounded border border-gold/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="card-premium max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-light">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-muted hover:text-light transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              
              <div className="space-y-4">
                <div>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${selectedProject.color} text-white mb-3`}>
                    {selectedProject.category}
                  </span>
                </div>
                
                <p className="text-muted leading-relaxed">{selectedProject.description}</p>
                
                <div>
                  <h4 className="text-light font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-sm font-medium text-gold bg-gold/10 px-3 py-1 rounded border border-gold/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => window.open(selectedProject.link, '_blank')}
                    className="btn-premium btn-primary flex-1"
                  >
                    <ExternalLink className="mr-2 w-4 h-4" />
                    View Live Site
                  </button>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="btn-premium btn-ghost"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16 fade-in">
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn-premium btn-primary text-lg px-8 py-4"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PremiumPortfolio;