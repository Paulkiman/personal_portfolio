
import React from 'react';
import { motion } from 'framer-motion';

const members = [
  {
    name: "Alex Sterling",
    role: "Backend Architect",
    bio: "Senior JVM Specialist focused on high-throughput microservices and distributed ledger integrity.",
    image: "https://picsum.photos/seed/alex/800/1000"
  },
  {
    name: "Sarah Chen",
    role: "Automation Engineer",
    bio: "Expert in agentic workflow design and ML-based transaction categorization systems.",
    image: "https://picsum.photos/seed/sarah/800/1000"
  },
  {
    name: "Marcus Thorne",
    role: "Finance Strategy Lead",
    bio: "Ex-fintech consultant bridging the gap between algorithmic logic and market-ready financial products.",
    image: "https://picsum.photos/seed/marcus/800/1000"
  }
];

const Team: React.FC = () => {
  return (
    <section className="bg-slate-950 text-white py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-24 flex justify-between items-baseline">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase">TEAM<span className="text-emerald-500">.</span></h2>
          <span className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">The Core Architecture</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {members.map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="aspect-[3/4] overflow-hidden bg-slate-900 mb-8 relative grayscale group-hover:grayscale-0 transition-all duration-700">
                <img src={m.image} alt={m.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
              <div className="text-[10px] text-emerald-500 font-black uppercase tracking-[0.4em] mb-2">{m.role}</div>
              <h3 className="text-2xl font-bold tracking-tight mb-4 uppercase">{m.name}</h3>
              <p className="text-sm text-slate-500 max-w-xs leading-relaxed font-light">{m.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
