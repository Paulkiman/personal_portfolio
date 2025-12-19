
import React, { useState, useEffect } from 'react';

interface FloatingNavProps {
  onNavigate: (section: string) => void;
}

const FloatingNav: React.FC<FloatingNavProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Show when scrolling up or at the very top
      if (currentScrollY > 200) {
        setIsVisible(currentScrollY < lastScrollY);
      } else {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { id: 'home', label: 'Home', icon: '◈' },
    { id: 'experience', label: 'Work', icon: '⚒' },
    { id: 'projects', label: 'Catalog', icon: '⌘' },
    { id: 'stack', label: 'Stack', icon: '⚡' },
    { id: 'contact', label: 'Talk', icon: '✉' }
  ];

  return (
    <div className={`fixed top-6 left-1/2 -translate-x-1/2 z-[200] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0 pointer-events-none'}`}>
      <nav className="glass-morphism rounded-full px-2 py-2 flex items-center gap-1 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className="group flex items-center gap-2 px-4 py-2 rounded-full hover:bg-white/5 transition-all"
          >
            <span className="text-base text-blue-500 group-hover:scale-110 transition-transform">{item.icon}</span>
            <span className="bricolage text-[9px] uppercase tracking-[0.2em] font-black text-zinc-400 group-hover:text-white transition-colors hidden md:block">
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default FloatingNav;
