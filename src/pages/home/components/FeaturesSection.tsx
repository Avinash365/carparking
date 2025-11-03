
export default function FeaturesSection() {
  const features = [
    {
      icon: 'ri-qr-scan-2-line',
      title: 'QR Code Scanning',
      description: 'Instant parking slot booking with QR technology',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      iconBg: 'bg-green-500'
    },
    {
      icon: 'ri-time-line',
      title: 'Real-Time Updates',
      description: 'Live availability status and instant notifications',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      iconBg: 'bg-blue-500'
    },
    {
      icon: 'ri-secure-payment-line',
      title: 'Secure Payments',
      description: 'Multiple payment options with secure transactions',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      iconBg: 'bg-purple-500'
    },
    {
      icon: 'ri-navigation-line',
      title: 'GPS Navigation',
      description: 'Turn-by-turn directions to your parking spot',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      iconBg: 'bg-orange-500'
    }
  ];

  return (
    <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Parking Solutions</h2>
          <p className="text-xl text-gray-600">Everything you need for smart parking management</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`text-center p-6 ${feature.bgColor} rounded-xl border ${feature.borderColor} hover:shadow-lg transition-all duration-300 cursor-pointer group`}
            >
              <div className={`w-16 h-16 ${feature.iconBg} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${feature.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
