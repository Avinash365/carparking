
import { useState } from 'react';

export default function WhyChooseSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const aiSteps = [
    {
      id: 1,
      title: 'Voice Command Recognition',
      subtitle: 'Natural Language Processing',
      description: 'Simply speak naturally - "Find me parking near the mall" or "Book a spot downtown". Our AI understands context, location preferences, and urgency levels.',
      icon: 'ri-mic-line',
      color: 'blue',
      image: 'https://readdy.ai/api/search-image?query=Professional%20person%20speaking%20into%20smartphone%20with%20voice%20recognition%20waves%20and%20AI%20interface%2C%20modern%20car%20interior%20dashboard%20with%20voice%20assistant%20activated%2C%20blue%20and%20purple%20holographic%20sound%20waves%20emanating%20from%20phone%2C%20futuristic%20voice%20command%20visualization%20with%20text%20bubbles%20showing%20parking%20requests%2C%20clean%20minimalist%20design%20with%20high-tech%20atmosphere%2C%20natural%20lighting%20with%20person%20clearly%20visible&width=600&height=400&seq=voice-command-step&orientation=landscape',
      features: ['Natural language understanding', 'Multi-language support', 'Context-aware responses', 'Voice pattern recognition']
    },
    {
      id: 2,
      title: 'Intelligent Search & Analysis',
      subtitle: 'Real-time Data Processing',
      description: 'AI instantly analyzes thousands of parking spots, traffic conditions, pricing, and your preferences to find the perfect match in milliseconds.',
      icon: 'ri-search-eye-line',
      color: 'green',
      image: 'https://readdy.ai/api/search-image?query=Futuristic%20AI%20brain%20processing%20data%20with%20multiple%20screens%20showing%20parking%20lot%20maps%2C%20traffic%20analysis%20charts%2C%20and%20real-time%20availability%20grids%2C%20holographic%20data%20streams%20and%20analytics%20dashboards%2C%20green%20and%20blue%20digital%20interfaces%20with%20parking%20spot%20indicators%2C%20complex%20algorithms%20visualized%20as%20flowing%20data%20patterns%2C%20professional%20tech%20environment%20with%20glowing%20screens&width=600&height=400&seq=ai-search-analysis&orientation=landscape',
      features: ['Real-time availability scanning', 'Traffic pattern analysis', 'Price comparison engine', 'Preference matching algorithm']
    },
    {
      id: 3,
      title: 'Smart Route Optimization',
      subtitle: 'Dynamic Navigation Planning',
      description: 'Advanced algorithms calculate the fastest route considering live traffic, road conditions, parking availability, and your arrival time preferences.',
      icon: 'ri-route-line',
      color: 'purple',
      image: 'https://readdy.ai/api/search-image?query=3D%20city%20map%20with%20optimal%20route%20highlighted%20in%20purple%2C%20GPS%20navigation%20interface%20showing%20multiple%20route%20options%20with%20traffic%20data%2C%20smart%20car%20dashboard%20displaying%20turn-by-turn%20directions%2C%20holographic%20route%20projections%20over%20city%20streets%2C%20real-time%20traffic%20flow%20visualization%20with%20green%20and%20red%20indicators%2C%20modern%20navigation%20technology%20with%20clear%20path%20optimization&width=600&height=400&seq=route-optimization&orientation=landscape',
      features: ['Live traffic integration', 'Multi-route comparison', 'ETA prediction accuracy', 'Dynamic re-routing']
    },
    {
      id: 4,
      title: 'Automated Booking & QR Generation',
      subtitle: 'Seamless Reservation System',
      description: 'AI automatically reserves your optimal spot and generates a secure QR code for instant access. No manual booking required - everything happens seamlessly.',
      icon: 'ri-qr-code-line',
      color: 'orange',
      image: 'https://readdy.ai/api/search-image?query=Smartphone%20screen%20showing%20QR%20code%20generation%20process%20with%20parking%20reservation%20confirmation%2C%20digital%20parking%20ticket%20with%20QR%20code%20prominently%20displayed%2C%20secure%20booking%20interface%20with%20payment%20processing%2C%20orange%20and%20blue%20gradient%20design%2C%20professional%20mobile%20app%20interface%20with%20clear%20booking%20details%20and%20QR%20scanner%20ready%20state&width=600&height=400&seq=qr-booking-system&orientation=landscape',
      features: ['Instant spot reservation', 'Secure QR code generation', 'Payment processing', 'Digital receipt delivery']
    },
    {
      id: 5,
      title: 'Predictive Intelligence',
      subtitle: 'Proactive Assistance',
      description: 'AI learns your daily patterns, favorite locations, and timing preferences to proactively suggest parking before you even think about it.',
      icon: 'ri-brain-line',
      color: 'teal',
      image: 'https://readdy.ai/api/search-image?query=AI%20brain%20visualization%20with%20neural%20network%20patterns%20and%20predictive%20analytics%20dashboard%2C%20calendar%20integration%20showing%20daily%20patterns%20and%20parking%20predictions%2C%20teal%20and%20cyan%20holographic%20interface%20with%20pattern%20recognition%20charts%2C%20machine%20learning%20algorithms%20visualized%20as%20interconnected%20nodes%2C%20futuristic%20predictive%20technology%20with%20timeline%20and%20behavior%20analysis&width=600&height=400&seq=predictive-ai&orientation=landscape',
      features: ['Behavioral pattern learning', 'Predictive notifications', 'Calendar integration', 'Proactive suggestions']
    }
  ];

  const handleStepClick = (stepId: number) => {
    setActiveStep(activeStep === stepId ? null : stepId);
  };

  const playDemo = () => {
    setIsPlaying(true);
    let currentStep = 0;
    
    const playSequence = () => {
      if (currentStep < aiSteps.length) {
        setActiveStep(aiSteps[currentStep].id);
        currentStep++;
        setTimeout(playSequence, 3000);
      } else {
        setIsPlaying(false);
        setActiveStep(null);
      }
    };
    
    playSequence();
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: { bg: 'bg-blue-500', hover: 'hover:bg-blue-600', border: 'border-blue-500', text: 'text-blue-600' },
      green: { bg: 'bg-green-500', hover: 'hover:bg-green-600', border: 'border-green-500', text: 'text-green-600' },
      purple: { bg: 'bg-purple-500', hover: 'hover:bg-purple-600', border: 'border-purple-500', text: 'text-purple-600' },
      orange: { bg: 'bg-orange-500', hover: 'hover:bg-orange-600', border: 'border-orange-500', text: 'text-orange-600' },
      teal: { bg: 'bg-teal-500', hover: 'hover:bg-teal-600', border: 'border-teal-500', text: 'text-teal-600' }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">🤖 Smart AI Assistant Makes Parking Effortless</h2>
          <p className="text-2xl text-gray-600 mb-8">Experience the complete AI-powered parking journey in 5 intelligent steps</p>
          
          {/* Demo Controls */}
          <div className="flex justify-center space-x-4">
            <button 
              onClick={playDemo}
              disabled={isPlaying}
              className={`inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap px-8 py-4 text-lg ${
                isPlaying 
                  ? 'bg-gray-400 text-white cursor-not-allowed' 
                  : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl'
              }`}
            >
              <i className={`${isPlaying ? 'ri-loader-4-line animate-spin' : 'ri-play-circle-line'} mr-3 text-xl`}></i>
              {isPlaying ? 'Playing AI Demo...' : 'Watch Complete AI Flow'}
            </button>
            <button 
              onClick={() => setActiveStep(null)}
              className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-4 text-lg"
            >
              <i className="ri-refresh-line mr-3 text-xl"></i>
              Reset View
            </button>
          </div>
        </div>

        {/* AI Steps - Each in Separate Section */}
        <div className="space-y-16">
          {aiSteps.map((step, index) => {
            const colorClasses = getColorClasses(step.color);
            const isActive = activeStep === step.id;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={step.id}
                className={`relative transition-all duration-1000 ${
                  isActive ? 'scale-105 shadow-2xl' : 'hover:scale-102'
                } ${isPlaying && activeStep === step.id ? 'animate-pulse' : ''}`}
              >
                <div className={`bg-white rounded-3xl shadow-xl border-2 overflow-hidden ${
                  isActive ? `${colorClasses.border} shadow-2xl` : 'border-gray-200'
                }`}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
                    
                    {/* Image Section */}
                    <div className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="aspect-w-16 aspect-h-10 lg:aspect-h-12">
                        <img 
                          alt={step.title}
                          className="w-full h-full object-cover"
                          src={step.image}
                        />
                        <div className={`absolute inset-0 bg-gradient-to-r ${
                          isEven 
                            ? 'from-transparent to-white/20' 
                            : 'from-white/20 to-transparent'
                        }`}></div>
                      </div>
                      
                      {/* Step Number Overlay */}
                      <div className="absolute top-6 left-6">
                        <div className={`w-16 h-16 ${colorClasses.bg} rounded-full flex items-center justify-center shadow-xl border-4 border-white`}>
                          <span className="text-white font-bold text-2xl">{step.id}</span>
                        </div>
                      </div>
                      
                      {/* Interactive Button */}
                      <div className="absolute bottom-6 right-6">
                        <button
                          onClick={() => handleStepClick(step.id)}
                          className={`w-12 h-12 ${colorClasses.bg} ${colorClasses.hover} rounded-full flex items-center justify-center shadow-lg border-2 border-white transition-all duration-300 hover:scale-110`}
                        >
                          <i className={`${step.icon} text-white text-xl`}></i>
                        </button>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className={`p-8 lg:p-12 flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="mb-6">
                        <div className={`inline-flex items-center px-4 py-2 rounded-full ${colorClasses.bg} text-white text-sm font-medium mb-4`}>
                          <i className={`${step.icon} mr-2`}></i>
                          {step.subtitle}
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">{step.title}</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                      
                      {/* Features List */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {step.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <div className={`w-2 h-2 ${colorClasses.bg} rounded-full mr-3 flex-shrink-0`}></div>
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Expand Button */}
                      <div className="mt-6">
                        <button
                          onClick={() => handleStepClick(step.id)}
                          className={`inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap border-2 ${colorClasses.border} ${colorClasses.text} hover:${colorClasses.bg} hover:text-white px-6 py-3`}
                        >
                          <i className={`${isActive ? 'ri-eye-off-line' : 'ri-eye-line'} mr-2`}></i>
                          {isActive ? 'Hide Details' : 'View Details'}
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Expanded Details */}
                  {isActive && (
                    <div className={`border-t-2 ${colorClasses.border} bg-gradient-to-r from-gray-50 to-white p-8`}>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3">🎯 Key Benefits</h4>
                          <div className="space-y-2 text-sm text-gray-600">
                            <div className="flex items-center">
                              <i className="ri-check-line text-green-500 mr-2"></i>
                              <span>Saves 5-10 minutes per parking session</span>
                            </div>
                            <div className="flex items-center">
                              <i className="ri-check-line text-green-500 mr-2"></i>
                              <span>99.9% accuracy in recommendations</span>
                            </div>
                            <div className="flex items-center">
                              <i className="ri-check-line text-green-500 mr-2"></i>
                              <span>Reduces stress and frustration</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3">⚡ Technology</h4>
                          <div className="space-y-2 text-sm text-gray-600">
                            <div className="flex items-center">
                              <i className="ri-cpu-line text-blue-500 mr-2"></i>
                              <span>Advanced machine learning algorithms</span>
                            </div>
                            <div className="flex items-center">
                              <i className="ri-cloud-line text-blue-500 mr-2"></i>
                              <span>Real-time cloud processing</span>
                            </div>
                            <div className="flex items-center">
                              <i className="ri-shield-check-line text-blue-500 mr-2"></i>
                              <span>Enterprise-grade security</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3">📱 Integration</h4>
                          <div className="space-y-2 text-sm text-gray-600">
                            <div className="flex items-center">
                              <i className="ri-smartphone-line text-purple-500 mr-2"></i>
                              <span>iOS & Android mobile apps</span>
                            </div>
                            <div className="flex items-center">
                              <i className="ri-car-line text-purple-500 mr-2"></i>
                              <span>In-car navigation systems</span>
                            </div>
                            <div className="flex items-center">
                              <i className="ri-voice-recognition-line text-purple-500 mr-2"></i>
                              <span>Voice assistant compatibility</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* AI Technology Overview */}
        <div className="mt-20 bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">🧠 Powered by Advanced AI Technology</h3>
            <p className="text-xl text-blue-100">Our intelligent system combines multiple AI technologies for the ultimate parking experience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-cpu-line text-white text-3xl"></i>
              </div>
              <h4 className="font-bold text-lg mb-2">Neural Networks</h4>
              <p className="text-blue-100 text-sm">Deep learning for pattern recognition and decision making</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-voice-recognition-line text-white text-3xl"></i>
              </div>
              <h4 className="font-bold text-lg mb-2">Natural Language</h4>
              <p className="text-blue-100 text-sm">Advanced speech recognition and understanding</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-eye-line text-white text-3xl"></i>
              </div>
              <h4 className="font-bold text-lg mb-2">Computer Vision</h4>
              <p className="text-blue-100 text-sm">Real-time image analysis and space detection</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-database-2-line text-white text-3xl"></i>
              </div>
              <h4 className="font-bold text-lg mb-2">Big Data Analytics</h4>
              <p className="text-blue-100 text-sm">Massive data processing for intelligent insights</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
