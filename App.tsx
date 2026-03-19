
import React, { useState } from 'react';
import { PROJECTS, EXPERIENCES, TECH_STACK } from './data';
import { Project } from './types';
import BubbleMenu from './components/BubbleMenu';
import Marquee from './components/Marquee';
import ProjectDrawer from './components/ProjectDrawer';
import FloatingNav from './components/FloatingNav';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'auto' });
    }
  };

  return (
    <div className="bg-[#050505] min-h-screen">
      <FloatingNav onNavigate={scrollToSection} />
      <BubbleMenu onNavigate={scrollToSection} />
      <ProjectDrawer project={selectedProject} onClose={() => setSelectedProject(null)} />

      <header className="sticky top-0 z-50 bg-[#050505]/80 backdrop-blur border-b border-white/5">
        <div className="px-6 sm:px-10 lg:px-[10vw] py-5 flex items-center justify-between">
        <h2 className="syne font-black text-base tracking-tighter uppercase leading-none">
          Paul Njogu Kimani<span className="text-blue-600">.</span>
        </h2>
          <div className="bricolage text-[10px] uppercase tracking-[0.35em] text-zinc-500 font-black hidden sm:block">
            Backend Software Engineer
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="py-24 sm:py-28 lg:py-32 px-6 sm:px-10 lg:px-[10vw]">
        <div className="space-y-6 max-w-6xl">
          <div className="flex items-center gap-4">
            <div className="w-10 h-[1.5px] bg-blue-600"></div>
            <p className="bricolage text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-black">Industrial Backend Architect</p>
          </div>
          <h1 className="syne text-4xl sm:text-5xl md:text-[72px] font-extrabold leading-[0.95] tracking-tighter uppercase">
            Architecting <br className="hidden sm:block" />
            Systems that <br className="hidden sm:block" />
            <span className="text-blue-600 italic underline decoration-1 underline-offset-8">Scale.</span>
          </h1>
          <div className="max-w-2xl">
            <p className="bricolage text-base md:text-lg text-zinc-400 leading-relaxed font-light">
              Engineering high-concurrency financial cores with Java Microservices and automated banking agents.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="relative z-20 bg-[#050505]">
        <Marquee text="Java • Spring Boot • Node.js • Express • Sequelize • Prisma • PostgreSQL • Redis • RabbitMQ • Kafka • Docker • JWT • TypeScript" />

        {/* Experience Section */}
        <section id="experience" className="py-24 sm:py-28 lg:py-32 px-6 sm:px-10 lg:px-[10vw] bg-[#070707]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
              <h2 className="syne text-4xl md:text-[45px] font-extrabold uppercase tracking-tighter mb-8 leading-tight">
                Industrial <br />Expertise.
              </h2>
              <div className="space-y-1">
                <p className="bricolage text-zinc-600 uppercase text-[8px] tracking-[0.3em] font-black">Primary Station</p>
                <p className="syne text-2xl font-bold uppercase tracking-tighter">E&M Technology Hub</p>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-20">
              {EXPERIENCES.map((exp, i) => (
                <div key={i}>
                  <div className="space-y-8 group">
                    <h3 className="syne text-3xl font-extrabold uppercase tracking-tighter group-hover:text-blue-500 transition-all duration-500">{exp.role}</h3>
                    <div className="space-y-5">
                      {exp.description.map((item, idx) => (
                        <div key={idx} className="bricolage text-zinc-400 leading-relaxed text-base font-light flex gap-4">
                          <span className="text-blue-600 shrink-0 mt-2 w-1.5 h-1.5 rounded-full ring-4 ring-blue-600/10"></span>
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 pt-4">
                      {exp.projects.map(p => (
                        p.projectId ? (
                          <button
                            key={p.label}
                            onClick={() => setSelectedProject(PROJECTS.find(proj => proj.id === p.projectId) || null)}
                            className="bricolage text-[8px] uppercase font-black tracking-widest text-zinc-400 border border-zinc-700 px-3 py-1.5 rounded-md hover:border-blue-500 hover:text-blue-400 transition-colors cursor-pointer"
                          >
                            {p.label}
                          </button>
                        ) : (
                          <span key={p.label} className="bricolage text-[8px] uppercase font-black tracking-widest text-zinc-600 border border-zinc-800 px-3 py-1.5 rounded-md cursor-default">
                            {p.label}
                          </span>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Masonry Projects Catalog */}
        <section id="projects" className="py-24 sm:py-28 lg:py-32 px-6 sm:px-10 lg:px-[10vw]">
          <div className="mb-16 sm:mb-20 lg:mb-24 flex flex-col items-start">
              <span className="bricolage text-[9px] uppercase tracking-[0.6em] text-blue-600 font-black mb-4">Engineering Catalog</span>
              <h2 className="syne text-5xl sm:text-6xl md:text-[72px] font-black uppercase tracking-tighter leading-none">Modules.</h2>
          </div>
          
          <div className="columns-1 md:columns-2 gap-12 space-y-12">
            {PROJECTS.map((project, idx) => (
              <div 
                key={project.id} 
                className="break-inside-avoid"
              >
                <div 
                  onClick={() => setSelectedProject(project)}
                  className="group relative cursor-pointer overflow-hidden rounded-[2rem] bg-zinc-900/20 border border-white/5 transition-all duration-700 hover:border-blue-500/30 hover:bg-zinc-900/40"
                >
                  <div className="overflow-hidden">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s] ease-out"
                    />
                  </div>
                  <div className="p-10">
                     <div className="flex justify-between items-start mb-4">
                        <p className="bricolage text-[8px] uppercase tracking-[0.2em] text-blue-500 font-black">{project.type}</p>
                        <div className="flex items-center gap-2">
                          {project.githubUrl && (
                            <span className="bricolage text-[7px] uppercase tracking-widest text-zinc-600 border border-zinc-800 px-2 py-1 rounded-md font-black">GitHub</span>
                          )}
                          <div className="flex gap-1">
                            <div className="w-1 h-1 rounded-full bg-blue-600"></div>
                            <div className="w-1 h-1 rounded-full bg-zinc-800"></div>
                          </div>
                        </div>
                     </div>
                     <h3 className="syne text-2xl font-extrabold uppercase tracking-tighter mb-3 group-hover:translate-x-1 transition-transform duration-500">{project.title}</h3>
                     <p className="bricolage text-sm text-zinc-500 line-clamp-2 leading-relaxed mb-6 font-light">{project.description}</p>
                     
                     <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                        <span className="bricolage text-[8px] uppercase font-black tracking-widest text-white">Inspect Architecture</span>
                        <div className="w-10 h-[1px] bg-white/20"></div>
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Toolkit Section */}
        <section id="stack" className="py-24 sm:py-28 lg:py-32 px-6 sm:px-10 lg:px-[10vw] bg-white text-black rounded-[3rem] md:rounded-[6rem] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
               <h2 className="syne text-2xl md:text-[32px] font-black uppercase tracking-tighter leading-none mb-4">Toolkit.</h2>
               <p className="bricolage text-zinc-500 uppercase text-[9px] tracking-[0.4em] font-black">Industrial Standard Stack</p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-12">
              {TECH_STACK.map((tech, i) => (
                <div key={i} className="group">
                   <div className="flex justify-between items-end mb-4">
                      <h4 className="syne text-xl font-black uppercase tracking-tighter group-hover:text-blue-600 transition-colors">{tech.name}</h4>
                      <span className="bricolage text-[10px] font-mono font-bold text-zinc-300">{tech.proficiency}%</span>
                   </div>
                   <div className="h-[2px] w-full bg-zinc-100 overflow-hidden">
                      <div className="h-full bg-black transition-all duration-[1.5s] ease-[cubic-bezier(0.23,1,0.32,1)]" style={{ width: `${tech.proficiency}%` }}></div>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen px-6 sm:px-10 lg:px-[10vw] flex flex-col justify-center items-center text-center relative py-24 sm:py-28 lg:py-32">
          <div>
            <h2 className="syne text-6xl md:text-[100px] font-black uppercase tracking-tighter leading-none mb-12">
              Secure the <br /><span className="text-blue-600 italic">Core.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
               <a href="mailto:paulkimani203@gmail.com" className="group p-10 glass-morphism rounded-[2.5rem] hover:bg-zinc-900 transition-all duration-700 border border-white/5">
                  <p className="bricolage text-[8px] uppercase tracking-[0.4em] text-zinc-600 mb-4 font-black">Digital Protocol</p>
                  <p className="syne text-lg md:text-xl font-bold group-hover:text-blue-500 transition-colors tracking-tight">paulkimani203@gmail.com</p>
               </a>
               <a href="tel:0799454480" className="group p-10 glass-morphism rounded-[2.5rem] hover:bg-zinc-900 transition-all duration-700 border border-white/5">
                  <p className="bricolage text-[8px] uppercase tracking-[0.4em] text-zinc-600 mb-4 font-black">Direct Line</p>
                  <p className="syne text-lg md:text-xl font-bold group-hover:text-blue-500 transition-colors tracking-tight">+254 799 454 480</p>
               </a>
            </div>
          </div>
          
          <footer className="mt-auto py-16 w-full flex flex-col md:flex-row justify-between items-center gap-6 opacity-20 bricolage text-[8px] uppercase tracking-[0.5em] font-black">
              <p>© 2024 Paul Njogu Kimani</p>
              <p>Designed for Performance</p>
              <p>Nairobi / Kenya</p>
          </footer>
        </section>
      </div>
    </div>
  );
};

export default App;
