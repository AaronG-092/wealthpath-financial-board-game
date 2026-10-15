import React, { useState } from 'react';
import { 
  BOARD_SPACES, 
  BoardSpace 
} from '../data/gameData';
import { GAME_IMAGES } from '../data/assets';
import { 
  Compass,
  Briefcase, 
  ShieldAlert, 
  CreditCard, 
  TrendingUp, 
  Shuffle, 
  FileCheck, 
  Coins, 
  ShoppingBag, 
  HeartHandshake, 
  Stethoscope, 
  Car, 
  HelpCircle, 
  AlertTriangle, 
  FileSpreadsheet, 
  Award, 
  Scale, 
  Home, 
  GraduationCap, 
  BookmarkCheck, 
  Zap, 
  TrendingDown, 
  Building2, 
  ShieldCheck, 
  Laptop, 
  Activity, 
  SlidersHorizontal, 
  FileText, 
  PartyPopper, 
  PiggyBank, 
  Trophy, 
  Dices, 
  Info, 
  Layers, 
  Filter, 
  Maximize2,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

interface BoardTrackSectionProps {
  currency: 'INR' | 'USD';
}

const ICON_MAP: Record<string, React.ElementType> = {
  Briefcase,
  ShieldAlert,
  CreditCard,
  TrendingUp,
  Shuffle,
  FileCheck,
  Coins,
  ShoppingBag,
  HeartHandshake,
  Stethoscope,
  Car,
  HelpCircle,
  AlertTriangle,
  FileSpreadsheet,
  Award,
  Scale,
  Home,
  GraduationCap,
  BookmarkCheck,
  Zap,
  TrendingDown,
  Building2,
  ShieldCheck,
  Laptop,
  Activity,
  SlidersHorizontal,
  FileText,
  PartyPopper,
  PiggyBank,
  Trophy,
};

export const BoardTrackSection: React.FC<BoardTrackSectionProps> = ({ currency }) => {
  const [selectedSpace, setSelectedSpace] = useState<BoardSpace>(BOARD_SPACES[0]);
  const [currentPawnPosition, setCurrentPawnPosition] = useState<number>(1);
  const [lastDiceRoll, setLastDiceRoll] = useState<number | null>(null);
  const [selectedPhaseFilter, setSelectedPhaseFilter] = useState<string>('all');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');
  const [showArtworkModal, setShowArtworkModal] = useState<boolean>(false);

  const rollDiceAndMove = () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    setLastDiceRoll(roll);
    let nextPos = currentPawnPosition + roll;
    if (nextPos > 32) {
      // Loop or clamp to retirement
      nextPos = 32;
    }
    setCurrentPawnPosition(nextPos);
    const space = BOARD_SPACES.find((s) => s.id === nextPos) || BOARD_SPACES[0];
    setSelectedSpace(space);
  };

  const resetPawn = () => {
    setCurrentPawnPosition(1);
    setLastDiceRoll(null);
    setSelectedSpace(BOARD_SPACES[0]);
  };

  const filteredSpaces = BOARD_SPACES.filter((space) => {
    const phaseMatch = selectedPhaseFilter === 'all' || space.phase.includes(selectedPhaseFilter);
    const categoryMatch = selectedCategoryFilter === 'all' || space.category === selectedCategoryFilter;
    return phaseMatch && categoryMatch;
  });

  const getCategoryColorBadge = (category: string) => {
    switch (category) {
      case 'income':
        return { bg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30', label: 'Income / Start' };
      case 'decision':
        return { bg: 'bg-sky-500/10 text-sky-400 border-sky-500/30', label: 'Decision' };
      case 'investment':
        return { bg: 'bg-blue-500/10 text-blue-400 border-blue-500/30', label: 'Investment' };
      case 'emergency':
        return { bg: 'bg-rose-500/10 text-rose-400 border-rose-500/30', label: 'Emergency / Shock' };
      case 'milestone':
        return { bg: 'bg-amber-500/10 text-amber-400 border-amber-500/30', label: 'Milestone' };
      case 'tax':
        return { bg: 'bg-purple-500/10 text-purple-400 border-purple-500/30', label: 'Tax Strategy' };
      case 'liability':
        return { bg: 'bg-orange-500/10 text-orange-400 border-orange-500/30', label: 'EMI / Liability' };
      default:
        return { bg: 'bg-slate-500/10 text-slate-400 border-slate-500/30', label: category };
    }
  };

  return (
    <div className="space-y-8">
      {/* Blueprint Header with Academic Context */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
              <span>Section 1 of 4: Visual Board Layout Blueprint</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Sequential 32-Space Life-Cycle Track Blueprint
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Designed as a continuous looping life-path simulating four distinct financial phases from 
              <strong className="text-emerald-400"> First Salary (Age 22)</strong> to 
              <strong className="text-amber-400"> Retirement & Financial Freedom (Age 60+)</strong>. 
              Each space enforces pedagogical financial literacy, balancing liquidity, risk hedging, and wealth creation.
            </p>
          </div>

          {/* Dice & Test Simulation Widget */}
          <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-center gap-4 shrink-0 shadow-inner">
            <div className="text-center sm:text-left">
              <span className="text-xs text-slate-400 font-mono block">Player Simulation Token</span>
              <span className="text-sm font-bold text-white flex items-center gap-1.5 mt-0.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Position: Space {currentPawnPosition} / 32
              </span>
              {lastDiceRoll && (
                <span className="text-xs text-emerald-400 font-semibold block mt-1">
                  Rolled a {lastDiceRoll}!
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={rollDiceAndMove}
                className="px-4 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-lg text-xs font-bold flex items-center gap-2 shadow-lg shadow-emerald-700/20 active:scale-95 transition-all"
              >
                <Dices className="w-4 h-4" />
                Roll 1d6 & Advance
              </button>
              <button
                onClick={resetPawn}
                className="px-3 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-medium transition-all"
                title="Reset Pawn to Start"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Color Legend Standard */}
        <div className="mt-6 pt-5 border-t border-slate-800/80">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-emerald-400" />
            Standard Color-Coding & Iconography Key
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-emerald-300">
              <div className="w-3 h-3 rounded-full bg-emerald-500 shrink-0"></div>
              <span><strong>Green:</strong> Income & Cash Flow</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-sky-950/40 border border-sky-800/40 text-sky-300">
              <div className="w-3 h-3 rounded-full bg-sky-500 shrink-0"></div>
              <span><strong>Sky:</strong> Decisions & Trade-offs</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-950/40 border border-blue-800/40 text-blue-300">
              <div className="w-3 h-3 rounded-full bg-blue-500 shrink-0"></div>
              <span><strong>Blue:</strong> Investments & SIPs</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-rose-950/40 border border-rose-800/40 text-rose-300">
              <div className="w-3 h-3 rounded-full bg-rose-500 shrink-0"></div>
              <span><strong>Red:</strong> Emergency & Shocks</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-950/40 border border-amber-800/40 text-amber-300">
              <div className="w-3 h-3 rounded-full bg-amber-500 shrink-0"></div>
              <span><strong>Yellow:</strong> Life Milestones</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-purple-950/40 border border-purple-800/40 text-purple-300">
              <div className="w-3 h-3 rounded-full bg-purple-500 shrink-0"></div>
              <span><strong>Purple:</strong> Tax Exemptions (80C)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Artwork Feature Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Board Visual Representation */}
        <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-5 overflow-hidden shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Compass className="w-5 h-5 text-emerald-400" />
                Looping Life-Cycle Track Architecture (Spaces 1–32)
              </h3>
              <p className="text-xs text-slate-400">Click any space to inspect academic principles and monetary impact</p>
            </div>
            <button
              onClick={() => setShowArtworkModal(true)}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 transition-all"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              View High-Res AI Board Render
            </button>
          </div>

          {/* Interactive Visual Board Track Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 p-2 bg-slate-950/80 rounded-xl border border-slate-800/80">
            {BOARD_SPACES.map((space) => {
              const Icon = ICON_MAP[space.icon] || Info;
              const isSelected = selectedSpace.id === space.id;
              const isPawnHere = currentPawnPosition === space.id;

              return (
                <button
                  key={space.id}
                  onClick={() => setSelectedSpace(space)}
                  style={{ borderColor: isSelected ? space.color : undefined }}
                  className={`relative p-2.5 rounded-xl flex flex-col items-center text-center transition-all group ${
                    isSelected
                      ? 'ring-2 ring-offset-2 ring-offset-slate-950 shadow-lg scale-105 z-10'
                      : 'bg-slate-900/90 border border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                  }`}
                >
                  {/* Space Number Pill */}
                  <div
                    className="w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center mb-1 text-white shadow-sm"
                    style={{ backgroundColor: space.color }}
                  >
                    {space.id}
                  </div>

                  {/* Icon */}
                  <div
                    className="p-1.5 rounded-lg mb-1 transition-colors group-hover:scale-110"
                    style={{ backgroundColor: `${space.color}20`, color: space.color }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Title */}
                  <span className="text-[11px] font-semibold text-slate-200 line-clamp-2 leading-tight">
                    {space.title}
                  </span>

                  {/* Pawn Marker if present */}
                  {isPawnHere && (
                    <div className="absolute -top-2.5 -right-1 px-1.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 font-extrabold text-[9px] shadow-md animate-bounce ring-2 ring-emerald-300">
                      PAWN
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Phase Markers Navigation Bar */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-4 gap-2 pt-2 text-xs">
            <div className="p-2.5 rounded-lg bg-emerald-950/20 border border-emerald-800/30">
              <span className="text-[10px] uppercase font-bold text-emerald-400 block">Spaces 1–8</span>
              <span className="font-semibold text-slate-200">Phase 1: Early Career</span>
              <span className="text-[11px] text-slate-400 block mt-0.5">Budgeting, First SIP, Term Insurance</span>
            </div>
            <div className="p-2.5 rounded-lg bg-sky-950/20 border border-sky-800/30">
              <span className="text-[10px] uppercase font-bold text-sky-400 block">Spaces 9–16</span>
              <span className="font-semibold text-slate-200">Phase 2: Foundation</span>
              <span className="text-[11px] text-slate-400 block mt-0.5">Marriage, Health Cover, 80C Tax</span>
            </div>
            <div className="p-2.5 rounded-lg bg-blue-950/20 border border-blue-800/30">
              <span className="text-[10px] uppercase font-bold text-blue-400 block">Spaces 17–24</span>
              <span className="font-semibold text-slate-200">Phase 3: Wealth & EMIs</span>
              <span className="text-[11px] text-slate-400 block mt-0.5">Home Loan, Bull/Bear, Education</span>
            </div>
            <div className="p-2.5 rounded-lg bg-amber-950/20 border border-amber-800/30">
              <span className="text-[10px] uppercase font-bold text-amber-400 block">Spaces 25–32</span>
              <span className="font-semibold text-slate-200">Phase 4: Golden Years</span>
              <span className="text-[11px] text-slate-400 block mt-0.5">Glide Path, SWP, Debt-Free Finish</span>
            </div>
          </div>
        </div>

        {/* Space Inspector Panel */}
        <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl sticky top-24">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shadow-md"
                style={{ backgroundColor: selectedSpace.color }}
              >
                #{selectedSpace.id}
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                  {selectedSpace.phase}
                </span>
                <h4 className="text-base font-bold text-white leading-tight">
                  {selectedSpace.title}
                </h4>
              </div>
            </div>
          </div>

          <div className="mt-4 space-y-4">
            {/* Category Badge & Monetary Impact */}
            <div className="flex items-center justify-between gap-2">
              {(() => {
                const badge = getCategoryColorBadge(selectedSpace.category);
                return (
                  <span className={`text-xs px-2.5 py-1 rounded-md font-semibold border ${badge.bg}`}>
                    {badge.label}
                  </span>
                );
              })()}

              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-slate-800 text-emerald-400 border border-slate-700">
                {currency === 'INR' ? selectedSpace.monetaryImpact.inr : selectedSpace.monetaryImpact.usd}
              </span>
            </div>

            {/* Description */}
            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
              <span className="text-[11px] uppercase font-semibold text-slate-400 block mb-1">
                Board Space Event
              </span>
              <p className="text-xs text-slate-200 leading-relaxed">
                {selectedSpace.shortDesc}
              </p>
            </div>

            {/* Academic Financial Concept */}
            <div className="bg-emerald-950/20 p-3.5 rounded-xl border border-emerald-900/30">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-300 mb-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Target Financial Concept
              </div>
              <p className="text-xs font-semibold text-white">
                {selectedSpace.financialConcept}
              </p>
            </div>

            {/* Academic Rationale (for 15 Marks Presentation) */}
            <div className="bg-slate-800/40 p-3.5 rounded-xl border border-slate-700/60">
              <span className="text-[11px] uppercase font-semibold text-slate-400 block mb-1">
                Academic Curriculum Rationale
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedSpace.academicRationale}
              </p>
            </div>

            {/* Quick Actions */}
            <button
              onClick={() => {
                setCurrentPawnPosition(selectedSpace.id);
              }}
              className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-all border border-slate-700"
            >
              <span>Move Player Pawn to Space #{selectedSpace.id}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Comprehensive Sequential Track Table for Academic Defense */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-400" />
              Complete 32-Space Track Specification Table
            </h3>
            <p className="text-xs text-slate-400">Complete curriculum mapping for submission and project viva</p>
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 bg-slate-950 px-2.5 py-1.5 rounded-lg border border-slate-800 text-xs text-slate-300">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              <span>Phase:</span>
              <select
                value={selectedPhaseFilter}
                onChange={(e) => setSelectedPhaseFilter(e.target.value)}
                className="bg-transparent text-emerald-400 font-semibold focus:outline-none cursor-pointer"
              >
                <option value="all">All Phases (1-4)</option>
                <option value="Early Career">Phase 1 (Early Career)</option>
                <option value="Foundation">Phase 2 (Foundation)</option>
                <option value="Wealth Building">Phase 3 (Wealth & EMIs)</option>
                <option value="Pre-Retirement">Phase 4 (Pre-Retirement)</option>
              </select>
            </div>

            <div className="flex items-center gap-1.5 bg-slate-950 px-2.5 py-1.5 rounded-lg border border-slate-800 text-xs text-slate-300">
              <span>Category:</span>
              <select
                value={selectedCategoryFilter}
                onChange={(e) => setSelectedCategoryFilter(e.target.value)}
                className="bg-transparent text-emerald-400 font-semibold focus:outline-none cursor-pointer"
              >
                <option value="all">All Categories</option>
                <option value="income">Income</option>
                <option value="decision">Decision</option>
                <option value="investment">Investment</option>
                <option value="emergency">Emergency / Shock</option>
                <option value="milestone">Milestone</option>
                <option value="tax">Tax</option>
                <option value="liability">Liability / Loan</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-800">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950 text-slate-300 uppercase font-mono text-[11px] border-b border-slate-800">
              <tr>
                <th className="py-3 px-3 w-12 text-center">#</th>
                <th className="py-3 px-4">Track Space</th>
                <th className="py-3 px-3">Type</th>
                <th className="py-3 px-4">Financial Principle</th>
                <th className="py-3 px-4">Monetary Impact</th>
                <th className="py-3 px-6 hidden md:table-cell">Academic Rationale</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-medium">
              {filteredSpaces.map((space) => {
                const Icon = ICON_MAP[space.icon] || Info;
                const badge = getCategoryColorBadge(space.category);
                return (
                  <tr
                    key={space.id}
                    onClick={() => setSelectedSpace(space)}
                    className="hover:bg-slate-800/40 transition-colors cursor-pointer group"
                  >
                    <td className="py-3 px-3 text-center">
                      <span
                        className="inline-flex items-center justify-center w-6 h-6 rounded-md font-bold text-white text-[11px]"
                        style={{ backgroundColor: space.color }}
                      >
                        {space.id}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-bold text-white flex items-center gap-2">
                      <div
                        className="p-1 rounded bg-slate-800 group-hover:scale-110 transition-transform"
                        style={{ color: space.color }}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span>{space.title}</span>
                    </td>
                    <td className="py-3 px-3">
                      <span className={`text-[10px] px-2 py-0.5 rounded border ${badge.bg}`}>
                        {badge.label}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-emerald-300 font-semibold">
                      {space.financialConcept}
                    </td>
                    <td className="py-3 px-4 font-mono text-slate-200">
                      {currency === 'INR' ? space.monetaryImpact.inr : space.monetaryImpact.usd}
                    </td>
                    <td className="py-3 px-6 text-slate-400 text-[11px] leading-relaxed hidden md:table-cell">
                      {space.academicRationale}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for High-Resolution AI Board Track Render */}
      {showArtworkModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative max-w-5xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950">
              <div className="flex items-center gap-2">
                <Compass className="w-5 h-5 text-emerald-400" />
                <h3 className="font-bold text-white">Central 2D Board Game Track Artwork (Rendered Prototype)</h3>
              </div>
              <button
                onClick={() => setShowArtworkModal(false)}
                className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
              >
                Close
              </button>
            </div>
            <div className="p-4 bg-slate-950 flex flex-col items-center">
              <img
                src={GAME_IMAGES.boardTrack}
                alt="Central Board Track Blueprint"
                className="max-h-[70vh] w-auto rounded-xl object-contain border border-slate-800 shadow-2xl"
              />
              <p className="text-xs text-slate-400 mt-3 text-center max-w-2xl">
                Generated via Imagen 3 based on Section 4 Prompt A: 2D flat vector board game track titled 'WealthPath', traversing life milestones from First Job & Graduation through Home Loan, Healthcare, Bull Market, and Retiring Wealthy.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
