import React from 'react';
import { createRoot } from 'react-dom/client';

// --- ICONS (Raw SVG Strings) ---
const ICONS = {
  settings: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.39a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  alert: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  xCircle: `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  bulb: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 14"/></svg>`,
  calendar: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  fastForward: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 19 22 12 13 5 13 19"/><polygon points="2 19 11 12 2 5 2 19"/></svg>`,
  star: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
};

const NOW = new Date();
const BASE_YEAR = NOW.getFullYear();
const TODAY_MONTH = NOW.getMonth() + 1;

const DEFAULT_CONFIG = {
  sourcing: 50,
  prod1: 30,
  ship1: 30,
  prep: 25,
  test: 15,
  prod2: 30,
  ship2: 45
};

const DEFAULT_CNY_DATES = {
    2024: "2024-02-10",
    2025: "2025-01-29",
    2026: "2026-02-17",
    2027: "2027-02-06",
    2028: "2028-01-26",
    2029: "2029-02-13",
    2030: "2030-02-03",
    2031: "2031-01-23"
};

const addDays = (date: Date, days: number) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const formatFullDate = (date: Date) => {
  return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
};

const formatDate = (date: Date) => {
  return `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}`;
};

const initCustomDates = () => {
  const map: any = {};
  const years = [2026, 2027, 2028, 2029, 2030];
  years.forEach(y => {
      const cnyStr = (DEFAULT_CNY_DATES as any)[y];
      if (cnyStr) {
          const cny = new Date(cnyStr);
          map[y] = {
              factory: { 
                start: formatFullDate(addDays(cny, -19)), 
                end: formatFullDate(addDays(cny, 25)) 
              },
              logistics: { 
                start: formatFullDate(addDays(cny, -10)), 
                end: formatFullDate(addDays(cny, 15)) 
              }
          };
      }
  });
  return map;
};

let state: any = {
  config: { ...DEFAULT_CONFIG },
  cnyConfig: { customDates: initCustomDates() },
  showConfig: false,
  productTypes: [
    { id: '1', name: '常青款', type: 'evergreen', peakMonths: [] },
    { id: '2', name: '冬季旺季', type: 'seasonal', peakMonths: [11, 12] },
    { id: '3', name: '夏季旺季', type: 'seasonal', peakMonths: [5, 6] },
    { id: '4', name: '返校季', type: 'seasonal', peakMonths: [7, 8] },
    { id: '5', name: '情人节', type: 'seasonal', peakMonths: [1, 2] },
    { id: '6', name: '复活节', type: 'seasonal', peakMonths: [3, 4] },
    { id: '7', name: '万圣节', type: 'seasonal', peakMonths: [9, 10] },
  ],
  selectedTypeId: '1',
  selectedMonth: TODAY_MONTH
};

const calculatePhaseWithCNY = (scheduledStart: Date, duration: number, type: string) => {
    let actualStart = new Date(scheduledStart);
    let delayOccurred = false;
    const yearsToCheck = [scheduledStart.getFullYear(), scheduledStart.getFullYear() + 1];
    
    const getTimeline = (year: number, t: string) => {
        const cfg = state.cnyConfig.customDates[year];
        return cfg ? { shutdown: new Date(cfg[t].start), resume: new Date(cfg[t].end) } : null;
    };

    for (const y of yearsToCheck) {
        const timeline = getTimeline(y, type);
        if (timeline && scheduledStart >= timeline.shutdown && scheduledStart < timeline.resume) {
             actualStart = new Date(timeline.resume);
             delayOccurred = true;
             break; 
        }
    }

    let daysRemaining = duration;
    let currentCursor = new Date(actualStart);
    for (const y of [currentCursor.getFullYear(), currentCursor.getFullYear() + 1]) {
        const timeline = getTimeline(y, type);
        if (!timeline) continue;
        if (currentCursor < timeline.shutdown) {
            const dToShut = Math.ceil((timeline.shutdown.getTime() - currentCursor.getTime()) / 86400000);
            if (dToShut < daysRemaining) {
                daysRemaining -= dToShut;
                currentCursor = new Date(timeline.resume);
                delayOccurred = true;
            } else break;
        } else if (currentCursor >= timeline.shutdown && currentCursor < timeline.resume) {
             currentCursor = new Date(timeline.resume);
             delayOccurred = true;
        }
    }
    return { start: actualStart, end: addDays(currentCursor, daysRemaining), delayed: delayOccurred };
};

