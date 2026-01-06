
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">LG</span>
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              LaptopGurus
            </span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <a href="https://www.laptopgurus.info" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="https://www.laptopgurus.info" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">AI Diagnostics</a>
            <a href="https://www.laptopgurus.info" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Our 35-Year Legacy</a>
            <a href="https://www.laptopgurus.info" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-sm">Get Repair Quote</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
