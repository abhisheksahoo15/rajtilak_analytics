import React, { useState } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { Search, Clock, ArrowRight, X, ChevronRight, BookOpen } from 'lucide-react';

interface Article {
  id: string;
  category: 'Strategy' | 'Technology' | 'Voter Psychology' | 'Ground Operations';
  title: string;
  excerpt: string;
  content: string[]; // split into paragraphs/sections
  author: string;
  role: string;
  date: string;
  readTime: string;
  image: string;
  keyTakeaways: string[];
}

export const BlogHubPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const categories = ['All', 'Strategy', 'Technology', 'Voter Psychology', 'Ground Operations'];

  const articles: Article[] = [
    {
      id: '1',
      category: 'Strategy',
      title: 'Deciphering the Tier-2 & Tier-3 Voter Shift in India (2026)',
      excerpt: 'Conventional wisdom suggests class-based voting, but rural-urban consolidation points to dynamic aspiration alignments. How mobile networks changed the game.',
      date: 'June 18, 2026',
      readTime: '6 min read',
      author: 'Rajeshwar Tripathii',
      role: 'Chief Election Strategist',
      image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=600',
      keyTakeaways: [
        'Aspirational infrastructure access outweighs traditional local identity blocs in younger demographics.',
        'High-density video communications (like YouTube Shorts & WhatsApp clips) dictate regional narrative momentum.',
        'Direct beneficiary tracking systems must bypass bureaucratic intermediate steps for maximum goodwill conversions.'
      ],
      content: [
        'For decades, Indian electoral strategy was analyzed through the singular prism of rigid community equations. However, recent demographic shifts in tier-2 and tier-3 municipalities reveal a radical disruption. The digital homogenization of voter aspirations has decoupled political preferences from localized identity blocks, replacing them with a unified developmental demand index.',
        'Our analytics engine tracked sentiment in 120 assembly segments experiencing rapid urbanization. The primary driver of swing voting among under-35 cohorts was not regional alliances, but rather the visible velocity of developmental projects (highway accessibility, digital banking grids, and technical education portals).',
        'Furthermore, the medium is the message. Voter persuasion is no longer achieved through long-form speeches alone, but via localized digital video networks. The narrative must align civilizational pride with individual economic upward mobility. Those who bridge this gap successfully secure decisive margins.'
      ]
    },
    {
      id: '2',
      category: 'Ground Operations',
      title: 'The Science of Booth-Level Micro-Targeting',
      excerpt: 'A deep-dive into how volunteer coordinates and automated daily ground validation loops convert prediction matrices into actual ballot box majorities.',
      date: 'May 24, 2026',
      readTime: '8 min read',
      author: 'Col. Vikram Dev (Retd.)',
      role: 'Director of Ground Operations',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=600',
      keyTakeaways: [
        'Booth success relies on structured checklists, not general enthusiasm.',
        'Ground surveys must be cross-verified against predictive sentiment matrices within 24 hours.',
        'Targeting the "soft swing" middle 15% of voters creates the path to majority.'
      ],
      content: [
        'Elections are ultimately won at the individual polling booth. Large-scale rallies create momentum, but booth-level mobilization guarantees victory. At Rajtilak Analytics, we have systemized this process using our Ground Sync Framework, linking algorithmic forecasting directly to booth volunteers.',
        'Instead of generic campaigns, our volunteers receive daily action cards containing specific household clusters to visit. These clusters are identified by our Sentiment Engine as "soft swing" segments. These are voters who are supportive of development but harbor specific micro-frictions (e.g., pending local road paving or municipal lighting).',
        'By addressing these hyper-local friction points through direct coordination with candidate war rooms, we resolve issues before polling day. Daily survey feedback loops ensure that our central databases remain dynamic and predictive accuracy stays above 98%.'
      ]
    },
    {
      id: '3',
      category: 'Technology',
      title: 'AI in Modern Elections: Beyond the Hype of Social Listening',
      excerpt: 'Why generic sentiment charts fail, and how NLP dictionary libraries calibrated with regional idioms unlock the real mood of the electorate.',
      date: 'April 12, 2026',
      readTime: '5 min read',
      author: 'Dr. Ananya Iyer',
      role: 'Head of Data Science',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600',
      keyTakeaways: [
        'Standard off-the-shelf NLP engines fail on regional linguistic code-mixing (Hinglish, Kan-lish, etc.).',
        'Custom local dictionaries reflecting dialect variations increase prediction accuracy by up to 30%.',
        'AI should compile actionable campaign hooks rather than just passive graphs.'
      ],
      content: [
        'Social media listening has become a buzzword, but most political campaigns rely on shallow, misleading charts. Simple word matches (e.g., counting positive and negative adjectives) fail to capture sarcasm, regional nuances, or cultural context. Standard engines miss the emotional core of the voter.',
        'To overcome this, Rajtilak Analytics designed a proprietary Neural Semantic Engine configured with over 100,000 regional idioms, socio-political slangs, and dialect terms. This allows us to parse comment sections, local digital news channels, and WhatsApp communities with high fidelity.',
        'The output is not just a passive dashboard, but actionable strategic recommendations. If sentiment on a particular policy shifts negative in a district, our system automatically flag the top three underlying reasons, allowing campaign managers to adjust messaging or ground responses within hours.'
      ]
    },
    {
      id: '4',
      category: 'Voter Psychology',
      title: 'Understanding the Female Voter Consolidation Trend',
      excerpt: 'Analyzing how direct cash transfers, safety metrics, and tap water installations have created a distinct, non-aligned female voting bloc.',
      date: 'March 30, 2026',
      readTime: '7 min read',
      author: 'Smita Deshmukh',
      role: 'Director of Demographic Research',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
      keyTakeaways: [
        'Household utility metrics (LPG, drinking water) are strong anchors of political appreciation.',
        'Female cohorts vote increasingly independently of household male preferences.',
        'Messaging targeting household budget relief converts at twice the rate of ideological slogans.'
      ],
      content: [
        'One of the most significant shifts in contemporary Indian elections is the emergence of female voters as an independent, decisive voting bloc. Traditionally, voting decisions were treated as household decisions, often directed by male heads. Today, targeted welfare delivery has transformed this dynamic.',
        'Our field studies indicate that utilities directly affecting daily household labor—such as piped drinking water, electricity stability, and direct bank transfers—generate high levels of political goodwill. Crucially, this appreciation is personal and does not always align with male voting preferences.',
        'Campaigns must adapt by creating communication channels designed specifically for women. Highlighting safety indexes, family medical benefits, and education grants in neighborhood meetings yields significant dividends.'
      ]
    }
  ];

  // Filtering logic
  const filteredArticles = articles.filter(art => {
    const matchesCategory = activeCategory === 'All' || art.category === activeCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="animate-fade-in pt-24 bg-white min-h-screen text-[#071A3D]">
      
      {/* HERO SECTION */}
      <section className="relative py-16 bg-gradient-to-b from-[#F3F5F9]/50 to-white border-b border-[#071A3D]/5 overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-[0.02] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center flex flex-col items-center gap-4 max-w-2xl mx-auto">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071A3D]/5 border border-saffron-start/20 text-[10px] font-bold tracking-widest uppercase text-saffron-end font-display">
                <BookOpen className="w-3.5 h-3.5" /> Intelligence Hub
              </span>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <h1 className="font-display text-4xl sm:text-5xl font-black tracking-tight leading-tight text-[#071A3D]">
                Campaign Briefings & <br />
                <span className="text-saffron-gradient">Political Insights</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <p className="font-sans text-xs text-[#071A3D]/65 leading-relaxed mt-2">
                Strategic analysis, data-driven methodologies, and briefings straight from the campaign trail.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FILTER & SEARCH CONTROL ROW */}
      <section className="py-8 bg-white border-b border-[#071A3D]/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Categories */}
          <div className="flex flex-wrap gap-1.5 order-2 md:order-1">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-[10px] font-display uppercase tracking-widest font-black transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#071A3D] text-white shadow-md'
                    : 'bg-[#F3F5F9]/70 text-[#071A3D]/60 hover:text-[#071A3D] hover:bg-[#071A3D]/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72 order-1 md:order-2">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-[#071A3D]/40" />
            </span>
            <input
              type="text"
              placeholder="Search briefing..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-[#071A3D]/10 rounded-2xl text-xs font-sans placeholder-[#071A3D]/40 focus:outline-none focus:border-saffron-start/50 bg-[#F3F5F9]/30 hover:bg-[#F3F5F9]/60 transition-all text-[#071A3D]"
            />
          </div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="py-16 bg-[#F3F5F9]/20">
        <div className="max-w-7xl mx-auto px-6">
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredArticles.map((article, i) => (
                <ScrollReveal key={article.id} direction="up" delay={i * 100}>
                  <div 
                    onClick={() => setSelectedArticle(article)}
                    className="group bg-white border border-[#071A3D]/5 rounded-3xl overflow-hidden hover:shadow-[0_10px_35px_rgba(7,26,61,0.04)] transition-all duration-300 flex flex-col justify-between h-full cursor-pointer hover:border-saffron-start/20"
                  >
                    {/* Top Metadata */}
                    <div className="p-6 sm:p-8 flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <span className="px-2.5 py-0.5 rounded text-[8px] font-display font-black uppercase tracking-widest bg-saffron-start/10 text-saffron-start border border-saffron-start/10">
                          {article.category}
                        </span>
                        <span className="flex items-center gap-1 text-[10px] font-mono text-[#071A3D]/40">
                          <Clock className="w-3.5 h-3.5" /> {article.readTime}
                        </span>
                      </div>
                      
                      <h3 className="font-display text-lg font-black text-[#071A3D] group-hover:text-saffron-start transition-colors leading-snug">
                        {article.title}
                      </h3>
                      
                      <p className="font-sans text-xs text-[#071A3D]/60 leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>

                    {/* Bottom Author Credentials */}
                    <div className="border-t border-[#071A3D]/5 px-6 sm:px-8 py-4 flex items-center justify-between bg-gradient-to-b from-white to-[#F3F5F9]/30">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#071A3D]/5 border border-[#071A3D]/10 flex items-center justify-center overflow-hidden">
                          <span className="font-display font-black text-xs text-saffron-start">
                            {article.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-display text-[10px] font-black text-[#071A3D]">{article.author}</span>
                          <span className="font-mono text-[8px] text-[#071A3D]/40 uppercase font-bold">{article.role}</span>
                        </div>
                      </div>
                      <span className="flex items-center gap-1 text-[9px] font-display font-black uppercase tracking-widest text-[#071A3D]/60 group-hover:text-saffron-start transition-colors">
                        Read <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white border border-[#071A3D]/5 rounded-3xl flex flex-col items-center gap-4">
              <span className="text-sm font-display font-black text-[#071A3D]/40 uppercase tracking-widest">No articles found</span>
              <p className="font-sans text-xs text-[#071A3D]/50 max-w-xs">
                We couldn't find any briefings matching your query. Try searching other categories.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ARTICLE READER MODAL */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071A3D]/40 backdrop-blur-md animate-fade-in">
          {/* Backdrop click close */}
          <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedArticle(null)} />
          
          {/* Content container */}
          <div className="relative bg-white border border-[#071A3D]/10 w-full max-w-3xl max-h-[85vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-scale-in">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-[#071A3D]/5 flex items-center justify-between bg-[#F3F5F9]/50">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded text-[8px] font-display font-black uppercase tracking-widest bg-[#071A3D] text-white">
                  {selectedArticle.category}
                </span>
                <span className="font-mono text-[9px] text-[#071A3D]/40 font-bold uppercase">{selectedArticle.date}</span>
              </div>
              
              <button 
                onClick={() => setSelectedArticle(null)}
                className="p-1.5 rounded-lg hover:bg-[#071A3D]/5 transition-all text-[#071A3D]/60 hover:text-[#071A3D] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto flex flex-col gap-6 custom-scrollbar">
              
              {/* Headline */}
              <div className="flex flex-col gap-3">
                <h2 className="font-display text-2xl sm:text-3xl font-black text-[#071A3D] leading-tight">
                  {selectedArticle.title}
                </h2>
                
                {/* Author Info */}
                <div className="flex items-center gap-3 mt-1 pb-4 border-b border-[#071A3D]/5">
                  <div className="w-9 h-9 rounded-full bg-[#071A3D]/5 border border-[#071A3D]/10 flex items-center justify-center overflow-hidden shrink-0">
                    <span className="font-display font-black text-sm text-saffron-start">
                      {selectedArticle.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display text-xs font-black text-[#071A3D]">{selectedArticle.author}</span>
                    <span className="font-mono text-[9px] text-[#071A3D]/45 uppercase font-bold">{selectedArticle.role} ✦ {selectedArticle.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Text content blocks */}
              <div className="flex flex-col gap-4 font-sans text-xs sm:text-sm text-[#071A3D]/75 leading-relaxed">
                {selectedArticle.content.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Takeaways highlight box */}
              <div className="bg-[#F3F5F9]/70 border border-[#071A3D]/5 rounded-2xl p-6 mt-4 flex flex-col gap-3">
                <span className="font-display text-[10px] font-black uppercase tracking-widest text-saffron-start">
                  Key Strategic Briefings
                </span>
                <ul className="flex flex-col gap-2">
                  {selectedArticle.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex gap-2.5 font-sans text-xs text-[#071A3D]/80 items-start">
                      <ChevronRight className="w-4 h-4 text-saffron-start shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-[#071A3D]/5 flex justify-end bg-[#F3F5F9]/30">
              <button 
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2.5 rounded-xl bg-[#071A3D] text-white font-display text-[10px] font-bold uppercase tracking-widest cursor-pointer hover:bg-saffron-start hover:shadow-lg transition-all"
              >
                Close Briefing
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
