
import { useState, useEffect, useRef } from 'react';
import { AirVent, CircuitBoard, Building, ArrowRight, Flame, Sun, ShieldCheck, MoveVertical } from 'lucide-react';
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
  },
  {
  id: 'firefighting',
  title: 'Fire Fighting Works',
  description: 'Integrated fire protection systems to ensure life safety and property security.',
  icon: <Flame className="w-8 h-8" />,
  details: [
    "We install fire suppression systems, including sprinklers, extinguishers, and hydrants.",
    "Our solutions comply with international fire safety codes and local regulations.",
    "We offer maintenance, inspections, and upgrades for firefighting equipment.",
    "Our team designs systems tailored to commercial, industrial, and residential buildings."
  ],
  color: 'bg-red-50 text-red-700 border-red-200',
  image: 'https://images.unsplash.com/photo-1615591271384-fd3b39c79e9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'
},
{
  id: 'security',
  title: 'Security Works',
  description: 'Advanced surveillance and access control systems to safeguard your assets.',
  icon: <ShieldCheck className="w-8 h-8" />,
  details: [
    "We install CCTV, access control, and alarm systems for 24/7 monitoring.",
    "Our security solutions are scalable for residential, commercial, and industrial use.",
    "We integrate smart technologies for real-time alerts and remote access.",
    "Our services ensure physical and digital protection through expert deployment."
  ],
  color: 'bg-gray-50 text-gray-700 border-gray-200',
  image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'
},
{
  id: 'solar',
  title: 'Solar Works',
  description: 'Sustainable solar energy solutions for clean, renewable power generation.',
  icon: <Sun className="w-8 h-8" />,
  details: [
    "We design and install on-grid and off-grid solar systems.",
    "Our services include site evaluation, system sizing, and net metering.",
    "We provide solar panel cleaning, performance testing, and maintenance.",
    "Our experts ensure maximum energy yield with smart solar technologies."
  ],
  color: 'bg-yellow-50 text-yellow-700 border-yellow-200',
  image: 'https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'
},
{
  id: 'elevator',
  title: 'Elevator Works',
  description: 'Reliable vertical transportation solutions for residential, commercial, and industrial buildings.',
  icon: <MoveVertical className="w-8 h-8" />,
  details: [
    "We provide installation of passenger, freight, and panoramic elevators.",
    "Our services include modernization, upgrades, and periodic inspections.",
    "We follow international safety standards to ensure smooth and secure operation.",
    "Our maintenance programs prevent breakdowns and extend system life."
  ],
  color: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'
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

       <div className="overflow-x-auto py-6 px-2">
  <div className="flex space-x-4">
    {services.map((service, index) => (
      <div
        key={service.id}
        className={cn(
          "flex-shrink-0 w-[300px] h-[420px] bg-white p-5 rounded-lg border service-card hover:shadow-lg transition-all duration-300 cursor-pointer whitespace-normal break-words flex flex-col justify-between",
          selectedService === service.id && "service-card-selected",
          isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
        style={{ transitionDelay: `${index * 100}ms` }}
        onClick={() => setSelectedService(service.id)}
      >
        <div>
          <div className={cn(
            "w-16 h-16 rounded-full flex items-center justify-center mb-4",
            service.color
          )}>
            {service.icon}
          </div>
          <h3 className="text-xl font-bold mb-3">{service.title}</h3>
          <p className="text-gray-600 mb-4 break-words whitespace-normal">
            {service.description}
          </p>
        </div>
        <button
          title="Button"
          className="text-teal-600 font-medium flex items-center group mt-auto"
          onClick={(e) => {
            e.stopPropagation();
            setSelectedService(service.id);
          }}
        >
          Learn more
        </button>
      </div>
    ))}
  </div>
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
