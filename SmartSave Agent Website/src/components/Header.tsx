
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAdmin } from '@/context/AdminContext';
import AdminLogin from '@/components/AdminLogin';

const Header: React.FC = () => {
  const { isAuthenticated, isLoading } = useAdmin();
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 py-8 md:px-12 pointer-events-none">
        <div className="flex justify-between items-center pointer-events-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-white font-bold tracking-tighter text-xl flex items-center gap-2"
          >
            <div className="w-6 h-6 bg-emerald-500 rounded-sm"></div>
            FINARCHITECT
          </motion.div>
          
          <nav className="hidden md:flex gap-8 items-center">
            {['Logic', 'Services', 'SmartSave', 'Insights', 'Contact'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-[10px] uppercase tracking-[0.3em] font-semibold text-white/70 hover:text-emerald-400 transition-colors"
              >
                {item}
              </motion.a>
            ))}

            {/* Admin Portal Link - subtle and non-intrusive */}
            {!isLoading && (
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => setShowAdminLogin(true)}
                className={`text-[10px] uppercase tracking-[0.3em] font-semibold transition-colors ${
                  isAuthenticated
                    ? 'text-emerald-400 hover:text-emerald-300'
                    : 'text-white/40 hover:text-white/60'
                }`}
              >
                {isAuthenticated ? '◆ Portal' : 'Portal'}
              </motion.button>
            )}
          </nav>
        </div>
      </header>

      <AdminLogin isOpen={showAdminLogin} onClose={() => setShowAdminLogin(false)} />
    </>
  );
};

export default Header;
