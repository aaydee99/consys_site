
import { useState, useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const projects = [
  {
    id: 'project1',
    title: 'Dubai Commercial Tower Survey',
    category: 'Surveying',
    description: 'Complete topographical and boundary survey for a 45-story commercial tower in Dubai Business Bay area.',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    year: '2023'
  },
  {
    id: 'project2',
    title: 'Islamabad Mining Site Assessment',
    category: 'Mining',
    description: 'Geological assessment and resource mapping for a major mining operation in the northern regions of Pakistan.',
    image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    year: '2022'
  },
  {
    id: 'project3',
    title: 'Al Ain Residential Complex',
    category: 'Surveying',
    description: 'Detailed property survey and subdivision plans for a 200-unit residential complex in Al Ain, UAE.',
    image: 'https://images.unsplash.com/photo-1590496794008-383c8070b257?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    year: '2023'
  },
  {
    id: 'project4',
    title: 'Karachi Port Development',
    category: 'Engineering',
    description: 'Engineering surveys and mapping for the expansion of Karachi Port Terminal facilities.',
    image: 'https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    year: '2021'
  },
  {
    id: 'project5',
    title: 'Lahore Urban Planning Survey',
    category: 'Urban Planning',
    description: 'Comprehensive urban planning survey for the eastern expansion zone of Lahore metropolitan area.',
    image: 'https://images.unsplash.com/photo-1573555657105-55d82a20c810?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    year: '2022'
  },
  {
    id: 'project6',
    title: 'Abu Dhabi Infrastructure Mapping',
    category: 'GIS Mapping',
    description: 'GIS-based infrastructure mapping and utility surveys for new development areas in Abu Dhabi.',
    image: 'https://images.unsplash.com/photo-1575517111839-3a3843ee7c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    year: '2023'
  }
];

const categories = ['All', 'Surveying', 'Mining', 'Engineering', 'Urban Planning', 'GIS Mapping'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <section id="projects" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="section-tag">Our Portfolio</span>
          <h2 className="section-title">Recent Projects</h2>
          <p className="section-subtitle">
            Explore our portfolio of successful projects across the UAE and Pakistan
          </p>
        </div>

        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category
                  ? "bg-teal-500 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "glass-card hover-card overflow-hidden",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded">
                    {project.category}
                  </span>
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={`#project-${project.id}`}
                  className="text-teal-600 font-medium flex items-center hover:text-teal-700 transition-colors"
                >
                  <span>View Details</span>
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
