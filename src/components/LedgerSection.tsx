import React, { useState } from 'react';
import { 
  PLAY_MONEY_DENOMINATIONS, 
  PHYSICAL_COMPONENTS, 
  PlayMoneyItem 
} from '../data/gameData';
import { GAME_IMAGES } from '../data/assets';
import { 
  FileSpreadsheet, 
  DollarSign, 
  IndianRupee, 
  Wallet, 
  PiggyBank, 
  TrendingUp, 
  Landmark, 
  Scale, 
  Plus, 
  Minus, 
  RotateCcw, 
  Printer, 
  CheckCircle2, 
  AlertTriangle, 
  Coins, 
  Box, 
  FileText
} from 'lucide-react';

interface LedgerSectionProps {
  currency: 'INR' | 'USD';
  onOpenPrintModal: () => void;
}

interface PlayerLedgerState {
  cash: number;
  savings: number; // Emergency Fund
  investments: number; // Equities, SIPs, Gold
  loans: number; // Outstanding debt / EMIs
  monthlyIncome: number;
  monthlyExpenses: number;
  monthlyEmi: number;
}

export const LedgerSection: React.FC<LedgerSectionProps> = ({ 
  currency, 
  onOpenPrintModal 
}) => {
  const initialLedger: PlayerLedgerState = {
    cash: currency === 'INR' ? 40000 : 2500,
    savings: currency === 'INR' ? 60000 : 4000,
    investments: currency === 'INR' ? 120000 : 8000,
    loans: currency === 'INR' ? 50000 : 3500,
    monthlyIncome: currency === 'INR' ? 70000 : 4500,
    monthlyExpenses: currency === 'INR' ? 30000 : 2000,
    monthlyEmi: currency === 'INR' ? 12000 : 800,
  };

  const [ledger, setLedger] = useState<PlayerLedgerState>(initialLedger);
  const [turnHistory, setTurnHistory] = useState<Array<{
    turn: number;
    action: string;
    cash: number;
    savings: number;
    investments: number;
    loans: number;
    netWorth: number;
  }>>([
    {
      turn: 1,
      action: 'Game Start: First Salary Credited',
      cash: currency === 'INR' ? 40000 : 2500,
      savings: currency === 'INR' ? 60000 : 4000,
      investments: currency === 'INR' ? 120000 : 8000,
      loans: currency === 'INR' ? 50000 : 3500,
      netWorth: (currency === 'INR' ? 40000 + 60000 + 120000 - 50000 : 2500 + 4000 + 8000 - 3500),
    }
  ]);

  const totalAssets = ledger.cash + ledger.savings + ledger.investments;
  const netWorth = totalAssets - ledger.loans;
  
  // Financial Ratios
  const emergencyMonths = ledger.monthlyExpenses > 0 ? (ledger.savings / ledger.monthlyExpenses).toFixed(1) : '0';
  const dtiRatio = ledger.monthlyIncome > 0 ? ((ledger.monthlyEmi / ledger.monthlyIncome) * 100).toFixed(0) : '0';
  const savingsRate = ledger.monthlyIncome > 0 ? (((ledger.monthlyIncome - ledger.monthlyExpenses - ledger.monthlyEmi) / ledger.monthlyIncome) * 100).toFixed(0) : '0';

  const formatCurr = (val: number) => {
    if (currency === 'INR') {
      return `₹${val.toLocaleString('en-IN')}`;
    }
    return `$${val.toLocaleString('en-US')}`;
  };

  const applyPresetAction = (type: string) => {
    let newCash = ledger.cash;
    let newSavings = ledger.savings;
    let newInvestments = ledger.investments;
    let newLoans = ledger.loans;
    let actionDesc = '';

    if (currency === 'INR') {
      switch (type) {
        case 'salary':
          newCash += 50000;
          actionDesc = 'Salary Credit: +₹50,000 cash';
          break;
        case 'sip':
          if (newCash >= 10000) {
            newCash -= 10000;
            newInvestments += 10000;
            actionDesc = 'SIP Investment: Transferred ₹10,000 cash to Equity';
          }
          break;
        case 'emergency_fund':
          if (newCash >= 15000) {
            newCash -= 15000;
            newSavings += 15000;
            actionDesc = 'Park in Liquid Savings: +₹15,000 Emergency Fund';
          }
          break;
        case 'medical_shock':
          if (newSavings >= 30000) {
            newSavings -= 30000;
            actionDesc = 'Medical Emergency: Covered ₹30,000 from Savings Fund';
          } else {
            const remainder = 30000 - newSavings;
            newSavings = 0;
            newLoans += remainder;
            actionDesc = `Medical Shock: Emptied savings, borrowed ₹${remainder.toLocaleString('en-IN')}`;
          }
          break;
        case 'pay_loan':
          if (newCash >= 25000 && newLoans > 0) {
            const pay = Math.min(25000, newLoans);
            newCash -= pay;
            newLoans -= pay;
            actionDesc = `Prepaid Loan Principal: -₹${pay.toLocaleString('en-IN')} debt`;
          }
          break;
        case 'market_bull':
          newInvestments = Math.round(newInvestments * 1.20);
          actionDesc = 'Stock Market Bull Run: +20% surge in investments';
          break;
      }
    } else {
      // USD
      switch (type) {
        case 'salary':
          newCash += 3500;
          actionDesc = 'Salary Credit: +$3,500 cash';
          break;
        case 'sip':
          if (newCash >= 600) {
            newCash -= 600;
            newInvestments += 600;
            actionDesc = 'SIP Investment: Transferred $600 cash to Equity';
          }
          break;
        case 'emergency_fund':
          if (newCash >= 1000) {
            newCash -= 1000;
            newSavings += 1000;
            actionDesc = 'Park in Savings: +$1,000 Emergency Reserve';
          }
          break;
        case 'medical_shock':
          if (newSavings >= 2000) {
            newSavings -= 2000;
            actionDesc = 'Medical Shock: Covered $2,000 from Savings';
          } else {
            const remainder = 2000 - newSavings;
            newSavings = 0;
            newLoans += remainder;
            actionDesc = `Medical Shock: Emptied savings, borrowed $${remainder}`;
          }
          break;
        case 'pay_loan':
          if (newCash >= 1500 && newLoans > 0) {
            const pay = Math.min(1500, newLoans);
            newCash -= pay;
            newLoans -= pay;
            actionDesc = `Prepaid Loan: -$${pay} debt`;
          }
          break;
        case 'market_bull':
          newInvestments = Math.round(newInvestments * 1.20);
          actionDesc = 'Bull Run: +20% portfolio appreciation';
          break;
      }
    }

    const updated = {
      ...ledger,
      cash: newCash,
      savings: newSavings,
      investments: newInvestments,
      loans: newLoans,
    };
    setLedger(updated);

    const newTurn = turnHistory.length + 1;
    const newNetWorth = (newCash + newSavings + newInvestments) - newLoans;
    setTurnHistory((prev) => [
      ...prev,
      {
        turn: newTurn,
        action: actionDesc,
        cash: newCash,
        savings: newSavings,
        investments: newInvestments,
        loans: newLoans,
        netWorth: newNetWorth,
      }
    ]);
  };

  const resetLedger = () => {
    setLedger(initialLedger);
    setTurnHistory([
      {
        turn: 1,
        action: 'Reset to Initial Turn',
        cash: initialLedger.cash,
        savings: initialLedger.savings,
        investments: initialLedger.investments,
        loans: initialLedger.loans,
        netWorth: (initialLedger.cash + initialLedger.savings + initialLedger.investments) - initialLedger.loans,
      }
    ]);
  };

  React.useEffect(() => {
    resetLedger();
  }, [currency]);

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
              <span>Section 3 of 4: Player Ledger & Physical Components</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Player Financial Ledger Sheet & Hardware Specs
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Provides the formal 5-column financial accounting sheet mandated for game turns: 
              <strong className="text-emerald-400"> Cash</strong>, 
              <strong className="text-sky-400"> Liquid Savings (Emergency Fund)</strong>, 
              <strong className="text-blue-400"> Investments</strong>, 
              <strong className="text-rose-400"> Outstanding Loans/EMIs</strong>, and 
              <strong className="text-amber-400"> Net Worth</strong>. 
              Also specifies the physical token, dice, and play money banknote requirements.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenPrintModal}
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg shadow-emerald-700/20 transition-all"
            >
              <Printer className="w-4 h-4" />
              Print Blank Ledger Sheets (A4)
            </button>
          </div>
        </div>
      </div>

      {/* Part A: Interactive Live Financial Ledger Calculator */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-4">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Scale className="w-5 h-5 text-emerald-400" />
              Interactive Player Financial Ledger Simulator
            </h3>
            <p className="text-xs text-slate-400">
              Test player turns: see how financial choices alter solvency, liquidity ratios, and terminal net worth.
            </p>
          </div>
          <button
            onClick={resetLedger}
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-medium flex items-center gap-1.5 self-start sm:self-auto"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset Ledger
          </button>
        </div>

        {/* 5-Column Financial Statement Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 my-6">
          {/* 1. Cash */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-semibold uppercase tracking-wider text-[10px]">1. Cash in Hand</span>
              <Wallet className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-xl font-extrabold text-white font-mono">
              {formatCurr(ledger.cash)}
            </div>
            <p className="text-[10px] text-slate-400">Checking account / transaction cash</p>
          </div>

          {/* 2. Savings */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-semibold uppercase tracking-wider text-[10px]">2. Liquid Savings</span>
              <PiggyBank className="w-4 h-4 text-sky-400" />
            </div>
            <div className="text-xl font-extrabold text-sky-400 font-mono">
              {formatCurr(ledger.savings)}
            </div>
            <p className="text-[10px] text-slate-400">3-6 mo emergency liquid reserve</p>
          </div>

          {/* 3. Investments */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-semibold uppercase tracking-wider text-[10px]">3. Investments</span>
              <TrendingUp className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-xl font-extrabold text-blue-400 font-mono">
              {formatCurr(ledger.investments)}
            </div>
            <p className="text-[10px] text-slate-400">Equities, Mutual Funds, PPF, Gold</p>
          </div>

          {/* 4. Loans */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-semibold uppercase tracking-wider text-[10px]">4. Loans & EMIs</span>
              <Landmark className="w-4 h-4 text-rose-400" />
            </div>
            <div className="text-xl font-extrabold text-rose-400 font-mono">
              {formatCurr(ledger.loans)}
            </div>
            <p className="text-[10px] text-slate-400">Mortgage, Auto, Credit Card balance</p>
          </div>

          {/* 5. Net Worth */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-amber-950/40 to-slate-950 border border-amber-500/40 space-y-1 col-span-2 sm:col-span-1">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-semibold uppercase tracking-wider text-[10px] text-amber-400">5. Total Net Worth</span>
              <Scale className="w-4 h-4 text-amber-400" />
            </div>
            <div className={`text-xl font-extrabold font-mono ${netWorth >= 0 ? 'text-amber-400' : 'text-rose-400'}`}>
              {formatCurr(netWorth)}
            </div>
            <p className="text-[10px] text-slate-400">Assets minus Liabilities</p>
          </div>
        </div>

        {/* Financial Health Indicators Bar */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${Number(emergencyMonths) >= 3 ? 'bg-emerald-400' : 'bg-rose-400 animate-pulse'}`}></div>
            <div>
              <span className="text-[11px] text-slate-400 font-semibold uppercase">Emergency Fund Ratio</span>
              <div className="text-sm font-bold text-white font-mono">
                {emergencyMonths} Months of Expenses
                <span className="text-[10px] text-slate-400 ml-1.5 font-normal">(Target: ≥ 3–6 mo)</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${Number(dtiRatio) <= 40 ? 'bg-emerald-400' : 'bg-rose-400 animate-pulse'}`}></div>
            <div>
              <span className="text-[11px] text-slate-400 font-semibold uppercase">Debt-to-Income (DTI)</span>
              <div className="text-sm font-bold text-white font-mono">
                {dtiRatio}% of Income
                <span className="text-[10px] text-slate-400 ml-1.5 font-normal">(Target: ≤ 40%)</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${Number(savingsRate) >= 20 ? 'bg-emerald-400' : 'bg-amber-400'}`}></div>
            <div>
              <span className="text-[11px] text-slate-400 font-semibold uppercase">Monthly Savings Rate</span>
              <div className="text-sm font-bold text-white font-mono">
                {savingsRate}% Net Surplus
                <span className="text-[10px] text-slate-400 ml-1.5 font-normal">(50/30/20 Rule: ≥ 20%)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Simulation Buttons */}
        <div className="space-y-2">
          <span className="text-xs font-semibold text-slate-300 block">
            Simulate Life-Stage Actions on Ledger:
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => applyPresetAction('salary')}
              className="px-3 py-2 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-800/40 text-emerald-300 text-xs font-medium rounded-lg flex items-center gap-1.5 transition-all"
            >
              <Plus className="w-3.5 h-3.5" /> Receive Salary Credited
            </button>
            <button
              onClick={() => applyPresetAction('sip')}
              className="px-3 py-2 bg-blue-950/60 hover:bg-blue-900/60 border border-blue-800/40 text-blue-300 text-xs font-medium rounded-lg flex items-center gap-1.5 transition-all"
            >
              <TrendingUp className="w-3.5 h-3.5" /> Execute Monthly SIP
            </button>
            <button
              onClick={() => applyPresetAction('emergency_fund')}
              className="px-3 py-2 bg-sky-950/60 hover:bg-sky-900/60 border border-sky-800/40 text-sky-300 text-xs font-medium rounded-lg flex items-center gap-1.5 transition-all"
            >
              <PiggyBank className="w-3.5 h-3.5" /> Top-Up Liquid Reserve
            </button>
            <button
              onClick={() => applyPresetAction('medical_shock')}
              className="px-3 py-2 bg-rose-950/60 hover:bg-rose-900/60 border border-rose-800/40 text-rose-300 text-xs font-medium rounded-lg flex items-center gap-1.5 transition-all"
            >
              <Minus className="w-3.5 h-3.5" /> Medical Shock Deduction
            </button>
            <button
              onClick={() => applyPresetAction('pay_loan')}
              className="px-3 py-2 bg-amber-950/60 hover:bg-amber-900/60 border border-amber-800/40 text-amber-300 text-xs font-medium rounded-lg flex items-center gap-1.5 transition-all"
            >
              <Landmark className="w-3.5 h-3.5" /> Prepay Loan Principal
            </button>
            <button
              onClick={() => applyPresetAction('market_bull')}
              className="px-3 py-2 bg-purple-950/60 hover:bg-purple-900/60 border border-purple-800/40 text-purple-300 text-xs font-medium rounded-lg flex items-center gap-1.5 transition-all"
            >
              <TrendingUp className="w-3.5 h-3.5" /> Market Bull Run (+20%)
            </button>
          </div>
        </div>

        {/* Turn-by-Turn Ledger Audit Log Table */}
        <div className="mt-6">
          <span className="text-xs font-bold text-slate-300 block mb-2">
            Turn-by-Turn Audit Table (As Recorded by Player during Gameplay):
          </span>
          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950 text-slate-400 font-mono text-[10px] uppercase border-b border-slate-800">
                <tr>
                  <th className="py-2.5 px-3 w-12 text-center">Turn</th>
                  <th className="py-2.5 px-3">Action Description</th>
                  <th className="py-2.5 px-3">Cash</th>
                  <th className="py-2.5 px-3">Savings</th>
                  <th className="py-2.5 px-3">Investments</th>
                  <th className="py-2.5 px-3">Loans / EMIs</th>
                  <th className="py-2.5 px-3 font-bold text-amber-400">Net Worth</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50 font-mono">
                {turnHistory.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/30">
                    <td className="py-2 px-3 text-center text-slate-400">{item.turn}</td>
                    <td className="py-2 px-3 font-sans text-slate-200">{item.action}</td>
                    <td className="py-2 px-3 text-slate-300">{formatCurr(item.cash)}</td>
                    <td className="py-2 px-3 text-sky-400">{formatCurr(item.savings)}</td>
                    <td className="py-2 px-3 text-blue-400">{formatCurr(item.investments)}</td>
                    <td className="py-2 px-3 text-rose-400">{formatCurr(item.loans)}</td>
                    <td className="py-2 px-3 font-bold text-amber-400">{formatCurr(item.netWorth)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Part B: Physical Components & Play Money Denominations */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Play Money Banknotes */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Coins className="w-5 h-5 text-emerald-400" />
                Play Currency Denominations & Economic Theorists
              </h3>
              <p className="text-xs text-slate-400">
                Printed 2.5" × 5" paper scrip banknotes paying tribute to pivotal economic and financial theorists.
              </p>
            </div>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
              6 Denominations
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PLAY_MONEY_DENOMINATIONS.map((note, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-slate-800 bg-slate-950/70 space-y-2 relative overflow-hidden group hover:border-slate-700 transition-all"
              >
                {/* Note Header */}
                <div className="flex items-center justify-between">
                  <div
                    className="px-2 py-0.5 rounded text-xs font-bold text-white font-mono shadow-sm"
                    style={{ backgroundColor: note.hexBg }}
                  >
                    {currency === 'INR' ? `₹${note.denominationInr.toLocaleString('en-IN')}` : `$${note.denominationUsd.toLocaleString('en-US')}`}
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">
                    Qty: {note.recommendedCount} pcs
                  </span>
                </div>

                {/* Economic Thinker Tribute */}
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">
                    Historical Portrait Tribute:
                  </span>
                  <div className="text-xs font-bold text-white">
                    {note.historicalPortrait}
                  </div>
                </div>

                {/* Practical Gameplay Usage */}
                <p className="text-[11px] text-slate-300 leading-tight">
                  <strong className="text-slate-400">Usage:</strong> {note.intendedUsage}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Physical Components Hardware Specification Table */}
        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Box className="w-5 h-5 text-emerald-400" />
                Physical Hardware Components
              </h3>
              <p className="text-xs text-slate-400">Complete manufacturing bill of materials for college project submission</p>
            </div>
          </div>

          <div className="space-y-3">
            {PHYSICAL_COMPONENTS.map((comp, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-start justify-between gap-3"
              >
                <div>
                  <span className="text-xs font-bold text-white block">
                    {comp.item}
                  </span>
                  <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">
                    {comp.specs}
                  </p>
                </div>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-emerald-400 shrink-0 border border-slate-700">
                  {comp.qty}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
