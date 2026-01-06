
import React from 'react';
import Navbar from './components/Navbar';
import AIDiagnosticTool from './components/AIDiagnosticTool';
import WhatsAppWidget from './components/WhatsAppWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Celebrating 35 Years of Engineering Excellence
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
                The Master <span className="text-blue-600">Laptop Gurus</span> for Mac & PC.
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                World-class repairs for high-end hardware. From motherboard component-level soldering to custom Mac upgrades, we treat every machine like our own.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a href="https://www.laptopgurus.info" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 hover:scale-105 transition-all shadow-lg shadow-blue-200">
                  Try AI Diagnostic
                </a>
                <a href="https://www.laptopgurus.info" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
                  Browse Services
                </a>
              </div>
              
              <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-60">
                <div className="text-center">
                  <div className="text-2xl font-bold">35+</div>
                  <div className="text-xs uppercase tracking-widest font-bold">Years</div>
                </div>
                <div className="w-px h-10 bg-slate-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold">50k+</div>
                  <div className="text-xs uppercase tracking-widest font-bold">Repairs</div>
                </div>
                <div className="w-px h-10 bg-slate-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold">99%</div>
                  <div className="text-xs uppercase tracking-widest font-bold">Success</div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-3xl blur-2xl opacity-50 -z-10"></div>
              <div className="bg-white p-2 rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://picsum.photos/seed/laptop-repair/800/600" 
                  alt="High precision laptop repair" 
                  className="rounded-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Expertise across all ecosystems</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">We don't just swap parts. We diagnose circuits. Specialized in MacBook, Dell XPS, ThinkPad, and Gaming laptops.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Logic Board Repair', 
                desc: 'Chip-level microsoldering and component replacement to save your original hardware.',
                icon: '⚡'
              },
              { 
                title: 'MacBook Specialist', 
                desc: 'Official diagnostic tools and high-grade OEM parts for all Apple generations.',
                icon: '🍎'
              },
              { 
                title: 'Data Recovery', 
                desc: 'Advanced forensic retrieval for dead SSDs, HDDs, and corrupted firmware.',
                icon: '💾'
              },
              { 
                title: 'Screen Replacements', 
                desc: 'Retina, OLED, and 4K display panels calibrated for perfect color accuracy.',
                icon: '🖥️'
              },
              { 
                title: 'Thermal Management', 
                desc: 'Industrial-grade repasting and cooling system restoration for gaming rigs.',
                icon: '❄️'
              },
              { 
                title: 'Battery Services', 
                desc: 'Original capacity cell replacement with safe adhesive removal processes.',
                icon: '🔋'
              }
            ].map((service, idx) => (
              <div key={idx} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl transition-all group">
                <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href="https://www.laptopgurus.info" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline">View All Specialized Services →</a>
          </div>
        </div>
      </section>

      {/* AI Tool */}
      <AIDiagnosticTool />

      {/* Workflow Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-slate-200 shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-slate-900">Fully Automated Service Flow</h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  We use a cutting-edge 4-tool stack to ensure your repair is fast and transparent. 
                  From the moment you submit a form, Gemini AI starts diagnosing, HubSpot tracks your device, 
                  and WhatsApp (Tidio) keeps you updated in real-time.
                </p>
                <div className="space-y-4">
                  {[
                    { tool: 'Google Sites', task: 'Lightning-fast hosting & UX' },
                    { tool: 'HubSpot', task: 'End-to-end CRM service tracking' },
                    { tool: 'Gemini AI', task: 'Instant technical diagnostics' },
                    { tool: 'Tidio/WhatsApp', task: 'Real-time repair notifications' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">{i+1}</div>
                      <div>
                        <span className="font-bold text-slate-900">{item.tool}</span>
                        <span className="mx-2 text-slate-300">|</span>
                        <span className="text-slate-500 text-sm">{item.task}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-900 rounded-3xl p-2 shadow-2xl">
                <div className="bg-slate-800 rounded-2xl p-6 text-sm font-mono text-blue-400">
                  <div className="mb-4 opacity-50">// System Workflow Triggered</div>
                  <div className="flex gap-2 mb-2">
                    <span className="text-slate-500">1:</span>
                    <span>HubSpot.onFormSubmission("MacBook screen issue")</span>
                  </div>
                  <div className="flex gap-2 mb-2">
                    <span className="text-slate-500">2:</span>
                    <span className="text-yellow-400">Zapier.forward(symptoms) -> Gemini</span>
                  </div>
                  <div className="flex gap-2 mb-2">
                    <span className="text-slate-500">3:</span>
                    <span className="text-green-400">Gemini.generateQuote() -> Success</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-slate-500">4:</span>
                    <span>WhatsApp.trigger(DiagnosisNotification)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold">LG</div>
                <span className="text-2xl font-bold">LaptopGurus</span>
              </div>
              <p className="text-slate-400 max-sm mb-6">
                The most trusted name in laptop forensics and repairs since 1989. 
                Providing silicon-level solutions for the modern world.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">FB</div>
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">TW</div>
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">LI</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="https://www.laptopgurus.info" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Services</a></li>
                <li><a href="https://www.laptopgurus.info" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">AI Diagnostic</a></li>
                <li><a href="https://www.laptopgurus.info" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Case Studies</a></li>
                <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li># 23 Pari Nagar Gandhi Street,</li>
                <li>Chennai, TN 600083</li>
                <li>+91 9445234369</li>
                <li>laptopgurus2004@gmail.com</li>
                <li>Open: Mon-Sat, 9AM-7PM</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-900 text-center text-slate-600 text-xs">
            © 2024 LaptopGurus Service Co. All Rights Reserved. Gemini AI Integrated.
          </div>
        </div>
      </footer>

      {/* WhatsApp Chat Widget */}
      <WhatsAppWidget />
    </div>
  );
};

export default App;
