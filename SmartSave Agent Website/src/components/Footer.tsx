
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white py-20 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 font-bold tracking-tighter text-2xl">
            <div className="w-6 h-6 bg-emerald-500 rounded-sm"></div>
            FINARCHITECT
          </div>
          <p className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-medium max-w-xs">
            Resilient backend engineering for the modern financial landscape. Built with Java, Spring Boot, and Agentic logic.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
          <div className="flex flex-col gap-4">
             <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Navigation</span>
             {['Logic', 'Services', 'SmartSave', 'Insights'].map(item => (
               <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-light hover:text-emerald-500 transition-colors">{item}</a>
             ))}
          </div>
          <div className="flex flex-col gap-4">
             <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Connect</span>
             {['GitHub', 'LinkedIn', 'X', 'Substack'].map(item => (
               <a key={item} href="#" className="text-sm font-light hover:text-emerald-500 transition-colors">{item}</a>
             ))}
          </div>
          <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
             <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Legal</span>
             {['Terms of System', 'Privacy Architecture', 'Security Policy'].map(item => (
               <a key={item} href="#" className="text-sm font-light hover:text-emerald-500 transition-colors">{item}</a>
             ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-[1400px] mx-auto mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
        <span className="text-[10px] font-bold tracking-widest uppercase">&copy; 2024 FINARCHITECT AGENCY. ALL LOGIC RESERVED.</span>
        <div className="flex gap-4">
          <span className="text-[10px] font-bold tracking-widest uppercase">SYSTEM STATUS: OPTIMAL</span>
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
