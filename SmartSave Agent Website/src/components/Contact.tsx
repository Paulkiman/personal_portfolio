
import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-white py-48 px-6 md:px-12 text-center">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-[10px] font-black text-emerald-600 tracking-widest uppercase mb-8 block">Project Inquiry</span>
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter text-slate-900 uppercase mb-12 leading-none">
            START THE<br /><span className="text-emerald-500">CONVERSATION.</span>
          </h2>
          <div className="max-w-xl mx-auto mb-16">
            <p className="text-lg text-slate-400 font-light leading-relaxed">
              For enterprise partnerships, speaking engagements, or high-performance architectural consulting.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-24">
            <div className="text-left md:text-center">
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest block mb-4">Direct</span>
              <a href="mailto:hello@finarchitect.io" className="text-2xl md:text-4xl font-bold tracking-tight hover:text-emerald-600 transition-colors">
                hello@finarchitect.io
              </a>
            </div>
            <div className="text-left md:text-center">
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest block mb-4">In person</span>
              <p className="text-2xl md:text-4xl font-bold tracking-tight uppercase">
                Remote / Global
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
