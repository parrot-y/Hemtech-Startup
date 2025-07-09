import React from 'react';
import ModernNavbar from '../components/ModernNavbar';
import ModernHero from '../components/ModernHero';
import CleanAbout from '../components/CleanAbout';
import ModernServices from '../components/ModernServices';
import CleanPortfolio from '../components/CleanPortfolio';
import CleanTestimonials from '../components/CleanTestimonials';
import CleanContact from '../components/CleanContact';
import CleanFooter from '../components/CleanFooter';
import ModernChatBot from '../components/ModernChatBot';
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <ModernNavbar />
      <ModernHero />
      <CleanAbout />
      <ModernServices />
      <CleanPortfolio />
      <CleanTestimonials />
      <CleanContact />
      <CleanFooter />
      <ModernChatBot />
      <Toaster />
    </div>
  );
};

export default Index;