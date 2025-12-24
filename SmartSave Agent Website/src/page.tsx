'use client';

import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import SmartSave from '@/components/SmartSave';
import FinanceEducation from '@/components/FinanceEducation';
import Team from '@/components/Team';
import Remarks from '@/components/Remarks';
import Registration from '@/components/Registration';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <SmartSave />
      <FinanceEducation />
      <Team />
      <Remarks />
      <Registration />
      <Contact />
      <Footer />
    </main>
  );
}
