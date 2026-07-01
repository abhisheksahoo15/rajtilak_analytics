import React, { useState } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { FileText, Download, X, ShieldCheck, MapPin, Eye } from 'lucide-react';

interface ReportMetric {
  label: string;
  value: number;
  color: string;
}

interface AnalysisReport {
  id: string;
  codeName: string;
  title: string;
  subtitle: string;
  date: string;
  classification: string;
  geography: string;
  metrics: ReportMetric[];
  executiveSummary: string;
  demographics: { label: string; percentage: number; support: string }[];
  strategicRecomm: string[];
}

export const ReportsPage: React.FC = () => {
  const [selectedReport, setSelectedReport] = useState<AnalysisReport | null>(null);
  const [exportingId, setExportingId] = useState<string | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const reports: AnalysisReport[] = [
    {
      id: '1',
      codeName: 'REPORT-UP-2026',
      title: 'Uttar Pradesh Assembly Mandate 2026',
      subtitle: 'Developmental Waves vs. Ground-Level Caste Dynamics',
      date: 'May 2026',
      classification: 'RESTRICTED / EXECUTIVE STRATEGY',
      geography: 'Uttar Pradesh (403 Constituencies)',
      metrics: [
        { label: 'Narrative Efficacy', value: 89.2, color: 'bg-saffron-start' },
        { label: 'Swing Cohort Shift', value: 14.5, color: 'bg-emerald-500' },
        { label: 'Booth Mobilization', value: 92.8, color: 'bg-[#00E5FF]' }
      ],
      executiveSummary: 'This report examines how direct communication strategies bypassing intermediate links transformed potential voter fatigue into a development-led mandate. By integrating infrastructure achievement campaigns with localized pride narratives, the campaign achieved a major breakthrough in swing voter conversion across key central and western districts.',
      demographics: [
        { label: 'Youth (18-30 Years)', percentage: 42, support: '64% Favorable (+12% shift)' },
        { label: 'Agrarian Cohorts', percentage: 28, support: '51% Favorable (+4% shift)' },
        { label: 'Urban Professionals', percentage: 30, support: '73% Favorable (+9% shift)' }
      ],
      strategicRecomm: [
        'Deploy targeted WhatsApp micro-brochures detailing corridor benefits at the block level.',
        'Address local irrigation concerns through immediate grievance collection desks.',
        'Scale up volunteer-led door-to-door validation loops within 48 hours of rival announcements.'
      ]
    },
    {
      id: '2',
      codeName: 'REPORT-LOK-2024',
      title: 'Digital Footprint & Narrative Efficacy Study',
      subtitle: 'Analyzing Video Narrative ROI & WhatsApp Broadcast Penetration',
      date: 'August 2024',
      classification: 'CONFIDENTIAL / DATA ANALYTICS',
      geography: 'Pan-India Campaign Analysis',
      metrics: [
        { label: 'Message Retention', value: 78.4, color: 'bg-saffron-start' },
        { label: 'Virality Coefficient', value: 2.1, color: 'bg-emerald-500' },
        { label: 'Campaign Hook ROI', value: 84.6, color: 'bg-[#00E5FF]' }
      ],
      executiveSummary: 'A comprehensive study evaluating the retention rate of short-form campaign videos vs. traditional long-form broadcasts. Data shows that micro-narratives (under 45 seconds) customized with native linguistic dialects outperformed standardized state-level promotions by three to one in rural segments.',
      demographics: [
        { label: 'First-Time Voters', percentage: 35, support: '68% Favorable (+15% shift)' },
        { label: 'Suburban Households', percentage: 45, support: '58% Favorable (+8% shift)' },
        { label: 'Senior Cohorts', percentage: 20, support: '55% Favorable (+2% shift)' }
      ],
      strategicRecomm: [
        'Shift resource allocation from broad television slots to regional micro-influencer channels.',
        'Establish regional NLP models to detect sarcasm and local slang flags instantly.',
        'Embed volunteer tracking metadata in digital assets to cross-map viral spread with booth turnout.'
      ]
    },
    {
      id: '3',
      codeName: 'REPORT-WEL-2025',
      title: 'Rural Welfare Schemes Delivery Audit',
      subtitle: 'Voter Feedback Loops & Direct Benefit Recipient Loyalty Trends',
      date: 'November 2025',
      classification: 'INTERNAL CIRCULATION ONLY',
      geography: 'Bihar, Madhya Pradesh & Rajasthan',
      metrics: [
        { label: 'Delivery Integrity', value: 94.5, color: 'bg-saffron-start' },
        { label: 'Appreciation Index', value: 81.2, color: 'bg-emerald-500' },
        { label: 'Friction Resolution', value: 88.0, color: 'bg-[#00E5FF]' }
      ],
      executiveSummary: 'This audit analyzes direct-benefit transfers (DBT) and localized household utility programs (water, gas pipelines). Results indicate a structural shift where beneficiaries vote independently of family heads, creating a distinct "beneficiary loyalty index" that buffers against localized political shifts.',
      demographics: [
        { label: 'Female Head of House', percentage: 52, support: '71% Favorable (+18% shift)' },
        { label: 'Rural Smallholders', percentage: 30, support: '53% Favorable (+5% shift)' },
        { label: 'Artisanal Guilds', percentage: 18, support: '61% Favorable (+6% shift)' }
      ],
      strategicRecomm: [
        'Coordinate local check-ins to ensure water connections are functional before campaigning.',
        'Deploy female ground advocates to discuss family education grants and health cards.',
        'Compile localized success testimonials for regional publication distribution.'
      ]
    }
  ];

  const handleExport = (reportId: string, title: string) => {
    setExportingId(reportId);
    setTimeout(() => {
      // Simulate file download trigger
      const element = document.createElement("a");
      const file = new Blob([`Rajtilak Analytics Confidential Report: ${title}`], {type: 'text/plain'});
      element.href = URL.createObjectURL(file);
      element.download = `${title.toLowerCase().replace(/\s+/g, '-')}-summary.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      
      setExportingId(null);
      setDownloadSuccess(title);
      setTimeout(() => setDownloadSuccess(null), 3000);
    }, 1500);
  };

  return (
    <div className="animate-fade-in pt-24 bg-white min-h-screen text-[#071A3D]">
      
      {/* HEADER SECTION */}
      <section className="relative py-16 bg-gradient-to-b from-[#F3F5F9]/50 to-white border-b border-[#071A3D]/5 overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-[0.02] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center flex flex-col items-center gap-4 max-w-2xl mx-auto">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071A3D]/5 border border-saffron-start/20 text-[10px] font-bold tracking-widest uppercase text-saffron-end font-display">
                <FileText className="w-3.5 h-3.5" /> Intelligence Library
              </span>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <h1 className="font-display text-4xl sm:text-5xl font-black tracking-tight leading-tight text-[#071A3D]">
                Analysis Reports & <br />
                <span className="text-saffron-gradient">Electoral Mandate Briefs</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <p className="font-sans text-xs text-[#071A3D]/65 leading-relaxed mt-2">
                Restricted briefings compiling demographic breakdowns, narrative testing audits, and booth-level delivery reports.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* DOWNLOAD SUCCESS TOAST */}
      {downloadSuccess && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#071A3D] text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-emerald-500/30 flex items-center gap-3 animate-fade-in-up">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <div className="flex flex-col">
            <span className="font-display text-[10px] font-bold uppercase tracking-wider text-emerald-400">Export Complete</span>
            <span className="font-sans text-xs text-white/80">{downloadSuccess} downloaded successfully.</span>
          </div>
        </div>
      )}

      {/* REPORT LISTING */}
      <section className="py-16 bg-[#F3F5F9]/20">
        <div className="max-w-5xl mx-auto px-6 flex flex-col gap-10">
          {reports.map((report, i) => (
            <ScrollReveal key={report.id} direction="up" delay={i * 120}>
              <div className="bg-white border border-[#071A3D]/5 rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row gap-8 justify-between hover:shadow-[0_12px_40px_rgba(7,26,61,0.03)] transition-all duration-300 relative overflow-hidden group hover:border-saffron-start/20">
                {/* Visual badge inside card */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-saffron-start/5 rounded-full blur-2xl pointer-events-none" />

                {/* Left side: Report summary details */}
                <div className="lg:max-w-xl flex flex-col gap-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-[9px] text-[#071A3D]/45 font-black uppercase tracking-widest bg-[#F3F5F9] px-2.5 py-0.5 rounded border border-[#071A3D]/5">
                      {report.codeName}
                    </span>
                    <span className="text-[8px] font-display font-black text-rose-600 bg-rose-50 border border-rose-100 px-2 py-0.5 rounded uppercase tracking-wider">
                      {report.classification}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <h3 className="font-display text-lg sm:text-xl font-black text-[#071A3D] group-hover:text-saffron-start transition-colors">
                      {report.title}
                    </h3>
                    <p className="font-sans text-xs text-[#071A3D]/55 italic">
                      {report.subtitle}
                    </p>
                  </div>

                  <p className="font-sans text-xs text-[#071A3D]/65 leading-relaxed mt-2 line-clamp-3">
                    {report.executiveSummary}
                  </p>

                  <div className="flex items-center gap-4 mt-2 font-mono text-[9px] text-[#071A3D]/50 font-bold uppercase tracking-wider">
                    <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-saffron-start" /> {report.geography}</span>
                    <span>•</span>
                    <span>{report.date}</span>
                  </div>
                </div>

                {/* Right side: Report metrics & Quick CTA */}
                <div className="w-full lg:w-64 border-t lg:border-t-0 lg:border-l border-[#071A3D]/5 pt-6 lg:pt-0 lg:pl-8 flex flex-col justify-between gap-6">
                  {/* Miniature dashboard progress bars */}
                  <div className="flex flex-col gap-3">
                    <span className="font-display text-[9px] font-black uppercase tracking-widest text-[#071A3D]/40">Core Performance Index</span>
                    <div className="flex flex-col gap-2.5">
                      {report.metrics.map((metric, idx) => (
                        <div key={idx} className="flex flex-col gap-1">
                          <div className="flex justify-between text-[10px] font-bold">
                            <span className="text-[#071A3D]/70">{metric.label}</span>
                            <span>{metric.value}%</span>
                          </div>
                          <div className="h-1.5 w-full bg-[#F3F5F9] rounded-full overflow-hidden border border-[#071A3D]/5">
                            <div className={`h-full ${metric.color} rounded-full`} style={{ width: `${metric.value}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions buttons */}
                  <div className="flex gap-2.5">
                    <button
                      onClick={() => setSelectedReport(report)}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-[#071A3D]/10 hover:border-saffron-start/50 text-[#071A3D] font-display text-[9px] font-black tracking-widest uppercase hover:bg-[#F3F5F9] transition-all cursor-pointer bg-white"
                    >
                      <Eye className="w-3.5 h-3.5" /> View Briefing
                    </button>
                    
                    <button
                      onClick={() => handleExport(report.id, report.title)}
                      disabled={exportingId === report.id}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-[#071A3D] text-white font-display text-[9px] font-black tracking-widest uppercase hover:bg-saffron-start transition-all cursor-pointer hover:shadow-lg disabled:opacity-50"
                    >
                      <Download className={`w-3.5 h-3.5 ${exportingId === report.id ? 'animate-bounce' : ''}`} />
                      {exportingId === report.id ? 'Exporting...' : 'Export PDF'}
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* DETAILED REPORT VIEW MODAL */}
      {selectedReport && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071A3D]/40 backdrop-blur-md animate-fade-in">
          {/* Backdrop click close */}
          <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedReport(null)} />

          {/* Modal Container */}
          <div className="relative bg-white border border-[#071A3D]/10 w-full max-w-3xl max-h-[85vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-scale-in">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-[#071A3D]/5 flex items-center justify-between bg-[#F3F5F9]/50">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[9px] text-[#071A3D]/45 font-black uppercase tracking-widest bg-white border border-[#071A3D]/5 px-2.5 py-0.5 rounded">
                  {selectedReport.codeName}
                </span>
                <span className="text-[8px] font-display font-black text-rose-600 bg-white border border-rose-100 px-2 py-0.5 rounded uppercase tracking-wider">
                  {selectedReport.classification}
                </span>
              </div>
              
              <button 
                onClick={() => setSelectedReport(null)}
                className="p-1.5 rounded-lg hover:bg-[#071A3D]/5 transition-all text-[#071A3D]/60 hover:text-[#071A3D] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto flex flex-col gap-6 custom-scrollbar text-xs">
              
              {/* Report Titles */}
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[9px] text-saffron-start font-bold uppercase tracking-wider">Executive briefing</span>
                <h2 className="font-display text-2xl font-black text-[#071A3D] leading-tight">
                  {selectedReport.title}
                </h2>
                <p className="font-sans text-xs text-[#071A3D]/55 italic border-b border-[#071A3D]/5 pb-4">
                  {selectedReport.subtitle}
                </p>
              </div>

              {/* Section 1: Executive Summary */}
              <div className="flex flex-col gap-2.5">
                <span className="font-display text-[10px] font-black uppercase tracking-widest text-[#071A3D]/45">I. Executive Summary</span>
                <p className="font-sans text-xs text-[#071A3D]/70 leading-relaxed">
                  {selectedReport.executiveSummary}
                </p>
              </div>

              {/* Section 2: Demographic Breakdown */}
              <div className="flex flex-col gap-3">
                <span className="font-display text-[10px] font-black uppercase tracking-widest text-[#071A3D]/45">II. Demographic Consolidation Index</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {selectedReport.demographics.map((demo, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-[#F3F5F9]/50 border border-[#071A3D]/5 flex flex-col gap-1.5">
                      <span className="font-display text-[10px] font-black text-[#071A3D]">{demo.label}</span>
                      <span className="font-sans text-[11px] text-saffron-start font-bold">{demo.support}</span>
                      <div className="h-1 w-full bg-white rounded-full overflow-hidden mt-1.5">
                        <div className="h-full bg-saffron-start rounded-full" style={{ width: `${demo.percentage}%` }} />
                      </div>
                      <span className="text-[9px] font-mono text-[#071A3D]/40 uppercase font-bold mt-1">Cohort share: {demo.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3: Strategic Recommendations */}
              <div className="flex flex-col gap-3">
                <span className="font-display text-[10px] font-black uppercase tracking-widest text-[#071A3D]/45">III. Actionable Action Plan</span>
                <div className="flex flex-col gap-2">
                  {selectedReport.strategicRecomm.map((recomm, idx) => (
                    <div key={idx} className="flex gap-3 bg-white p-3 border border-[#071A3D]/5 rounded-xl items-start shadow-sm">
                      <span className="w-5 h-5 rounded bg-saffron-start/15 flex items-center justify-center font-display font-black text-[9px] text-saffron-start shrink-0">
                        {idx + 1}
                      </span>
                      <p className="font-sans text-xs text-[#071A3D]/75 leading-relaxed">
                        {recomm}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-[#071A3D]/5 flex justify-between bg-[#F3F5F9]/30">
              <button 
                onClick={() => handleExport(selectedReport.id, selectedReport.title)}
                disabled={exportingId === selectedReport.id}
                className="flex items-center gap-2 px-5 py-2.5 border border-[#071A3D]/10 hover:border-saffron-start/50 text-[#071A3D] bg-white rounded-xl font-display text-[10px] font-bold uppercase tracking-widest cursor-pointer hover:bg-[#F3F5F9] transition-all disabled:opacity-50"
              >
                <Download className="w-3.5 h-3.5" />
                {exportingId === selectedReport.id ? 'Exporting...' : 'Export Full Report'}
              </button>

              <button 
                onClick={() => setSelectedReport(null)}
                className="px-5 py-2.5 rounded-xl bg-[#071A3D] text-white font-display text-[10px] font-bold uppercase tracking-widest cursor-pointer hover:bg-saffron-start transition-all"
              >
                Close Audit
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
