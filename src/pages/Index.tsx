import React from 'react';
import PremiumNavbar from '../components/PremiumNavbar';
import PremiumHero from '../components/PremiumHero';
import PremiumAbout from '../components/PremiumAbout';
import PremiumServices from '../components/PremiumServices';
import PremiumPortfolio from '../components/PremiumPortfolio';
import PremiumTestimonials from '../components/PremiumTestimonials';
import PremiumContact from '../components/PremiumContact';
import PremiumFooter from '../components/PremiumFooter';
import PremiumChatBot from '../components/PremiumChatBot';
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen bg-primary-blue">
      <PremiumNavbar />
      <PremiumHero />
      <PremiumAbout />
      <PremiumServices />
      <PremiumPortfolio />
      <PremiumTestimonials />
      <PremiumContact />
      <PremiumFooter />
      <PremiumChatBot />
      <Toaster />
    </div>
  );
};

export default Index;