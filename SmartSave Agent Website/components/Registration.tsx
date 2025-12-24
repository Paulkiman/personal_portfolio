
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SuccessModal from '@/components/SuccessModal';

interface FormData {
  fullName: string;
  email: string;
  plan: string;
}

const Registration: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    plan: 'MVP ACCESS (FREE)',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');

  const validateForm = (): boolean => {
    if (!formData.fullName.trim()) {
      setError('Full Name is required');
      return false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Valid email is required');
      return false;
    }
    setError('');
    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          plan: formData.plan,
        }),
      });

      if (response.ok) {
        setShowModal(true);
        setFormData({
          fullName: '',
          email: '',
          plan: 'MVP ACCESS (FREE)',
        });
      } else {
        setError('Failed to process signup. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error('Signup error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="bg-slate-50 py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-500"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-12">
             <span className="text-[10px] font-black tracking-widest text-emerald-600 uppercase mb-4 block">ONBOARDING</span>
             <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 uppercase">
               Ready to Automate?
             </h2>
          </div>

          <div className="bg-white p-8 md:p-12 shadow-[0_40px_100px_rgba(0,0,0,0.05)] border border-slate-200">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full bg-slate-50 border-none px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none transition-all disabled:opacity-50 cursor-pointer"
                  placeholder="JOHN DOE"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Enterprise Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full bg-slate-50 border-none px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none transition-all disabled:opacity-50 cursor-pointer"
                  placeholder="JOHN@ARCHITECT.IO"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Select Plan</label>
                <select
                  name="plan"
                  value={formData.plan}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full bg-slate-50 border-none px-4 py-3 focus:ring-2 focus:ring-emerald-500 outline-none transition-all appearance-none cursor-pointer disabled:opacity-50"
                >
                  <option>MVP ACCESS (FREE)</option>
                  <option>ENTERPRISE AUTOMATION</option>
                  <option>CUSTOM ARCHITECTURE</option>
                </select>
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="md:col-span-2 text-sm text-red-600 bg-red-50 p-3 rounded-sm border border-red-200"
                >
                  {error}
                </motion.div>
              )}

              <div className="md:col-span-2 pt-4">
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: !isLoading ? 1.02 : 1 }}
                  whileTap={{ scale: !isLoading ? 0.98 : 1 }}
                  className="w-full bg-slate-900 text-white py-4 font-black uppercase tracking-[0.5em] text-xs hover:bg-emerald-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'PROCESSING...' : 'DEPLOY YOUR SAVINGS'}
                </motion.button>
              </div>
            </form>

            <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-40 grayscale">
              {['SOC2 COMPLIANT', 'AES-256 ENCRYPTED', 'GDPR READY'].map(trust => (
                <span key={trust} className="text-[9px] font-bold tracking-[0.2em]">{trust}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Registration;
