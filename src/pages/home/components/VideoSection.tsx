
import { useState } from 'react';

export default function VideoSection() {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const aiSteps = [
    {
      id: 1,
      title: "Voice Command",
      subtitle: "Natural Language Processing",
      description: "Simply speak your parking needs and our AI understands instantly",
      features: ["Voice Recognition", "Natural Language Processing", "Multi-language Support"],
      technology: "Speech-to-Text AI",
      integration: "Mobile App & Dashboard", 
      img: './1.png'
    },
    {
      id: 2,
      title: "AI Search",
      subtitle: "Intelligent Analysis",
      description: "AI analyzes real-time data to find the perfect parking spot",
      features: ["Real-time Analysis", "Traffic Patterns", "Availability Prediction"],
      technology: "Machine Learning",
      integration: "IoT Sensors & Database", 
       img: './3.png'
    },
    {
      id: 3,
      title: "Route Optimization",
      subtitle: "Smart Navigation",
      description: "AI calculates the fastest route considering traffic and availability",
      features: ["Traffic Analysis", "Route Optimization", "ETA Calculation"],
      technology: "GPS & AI Algorithms",
      integration: "Maps & Navigation", 
       img: './2.png'
    },
    {
      id: 4,
      title: "QR Booking",
      subtitle: "Instant Reservation",
      description: "Automatic booking with QR code generation for seamless access",
      features: ["Instant Booking", "QR Generation", "Payment Processing"],
      technology: "Blockchain & QR Tech",
      integration: "Payment Gateway", 
       img: './2.png'
    },
    {
      id: 5,
      title: "Predictive AI",
      subtitle: "Learning Assistant",
      description: "AI learns your patterns to provide proactive parking suggestions",
      features: ["Pattern Learning", "Predictive Analysis", "Smart Suggestions"],
      technology: "Neural Networks",
      integration: "User Behavior Analytics", 
       img: './1.png'
    }
  ];

  const playDemo = () => {
    setIsPlaying(true);
    setSelectedStep(null);
    
    aiSteps.forEach((step, index) => {
      setTimeout(() => {
        setSelectedStep(step.id);
        if (index === aiSteps.length - 1) {
          setTimeout(() => {
            setIsPlaying(false);
            setSelectedStep(null);
          }, 2000);
        }
      }, index * 1500);
    });
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Smart AI Assistant
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            Experience the future of parking with our intelligent AI assistant that makes finding and booking parking effortless
          </p>
          <button 
            onClick={playDemo}
            disabled={isPlaying}
            className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl px-6 py-3 text-sm disabled:opacity-50"
          >
            <i className="ri-play-circle-line mr-2"></i>
            {isPlaying ? 'Playing Demo...' : 'Watch Complete AI Flow'}
          </button>
        </div>

        <div className="space-y-12">
          {aiSteps.map((step, index) => (
            <div 
              key={step.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative">
                  <img 
                    alt={`AI ${step.title} Process`}
                    className="w-full h-80 object-contain"
                    src={step.img}
                  />
                  <div className={`absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm transition-all duration-300 ${
                    selectedStep === step.id ? 'bg-green-500 scale-110' : 'bg-gray-700'
                  }`}>
                    {step.id}
                  </div>
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-green-600 font-medium">
                      {step.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4">
                    {step.description}
                  </p>
                  
                  {selectedStep === step.id && (
                    <div className="space-y-3 border-t pt-4">
                      <div>
                        <h4 className="text-xs font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {step.features.map((feature, idx) => (
                            <li key={idx} className="text-xs text-gray-600 flex items-center">
                              <i className="ri-check-line text-green-500 mr-2 text-sm"></i>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <h4 className="text-xs font-semibold text-gray-900 mb-1">Technology:</h4>
                          <p className="text-xs text-gray-600">{step.technology}</p>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-gray-900 mb-1">Integration:</h4>
                          <p className="text-xs text-gray-600">{step.integration}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <button 
                    onClick={() => setSelectedStep(selectedStep === step.id ? null : step.id)}
                    className="mt-4 inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-4 py-2 text-xs"
                  >
                    {selectedStep === step.id ? 'Hide Details' : 'View Details'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
            AI Technology Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { icon: 'ri-brain-line', title: 'Machine Learning', desc: 'Advanced algorithms for pattern recognition' },
              { icon: 'ri-mic-line', title: 'Voice Assistant', desc: 'Natural language processing capabilities' },
              { icon: 'ri-eye-line', title: 'Computer Vision', desc: 'Real-time image and QR code analysis' },
              { icon: 'ri-database-line', title: 'Big Data', desc: 'Processing millions of parking transactions' }
            ].map((tech, index) => (
              <div key={index} className="text-center p-3 rounded-lg bg-gray-50">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className={`${tech.icon} text-green-600 text-lg`}></i>
                </div>
                <h4 className="text-sm font-semibold text-gray-900 mb-1">{tech.title}</h4>
                <p className="text-xs text-gray-600">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
