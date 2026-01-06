
import React from 'react';
import Navbar from './components/Navbar';
import AIDiagnosticTool from './components/AIDiagnosticTool';
import WhatsAppWidget from './components/WhatsAppWidget';
import AIAssistantWidget from './components/AIAssistantWidget';

const App: React.FC = () => {
  const googleMapsUrl = "https://www.google.com/maps/dir//LaptopGurus,+23,+Pari+Nagar+Main+Rd,+Pari+Nagar,+Anbalagan+Nagar,+Pallikaranai,+Chennai,+Tamil+Nadu+600100/@12.9366671,80.2083333,17z/";

  return (
    <div className="min-h-screen selection:bg-yellow-200 selection:text-blue-900 bg-slate-50">
      <Navbar />

      {/* Hero Section with Blue Gradient */}
      <header className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 text-white">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-yellow-400 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-400 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400 text-blue-900 rounded-full text-sm font-bold mb-6 shadow-lg shadow-yellow-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-900 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-950"></span>
                </span>
                Celebrating 35 Years of Engineering Excellence
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
                The Master <span className="text-yellow-400">Laptop Gurus</span> for Mac & PC.
              </h1>
              <p className="text-xl text-blue-50 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 opacity-90">
                World-class repairs for high-end hardware. From motherboard component-level soldering to custom Mac upgrades, we treat every machine like our own.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a href="https://www.laptopgurus.info" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-yellow-400 text-blue-900 rounded-2xl font-bold text-lg hover:bg-yellow-300 hover:scale-105 transition-all shadow-xl shadow-yellow-500/30">
                  Try AI Diagnostic
                </a>
                <a href="https://www.laptopgurus.info" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all">
                  Browse Services
                </a>
              </div>
              
              <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-80">
                <div className="text-center">
                  <div className="text-2xl font-bold">35+</div>
                  <div className="text-xs uppercase tracking-widest font-bold">Years</div>
                </div>
                <div className="w-px h-10 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold">50k+</div>
                  <div className="text-xs uppercase tracking-widest font-bold">Repairs</div>
                </div>
                <div className="w-px h-10 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold">99%</div>
                  <div className="text-xs uppercase tracking-widest font-bold">Success</div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 relative">
              <div className="absolute -inset-4 bg-yellow-400/20 rounded-3xl blur-2xl opacity-50 -z-10"></div>
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border border-white/20">
                <img 
                  src="https://picsum.photos/seed/laptop-repair/800/600" 
                  alt="High precision laptop repair" 
                  className="rounded-2xl w-full h-auto object-cover border border-white/10"
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
                icon: '⚡',
                color: 'blue'
              },
              { 
                title: 'MacBook Specialist', 
                desc: 'Official diagnostic tools and high-grade OEM parts for all Apple generations.',
                icon: '🍎',
                color: 'yellow'
              },
              { 
                title: 'Data Recovery', 
                desc: 'Advanced forensic retrieval for dead SSDs, HDDs, and corrupted firmware.',
                icon: '💾',
                color: 'blue'
              },
              { 
                title: 'Screen Replacements', 
                desc: 'Retina, OLED, and 4K display panels calibrated for perfect color accuracy.',
                icon: '🖥️',
                color: 'yellow'
              },
              { 
                title: 'Thermal Management', 
                desc: 'Industrial-grade repasting and cooling system restoration for gaming rigs.',
                icon: '❄️',
                color: 'blue'
              },
              { 
                title: 'Battery Services', 
                desc: 'Original capacity cell replacement with safe adhesive removal processes.',
                icon: '🔋',
                color: 'yellow'
              }
            ].map((service, idx) => (
              <div key={idx} className={`p-8 rounded-3xl border transition-all group cursor-default ${service.color === 'blue' ? 'bg-blue-50/50 border-blue-100 hover:border-blue-300 hover:bg-white' : 'bg-yellow-50/50 border-yellow-100 hover:border-yellow-300 hover:bg-white'} hover:shadow-xl`}>
                <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{service.icon}</div>
                <h3 className={`text-xl font-bold mb-3 ${service.color === 'blue' ? 'text-blue-900' : 'text-slate-900'}`}>{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 relative group">
              <div className="absolute inset-0 bg-yellow-400 rounded-[2.5rem] rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-xl"></div>
              <div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] -rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400" 
                alt="Swagat S - CEO & Founder" 
                className="relative z-10 w-full h-full object-cover rounded-[2.5rem] border-4 border-white shadow-2xl"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-black uppercase tracking-widest rounded-full mb-4">
                The Mastermind
              </div>
              <h2 className="text-4xl font-black text-slate-900 mb-2">Swagat S</h2>
              <p className="text-xl font-bold text-blue-600 mb-6">CEO & Founder</p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 italic">
                "35 years ago, I started with a passion for silicon-level precision. Today, LaptopGurus stands as a testament to engineering excellence, where we don't just repair machines—we restore the heart of your digital life."
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <div className="w-12 h-px bg-slate-200"></div>
                <span className="text-slate-400 font-mono text-sm tracking-[0.2em] uppercase">Swagat S. signature of quality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tool */}
      <AIDiagnosticTool />

      {/* Workflow Section - Modern Blue Background */}
      <section className="py-24 bg-blue-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-800 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/5 backdrop-blur-md rounded-[3rem] p-8 md:p-16 border border-white/10 shadow-2xl overflow-hidden relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Fully Automated Service Flow</h2>
                <p className="text-blue-100/80 mb-8 leading-relaxed">
                  We use a cutting-edge 4-tool stack to ensure your repair is fast and transparent. 
                  From the moment you submit a form, Gemini AI starts diagnosing, HubSpot tracks your device, 
                  and WhatsApp keeps you updated in real-time.
                </p>
                <div className="space-y-4">
                  {[
                    { tool: 'Google Sites', task: 'Lightning-fast hosting & UX' },
                    { tool: 'HubSpot', task: 'End-to-end CRM service tracking' },
                    { tool: 'Gemini AI', task: 'Instant technical diagnostics' },
                    { tool: 'Tidio/WhatsApp', task: 'Real-time repair notifications' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="w-8 h-8 bg-yellow-400 text-blue-900 rounded-full flex items-center justify-center font-bold text-xs">{i+1}</div>
                      <div>
                        <span className="font-bold">{item.tool}</span>
                        <span className="mx-2 text-white/20">|</span>
                        <span className="text-blue-100/60 text-sm">{item.task}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-950 rounded-3xl p-1 shadow-2xl border border-white/5">
                <div className="bg-slate-900 rounded-2xl p-6 text-sm font-mono text-blue-400">
                  <div className="mb-4 opacity-50">// System Workflow Triggered</div>
                  <div className="flex gap-2 mb-2">
                    <span className="text-slate-500">1:</span>
                    <span className="text-blue-300">HubSpot.onFormSubmission("MacBook screen issue")</span>
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
                    <span className="text-blue-300">WhatsApp.trigger(DiagnosisNotification)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Location Section - Modern Yellow Highlight */}
      <section className="py-24 bg-yellow-400">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-50 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="flex-1 text-center md:text-left relative z-10">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-xs block mb-4">Our Workshop</span>
              <h2 className="text-4xl font-extrabold text-blue-950 mb-6">Come Find Us</h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                We're located in the heart of Chennai. Scan the code for instant navigation or open directly in Google Maps.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center justify-center md:justify-start gap-3 text-slate-800 font-medium">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <span># 23 Pari Nagar Gandhi Street, Chennai, TN 600083</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3 text-slate-800 font-medium">
                  <div className="w-10 h-10 bg-yellow-50 rounded-full flex items-center justify-center text-yellow-600 shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </div>
                  <span>Monday - Saturday: 09:00 AM - 07:00 PM</span>
                </div>
              </div>
              <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
              >
                <span>Open Google Maps</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>
            </div>
            
            <div className="relative group shrink-0">
              <div className="absolute -inset-6 bg-yellow-400 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-white p-6 rounded-[2.5rem] shadow-2xl border border-slate-100">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://www.google.com/maps/search/?api=1%26query=LaptopGurus%2BPari%2BNagar%2BChennai" 
                  alt="Google Maps QR Code" 
                  className="w-56 h-56 md:w-64 md:h-64 rounded-2xl"
                />
                <div className="mt-4 text-center">
                  <div className="text-[10px] font-black text-blue-900 uppercase tracking-[0.2em]">Scan for directions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-yellow-400 to-blue-600"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-bold shadow-lg shadow-blue-600/20">LG</div>
                <span className="text-2xl font-bold tracking-tight">Laptop<span className="text-yellow-400">Gurus</span></span>
              </div>
              <p className="text-slate-400 max-w-sm mb-4 leading-relaxed">
                The most trusted name in laptop forensics and repairs since 1989. 
                Providing silicon-level solutions for the modern world.
              </p>
              <div className="mb-8">
                <p className="text-white font-bold text-sm">Swagat S</p>
                <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase">CEO & Founder</p>
              </div>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=61578252969000" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-slate-400"
                  title="Follow us on Facebook"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://x.com/home" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all text-slate-400"
                  title="Follow us on X"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all text-slate-400 cursor-pointer">
                  <span className="text-xs font-black uppercase tracking-widest">LI</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Resources</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="https://www.laptopgurus.info" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">Specialized Services</a></li>
                <li><a href="https://www.laptopgurus.info" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">AI Diagnostic Lab</a></li>
                <li><a href="https://www.laptopgurus.info" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">35-Year Heritage</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Privacy & Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Contact Us</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li className="flex gap-3">
                  <span className="text-yellow-400">📍</span>
                  <span># 23 Pari Nagar Gandhi Street,<br />Chennai, TN 600083</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-400">📞</span>
                  <span>+91 9445234369</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-yellow-400">✉️</span>
                  <span>laptopgurus2004@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 text-center text-slate-600 text-[10px] uppercase tracking-[0.3em]">
            © 2024 LaptopGurus Service Co. Gemini AI Integrated Automation.
          </div>
        </div>
      </footer>

      {/* Floating Widgets */}
      <WhatsAppWidget />
      <AIAssistantWidget />
    </div>
  );
};

export default App;
