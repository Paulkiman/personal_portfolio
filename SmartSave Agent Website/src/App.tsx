
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Remarks from '@/components/Remarks';
import Services from '@/components/Services';
import SmartSave from '@/components/SmartSave';
import FinanceEducation from '@/components/FinanceEducation';
import Team from '@/components/Team';
import Registration from '@/components/Registration';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize GSAP ScrollTrigger
    if (typeof window !== 'undefined' && (window as any).gsap) {
      (window as any).gsap.registerPlugin((window as any).ScrollTrigger);
    }
  }, []);

  return (
    <div className="min-h-screen selection:bg-emerald-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Remarks />
        <Services />
        <SmartSave />
        <FinanceEducation />
        <Team />
        <Registration />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
