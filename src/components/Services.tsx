
import { useState, useEffect, useRef } from 'react';
import { AirVent, CircuitBoard, Building, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    id: 'civil',
    title: 'Civil Works',
    description: 'Comprehensive civil engineering services for infrastructure development, construction, and project management.',
    icon: <Building className="w-8 h-8" />,
    details: [
      "We provide end-to-end civil engineering solutions for residential, commercial, and industrial projects.",
      "Our services include structural design, foundation work, and construction supervision.",
      "We ensure compliance with local regulations and industry standards.",
      "Our team delivers detailed planning and execution for durable and sustainable infrastructure."
    ],
    color: 'bg-blue-50 text-blue-700 border-blue-200',
    image: 'https://plus.unsplash.com/premium_photo-1663090226912-511b20a3f8a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'electrical',
    title: 'Electrical Works',
    description: 'Expert electrical engineering services for power systems, installations, and maintenance.',
    icon: <CircuitBoard className="w-8 h-8" />,
    details: [
      "We design and implement electrical systems for buildings and facilities.",
      "Our services cover wiring, lighting, power distribution, and safety systems.",
      "We provide testing, maintenance, and upgrade solutions for existing electrical infrastructure.",
      "Our team ensures energy efficiency and compliance with electrical codes."
    ],
    color: 'bg-green-50 text-green-700 border-green-200',
    image: 'https://plus.unsplash.com/premium_photo-1664695710295-b524b34386db?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'hvac',
    title: 'HVAC Works',
    description: 'Specialized heating, ventilation, and air conditioning services for optimal indoor climate control.',
    icon: <AirVent className="w-8 h-8" />,
    details: [
      "We design and install HVAC systems tailored to your specific needs.",
      "Our services include system maintenance, repairs, and performance optimization.",
      "We ensure energy-efficient solutions for residential and commercial properties.",
      "Our team provides expert consultation for improving air quality and comfort."
    ],
    color: 'bg-purple-50 text-purple-700 border-purple-200',
    image: 'https://images.unsplash.com/photo-1615309662243-70f6df917b59?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
              <div>
                <img src={currentService.image} alt="" className='rounded-lg max-h-72 w-full object-cover flex items-center justify-center'/>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
