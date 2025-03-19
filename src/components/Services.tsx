
import { useState, useEffect, useRef } from 'react';
import { MapPin, Ruler, Building, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    id: 'surveying',
    title: 'Surveying and Mapping of Real-Estate',
    description: 'We provide comprehensive surveying and mapping services for real estate properties using advanced technologies and methodologies.',
    icon: <MapPin className="w-8 h-8" />,
    details: [
      "We work with you to clearly understand the purpose of mapping your property and guide you through the process.",
      "Clearly defined objectives lead to optimized survey methodologies and outputs tailored to your specific needs.",
      "Our teams deliver accurate surveys for property registration, development planning, and dispute resolution.",
      "We provide detailed analysis and consulting based on survey results to help you make informed decisions."
    ],
    color: 'bg-blue-50 text-blue-700 border-blue-200'
  },
  {
    id: 'mining',
    title: 'Mining and Geological Surveys',
    description: 'Specialized geological surveys for mining operations, resource estimation, and site assessment using advanced techniques.',
    icon: <Ruler className="w-8 h-8" />,
    details: [
      "We conduct detailed geological assessments to identify mineral resources and evaluate mining potential.",
      "Our mining surveys provide accurate volume calculations, pit designs, and operational planning assistance.",
      "We use advanced technologies for underground mapping and structural analysis.",
      "Our reports include comprehensive data analysis and recommendations for efficient resource extraction."
    ],
    color: 'bg-green-50 text-green-700 border-green-200'
  },
  {
    id: 'training',
    title: 'Training & Consultancy',
    description: 'Professional training programs and consultancy services for engineering and surveying professionals and organizations.',
    icon: <Building className="w-8 h-8" />,
    details: [
      "We offer specialized training programs for surveying professionals and engineering teams.",
      "Our consultancy services provide expert guidance on project planning and implementation.",
      "We help organizations develop internal capabilities for surveying and engineering projects.",
      "Our team provides ongoing support and mentorship for professional development."
    ],
    color: 'bg-purple-50 text-purple-700 border-purple-200'
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(services[0].id);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.2 }
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

  const currentService = services.find(s => s.id === selectedService);

  return (
    <section id="services" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="section-tag">What We Do</span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We provide comprehensive surveying and engineering solutions tailored to your specific project needs.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={cn(
                "service-card hover:shadow-lg transition-all duration-300 cursor-pointer",
                selectedService === service.id && "service-card-selected",
                isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                { "transition-delay-100": index === 0 },
                { "transition-delay-200": index === 1 },
                { "transition-delay-300": index === 2 }
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedService(service.id)}
            >
              <div className={cn(
                "w-16 h-16 rounded-full flex items-center justify-center mb-4",
                service.color
              )}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button 
              title='Button'
                className="text-teal-600 font-medium flex items-center group"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedService(service.id);
                }}
              />
            </div>
          ))}
        </div>

        {currentService && (
          <div className="mt-12 glass-card p-6 md:p-8 animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">{currentService.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  Our {currentService.title.toLowerCase()} service provides comprehensive solutions tailored to your specific needs.
                </p>
                <ul className="space-y-3">
                  {currentService.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-teal-100 text-teal-800 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-1">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="#appointment" 
                  className="btn-primary mt-6 inline-flex items-center"
                >
                  <span>Request This Service</span>
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <p className="text-gray-500 italic">Service illustration placeholder</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
