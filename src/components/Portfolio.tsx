
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: 'KenTech Solutions',
      category: 'Web Design',
      description: 'Modern business website for a Nairobi-based tech company',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      technologies: ['React', 'Tailwind CSS', 'SEO'],
      link: '#',
      github: '#'
    },
    {
      title: 'Savanna Coffee Brand',
      category: 'Brand Identity',
      description: 'Complete brand identity for premium Kenyan coffee export business',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
      technologies: ['Logo Design', 'Brand Guidelines', 'Packaging'],
      link: '#',
      github: '#'
    },
    {
      title: 'Maasai Tours',
      category: 'E-commerce',
      description: 'Tourism booking platform showcasing Kenyan safari experiences',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      technologies: ['WordPress', 'WooCommerce', 'Payment Integration'],
      link: '#',
      github: '#'
    },
    {
      title: 'Nairobi Fashion Week',
      category: 'Social Media',
      description: 'Social media campaign and content creation for fashion event',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop',
      technologies: ['Instagram', 'Facebook', 'Content Strategy'],
      link: '#',
      github: '#'
    },
    {
      title: 'Green Energy Kenya',
      category: 'Web Design',
      description: 'Sustainable energy company website with modern design',
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'TypeScript', 'Animations'],
      link: '#',
      github: '#'
    },
    {
      title: 'Local Restaurant Chain',
      category: 'Digital Marketing',
      description: 'Complete digital presence overhaul for Kenyan restaurant chain',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop',
      technologies: ['Website', 'Social Media', 'Google Ads'],
      link: '#',
      github: '#'
    }
  ];

  const categories = ['All', 'Web Design', 'Brand Identity', 'E-commerce', 'Social Media', 'Digital Marketing'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Showcasing successful projects that have helped Kenyan businesses grow their digital presence
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-gray-300 text-gray-600 hover:bg-gray-600 hover:text-white"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
