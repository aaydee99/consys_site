
import { MapPin, Phone, Mail } from 'lucide-react';

const locations = [
  {
    id: 'islamabad',
    name: 'Islamabad',
    address: 'Block F, Blue Area, Islamabad, Pakistan',
    phone: '+92 51 1234567',
    email: 'islamabad@consys.com'
  },
  {
    id: 'abu_dhabi',
    name: 'Abu Dhabi',
    address: 'Al Muroor Road, Abu Dhabi, UAE',
    phone: '+971 2 1234567',
    email: 'abudhabi@consys.com'
  },
  {
    id: 'lahore',
    name: 'Lahore',
    address: 'Gulberg III, Lahore, Pakistan',
    phone: '+92 42 1234567',
    email: 'lahore@consys.com'
  }
];

const Map = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Offices</h2>
          <p className="section-subtitle">
            Visit us at one of our offices across Pakistan and UAE
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 rounded-lg overflow-hidden h-[400px] bg-gray-200">
            {/* Map placeholder - in a real app, this would be replaced with an actual map integration */}
            <div className="h-full w-full flex items-center justify-center bg-gray-200">
              <img 
                src="https://maps.googleapis.com/maps/api/staticmap?center=Islamabad,Pakistan&zoom=5&size=800x400&markers=color:red%7CIslamabad,Pakistan&markers=color:red%7CAbu+Dhabi,UAE&markers=color:red%7CLahore,Pakistan&key=AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik"
                alt="Office Locations Map"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4">
            {locations.map((location) => (
              <div key={location.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2">{location.name}</h3>
                <div className="flex items-start mb-2">
                  <MapPin size={16} className="text-teal-600 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{location.address}</p>
                </div>
                <div className="flex items-center mb-2">
                  <Phone size={16} className="text-teal-600 mr-2 flex-shrink-0" />
                  <a href={`tel:${location.phone}`} className="text-gray-700 hover:text-teal-600 transition-colors">
                    {location.phone}
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="text-teal-600 mr-2 flex-shrink-0" />
                  <a href={`mailto:${location.email}`} className="text-gray-700 hover:text-teal-600 transition-colors">
                    {location.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
