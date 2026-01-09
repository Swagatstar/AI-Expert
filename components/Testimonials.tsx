
import React from 'react';

const testimonials = [
  {
    name: "Dr. Ananya Rao",
    role: "Senior Surgeon & Researcher",
    content: "My MacBook Pro is my life-line for surgical research. When the logic board failed, LaptopGurus performed a component-level repair that was nothing short of miraculous. 35 years of experience really shows in their surgical precision.",
    image: "https://images.unsplash.com/photo-1559839734-2b71f1536780?auto=format&fit=crop&q=80&w=200&h=200",
    rating: 5,
    tag: "Medical Priority"
  },
  {
    name: "Ishaan Malhotra",
    role: "Architecture Student",
    content: "Rendering 3D models on my Dell G15 was causing severe thermal shutdowns. The Gurus did a liquid metal repaste and internal overhaul. It actually runs cooler and faster now than when it was brand new. Lifesavers for my thesis!",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200&h=200",
    rating: 5,
    tag: "Student Advantage"
  },
  {
    name: "Sarah Jenkins",
    role: "Creative Director",
    content: "The only lab I trust with my 8K video editing rig. Their diagnostic AI caught a failing VRM before it could take out my CPU. Photorealistic precision and industrial-grade reliability. Truly the best in the business.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
    rating: 5,
    tag: "Pro Workstation"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">The Silicon Trust</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Trusted by 50,000+ <br />
              <span className="text-blue-600">Doctors, Students & Pros.</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 bg-yellow-400/10 px-6 py-3 rounded-2xl border border-yellow-200">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i + 30}`} 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover" 
                  alt="Verified User"
                />
              ))}
            </div>
            <div className="text-sm font-bold text-blue-900">
              4.9/5 Silicon-Grade Rating
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] rotate-1 group-hover:rotate-0 transition-transform duration-500 opacity-5"></div>
              <div className="relative bg-slate-50 p-8 md:p-10 rounded-[2.5rem] border border-slate-100 hover:border-blue-100 hover:bg-white hover:shadow-2xl transition-all h-full flex flex-col">
                <div className="flex justify-between items-start mb-8">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-yellow-400 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <img 
                      src={t.image} 
                      alt={t.name} 
                      className="relative w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
                    />
                  </div>
                  <div className="px-3 py-1 bg-white border border-slate-200 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-600">
                    {t.tag}
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-slate-700 leading-relaxed mb-8 flex-grow italic">
                  "{t.content}"
                </blockquote>

                <div className="pt-6 border-t border-slate-200">
                  <p className="font-black text-slate-900">{t.name}</p>
                  <p className="text-xs font-bold text-blue-500 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visualized Perfection Teaser */}
        <div className="mt-20 relative rounded-[3.5rem] overflow-hidden bg-slate-900 aspect-[21/9] flex items-center group">
          <img 
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=1600" 
            className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105 group-hover:scale-100 transition-transform duration-1000"
            alt="Photorealistic functioning laptop"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
          <div className="relative z-10 p-12 md:p-20 max-w-2xl">
            <span className="text-yellow-400 font-bold uppercase tracking-widest text-xs mb-4 block">The Result of 35 Years Experience</span>
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              Restored to <span className="text-yellow-400">Cinematic Perfection.</span>
            </h3>
            <p className="text-slate-300 text-lg mb-10 opacity-80">
              Photorealistic precision, ultra-detailed textures, and 8K hardware calibration. Every repair is a masterpiece of silicon engineering.
            </p>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <div className="text-white">
                <p className="font-bold">Verified Guru Repair</p>
                <p className="text-xs text-slate-400">Lifetime warranty on logic board repairs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
