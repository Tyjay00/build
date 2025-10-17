import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedContent } from './components/WhatIsCloudQuest';
import { HowItWorks } from './components/HowItWorks';
import { WhyLearnOnAWS } from './components/WhyGetCertified';
import { Faq } from './components/Faq';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedContent />
        <HowItWorks />
        <WhyLearnOnAWS />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;