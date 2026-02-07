
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import ConsysLogo from '@/assets/consys-logo.png'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleNavClick = (e: React.MouseEvent, sectionId?: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (!sectionId) {
      // "Home" link — go to top of home page
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
      return;
    }

    if (location.pathname === '/') {
      // Already on home page, just scroll
      scrollToSection(sectionId);
    } else {
      // Navigate to home page, then scroll after it loads
      navigate('/');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top bar */}
      <div className="bg-gray-900 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6 text-sm">
            <a href="tel:+923000000000" className="flex items-center space-x-2 hover:text-teal-300 transition-colors">
              <Phone size={14} />
              <span>+92 322 469 1111</span>
            </a>
            <a href="mailto:info@consys.com" className="flex items-center space-x-2 hover:text-teal-300 transition-colors">
              <Mail size={14} />
              <span>consys.pk1@gmail.com</span>
            </a>
            <div className="hidden md:flex items-center space-x-2">
              <MapPin size={14} />
              <span>Lahore, Pakistan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className={cn(
        "bg-white transition-all duration-300 py-3 px-3",
        isScrolled && "shadow-md py-3"
      )}>
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" onClick={(e) => handleNavClick(e)} className="cursor-pointer">
            <img src={ConsysLogo} alt='Logo' className='h-14 w-auto'/>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-10">
            <a href="/" onClick={(e) => handleNavClick(e)} className="text-gray-700 hover:text-teal-500 font-medium transition-colors cursor-pointer">Home</a>
            <a href="/#about" onClick={(e) => handleNavClick(e, 'about')} className="text-gray-700 hover:text-teal-500 font-medium transition-colors cursor-pointer">About Us</a>
            <a href="/#services" onClick={(e) => handleNavClick(e, 'services')} className="text-gray-700 hover:text-teal-500 font-medium transition-colors cursor-pointer">Services</a>
            <a href="/#projects" onClick={(e) => handleNavClick(e, 'projects')} className="text-gray-700 hover:text-teal-500 font-medium transition-colors cursor-pointer">Projects</a>
            <a href="/#whyChooseUs" onClick={(e) => handleNavClick(e, 'whyChooseUs')} className="text-gray-700 hover:text-teal-500 font-medium transition-colors cursor-pointer">Why Choose Us?</a>
          </div>

          {/* Contact Button */}
          <a href="/#appointment" onClick={(e) => handleNavClick(e, 'appointment')} className="hidden md:block btn-primary cursor-pointer">
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
            <a href="/" onClick={(e) => handleNavClick(e)} className="block py-2 text-gray-700 hover:text-teal-500 font-medium cursor-pointer">Home</a>
            <a href="/#about" onClick={(e) => handleNavClick(e, 'about')} className="block py-2 text-gray-700 hover:text-teal-500 font-medium cursor-pointer">About Us</a>
            <a href="/#services" onClick={(e) => handleNavClick(e, 'services')} className="block py-2 text-gray-700 hover:text-teal-500 font-medium cursor-pointer">Services</a>
            <a href="/#projects" onClick={(e) => handleNavClick(e, 'projects')} className="block py-2 text-gray-700 hover:text-teal-500 font-medium cursor-pointer">Projects</a>
            <a href="/#whyChooseUs" onClick={(e) => handleNavClick(e, 'whyChooseUs')} className="block py-2 text-gray-700 hover:text-teal-500 font-medium cursor-pointer">Why Choose Us?</a>
            <a href="/#appointment" onClick={(e) => handleNavClick(e, 'appointment')} className="block py-3 px-4 bg-teal-500 text-white font-medium rounded-md text-center cursor-pointer">
              Get a Free Quote
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
