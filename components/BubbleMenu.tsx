
import React, { useState } from 'react';

interface BubbleMenuProps {
  onNavigate: (section: string) => void;
}

const BubbleMenu: React.FC<BubbleMenuProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: 'home', label: 'Home', icon: '◈', color: 'bg-blue-600', offset: 'translate-y-[-120px]' },
    { id: 'experience', label: 'Work', icon: '⚒', color: 'bg-zinc-800', offset: 'translate-x-[-90px] translate-y-[-80px]' },
    { id: 'projects', label: 'Code', icon: '⌘', color: 'bg-zinc-800', offset: 'translate-x-[90px] translate-y-[-80px]' },
    { id: 'stack', label: 'Tech', icon: '⚡', color: 'bg-zinc-800', offset: 'translate-y-[80px] translate-x-[-60px]' },
    { id: 'contact', label: 'Talk', icon: '✉', color: 'bg-zinc-800', offset: 'translate-y-[80px] translate-x-[60px]' },
  ];

  return (
    <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[100]">
      <div className="relative flex items-center justify-center">
        {/* Expanding Bubbles */}
        {links.map((link, idx) => (
          <button
            key={link.id}
            onClick={() => {
              onNavigate(link.id);
              setIsOpen(false);
            }}
            className={`absolute w-16 h-16 rounded-full flex flex-col items-center justify-center transition-all duration-500 ease-out shadow-2xl ${
              isOpen 
                ? `${link.offset} opacity-100 scale-100 rotate-0` 
                : 'translate-x-0 translate-y-0 opacity-0 scale-50 rotate-45'
            } ${link.color} text-white group`}
            style={{ transitionDelay: isOpen ? `${idx * 50}ms` : '0ms' }}
          >
            <span className="text-xl mb-1">{link.icon}</span>
            <span className="text-[8px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">{link.label}</span>
          </button>
        ))}

        {/* Main Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-20 h-20 rounded-full flex items-center justify-center z-10 transition-all duration-500 shadow-2xl glass-morphism ${
            isOpen ? 'rotate-45 scale-90 border-blue-500' : 'rotate-0 hover:scale-110'
          }`}
        >
          <div className="relative w-8 h-8">
             <span className={`absolute top-1/2 left-0 w-8 h-0.5 bg-white transition-all ${isOpen ? 'rotate-90' : ''}`} />
             <span className={`absolute top-1/2 left-0 w-8 h-0.5 bg-white transition-all`} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default BubbleMenu;
