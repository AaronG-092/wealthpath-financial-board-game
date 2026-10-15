import React, { useState } from 'react';
import { 
  EVENT_CARDS, 
  DECISION_CARDS, 
  GOAL_TAX_CARDS, 
  GameCard 
} from '../data/gameData';
import { GAME_IMAGES } from '../data/assets';
import { 
  Layers, 
  AlertOctagon, 
  HelpCircle, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Printer, 
  Maximize2,
  Sparkles,
  BookOpen,
  IndianRupee,
  DollarSign
} from 'lucide-react';

interface CardDeckSectionProps {
  currency: 'INR' | 'USD';
  onOpenPrintModal: () => void;
}

export const CardDeckSection: React.FC<CardDeckSectionProps> = ({ 
  currency,
  onOpenPrintModal 
}) => {
  const [deckTab, setDeckTab] = useState<'all' | 'event' | 'decision' | 'tax_goal'>('all');
  const [selectedCard, setSelectedCard] = useState<GameCard>(EVENT_CARDS[0]);
  const [selectedDecisionChoice, setSelectedDecisionChoice] = useState<number | null>(null);
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const allCards: GameCard[] = [...EVENT_CARDS, ...DECISION_CARDS, ...GOAL_TAX_CARDS];

  const filteredCards = allCards.filter((card) => {
    if (deckTab === 'all') return true;
    return card.type === deckTab;
  });

  const toggleCardFlip = (cardId: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const getTypeTheme = (type: GameCard['type']) => {
    switch (type) {
      case 'event':
        return {
          bg: 'from-rose-950/40 to-slate-900',
          border: 'border-rose-500/40',
          badge: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
          accent: 'text-rose-400',
          icon: AlertOctagon,
          label: 'Event Card (Life Shock / Windfall)'
        };
      case 'decision':
        return {
          bg: 'from-sky-950/40 to-slate-900',
          border: 'border-sky-500/40',
          badge: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
          accent: 'text-sky-400',
          icon: HelpCircle,
          label: 'Decision Card (Strategic Capital Choice)'
        };
      case 'tax_goal':
        return {
          bg: 'from-purple-950/40 to-slate-900',
          border: 'border-purple-500/40',
          badge: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
          accent: 'text-purple-400',
          icon: ShieldCheck,
          label: 'Goal / Tax Card (Statutory Exemption)'
        };
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-semibold border border-sky-500/20">
              <span>Section 2 of 4: Deck of Cards Content</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Curriculum Game Card Decks (15 Detailed Cards)
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Standard 2.5" x 3.5" poker-sized cards divided into three balanced pedagogical decks: 
              <strong className="text-rose-400"> 5 Event Cards</strong> (Life shocks & macroeconomic turbulence), 
              <strong className="text-sky-400"> 5 Decision Cards</strong> (Active trade-off dilemmas with real calculations), and 
              <strong className="text-purple-400"> 5 Goal / Tax Cards</strong> (Statutory optimization under 80C, 80D, 24b, and NPS).
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenPrintModal}
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg shadow-emerald-700/20 transition-all"
            >
              <Printer className="w-4 h-4" />
              Print Cut-Out Card Sheets
            </button>
          </div>
        </div>

        {/* Deck Filter Tabs */}
        <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap gap-2">
          <button
            onClick={() => setDeckTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
              deckTab === 'all'
                ? 'bg-slate-800 text-white border border-slate-600 shadow-md'
                : 'bg-slate-950/60 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <Layers className="w-4 h-4" />
            All Cards (15 Cards)
          </button>
          <button
            onClick={() => setDeckTab('event')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
              deckTab === 'event'
                ? 'bg-rose-950/80 text-rose-300 border border-rose-500/50 shadow-md'
                : 'bg-slate-950/60 text-slate-400 hover:text-rose-300 border border-slate-800'
            }`}
          >
            <AlertOctagon className="w-4 h-4 text-rose-400" />
            5 Event Cards (Shocks & Windfalls)
          </button>
          <button
            onClick={() => setDeckTab('decision')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
              deckTab === 'decision'
                ? 'bg-sky-950/80 text-sky-300 border border-sky-500/50 shadow-md'
                : 'bg-slate-950/60 text-slate-400 hover:text-sky-300 border border-slate-800'
            }`}
          >
            <HelpCircle className="w-4 h-4 text-sky-400" />
            5 Decision Cards (Investment Trade-offs)
          </button>
          <button
            onClick={() => setDeckTab('tax_goal')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
              deckTab === 'tax_goal'
                ? 'bg-purple-950/80 text-purple-300 border border-purple-500/50 shadow-md'
                : 'bg-slate-950/60 text-slate-400 hover:text-purple-300 border border-slate-800'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-purple-400" />
            5 Goal & Tax Cards (Section 80C/80D/NPS)
          </button>
        </div>
      </div>

      {/* Main Grid: Card Browser + Interactive Card Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Card Selection Deck Grid */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <span>Displaying {filteredCards.length} Cards in current category</span>
            <span>Click any card to inspect or test decision path</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredCards.map((card) => {
              const theme = getTypeTheme(card.type);
              const isSelected = selectedCard.id === card.id;
              const Icon = theme.icon;

              return (
                <div
                  key={card.id}
                  onClick={() => {
                    setSelectedCard(card);
                    setSelectedDecisionChoice(null);
                  }}
                  className={`p-4 rounded-2xl bg-gradient-to-b ${theme.bg} border transition-all cursor-pointer relative overflow-hidden group ${
                    isSelected
                      ? `${theme.border} ring-2 ring-emerald-500 shadow-xl scale-[1.02]`
                      : 'border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                  }`}
                >
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-[10px] text-slate-400 font-bold bg-slate-950/70 px-2 py-0.5 rounded border border-slate-800">
                      {card.id}
                    </span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold border ${theme.badge}`}>
                      {card.categoryLabel}
                    </span>
                  </div>

                  {/* Title & Icon */}
                  <div className="flex items-start gap-2.5 my-2">
                    <div className={`p-2 rounded-xl bg-slate-950/80 border border-slate-800 shrink-0 ${theme.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-2">
                        {card.title}
                      </h4>
                    </div>
                  </div>

                  {/* Scenario Preview */}
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed my-2">
                    {card.scenario}
                  </p>

                  {/* Impact Snippet */}
                  <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-slate-400">Impact:</span>
                    <span className="font-mono font-bold text-emerald-400 text-[11px] truncate max-w-[180px]">
                      {currency === 'INR' ? card.financialImpact.inr : card.financialImpact.usd}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Detailed Card Rendering (Authentic Poker Card Mockup) */}
        <div className="lg:col-span-5 sticky top-24">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
            {/* Poker Card Outer Frame with Bleed & Corner Marks */}
            <div className="text-center mb-3">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">
                Print Component Preview (2.5" × 3.5" Poker Standard)
              </span>
            </div>

            {/* Simulated Printed Card Face */}
            {(() => {
              const theme = getTypeTheme(selectedCard.type);
              const Icon = theme.icon;
              const isFlipped = !!flippedCards[selectedCard.id];

              if (isFlipped) {
                // Card Back Design
                return (
                  <div
                    onClick={() => toggleCardFlip(selectedCard.id)}
                    className="w-full aspect-[2.5/3.5] rounded-2xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 border-4 border-slate-800 p-6 flex flex-col items-center justify-between shadow-2xl cursor-pointer relative overflow-hidden"
                  >
                    <div className="w-full text-center border-b border-emerald-500/30 pb-2">
                      <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase">
                        WealthPath Official Deck
                      </span>
                    </div>

                    <div className="text-center space-y-3">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-300 shadow-lg">
                        <Sparkles className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-black text-white tracking-wider">WEALTHPATH</h3>
                      <p className="text-xs text-slate-400">Financial Planning Board Game</p>
                    </div>

                    <div className="text-center text-[10px] text-slate-500 font-mono">
                      Click to flip back to card face
                    </div>
                  </div>
                );
              }

              // Card Front Design
              return (
                <div className={`w-full rounded-2xl bg-slate-950 border-2 ${theme.border} p-5 shadow-2xl space-y-4 relative`}>
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className={`p-1.5 rounded-lg bg-slate-900 ${theme.accent}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-extrabold text-white tracking-wide uppercase">
                        {theme.label.split('(')[0]}
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {selectedCard.id}
                    </span>
                  </div>

                  {/* Card Title */}
                  <div>
                    <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">
                      {selectedCard.categoryLabel}
                    </span>
                    <h3 className="text-base font-bold text-white mt-0.5 leading-snug">
                      {selectedCard.title}
                    </h3>
                  </div>

                  {/* Scenario Narrative Box */}
                  <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 text-xs text-slate-200 leading-relaxed font-sans">
                    {selectedCard.scenario}
                  </div>

                  {/* Monetary Impact Highlight */}
                  <div className="bg-emerald-950/20 border border-emerald-900/40 p-3 rounded-xl space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold text-slate-400">Immediate Impact</span>
                      <span className="font-mono font-bold text-emerald-300 text-xs">
                        {currency === 'INR' ? selectedCard.financialImpact.inr : selectedCard.financialImpact.usd}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-tight">
                      {selectedCard.financialImpact.details}
                    </p>
                  </div>

                  {/* Interactive Option Selector if Decision Card */}
                  {selectedCard.options && selectedCard.options.length > 0 && (
                    <div className="space-y-2 pt-1">
                      <span className="text-[11px] font-bold uppercase text-sky-400 block">
                        Choose Your Strategy:
                      </span>
                      <div className="space-y-2">
                        {selectedCard.options.map((opt, idx) => (
                          <button
                            key={idx}
                            onClick={() => setSelectedDecisionChoice(idx)}
                            className={`w-full text-left p-2.5 rounded-xl border transition-all text-xs ${
                              selectedDecisionChoice === idx
                                ? 'bg-sky-950/70 border-sky-400 text-white ring-1 ring-sky-400 shadow-md'
                                : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                            }`}
                          >
                            <div className="font-bold flex items-center justify-between text-sky-300">
                              <span>{opt.label}</span>
                              {selectedDecisionChoice === idx && (
                                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                              )}
                            </div>
                            <div className="text-[11px] font-mono text-emerald-400 mt-1">
                              Impact: {currency === 'INR' ? opt.impactInr : opt.impactUsd}
                            </div>
                            <div className="text-[11px] text-slate-400 mt-0.5 italic">
                              Lesson: {opt.pedagogicalLesson}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Academic Principle & Reference */}
                  <div className="pt-2 border-t border-slate-800/80 space-y-1 text-[11px]">
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <BookOpen className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <strong className="text-white">Concept:</strong> {selectedCard.academicPrinciple}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">
                      Ref: {selectedCard.curriculumReference}
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Card Controls */}
            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                onClick={() => toggleCardFlip(selectedCard.id)}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-lg transition-all"
              >
                {flippedCards[selectedCard.id] ? 'View Front Face' : 'View Card Back'}
              </button>
              <button
                onClick={onOpenPrintModal}
                className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
              >
                <Printer className="w-3.5 h-3.5" />
                Print in Deck Kit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
