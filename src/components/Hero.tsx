
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
    className="pt-48 pb-20 relative bg-cover bg-center"
    style={{ 
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`
    }}
  >
      <div className="absolute inset-0 bg-gradient-overlay"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl reveal-animation">
          <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <span className="section-tag">Expert & Professional</span>
          </div>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          Engineering the Future: Comprehensive Civil, Electrical, HVAC, and IT Expertise
          </h1>
          <p className={`text-lg text-gray-100 mb-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          We are a dynamic, full-service company delivering cutting-edge solutions across civil engineering, electrical systems, HVAC, and IT infrastructure. From designing and constructing robust foundations to powering efficient buildings and integrating smart technology, we bring expertise, reliability, and innovation to every project. Our integrated approach ensures seamless performance, sustainability, and excellence, shaping the future of modern environments.
          </p>
          <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <a 
              href="#services" 
              className="btn-primary flex items-center space-x-2 group"
            >
              <span>Our Services</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="#appointment" 
              className="bg-white text-gray-900 hover:bg-gray-100 font-medium py-2 px-6 rounded-md transition-all duration-300 shadow-sm"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
