
export default function PricingSection() {
  const plans = [
    {
      name: 'Hourly',
      price: '$3',
      period: '/hour',
      description: 'Perfect for short visits and quick stops',
      features: [
        'Pay as you go',
        'No commitment',
        'QR code access',
        'Mobile payments'
      ],
      buttonText: 'Start Parking',
      buttonStyle: 'bg-green-500 text-white hover:bg-green-600',
      borderStyle: 'border-gray-200 hover:border-green-500',
      popular: false
    },
    {
      name: 'Monthly',
      price: '$89',
      period: '/month',
      description: 'Best value for regular commuters',
      features: [
        'Unlimited parking',
        'Reserved spot option',
        'Priority support',
        'Guest passes included'
      ],
      buttonText: 'Choose Monthly',
      buttonStyle: 'bg-white text-green-600 hover:bg-gray-50 font-semibold',
      borderStyle: 'border-green-500',
      popular: true,
      bgStyle: 'bg-gradient-to-b from-green-500 to-green-600 text-white'
    },
    {
      name: 'Annual',
      price: '$899',
      period: '/year',
      description: 'Maximum savings for long-term users',
      features: [
        '2 months free',
        'Premium locations',
        'Concierge service',
        'Car wash discounts'
      ],
      buttonText: 'Save with Annual',
      buttonStyle: 'bg-green-500 text-white hover:bg-green-600',
      borderStyle: 'border-gray-200 hover:border-green-500',
      popular: false
    }
  ];

  const handlePlanSelect = (planName: string) => {
    alert(`Selected ${planName} plan - Redirecting to payment...`);
  };

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Flexible Parking Plans</h3>
          <p className="text-xl text-gray-600">Choose the plan that fits your parking needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-2xl border-2 p-8 transition-all duration-300 relative ${
                plan.popular 
                  ? `${plan.bgStyle} ${plan.borderStyle}` 
                  : `bg-white ${plan.borderStyle}`
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <h4 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h4>
                <div className={`text-3xl font-bold mb-4 ${plan.popular ? 'text-white' : 'text-green-600'}`}>
                  {plan.price}
                  <span className={`text-lg ${plan.popular ? 'opacity-80' : 'text-gray-500'}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`mb-6 ${plan.popular ? 'opacity-90' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                
                <ul className={`space-y-3 text-sm mb-8 ${plan.popular ? 'text-white' : 'text-gray-600'}`}>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <i className={`ri-check-line mr-2 ${plan.popular ? 'text-green-200' : 'text-green-500'}`}></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => handlePlanSelect(plan.name)}
                  className={`w-full py-3 rounded-lg transition-colors cursor-pointer ${plan.buttonStyle}`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
