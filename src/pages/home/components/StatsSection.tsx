
import { useState, useEffect } from 'react';

export default function StatsSection() {
  const [stats, setStats] = useState({
    available: 4,
    occupied: 3,
    total: 7
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => {
        const newAvailable = Math.floor(Math.random() * 6) + 2; // 2-7
        const newOccupied = Math.floor(Math.random() * 5) + 1; // 1-5
        const newTotal = newAvailable + newOccupied;
        
        return {
          available: newAvailable,
          occupied: newOccupied,
          total: newTotal
        };
      });
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Live Parking Status</h3>
          <p className="text-gray-600">Real-time availability updates</p>
        </div>
        
        <div className="grid grid-cols-3 gap-8">
          <div className="text-center bg-green-50 rounded-xl p-6 border border-green-200 hover:shadow-lg transition-all duration-300">
            <div className="text-3xl font-bold text-green-600 mb-2 animate-pulse">
              {stats.available}
            </div>
            <div className="text-green-700 font-medium">Available Slots</div>
            <div className="text-xs text-green-600 mt-1">Updated now</div>
          </div>
          
          <div className="text-center bg-red-50 rounded-xl p-6 border border-red-200 hover:shadow-lg transition-all duration-300">
            <div className="text-3xl font-bold text-red-600 mb-2">
              {stats.occupied}
            </div>
            <div className="text-red-700 font-medium">Occupied Slots</div>
            <div className="text-xs text-red-600 mt-1">Live status</div>
          </div>
          
          <div className="text-center bg-blue-50 rounded-xl p-6 border border-blue-200 hover:shadow-lg transition-all duration-300">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {stats.total}
            </div>
            <div className="text-blue-700 font-medium">Total Capacity</div>
            <div className="text-xs text-blue-600 mt-1">Zone A</div>
          </div>
        </div>
      </div>
    </section>
  );
}
