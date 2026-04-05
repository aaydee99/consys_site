import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { highlightProjects } from '@/data/projects';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Projects = () => {
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

  return (
    <section id="projects" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="section-tag">Our Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of recent highlights — explore the full portfolio on our projects page.
          </p>
        </div>

        <div
          className={cn(
            'relative max-w-6xl mx-auto transition-opacity duration-500',
            isVisible ? 'opacity-100' : 'opacity-0'
          )}
        >
          <Carousel
            opts={{ align: 'start', loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {highlightProjects.map((project) => (
                <CarouselItem
                  key={project.id}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <Link
                    to={`/project/${project.id}`}
                    className="glass-card hover-card overflow-hidden flex flex-col h-full min-h-[420px] transition-transform duration-300 block"
                  >
                    <div className="h-48 overflow-hidden shrink-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded">
                          {project.category}
                        </span>
                        <span className="text-xs text-gray-500">{project.year}</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 line-clamp-2">{project.title}</h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-3 flex-1">
                        {project.description}
                      </p>
                      <span className="inline-flex items-center text-teal-600 font-medium text-sm group mt-auto">
                        View Details
                        <ArrowRight
                          size={14}
                          className="ml-1 transition-transform group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 sm:-left-4 border-teal-200 text-teal-700 hover:bg-teal-50" />
            <CarouselNext className="right-0 sm:-right-4 border-teal-200 text-teal-700 hover:bg-teal-50" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 btn-primary px-8 py-3 rounded-md font-medium"
          >
            View all projects
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
