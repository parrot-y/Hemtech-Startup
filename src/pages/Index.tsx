import React from 'react';
import EliteNavbar from '../components/EliteNavbar';
import EliteHero from '../components/EliteHero';
import EliteAbout from '../components/EliteAbout';
import EliteServices from '../components/EliteServices';
import ElitePortfolio from '../components/ElitePortfolio';
import EliteTestimonials from '../components/EliteTestimonials';
import EliteContact from '../components/EliteContact';
import EliteFooter from '../components/EliteFooter';
import ChatBot from '../components/ChatBot';
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <EliteNavbar />
      <EliteHero />
      <EliteAbout />
      <EliteServices />
      <ElitePortfolio />
      <EliteTestimonials />
      <EliteContact />
      <EliteFooter />
      <ChatBot />
      <Toaster />
    </div>
  );
};

export default Index;