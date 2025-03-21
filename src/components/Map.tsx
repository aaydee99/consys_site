
import { MapPin, Phone, Mail } from 'lucide-react';

const locations = [
  {
    id: 'islamabad',
    name: 'Islamabad',
    address: '1/1-A, Askari Towers 1, Sector D, DHA 2',
    phone: '+92 333 2164161',
    email: 'islamabad@consys.com'
  },
  {
    id: 'lahore',
    name: 'Lahore',
    address: 'House No 28, Gulshan View Society, Eden Cottage Road, New Allama Iqbal Park',
    phone: '+92 42 1234567',
    email: 'lahore@consys.com'
  },
  {
    id: 'karachi',
    name: 'Karachi',
    address: 'D-104, Chapal Super Luxury Apartments, Block 13, Gulistan-e-Jauhar',
    phone: '+92 21 1234567',
    email: 'karachi@consys.com'
  }
];

const Map = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Offices</h2>
          <p className="section-subtitle">
            Visit us at one of our offices across Pakistan 
          </p>
        </div>

        <div className="flex lg:flex-row flex-col gap-6">

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
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