const calculateScenario = (startM: number, typeConfig: any, startYear: number = BASE_YEAR) => {
    const start = new Date(startYear, startM, 1);
    const sourcingEnd = addDays(start, state.config.sourcing);
    const prod1Calc = calculatePhaseWithCNY(sourcingEnd, state.config.prod1, 'factory');
    const ship1Calc = calculatePhaseWithCNY(prod1Calc.end, state.config.ship1, 'logistics');
    let prepEnd = addDays(ship1Calc.end, state.config.prep);
    let promoStart = new Date(prepEnd);
    if (promoStart.getMonth() === 11) promoStart = new Date(promoStart.getFullYear() + 1, 0, 1);

    const testEnd = addDays(promoStart, state.config.test);
    const prod2Calc = calculatePhaseWithCNY(testEnd, state.config.prod2, 'factory');
    const ship2Calc = calculatePhaseWithCNY(prod2Calc.end, state.config.ship2, 'logistics');

    let status = 'success', grade = 'good', failReason = null, shortFailReason = "", cnyWarning = "", peakInfo = null;

    if (typeConfig.type === 'seasonal') {
        const peakMonth = typeConfig.peakMonths[0];
        let targetYear = startYear;
        if (startM + 1 > peakMonth - 2) {
             targetYear = startYear + 1;
        }
        const targetPeak = new Date(targetYear, peakMonth - 1, 1);
        const cutoff = addDays(targetPeak, 20);
        const arrival = ship2Calc.end;
        if (arrival <= cutoff && arrival.getFullYear() <= targetYear) {
             peakInfo = { targetPeakMonth: peakMonth, targetYear, arrivalDate: formatDate(arrival), missed: false, nearMiss: arrival > targetPeak };
             const promoMonth = promoStart.getMonth();
             if (promoMonth === 9 || promoMonth === 10) { status = 'fail'; failReason = "推广撞Q4流量贵"; shortFailReason = "推广撞Q4"; }
             else if (arrival.getMonth() + 1 === peakMonth || arrival.getMonth() + 1 === (peakMonth === 1 ? 12 : peakMonth - 1)) grade = 'perfect';
        } else {
            status = 'fail'; failReason = `错过${targetYear}年${peakMonth}月旺季`; shortFailReason = "错过旺季";
            peakInfo = { missed: true, targetPeakMonth: peakMonth, targetYear, arrivalDate: formatDate(arrival) };
        }
    } else {
        const promoMonth = promoStart.getMonth();
        if (promoMonth === 9 || promoMonth === 10) { status = 'fail'; failReason = "推广撞Q4流量贵"; shortFailReason = "推广撞Q4"; }
    }

    if (status === 'success') {
        let warns = [];
        if (peakInfo?.nearMiss) warns.push("入库紧逼旺季");
        if (prod1Calc.delayed || ship1Calc.delayed) warns.push("研发首期撞春节");
        if (prod2Calc.delayed || ship2Calc.delayed) warns.push("补货后期撞春节");
        cnyWarning = warns.join(" | ");
        if (cnyWarning) grade = 'warning';
    } else grade = 'fail';

    return { 
        startMonth: startM + 1, 
        startYear: startYear,
        status, grade, failReason, shortFailReason, cnyWarning, 
        delays: { prod1: prod1Calc.delayed, ship1: ship1Calc.delayed, prod2: prod2Calc.delayed, ship2: ship2Calc.delayed }, 
        dates: { start, sourcingEnd, prod1Start: prod1Calc.start, prod1End: prod1Calc.end, ship1End: ship1Calc.end, prepEnd, promoStart, testEnd, prod2Start: prod2Calc.start, prod2End: prod2Calc.end, ship2End: ship2Calc.end }, 
        peakInfo 
    };
};

const calculateAllResults = () => {
    const matrix: any[] = [];
    for (let i = 0; i < 12; i++) {
        const row = { month: i + 1, results: state.productTypes.map((t: any) => ({ typeId: t.id, ...calculateScenario(i, t) })) };
        matrix.push(row);
    }
    const currentResults = matrix.map(m => m.results.find(r => r.typeId === state.selectedTypeId));
    return { currentResults, matrix };
};

