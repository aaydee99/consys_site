import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Calendar, Tag, ChevronRight } from 'lucide-react';
import { projects } from '@/data/projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const navigateToHomeSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  };

  const project = projects.find((p) => p.id === id);
  const currentIndex = projects.findIndex((p) => p.id === id);

  // Get related projects (same category, excluding current)
  const relatedProjects = project
    ? projects.filter((p) => p.category === project.category && p.id !== project.id).slice(0, 3)
    : [];

  // Previous/Next navigation
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-48 pb-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
          <a href="/#projects" onClick={(e) => navigateToHomeSection(e, 'projects')} className="btn-primary inline-flex items-center cursor-pointer">
            <ArrowLeft size={16} className="mr-2" />
            Back to Projects
          </a>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Banner */}
      <section
        className="pt-48 pb-20 relative bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${project.image})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Breadcrumb */}
            <nav className="flex items-center text-sm text-gray-300 mb-6">
              <Link to="/" className="hover:text-teal-300 transition-colors">
                Home
              </Link>
              <ChevronRight size={14} className="mx-2" />
              <a href="/#projects" onClick={(e) => navigateToHomeSection(e, 'projects')} className="hover:text-teal-300 transition-colors cursor-pointer">
                Projects
              </a>
              <ChevronRight size={14} className="mx-2" />
              <span className="text-white">{project.title}</span>
            </nav>

            <span className="section-tag">{project.category}</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl">
              {project.title}
            </h1>
            <div className="flex items-center space-x-4 text-gray-200">
              <div className="flex items-center space-x-2">
                <Calendar size={16} />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Tag size={16} />
                <span>{project.category}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="rounded-xl overflow-hidden mb-8 shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[400px] object-cover"
                  />
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-6">Project Overview</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="bg-gray-50 rounded-xl p-6 md:p-8 mb-8">
                  <h3 className="text-xl font-bold mb-4">About This Project</h3>
                  <p className="text-gray-600 leading-relaxed">
                    This {project.category.toLowerCase()} project was completed in {project.year} by the Consys team.
                    Our experienced engineers and project managers ensured the highest standards of quality,
                    safety, and compliance throughout every phase of the project, from planning and design
                    through to execution and handover.
                  </p>
                </div>

                {/* Prev / Next Navigation */}
                <div className="flex justify-between items-center border-t border-b border-gray-200 py-6 mt-8">
                  {prevProject ? (
                    <Link
                      to={`/project/${prevProject.id}`}
                      className="group flex items-center text-gray-600 hover:text-teal-600 transition-colors"
                    >
                      <ArrowLeft
                        size={18}
                        className="mr-2 transition-transform group-hover:-translate-x-1"
                      />
                      <div>
                        <span className="text-xs text-gray-400 block">Previous Project</span>
                        <span className="font-medium line-clamp-1 max-w-[200px]">
                          {prevProject.title}
                        </span>
                      </div>
                    </Link>
                  ) : (
                    <div />
                  )}
                  {nextProject ? (
                    <Link
                      to={`/project/${nextProject.id}`}
                      className="group flex items-center text-right text-gray-600 hover:text-teal-600 transition-colors"
                    >
                      <div>
                        <span className="text-xs text-gray-400 block">Next Project</span>
                        <span className="font-medium line-clamp-1 max-w-[200px]">
                          {nextProject.title}
                        </span>
                      </div>
                      <ArrowRight
                        size={18}
                        className="ml-2 transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  ) : (
                    <div />
                  )}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Project Info Card */}
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-6 sticky top-36">
                  <h3 className="text-xl font-bold mb-5 pb-4 border-b border-gray-100">
                    Project Details
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex justify-between">
                      <span className="text-gray-500">Category</span>
                      <span className="font-medium text-gray-900">{project.category}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-500">Year</span>
                      <span className="font-medium text-gray-900">{project.year}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-500">Status</span>
                      <span className="font-medium text-teal-600">
                        {parseInt(project.year) >= 2025 ? 'Ongoing' : 'Completed'}
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-500">Client</span>
                      <span className="font-medium text-gray-900">Consys</span>
                    </li>
                  </ul>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <a
                      href="/#appointment"
                      onClick={(e) => navigateToHomeSection(e, 'appointment')}
                      className="btn-primary w-full flex items-center justify-center cursor-pointer"
                    >
                      <span>Get a Free Quote</span>
                      <ArrowRight size={16} className="ml-2" />
                    </a>
                  </div>
                </div>

                {/* Back to projects link */}
                <a
                  href="/#projects"
                  onClick={(e) => navigateToHomeSection(e, 'projects')}
                  className="flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors mb-6 cursor-pointer"
                >
                  <ArrowLeft size={16} className="mr-2" />
                  Back to All Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <span className="section-tag">More Projects</span>
              <h2 className="section-title">Related Projects</h2>
              <p className="section-subtitle">
                Explore more of our {project.category.toLowerCase()} projects
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((related, index) => (
                <Link
                  key={related.id}
                  to={`/project/${related.id}`}
                  className={cn(
                    'glass-card hover-card overflow-hidden transition-all duration-500',
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  )}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded">
                        {related.category}
                      </span>
                      <span className="text-xs text-gray-500">{related.year}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 line-clamp-2">{related.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-3">{related.description}</p>
                    <span className="inline-flex items-center text-teal-600 font-medium text-sm mt-3 group">
                      View Details
                      <ArrowRight
                        size={14}
                        className="ml-1 transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ProjectDetail;
