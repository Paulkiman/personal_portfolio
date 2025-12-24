
import React, { useEffect, useRef } from 'react';

const Remarks: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsap = (window as any).gsap;
    if (gsap && sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.reveal');
      gsap.from(elements, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out'
      });
    }
  }, []);

  const principles = [
    {
      title: "Resilience over Speed",
      content: "In financial systems, correctness is the only metric that survives. We build distributed architectures that gracefully handle failure before it happens."
    },
    {
      title: "Predictable Automation",
      content: "Automation isn't just about scripts. It's about designing deterministic workflows where edge cases are handled by logic, not manual intervention."
    },
    {
      title: "Scale by Design",
      content: "Microservices should be invisible. We design components that scale horizontally without introducing architectural friction."
    }
  ];

  return (
    <section id="logic" ref={sectionRef} className="bg-white text-slate-900 py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">
          <div className="md:col-span-1 border-t-2 border-slate-900 pt-4">
            <span className="text-[10px] font-black uppercase tracking-widest">01</span>
          </div>
          <div className="md:col-span-6 border-t-2 border-slate-900 pt-4">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter reveal uppercase leading-none">
              ENGINEERING<br />PHILOSOPHY.
            </h2>
          </div>
          <div className="md:col-span-5 border-t-2 border-slate-200 pt-4">
            <p className="text-sm reveal uppercase tracking-widest leading-loose text-slate-500">
              Technical excellence is not an outcome; it is a discipline. We prioritize clarity, type-safety, and observability in every line of code.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
          {principles.map((p, i) => (
            <div key={i} className="reveal">
              <div className="text-[10px] font-black tracking-[0.4em] text-emerald-600 mb-6 uppercase">
                Principle {i + 1}
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-6 uppercase">{p.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs">{p.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Remarks;
