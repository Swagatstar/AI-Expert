
import React, { useState } from 'react';
import { getLaptopDiagnosis } from '../services/geminiService';
import { DiagnosisResult, ServiceStatus } from '../types';

const AIDiagnosticTool: React.FC = () => {
  const [model, setModel] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [status, setStatus] = useState<ServiceStatus>(ServiceStatus.IDLE);
  const [result, setResult] = useState<DiagnosisResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!model || !symptoms) return;

    setStatus(ServiceStatus.DIAGNOSING);
    try {
      const diagnosis = await getLaptopDiagnosis(symptoms, model);
      setResult(diagnosis);
      setStatus(ServiceStatus.SUCCESS);
    } catch (error) {
      setStatus(ServiceStatus.ERROR);
    }
  };

  const shareToWhatsApp = () => {
    if (!result) return;
    const msg = `Hi LaptopGurus! I just used your AI diagnostic for my ${model}. \n\nDiagnosis: ${result.diagnosis}\nEst. Cost: ${result.estimatedCost}\n\nI'd like to book a service!`;
    window.open(`https://wa.me/919445234369?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="diagnosis" className="py-20 bg-slate-900 text-white rounded-[2.5rem] my-10 mx-4 lg:mx-10 overflow-hidden shadow-2xl">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-widest uppercase rounded-full border border-blue-500/20 mb-4">
            AI-Powered Diagnostics
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Instant pre-repair diagnosis</h2>
          <p className="text-slate-400 text-lg">Powered by Gemini AI & trained on 35 years of our repair data.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
            <div>
              <label className="block text-sm font-medium mb-2 text-slate-300">Device Model</label>
              <input
                type="text"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="e.g. MacBook Pro M2, Dell XPS 15"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-slate-300">What's the issue?</label>
              <textarea
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                rows={4}
                placeholder="e.g. Liquid spill on keyboard, won't turn on, fan making noise..."
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                required
              />
            </div>
            <button
              type="submit"
              disabled={status === ServiceStatus.DIAGNOSING}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-bold text-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all disabled:opacity-50 flex items-center justify-center gap-3"
            >
              {status === ServiceStatus.DIAGNOSING ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Analyzing Symptoms...
                </>
              ) : 'Run AI Diagnostic'}
            </button>
          </form>

          <div className="min-h-[400px]">
            {status === ServiceStatus.IDLE && (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-slate-800 rounded-3xl">
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-slate-500">Your preliminary diagnosis will appear here after analysis.</p>
              </div>
            )}

            {status === ServiceStatus.DIAGNOSING && (
              <div className="h-full flex flex-col items-center justify-center space-y-4 animate-pulse">
                <div className="text-blue-400 font-medium">Consulting our expert database...</div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}

            {status === ServiceStatus.SUCCESS && result && (
              <div className="bg-blue-600/10 border border-blue-500/20 p-8 rounded-3xl space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-blue-400 mb-2">Likely Diagnosis</h3>
                  <p className="text-slate-200 leading-relaxed">{result.diagnosis}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 p-4 rounded-xl">
                    <span className="text-xs uppercase text-slate-400 font-bold block mb-1">Estimated Cost</span>
                    <span className="text-lg font-bold text-white">{result.estimatedCost}</span>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-xl">
                    <span className="text-xs uppercase text-slate-400 font-bold block mb-1">Repair Time</span>
                    <span className="text-lg font-bold text-white">{result.repairTime}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-300 mb-3">Expert Recommendations</h4>
                  <ul className="space-y-2">
                    {result.recommendations.map((rec, i) => (
                      <li key={i} className="flex gap-3 text-sm text-slate-400">
                        <span className="text-blue-500">•</span> {rec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-3">
                  <button 
                    onClick={shareToWhatsApp}
                    className="w-full py-3 bg-[#25d366] text-white rounded-xl font-bold hover:bg-[#128c7e] transition-all flex items-center justify-center gap-2"
                  >
                    Chat on WhatsApp to Book
                  </button>
                  <a 
                    href="https://www.laptopgurus.info" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 transition-colors text-center block"
                  >
                    Confirm Local Pickup Repair
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDiagnosticTool;
