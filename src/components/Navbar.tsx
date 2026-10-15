import React from 'react';
import { 
  Compass, 
  Layers, 
  FileSpreadsheet, 
  Sparkles, 
  GraduationCap, 
  Printer, 
  IndianRupee, 
  DollarSign,
  Download
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  currency: 'INR' | 'USD';
  setCurrency: (c: 'INR' | 'USD') => void;
  onOpenPrintModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  currency,
  setCurrency,
  onOpenPrintModal,
}) => {
  const navItems = [
    { id: 'board', label: '1. Visual Board Layout', icon: Compass },
    { id: 'cards', label: '2. Deck of Cards', icon: Layers },
    { id: 'ledger', label: '3. Ledger & Components', icon: FileSpreadsheet },
    { id: 'prompts', label: '4. Image Generation Prompts', icon: Sparkles },
    { id: 'rubric', label: '15-Mark Academic Rubric & Viva', icon: GraduationCap },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      {/* Top Banner with Academic Accreditation */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-indigo-950 px-4 py-2 text-xs border-b border-emerald-900/40 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-full font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
            <GraduationCap className="w-3.5 h-3.5" /> 15-Mark Academic Project
          </span>
          <span className="text-slate-400 hidden sm:inline">|</span>
          <span className="text-slate-300 font-medium hidden sm:inline">
            Title: Financial Planning Board Game ("WealthPath: The Financial Odyssey")
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-slate-400 text-[11px] hidden md:inline">
            Undergraduate / MBA Personal Finance Curriculum
          </span>
          <div className="flex items-center bg-slate-800/80 rounded-lg p-0.5 border border-slate-700">
            <button
              onClick={() => setCurrency('INR')}
              className={`px-2 py-0.5 rounded text-xs font-semibold flex items-center gap-1 transition-all ${
                currency === 'INR'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Indian Rupee (Standard Academic Curriculum with 80C/80D)"
            >
              <IndianRupee className="w-3 h-3" /> INR (₹)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-2 py-0.5 rounded text-xs font-semibold flex items-center gap-1 transition-all ${
                currency === 'USD'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="US Dollar (Global Finance Mode)"
            >
              <DollarSign className="w-3 h-3" /> USD ($)
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-500/20 ring-1 ring-emerald-400/30">
              <Compass className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold tracking-tight text-white">WealthPath</span>
                <span className="text-xs px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded-md font-mono border border-emerald-500/20">Asset Kit</span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">Print-Ready Academic Blueprint & Interactive Engine</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenPrintModal}
              className="px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-md hover:shadow-emerald-500/25 transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Print Asset Kit / PDF</span>
            </button>
          </div>
        </div>

        {/* Tab Row */}
        <nav className="flex space-x-1 overflow-x-auto pb-2 scrollbar-none text-xs sm:text-sm">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-slate-800 text-emerald-400 border-b-2 border-emerald-400 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`} />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
