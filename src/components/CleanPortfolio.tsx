import React, { useState, useEffect } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const CleanPortfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    // Intersection Observer for lazy loading animations
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
      description: 'Modern construction company website with project showcase.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop',
      technologies: ['React', 'Tailwind', 'Node.js'],
      link: 'https://hemvid76.wixstudio.com/renovyte'
    },
    {
      title: 'VID Logistics',
      category: 'Web Development',
      description: 'Professional logistics platform with real-time tracking.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'Express', 'MongoDB'],
      link: 'https://vidlogistics.webnode.page/'
    },
    {
      title: 'UzuEats Delivery',
      category: 'Mobile App',
      description: 'Food delivery platform with real-time order tracking.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Firebase'],
      link: 'https://uzueats.webnode.page/'
    },
    {
      title: 'Willy Auto Dealership',
      category: 'E-commerce',
      description: 'Automotive dealership with inventory management.',
      image: 'https://images.unsplash.com/photo-1493238792000-8113da705763?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'Prisma'],
      link: 'https://willyauto.webnode.page/'
    },
    {
      title: 'Maringa Law Firm',
      category: 'Professional',
      description: 'Law firm website with case management portal.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop',
      technologies: ['WordPress', 'PHP'],
      link: 'https://maringalawfirm.webnode.page/'
    },
    {
      title: 'Immanuel Academy',
      category: 'Education',
      description: 'Educational institution with student portal.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js'],
      link: 'https://friendly-tartufo-246c4c.netlify.app/'
    }
  ];

  const categories = ['All', 'Web Development', 'Mobile App', 'E-commerce', 'Professional', 'Education'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="section section-white">
      <div className="container">
        {/* Minimal Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="section-title text-royal-blue">
            Our <span className="text-gold">Work</span>
          </h2>
          <p className="section-subtitle">
            Projects that speak for themselves.
          </p>

          {/* Category Filter - Sleek */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all text-sm uppercase tracking-wide ${
                  selectedCategory === category
                    ? 'bg-gold text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-text-light hover:bg-gold hover:text-white hover:transform hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid - Clean */}
        <div className="grid grid-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="card scale-in will-change-transform group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => window.open(project.link, '_blank')}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 lazy-load"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-gold bg-gold/10 px-3 py-1 rounded-full uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-royal-blue group-hover:text-gold transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-text-light text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-100 text-text-light px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 fade-in">
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-secondary group"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CleanPortfolio;