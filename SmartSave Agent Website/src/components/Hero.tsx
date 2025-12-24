
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = (window as any).gsap;
    if (gsap) {
      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        y: 200,
        opacity: 0,
      });
    }
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-end px-6 py-20 md:px-12 md:pb-32 overflow-hidden bg-slate-950"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-emerald-900/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 blur-[120px] rounded-full delay-1000 animate-pulse"></div>
        <div className="absolute top-[20%] left-[20%] w-[30%] h-[30%] bg-yellow-900/10 blur-[100px] rounded-full delay-500 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] w-full mx-auto">
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-emerald-500 font-bold mb-4 block">
              Architecting Systems
            </span>
            <h1 className="text-huge font-bold tracking-tighter text-slate-100 leading-[0.85]">
              BACKEND<br />SYSTEMS<br /><span className="text-emerald-500">AUTHORITY.</span>
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-12 items-end"
          >
            <div className="md:col-span-4">
              <p className="text-sm text-slate-400 font-light leading-relaxed max-w-sm uppercase tracking-widest">
                Senior Java & Spring Boot specialist delivering high-frequency microservices and resilient financial infrastructure for the digital economy.
              </p>
            </div>
            <div className="md:col-span-8 flex flex-wrap gap-4 text-[10px] uppercase tracking-widest text-slate-500 font-bold">
              <span>Java 21</span>
              <span className="text-emerald-500">/</span>
              <span>Spring Boot 3</span>
              <span className="text-emerald-500">/</span>
              <span>Distributed Systems</span>
              <span className="text-emerald-500">/</span>
              <span>Financial Automation</span>
              <span className="text-emerald-500">/</span>
              <span>Agentic Workflows</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
