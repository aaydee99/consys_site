
import { MapPin, Phone, Mail } from 'lucide-react';

const locations = [
  {
    id: 'islamabad',
    name: 'Islamabad',
    address: 'Plot No 680, Street 25, Sector F-1, Bahria Town Phase 8',
    phone: '+92 332 8261692',
    email: 'consys.pk1@gmail.com',
    email2: 'tahir.yousaf@consyspk.com'
  },
  {
    id: 'lahore',
    name: 'Lahore',
    address: 'House No 28, Gulshan View Society, Eden Cottage Road, New Allama Iqbal Park',
    phone: '+92 322 469 1111',
    email: 'consys.pk1@gmail.com',
    email2: 'tahir.yousaf@consyspk.com'
  },
  {
    id: 'karachi',
    name: 'Karachi',
    address: 'Plot No #1, Precinct 32, Bahria Town',
    phone: '+92 3125270696',
    email: 'consys.pk1@gmail.com',
    email2: 'tahir.yousaf@consyspk.com'
  }
];

const Map = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="section-tag">Our Locations</span>
          <h2 className="section-title">Our Offices</h2>
          <p className="section-subtitle">
            Visit us at one of our offices across Pakistan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.map((location) => (
            <div
              key={location.id}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md hover:border-teal-300 transition-all duration-300 flex flex-col h-full"
            >
              <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                <MapPin size={20} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">{location.name}</h3>

              <div className="space-y-3 flex-1">
                <div className="flex items-start">
                  <MapPin size={16} className="text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">{location.address}</p>
                </div>
                <div className="flex items-center">
                  <Phone size={16} className="text-teal-600 mr-3 flex-shrink-0" />
                  <a href={`tel:${location.phone}`} className="text-gray-700 hover:text-teal-600 transition-colors text-sm">
                    {location.phone}
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="text-teal-600 mr-3 flex-shrink-0" />
                  <a href={`mailto:${location.email}`} className="text-gray-700 hover:text-teal-600 transition-colors text-sm">
                    {location.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="text-teal-600 mr-3 flex-shrink-0" />
                  <a href={`mailto:${location.email2}`} className="text-gray-700 hover:text-teal-600 transition-colors text-sm">
                    {location.email2}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Map;
