import React from 'react';
import ModernNavbar from '../components/ModernNavbar';
import ModernHero from '../components/ModernHero';
import CleanAbout from '../components/CleanAbout';
import CleanServices from '../components/CleanServices';
import PricingSection from '../components/PricingSection';
import CleanPortfolio from '../components/CleanPortfolio';
import CleanTestimonials from '../components/CleanTestimonials';
import CleanContact from '../components/CleanContact';
import CleanFooter from '../components/CleanFooter';
import ChatBot from '../components/ChatBot';
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <ModernNavbar />
      <ModernHero />
      <CleanAbout />
      <CleanServices />
      <PricingSection />
      <CleanPortfolio />
      <CleanTestimonials />
      <CleanContact />
      <CleanFooter />
      <ChatBot />
      <Toaster />
    </div>
  );
};

export default Index;