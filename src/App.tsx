import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { BoardTrackSection } from './components/BoardTrackSection';
import { CardDeckSection } from './components/CardDeckSection';
import { LedgerSection } from './components/LedgerSection';
import { PromptStudioSection } from './components/PromptStudioSection';
import { AcademicRubricSection } from './components/AcademicRubricSection';
import { PrintKitModal } from './components/PrintKitModal';
import { 
  GraduationCap, 
  Award, 
  Compass, 
  Layers, 
  FileSpreadsheet, 
  Sparkles, 
  Printer, 
  BookOpen, 
  CheckCircle2, 
  Download,
  IndianRupee,
  DollarSign
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('board');
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [isPrintModalOpen, setIsPrintModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Header & Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currency={currency}
        setCurrency={setCurrency}
        onOpenPrintModal={() => setIsPrintModalOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'board' && (
          <BoardTrackSection currency={currency} />
        )}

        {activeTab === 'cards' && (
          <CardDeckSection 
            currency={currency} 
            onOpenPrintModal={() => setIsPrintModalOpen(true)} 
          />
        )}

        {activeTab === 'ledger' && (
          <LedgerSection 
            currency={currency} 
            onOpenPrintModal={() => setIsPrintModalOpen(true)} 
          />
        )}

        {activeTab === 'prompts' && (
          <PromptStudioSection />
        )}

        {activeTab === 'rubric' && (
          <AcademicRubricSection />
        )}
      </main>

      {/* Academic Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8 px-4 text-xs text-slate-400 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-slate-200">
                WealthPath: Academic Financial Planning Board Game Kit
              </span>
              <p className="text-[11px] text-slate-500">
                15-Mark University Coursework Blueprint • Personal Finance, Taxation & Risk Management
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-slate-400 text-[11px]">
            <span>Franco Modigliani Life-Cycle Hypothesis</span>
            <span>•</span>
            <span>Sections 80C, 80D & 24(b)</span>
            <span>•</span>
            <span>Markowitz Asset Allocation</span>
          </div>
        </div>
      </footer>

      {/* Print Kit Overlay Modal */}
      <PrintKitModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
        currency={currency}
      />
    </div>
  );
}
