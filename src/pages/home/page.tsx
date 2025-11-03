
import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ParkingTypesSection from './components/ParkingTypesSection';
import PricingSection from './components/PricingSection';
import WhyChooseSection from './components/WhyChooseSection';
import StatsSection from './components/StatsSection';
import LiveSimulatorSection from './components/LiveSimulatorSection';
import VideoSection from './components/VideoSection';
import MobileSection from './components/MobileSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <LiveSimulatorSection />
      {/* <FeaturesSection /> */}
      <ParkingTypesSection />
      
      {/* <WhyChooseSection /> */}
      {/* <StatsSection /> */}
     
      <VideoSection />
      <MobileSection />
      <PricingSection />
      <Footer />
    </div>
  );
}
