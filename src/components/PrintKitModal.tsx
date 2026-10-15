import React, { useState } from 'react';
import { 
  BOARD_SPACES, 
  EVENT_CARDS, 
  DECISION_CARDS, 
  GOAL_TAX_CARDS, 
  PHYSICAL_COMPONENTS, 
  ACADEMIC_RUBRIC_15_MARKS 
} from '../data/gameData';
import { 
  Printer, 
  X, 
  FileText, 
  Layers, 
  FileSpreadsheet, 
  Check, 
  Download,
  Scissors
} from 'lucide-react';

interface PrintKitModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: 'INR' | 'USD';
}

export const PrintKitModal: React.FC<PrintKitModalProps> = ({ 
  isOpen, 
  onClose, 
  currency 
}) => {
  const [printSection, setPrintSection] = useState<'all' | 'cards' | 'ledger' | 'rubric'>('cards');

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const allCards = [...EVENT_CARDS, ...DECISION_CARDS, ...GOAL_TAX_CARDS];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl my-auto overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Top Action Bar */}
        <div className="flex items-center justify-between p-4 sm:p-6 bg-slate-950 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <Printer className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                Print-Ready Asset Kit & Submission Export
              </h3>
              <p className="text-xs text-slate-400">
                Optimized with print stylesheets for A4 / Letter output
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg shadow-emerald-700/20 transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Print to Paper / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* View Mode Switcher */}
        <div className="px-6 py-3 bg-slate-900 border-b border-slate-800 flex flex-wrap gap-2 shrink-0">
          <button
            onClick={() => setPrintSection('cards')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              printSection === 'cards'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Scissors className="w-3.5 h-3.5" />
            Cut-Out Cards Sheet (Poker 2.5" × 3.5")
          </button>
          <button
            onClick={() => setPrintSection('ledger')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              printSection === 'ledger'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            Blank Player Ledger Sheet (A4)
          </button>
          <button
            onClick={() => setPrintSection('rubric')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              printSection === 'rubric'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            15-Mark Evaluation Sheet & Dossier
          </button>
          <button
            onClick={() => setPrintSection('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              printSection === 'all'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            Complete Project Dossier
          </button>
        </div>

        {/* Printable Canvas (Formatted as Clean White Sheet for Printing) */}
        <div className="p-4 sm:p-8 overflow-y-auto bg-slate-950 flex-1">
          {/* A4 Preview Container */}
          <div className="max-w-4xl mx-auto bg-white text-slate-900 rounded-xl p-6 sm:p-10 shadow-2xl print:p-0 print:shadow-none print:m-0 print:w-full print:max-w-none text-xs sm:text-sm">
            {/* Academic Header */}
            <div className="border-b-2 border-slate-900 pb-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-slate-600 block">
                  Course Project: Personal Financial Planning & Wealth Management
                </span>
                <h1 className="text-xl sm:text-2xl font-black tracking-tight text-slate-950">
                  WealthPath: The Financial Odyssey
                </h1>
                <p className="text-xs text-slate-600">
                  Comprehensive 15-Mark Academic Asset Kit & Layout Blueprint
                </p>
              </div>
              <div className="text-left sm:text-right text-xs">
                <span className="font-bold block">Academic Weightage: 15 Marks</span>
                <span className="text-slate-500 font-mono text-[11px]">Print Output: High-Contrast CMYK</span>
              </div>
            </div>

            {/* Content: Cards Sheet */}
            {(printSection === 'cards' || printSection === 'all') && (
              <div className="space-y-6 mb-8 page-break-after">
                <div className="flex items-center justify-between border-b border-slate-300 pb-2">
                  <h2 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Scissors className="w-4 h-4 text-slate-700" />
                    Cut-Ready Printable Card Deck (Dashed lines indicate cut margins)
                  </h2>
                  <span className="text-[10px] text-slate-500 font-mono">
                    Print on 300–350 GSM Cardstock
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {allCards.map((card) => (
                    <div
                      key={card.id}
                      className="border-2 border-dashed border-slate-400 p-4 rounded-xl flex flex-col justify-between bg-white text-slate-900 min-h-[300px] shadow-sm relative"
                    >
                      <div>
                        {/* Card Top */}
                        <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-[10px] font-bold">
                          <span className="uppercase tracking-wider text-slate-600">
                            {card.type === 'event' ? 'Event Card' : card.type === 'decision' ? 'Decision Card' : 'Goal / Tax Card'}
                          </span>
                          <span className="font-mono bg-slate-100 px-1.5 py-0.5 rounded border border-slate-300">
                            {card.id}
                          </span>
                        </div>

                        {/* Title */}
                        <h4 className="font-extrabold text-xs sm:text-sm text-slate-900 mt-2 mb-1">
                          {card.title}
                        </h4>

                        {/* Scenario */}
                        <p className="text-[11px] text-slate-700 leading-relaxed my-2">
                          {card.scenario}
                        </p>

                        {/* Impact Box */}
                        <div className="bg-slate-50 p-2 rounded-lg border border-slate-200 text-[10px] my-2">
                          <strong className="block text-slate-900">Financial Impact:</strong>
                          <span className="font-mono font-bold text-slate-800">
                            {currency === 'INR' ? card.financialImpact.inr : card.financialImpact.usd}
                          </span>
                          <p className="text-slate-600 mt-0.5">{card.financialImpact.details}</p>
                        </div>
                      </div>

                      {/* Footer Principle */}
                      <div className="pt-2 border-t border-slate-200 text-[9px] text-slate-500">
                        <strong>Principle:</strong> {card.academicPrinciple}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Content: Blank Player Ledger Sheet */}
            {(printSection === 'ledger' || printSection === 'all') && (
              <div className="space-y-6 mb-8 page-break-after">
                <div className="flex items-center justify-between border-b border-slate-300 pb-2">
                  <h2 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                    <FileSpreadsheet className="w-4 h-4 text-slate-700" />
                    Player Financial Ledger Sheet (Student Submission Template)
                  </h2>
                  <span className="text-[10px] text-slate-500 font-mono">
                    Official Game Record
                  </span>
                </div>

                {/* Student Info Form Fields */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs font-mono">
                  <div>
                    <span className="text-[10px] text-slate-500 block">Student Name:</span>
                    <div className="border-b border-slate-400 mt-3"></div>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">Roll / Student ID:</span>
                    <div className="border-b border-slate-400 mt-3"></div>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">Course / Batch:</span>
                    <div className="border-b border-slate-400 mt-3"></div>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">Date of Submission:</span>
                    <div className="border-b border-slate-400 mt-3"></div>
                  </div>
                </div>

                {/* Ledger Audit Table Template */}
                <table className="w-full text-left text-[11px] border-collapse border border-slate-400 font-sans">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-400 font-bold uppercase text-[10px]">
                      <th className="border border-slate-300 p-2 text-center w-12">Turn</th>
                      <th className="border border-slate-300 p-2">Transaction / Space Name</th>
                      <th className="border border-slate-300 p-2 w-24">1. Cash (Bank)</th>
                      <th className="border border-slate-300 p-2 w-24">2. Savings (Emergency)</th>
                      <th className="border border-slate-300 p-2 w-28">3. Investments (SIP/Gold)</th>
                      <th className="border border-slate-300 p-2 w-28">4. Loans / EMIs (Debt)</th>
                      <th className="border border-slate-300 p-2 w-28 font-extrabold bg-slate-200">5. Net Worth</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 15 }).map((_, i) => (
                      <tr key={i} className="border-b border-slate-200">
                        <td className="border border-slate-300 p-2 text-center font-mono text-slate-500">{i + 1}</td>
                        <td className="border border-slate-300 p-2"></td>
                        <td className="border border-slate-300 p-2 font-mono"></td>
                        <td className="border border-slate-300 p-2 font-mono"></td>
                        <td className="border border-slate-300 p-2 font-mono"></td>
                        <td className="border border-slate-300 p-2 font-mono"></td>
                        <td className="border border-slate-300 p-2 font-mono bg-slate-50"></td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Faculty Evaluation Signature Block */}
                <div className="pt-6 grid grid-cols-2 gap-8 text-xs">
                  <div>
                    <span className="font-bold block text-slate-700">Financial Ratios Audit:</span>
                    <p className="text-[11px] text-slate-600 mt-1">
                      □ Emergency Fund ≥ 3 mo &nbsp;&nbsp;&nbsp;&nbsp; □ DTI Ratio ≤ 40% &nbsp;&nbsp;&nbsp;&nbsp; □ Positive Terminal Net Worth
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="inline-block text-center border-t border-slate-600 pt-2 px-8">
                      <span className="font-bold text-slate-800 block">Faculty Evaluator Signature</span>
                      <span className="text-[10px] text-slate-500 font-mono">Marks Awarded: _____ / 15</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Content: 15-Mark Evaluation Sheet & Dossier */}
            {(printSection === 'rubric' || printSection === 'all') && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-300 pb-2">
                  <h2 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-slate-700" />
                    Formal 15-Mark Academic Grading Scheme
                  </h2>
                  <span className="text-[10px] text-slate-500 font-mono">
                    Faculty Assessment Protocol
                  </span>
                </div>

                <div className="space-y-4">
                  {ACADEMIC_RUBRIC_15_MARKS.map((item, idx) => (
                    <div key={idx} className="border border-slate-300 p-3 rounded-lg bg-slate-50">
                      <div className="flex items-center justify-between mb-1 font-bold text-xs sm:text-sm text-slate-900">
                        <span>{item.criteria}</span>
                        <span className="font-mono bg-slate-200 px-2 py-0.5 rounded text-slate-800">
                          {item.maxMarks} Marks
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 mb-2 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="text-[10px] text-slate-500 space-y-0.5">
                        {item.indicators.map((ind, iIdx) => (
                          <div key={iIdx}>• {ind}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
