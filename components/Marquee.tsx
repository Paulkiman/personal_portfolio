
import React from 'react';

interface MarqueeProps {
  text: string;
  speed?: string;
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ text, className = "" }) => {
  return (
    <div className={`overflow-hidden py-10 border-y border-white/5 bg-zinc-950/50 ${className}`}>
      <div className="animate-marquee whitespace-nowrap">
        {[...Array(6)].map((_, i) => (
          <span key={i} className="syne text-6xl md:text-8xl font-black uppercase tracking-tighter mx-8 text-muted opacity-50 border-text flex items-center gap-8" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
            {text} <span className="w-4 h-4 rounded-full bg-blue-600"></span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
