
import { Mail, Phone, MapPin, Check, ChevronRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="#00B8B4" />
                <path d="M9 16C9 12.134 12.134 9 16 9C19.866 9 23 12.134 23 16C23 19.866 19.866 23 16 23" stroke="white" strokeWidth="2" />
                <path d="M16 23C14.343 23 13 21.657 13 20C13 18.343 14.343 17 16 17C17.657 17 19 18.343 19 20C19 21.657 17.657 23 16 23Z" fill="white" />
              </svg>
              <span className="font-bold text-xl">Consys</span>
            </div>
            <p className="text-gray-400 mb-6">
              Providing expert surveying and engineering solutions since 1985. Our commitment to quality and precision has made us an industry leader.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-teal-500">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-300 transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  <span>Civil Works</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-300 transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  <span>Electrical Works</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-300 transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  <span>HVAC Works</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-300 transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  <span>IT & Software Engineering</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-teal-500">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-300 transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-300 transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" />
                  <span>Our Projects</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-teal-500">
              Contact Information
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-teal-400 mr-3 mt-1" />
                <span className="text-gray-400">
                Gulshan View Society, Lahore, Pakistan
                </span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="text-teal-400 mr-3 mt-1" />
                <span className="text-gray-400">
                  +92 322 469 1111
                </span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-teal-400 mr-3 mt-1" />
                <span className="text-gray-400">
                  tahir.yousaf@consyspk.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {currentYear} Consys. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
