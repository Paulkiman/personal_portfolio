
import React from 'react';

const insights = [
  {
    category: "STRATEGY",
    title: "Cash-Flow Visibility",
    content: "True wealth starts with seeing every cent. Automation removes the cognitive load of manual tracking, allowing for precision in resource allocation."
  },
  {
    category: "AUTOMATION",
    title: "The 1% Micro-Saving",
    content: "By shaving 1% off every transaction and diverting it to high-yield environments, we exploit compound interest without lifestyle friction."
  },
  {
    category: "SYSTEMS",
    title: "Budgeting as Code",
    content: "Think of your budget as business logic. Deploy it, test it, and let it run autonomously so you can focus on high-leverage growth activities."
  }
];

const FinanceEducation: React.FC = () => {
  return (
    <section id="insights" className="bg-white text-slate-900 py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">
            INSIGHTS<span className="text-emerald-500">.</span>
          </h2>
          <p className="text-sm text-slate-400 font-light max-w-xs uppercase tracking-widest">
            Engineering a mindset for financial freedom and architectural clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-px md:bg-slate-200">
          {insights.map((item, i) => (
            <div key={i} className="bg-white md:p-16">
              <span className="text-[10px] font-black text-emerald-600 tracking-widest mb-8 block">{item.category}</span>
              <h3 className="text-3xl font-bold tracking-tighter mb-6 uppercase">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                {item.content}
              </p>
              <button className="mt-8 text-[10px] font-black uppercase tracking-[0.3em] border-b border-slate-900 pb-1 hover:text-emerald-600 hover:border-emerald-600 transition-all">
                Read Abstract
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinanceEducation;
