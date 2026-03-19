
import React from 'react';

interface BubbleMenuProps {
  onNavigate: (section: string) => void;
}

const BubbleMenu: React.FC<BubbleMenuProps> = ({ onNavigate }) => {
  const links = [
    { id: 'home', label: 'Home', icon: '◈' },
    { id: 'experience', label: 'Work', icon: '⚒' },
    { id: 'projects', label: 'Code', icon: '⌘' },
    { id: 'stack', label: 'Tech', icon: '⚡' },
    { id: 'contact', label: 'Talk', icon: '✉' },
  ];

  return (
    <div className="py-6 px-6 sm:px-10 lg:px-[10vw]">
      <div className="glass-morphism rounded-2xl border border-white/10 p-3 flex flex-wrap gap-2 justify-center">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => onNavigate(link.id)}
            className="px-4 py-2 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors text-white flex items-center gap-2"
          >
            <span className="text-blue-500">{link.icon}</span>
            <span className="bricolage text-[9px] uppercase tracking-[0.2em] font-black text-zinc-300">
              {link.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BubbleMenu;