function renderConfigPanel() {
    if (!state.showConfig) return '';
    const years = [2026, 2027, 2028, 2029, 2030];
    return `
    <div class="mb-12 p-12 bg-white border-8 border-slate-900 max-w-[1500px] mx-auto animate-fade-in shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        <div class="flex justify-between items-center mb-10 border-b-4 border-slate-900 pb-6">
            <h3 class="text-4xl font-black text-slate-900 flex items-center gap-4 uppercase tracking-normal">${ICONS.settings} 系统参数底座</h3>
            <button onclick="toggleConfig()" class="text-slate-900 hover:scale-110 transition-transform">${ICONS.xCircle}</button>
        </div>
        
        <div class="space-y-16">
            <!-- 基础周期配置 -->
            <div class="grid lg:grid-cols-2 gap-16">
                <div class="space-y-8">
                    <h4 class="text-xl font-black text-indigo-600 uppercase tracking-widest border-b-4 border-indigo-600 pb-2">Phase 1 (研发期标准天数)</h4>
                    <div class="grid grid-cols-3 gap-6">
                        ${['sourcing', 'prod1', 'ship1'].map(k => `
                            <div class="space-y-3">
                                <label class="block text-[10px] font-black text-slate-700 uppercase tracking-widest">${k==='sourcing'?'分析/打样':k==='prod1'?'首批生产':'首批运输'}</label>
                                <input type="number" value="${state.config[k]}" onchange="updateConfig('${k}', this.value)" class="w-full px-4 py-3 border-4 border-slate-900 bg-white font-mono text-xl outline-none">
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="space-y-8">
                    <h4 class="text-xl font-black text-indigo-600 uppercase tracking-widest border-b-4 border-indigo-600 pb-2">Phase 2 (正式期标准天数)</h4>
                    <div class="grid grid-cols-4 gap-6">
                        ${['prep', 'test', 'prod2', 'ship2'].map(k => `
                            <div class="space-y-3">
                                <label class="block text-[10px] font-black text-slate-700 uppercase tracking-widest">${k==='prep'?'亚马逊准备':k==='test'?'推广测品':k==='prod2'?'大货生产':'大货运输'}</label>
                                <input type="number" value="${state.config[k]}" onchange="updateConfig('${k}', this.value)" class="w-full px-4 py-3 border-4 border-slate-900 bg-white font-mono text-xl outline-none">
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <!-- 春节不可抗力精准配置 (2026-2030) -->
            <div class="space-y-10">
                <h4 class="text-2xl font-black text-rose-600 uppercase tracking-widest border-b-4 border-rose-600 pb-4">春节断裂带精准配置 (2026 - 2030)</h4>
                <div class="grid md:grid-cols-2 xl:grid-cols-5 gap-10">
                    ${years.map(y => `
                        <div class="p-8 bg-slate-50 border-4 border-slate-900 relative">
                            <div class="absolute -top-6 -right-4 bg-rose-600 text-white px-6 py-2 border-4 border-slate-900 font-black text-xl">${y}</div>
                            
                            <!-- 工厂侧 -->
                            <div class="mb-8 space-y-4">
                                <div class="text-[10px] font-black text-indigo-600 uppercase tracking-widest border-b-2 border-indigo-100 pb-1">工厂节点 (Factory)</div>
                                <div class="grid grid-cols-1 gap-4">
                                    <div class="space-y-1">
                                        <span class="text-[10px] font-black text-slate-400 uppercase">停工日</span>
                                        <input type="date" value="${state.cnyConfig.customDates[y]?.factory?.start || ''}" onchange="updateCustomDate('${y}', 'factory', 'start', this.value)" class="w-full p-2 border-2 border-slate-900 text-sm">
                                    </div>
                                    <div class="space-y-1">
                                        <span class="text-[10px] font-black text-slate-400 uppercase">复工日</span>
                                        <input type="date" value="${state.cnyConfig.customDates[y]?.factory?.end || ''}" onchange="updateCustomDate('${y}', 'factory', 'end', this.value)" class="w-full p-2 border-2 border-slate-900 text-sm">
                                    </div>
                                </div>
                            </div>

                            <!-- 物流侧 -->
                            <div class="space-y-4">
                                <div class="text-[10px] font-black text-emerald-600 uppercase tracking-widest border-b-2 border-emerald-100 pb-1">物流节点 (Logistics)</div>
                                <div class="grid grid-cols-1 gap-4">
                                    <div class="space-y-1">
                                        <span class="text-[10px] font-black text-slate-400 uppercase">停发日</span>
                                        <input type="date" value="${state.cnyConfig.customDates[y]?.logistics?.start || ''}" onchange="updateCustomDate('${y}', 'logistics', 'start', this.value)" class="w-full p-2 border-2 border-slate-900 text-sm">
                                    </div>
                                    <div class="space-y-1">
                                        <span class="text-[10px] font-black text-slate-400 uppercase">恢复日</span>
                                        <input type="date" value="${state.cnyConfig.customDates[y]?.logistics?.end || ''}" onchange="updateCustomDate('${y}', 'logistics', 'end', this.value)" class="w-full p-2 border-2 border-slate-900 text-sm">
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    </div>
    `;
}

function renderLiveRecommendation(matrix: any[]) {
    const todayResults = matrix.find(m => m.month === TODAY_MONTH)?.results || [];
    const perfects = todayResults.filter((r: any) => r.grade === 'perfect').map((r: any) => state.productTypes.find((t: any) => t.id === r.typeId)?.name.split(' ')[0]);
    const goods = todayResults.filter((r: any) => r.grade === 'good').map((r: any) => state.productTypes.find((t: any) => t.id === r.typeId)?.name.split(' ')[0]);
    const warnings = todayResults.filter((r: any) => r.grade === 'warning').map((r: any) => {
        const typeName = state.productTypes.find((t: any) => t.id === r.typeId)?.name.split(' ')[0];
        const p1 = r.delays.prod1 || r.delays.ship1;
        const p2 = r.delays.prod2 || r.delays.ship2;
        let dText = p1 && p2 ? "首期/后期双重延误" : p1 ? "研发期撞春节" : "后期补货撞春节";
        return { name: typeName, delay: dText };
    });

    return `
    <div class="max-w-[1400px] mx-auto mb-16 animate-fade-in space-y-16">
        <div class="bg-white border-8 border-slate-900 p-12 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            <div class="flex flex-col lg:flex-row items-stretch lg:items-center gap-16">
                <div class="bg-slate-900 text-white p-12 flex flex-col items-center justify-center min-w-[200px] border-4 border-indigo-500">
                    <span class="text-[10px] font-black opacity-60 uppercase tracking-widest mb-4">当前系统月份</span>
                    <span class="text-8xl font-black font-mono tracking-normal">${TODAY_MONTH}月</span>
                </div>
                
                <div class="flex-grow space-y-12">
                    <h3 class="text-4xl font-black mb-8 flex items-center gap-6 uppercase border-b-4 border-slate-100 pb-4 tracking-normal">${ICONS.bulb} 实时雷达预判</h3>
                    <div class="flex flex-wrap gap-6">
                        ${perfects.map((p: string) => `<div class="px-8 py-5 bg-indigo-600 text-white border-4 border-slate-900 font-black text-xl flex items-center gap-4 tracking-normal">${ICONS.star} 完美节奏: ${p}</div>`).join('')}
                        ${goods.map((g: string) => `<div class="px-8 py-5 bg-emerald-500 text-white border-4 border-slate-900 font-black text-xl flex items-center gap-4 tracking-normal">${ICONS.check} 强烈推荐: ${g}</div>`).join('')}
                        ${warnings.map((w: any) => `<div class="px-8 py-5 bg-amber-400 text-slate-900 border-4 border-slate-900 font-black text-xl flex items-center gap-4 tracking-normal">${ICONS.alert} ${w.name}: ${w.delay}</div>`).join('')}
                        ${perfects.length === 0 && goods.length === 0 && warnings.length === 0 ? '<div class="text-slate-400 font-black text-2xl border-4 border-slate-200 border-dashed px-10 py-6">本月暂无特殊品类推荐</div>' : ''}
                    </div>
                </div>
                
                <div class="shrink-0">
                    <button onclick="selectMonth(${TODAY_MONTH})" class="px-12 py-8 bg-indigo-600 text-white border-8 border-slate-900 font-black text-xl hover:bg-slate-900 transition-all uppercase shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 tracking-widest">立即详查本月</button>
                </div>
            </div>
        </div>
    </div>
    `;
}

function renderSourcingDeadlineSheet() {
    const seasonalTypes = state.productTypes.filter((t: any) => t.type === 'seasonal');
    const deadlines: any[] = [];

    seasonalTypes.forEach((type: any) => {
        let immediateTarget: any = null;
        for (let offset = 0; offset < 24; offset++) {
            const mIdx = (TODAY_MONTH - 1 + offset) % 12;
            const yIdx = BASE_YEAR + Math.floor((TODAY_MONTH - 1 + offset) / 12);
            const res = calculateScenario(mIdx, type, yIdx);
            if (res.status === 'success') {
                immediateTarget = { year: res.peakInfo.targetYear, month: res.peakInfo.targetPeakMonth };
                break;
            }
        }

        if (immediateTarget) {
            let absoluteLatest: any = null;
            for (let offset = 0; offset < 18; offset++) {
                const mIdx = (TODAY_MONTH - 1 + offset) % 12;
                const yIdx = BASE_YEAR + Math.floor((TODAY_MONTH - 1 + offset) / 12);
                const res = calculateScenario(mIdx, type, yIdx);
                
                if (res.status === 'success' && 
                    res.peakInfo?.targetYear === immediateTarget.year && 
                    res.peakInfo?.targetPeakMonth === immediateTarget.month) {
                    
                    if (!absoluteLatest || res.dates.sourcingEnd.getTime() > absoluteLatest.dates.sourcingEnd.getTime()) {
                        absoluteLatest = res;
                    }
                }
            }
            
            if (absoluteLatest) {
                deadlines.push({
                    typeId: type.id,
                    name: type.name,
                    targetPeak: `${immediateTarget.year}年${immediateTarget.month}月`,
                    deadline: absoluteLatest.dates.sourcingEnd
                });
            }
        }
    });

    return `
    <div class="mb-16 max-w-[1400px] mx-auto animate-fade-in">
        <div class="bg-white border-8 border-slate-900 p-12 shadow-[12px_12px_0px_0px_rgba(225,29,72,1)]">
            <div class="flex items-center gap-6 mb-12 border-b-4 border-slate-900 pb-6">
                <span class="p-3 bg-rose-600 text-white border-4 border-slate-900">${ICONS.calendar}</span>
                <h3 class="font-black text-slate-900 text-3xl uppercase tracking-normal">研发保命红线·临界通牒</h3>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${deadlines.map(d => `
                    <div onclick="selectTypeAndScroll('${d.typeId}')" class="cursor-pointer border-4 border-slate-900 p-8 bg-white hover:bg-rose-50 transition-colors group">
                        <div class="text-[10px] font-black text-rose-600 uppercase mb-3 tracking-widest border-b-2 border-slate-100 pb-2">瞄准旺季: ${d.targetPeak}</div>
                        <div class="text-xl font-black text-slate-400 mb-2 uppercase tracking-widest">${d.name}</div>
                        <div class="text-4xl font-black text-slate-900 font-mono mb-4 group-hover:scale-105 transition-transform origin-left tracking-normal">${formatFullDate(d.deadline)}</div>
                        <div class="text-[10px] font-black uppercase inline-block px-4 py-3 border-2 border-slate-900 bg-slate-900 text-white tracking-widest">打样必须在此日期前结案，否则错过该旺季</div>
                    </div>
                `).join('')}
            </div>
            <p class="mt-8 text-[10px] font-black text-slate-400 uppercase tracking-widest italic">注：此看板排除常青款，仅展示距离当下最近的一个旺季物理目标的最后上车机会。过期即宣告品类年度报废。</p>
        </div>
    </div>
    `;
}

function renderOverviewMatrix(matrix: any[]) {
    return `
      <div class="mb-16 max-w-[1400px] mx-auto animate-fade-in">
        <div class="bg-white border-8 border-slate-900 overflow-hidden shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            <div class="px-12 py-10 border-b-8 border-slate-900 bg-slate-100 flex justify-between items-center flex-wrap gap-8">
                <h3 class="font-black text-slate-900 text-3xl uppercase tracking-normal flex items-center gap-6">📌 全景启动决策沙盘</h3>
                <div class="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-900">
                    <div class="flex items-center gap-3"><span class="w-5 h-5 border-4 border-slate-900 bg-indigo-500"></span> 完美</div>
                    <div class="flex items-center gap-3"><span class="w-5 h-5 border-4 border-slate-900 bg-emerald-500"></span> 推荐</div>
                    <div class="flex items-center gap-3"><span class="w-5 h-5 border-4 border-slate-900 bg-amber-400"></span> 注意</div>
                    <div class="flex items-center gap-3"><span class="w-5 h-5 border-4 border-slate-900 bg-slate-200"></span> 禁止</div>
                </div>
            </div>
            <div class="overflow-x-auto scrollbar-hide">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="text-sm font-black text-slate-900 uppercase tracking-widest border-b-4 border-slate-900">
                            <th class="px-12 py-8 w-44 text-center border-r-4 border-slate-900 bg-white sticky left-0 z-10">启动节点</th>
                            ${state.productTypes.map((t: any) => `<th class="px-6 py-8 text-center border-r-2 border-slate-200 font-black bg-white tracking-normal">${t.name}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody class="divide-y-4 divide-slate-900">
                        ${matrix.map(row => `
                            <tr class="${row.month === TODAY_MONTH ? 'bg-indigo-100/50' : 'bg-white'}">
                                <td class="px-12 py-10 font-black text-slate-900 text-center border-r-4 border-slate-900 sticky left-0 z-10 ${row.month === TODAY_MONTH ? 'bg-indigo-600 text-white' : 'bg-slate-100'}">
                                    <div class="text-5xl font-mono tracking-normal">${row.month}月</div>
                                </td>
                                ${row.results.map((res: any) => {
                                    let label = '', colorClass = 'bg-slate-100 opacity-20';
                                    const isCurrent = state.selectedTypeId === res.typeId && state.selectedMonth === row.month;
                                    if (res.grade === 'perfect') { colorClass = 'bg-indigo-500'; label = '完美'; }
                                    else if (res.grade === 'good') { colorClass = 'bg-emerald-500'; label = '推荐'; }
                                    else if (res.grade === 'warning') { colorClass = 'bg-amber-400'; label = '注意'; }
                                    else { label = res.shortFailReason || '禁止'; }

                                    return `
                                    <td class="p-3 border-r-2 border-slate-200">
                                        <div onclick="selectTypeAndMonth('${res.typeId}', ${row.month})" 
                                             class="cursor-pointer h-28 w-full flex flex-col items-center justify-center transition-all border-4 
                                             ${isCurrent ? 'bg-white border-slate-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -translate-y-1' : 'border-transparent hover:border-slate-300 hover:bg-slate-50'}">
                                            <div class="w-6 h-6 border-4 border-slate-900 mb-3 ${colorClass}"></div>
                                            <span class="text-[10px] font-black uppercase tracking-widest text-slate-900">${label}</span>
                                        </div>
                                    </td>`;
                                }).join('')}
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    `;
}

function renderGrid(results: any[]) {
    return `
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-24 max-w-[1400px] mx-auto px-4 md:px-0">
        ${results.map(r => {
             const isSelected = state.selectedMonth === r.startMonth;
             const isToday = r.startMonth === TODAY_MONTH;
             let styleClass = "border-slate-300 bg-white opacity-40 grayscale";
             let statusLabel = "禁止启动";
             if (r.grade === 'perfect') { styleClass = "border-slate-900 bg-white"; statusLabel = "完美节点"; }
             else if (r.grade === 'good') { styleClass = "border-slate-900 bg-white"; statusLabel = "推荐启动"; }
             else if (r.grade === 'warning') { styleClass = "border-slate-900 bg-white"; statusLabel = "风险启动"; }
             if (isSelected) styleClass = "border-slate-900 bg-indigo-50 shadow-[12px_12px_0px_0px_rgba(79,70,229,1)] -translate-y-4 grayscale-0 opacity-100";

             return `
                <button onclick="selectMonth(${r.startMonth})" class="flex flex-col items-center p-12 border-4 transition-all group ${styleClass}">
                    <div class="text-6xl font-black text-slate-900 mb-4 font-mono tracking-normal">${r.startMonth}月</div>
                    <div class="text-[10px] font-black uppercase tracking-widest text-slate-500">${statusLabel}</div>
                    ${isToday ? `<div class="mt-6 text-[10px] font-black bg-slate-900 text-white px-4 py-2 border-2 border-slate-900 uppercase tracking-widest">LIVE</div>` : ''}
                </button>
             `;
        }).join('')}
      </div>
    `;
}

function renderDetailView(results: any[]) {
  if (!state.selectedMonth) return '';
  const data = results.find(r => r.startMonth === state.selectedMonth);
  if (!data) return '';

  const themeMap: any = {
      perfect: { bg: 'bg-indigo-600', text: 'text-white', btn: 'bg-white text-slate-900' },
      good: { bg: 'bg-emerald-500', text: 'text-white', btn: 'bg-white text-slate-900' },
      warning: { bg: 'bg-amber-400', text: 'text-slate-900', btn: 'bg-white text-slate-900' },
      fail: { bg: 'bg-rose-600', text: 'text-white', btn: 'bg-white text-slate-900' }
  };
  const theme = themeMap[data.grade];

  return `
    <div id="detail-view" class="bg-white border-8 border-slate-900 animate-fade-in mb-48 max-w-[1400px] mx-auto shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
      <div class="px-20 py-16 border-b-8 border-slate-900 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 ${theme.bg} ${theme.text}">
        <div class="space-y-6">
          <h2 class="text-7xl font-black uppercase tracking-normal">
             ${data.startMonth}月 节点透视
             <span class="text-xl px-10 py-3 border-4 border-slate-900 ${theme.btn} font-black uppercase tracking-widest ml-10">
                ${data.grade.toUpperCase()}
             </span>
          </h2>
          <div class="space-y-4">
              ${data.failReason ? `<div class="text-2xl font-black border-4 border-slate-900 px-10 py-5 inline-block uppercase bg-slate-900 text-white tracking-widest">${data.failReason}</div>` : ''}
              ${data.cnyWarning ? `<div class="text-xl font-black bg-white text-slate-900 border-4 border-slate-900 px-10 py-5 flex items-center gap-6 uppercase tracking-widest">${ICONS.alert} ${data.cnyWarning}</div>` : ''}
          </div>
        </div>
        <button onclick="selectMonth(null)" class="p-6 border-8 border-slate-900 hover:invert transition-all active:scale-90">${ICONS.xCircle}</button>
      </div>
      <div class="p-20">
        <div class="grid lg:grid-cols-2 gap-32">
            <div class="space-y-16">
              <h3 class="text-3xl font-black text-slate-900 uppercase border-b-8 border-slate-900 pb-4 flex items-center justify-between tracking-normal">
                 <span>研发/选品 Phase 1</span>
              </h3>
              ${renderTimelineStep("打样决策与结案", data.dates.start, data.dates.sourcingEnd, state.config.sourcing, 1)}
              ${renderTimelineStep("首批产品实产", data.dates.prod1Start, data.dates.prod1End, state.config.prod1, 2, false, data.delays.prod1?"工厂春节停工延误":null)}
              ${renderTimelineStep("首批头程物流", data.dates.prod1End, data.dates.ship1End, state.config.ship1, 3, false, data.delays.ship1?"物流春节停发延误":null)}
              ${renderTimelineStep("上架前置准备", data.dates.ship1End, data.dates.prepEnd, state.config.prep, 4)}
            </div>
            <div class="space-y-16">
              <h3 class="text-3xl font-black text-slate-900 uppercase border-b-8 border-slate-900 pb-4 flex items-center justify-between tracking-normal">
                 <span>测品/爆发 Phase 2</span>
              </h3>
              <div class="p-12 border-8 border-slate-900 bg-slate-50 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
                <div class="text-[10px] font-black text-slate-500 uppercase mb-4 tracking-widest">测品流量起始点</div>
                <div class="text-7xl font-black text-slate-900 font-mono tracking-normal">${formatFullDate(data.dates.promoStart)}</div>
              </div>
              ${renderTimelineStep("推广阶段测款", data.dates.promoStart, data.dates.testEnd, state.config.test, 5)}
              ${renderTimelineStep("大货补货生产", data.dates.prod2Start, data.dates.prod2End, state.config.prod2, 6, false, data.delays.prod2?"年后复工排单拥挤":null)}
              ${renderTimelineStep("大货头程运输", data.dates.prod2End, data.dates.ship2End, state.config.ship2, 7, true, data.delays.ship2?"补货物流时效预警":null)}
              ${data.peakInfo ? `
                <div class="mt-24 p-12 border-8 border-double border-slate-900">
                  <h4 class="font-black text-3xl mb-12 text-slate-900 uppercase border-b-4 border-slate-100 pb-4 tracking-normal">战役推演结论</h4>
                  <div class="grid grid-cols-2 gap-16 mb-12">
                    <div class="space-y-4">
                        <div class="text-[10px] font-black text-slate-400 uppercase tracking-widest">正式入库预估</div>
                        <div class="text-4xl font-black text-slate-900 font-mono tracking-normal">${data.peakInfo.arrivalDate}</div>
                    </div>
                    <div class="space-y-4">
                        <div class="text-[10px] font-black text-slate-400 uppercase tracking-widest">目标旺季波峰</div>
                        <div class="text-4xl font-black text-indigo-600 font-mono tracking-normal">${data.peakInfo.targetYear}/${data.peakInfo.targetPeakMonth}</div>
                    </div>
                  </div>
                  <div class="py-8 px-12 border-4 border-slate-900 font-black text-2xl uppercase flex items-center gap-8 ${!data.peakInfo.missed ? 'bg-indigo-600 text-white' : 'bg-rose-100 text-rose-600'} tracking-widest">
                    ${!data.peakInfo.missed ? ICONS.star : ICONS.xCircle} ${!data.peakInfo.missed ? '完美踩点：旺季收割' : '遗憾错过：彻底失手'}
                  </div>
                </div>
              ` : ''}
            </div>
        </div>
      </div>
    </div>
  `;
}

function renderTimelineStep(title: string, start: Date, end: Date, planned: number, step: number, isFinal = false, warning: string | null = null) {
  const diff = Math.ceil(Math.abs(end.getTime() - start.getTime()) / 86400000);
  const isDelayed = diff > planned + 2;
  return `
    <div class="relative flex gap-12 group">
      ${!isFinal ? '<div class="absolute left-8 top-24 bottom-[-72px] w-2 bg-slate-900"></div>' : ''}
      <div class="z-10 flex-shrink-0 pt-6">
        <div class="w-16 h-16 border-4 border-slate-900 bg-white flex items-center justify-center font-black text-3xl transition-all group-hover:bg-slate-900 group-hover:text-white tracking-normal">
          ${step}
        </div>
      </div>
      <div class="flex-grow p-12 border-4 border-slate-900 bg-white transition-all border-b-8 border-r-8 hover:translate-x-1 hover:translate-y-1">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-6 border-b-4 border-slate-50 pb-6">
            <h4 class="font-black text-slate-900 text-2xl uppercase tracking-normal">${title}</h4>
            <span class="text-lg font-black font-mono bg-slate-900 text-white px-6 py-2 border-4 border-slate-900 tracking-normal">${formatFullDate(end)}</span>
        </div>
        <div class="flex gap-12 text-[10px] font-black uppercase tracking-widest text-slate-500">
            <span>标准用时: ${planned}D</span>
            ${isDelayed ? `<span class="text-rose-600 border-b-4 border-rose-600 tracking-widest">实际耗时: ${diff}D</span>` : ''}
        </div>
        ${warning ? `<div class="mt-10 text-lg font-black uppercase flex items-center gap-6 px-10 py-5 bg-rose-600 text-white border-4 border-slate-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] animate-pulse tracking-widest">${ICONS.alert} ${warning}</div>` : ''}
      </div>
    </div>
  `;
}

function renderApp() {
  const { currentResults, matrix } = calculateAllResults();
  
  document.getElementById('app')!.innerHTML = `
    <div class="max-w-[1600px] mx-auto pb-80 px-8 md:px-14">
      <header class="mb-24 pt-24 flex flex-col md:flex-row justify-between items-start md:items-center gap-16 border-b-8 border-slate-900 pb-20">
        <div class="space-y-6">
            <h1 class="text-7xl md:text-9xl font-black text-slate-900 flex flex-wrap items-center gap-10 tracking-normal">
               <span class="uppercase">开品节奏雷达</span>
            </h1>
            <p class="text-slate-900 text-2xl font-black uppercase tracking-[0.4em] ml-2">GLOBAL SUPPLY CHAIN RADAR v18.0 PRECISION</p>
        </div>
        <button onclick="toggleConfig()" class="bg-white border-8 border-slate-900 px-12 py-8 text-2xl font-black transition-all hover:bg-slate-900 hover:text-white uppercase shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] flex items-center gap-6 tracking-widest whitespace-nowrap">${ICONS.settings} <span>系统参数</span></button>
      </header>

      ${renderConfigPanel()}
      ${renderLiveRecommendation(matrix)}
      ${renderSourcingDeadlineSheet()}
      ${renderOverviewMatrix(matrix)}
      
      <div class="mb-32 max-w-[1400px] mx-auto">
        <div class="flex items-center gap-12 mb-20">
            <h3 class="font-black text-slate-900 text-5xl uppercase flex items-center gap-8 tracking-normal">
                <span class="w-8 h-16 bg-indigo-600 border-4 border-slate-900"></span> 核心品类推演
            </h3>
            <div class="flex-grow border-b-8 border-slate-900"></div>
        </div>
        
        <div class="flex flex-wrap gap-8">
            ${state.productTypes.map((t: any) => `
                <button onclick="selectType('${t.id}')" 
                        class="px-16 py-10 border-8 uppercase font-black text-2xl transition-all tracking-widest
                        ${state.selectedTypeId === t.id ? 'bg-slate-900 text-white border-slate-900 shadow-[10px_10px_0px_0px_rgba(79,70,229,1)] -translate-y-4' : 'bg-white text-slate-300 border-slate-200 hover:border-slate-900 hover:text-slate-900 hover:-translate-y-2'}">
                    ${t.name}
                </button>`).join('')}
        </div>
      </div>

      ${renderGrid(currentResults)}
      ${renderDetailView(currentResults)}
      
      <footer class="text-center text-slate-900 text-lg font-black uppercase tracking-[0.8em] mt-80 pb-40 border-t-8 border-slate-900 pt-32">GLOBAL SUPPLY CHAIN RADAR & INTELLIGENCE</footer>
    </div>
  `;
}

const win = window as any;
win.toggleConfig = () => { state.showConfig = !state.showConfig; renderApp(); };
win.updateConfig = (k: string, v: string) => { state.config[k] = parseInt(v)||0; renderApp(); };
win.updateCustomDate = (year: string, type: string, field: string, val: string) => { 
    if(!state.cnyConfig.customDates[year]) state.cnyConfig.customDates[year] = { factory: {}, logistics: {} };
    if(!state.cnyConfig.customDates[year][type]) state.cnyConfig.customDates[year][type] = {};
    state.cnyConfig.customDates[year][type][field] = val; renderApp(); 
};
win.selectType = (id: string) => { state.selectedTypeId = id; renderApp(); };
win.selectTypeAndScroll = (id: string) => {
    state.selectedTypeId = id;
    renderApp();
    setTimeout(() => {
        const detail = document.getElementById('detail-view');
        if (detail) detail.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
};
win.selectTypeAndMonth = (id: string, m: number) => { 
    state.selectedTypeId = id; state.selectedMonth = m; renderApp(); 
    setTimeout(() => {
        const detail = document.getElementById('detail-view');
        if (detail) detail.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100); 
};
win.selectMonth = (m: number | null) => { 
    state.selectedMonth = m; renderApp(); 
    if(m) setTimeout(() => {
        const detail = document.getElementById('detail-view');
        if (detail) detail.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 50); 
};

document.addEventListener('DOMContentLoaded', renderApp);
renderApp();