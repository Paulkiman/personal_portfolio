
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const SmartSave: React.FC = () => {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = (window as any).gsap;
    if (gsap && videoRef.current) {
      gsap.to(videoRef.current, {
        scrollTrigger: {
          trigger: videoRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        },
        scale: 1.1,
      });
    }
  }, []);

  const steps = [
    { label: "INGEST", text: "SMS alerts from MPESA/Banks are securely pushed via webhook." },
    { label: "PROCESS", text: "n8n agents classify transactions using specialized ML models." },
    { label: "EXECUTE", text: "Automated savings rules move funds via banking APIs." }
  ];

  return (
    <section id="smartsave" className="bg-slate-950 text-white py-32 md:py-48 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        <div className="md:col-span-5 relative z-10">
          <div className="mb-8 p-3 bg-emerald-500/10 border border-emerald-500/20 inline-block">
             <span className="text-[10px] font-black tracking-widest text-emerald-400 uppercase">Featured MVP</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none uppercase">
            SMART<br />SAVE<br /><span className="text-emerald-500">AGENT.</span>
          </h2>
          <p className="text-lg text-slate-400 font-light mb-12 max-w-md">
            A fully autonomous financial assistant that bridges the gap between your bank notifications and your savings goals.
          </p>
          
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6 border-l border-slate-800 pl-6 group">
                <span className="text-[10px] font-black text-emerald-500 mt-1">{step.label}</span>
                <p className="text-sm text-slate-500 group-hover:text-slate-300 transition-colors">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-7 relative flex justify-center items-center">
          <div ref={videoRef} className="relative w-full aspect-square md:aspect-[4/5] bg-slate-900 overflow-hidden border border-white/5 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-blue-500/10"></div>
            {/* Architectural Abstract Visual */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-12">
               <div className="w-full h-full border border-emerald-500/20 rounded-full animate-spin-slow opacity-20"></div>
               <div className="absolute w-[80%] h-[80%] border border-blue-500/20 rounded-full animate-reverse-spin opacity-20"></div>
               <div className="absolute flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-emerald-500 rounded-2xl shadow-[0_0_50px_rgba(16,185,129,0.3)] mb-8 flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <h4 className="text-2xl font-bold tracking-tight mb-4">AGENTIC ENGINE</h4>
                  <p className="text-[10px] uppercase tracking-widest text-emerald-400">Node.js + Supabase + n8n</p>
               </div>
            </div>
          </div>
          
          {/* Decorative small text in corners */}
          <div className="absolute top-0 right-0 p-8">
            <span className="text-[10px] text-slate-600 font-mono">LATENCY: 140MS</span>
          </div>
          <div className="absolute bottom-0 left-0 p-8">
            <span className="text-[10px] text-slate-600 font-mono">ENCRYPTION: AES-256</span>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes reverse-spin { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-reverse-spin { animation: reverse-spin 15s linear infinite; }
      `}</style>
    </section>
  );
};

export default SmartSave;
