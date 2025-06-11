import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import ProcessSection from '../components/ProcessSection';
import Portfolio from '../components/Portfolio';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import BlogPreview from '../components/BlogPreview';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ProcessSection />
      <Portfolio />
      <TestimonialsSection />
      <FAQSection />
      <BlogPreview />
      <Contact />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;