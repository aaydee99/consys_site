
import { useState } from 'react';
import { CalendarIcon, User, Mail, Phone, MessageSquare, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
      }, 5000);
    }, 1500);
  };

  return (
    <section id="appointment" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <span className="section-tag">Contact Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get a Consultancy Today
            </h2>
            <p className="text-gray-600 mb-8">
              To discuss your project or surveying needs, get in touch with us for a comprehensive consultation. Our team of experts will analyze your requirements and provide tailored solutions.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Why Request a Consultation?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <CheckCircle size={18} className="text-teal-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Tailored Solutions</h4>
                    <p className="text-gray-600">Get customized recommendations specific to your project needs.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <CheckCircle size={18} className="text-teal-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Accurate Cost Estimation</h4>
                    <p className="text-gray-600">Receive detailed quotes and budget planning assistance.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <CheckCircle size={18} className="text-teal-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Expert Guidance</h4>
                    <p className="text-gray-600">Benefit from our decades of industry experience and technical expertise.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex items-center p-4 rounded-lg bg-white border border-gray-200 shadow-sm">
              <div className="mr-4 flex-shrink-0">
                <Clock size={24} className="text-teal-500" />
              </div>
              <div>
                <h4 className="font-medium">Quick Response Time</h4>
                <p className="text-gray-600">We aim to respond to all queries within 24 hours.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-6">Book Appointment</h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={32} className="text-teal-600" />
                </div>
                <h4 className="text-xl font-bold mb-2">Thank You!</h4>
                <p className="text-gray-600 mb-4">
                  Your appointment request has been received. We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User size={16} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail size={16} className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone size={16} className="text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                      placeholder="+1 (234) 567-8901"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    required
                    className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="surveying">Surveying and Mapping</option>
                    <option value="mining">Mining and Geological Surveys</option>
                    <option value="training">Training & Consultancy</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 top-3 pl-3 pointer-events-none">
                      <MessageSquare size={16} className="text-gray-400" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={4}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Tell us about your project or specific needs..."
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full btn-primary flex items-center justify-center",
                    isSubmitting && "opacity-75 cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <span>Book Now</span>
                      <ArrowRight size={16} className="ml-2" />
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
