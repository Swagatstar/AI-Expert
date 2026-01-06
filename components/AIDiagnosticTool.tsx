
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
      console.error("Diagnosis error:", error);
      setStatus(ServiceStatus.ERROR);
    }
  };

  const shareToWhatsApp = () => {
    const msg = result 
      ? `Hi LaptopGurus! I just used your AI diagnostic for my ${model}. \n\nDiagnosis: ${result.diagnosis}\nEst. Cost: ${result.estimatedCost}\n\nI'd like to book a service!`
      : `Hi LaptopGurus! I tried using your AI tool for my ${model} but encountered an issue. My symptoms are: ${symptoms}. Can you help me?`;
    window.open(`https://wa.me/919445234369?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="diagnosis" className="py-20 bg-blue-950 text-white rounded-[3rem] my-10 mx-4 lg:mx-10 overflow-hidden shadow-2xl relative border border-blue-800">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-yellow-400 text-blue-900 text-[10px] font-black tracking-widest uppercase rounded-full mb-4 shadow-lg shadow-yellow-500/10">
            Silicon Level AI Lab
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">Instant pre-repair diagnosis</h2>
          <p className="text-blue-200/60 text-lg">Powered by Gemini AI & trained on 35 years of proprietary repair data.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          <form onSubmit={handleSubmit} className="space-y-6 bg-blue-900/40 p-8 rounded-3xl border border-blue-800/50 backdrop-blur-md">
            <div>
              <label className="block text-xs font-black uppercase tracking-widest mb-2 text-blue-300">Device Model</label>
              <input
                type="text"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="e.g. MacBook Pro M2, Dell XPS 15"
                className="w-full bg-blue-950 border border-blue-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-yellow-400 outline-none transition-all placeholder-blue-800 text-white"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-black uppercase tracking-widest mb-2 text-blue-300">Issue Description</label>
              <textarea
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                rows={4}
                placeholder="e.g. Liquid spill on keyboard, won't turn on..."
                className="w-full bg-blue-950 border border-blue-800 rounded-xl px-4 py-3 focus:ring-2 focus:ring-yellow-400 outline-none transition-all resize-none placeholder-blue-800 text-white"
                required
              />
            </div>
            <button
              type="submit"
              disabled={status === ServiceStatus.DIAGNOSING}
              className="w-full py-4 bg-yellow-400 text-blue-950 rounded-xl font-black text-lg hover:bg-yellow-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.3)] transition-all disabled:opacity-50 flex items-center justify-center gap-3 uppercase tracking-wider"
            >
              {status === ServiceStatus.DIAGNOSING ? (
                <>
                  <div className="w-5 h-5 border-2 border-blue-950/30 border-t-blue-950 rounded-full animate-spin" />
                  Processing...
                </>
              ) : 'Run AI Diagnostic'}
            </button>
          </form>

          <div className="min-h-[400px]">
            {status === ServiceStatus.IDLE && (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-blue-800 rounded-3xl bg-blue-900/20">
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mb-6 text-yellow-400 border border-blue-800">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-blue-300/50 font-medium">Input your device details to receive a technical diagnosis from our AI expert.</p>
              </div>
            )}

            {status === ServiceStatus.DIAGNOSING && (
              <div className="h-full flex flex-col items-center justify-center space-y-4">
                <div className="text-yellow-400 font-black tracking-widest uppercase text-xs">Accessing 35 years of repair logs</div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}

            {status === ServiceStatus.ERROR && (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 border border-red-500/30 rounded-3xl bg-red-500/5 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-6 text-red-400">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Something Went Wrong</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  We couldn't generate an AI diagnosis right now. This can happen due to network issues or rare device models.
                </p>
                <div className="w-full space-y-3">
                  <button 
                    onClick={shareToWhatsApp}
                    className="w-full py-3 bg-[#25d366] text-white rounded-xl font-bold hover:bg-[#128c7e] transition-all flex items-center justify-center gap-2"
                  >
                    Chat with a Guru Directly
                  </button>
                  <button 
                    onClick={() => setStatus(ServiceStatus.IDLE)}
                    className="w-full py-3 bg-white/5 text-slate-300 rounded-xl font-medium hover:bg-white/10 transition-all"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            )}

            {status === ServiceStatus.SUCCESS && result && (
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-6 animate-in zoom-in duration-300">
                <div>
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-yellow-400 mb-2">Technical Diagnosis</h3>
                  <p className="text-white text-lg font-medium leading-relaxed">{result.diagnosis}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-900/60 p-5 rounded-2xl border border-blue-800/50">
                    <span className="text-[10px] uppercase text-blue-300 font-black block mb-1 tracking-widest">Est. Quote</span>
                    <span className="text-xl font-bold text-yellow-400">{result.estimatedCost}</span>
                  </div>
                  <div className="bg-blue-900/60 p-5 rounded-2xl border border-blue-800/50">
                    <span className="text-[10px] uppercase text-blue-300 font-black block mb-1 tracking-widest">Repair TAT</span>
                    <span className="text-xl font-bold text-white">{result.repairTime}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-blue-300 mb-3">Guru Recommendations</h4>
                  <ul className="space-y-3">
                    {result.recommendations.map((rec, i) => (
                      <li key={i} className="flex gap-3 text-sm text-blue-100/70">
                        <span className="text-yellow-400 font-bold">•</span> {rec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-3 pt-4">
                  <button 
                    onClick={shareToWhatsApp}
                    className="w-full py-4 bg-[#25d366] text-white rounded-2xl font-black hover:bg-[#128c7e] transition-all flex items-center justify-center gap-3 shadow-xl shadow-green-900/20 uppercase tracking-widest text-sm"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.516.893 3.188 1.364 4.891 1.365 5.148 0 9.334-4.183 9.336-9.332.001-2.496-.972-4.842-2.741-6.61s-4.113-2.741-6.611-2.742c-5.148 0-9.334 4.183-9.336 9.332-.001 1.83.539 3.613 1.558 5.176l-1.02 3.722 3.819-1.001zm9.366-6.112c-.279-.14-.302-.158-1.642-.823-.139-.07-.24-.105-.341.048-.101.154-.393.488-.48.588-.089.1-.177.113-.456.027-.28-.14-1.18-.435-2.248-1.388-.83-.741-1.39-1.654-1.552-1.934-.163-.28-.017-.43.123-.57.125-.127.28-.324.419-.485.041-.046.082-.092.12-.138.101-.154.139-.263.209-.44.07-.175.035-.328-.017-.43-.052-.101-.341-.823-.467-1.127-.123-.298-.247-.257-.341-.262-.088-.004-.189-.005-.291-.005s-.266.038-.406.19c-.139.153-.532.52-.532 1.271 0 .75.544 1.477.621 1.577.076.1 1.071 1.635 2.593 2.293.362.157.645.25.865.319.364.116.696.099.957.06.291-.044.899-.368 1.025-.724.126-.356.126-.66.089-.724-.037-.064-.139-.105-.418-.245z"/></svg>
                    <span>Instant Quote via WhatsApp</span>
                  </button>
                  <a 
                    href="https://www.laptopgurus.info" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-white text-blue-950 rounded-2xl font-black hover:bg-yellow-400 transition-all text-center block uppercase tracking-widest text-xs"
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
