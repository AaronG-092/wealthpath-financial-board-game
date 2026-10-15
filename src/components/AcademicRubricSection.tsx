import React, { useState } from 'react';
import { 
  ACADEMIC_RUBRIC_15_MARKS, 
  VIVA_QUESTIONS 
} from '../data/gameData';
import { 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  FileText, 
  Lightbulb,
  Target
} from 'lucide-react';

export const AcademicRubricSection: React.FC = () => {
  const [expandedViva, setExpandedViva] = useState<number | null>(0);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Project Evaluation Scheme & Viva Voce Guide</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              15-Mark Academic Evaluation Blueprint & Defense Guide
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Mapped specifically for college-level business, commerce, and MBA personal financial planning courses. 
              Provides faculty examiners with a quantifiable, objective grading matrix totaling 15 marks, paired with 
              high-frequency viva questions and model academic solutions.
            </p>
          </div>

          <div className="px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-3 shrink-0">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-xl border border-emerald-500/30">
              15/15
            </div>
            <div>
              <span className="text-xs text-slate-400 font-mono block">Total Project Weightage</span>
              <span className="text-sm font-bold text-white">Full Academic Marks Kit</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Rubric Criteria Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ACADEMIC_RUBRIC_15_MARKS.map((criterion, idx) => (
          <div
            key={idx}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4 relative overflow-hidden"
          >
            <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-sm border border-emerald-500/20">
                  {idx + 1}
                </div>
                <h3 className="text-sm font-bold text-white leading-tight">
                  {criterion.criteria}
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono font-black text-xs shrink-0 border border-emerald-500/40">
                {criterion.maxMarks} Marks
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {criterion.description}
            </p>

            <div className="space-y-2 pt-2">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                Measurable Grading Indicators:
              </span>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {criterion.indicators.map((ind, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-tight">{ind}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Viva Voce Oral Defense Questions & Answers */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-400" />
              Viva Voce Examination Defense Guide (Model Answers)
            </h3>
            <p className="text-xs text-slate-400">
              Expected questions from faculty evaluators during project submission and oral presentation.
            </p>
          </div>
          <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-700">
            4 Core Defense Questions
          </span>
        </div>

        <div className="space-y-3">
          {VIVA_QUESTIONS.map((item, idx) => {
            const isExpanded = expandedViva === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-800 bg-slate-950/70 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setExpandedViva(isExpanded ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-slate-850/60 transition-colors"
                >
                  <span className="text-xs sm:text-sm font-bold text-white">
                    {item.q}
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-emerald-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                {isExpanded && (
                  <div className="p-4 pt-1 border-t border-slate-800/80 bg-slate-900/60 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-900/30 text-emerald-200">
                      {item.a}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Pedagogical Learning Outcomes & Bloom's Taxonomy Mapping */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <h3 className="text-base font-bold text-white flex items-center gap-2 mb-4">
          <Target className="w-5 h-5 text-emerald-400" />
          Bloom's Taxonomy Pedagogical Learning Matrix
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <span className="px-2 py-0.5 rounded font-mono font-bold bg-sky-500/20 text-sky-400 text-[10px]">
              Level 1: Understand & Apply
            </span>
            <h4 className="font-bold text-white text-sm">Financial Computation</h4>
            <p className="text-slate-400 leading-relaxed">
              Students calculate compound interest (A = P(1+r/n)^nt), compute tax savings under Sections 80C and 80D, and record active balance sheets on the ledger sheet.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <span className="px-2 py-0.5 rounded font-mono font-bold bg-purple-500/20 text-purple-400 text-[10px]">
              Level 2: Analyze & Trade-Off
            </span>
            <h4 className="font-bold text-white text-sm">Spread & Opportunity Cost</h4>
            <p className="text-slate-400 leading-relaxed">
              Students evaluate real estate rental yields vs mortgage borrowing rates, compare debt prepayment against equity expected returns, and manage liquidity buffers.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <span className="px-2 py-0.5 rounded font-mono font-bold bg-emerald-500/20 text-emerald-400 text-[10px]">
              Level 3: Synthesize & Mitigate
            </span>
            <h4 className="font-bold text-white text-sm">Life-Cycle Risk Management</h4>
            <p className="text-slate-400 leading-relaxed">
              Students construct resilient portfolios via asset allocation (Equity, Debt, Gold), hedge mortality and health catastrophes, and plan smooth post-retirement SWPs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
