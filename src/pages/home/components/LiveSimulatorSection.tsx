
import { useState, useEffect } from 'react';

interface ParkingSlot {
  id: string;
  number: string;
  isOccupied: boolean;
  timeParked?: string;
  carColor?: string;
  lastUpdated: string;
  entryTime?: Date;
  exitTime?: Date;
  qrCode: string;
  minutesRemaining?: number;
}

interface ParkingZone {
  id: string;
  name: string;
  description: string;
  color: string;
  slots: ParkingSlot[];
}

interface QRScanModal {
  isOpen: boolean;
  type: 'entry' | 'exit' | null;
  slotId?: string;
  zoneId?: string;
}

interface DurationModal {
  isOpen: boolean;
  qrCode: string;
  slotNumber: string;
  zoneName: string;
}

export default function LiveSimulatorSection() {
  const [parkingZones, setParkingZones] = useState<ParkingZone[]>([
    {
      id: 'zone-a',
      name: 'ZONE A - SMART PARKING',
      description: 'QR Entry/Exit System • Real-time Status',
      color: 'yellow',
      slots: [
        { 
          id: 'a1', 
          number: 'A1', 
          isOccupied: true, 
          timeParked: '2h 15m', 
          carColor: 'bg-blue-600', 
          lastUpdated: '10:30 AM', 
          entryTime: new Date(Date.now() - 2 * 60 * 60 * 1000 - 15 * 60 * 1000),
          exitTime: new Date(Date.now() + 4 * 60 * 1000),
          qrCode: 'PARK_A1_2024',
          minutesRemaining: 4
        },
        { id: 'a2', number: 'A2', isOccupied: false, lastUpdated: '10:15 AM', qrCode: 'PARK_A2_2024' },
        { 
          id: 'a3', 
          number: 'A3', 
          isOccupied: true, 
          timeParked: '45m', 
          carColor: 'bg-red-600', 
          lastUpdated: '10:25 AM', 
          entryTime: new Date(Date.now() - 45 * 60 * 1000),
          exitTime: new Date(Date.now() + 12 * 60 * 1000),
          qrCode: 'PARK_A3_2024',
          minutesRemaining: 12
        },
        { id: 'a4', number: 'A4', isOccupied: false, lastUpdated: '09:45 AM', qrCode: 'PARK_A4_2024' },
        { id: 'a5', number: 'A5', isOccupied: false, lastUpdated: '10:20 AM', qrCode: 'PARK_A5_2024' },
        { 
          id: 'a6', 
          number: 'A6', 
          isOccupied: true, 
          timeParked: '3h 20m', 
          carColor: 'bg-gray-900', 
          lastUpdated: '10:10 AM', 
          entryTime: new Date(Date.now() - 3 * 60 * 60 * 1000 - 20 * 60 * 1000),
          exitTime: new Date(Date.now() + 25 * 60 * 1000),
          qrCode: 'PARK_A6_2024',
          minutesRemaining: 25
        }
      ]
    },
    {
      id: 'zone-b',
      name: 'ZONE B - PREMIUM PARKING',
      description: 'VIP Access • Covered Parking • Security',
      color: 'purple',
      slots: [
        { 
          id: 'b1', 
          number: 'B1', 
          isOccupied: true, 
          timeParked: '1h 30m', 
          carColor: 'bg-purple-600', 
          lastUpdated: '11:00 AM', 
          entryTime: new Date(Date.now() - 1 * 60 * 60 * 1000 - 30 * 60 * 1000),
          exitTime: new Date(Date.now() + 8 * 60 * 1000),
          qrCode: 'PARK_B1_2024',
          minutesRemaining: 8
        },
        { id: 'b2', number: 'B2', isOccupied: false, lastUpdated: '10:45 AM', qrCode: 'PARK_B2_2024' },
        { 
          id: 'b3', 
          number: 'B3', 
          isOccupied: true, 
          timeParked: '25m', 
          carColor: 'bg-green-600', 
          lastUpdated: '11:15 AM', 
          entryTime: new Date(Date.now() - 25 * 60 * 1000),
          exitTime: new Date(Date.now() + 18 * 60 * 1000),
          qrCode: 'PARK_B3_2024',
          minutesRemaining: 18
        },
        { id: 'b4', number: 'B4', isOccupied: false, lastUpdated: '10:30 AM', qrCode: 'PARK_B4_2024' },
        { 
          id: 'b5', 
          number: 'B5', 
          isOccupied: true, 
          timeParked: '4h 10m', 
          carColor: 'bg-yellow-600', 
          lastUpdated: '09:50 AM', 
          entryTime: new Date(Date.now() - 4 * 60 * 60 * 1000 - 10 * 60 * 1000),
          exitTime: new Date(Date.now() + 35 * 60 * 1000),
          qrCode: 'PARK_B5_2024',
          minutesRemaining: 35
        },
        { id: 'b6', number: 'B6', isOccupied: false, lastUpdated: '11:05 AM', qrCode: 'PARK_B6_2024' }
      ]
    },
    {
      id: 'zone-c',
      name: 'ZONE C - EV CHARGING',
      description: 'Electric Vehicle Charging • Fast Charge • Eco-Friendly',
      color: 'green',
      slots: [
        { 
          id: 'c1', 
          number: 'C1', 
          isOccupied: true, 
          timeParked: '55m', 
          carColor: 'bg-emerald-600', 
          lastUpdated: '10:35 AM', 
          entryTime: new Date(Date.now() - 55 * 60 * 1000),
          exitTime: new Date(Date.now() + 6 * 60 * 1000),
          qrCode: 'PARK_C1_2024',
          minutesRemaining: 6
        },
        { id: 'c2', number: 'C2', isOccupied: false, lastUpdated: '10:20 AM', qrCode: 'PARK_C2_2024' },
        { id: 'c3', number: 'C3', isOccupied: false, lastUpdated: '11:10 AM', qrCode: 'PARK_C3_2024' },
        { 
          id: 'c4', 
          number: 'C4', 
          isOccupied: true, 
          timeParked: '2h 45m', 
          carColor: 'bg-teal-600', 
          lastUpdated: '09:15 AM', 
          entryTime: new Date(Date.now() - 2 * 60 * 60 * 1000 - 45 * 60 * 1000),
          exitTime: new Date(Date.now() + 42 * 60 * 1000),
          qrCode: 'PARK_C4_2024',
          minutesRemaining: 42
        },
        { id: 'c5', number: 'C5', isOccupied: false, lastUpdated: '10:55 AM', qrCode: 'PARK_C5_2024' },
        { 
          id: 'c6', 
          number: 'C6', 
          isOccupied: true, 
          timeParked: '15m', 
          carColor: 'bg-cyan-600', 
          lastUpdated: '11:25 AM', 
          entryTime: new Date(Date.now() - 15 * 60 * 1000),
          exitTime: new Date(Date.now() + 15 * 60 * 1000),
          qrCode: 'PARK_C6_2024',
          minutesRemaining: 15
        }
      ]
    },
    {
      id: 'zone-d',
      name: 'ZONE D - COMPACT CARS',
      description: 'Small Vehicle Parking • Economy Rate • City Center',
      color: 'blue',
      slots: [
        { id: 'd1', number: 'D1', isOccupied: false, lastUpdated: '11:00 AM', qrCode: 'PARK_D1_2024' },
        { 
          id: 'd2', 
          number: 'D2', 
          isOccupied: true, 
          timeParked: '1h 15m', 
          carColor: 'bg-indigo-600', 
          lastUpdated: '10:25 AM', 
          entryTime: new Date(Date.now() - 1 * 60 * 60 * 1000 - 15 * 60 * 1000),
          exitTime: new Date(Date.now() + 28 * 60 * 1000),
          qrCode: 'PARK_D2_2024',
          minutesRemaining: 28
        },
        { id: 'd3', number: 'D3', isOccupied: false, lastUpdated: '10:40 AM', qrCode: 'PARK_D3_2024' },
        { id: 'd4', number: 'D4', isOccupied: false, lastUpdated: '11:20 AM', qrCode: 'PARK_D4_2024' },
        { 
          id: 'd5', 
          number: 'D5', 
          isOccupied: true, 
          timeParked: '35m', 
          carColor: 'bg-blue-700', 
          lastUpdated: '11:05 AM', 
          entryTime: new Date(Date.now() - 35 * 60 * 1000),
          exitTime: new Date(Date.now() + 9 * 60 * 1000),
          qrCode: 'PARK_D5_2024',
          minutesRemaining: 9
        },
        { id: 'd6', number: 'D6', isOccupied: false, lastUpdated: '10:50 AM', qrCode: 'PARK_D6_2024' }
      ]
    },
    {
      id: 'zone-e',
      name: 'ZONE E - MOTORCYCLE',
      description: 'Two-Wheeler Parking • Secure Storage • Weather Protected',
      color: 'orange',
      slots: [
        { 
          id: 'e1', 
          number: 'E1', 
          isOccupied: true, 
          timeParked: '3h 5m', 
          carColor: 'bg-orange-600', 
          lastUpdated: '09:35 AM', 
          entryTime: new Date(Date.now() - 3 * 60 * 60 * 1000 - 5 * 60 * 1000),
          exitTime: new Date(Date.now() + 22 * 60 * 1000),
          qrCode: 'PARK_E1_2024',
          minutesRemaining: 22
        },
        { id: 'e2', number: 'E2', isOccupied: false, lastUpdated: '11:15 AM', qrCode: 'PARK_E2_2024' },
        { 
          id: 'e3', 
          number: 'E3', 
          isOccupied: true, 
          timeParked: '20m', 
          carColor: 'bg-amber-600', 
          lastUpdated: '11:20 AM', 
          entryTime: new Date(Date.now() - 20 * 60 * 1000),
          exitTime: new Date(Date.now() + 3 * 60 * 1000),
          qrCode: 'PARK_E3_2024',
          minutesRemaining: 3
        },
        { id: 'e4', number: 'E4', isOccupied: false, lastUpdated: '10:30 AM', qrCode: 'PARK_E4_2024' },
        { id: 'e5', number: 'E5', isOccupied: false, lastUpdated: '11:10 AM', qrCode: 'PARK_E5_2024' },
        { 
          id: 'e6', 
          number: 'E6', 
          isOccupied: true, 
          timeParked: '1h 50m', 
          carColor: 'bg-yellow-700', 
          lastUpdated: '09:50 AM', 
          entryTime: new Date(Date.now() - 1 * 60 * 60 * 1000 - 50 * 60 * 1000),
          exitTime: new Date(Date.now() + 31 * 60 * 1000),
          qrCode: 'PARK_E6_2024',
          minutesRemaining: 31
        }
      ]
    }
  ]);

  const [activeZone, setActiveZone] = useState('zone-c');
  const [qrModal, setQrModal] = useState<QRScanModal>({ isOpen: false, type: null });
  const [durationModal, setDurationModal] = useState<DurationModal>({ isOpen: false, qrCode: '', slotNumber: '', zoneName: '' });
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<string>('');
  const [showSoonFree, setShowSoonFree] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState<number>(1);
  const [selectedCarColor, setSelectedCarColor] = useState<string>('bg-blue-600');
  const [isProcessing, setIsProcessing] = useState(false);

  // Calculate total stats across all zones
  const totalStats = parkingZones.reduce((acc, zone) => {
    const available = zone.slots.filter(slot => !slot.isOccupied).length;
    const occupied = zone.slots.filter(slot => slot.isOccupied).length;
    return {
      available: acc.available + available,
      occupied: acc.occupied + occupied,
      total: acc.total + zone.slots.length
    };
  }, { available: 0, occupied: 0, total: 0 });

  // Get soon-to-be-free slots (ending in next 10 minutes)
  const soonFreeSlots = parkingZones.flatMap(zone => 
    zone.slots.filter(slot => 
      slot.isOccupied && 
      slot.minutesRemaining !== undefined && 
      slot.minutesRemaining <= 10
    ).map(slot => ({ ...slot, zoneName: zone.name }))
  ).sort((a, b) => (a.minutesRemaining || 0) - (b.minutesRemaining || 0));

  // Get current zone stats
  const currentZone = parkingZones.find(zone => zone.id === activeZone);
  const currentZoneStats = currentZone ? {
    available: currentZone.slots.filter(slot => !slot.isOccupied).length,
    occupied: currentZone.slots.filter(slot => slot.isOccupied).length,
    total: currentZone.slots.length
  } : { available: 0, occupied: 0, total: 0 };

  // Update parking time and countdown for occupied slots
  useEffect(() => {
    const interval = setInterval(() => {
      setParkingZones(prev => prev.map(zone => ({
        ...zone,
        slots: zone.slots.map(slot => {
          if (slot.isOccupied && slot.entryTime && slot.exitTime) {
            const now = new Date();
            const diffMs = now.getTime() - slot.entryTime.getTime();
            const hours = Math.floor(diffMs / (1000 * 60 * 60));
            const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
            
            let timeParked = '';
            if (hours > 0) {
              timeParked = `${hours}h ${minutes}m`;
            } else {
              timeParked = `${minutes}m`;
            }

            // Calculate remaining time
            const remainingMs = slot.exitTime.getTime() - now.getTime();
            const minutesRemaining = Math.max(0, Math.floor(remainingMs / (1000 * 60)));
            
            return { ...slot, timeParked, minutesRemaining };
          }
          return slot;
        })
      })));
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const handleSlotClick = (slotId: string, zoneId: string) => {
    const zone = parkingZones.find(z => z.id === zoneId);
    const slot = zone?.slots.find(s => s.id === slotId);
    if (!slot) return;

    if (slot.isOccupied) {
      setQrModal({ isOpen: true, type: 'exit', slotId, zoneId });
    } else {
      setQrModal({ isOpen: true, type: 'entry', slotId, zoneId });
    }
  };

  const handleQRScan = (slotNumber: string, zoneId: string) => {
    const zone = parkingZones.find(z => z.id === zoneId);
    const slot = zone?.slots.find(s => s.number === slotNumber);
    if (!slot) return;

    if (slot.isOccupied) {
      setQrModal({ isOpen: true, type: 'exit', slotId: slot.id, zoneId });
    } else {
      // Show duration selection modal for entry
      setDurationModal({
        isOpen: true,
        qrCode: slot.qrCode,
        slotNumber: slot.number,
        zoneName: zone?.name || ''
      });
    }
  };

  const simulateQRScan = () => {
    if (!qrModal.slotId || !qrModal.zoneId) return;
    
    setIsScanning(true);
    setScanResult('');
    
    setTimeout(() => {
      const zone = parkingZones.find(z => z.id === qrModal.zoneId);
      const slot = zone?.slots.find(s => s.id === qrModal.slotId);
      if (slot) {
        setScanResult(slot.qrCode);
        
        setTimeout(() => {
          if (qrModal.type === 'exit') {
            processQRScanExit(slot.qrCode);
          } else {
            // Show duration selection for entry
            setDurationModal({
              isOpen: true,
              qrCode: slot.qrCode,
              slotNumber: slot.number,
              zoneName: zone?.name || ''
            });
          }
          setIsScanning(false);
          setQrModal({ isOpen: false, type: null });
          setScanResult('');
        }, 1500);
      }
    }, 2000);
  };

  const processQRScanEntry = async (qrCode: string, durationHours: number, carColor: string) => {
    setIsProcessing(true);
    
    try {
      const response = await fetch(`${import.meta.env.VITE_PUBLIC_SUPABASE_URL}/functions/v1/parking-entry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify({
          qrCode,
          durationHours,
          carColor
        })
      });

      const result = await response.json();

      if (result.success) {
        // Update local state
        setParkingZones(prev => prev.map(zone => ({
          ...zone,
          slots: zone.slots.map(slot => {
            if (slot.qrCode === qrCode) {
              const now = new Date();
              const exitTime = new Date(result.plannedExitTime);
              const minutesRemaining = Math.floor((exitTime.getTime() - now.getTime()) / (1000 * 60));
              
              return {
                ...slot,
                isOccupied: true,
                timeParked: '0m',
                carColor: carColor,
                entryTime: now,
                exitTime: exitTime,
                minutesRemaining: minutesRemaining,
                lastUpdated: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
              };
            }
            return slot;
          })
        })));

        alert(`🎉 ${result.message}\n\nSlot: ${result.slot.slot_number}\nDuration: ${durationHours} hours\nPlanned Exit: ${new Date(result.plannedExitTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}\n\nPlease keep your QR code for exit.`);
      } else {
        alert(`❌ Error: ${result.error}`);
      }
    } catch (error) {
      alert(`❌ Network Error: ${error.message}`);
    } finally {
      setIsProcessing(false);
    }
  };

  const processQRScanExit = async (qrCode: string) => {
    setIsProcessing(true);
    
    try {
      const response = await fetch(`${import.meta.env.VITE_PUBLIC_SUPABASE_URL}/functions/v1/parking-exit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify({ qrCode })
      });

      const result = await response.json();

      if (result.success) {
        // Update local state
        setParkingZones(prev => prev.map(zone => ({
          ...zone,
          slots: zone.slots.map(slot => {
            if (slot.qrCode === qrCode) {
              const now = new Date();
              return {
                ...slot,
                isOccupied: false,
                timeParked: undefined,
                carColor: undefined,
                entryTime: undefined,
                exitTime: undefined,
                minutesRemaining: undefined,
                lastUpdated: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
              };
            }
            return slot;
          })
        })));

        alert(`🚗 ${result.message}\n\nSlot: ${result.slot.slot_number}\nParking Duration: ${result.parkingDuration}\nTotal Fee: $${result.finalFee}\n\nThank you for using our parking service!`);
      } else {
        alert(`❌ Error: ${result.error}`);
      }
    } catch (error) {
      alert(`❌ Network Error: ${error.message}`);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDurationConfirm = () => {
    if (durationModal.qrCode && selectedDuration > 0) {
      processQRScanEntry(durationModal.qrCode, selectedDuration, selectedCarColor);
      setDurationModal({ isOpen: false, qrCode: '', slotNumber: '', zoneName: '' });
      setSelectedDuration(1);
      setSelectedCarColor('bg-blue-600');
    }
  };

  const handleQuickScan = () => {
    setQrModal({ isOpen: true, type: 'entry', zoneId: activeZone });
  };

  const closeModal = () => {
    setQrModal({ isOpen: false, type: null });
    setIsScanning(false);
    setScanResult('');
  };

  const closeDurationModal = () => {
    setDurationModal({ isOpen: false, qrCode: '', slotNumber: '', zoneName: '' });
    setSelectedDuration(1);
    setSelectedCarColor('bg-blue-600');
  };

  const getZoneColorClasses = (color: string) => {
    const colorMap = {
      yellow: { bg: 'bg-yellow-400', border: 'border-yellow-500', text: 'text-gray-900' },
      purple: { bg: 'bg-purple-400', border: 'border-purple-500', text: 'text-white' },
      green: { bg: 'bg-green-400', border: 'border-green-500', text: 'text-white' },
      blue: { bg: 'bg-blue-400', border: 'border-blue-500', text: 'text-white' },
      orange: { bg: 'bg-orange-400', border: 'border-orange-500', text: 'text-white' }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.yellow;
  };

  const getCountdownColor = (minutes: number) => {
    if (minutes <= 3) return 'text-red-600 bg-red-100';
    if (minutes <= 10) return 'text-orange-600 bg-orange-100';
    return 'text-blue-600 bg-blue-100';
  };

  const carColorOptions = [
    { value: 'bg-blue-600', label: 'Blue', color: 'bg-blue-600' },
    { value: 'bg-red-600', label: 'Red', color: 'bg-red-600' },
    { value: 'bg-green-600', label: 'Green', color: 'bg-green-600' },
    { value: 'bg-purple-600', label: 'Purple', color: 'bg-purple-600' },
    { value: 'bg-yellow-600', label: 'Yellow', color: 'bg-yellow-600' },
    { value: 'bg-gray-900', label: 'Black', color: 'bg-gray-900' },
    { value: 'bg-white', label: 'White', color: 'bg-white border border-gray-300' }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100" data-section="live-simulator">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">🚗 Smart Parking Prediction System</h2>
          <p className="text-xl text-gray-600">Real-time countdown shows when occupied slots will be free</p>
        </div>

        {/* Soon-to-be-Free Slots Alert */}
        {soonFreeSlots.length > 0 && (
          <div className="mb-8 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-orange-800 flex items-center">
                <i className="ri-time-line mr-2"></i>
                Spots Available Soon
              </h3>
              <button
                onClick={() => setShowSoonFree(!showSoonFree)}
                className="text-orange-600 hover:text-orange-800 font-medium text-sm"
              >
                {showSoonFree ? 'Hide Details' : 'View All'}
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {soonFreeSlots.slice(0, showSoonFree ? soonFreeSlots.length : 3).map((slot) => (
                <div key={slot.id} className="bg-white rounded-lg p-4 border border-orange-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900">{slot.number}</span>
                    <span className="text-xs text-gray-600">{slot.zoneName}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Occupied - ends in</span>
                    <div className={`px-2 py-1 rounded-full text-xs font-bold ${getCountdownColor(slot.minutesRemaining || 0)}`}>
                      ⏳ {slot.minutesRemaining}m
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Zone Navigation */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Select Parking Zone</h3>
            <div className="text-sm text-gray-600">
              Total: {totalStats.available} Available • {totalStats.occupied} Occupied
            </div>
          </div>
          
          <div className="relative">
            <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
              {parkingZones.map((zone) => {
                const zoneStats = {
                  available: zone.slots.filter(slot => !slot.isOccupied).length,
                  occupied: zone.slots.filter(slot => slot.isOccupied).length
                };
                const colorClasses = getZoneColorClasses(zone.color);
                
                return (
                  <button
                    key={zone.id}
                    onClick={() => setActiveZone(zone.id)}
                    className={`flex-shrink-0 p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer whitespace-nowrap min-w-64 ${
                      activeZone === zone.id 
                        ? `${colorClasses.bg} ${colorClasses.border} shadow-lg scale-105` 
                        : 'bg-white border-gray-300 hover:border-gray-400 hover:shadow-md'
                    }`}
                  >
                    <div className={`font-bold text-sm mb-1 ${activeZone === zone.id ? colorClasses.text : 'text-gray-900'}`}>
                      {zone.name}
                    </div>
                    <div className={`text-xs mb-2 ${activeZone === zone.id ? colorClasses.text : 'text-gray-600'}`}>
                      {zone.description}
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className={`${activeZone === zone.id ? colorClasses.text : 'text-green-600'}`}>
                        ✅ {zoneStats.available} Available
                      </span>
                      <span className={`${activeZone === zone.id ? colorClasses.text : 'text-red-600'}`}>
                        🚗 {zoneStats.occupied} Occupied
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        
        {currentZone && (
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-200 to-gray-300 opacity-20 rounded-3xl"></div>
            
            {/* Zone Header */}
            <div className="text-center mb-8 relative z-10">
              <div className={`inline-block px-6 py-3 rounded-lg shadow-lg border ${getZoneColorClasses(currentZone.color).bg} ${getZoneColorClasses(currentZone.color).border}`}>
                <h3 className={`text-md font-bold mb-1 ${getZoneColorClasses(currentZone.color).text}`}>
                  🅿 {currentZone.name}
                </h3>
                <p className={`font-sm ${getZoneColorClasses(currentZone.color).text}`}>
                  {currentZone.description}
                </p>
              </div>
            </div>
            
            {/* Parking Lot */}
            <div className="relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-300 opacity-70"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-300 opacity-70"></div>
              
              <div className="bg-gray-600 rounded-xl p-8 border-4 border-yellow-400 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-500 to-gray-700 rounded-xl opacity-50"></div>
                
                <div className="grid grid-cols-3 gap-12 max-w-4xl mx-auto relative z-10">
                  {currentZone.slots.map((slot) => (
                    <div key={slot.id} className="relative transform transition-all duration-500 hover:scale-105">
                      {/* Parking Slot */}
                      <div 
                        className={`w-36 h-52 rounded-xl border-4 transition-all duration-300 relative cursor-pointer shadow-lg ${
                          slot.isOccupied 
                            ? 'bg-gradient-to-b from-red-100 to-red-200 border-red-400 shadow-red-200' 
                            : 'bg-gradient-to-b from-green-100 to-green-200 border-green-400 hover:border-green-500 shadow-green-200'
                        }`}
                        onClick={() => handleSlotClick(slot.id, currentZone.id)}
                      >
                        {/* Slot Number */}
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                          <div className="bg-blue-600 text-white px-4 py-2 rounded-full border-2 border-white shadow-lg">
                            <span className="font-bold text-lg">{slot.number}</span>
                          </div>
                        </div>
                        
                        {/* Status Indicator */}
                        <div className="absolute -top-2 -right-2 z-20">
                          <div className={`w-6 h-6 rounded-full border-2 border-white shadow-lg ${
                            slot.isOccupied ? 'bg-red-500 shadow-red-300' : 'bg-green-500 animate-pulse shadow-green-300'
                          }`}>
                            <div className={`w-2 h-2 rounded-full mx-auto mt-1 ${
                              slot.isOccupied ? 'bg-red-300' : 'bg-green-300'
                            }`}></div>
                          </div>
                        </div>
                        
                        {/* Parking Lines */}
                        <div className="absolute inset-2 border-2 border-dashed border-gray-400 rounded-lg"></div>
                        
                        {/* Car or Available Space */}
                        {slot.isOccupied ? (
                          <div className="absolute inset-4 flex items-center justify-center">
                            <div className={`w-24 h-36 rounded-lg shadow-xl transform transition-all duration-300 ${slot.carColor} relative`}>
                              <div className={`w-full h-full rounded-lg ${slot.carColor} relative overflow-hidden`}>
                                <div className="absolute top-2 left-2 right-2 h-8 bg-blue-200 rounded-t-lg opacity-70"></div>
                                <div className="absolute top-12 left-2 right-2 h-6 bg-blue-200 opacity-70"></div>
                                <div className="absolute top-1 left-1 w-2 h-2 bg-yellow-300 rounded-full"></div>
                                <div className="absolute top-1 right-1 w-2 h-2 bg-yellow-300 rounded-full"></div>
                                <div className="absolute bottom-1 left-1 w-2 h-2 bg-red-400 rounded-full"></div>
                                <div className="absolute bottom-1 right-1 w-2 h-2 bg-red-400 rounded-full"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <i className="ri-car-fill text-white text-2xl opacity-50"></i>
                                </div>
                              </div>
                              <div className="absolute -bottom-2 left-1 right-1 h-2 bg-black/20 rounded-full blur-sm"></div>
                            </div>
                          </div>
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <i className="ri-car-line text-green-600 text-4xl mb-2 opacity-30"></i>
                              <div className="text-green-600 font-bold text-sm">AVAILABLE</div>
                            </div>
                          </div>
                        )}
                        
                        {/* Countdown Timer for Occupied Slots */}
                        {slot.isOccupied && slot.minutesRemaining !== undefined && (
                          <div className="absolute top-2 left-2 right-2">
                            <div className={`px-2 py-1 rounded text-xs font-bold text-center ${getCountdownColor(slot.minutesRemaining)}`}>
                              ⏳ {slot.minutesRemaining}m left
                            </div>
                          </div>
                        )}
                        
                        {/* Time Display for Occupied Slots */}
                        {slot.isOccupied && slot.timeParked && (
                          <div className="absolute bottom-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
                            🕐 {slot.timeParked}
                          </div>
                        )}
                        
                        {/* Available Slot Animation */}
                        {!slot.isOccupied && (
                          <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
                              <div className="w-16 h-1 bg-green-400 opacity-70 animate-pulse"></div>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* QR Code */}
                      <div 
                        className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer hover:scale-125 transition-all duration-300 z-20"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleQRScan(slot.number, currentZone.id);
                        }}
                      >
                        <div className="w-10 h-10 bg-white rounded-lg border-3 border-gray-800 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-yellow-50">
                          <i className="ri-qr-code-line text-gray-800 text-lg"></i>
                        </div>
                        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-center">
                          <span className="text-xs text-yellow-300 font-bold bg-gray-800 px-2 py-1 rounded whitespace-nowrap">
                            {slot.isOccupied ? 'EXIT QR' : 'ENTRY QR'}
                          </span>
                        </div>
                      </div>
                      
                      {/* Status Card */}
                      <div className="mt-4 text-center">
                        <div className="bg-white rounded-lg p-3 shadow-lg border border-gray-200">
                          <div className="text-sm font-bold text-gray-800">{slot.number}</div>
                          <div className={`text-xs font-medium ${slot.isOccupied ? 'text-red-600' : 'text-green-600'}`}>
                            {slot.isOccupied ? '🚗 Occupied' : '✅ Available'}
                          </div>
                          {slot.isOccupied && slot.minutesRemaining !== undefined && (
                            <div className={`text-xs font-bold mt-1 ${getCountdownColor(slot.minutesRemaining).split(' ')[0]}`}>
                              Ends in {slot.minutesRemaining}m
                            </div>
                          )}
                          <div className="text-xs text-gray-500">Updated: {slot.lastUpdated}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Control Panel */}
            <div className="mt-8 bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">🎮 Smart Prediction System</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-gray-700">Available - Ready to Park</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
                      <span className="text-gray-700">Occupied - Live Countdown</span>
                    </div>
                    <div className="flex items-center">
                      <i className="ri-time-line text-orange-600 mr-2"></i>
                      <span className="text-gray-700">Predictive Exit Times</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">📊 {currentZone.name} Stats</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-green-50 p-2 rounded border border-green-200">
                      <div className="text-green-600 font-bold text-lg">{currentZoneStats.available}</div>
                      <div className="text-green-700 text-xs">Available</div>
                    </div>
                    <div className="bg-red-50 p-2 rounded border border-red-200">
                      <div className="text-red-600 font-bold text-lg">{currentZoneStats.occupied}</div>
                      <div className="text-red-700 text-xs">Occupied</div>
                    </div>
                  </div>
                  {soonFreeSlots.length > 0 && (
                    <div className="mt-2 bg-orange-50 p-2 rounded border border-orange-200">
                      <div className="text-orange-600 font-bold text-lg">{soonFreeSlots.length}</div>
                      <div className="text-orange-700 text-xs">Soon Free (&lt;10m)</div>
                    </div>
                  )}
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">🚀 Quick Actions</h4>
                  <div className="space-y-2">
                    <button 
                      onClick={handleQuickScan}
                      className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl px-4 py-2 text-sm w-full"
                    >
                      <i className="ri-qr-scan-2-line mr-2"></i>
                      Open QR Scanner
                    </button>
                    <div className="text-xs text-gray-500 text-center">
                      Real-time countdown shows when spots become free
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* QR Scanner Modal */}
      {qrModal.isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors"
            >
              <i className="ri-close-line text-gray-600"></i>
            </button>
            
            <div className="text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-qr-scan-2-line text-blue-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {qrModal.type === 'entry' ? '🚗 Vehicle Entry' : '🚪 Vehicle Exit'}
                </h3>
                <p className="text-gray-600">
                  {qrModal.type === 'entry' 
                    ? 'Scan QR code to park your vehicle' 
                    : 'Scan QR code to exit and calculate parking fee'}
                </p>
              </div>
              
              {/* QR Scanner Simulation */}
              <div className="mb-6">
                <div className="w-48 h-48 bg-gray-100 rounded-xl mx-auto relative overflow-hidden border-4 border-gray-300">
                  {isScanning ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                        <div className="text-blue-600 font-medium">Scanning...</div>
                      </div>
                    </div>
                  ) : scanResult ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                          <i className="ri-check-line text-white text-xl"></i>
                        </div>
                        <div className="text-green-600 font-medium text-sm">QR Code Detected!</div>
                        <div className="text-gray-600 text-xs mt-1">{scanResult}</div>
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <i className="ri-qr-code-line text-gray-400 text-4xl mb-2"></i>
                        <div className="text-gray-500 text-sm">Position QR code here</div>
                      </div>
                    </div>
                  )}
                  
                  {/* Scanner overlay */}
                  {!isScanning && !scanResult && (
                    <div className="absolute inset-4 border-2 border-blue-500 rounded-lg">
                      <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-blue-500 rounded-tl-lg"></div>
                      <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-blue-500 rounded-tr-lg"></div>
                      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-blue-500 rounded-bl-lg"></div>
                      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-blue-500 rounded-br-lg"></div>
                    </div>
                  )}
                </div>
              </div>
              
              {!isScanning && !scanResult && (
                <button 
                  onClick={simulateQRScan}
                  disabled={isProcessing}
                  className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl px-6 py-3 text-lg w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <i className="ri-camera-line mr-2"></i>
                      Start Scanning
                    </>
                  )}
                </button>
              )}
              
              {qrModal.slotId && qrModal.zoneId && (
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600">
                    Zone: <span className="font-bold text-gray-900">
                      {parkingZones.find(z => z.id === qrModal.zoneId)?.name}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    Slot: <span className="font-bold text-gray-900">
                      {parkingZones.find(z => z.id === qrModal.zoneId)?.slots.find(s => s.id === qrModal.slotId)?.number}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    QR Code: <span className="font-mono text-xs">
                      {parkingZones.find(z => z.id === qrModal.zoneId)?.slots.find(s => s.id === qrModal.slotId)?.qrCode}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Duration Selection Modal */}
      {durationModal.isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full max-h-[90vh] overflow-y-auto p-4 relative">
            <button 
              onClick={closeDurationModal}
              className="absolute top-3 right-3 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors"
            >
              <i className="ri-close-line text-gray-600 text-sm"></i>
            </button>
            
            <div className="text-center">
              <div className="mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-time-line text-green-600 text-xl"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  🅿️ Select Duration
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  How long do you need to park?
                </p>
                <div className="p-2 bg-gray-50 rounded-lg">
                  <div className="text-xs text-gray-600">
                    <strong>{durationModal.zoneName}</strong> - Slot {durationModal.slotNumber}
                  </div>
                  <div className="text-xs text-gray-500">
                    Rate: $5 per hour
                  </div>
                </div>
              </div>
              
              {/* Duration Selection */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Parking Duration (Hours)
                </label>
                <div className="grid grid-cols-4 gap-1 mb-3">
                  {[1, 2, 3, 4, 6, 8, 12, 24].map((hours) => (
                    <button
                      key={hours}
                      onClick={() => setSelectedDuration(hours)}
                      className={`p-2 rounded-lg border-2 transition-all duration-200 cursor-pointer whitespace-nowrap text-xs ${
                        selectedDuration === hours
                          ? 'border-green-500 bg-green-50 text-green-700'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <div className="font-bold">{hours}h</div>
                      <div className="text-xs text-gray-500">${hours * 5}</div>
                    </button>
                  ))}
                </div>
                
                {/* Custom Duration Input */}
                <div className="flex items-center justify-center space-x-2">
                  <label className="text-xs text-gray-600">Custom:</label>
                  <input
                    type="number"
                    min="1"
                    max="168"
                    value={selectedDuration}
                    onChange={(e) => setSelectedDuration(parseInt(e.target.value) || 1)}
                    className="w-16 px-2 py-1 border border-gray-300 rounded text-center text-xs"
                  />
                  <span className="text-xs text-gray-600">hours</span>
                </div>
              </div>

              {/* Car Color Selection */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vehicle Color
                </label>
                <div className="grid grid-cols-4 gap-1">
                  {carColorOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setSelectedCarColor(option.value)}
                      className={`p-1 rounded-lg border-2 transition-all duration-200 cursor-pointer ${
                        selectedCarColor === option.value
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-full mx-auto mb-1 ${option.color}`}></div>
                      <div className="text-xs text-gray-600">{option.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Summary */}
              <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-xs text-blue-800">
                  <div className="flex justify-between mb-1">
                    <span>Duration:</span>
                    <span className="font-bold">{selectedDuration} hours</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Rate:</span>
                    <span>$5/hour</span>
                  </div>
                  <div className="flex justify-between font-bold text-blue-900 border-t border-blue-300 pt-1">
                    <span>Total Fee:</span>
                    <span>${selectedDuration * 5}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <button 
                  onClick={handleDurationConfirm}
                  disabled={isProcessing || selectedDuration < 1}
                  className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl px-4 py-2 text-sm w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <i className="ri-check-line mr-2"></i>
                      Confirm Parking
                    </>
                  )}
                </button>
                
                <button 
                  onClick={() => {
                    closeDurationModal();
                    setQrModal({ isOpen: true, type: 'entry', zoneId: activeZone });
                  }}
                  className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 text-sm w-full"
                >
                  <i className="ri-qr-scan-2-line mr-2"></i>
                  Scan Different QR Code
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
