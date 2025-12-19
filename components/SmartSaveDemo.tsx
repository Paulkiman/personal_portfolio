
import React, { useState } from 'react';
import { analyzeFinancialSms } from '../geminiService';

const SmartSaveDemo: React.FC = () => {
  const [sms, setSms] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!sms.trim()) return;
    setLoading(true);
    const data = await analyzeFinancialSms(sms);
    setResult(data);
    setLoading(false);
  };

  const sampleSms = "LQA45TR9S8 Confirmed. Ksh2,450.00 sent to JUMA FOODS on 12/5/24 at 1:45 PM. New M-PESA balance is Ksh15,200.00.";

  return (
    <div className="relative glass-morphism rounded-[3rem] p-8 md:p-12 border border-white/10 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-[-5%] right-[-5%] syne text-[15vw] font-black opacity-[0.03] select-none pointer-events-none">
        AGENT
      </div>

      <div className="relative z-10 max-w-3xl">
        <div className="flex items-center gap-3 mb-8">
           <div className="w-3 h-3 rounded-full bg-blue-600 animate-pulse"></div>
           <span className="bricolage text-[10px] uppercase tracking-[0.5em] text-zinc-500 font-black">Live Intelligence Unit</span>
        </div>

        <h3 className="syne text-4xl font-extrabold uppercase tracking-tighter mb-6 leading-none">
          SmartSave <span className="text-blue-600">Agent.</span>
        </h3>
        
        <p className="bricolage text-lg text-zinc-400 font-light leading-relaxed mb-10 max-w-xl">
          Observe the backend parser in action. The agent extracts structured financial entities from raw SMS data using specialized Gemini logic.
        </p>
        
        <div className="space-y-6">
          <div className="group relative">
            <textarea
              className="w-full bg-black/60 border border-white/10 rounded-2xl p-6 bricolage text-base focus:outline-none focus:border-blue-500 transition-all h-40 resize-none shadow-inner"
              placeholder="Paste transaction SMS..."
              value={sms}
              onChange={(e) => setSms(e.target.value)}
            />
            <button 
              onClick={() => setSms(sampleSms)}
              className="absolute top-4 right-4 bricolage text-[8px] uppercase tracking-widest text-zinc-600 hover:text-white transition-colors border border-white/5 px-3 py-1.5 rounded-full bg-black/40"
            >
              Load Protocol
            </button>
          </div>

          <button
            onClick={handleAnalyze}
            disabled={loading || !sms}
            className="w-full group bg-blue-600 hover:bg-blue-700 disabled:bg-zinc-800 disabled:text-zinc-500 text-white font-black py-6 rounded-2xl transition-all flex items-center justify-center gap-4 uppercase tracking-[0.2em] text-[10px]"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>Execute Analysis Engine <span className="text-lg group-hover:translate-x-1 transition-transform">→</span></>
            )}
          </button>
        </div>

        {result && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="p-8 bg-white/5 rounded-[2rem] border border-white/5 space-y-2">
              <p className="bricolage text-[9px] uppercase tracking-widest text-zinc-500 font-black">Extracted Value</p>
              <p className="syne text-4xl font-black tabular-nums">{result.currency || 'KES'} {result.amount}</p>
            </div>
            
            <div className="p-8 bg-white/5 rounded-[2rem] border border-white/5 space-y-2">
              <p className="bricolage text-[9px] uppercase tracking-widest text-zinc-500 font-black">Classification</p>
              <p className="syne text-4xl font-black text-blue-500 uppercase tracking-tighter">{result.category}</p>
            </div>

            <div className="md:col-span-2 p-8 bg-white/5 rounded-[2rem] border border-white/5">
              <div className="grid grid-cols-2 gap-12">
                <div className="space-y-1">
                  <p className="bricolage text-[9px] uppercase tracking-widest text-zinc-600 font-black">Entity</p>
                  <p className="bricolage text-xl font-medium text-zinc-200">{result.merchant || 'Unidentified'}</p>
                </div>
                <div className="space-y-1">
                  <p className="bricolage text-[9px] uppercase tracking-widest text-zinc-600 font-black">Vector Type</p>
                  <p className="bricolage text-xl font-medium text-zinc-200 uppercase">{result.type}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SmartSaveDemo;
