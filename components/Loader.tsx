
import React, { useEffect, useState } from 'react';

const Loader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsExiting(true), 500);
          setTimeout(onComplete, 1500); // Allow time for exit animation
          return 100;
        }
        return prev + 2;
      });
    }, 25);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[200] bg-[#050505] flex flex-col items-center justify-center p-12 transition-all duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] ${isExiting ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className={`w-full max-w-6xl flex flex-col md:flex-row justify-between items-end gap-8 transition-opacity duration-500 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
        <div className="overflow-hidden">
          <h1 className="syne text-7xl md:text-[120px] font-extrabold tracking-tighter leading-none m-0 animate-pulse">
            PNK<span className="text-blue-600">.</span>
          </h1>
        </div>
        <div className="flex flex-col items-end">
            <p className="bricolage text-[10px] uppercase tracking-[0.5em] mb-4 text-zinc-500 font-medium">System Architecture Loading</p>
            <div className="w-64 h-[2px] bg-zinc-900 relative">
                <div 
                    className="absolute top-0 left-0 h-full bg-blue-600 transition-all duration-300" 
                    style={{ width: `${progress}%` }}
                />
            </div>
            <p className="syne font-bold text-5xl mt-4 tabular-nums">{progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
