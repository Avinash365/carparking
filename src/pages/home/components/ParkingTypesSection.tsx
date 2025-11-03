
export default function ParkingTypesSection() {
  const parkingTypes = [
    {
      icon: 'ri-building-line',
      title: 'Airport Parking',
      description: 'Long-term and short-term parking solutions for airports with shuttle services',
      features: ['24/7 Security Monitoring', 'Free Shuttle Service', 'Covered Parking Available'],
      buttonText: 'Book Airport Parking',
      gradient: 'from-indigo-50 to-blue-50',
      border: 'border-indigo-200',
      iconBg: 'bg-indigo-500',
      buttonBg: 'bg-indigo-500 hover:bg-indigo-600'
    },
    {
      icon: 'ri-shopping-bag-line',
      title: 'Mall Parking',
      description: 'Convenient shopping center parking with validation and rewards programs',
      features: ['Parking Validation', 'Loyalty Rewards', 'Electric Vehicle Charging'],
      buttonText: 'Find Mall Parking',
      gradient: 'from-emerald-50 to-green-50',
      border: 'border-emerald-200',
      iconBg: 'bg-emerald-500',
      buttonBg: 'bg-emerald-500 hover:bg-emerald-600'
    },
    {
      icon: 'ri-hospital-line',
      title: 'Hospital Parking',
      description: 'Priority parking for patients and visitors with special rates and accessibility',
      features: ['Patient Priority Access', 'Accessible Parking', 'Emergency Rates'],
      buttonText: 'Reserve Hospital Spot',
      gradient: 'from-rose-50 to-pink-50',
      border: 'border-rose-200',
      iconBg: 'bg-rose-500',
      buttonBg: 'bg-rose-500 hover:bg-rose-600'
    },
    {
      icon: 'ri-calendar-event-line',
      title: 'Event Parking',
      description: 'Special event parking for concerts, sports, and conferences with pre-booking',
      features: ['Pre-Event Booking', 'VIP Parking Options', 'Group Discounts'],
      buttonText: 'Book Event Parking',
      gradient: 'from-amber-50 to-yellow-50',
      border: 'border-amber-200',
      iconBg: 'bg-amber-500',
      buttonBg: 'bg-amber-500 hover:bg-amber-600'
    },
    {
      icon: 'ri-home-office-line',
      title: 'Office Parking',
      description: 'Monthly and daily parking passes for office buildings and business districts',
      features: ['Monthly Passes', 'Corporate Accounts', 'Reserved Spots'],
      buttonText: 'Get Office Pass',
      gradient: 'from-violet-50 to-purple-50',
      border: 'border-violet-200',
      iconBg: 'bg-violet-500',
      buttonBg: 'bg-violet-500 hover:bg-violet-600'
    },
    {
      icon: 'ri-charging-pile-line',
      title: 'EV Charging',
      description: 'Electric vehicle charging stations with fast charging and parking combo deals',
      features: ['Fast Charging Stations', 'Charging + Parking Deals', 'Real-time Availability'],
      buttonText: 'Find EV Charging',
      gradient: 'from-teal-50 to-cyan-50',
      border: 'border-teal-200',
      iconBg: 'bg-teal-500',
      buttonBg: 'bg-teal-500 hover:bg-teal-600'
    }
  ];

  const handleBooking = (type: string) => {
    alert(`Booking ${type} - Redirecting to booking page...`);
  };

  return (
    <section id="parking-types" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {parkingTypes.map((type, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${type.gradient} rounded-2xl p-8 border ${type.border} hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${type.iconBg} rounded-lg flex items-center justify-center mr-4`}>
                  <i className={`${type.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{type.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4">{type.description}</p>
              
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                {type.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <i className="ri-check-line text-green-500 mr-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => handleBooking(type.title)}
                className={`mt-4 w-full ${type.buttonBg} text-white py-2 rounded-lg transition-colors cursor-pointer`}
              >
                {type.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
