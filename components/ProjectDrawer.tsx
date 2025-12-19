
import React, { useEffect, useState } from 'react';
import { Project } from '../types';

interface ProjectDrawerProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectDrawer: React.FC<ProjectDrawerProps> = ({ project, onClose }) => {
  const [active, setActive] = useState(false);
  const [displayProject, setDisplayProject] = useState<Project | null>(null);

  useEffect(() => {
    if (project) {
      setDisplayProject(project);
      document.body.style.overflow = 'hidden';
      setTimeout(() => setActive(true), 10);
    } else {
      setActive(false);
      const timer = setTimeout(() => {
        document.body.style.overflow = 'unset';
        setDisplayProject(null);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [project]);

  if (!displayProject && !active) return null;

  return (
    <div className={`fixed inset-0 z-[250] flex items-end justify-center pointer-events-none ${active ? 'pointer-events-auto' : ''}`}>
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/80 backdrop-blur-xl transition-opacity duration-700 ${active ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      
      {/* Drawer Content */}
      <div 
        className={`relative w-full max-w-6xl bg-[#080808] rounded-t-[2.5rem] border-t border-white/10 shadow-[0_-30px_60px_rgba(0,0,0,0.8)] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden ${active ? 'translate-y-0' : 'translate-y-full'}`}
        style={{ height: '90vh' }}
      >
        {/* Navigation / Close */}
        <div className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-30">
          <div className="flex items-center gap-3">
             <div className="w-8 h-[1px] bg-blue-600"></div>
             <span className="bricolage text-[10px] uppercase tracking-widest font-bold text-zinc-500">Project Module</span>
          </div>
          <button 
            onClick={onClose}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white transition-all border border-white/5"
          >
            <span className="text-xl leading-none">✕</span>
          </button>
        </div>

        <div className="h-full overflow-y-auto p-8 md:p-16 pt-32 custom-scrollbar">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Info */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-4">
                <span className="bricolage text-[9px] uppercase tracking-[0.4em] text-blue-500 font-black">{displayProject?.type} Engineering</span>
                <h2 className="syne text-3xl md:text-5xl font-extrabold uppercase tracking-tighter leading-[0.95]">
                  {displayProject?.title}
                </h2>
              </div>
              
              <div className="space-y-6">
                <h4 className="bricolage text-[10px] uppercase tracking-widest text-zinc-600 font-black">Overview</h4>
                <p className="bricolage text-xl text-zinc-300 leading-relaxed font-light">
                  {displayProject?.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/5">
                <div>
                  <h4 className="bricolage text-[10px] uppercase tracking-widest text-zinc-600 font-black mb-4">Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {displayProject?.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-white/5 rounded-md text-[8px] uppercase tracking-widest font-black text-blue-400 border border-blue-500/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="bricolage text-[10px] uppercase tracking-widest text-zinc-600 font-black mb-4">Architecture</h4>
                  <p className="syne font-bold text-[10px] uppercase text-zinc-400 leading-tight">Microservices<br/>Event-Driven</p>
                </div>
              </div>

              <button className="w-full group bg-white text-black font-black py-6 rounded-2xl transition-all uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-4 hover:bg-blue-600 hover:text-white">
                Review Implementation Details <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* Right Media */}
            <div className="lg:col-span-7">
              <div className="relative group overflow-hidden rounded-[2rem] border border-white/5 bg-zinc-900 shadow-2xl">
                <img 
                  src={displayProject?.imageUrl} 
                  alt={displayProject?.title} 
                  className="w-full aspect-square md:aspect-video object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                
                {/* Visual Accent */}
                <div className="absolute bottom-8 left-8 right-8 p-6 glass-morphism rounded-2xl border border-white/10 backdrop-blur-md">
                   <div className="flex justify-between items-center">
                      <p className="bricolage text-[9px] uppercase tracking-widest font-black opacity-50">Status</p>
                      <p className="bricolage text-[9px] uppercase tracking-widest font-black text-green-500">Production Ready</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDrawer;
