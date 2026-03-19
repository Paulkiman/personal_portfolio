
import React from 'react';

interface MarqueeProps {
  text: string;
  speed?: string;
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ text, className = "" }) => {
  return (
    <div className={`border-y border-white/5 bg-zinc-950/50 ${className}`}>
      <div className="px-6 sm:px-10 lg:px-[10vw] py-8 text-center">
        <p
          className="syne text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tighter opacity-60"
          style={{ WebkitTextStroke: '1px rgba(255,255,255,0.08)' }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default Marquee;
