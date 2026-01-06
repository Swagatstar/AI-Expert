
import React, { useState } from 'react';

const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "919445234369";
  const defaultMessage = "Hello LaptopGurus! I need help with my laptop repair.";

  const openWhatsApp = (msg: string = defaultMessage) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {/* Chat Bubble */}
      {isOpen && (
        <div className="mb-4 w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-[#075e54] p-4 text-white flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold text-lg">
              LG
            </div>
            <div>
              <p className="font-bold text-sm">LaptopGurus Support</p>
              <p className="text-[10px] opacity-80 uppercase tracking-wider font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                Typically replies in minutes
              </p>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="ml-auto text-white/50 hover:text-white"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-4 bg-[#e5ddd5] min-h-[120px] flex flex-col gap-2">
            <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-sm text-sm text-slate-700 max-w-[90%]">
              Hi there! 👋 <br /> How can we help you with your laptop today?
            </div>
            <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-sm text-sm text-slate-700 max-w-[90%]">
              Need a quote for a Mac repair or battery replacement?
            </div>
          </div>
          <div className="p-3 bg-white">
            <button 
              onClick={() => openWhatsApp()}
              className="w-full py-2.5 bg-[#25d366] text-white rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#128c7e] transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.516.893 3.188 1.364 4.891 1.365 5.148 0 9.334-4.183 9.336-9.332.001-2.496-.972-4.842-2.741-6.61s-4.113-2.741-6.611-2.742c-5.148 0-9.334 4.183-9.336 9.332-.001 1.83.539 3.613 1.558 5.176l-1.02 3.722 3.819-1.001zm9.366-6.112c-.279-.14-.302-.158-1.642-.823-.139-.07-.24-.105-.341.048-.101.154-.393.488-.48.588-.089.1-.177.113-.456.027-.28-.14-1.18-.435-2.248-1.388-.83-.741-1.39-1.654-1.552-1.934-.163-.28-.017-.43.123-.57.125-.127.28-.324.419-.485.041-.046.082-.092.12-.138.101-.154.139-.263.209-.44.07-.175.035-.328-.017-.43-.052-.101-.341-.823-.467-1.127-.123-.298-.247-.257-.341-.262-.088-.004-.189-.005-.291-.005s-.266.038-.406.19c-.139.153-.532.52-.532 1.271 0 .75.544 1.477.621 1.577.076.1 1.071 1.635 2.593 2.293.362.157.645.25.865.319.364.116.696.099.957.06.291-.044.899-.368 1.025-.724.126-.356.126-.66.089-.724-.037-.064-.139-.105-.418-.245z" />
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group ${isOpen ? 'bg-slate-100 rotate-90' : 'bg-[#25d366]'}`}
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.516.893 3.188 1.364 4.891 1.365 5.148 0 9.334-4.183 9.336-9.332.001-2.496-.972-4.842-2.741-6.61s-4.113-2.741-6.611-2.742c-5.148 0-9.334 4.183-9.336 9.332-.001 1.83.539 3.613 1.558 5.176l-1.02 3.722 3.819-1.001zm9.366-6.112c-.279-.14-.302-.158-1.642-.823-.139-.07-.24-.105-.341.048-.101.154-.393.488-.48.588-.089.1-.177.113-.456.027-.28-.14-1.18-.435-2.248-1.388-.83-.741-1.39-1.654-1.552-1.934-.163-.28-.017-.43.123-.57.125-.127.28-.324.419-.485.041-.046.082-.092.12-.138.101-.154.139-.263.209-.44.07-.175.035-.328-.017-.43-.052-.101-.341-.823-.467-1.127-.123-.298-.247-.257-.341-.262-.088-.004-.189-.005-.291-.005s-.266.038-.406.19c-.139.153-.532.52-.532 1.271 0 .75.544 1.477.621 1.577.076.1 1.071 1.635 2.593 2.293.362.157.645.25.865.319.364.116.696.099.957.06.291-.044.899-.368 1.025-.724.126-.356.126-.66.089-.724-.037-.064-.139-.105-.418-.245z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default WhatsAppWidget;
