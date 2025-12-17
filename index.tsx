// --- ICONS (Raw SVG Strings) ---
const ICONS = {
  settings: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.39a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  alert: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  xCircle: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  info: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
  plus: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  trash: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`,
  calendar: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
  truck: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>`,
  thumbUp: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>`,
  bulb: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>`,
  book: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  anchor: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/></svg>`,
  factory: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><line x1="17" y1="13" x2="17" y2="13.01"/><line x1="17" y1="17" x2="17" y2="17.01"/></svg>`,
  star: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
};

const BASE_YEAR = new Date().getFullYear();

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

// --- LOGIC FUNCTIONS ---
const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const formatInputDate = (date) => {
  return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
};

// Initialize Custom Dates based on Defaults
const initCustomDates = () => {
  const map = {};
  const years = [BASE_YEAR, BASE_YEAR + 1, BASE_YEAR + 2];
  
  // Default offsets
  const facShutdown = 19;
  const facResume = 25;
  const logShutdown = 10;
  const logResume = 15;

  years.forEach(y => {
      const cnyStr = DEFAULT_CNY_DATES[y];
      if (cnyStr) {
          const cny = new Date(cnyStr);
          map[y] = {
              factory: {
                  start: formatInputDate(addDays(cny, -facShutdown)),
                  end: formatInputDate(addDays(cny, facResume))
              },
              logistics: {
                  start: formatInputDate(addDays(cny, -logShutdown)),
                  end: formatInputDate(addDays(cny, logResume))
              }
          };
      }
  });
  return map;
};

// Global State
let state = {
  config: { ...DEFAULT_CONFIG },
  cnyConfig: {
      customDates: initCustomDates()
  },
  showConfig: false,
  showRules: false,
  productTypes: [
    { id: '1', name: '无季节常青款', type: 'evergreen', peakMonths: [] },
    { id: '2', name: '冬季旺季 (11-12月)', type: 'seasonal', peakMonths: [11, 12] },
    { id: '3', name: '夏季旺季 (5-6月)', type: 'seasonal', peakMonths: [5, 6] },
    { id: '4', name: '返校季 (7-8月)', type: 'seasonal', peakMonths: [7, 8] },
    { id: '5', name: '情人节 (1-2月)', type: 'seasonal', peakMonths: [1, 2] },
    { id: '6', name: '复活节 (3-4月)', type: 'seasonal', peakMonths: [3, 4] },
    { id: '7', name: '万圣节 (9-10月)', type: 'seasonal', peakMonths: [9, 10] },
  ],
  selectedTypeId: '1',
  selectedMonth: null,
  isAddingType: false,
  newTypeName: '',
  newTypeSeason: 'seasonal',
  newTypePeaks: []
};


// Now reads from customDates
const getCNYTimeline = (year, type) => {
    const cfg = state.cnyConfig.customDates[year];
    if (!cfg) return null;
    
    const target = cfg[type];
    if (!target) return null;

    return {
        shutdown: new Date(target.start),
        resume: new Date(target.end)
    };
};

const calculatePhaseWithCNY = (scheduledStart, duration, type) => {
    let actualStart = new Date(scheduledStart);
    let delayOccurred = false;

    const yearsToCheck = [scheduledStart.getFullYear(), scheduledStart.getFullYear() + 1];
    
    // 1. Check if START date falls inside a shutdown
    for (const y of yearsToCheck) {
        const timeline = getCNYTimeline(y, type);
        if (!timeline) continue;
        if (scheduledStart > timeline.shutdown && scheduledStart < timeline.resume) {
             actualStart = new Date(timeline.resume);
             delayOccurred = true;
             break; 
        }
    }

    // 2. Walk through duration
    let daysRemaining = duration;
    let currentCursor = new Date(actualStart);
    
    // Safety loop
    for (const y of [currentCursor.getFullYear(), currentCursor.getFullYear() + 1]) {
        const timeline = getCNYTimeline(y, type);
        if (!timeline) continue;

        if (currentCursor < timeline.shutdown) {
            const daysToShutdown = Math.ceil((timeline.shutdown.getTime() - currentCursor.getTime()) / (1000 * 3600 * 24));
            
            if (daysToShutdown < daysRemaining) {
                daysRemaining -= daysToShutdown;
                currentCursor = new Date(timeline.resume);
                delayOccurred = true;
            } else {
                break;
            }
        } else if (currentCursor >= timeline.shutdown && currentCursor < timeline.resume) {
             currentCursor = new Date(timeline.resume);
             delayOccurred = true;
        }
    }

    const finalEnd = addDays(currentCursor, daysRemaining);
    return { start: actualStart, end: finalEnd, delayed: delayOccurred };
};

const formatDate = (date) => {
  return `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}`;
};

const formatFullDate = (date) => {
  return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
};

const hitsQ4Promotion = (date) => {
  const m = date.getMonth();
  return m === 9 || m === 10;
};

