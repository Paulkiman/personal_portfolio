import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAdmin } from '@/context/AdminContext';

interface AdminLoginProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ isOpen, onClose }) => {
  const { login } = useAdmin();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClose = () => {
    setEmail('');
    setError('');
    setSubmitted(false);
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Valid email is required');
      return;
    }

    setIsLoading(true);

    try {
      const success = await login(email);
      if (success) {
        setSubmitted(true);
        setTimeout(() => {
          handleClose();
        }, 1500);
      } else {
        setError('Access denied. This email is not authorized.');
      }
    } catch (err) {
      setError('Authentication failed. Please try again.');
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 flex items-center justify-center z-50 px-6"
          >
            <div className="bg-white rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.1)] max-w-md w-full border border-slate-200">
              {/* Header accent line */}
              <div className="h-1 bg-gradient-to-r from-slate-900 to-slate-700"></div>

              <div className="p-12">
                {!submitted ? (
                  <>
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, duration: 0.4 }}
                      className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-8"
                    >
                      <svg className="w-6 h-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </motion.div>

                    {/* Headline */}
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-2 text-center"
                    >
                      Admin Access
                    </motion.h3>

                    {/* Subtext */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-xs text-slate-600 text-center mb-8"
                    >
                      Authorized personnel only. Enter your email to proceed.
                    </motion.p>

                    {/* Form */}
                    <motion.form
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      <div className="space-y-2">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Email</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          disabled={isLoading}
                          placeholder="admin@smartsave.io"
                          className="w-full bg-slate-50 border border-slate-200 px-4 py-3 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all disabled:opacity-50 rounded-sm"
                        />
                      </div>

                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-xs text-red-600 bg-red-50 p-3 rounded-sm border border-red-200"
                        >
                          {error}
                        </motion.div>
                      )}

                      <motion.button
                        type="submit"
                        disabled={isLoading}
                        whileHover={{ scale: !isLoading ? 1.02 : 1 }}
                        whileTap={{ scale: !isLoading ? 0.98 : 1 }}
                        className="w-full bg-slate-900 text-white py-3 font-black uppercase tracking-[0.3em] text-xs hover:bg-slate-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed rounded-sm"
                      >
                        {isLoading ? 'VERIFYING...' : 'AUTHENTICATE'}
                      </motion.button>
                    </motion.form>
                  </>
                ) : (
                  <>
                    {/* Success state */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, duration: 0.4 }}
                      className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-8"
                    >
                      <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>

                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl font-black uppercase tracking-tight text-slate-900 text-center"
                    >
                      Access Granted
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-sm text-slate-600 text-center mt-4"
                    >
                      Redirecting to dashboard...
                    </motion.p>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AdminLogin;
