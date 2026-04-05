import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projects, categories } from '@/data/projects';
import { cn } from '@/lib/utils';

const ProjectsListing = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const visibleCategories = categories.filter((category) => {
    if (category === 'All') return true;
    return projects.some((project) => project.category === category);
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-40 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="section-tag">Our Portfolio</span>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">All Projects</h1>
            <p className="text-gray-600 text-lg">
              Browse the full portfolio of civil, electrical, HVAC, and infrastructure work delivered by Consys across Pakistan.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {visibleCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                  activeCategory === category
                    ? 'bg-teal-500 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mb-8">
            Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            {activeCategory !== 'All' ? ` in ${activeCategory}` : ''}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="glass-card hover-card overflow-hidden block transition-all duration-300"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded">
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-500">{project.year}</span>
                  </div>
                  <h2 className="text-lg font-bold mb-2 line-clamp-2">{project.title}</h2>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-3">{project.description}</p>
                  <span className="inline-flex items-center text-teal-600 font-medium text-sm">
                    View details
                    <ArrowRight size={14} className="ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsListing;