const calculateScenario = (startM, typeConfig) => {
    const start = new Date(BASE_YEAR, startM, 1);
    
    let status = 'success';
    let failReason = undefined;
    let shortFailReason = ""; 
    let cnyWarning = ""; 
    let peakInfo = undefined;
    let promoStrategy = null;
    let grade = 'fail'; // perfect, good, warning, fail

    const sourcingEnd = addDays(start, state.config.sourcing);
    
    // Prod use Factory timeline
    const prod1Calc = calculatePhaseWithCNY(sourcingEnd, state.config.prod1, 'factory');
    // Ship use Logistics timeline
    const ship1Calc = calculatePhaseWithCNY(prod1Calc.end, state.config.ship1, 'logistics');
    
    let prepEnd = addDays(ship1Calc.end, state.config.prep);
    let promoStart = new Date(prepEnd);
    
    // --- Q4 Strategy Check ---
    const promoMonth = promoStart.getMonth(); // 0-11
    
    if (promoMonth === 11) {
        // Dec (11) -> Wait for Jan
        const nextYear = promoStart.getFullYear() + 1;
        promoStart = new Date(nextYear, 0, 1); // Move to Jan 1
        promoStrategy = "推迟至1月启动 (避开12月)";
    }

    // Recalculate Test Phase based on potentially shifted promoStart
    const testEnd = addDays(promoStart, state.config.test);
    
    // Prod2 use Factory
    const prod2Calc = calculatePhaseWithCNY(testEnd, state.config.prod2, 'factory');
    // Ship2 use Logistics
    const ship2Calc = calculatePhaseWithCNY(prod2Calc.end, state.config.ship2, 'logistics');
    
    // --- Priority Logic ---
    // 1. Seasonal Miss (Top Priority)
    // 2. Q4 (Oct/Nov)
    // 3. Warnings (CNY, Near Miss)

    if (typeConfig.type === 'seasonal') {
        const peaks = typeConfig.peakMonths || [];
        const peakStartMonth = peaks[0]; 
        
        // --- NEW TARGETING LOGIC ---
        // Rule: Identify the *Immediate Next* Peak relative to the Start Month.
        // If StartMonth < PeakMonth -> Target is THIS YEAR.
        // If StartMonth >= PeakMonth -> Target is NEXT YEAR.
        
        let targetYear = start.getFullYear();
        // startM is 0-indexed (0=Jan), peakStartMonth is 1-indexed (1=Jan)
        const currentMonthIndex = startM + 1;
        
        if (currentMonthIndex >= peakStartMonth) {
            targetYear += 1; // Missed this year's start, aiming for next year
        }
        
        const targetPeak = new Date(targetYear, peakStartMonth - 1, 1);
        
        // --- CHECK IF WE MAKE IT ---
        // Allow 20 days late tolerance
        const cutoff = addDays(targetPeak, 20);
        
        if (ship2Calc.end <= cutoff) {
             const isLate = ship2Calc.end > targetPeak;
             peakInfo = {
                targetPeakMonth: peakStartMonth,
                arrivalMonth: ship2Calc.end.getMonth() + 1,
                arrivalDate: formatDate(ship2Calc.end),
                targetYear: targetPeak.getFullYear(),
                missed: false,
                nearMiss: isLate // arrived late but within 20 days
            };
            
            // Check Q4 Failure
            if (hitsQ4Promotion(promoStart)) {
                status = 'fail';
                failReason = "推广期撞上Q4 (10-11月)，不接受等待";
                shortFailReason = "撞Q4不可等";
            } 
            // Check Near Miss (Green Warning)
            else if (isLate) {
                // Warning added to CNY/Status, doesn't cause failure
            }

        } else {
            // Failed to hit the identified target
            status = 'fail';
            failReason = `赶不上${targetYear}年${peakStartMonth}月旺季 (大货${formatDate(ship2Calc.end)}到仓)`;
            shortFailReason = "错过旺季";
            peakInfo = { 
                missed: true, 
                targetPeakMonth: peakStartMonth, 
                targetYear: targetYear,
                arrivalDate: formatDate(ship2Calc.end)
            };
        }
    } else {
        // Evergreen logic
        if (hitsQ4Promotion(promoStart)) {
            status = 'fail';
            failReason = "推广期撞上Q4 (10-11月)，不接受等待";
            shortFailReason = "撞Q4不可等";
        }
    }

    // --- WARNING COLLECTION (CNY & Peak Delay) ---
    // Collect all delays to form the warning string
    let warnings = [];
    
    // 1. Peak Delay Warning
    if (status === 'success' && peakInfo && peakInfo.nearMiss) {
        warnings.push("旺季延误(20天内)");
    }
    
    // 2. CNY Delays (Detailed)
    if (status === 'success') {
        if (prod1Calc.delayed || ship1Calc.delayed) warnings.push("首批撞春节");
        if (prod2Calc.delayed || ship2Calc.delayed) warnings.push("补货撞春节");
    }

    if (warnings.length > 0) {
        cnyWarning = warnings.join(" | ");
    } else {
        cnyWarning = null;
    }

    // --- GRADING SYSTEM ---
    // Determine the final recommendation grade
    if (status === 'fail') {
        grade = 'fail';
    } else {
        if (cnyWarning) {
            grade = 'warning';
        } else {
            grade = 'good';
        }

        // PERFECT RHYTHM CHECK
        // Criteria: Seasonal Product AND Arrival is in Peak Month OR Month Prior
        // Note: We check month equality, so it doesn't matter if it's slightly delayed into the month (nearMiss) as long as it's the right month.
        if (typeConfig.type === 'seasonal' && peakInfo && !peakInfo.missed) {
            const arrivalM = ship2Calc.end.getMonth() + 1;
            const peakM = peakInfo.targetPeakMonth;
            const prevPeakM = peakM === 1 ? 12 : peakM - 1;
            
            if (arrivalM === peakM || arrivalM === prevPeakM) {
                grade = 'perfect';
            }
        }
    }

    return {
      startMonth: startM + 1,
      status,
      grade,
      failReason,
      shortFailReason,
      cnyWarning,
      promoStrategy,
      delays: { 
          prod1: prod1Calc.delayed, 
          ship1: ship1Calc.delayed, 
          prod2: prod2Calc.delayed,
          ship2: ship2Calc.delayed
      },
      dates: {
        start, sourcingEnd, 
        prod1Start: prod1Calc.start, prod1End: prod1Calc.end, 
        ship1End: ship1Calc.end, prepEnd, promoStart, testEnd, 
        prod2Start: prod2Calc.start, prod2End: prod2Calc.end, ship2End: ship2Calc.end 
      },
      peakInfo
    };
};

