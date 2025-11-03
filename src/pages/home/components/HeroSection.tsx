
import { useState } from 'react';

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      alert(`Searching for parking near: ${searchQuery}`);
    }
  };

  const handleQRScan = () => {
    alert('QR Scanner activated! Point your camera at a QR code to book parking instantly.');
  };

  const handleFindNearby = () => {
    alert('Finding nearby parking spots using your location...');
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Scan QR Code & Find<br />
              <span className="text-green-600">Perfect Parking Space</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Revolutionary QR technology for instant parking slot booking
            </p>
            
            <div className="flex items-center mb-8">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <input 
                    type="text"
                    placeholder="Enter your city, address or venue"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <button 
                    onClick={handleSearch}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-green-500 rounded-md flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors"
                  >
                    <i className="ri-search-line text-white"></i>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleQRScan}
                className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl px-8 py-4 text-lg"
              >
                <i className="ri-qr-scan-2-line mr-3"></i>
                Scan QR Code
              </button>
              <button 
                onClick={handleFindNearby}
                className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 text-lg"
              >
                <i className="ri-map-pin-line mr-3"></i>
                Find Nearby
              </button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              alt="QR Code Parking Scanner" 
              className="w-full h-auto object-contain" 
              src="https://readdy.ai/api/search-image?query=Modern%203D%20illustration%20of%20smartphone%20scanning%20QR%20code%20at%20parking%20lot%2C%20holographic%20QR%20code%20floating%20above%20phone%20screen%2C%20green%20and%20blue%20digital%20effects%2C%20parking%20spaces%20in%20background%20with%20location%20markers%2C%20futuristic%20tech%20style%2C%20clean%20white%20background%2C%20professional%20business%20illustration&width=600&height=500&seq=qr-parking-hero&orientation=landscape"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
