
export default function MobileSection() {
  const features = [
    'Instant QR code scanning',
    'Real-time availability updates', 
    'Secure instant payments',
    'GPS navigation to your slot'
  ];

  const handleDownload = () => {
    alert('Redirecting to app store to download QR Parking App...');
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              alt="QR Parking App Mobile Interface" 
              className="w-full max-w-md mx-auto" 
              src="https://readdy.ai/api/search-image?query=Modern%20smartphone%20mockup%20showing%20QR%20parking%20app%20interface%20with%20camera%20viewfinder%20scanning%20QR%20code%2C%20parking%20map%20with%20available%20slots%2C%20booking%20confirmation%20screen%2C%20clean%20mobile%20UI%20design%2C%20green%20and%20blue%20color%20scheme%2C%20professional%20app%20design%2C%20realistic%20phone%20frame%2C%20white%20background&width=400&height=600&seq=qr-phone-mockup&orientation=portrait"
            />
          </div>
          
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              QR Parking Made<br />
              <span className="text-green-600">Simple & Fast</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Scan, book, and park in seconds with our advanced QR technology.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-check-line text-white"></i>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <button 
              onClick={handleDownload}
              className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl px-8 py-4 text-lg"
            >
              <i className="ri-download-line mr-3"></i>
              Download QR Parking App
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