const calculateAllResults = () => {
    const currentType = state.productTypes.find(t => t.id === state.selectedTypeId) || state.productTypes[0];
    const currentResults = [];
    const matrix = [];

    // Calc Current
    for (let i = 0; i < 12; i++) currentResults.push(calculateScenario(i, currentType));

    // Calc Matrix
    for (let i = 0; i < 12; i++) {
        const row = { month: i + 1, results: [] };
        state.productTypes.forEach(t => {
             row.results.push({ typeId: t.id, ...calculateScenario(i, t) });
        });
        matrix.push(row);
    }
    return { currentResults, matrix };
};

// --- RENDERERS ---

function renderRulesPanel() {
    if (!state.showRules) return '';
    return `
        <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in" onclick="toggleRules()">
            <div class="bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden" onclick="event.stopPropagation()">
                <div class="px-6 py-4 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
                    <h3 class="font-bold text-slate-800 text-lg flex items-center gap-2"><span class="text-blue-600">${ICONS.book}</span> 系统逻辑说明</h3>
                    <button onclick="toggleRules()" class="p-2 hover:bg-slate-200 rounded-full text-slate-500">${ICONS.xCircle}</button>
                </div>
                <div class="p-6 md:p-8 space-y-6 text-slate-700 overflow-y-auto max-h-[80vh]">
                    <div class="flex gap-4">
                         <div class="flex-shrink-0 w-10 h-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold">1</div>
                         <div>
                            <h4 class="font-bold text-slate-900 mb-1">优先级与否决条件 (Priority)</h4>
                            <ul class="text-sm text-slate-600 space-y-1">
                                <li><span class="text-rose-600 font-bold">1. 错过旺季</span>: 根据开品时间锁定最近一次旺季，若赶不上（>旺季开始+20天），直接否决。</li>
                                <li><span class="text-rose-600 font-bold">2. 撞Q4</span>: 推广期落在10月/11月，否决。</li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex gap-4">
                        <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">2</div>
                        <div>
                            <h4 class="font-bold text-slate-900 mb-1">旺季定标逻辑</h4>
                            <p class="text-sm text-slate-600">
                                若开品月份 < 旺季月份 ➔ 目标为<b>当年</b>旺季。<br>
                                若开品月份 ≥ 旺季月份 ➔ 目标为<b>次年</b>旺季。
                            </p>
                        </div>
                    </div>
                    <div class="flex gap-4">
                         <div class="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold">3</div>
                         <div>
                            <h4 class="font-bold text-slate-900 mb-1">推荐等级 (完美节奏)</h4>
                            <p class="text-sm text-slate-600">
                              <span class="text-indigo-600 font-bold">完美节奏</span>：补货到仓时间刚好卡在【旺季当月】或【旺季前1个月】，不早不晚，库存流转效率最高。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderConfigPanel() {
  if (!state.showConfig) return '';
  const labelMap = { sourcing: '选品/样品', prod1: '首批生产', ship1: '首批物流', prep: '上架准备', test: '推广测试', prod2: '补货生产', ship2: '补货物流' };
  
  const years = [BASE_YEAR, BASE_YEAR + 1, BASE_YEAR + 2];
  const customDates = state.cnyConfig.customDates;

  return `
    <div class="bg-white p-6 rounded-2xl shadow-xl border border-slate-200 animate-fade-in mb-10 max-w-7xl mx-auto">
      <div class="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
        <h3 class="font-bold text-slate-800 flex items-center gap-2 text-base"><span class="text-blue-600">${ICONS.settings}</span> 周期参数 (天)</h3>
        <button onclick="toggleConfig()" class="text-slate-400 hover:text-slate-600 p-2">${ICONS.xCircle}</button>
      </div>
      
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-8">
        ${Object.entries(state.config).map(([k, v]) => `
           <div class="flex flex-col"><label class="text-xs text-slate-500 font-semibold mb-1.5">${labelMap[k]}</label><input type="number" value="${v}" onchange="updateConfig('${k}', this.value)" class="w-full p-2.5 border border-slate-200 rounded-lg text-sm font-mono shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" /></div>
        `).join('')}
      </div>

      <div class="border-t border-slate-100 pt-6">
        <h3 class="font-bold text-slate-800 flex items-center gap-2 text-base mb-6"><span class="text-rose-600">${ICONS.calendar}</span> 春节停工日期配置 (具体日期)</h3>
        <div class="overflow-x-auto">
            <table class="w-full text-sm text-left">
                <thead class="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
                    <tr>
                        <th class="px-4 py-3">年份</th>
                        <th class="px-4 py-3 text-rose-600"><div class="flex items-center gap-1">${ICONS.factory} 工厂停工开始</div></th>
                        <th class="px-4 py-3 text-rose-600"><div class="flex items-center gap-1">${ICONS.factory} 工厂复工日期</div></th>
                        <th class="px-4 py-3 text-blue-600"><div class="flex items-center gap-1">${ICONS.anchor} 物流停运开始</div></th>
                        <th class="px-4 py-3 text-blue-600"><div class="flex items-center gap-1">${ICONS.anchor} 物流恢复日期</div></th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                    ${years.map(y => {
                        const d = customDates[y] || { factory: {}, logistics: {} };
                        return `
                        <tr>
                            <td class="px-4 py-3 font-bold text-slate-700">${y}</td>
                            <td class="px-4 py-2"><input type="date" value="${d.factory.start}" onchange="updateCustomDate(${y}, 'factory', 'start', this.value)" class="p-2 border border-slate-200 rounded text-xs font-mono w-36 focus:ring-2 focus:ring-rose-500 outline-none"/></td>
                            <td class="px-4 py-2"><input type="date" value="${d.factory.end}" onchange="updateCustomDate(${y}, 'factory', 'end', this.value)" class="p-2 border border-slate-200 rounded text-xs font-mono w-36 focus:ring-2 focus:ring-rose-500 outline-none"/></td>
                            <td class="px-4 py-2"><input type="date" value="${d.logistics.start}" onchange="updateCustomDate(${y}, 'logistics', 'start', this.value)" class="p-2 border border-slate-200 rounded text-xs font-mono w-36 focus:ring-2 focus:ring-blue-500 outline-none"/></td>
                            <td class="px-4 py-2"><input type="date" value="${d.logistics.end}" onchange="updateCustomDate(${y}, 'logistics', 'end', this.value)" class="p-2 border border-slate-200 rounded text-xs font-mono w-36 focus:ring-2 focus:ring-blue-500 outline-none"/></td>
                        </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  `;
}

function renderOverviewMatrix(matrix, globalAdvice) {
    return `
      <div class="mb-12 max-w-[1400px] mx-auto">
        <div class="flex items-start gap-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl mb-8 text-slate-700 shadow-sm">
            <div class="text-blue-500 mt-1">${ICONS.bulb}</div>
            <div class="flex-1">
                <p class="font-bold text-blue-900 mb-2 text-lg">年度开品策略建议</p>
                <div class="space-y-1 text-sm md:text-base leading-relaxed">
                    <p>黄金窗口：<span class="font-black text-blue-700 text-lg">${globalAdvice.best}</span>。</p>
                </div>
            </div>
        </div>
        <div class="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
            <div class="px-6 py-5 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center flex-wrap gap-4">
                <h3 class="font-bold text-slate-800 text-lg">📅 ${BASE_YEAR} 全景沙盘</h3>
                <div class="flex gap-4 text-xs font-medium flex-wrap">
                    <div class="flex items-center gap-1.5"><span class="w-4 h-4 rounded bg-indigo-50 border border-indigo-300 text-indigo-600 flex items-center justify-center shadow-sm"><span class="scale-75">${ICONS.star}</span></span> 完美节奏</div>
                    <div class="flex items-center gap-1.5"><span class="w-4 h-4 rounded bg-white border border-emerald-400 flex items-center justify-center text-[10px] text-emerald-600 shadow-sm">${ICONS.check}</span> 推荐</div>
                    <div class="flex items-center gap-1.5"><span class="w-4 h-4 rounded bg-white border border-emerald-400 flex items-center justify-center text-[10px] text-amber-600 shadow-sm">${ICONS.check}</span> 推荐(有延误)</div>
                    <div class="flex items-center gap-1.5"><span class="w-4 h-4 rounded bg-slate-100 border border-slate-300"></span> 不可行</div>
                </div>
            </div>
            <div class="overflow-x-auto pb-2">
                <table class="w-full text-sm text-left border-collapse">
                    <thead class="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-100">
                        <tr><th class="px-4 py-4 font-bold w-16 text-center border-r border-slate-100 bg-slate-100/50 sticky left-0 z-10">开品</th>${state.productTypes.map(t => `<th class="px-3 py-4 font-bold text-center border-r border-slate-100"><div class="text-slate-800 text-sm">${t.name.split(' ')[0]}</div><div class="text-[10px] text-slate-400">${t.name.match(/\(.*\)/)?.[0] || '全年'}</div></th>`).join('')}</tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        ${matrix.map(row => `
                            <tr class="hover:bg-slate-50 transition-colors group">
                                <td class="px-4 py-3 font-bold text-slate-700 text-center bg-slate-50/50 border-r border-slate-100 sticky left-0 z-10">${row.month}月</td>
                                ${row.results.map(res => {
                                    let content = '', bgClass = '';
                                    const isCurrent = state.selectedTypeId === res.typeId && state.selectedMonth === row.month;
                                    
                                    if (res.grade === 'fail') {
                                        bgClass = 'bg-slate-100 text-slate-500 border-slate-200 hover:border-slate-300';
                                        content = `<span class="font-bold text-[10px] whitespace-nowrap scale-90 block text-center text-slate-500">${res.shortFailReason}</span>`;
                                    } else {
                                        // Success cases
                                        if (res.grade === 'perfect') {
                                            bgClass = 'bg-gradient-to-br from-indigo-50 to-purple-50 text-indigo-700 border-indigo-300 shadow-sm hover:border-indigo-400 ring-1 ring-transparent hover:ring-indigo-200';
                                            content = `<span class="flex items-center justify-center gap-0.5 font-bold"><span class="scale-75 text-indigo-500 fill-indigo-500">${ICONS.star}</span> <span class="hidden lg:inline text-[10px]">完美</span></span>`;
                                        } else if (res.grade === 'good') {
                                            bgClass = 'bg-white text-emerald-700 border-emerald-400 shadow-sm hover:border-emerald-500';
                                            content = `<span class="flex items-center justify-center gap-1 font-bold">${ICONS.check} <span class="hidden lg:inline">推荐</span></span>`;
                                        } else if (res.grade === 'warning') {
                                            bgClass = 'bg-white text-emerald-700 border-emerald-400 shadow-sm hover:border-emerald-500';
                                            let warnText = "延误";
                                            if (res.cnyWarning.includes("首批") && res.cnyWarning.includes("补货")) warnText = "双重延误";
                                            else if (res.cnyWarning.includes("旺季")) warnText = "旺季延误";
                                            else if (res.cnyWarning.includes("首批")) warnText = "首批春节";
                                            else if (res.cnyWarning.includes("补货")) warnText = "补货春节";
                                            content = `<div class="flex flex-col items-center justify-center gap-0.5 w-full"><div class="text-emerald-500">${ICONS.check}</div><span class="text-[10px] font-bold text-amber-600 whitespace-nowrap scale-90">${warnText}</span></div>`;
                                        }
                                    }
                                    return `<td class="p-2 border-r border-slate-100 h-16"><div onclick="selectTypeAndMonth('${res.typeId}', ${row.month})" class="cursor-pointer rounded-lg h-full w-full flex items-center justify-center transition-all border ${bgClass} ${isCurrent?'ring-2 ring-inset ring-blue-500 z-10':''}">${content}</div></td>`;
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

function renderGrid(results) {
    return `
      <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8 max-w-[1400px] mx-auto px-4 md:px-0">
        ${results.map(r => {
             const isSelected = state.selectedMonth === r.startMonth;
             
             let borderClass = "", bgClass = "", icon = "", iconColor = "", textClass = "", statusText = "";
             
             if (r.grade === 'fail') {
                 borderClass = "border-slate-200 hover:border-blue-300";
                 bgClass = "bg-slate-50";
                 icon = ICONS.xCircle;
                 iconColor = "text-slate-400";
                 textClass = "text-slate-500";
                 statusText = "不可行";
             } else if (r.grade === 'perfect') {
                 borderClass = "border-indigo-200 hover:border-indigo-400";
                 bgClass = "bg-gradient-to-br from-indigo-50 to-white";
                 icon = `<span class="fill-indigo-500 text-indigo-500">${ICONS.star}</span>`;
                 iconColor = "text-indigo-500";
                 textClass = "text-indigo-700";
                 statusText = "完美节奏";
             } else if (r.grade === 'good') {
                 borderClass = "border-slate-200 hover:border-blue-300";
                 bgClass = "bg-white";
                 icon = ICONS.check;
                 iconColor = "text-emerald-500";
                 textClass = "text-emerald-700";
                 statusText = "推荐";
             } else if (r.grade === 'warning') {
                 borderClass = "border-slate-200 hover:border-blue-300";
                 bgClass = "bg-white";
                 icon = ICONS.check;
                 iconColor = "text-emerald-500";
                 textClass = "text-amber-600";
                 
                 if (r.cnyWarning.includes("旺季")) statusText = "旺季延误";
                 else if (r.cnyWarning.includes("首批") && r.cnyWarning.includes("补货")) statusText = "双重延误";
                 else if (r.cnyWarning.includes("首批")) statusText = "首批春节";
                 else if (r.cnyWarning.includes("补货")) statusText = "补货春节";
                 else statusText = "有延误";
             }

             if (isSelected) {
                 borderClass = "border-blue-600 ring-2 ring-blue-100";
             }

             return `
                <button onclick="selectMonth(${r.startMonth})" class="flex flex-col items-center p-4 rounded-xl border transition-all shadow-sm ${borderClass} ${bgClass}">
                    <div class="text-lg font-black text-slate-700 mb-2">${r.startMonth}月</div>
                    <div class="${iconColor} mb-2">${icon}</div>
                    <div class="text-xs font-bold ${textClass}">${statusText}</div>
                    ${r.grade === 'fail' ? `<div class="text-[10px] text-slate-500 font-medium mt-1 truncate w-full text-center">${r.shortFailReason}</div>` : ''}
                </button>
             `;
        }).join('')}
      </div>
    `;
}

function renderDetailView(results) {
  if (!state.selectedMonth) return '';
  const data = results.find(r => r.startMonth === state.selectedMonth);
  if (!data) return '';

  let headerClass = '';
  let statusText = '';
  
  if (data.grade === 'fail') {
      headerClass = 'from-slate-100 to-slate-200 border-slate-200 text-slate-600';
      statusText = '不建议开品';
  } else if (data.grade === 'perfect') {
      headerClass = 'from-indigo-100 to-purple-100 border-indigo-200 text-indigo-800';
      statusText = '完美开品节奏';
  } else if (data.grade === 'warning') {
      headerClass = 'from-yellow-50 to-orange-50 border-orange-200 text-orange-800';
      statusText = '可行但有延误';
  } else {
      headerClass = 'from-emerald-50 to-teal-50 border-emerald-200 text-emerald-800';
      statusText = '推荐开品';
  }

  return `
    <div id="detail-view" class="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-fade-in mt-4 mb-20 max-w-[1400px] mx-auto">
      <div class="px-8 py-6 border-b flex justify-between items-center bg-gradient-to-r ${headerClass}">
        <div>
          <h2 class="text-2xl font-black flex items-center gap-3">
             ${data.startMonth}月开品推演 
             <span class="text-xs px-3 py-1 rounded-full border border-current bg-white/50 uppercase tracking-widest font-bold shadow-sm flex items-center gap-1">
                ${data.grade === 'perfect' ? `<span class="text-indigo-600 fill-indigo-600 scale-75">${ICONS.star}</span>` : ''} ${statusText}
             </span>
          </h2>
          ${data.failReason ? `<p class="text-sm font-bold mt-2 flex items-center gap-2"><span class="bg-black/10 p-1 rounded text-[10px]">${ICONS.xCircle}</span> ${data.failReason}</p>` : ''}
          ${data.cnyWarning ? `<p class="text-sm font-bold mt-2 flex items-center gap-2"><span class="bg-black/10 p-1 rounded text-[10px]">${ICONS.alert}</span> ${data.cnyWarning}</p>` : ''}
        </div>
        <button onclick="selectMonth(null)" class="p-2 hover:bg-black/10 rounded-full">${ICONS.xCircle}</button>
      </div>
      <div class="p-8 bg-slate-50/50">
        <div class="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 class="text-xs font-extrabold text-slate-400 uppercase mb-6 tracking-widest">第一阶段: 首批测试</h3>
              ${renderTimelineStep("选品/样品", data.dates.start, data.dates.sourcingEnd, state.config.sourcing, 1)}
              ${renderTimelineStep("首批生产", data.dates.prod1Start, data.dates.prod1End, state.config.prod1, 2, false, data.delays.prod1?"春节延误":null)}
              ${renderTimelineStep("首批物流", data.dates.prod1End, data.dates.ship1End, state.config.ship1, 3, false, data.delays.ship1?"春节延误":null)}
              ${renderTimelineStep("上架准备", data.dates.ship1End, data.dates.prepEnd, state.config.prep, 4)}
            </div>
            <div>
              <h3 class="text-xs font-extrabold text-slate-400 uppercase mb-6 tracking-widest">第二阶段: 推广与返单</h3>
              <div class="pl-5 py-4 mb-6 relative group">
                 <div class="absolute left-0 top-0 bottom-0 w-1.5 rounded-full bg-blue-300"></div>
                 <div class="p-5 rounded-2xl border-2 shadow-sm bg-white ${hitsQ4Promotion(data.dates.promoStart)?'border-rose-300':'border-blue-400'}">
                    <div class="text-xs font-bold text-slate-400 uppercase mb-2">推广启动</div>
                    <div class="text-3xl font-black text-slate-800 font-mono">${formatFullDate(data.dates.promoStart)}</div>
                    ${data.promoStrategy ? `<div class="text-indigo-600 text-xs font-bold mt-2 flex items-center gap-1">${ICONS.bulb} ${data.promoStrategy}</div>` : ''}
                    ${hitsQ4Promotion(data.dates.promoStart) ? `<div class="text-rose-600 text-xs font-bold mt-2">${ICONS.alert} Q4流量期</div>` : ''}
                 </div>
              </div>
              ${renderTimelineStep("推广测试期", data.dates.promoStart, data.dates.testEnd, state.config.test, 5)}
              ${renderTimelineStep("补货生产", data.dates.prod2Start, data.dates.prod2End, state.config.prod2, 6, false, data.delays.prod2?"春节延误":null)}
              ${renderTimelineStep("补货物流", data.dates.prod2End, data.dates.ship2End, state.config.ship2, 7, true, data.delays.ship2?"春节延误":null)}
              
              ${data.peakInfo ? `
                <div class="mt-8 p-5 rounded-2xl border-2 border-dashed ${data.grade === 'perfect' ? 'bg-indigo-50 border-indigo-300 ring-2 ring-indigo-100' : (!data.peakInfo.missed && !data.peakInfo.nearMiss ? 'bg-emerald-50 border-emerald-300' : (data.peakInfo.nearMiss ? 'bg-amber-50 border-amber-300' : 'bg-slate-100 border-slate-300'))}">
                  <h4 class="font-bold text-sm mb-4 text-slate-800 uppercase flex items-center gap-2">${ICONS.bulb} 旺季匹配 (Targeting)</h4>
                  <div class="text-sm mb-2 text-slate-500">大货到仓: <span class="font-bold text-slate-800">${data.peakInfo.arrivalDate}</span></div>
                  <div class="text-sm mb-4 text-slate-500">赶上面向: <span class="font-bold text-slate-800">${data.peakInfo.targetYear}年${data.peakInfo.targetPeakMonth}月旺季</span></div>
                  <div class="text-sm font-bold flex items-center gap-2 p-2 rounded-lg ${!data.peakInfo.missed ? (data.grade === 'perfect' ? 'bg-indigo-100 text-indigo-700' : (data.peakInfo.nearMiss ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700')) : 'bg-slate-200 text-slate-500'}">
                    ${data.grade === 'perfect' ? ICONS.star : (!data.peakInfo.missed ? (data.peakInfo.nearMiss ? ICONS.alert : ICONS.check) : ICONS.xCircle)} 
                    ${data.grade === 'perfect' ? '完美节奏 (正值旺季/旺季前夕)' : (!data.peakInfo.missed ? (data.peakInfo.nearMiss ? '延误但可行 (20天内)' : '匹配成功') : '错失旺季')}
                  </div>
                </div>
              ` : ''}
            </div>
        </div>
      </div>
    </div>
  `;
}

function renderTimelineStep(title, start, end, planned, step, isFinal = false, warning = null, isFatal = false) {
  const diff = Math.ceil(Math.abs(end.getTime() - start.getTime()) / 86400000);
  const isDelayed = diff > planned + 5;
  const iconBg = isFatal ? "bg-slate-200 text-slate-500" : (isDelayed || warning) ? "bg-amber-100 text-amber-600" : "bg-slate-100 text-slate-500";
  return `
    <div class="relative flex gap-5 group">
      ${!isFinal ? '<div class="absolute left-[18px] top-10 bottom-[-24px] w-[2px] bg-slate-100"></div>' : ''}
      <div class="z-10 flex-shrink-0 pt-1"><div class="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm border ring-2 ring-slate-50 ${iconBg}">${step}</div></div>
      <div class="flex-grow p-4 rounded-xl border shadow-sm mb-4 bg-white border-slate-200">
        <div class="flex justify-between items-center mb-1"><h4 class="font-bold text-slate-800">${title}</h4><span class="text-xs font-mono bg-slate-50 px-2 py-1 rounded border">${formatFullDate(start)} ➔ ${formatFullDate(end)}</span></div>
        <div class="flex gap-4 text-xs text-slate-500 mt-2"><span>计划: ${planned}天</span>${isDelayed ? `<span class="text-amber-700 font-bold">实际: ${diff}天</span>` : ''}</div>
        ${warning ? `<div class="mt-3 text-xs font-bold flex items-center gap-1.5 p-2 rounded bg-amber-50 text-amber-700">${ICONS.alert} ${warning}</div>` : ''}
      </div>
    </div>
  `;
}

function renderApp() {
  const { currentResults, matrix } = calculateAllResults();
  const currentType = state.productTypes.find(t => t.id === state.selectedTypeId) || state.productTypes[0];
  const globalAdvice = getGlobalAdvice(matrix);
  
  const adviceHtml = getTypeAdvice(currentResults, currentType.name);

  document.getElementById('app').innerHTML = `
    <div class="max-w-[1600px] mx-auto pb-24 px-4 sm:px-6 lg:px-8">
      ${renderRulesPanel()}
      <header class="mb-12 pt-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-200 pb-8">
        <div>
            <h1 class="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight flex items-center gap-4">
               <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Amazon Launch Planner</span>
               <span class="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-mono font-bold border border-slate-200 uppercase tracking-wider">${BASE_YEAR}</span>
            </h1>
            <p class="text-slate-500 text-base md:text-lg mt-3 font-medium">全年度、多类型亚马逊新品开发倒推与排期系统</p>
        </div>
        <div class="flex gap-3">
            <button onclick="toggleRules()" class="flex items-center gap-2 text-slate-600 hover:text-blue-600 bg-white border border-slate-200 hover:bg-blue-50 px-5 py-3 rounded-xl text-sm font-bold shadow-sm">${ICONS.book} <span class="hidden md:inline">逻辑说明</span></button>
            <button onclick="toggleConfig()" class="flex items-center gap-2 text-slate-600 hover:text-blue-600 bg-white border border-slate-200 hover:bg-blue-50 px-5 py-3 rounded-xl text-sm font-bold shadow-sm">${ICONS.settings} 配置</button>
        </div>
      </header>
      ${renderConfigPanel()}
      ${renderOverviewMatrix(matrix, globalAdvice)}
      
      <div class="mb-8 max-w-[1400px] mx-auto">
        <div class="flex justify-between items-end mb-4 px-1"><h3 class="font-bold text-slate-800 text-lg flex items-center gap-2"><span class="w-1.5 h-6 bg-blue-600 rounded-full"></span> 按类型详情</h3><button onclick="toggleAddType()" class="text-sm flex items-center gap-1 text-blue-600 hover:bg-blue-50 px-3 py-1.5 rounded-lg transition-colors font-medium">${ICONS.plus} 新类型</button></div>
        <div class="flex overflow-x-auto gap-3 pb-4 scrollbar-hide mb-2">
            ${state.productTypes.map(t => `<button onclick="selectType('${t.id}')" class="whitespace-nowrap px-5 py-3 rounded-xl text-sm font-bold transition-all border flex items-center gap-2 ${state.selectedTypeId === t.id ? 'bg-slate-800 border-slate-800 text-white shadow-lg' : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'}">${t.name.split(' ')[0]} ${!['1','2','3','4','5','6','7'].includes(t.id) ? `<span onclick="event.stopPropagation(); deleteType('${t.id}')" class="opacity-50 hover:text-rose-400 ml-1">${ICONS.trash}</span>` : ''}</button>`).join('')}
        </div>
        <div class="p-4 bg-white rounded-xl shadow-sm border border-slate-200 flex gap-4 items-start"><div class="text-blue-500 mt-0.5 bg-blue-50 p-2 rounded-lg">${ICONS.info}</div><div class="leading-relaxed text-slate-700 text-sm md:text-base">${adviceHtml}</div></div>
        ${state.isAddingType ? `
            <div class="mt-4 p-6 bg-white rounded-2xl border border-blue-100 shadow-xl max-w-2xl"><h4 class="font-bold text-slate-800 mb-4">添加新类型</h4><div class="flex gap-4 mb-4"><input id="newTypeName" type="text" placeholder="输入名称..." class="flex-1 p-3 border border-slate-200 rounded-xl text-sm" value="${state.newTypeName}" oninput="updateNewTypeName(this.value)"><select onchange="updateNewTypeSeason(this.value)" class="p-3 border border-slate-200 rounded-xl text-sm"><option value="seasonal">季节性</option><option value="evergreen">常青款</option></select></div>${state.newTypeSeason === 'seasonal' ? `<div class="mb-6"><p class="text-sm font-semibold text-slate-700 mb-3">旺季月份:</p><div class="flex flex-wrap gap-2">${Array.from({length: 12}, (_, i) => i + 1).map(m => `<button onclick="toggleNewPeak(${m})" class="w-10 h-10 rounded-lg text-sm font-bold border-2 ${state.newTypePeaks.includes(m) ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-50 text-slate-400'}" >${m}</button>`).join('')}</div></div>`: ''}<div class="flex justify-end gap-3"><button onclick="toggleAddType()" class="px-5 py-2 text-sm text-slate-500">取消</button><button onclick="confirmAddType()" class="px-5 py-2 text-sm font-bold bg-blue-600 text-white rounded-xl">确认</button></div></div>
        ` : ''}
      </div>

      ${renderGrid(currentResults)}
      ${renderDetailView(currentResults)}
      <footer class="text-center text-slate-400 text-xs mt-16 border-t border-slate-100 pt-8 pb-8">System optimized for supply chain speed & seasonality.</footer>
    </div>
  `;
}

// --- GLOBAL EXPORTS ---
const win = window as any;
win.toggleRules = () => { state.showRules = !state.showRules; renderApp(); };
win.toggleConfig = () => { state.showConfig = !state.showConfig; renderApp(); };
win.updateConfig = (k, v) => { state.config[k] = parseInt(v)||0; renderApp(); };
win.updateCustomDate = (year, type, field, val) => { 
    if(!state.cnyConfig.customDates[year]) state.cnyConfig.customDates[year] = { factory: {}, logistics: {} };
    state.cnyConfig.customDates[year][type][field] = val;
    renderApp(); 
};
win.selectType = (id) => { state.selectedTypeId = id; state.selectedMonth = null; renderApp(); };
win.selectTypeAndMonth = (id, m) => { state.selectedTypeId = id; state.selectedMonth = m; renderApp(); setTimeout(() => document.getElementById('detail-view')?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100); };
win.toggleAddType = () => { state.isAddingType = !state.isAddingType; state.newTypeName = ''; state.newTypeSeason = 'seasonal'; state.newTypePeaks = []; renderApp(); };
win.updateNewTypeName = (v) => state.newTypeName = v;
win.updateNewTypeSeason = (v) => { state.newTypeSeason = v; renderApp(); };
win.toggleNewPeak = (m) => { if (state.newTypePeaks.includes(m)) state.newTypePeaks = state.newTypePeaks.filter(x => x !== m); else state.newTypePeaks.push(m); renderApp(); };
win.confirmAddType = () => { if (!state.newTypeName) return; const id = Date.now().toString(); state.productTypes.push({ id, name: state.newTypeName, type: state.newTypeSeason, peakMonths: state.newTypeSeason === 'seasonal' ? state.newTypePeaks : [] }); state.isAddingType = false; state.selectedTypeId = id; renderApp(); };
win.deleteType = (id) => { state.productTypes = state.productTypes.filter(t => t.id !== id); if (state.selectedTypeId === id) state.selectedTypeId = state.productTypes[0].id; renderApp(); };
win.selectMonth = (m) => { state.selectedMonth = m; renderApp(); if(m) setTimeout(() => document.getElementById('detail-view')?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 50); };

// --- HELPERS ---
function getGlobalAdvice(matrix) {
    const scores = matrix.map(row => {
        const successes = row.results.filter(r => r.status === 'success').length;
        const warnings = row.results.filter(r => r.status === 'success' && r.cnyWarning).length;
        return successes - (warnings * 0.2); 
    });
    const sorted = scores.map((s, i) => ({ m: i + 1, s })).sort((a, b) => b.s - a.s).filter(x => x.s > 0);
    const best = sorted.slice(0, 3).map(x => x.m + '月').join('、');
    return { best: best || '无理想月份' };
}
function getTypeAdvice(results, name) {
    const p = results.filter(r => r.grade === 'perfect').map(r => r.startMonth);
    const s = results.filter(r => r.grade === 'good').map(r => r.startMonth);
    const w = results.filter(r => r.grade === 'warning').map(r => r.startMonth);
    
    if (!p.length && !s.length && !w.length) return `<span class="text-rose-600 font-bold">⚠️ 全年无解 (需提速或接受长周期)</span>`;
    
    let msg = `对于 <b>${name}</b>`;
    if (p.length) msg += `，<span class="text-indigo-600 font-bold">👑 完美月份：${p.join('、')}月</span>`;
    else msg += `，最佳月份：<span class="text-emerald-600 font-bold">${s.join('、')}月</span>`;
    
    if (p.length && s.length) msg += `，普通推荐：${s.join('、')}月`;
    if (w.length) msg += `，可行(有延误)：<span class="text-amber-600 font-bold">${w.join('、')}月</span>`;
    
    return msg + "。";
}

// --- INITIALIZATION ---
// Ensure DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderApp);
} else {
    renderApp();
}