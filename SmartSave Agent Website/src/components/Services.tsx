
import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Backend Architecture",
    tags: ["Java", "Spring Boot", "Kotlin"],
    description: "Design and implementation of cloud-native microservices using high-performance JVM technologies."
  },
  {
    title: "Financial Automation",
    tags: ["Smart Contracts", "Ledgers", "Compliance"],
    description: "Enterprise-grade systems for automated reconciliation, treasury management, and money movement."
  },
  {
    title: "Agentic Workflows",
    tags: ["LLM Integration", "n8n", "LangChain"],
    description: "Building intelligent agents that process complex unstructured financial data into actionable ledger entries."
  },
  {
    title: "API Design & Mastery",
    tags: ["gRPC", "REST", "GraphQL"],
    description: "Highly documented, secure, and performant interfaces designed for developers and integration at scale."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-slate-100 py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-8">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-9xl font-black tracking-tighter text-slate-900 uppercase leading-none"
          >
            SOLUTIONS<span className="text-emerald-500">.</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold tracking-[0.5em] text-slate-400 uppercase text-right"
          >
            // ARCHITECTURAL DIRECTIVES 2024
          </motion.div>
        </div>

        {/* Thick Grid Container with Black Margins */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 bg-slate-950 p-8 md:p-12 shadow-[0_50px_100px_rgba(0,0,0,0.1)]">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              whileHover={{ 
                backgroundColor: '#ffffff',
                scale: 1.015,
                zIndex: 10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              className="bg-slate-50 p-12 md:p-16 group cursor-pointer transition-all duration-500 relative flex flex-col justify-between min-h-[450px]"
            >
              <div>
                <div className="flex justify-between items-start mb-16">
                  <span className="text-[12px] font-black text-emerald-600 font-mono tracking-tighter group-hover:scale-125 transition-transform origin-left">
                    [ 0{i+1} ]
                  </span>
                  <div className="flex flex-wrap justify-end gap-2 max-w-[200px]">
                    {service.tags.map((tag, tagIndex) => (
                      <motion.span 
                        key={tag} 
                        initial={{ opacity: 0.4 }}
                        whileHover={{ opacity: 1, scale: 1.1 }}
                        className="text-[9px] px-3 py-1 bg-slate-900 text-white rounded-full font-bold uppercase tracking-widest whitespace-nowrap"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 group-hover:text-emerald-600 transition-colors uppercase tracking-tighter leading-none flex items-center gap-4">
                    <motion.span 
                      className="inline-block"
                      variants={{
                        initial: { x: -20, opacity: 0 },
                        hover: { x: 0, opacity: 1 }
                      }}
                      initial="initial"
                      whileHover="hover"
                    >
                      <svg className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-500 -ml-12 group-hover:ml-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.span>
                    <span className="group-hover:translate-x-2 transition-transform duration-500">{service.title}</span>
                  </h3>
                  <p className="text-sm text-slate-500 max-w-sm leading-relaxed font-light group-hover:text-slate-900 transition-colors">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="mt-16 overflow-hidden h-1 bg-slate-200 relative">
                <motion.div 
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                  className="absolute inset-0 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                />
              </div>

              {/* Decorative corner element */}
              <div className="absolute bottom-4 right-6 opacity-0 group-hover:opacity-10 transition-opacity">
                <span className="text-[60px] font-black text-slate-900 select-none tracking-tighter italic">SERVICE</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 text-center"
        >
          <a href="#contact" className="inline-block text-[10px] font-black uppercase tracking-[0.5em] border-b-2 border-slate-950 pb-2 hover:text-emerald-600 hover:border-emerald-600 transition-all">
            Request Technical Abstract
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
