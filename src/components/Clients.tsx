
import { useEffect, useRef, useState } from 'react';
import FWO from '@/assets/fwo.png'
import NLC from '@/assets/nlc.png'
import DHA from '@/assets/dha.png'
import PWD from '@/assets/pwd.png'
const clientLogos = [
  {
    id: 'FWP',
    name: 'FWO',
    logo: FWO
  },
  {
    id: 'DHA',
    name: 'DHA',
    logo: DHA
  },
  {
    id: 'NLC',
    name: 'NLC',
    logo: NLC
  },
  {
    id: 'Pak PWD',
    name: 'Pak PWD',
    logo: PWD
  }
];

const Clients = () => {
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
    <section className="py-16 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Trusted Clients</h2>
          <p className="section-subtitle">
            We've partnered with leading organizations across the region
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {clientLogos.map((client, index) => (
            <div 
              key={client.id}
              className={`transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img 
                src={client.logo}
                alt={client.name}
                className="max-w-44 grayscale-0 hover:grayscale transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
