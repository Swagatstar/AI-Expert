
import React, { useState } from 'react';
import { getQuickHealthReport } from '../services/geminiService';

const AIAssistantWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [model, setModel] = useState('');
  const [report, setReport] = useState<{ commonIssues: string[], healthTip: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGetReport = async () => {
    if (!model) return;
    setLoading(true);
    try {
      const data = await getQuickHealthReport(model);
      setReport(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-[100] flex flex-col items-start">
      {/* AI Panel */}
      {isOpen && (
        <div className="mb-4 w-80 bg-blue-950/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-400/30 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-black text-xs uppercase tracking-widest">Guru AI</p>
                  <p className="text-[10px] text-blue-200">35 Years Expertise</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="p-5 space-y-4">
            {!report ? (
              <>
                <p className="text-blue-100 text-xs leading-relaxed">
                  Enter your laptop model to see a silicon-level "Health Forecast" based on our historical repair logs.
                </p>
                <div className="space-y-3">
                  <input
                    type="text"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    placeholder="e.g. MacBook Air M1"
                    className="w-full bg-blue-900/50 border border-blue-700 rounded-xl px-4 py-2 text-sm text-white focus:ring-2 focus:ring-yellow-400 outline-none"
                  />
                  <button
                    onClick={handleGetReport}
                    disabled={loading || !model}
                    className="w-full py-2.5 bg-yellow-400 text-blue-950 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-yellow-300 transition-all disabled:opacity-50"
                  >
                    {loading ? 'Consulting Experts...' : 'Generate AI Report'}
                  </button>
                </div>
              </>
            ) : (
              <div className="space-y-4 animate-in fade-in zoom-in duration-300">
                <div>
                  <p className="text-[10px] font-black uppercase text-yellow-400 mb-2 tracking-widest">Known Vulnerabilities</p>
                  <ul className="space-y-2">
                    {report.commonIssues.map((issue, i) => (
                      <li key={i} className="text-xs text-blue-100 flex gap-2">
                        <span className="text-yellow-400">•</span> {issue}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-blue-900/40 p-3 rounded-xl border border-blue-800">
                  <p className="text-[10px] font-black uppercase text-blue-300 mb-1 tracking-widest">Guru Tip</p>
                  <p className="text-xs text-white italic">"{report.healthTip}"</p>
                </div>
                <button
                  onClick={() => { setReport(null); setModel(''); }}
                  className="w-full py-2 border border-blue-700 text-blue-300 rounded-xl text-[10px] font-bold uppercase hover:bg-blue-900/50 transition-colors"
                >
                  New Device Check
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 relative overflow-hidden group ${isOpen ? 'bg-blue-900' : 'bg-gradient-to-tr from-blue-600 to-indigo-600'}`}
      >
        <div className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-10 transition-opacity"></div>
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="relative">
            <svg className="w-7 h-7 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full border-2 border-blue-600"></div>
          </div>
        )}
      </button>
    </div>
  );
};

export default AIAssistantWidget;
