import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { gsap } from 'gsap';
import { projects, categories } from '@/data/projects';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const scrollerRef = useRef(null);
  const animationRef = useRef(null);

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

  // GSAP Infinite Scroll Animation
  useEffect(() => {
    if (!scrollerRef.current || !isVisible) return;

    // Calculate the total width of the original set of projects
    const cardWidth = 300; // Width of each card (w-[300px])
    const gap = 24; // Tailwind's space-x-6 (6 * 4px = 24px)
    const totalCards = filteredProjects.length;
    const totalWidth = totalCards * (cardWidth + gap) - gap; // Total width of one set of cards

    // Set initial position
    gsap.set(scrollerRef.current, { x: 0 });

    // Create the infinite scroll animation
    animationRef.current = gsap.to(scrollerRef.current, {
      x: -totalWidth, // Move to the left by the total width of one set
      duration: totalCards * 4, // Adjust duration based on number of cards (1s per card)
      ease: 'none', // Linear animation for constant speed
      repeat: -1, // Infinite repeat
      modifiers: {
        x: gsap.utils.unitize((x) => {
          // Modulo to loop back to the start
          return parseFloat(x) % totalWidth;
        })
      }
    });

    return () => {
      // Clean up the animation on unmount or when filteredProjects changes
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [filteredProjects, isVisible]);

  // Handle hover to pause/resume animation
  const handleMouseEnter = () => {
    if (animationRef.current) {
      animationRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    if (animationRef.current) {
      animationRef.current.resume();
    }
  };

  // Duplicate the projects to create a seamless loop
  const duplicatedProjects = [...filteredProjects, ...filteredProjects];

  const visibleCategories = categories.filter(category => {
    if (category === 'All') return true; // Always show "All" category
    return projects.some(project => project.category === category);
  });

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
          {visibleCategories.map((category) => (
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

        {/* Infinite scrolling container */}
        <div className="overflow-hidden">
          <div
            ref={scrollerRef}
            className="flex space-x-6"
            style={{ minWidth: 'max-content' }}
          >
            {duplicatedProjects.map((project, index) => (
              <Link
                to={`/project/${project.id}`}
                key={`${project.id}-${index}`}
                className={cn(
                  "glass-card hover-card overflow-hidden flex-shrink-0 w-[300px] transition-transform duration-300 block",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded">
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-500">{project.year}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-3">{project.description}</p>
                  <span className="inline-flex items-center text-teal-600 font-medium text-sm group">
                    View Details
                    <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
