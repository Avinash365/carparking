
export default function Footer() {
  const footerSections = [
    {
      title: 'QR Features',
      links: [
        { name: 'QR Scanning', href: '#qr-scanning' },
        { name: 'Instant Booking', href: '#booking' },
        { name: 'Real-time Updates', href: '#updates' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Contact', href: '#contact' },
        { name: 'Careers', href: '#careers' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#help' },
        { name: 'QR Guide', href: '#guide' },
        { name: 'API', href: '#api' }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                <i className="ri-parking-fill text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold" style={{ fontFamily: '"Pacifico", serif' }}>Parkiun</h3>
            </div>
            <p className="text-gray-400">
              Revolutionary QR parking solutions for smart cities.
            </p>
          </div>
          
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2 text-gray-400">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="hover:text-white transition-colors cursor-pointer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2024 Parkiun. All rights reserved.</p>
          <a 
            href="https://readdy.ai/?origin=logo" 
            className="text-gray-400 hover:text-white mt-4 md:mt-0 transition-colors cursor-pointer"
          >
            Powered by avinash365jha
          </a>
        </div>
      </div>
    </footer>
  );
}
