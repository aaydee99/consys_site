import { Users, Map, Award, Cpu, Building2, CircuitBoard, AirVent } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const expertiseItems = [
  {
    id: 'civil',
    title: 'Civil Engineering Expertise',
    description: 'Our team excels in delivering large-scale civil projects, including high rise buildings, water supply systems, and infrastructure development, with a focus on durability and compliance.',
    icon: <Building2 className="w-8 h-8" />
  },
  {
    id: 'electrical',
    title: 'Electrical Systems Specialists',
    description: 'We specialize in high and low voltage installations, building automation systems, and specialized lighting, ensuring safety, efficiency, and innovation in every project.',
    icon: <CircuitBoard className="w-8 h-8" />
  },
  {
    id: 'hvac',
    title: 'HVAC Design & Implementation Experts',
    description: 'Our HVAC professionals design and install energy-efficient heating, ventilation, and air conditioning systems tailored for residential, commercial, and industrial spaces.',
    icon: <AirVent className="w-8 h-8" />
  },
  {
    id: 'it',
    title: 'IT & Telecom Infrastructure Proficiency',
    description: 'We provide cutting-edge IT and telecommunication solutions, including network installations and smart building integrations, to support modern infrastructure needs.',
    icon: <Cpu className="w-8 h-8" />
  }
];

const Expertise = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
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
    <section id="whyChooseUs" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">
              Experts with 18+ Years of Experience
            </h2>
            <p className="section-subtitle">
              With decades of combined experience, our team brings unparalleled expertise to every project,
              ensuring precision, reliability, and excellence in all our services.
            </p>
          </div>

          <div 
            className="relative rounded-xl overflow-hidden h-72 md:h-96 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1581094480465-4e6c25fb4a52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-overlay flex items-end">
              <div className="p-6 md:p-8 text-white max-w-lg">
                <div className="bg-black bg-opacity-30 p-4 rounded-lg backdrop-blur-sm">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    A World-Class Team You Can Trust
                  </h3>
                  <p>
                    Our reputation is built on precision, integrity, and exceptional client service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseItems.map((item, index) => (
            <div 
              key={item.id}
              className={`p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="expertise-icon-container">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;