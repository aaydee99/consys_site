
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import ConsysLogo from '@/assets/consys-logo.png'
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top bar */}
      <div className="bg-gray-900 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6 text-sm">
            <a href="tel:+923000000000" className="flex items-center space-x-2 hover:text-teal-300 transition-colors">
              <Phone size={14} />
              <span>+92 333 216 4161</span>
            </a>
            <a href="mailto:info@consys.com" className="flex items-center space-x-2 hover:text-teal-300 transition-colors">
              <Mail size={14} />
              <span>info@consys.com</span>
            </a>
            <div className="hidden md:flex items-center space-x-2">
              <MapPin size={14} />
              <span>Lahore, Pakistan</span>
            </div>
          </div>
          {/* <div className="hidden sm:flex space-x-4">
            <a href="#" className="text-sm hover:text-teal-300 transition-colors">Careers</a>
            <a href="#" className="text-sm hover:text-teal-300 transition-colors">Support</a>
          </div> */}
        </div>
      </div>

      {/* Main navbar */}
      <nav className={cn(
        "bg-white transition-all duration-300 py-3 px-3",
        isScrolled && "shadow-md py-3"
      )}>
        <div className="container mx-auto flex justify-between items-center">
          <img src={ConsysLogo} alt='Logo' className='h-14 w-auto'/>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-10">
            <a href="#" className="text-gray-700 hover:text-teal-500 font-medium transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-teal-500 font-medium transition-colors">About Us</a>
            <a href="#services" className="text-gray-700 hover:text-teal-500 font-medium transition-colors">Services</a>
            <a href="#projects" className="text-gray-700 hover:text-teal-500 font-medium transition-colors">Projects</a>
            <a href="#whyChooseUs" className="text-gray-700 hover:text-teal-500 font-medium transition-colors">Why Choose Us?</a>
          </div>

          {/* Contact Button */}
          <a href="#appointment" className="hidden md:block btn-primary">
            Get a Free Quote
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden absolute left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden",
          isMenuOpen ? "max-h-screen py-4" : "max-h-0"
        )}>
          <div className="container mx-auto space-y-3 px-6">
            <a href="#" className="block py-2 text-gray-700 hover:text-teal-500 font-medium">Home</a>
            <a href="#services" className="block py-2 text-gray-700 hover:text-teal-500 font-medium">Services</a>
            <a href="#projects" className="block py-2 text-gray-700 hover:text-teal-500 font-medium">Projects</a>
            <a href="#about" className="block py-2 text-gray-700 hover:text-teal-500 font-medium">Why Choose Us?</a>
            <a href="#appointment" className="block py-3 px-4 bg-teal-500 text-white font-medium rounded-md text-center">
              Get a Free Quote
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
