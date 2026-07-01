import React, { useState, useEffect, useMemo } from 'react';
import { Search, Flame, TrendingUp, Info } from 'lucide-react';

interface WordSentiment {
  word: string;
  category: 'Development' | 'Welfare' | 'Culture' | 'Electorate' | 'Political';
  score: number; // positive sentiment percentage
  polarity: 'Positive' | 'Neutral' | 'Negative';
  volume: 'High' | 'Medium' | 'Low';
  demographic: string;
  context: string;
}

interface SentimentDetectorProps {
  onNavigate?: (page: string) => void;
}

export const SentimentDetector: React.FC<SentimentDetectorProps> = ({ onNavigate }) => {
  // 100+ Word Corpus Database
  const corpus: WordSentiment[] = useMemo(() => [
    // Development category
    { word: 'Vikas', category: 'Development', score: 85, polarity: 'Positive', volume: 'High', demographic: 'Youth / Urban Electorate', context: 'Narratives around infrastructural growth are dominating metro sectors.' },
    { word: 'Rozgar', category: 'Development', score: 42, polarity: 'Negative', volume: 'High', demographic: 'Youth / Rural Job Seekers', context: 'High volume of inquiries around regional employment guarantees.' },
    { word: 'Startup', category: 'Development', score: 78, polarity: 'Positive', volume: 'Medium', demographic: 'Tech Graduates / Metros', context: 'Favorable response to innovation grants and digital funding policies.' },
    { word: 'Digital India', category: 'Development', score: 92, polarity: 'Positive', volume: 'High', demographic: 'Youth / Small Traders', context: 'Massive adoption and support for digital payments and online markets.' },
    { word: 'Smart City', category: 'Development', score: 62, polarity: 'Positive', volume: 'Medium', demographic: 'Urban Taxpayers', context: 'Strong support for civic infrastructure renovations, demand for speed.' },
    { word: 'Bullet Train', category: 'Development', score: 70, polarity: 'Positive', volume: 'Medium', demographic: 'Metro Commuters', context: 'High aspirational index. Represents global-standard connectivity.' },
    { word: 'GST', category: 'Development', score: 51, polarity: 'Neutral', volume: 'High', demographic: 'Business Owners / MSMEs', context: 'Complex sentiment; appreciation for digitization vs complaints on compliance.' },
    { word: 'UPI', category: 'Development', score: 96, polarity: 'Positive', volume: 'High', demographic: 'Universal Electorate', context: 'Maximum consensus positive score. Fuses pride with everyday utility.' },
    { word: 'Inflation', category: 'Development', score: 28, polarity: 'Negative', volume: 'High', demographic: 'Middle Class / Homemakers', context: 'Primary driver of household anxiety; focus on commodity price stability.' },
    { word: 'GDP Growth', category: 'Development', score: 75, polarity: 'Positive', volume: 'Medium', demographic: 'Corporate / Investors', context: 'National pride index link. Strong alignment with macro narratives.' },
    { word: 'Make In India', category: 'Development', score: 82, polarity: 'Positive', volume: 'High', demographic: 'Industrial Workers / Youth', context: 'Linked heavily with local manufacture prestige and career creation.' },
    { word: 'Highways', category: 'Development', score: 88, polarity: 'Positive', volume: 'High', demographic: 'Rural & Semi-Urban Commuters', context: 'Visible development marker. High appreciation for corridor connection speeds.' },
    { word: 'Metro Rail', category: 'Development', score: 84, polarity: 'Positive', volume: 'High', demographic: 'Tier-1 & Tier-2 City Voters', context: 'Strongly associated with modernization and reduced daily traffic.' },
    { word: 'IT Hubs', category: 'Development', score: 79, polarity: 'Positive', volume: 'Medium', demographic: 'Software Professionals', context: 'Demands for satellite office setups in secondary tier-2 cities.' },
    { word: 'Manufacturing', category: 'Development', score: 71, polarity: 'Positive', volume: 'Medium', demographic: 'Blue-Collar Workforce', context: 'Linked with expectations of long-term job security and factory setups.' },
    { word: 'Green Energy', category: 'Development', score: 74, polarity: 'Positive', volume: 'Low', demographic: 'Educated Urban Youth', context: 'Interest in solar subsidies and pollution reduction models.' },
    { word: 'FDI', category: 'Development', score: 60, polarity: 'Neutral', volume: 'Low', demographic: 'Liaisons / Trade Guilds', context: 'Appreciated for economic injection but debated for local merchant protection.' },
    { word: 'Data Cost', category: 'Development', score: 90, polarity: 'Positive', volume: 'High', demographic: 'Rural & Urban Youth', context: 'Low mobile data tariff is seen as a critical baseline democratic right.' },
    { word: 'Tax Cut', category: 'Development', score: 35, polarity: 'Negative', volume: 'High', demographic: 'Salaried Class Employees', context: 'High expectations for standard deduction expansion in upcoming budgets.' },
    { word: 'Economic corridor', category: 'Development', score: 76, polarity: 'Positive', volume: 'Medium', demographic: 'Industrialists / Logistics', context: 'Optimism around trade path alignments and transit time reduction.' },

    // Welfare category
    { word: 'Kisan Samman', category: 'Welfare', score: 81, polarity: 'Positive', volume: 'High', demographic: 'Agrarian / Small Farmers', context: 'Direct bank transfer highly appreciated. Acts as financial buffer.' },
    { word: 'Ujjwala', category: 'Welfare', score: 75, polarity: 'Positive', volume: 'High', demographic: 'Rural Female Electorate', context: 'Strong correlation with women voter loyalty. Demand for refill subsidy.' },
    { word: 'PM Awas', category: 'Welfare', score: 89, polarity: 'Positive', volume: 'High', demographic: 'Low-Income Households', context: 'Tangible asset ownership creates long-lasting positive alignment.' },
    { word: 'Ayushman Bharat', category: 'Welfare', score: 83, polarity: 'Positive', volume: 'High', demographic: 'Senior Citizens / Poor', context: 'Appreciated for cashless medical buffers. High local awareness.' },
    { word: 'Subsidies', category: 'Welfare', score: 64, polarity: 'Neutral', volume: 'High', demographic: 'Farmers & Lower Income Groups', context: 'Debate on budget efficiency vs direct welfare survival requirements.' },
    { word: 'Ration Scheme', category: 'Welfare', score: 87, polarity: 'Positive', volume: 'High', demographic: 'Rural BPL Households', context: 'Free food security forms a major voting buffer in agricultural belts.' },
    { word: 'Swasthya', category: 'Welfare', score: 58, polarity: 'Neutral', volume: 'Medium', demographic: 'Universal Electorate', context: 'High demand for village-level clinics and diagnostic centers.' },
    { word: 'Shiksha', category: 'Welfare', score: 68, polarity: 'Positive', volume: 'Medium', demographic: 'Youth / Parents', context: 'Interest in digital classrooms and regional college standard upgrades.' },
    { word: 'Direct Benefit', category: 'Welfare', score: 91, polarity: 'Positive', volume: 'High', demographic: 'Rural Beneficiaries', context: 'Elimination of local middlemen is rated extremely positive.' },
    { word: 'Piped Water', category: 'Welfare', score: 82, polarity: 'Positive', volume: 'High', demographic: 'Rural Women Electorate', context: 'High satisfaction index in completed grid districts. Major quality-of-life shift.' },
    { word: 'Crop Insurance', category: 'Welfare', score: 45, polarity: 'Negative', volume: 'High', demographic: 'Dry-belt Cultivators', context: 'Complaints regarding payout delays and high assessment thresholds.' },
    { word: 'Fertilizer Supply', category: 'Welfare', score: 66, polarity: 'Neutral', volume: 'High', demographic: 'Kharif Cultivators', context: 'Anxieties regarding seasonal availability and local black-market pricing.' },
    { word: 'Jan Dhan Account', category: 'Welfare', score: 85, polarity: 'Positive', volume: 'High', demographic: 'Unorganized Labours', context: 'Baseline banking integration facilitates trust for strategic manifesto promises.' },
    { word: 'Mudra Loans', category: 'Welfare', score: 72, polarity: 'Positive', volume: 'Medium', demographic: 'Self-employed / Micro-units', context: 'Helped local micro-enterprise, although demands for collateral simplification remain.' },
    { word: 'Pension Yojana', category: 'Welfare', score: 70, polarity: 'Positive', volume: 'Medium', demographic: 'Elderly / Unorganized Sector', context: 'Security guarantee appreciated; demand to raise monthly quantum.' },
    { word: 'Scholarships', category: 'Welfare', score: 73, polarity: 'Positive', volume: 'Medium', demographic: 'Student Community', context: 'Crucial for backward classes. Direct payout timing is a key metric.' },
    { word: 'Women Welfare', category: 'Welfare', score: 80, polarity: 'Positive', volume: 'High', demographic: 'Nari Shakti Segment', context: 'Safety and self-help group credits dominate local conversations.' },
    { word: 'Sanitation', category: 'Welfare', score: 77, polarity: 'Positive', volume: 'Medium', demographic: 'Rural Households', context: 'Appreciated for hygiene dignity, but calls for water loop maintenance.' },
    { word: 'Solar Pump', category: 'Welfare', score: 79, polarity: 'Positive', volume: 'Low', demographic: 'Irrigation Farmers', context: 'High demand due to power tariff cuts. Seen as capital asset.' },
    { word: 'Free Medicals', category: 'Welfare', score: 81, polarity: 'Positive', volume: 'Medium', demographic: 'Chronic Patients / Elderly', context: 'Strong appeal for government pharmacies (Jan Aushadhi) providing generic cuts.' },

    // Culture category
    { word: 'Mandir', category: 'Culture', score: 86, polarity: 'Positive', volume: 'High', demographic: 'Traditionalist Electorate', context: 'Strong pride trigger. Central to regional cultural sovereignty.' },
    { word: 'Ayodhya', category: 'Culture', score: 89, polarity: 'Positive', volume: 'High', demographic: 'Traditionalist / Tourism Workers', context: 'Symbol of heritage renaissance. High correlation with positive outlook.' },
    { word: 'Kashi', category: 'Culture', score: 84, polarity: 'Positive', volume: 'High', demographic: 'Traditionalists / Pilgrims', context: 'Spiritual corridor development has high narrative resonance.' },
    { word: 'Somnath', category: 'Culture', score: 80, polarity: 'Positive', volume: 'Medium', demographic: 'Traditionalists', context: 'Symbolizes cultural resilience and restoration of heritage.' },
    { word: 'Sanatan', category: 'Culture', score: 73, polarity: 'Positive', volume: 'High', demographic: 'Traditionalists', context: 'High defensive voter mobilization index around identity protection.' },
    { word: 'Rashtra Gaurav', category: 'Culture', score: 88, polarity: 'Positive', volume: 'High', demographic: 'Youth / Armed Forces Families', context: 'Associated with national pride and defense sovereignty.' },
    { word: 'Swabhiman', category: 'Culture', score: 82, polarity: 'Positive', volume: 'Medium', demographic: 'Regional Communities', context: 'Pride in local historical icons and community representation.' },
    { word: 'Heritage Tourism', category: 'Culture', score: 79, polarity: 'Positive', volume: 'Medium', demographic: 'Local Business / Hotel Owners', context: 'Economy boost from temple circuits is highly appreciated.' },
    { word: 'Vedic Wisdom', category: 'Culture', score: 75, polarity: 'Positive', volume: 'Low', demographic: 'Intellectuals / Traditionalists', context: 'Appreciation of ancient knowledge integration in education systems.' },
    { word: 'National Unity', category: 'Culture', score: 81, polarity: 'Positive', volume: 'Medium', demographic: 'Universal Electorate', context: 'Narrative around safety and stability of federal structures.' },
    { word: 'Cultural Pride', category: 'Culture', score: 85, polarity: 'Positive', volume: 'High', demographic: 'Youth Segment', context: 'Strong desire to represent Indian heritage globally.' },
    { word: 'Festivals', category: 'Culture', score: 87, polarity: 'Positive', volume: 'Medium', demographic: 'Local Artisans / Traders', context: 'Economic booms during festivals are monitored for retail sentiments.' },
    { word: 'Sanskrit', category: 'Culture', score: 62, polarity: 'Neutral', volume: 'Low', demographic: 'Scholars / Traditionalists', context: 'Supported as heritage, though less focus on direct electoral voting choices.' },
    { word: 'Local Dialects', category: 'Culture', score: 76, polarity: 'Positive', volume: 'Medium', demographic: 'Regional Voters', context: 'Manifestos printed in native dialects draw instant local trust.' },
    { word: 'Swadeshi', category: 'Culture', score: 78, polarity: 'Positive', volume: 'Medium', demographic: 'Local Traders / Artisans', context: 'Support for home-grown brands and boycotting import dumps.' },
    { word: 'Coronation', category: 'Culture', score: 83, polarity: 'Positive', volume: 'Low', demographic: 'Leadership Seekers', context: 'Coronation narrative (Rajtilak) triggers aspirational leadership choices.' },
    { word: 'Temples', category: 'Culture', score: 81, polarity: 'Positive', volume: 'High', demographic: 'Traditionalists', context: 'Maintenance of local historical sites acts as soft developmental marker.' },
    { word: 'Yoga', category: 'Culture', score: 80, polarity: 'Positive', volume: 'Medium', demographic: 'Fitness Groups / Urban Citizens', context: 'Associated with national pride and soft power globally.' },
    { word: 'Ayurveda', category: 'Culture', score: 75, polarity: 'Positive', volume: 'Medium', demographic: 'Elderly / Naturopaths', context: 'Subsidies and research in local medical systems are highly favored.' },
    { word: 'Ganga Aarti', category: 'Culture', score: 89, polarity: 'Positive', volume: 'High', demographic: 'Tourism Workers / Pilgrims', context: 'Ghat clean-up projects highly visible; triggers positive rating.' },

    // Electorate category
    { word: 'Yuva Shakti', category: 'Electorate', score: 84, polarity: 'Positive', volume: 'High', demographic: 'First-time Voters', context: 'Strong aspirations for high-quality vocational coaching and job security.' },
    { word: 'Nari Shakti', category: 'Electorate', score: 86, polarity: 'Positive', volume: 'High', demographic: 'Female Electorate', context: 'Interest in safety indexes, local credits, and household subsidies.' },
    { word: 'First-Timer', category: 'Electorate', score: 79, polarity: 'Positive', volume: 'High', demographic: 'Aged 18-21 Electorate', context: 'Digital first segment. Driven by job prospects and global status.' },
    { word: 'Middle Class', category: 'Electorate', score: 48, polarity: 'Neutral', volume: 'High', demographic: 'Salaried Professionals', context: 'Appreciates stability but anxious about tax brackets and price rises.' },
    { word: 'Farmers', category: 'Electorate', score: 55, polarity: 'Neutral', volume: 'High', demographic: 'Agrarian Families', context: 'Complex sector. High demand for price guarantees (MSP) and seed subsidies.' },
    { word: 'Ground Workers', category: 'Electorate', score: 82, polarity: 'Positive', volume: 'Medium', demographic: 'Party Cadres', context: 'Loyal block. Demands recognition and direct access to regional leadership.' },
    { word: 'OBC Segment', category: 'Electorate', score: 68, polarity: 'Neutral', volume: 'High', demographic: 'OBC Voters', context: 'Key factor in constituency seat configurations and representation models.' },
    { word: 'SC/ST Segment', category: 'Electorate', score: 65, polarity: 'Neutral', volume: 'High', demographic: 'SC/ST Voters', context: 'Welfare coverage and safety indicators are primary sentiment drivers.' },
    { word: 'Urban Professional', category: 'Electorate', score: 70, polarity: 'Positive', volume: 'High', demographic: 'Corporate Workers', context: 'Strongly focuses on city infrastructure, ease of business, and connectivity.' },
    { status: 'ok', word: 'Senior Citizens', category: 'Electorate', score: 75, polarity: 'Positive', volume: 'Medium', demographic: 'Elderly segment', context: 'Prioritize healthcare access, safety, and fixed income tax relief.' },
    { word: 'Traders', category: 'Electorate', score: 60, polarity: 'Neutral', volume: 'High', demographic: 'Small Shopkeepers', context: 'GST filing simplified models and local credit systems are desired.' },
    { word: 'Labor Union', category: 'Electorate', score: 49, polarity: 'Neutral', volume: 'Medium', demographic: 'Factory / Construction Workers', context: 'Anxious on daily wage baselines and welfare registrations.' },
    { word: 'Rural Youth', category: 'Electorate', score: 69, polarity: 'Neutral', volume: 'High', demographic: 'Aged 18-25 (Villages)', context: 'Eager for digital skill programs and military recruitment entries.' },
    { word: 'Ex-Servicemen', category: 'Electorate', score: 83, polarity: 'Positive', volume: 'Medium', demographic: 'Defense Veterans', context: 'National security focus. Strongly align with pride-based policy models.' },
    { word: 'Artisans', category: 'Electorate', score: 71, polarity: 'Positive', volume: 'Low', demographic: 'Handloom / Handicraft Workers', context: 'Favorable responses to craft cluster setups and direct merchant apps.' },
    { word: 'Vikas Mitra', category: 'Electorate', score: 78, polarity: 'Positive', volume: 'Medium', demographic: 'Welfare Volunteers', context: 'Appreciated for simplifying welfare access at local doorsteps.' },
    { word: 'Migrant Workers', category: 'Electorate', score: 50, polarity: 'Neutral', volume: 'Medium', demographic: 'Migrant Laborers', context: 'Requires portable ration cards and low-cost urban rental schemes.' },
    { word: 'Cooperative Societies', category: 'Electorate', score: 72, polarity: 'Positive', volume: 'Medium', demographic: 'Dairy / Credit Societies', context: 'Crucial in rural bank networks and farm finance structures.' },
    { word: 'Aspirants', category: 'Electorate', score: 59, polarity: 'Neutral', volume: 'High', demographic: 'Competitive Exam Students', context: 'Extreme focus on exam leak preventions and prompt calendar releases.' },
    { word: 'Housewives', category: 'Electorate', score: 66, polarity: 'Neutral', volume: 'High', demographic: 'Home Executives', context: 'Price dynamics of gas cylinder and kitchen staples govern loyalty.' },

    // Political category
    { word: 'Manifesto', category: 'Political', score: 70, polarity: 'Positive', volume: 'High', demographic: 'Decided Voters', context: 'Voters review document for concrete welfare guarantees and tax reliefs.' },
    { word: 'NDA', category: 'Political', score: 72, polarity: 'Positive', volume: 'High', demographic: 'National Focus Voters', context: 'Appreciated for stability and infrastructure pace, criticisms on prices.' },
    { word: 'Coalition', category: 'Political', score: 56, polarity: 'Neutral', volume: 'High', demographic: 'Policy Observers', context: 'Debate on compromise-policy models vs decisive mandate governance.' },
    { word: 'Exit Poll', category: 'Political', score: 62, polarity: 'Neutral', volume: 'High', demographic: 'General Public', context: 'High curiosity index. Fuses statistical excitement with narratives.' },
    { word: 'Rallies', category: 'Political', score: 80, polarity: 'Positive', volume: 'High', demographic: 'Party Supporters', context: 'High volume. Crucial for regional cadre pride and visible strength.' },
    { word: 'Swing Vote', category: 'Political', score: 50, polarity: 'Neutral', volume: 'Medium', demographic: 'Undecided Voters', context: 'Target of dynamic communication channels. Driven by local issues.' },
    { word: 'Anti-incumbency', category: 'Political', score: 38, polarity: 'Negative', volume: 'High', demographic: 'Disgruntled Segments', context: 'Driven by local MLA performance gaps and youth unemployment.' },
    { word: 'Seat Sharing', category: 'Political', score: 48, polarity: 'Neutral', volume: 'High', demographic: 'Political Analysts', context: 'Frequent volume spikes. Monitored for coalition stability indexes.' },
    { word: 'Booth Committee', category: 'Political', score: 85, polarity: 'Positive', volume: 'Medium', demographic: 'Ground Coordinators', context: 'Key victory metric. Strong structures correlate to high turnout.' },
    { word: 'Decisive Mandate', category: 'Political', score: 76, polarity: 'Positive', volume: 'Medium', demographic: 'Urban Taxpayers / Corporate', context: 'Linked with policy stability and bold reform expectations.' },
    { word: 'Alliance', category: 'Political', score: 53, polarity: 'Neutral', volume: 'High', demographic: 'General Electorate', context: 'Evaluated for ideology consensus vs opportunist power-seeking.' },
    { word: 'Candidate Image', category: 'Political', score: 81, polarity: 'Positive', volume: 'High', demographic: 'Undecided Voters', context: 'Candidate access and regional clean reputation often outweighs party choice.' },
    { word: 'Voter Turnout', category: 'Political', score: 70, polarity: 'Neutral', volume: 'High', demographic: 'Election Officers / Cadres', context: 'Analyzed for silent wave signs or local anti-incumbency surge.' },
    { word: 'By-Election', category: 'Political', score: 59, polarity: 'Neutral', volume: 'Medium', demographic: 'Constituency Voters', context: 'Intense micro-campaigning, serves as mock check for state waves.' },
    { word: 'Panchayat Polls', category: 'Political', score: 73, polarity: 'Positive', volume: 'High', demographic: 'Rural Electorate', context: 'Extreme local density. Governed by personal clan loops and direct favors.' },
    { word: 'Digital Campaign', category: 'Political', score: 77, polarity: 'Positive', volume: 'High', demographic: 'Youth Electorate', context: 'Appreciated for instant reach, though fake news monitoring is desired.' },
    { word: 'Cadre Pride', category: 'Political', score: 83, polarity: 'Positive', volume: 'Medium', demographic: 'Active Party Volunteers', context: 'Driven by rallies, leader visits, and booth worker recognition events.' },
    { word: 'Town Halls', category: 'Political', score: 75, polarity: 'Positive', volume: 'Low', demographic: 'Middle Class / Traders', context: 'Interactive local Q&A builds candidate credibility rapidly.' },
    { word: 'Door to Door', category: 'Political', score: 82, polarity: 'Positive', volume: 'High', demographic: 'Rural & Urban Families', context: 'Personal contact remains the gold standard of election conversions.' },
    { word: 'Negative Campaigning', category: 'Political', score: 32, polarity: 'Negative', volume: 'Medium', demographic: 'Silent Voters', context: 'Backlashes noted if statements target civilizational icons.' }
  ] as WordSentiment[], []);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedWord, setSelectedWord] = useState<WordSentiment>(corpus[0]);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeStreamIndex, setActiveStreamIndex] = useState(0);

  // Filtered corpus
  const filteredCorpus = useMemo(() => {
    return corpus.filter(item => {
      const matchesSearch = item.word.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [corpus, searchQuery, activeCategory]);

  // Handle word streaming animation cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStreamIndex(prev => (prev + 1) % 15); // cycle through first 15 words
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  // Update selected word if active stream changes
  useEffect(() => {
    if (searchQuery === '' && filteredCorpus.length > activeStreamIndex) {
      // Auto select active streaming word only if user is not actively searching
      setSelectedWord(filteredCorpus[activeStreamIndex]);
    }
  }, [activeStreamIndex, filteredCorpus, searchQuery]);

  return (
    <section className="py-20 bg-white border-t border-b border-[#071A3D]/5 relative overflow-hidden">
      {/* Soft gradient backgrounds */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-saffron-start/5 rounded-full blur-[120px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#00B4D8]/5 rounded-full blur-[100px] opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071A3D]/5 border border-saffron-start/20 text-xs font-semibold tracking-widest uppercase text-saffron-end w-fit">
            Voter Sentiment Analysis
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#071A3D] max-w-2xl leading-tight">
            Voter Language & <span className="text-saffron-gradient">Sentiment Analyzer</span>
          </h2>
          <p className="font-sans text-[#071A3D]/60 max-w-2xl text-sm leading-relaxed">
            Every day, millions of voters talk about policy, development, and heritage. We track a 100+ keyword database in Hindi, English, and regional languages to measure what matters to citizens in plain terms.
          </p>
        </div>

        {/* Live Ingestion Stream Showcase */}
        <div className="mb-10 bg-[#F3F5F9]/60 border border-[#071A3D]/5 p-4.5 rounded-2xl relative overflow-hidden">
          <div className="absolute top-3.5 left-4 flex items-center gap-2 z-10 bg-[#F3F5F9] px-2.5 py-0.5 rounded border border-[#071A3D]/5 text-[9px] font-display font-bold tracking-widest text-[#071A3D]/60 uppercase">
            <Flame className="w-3 h-3 text-saffron-start animate-pulse" />
            Live Ingestion Stream
          </div>
          
          <div className="flex gap-3 overflow-x-auto whitespace-nowrap scrollbar-none pt-7 pb-2 px-1">
            {corpus.slice(0, 15).map((item, idx) => {
              const isActive = idx === activeStreamIndex;
              return (
                <button
                  key={item.word}
                  onClick={() => {
                    setSelectedWord(item);
                    setActiveStreamIndex(idx);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-display font-bold uppercase transition-all border flex items-center gap-2 ${
                    isActive
                      ? 'bg-gradient-to-r from-saffron-start to-saffron-end text-white border-transparent shadow-[0_0_12px_rgba(255,106,0,0.2)] scale-105'
                      : 'bg-white text-[#071A3D]/65 border-[#071A3D]/5 hover:border-saffron-start/30'
                  }`}
                >
                  {item.word}
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    item.polarity === 'Positive' 
                      ? 'bg-emerald-500' 
                      : item.polarity === 'Negative' 
                        ? 'bg-red-500' 
                        : 'bg-amber-500'
                  }`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Search, Filter & Detail Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Keyword Explorer Grid (Cols 7) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="glass-panel p-6 rounded-2xl border-[#071A3D]/5">
              
              {/* Search & Category Filter Bar */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-[#071A3D]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search voter keywords (e.g. Vikas, Subsidies...)"
                    className="w-full bg-[#F3F5F9]/70 border border-[#071A3D]/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#071A3D] focus:outline-none focus:border-saffron-start focus:ring-1 focus:ring-saffron-start transition-all"
                  />
                </div>

                <div className="flex gap-1 overflow-x-auto scrollbar-none bg-[#F3F5F9]/80 p-1 rounded-xl border border-[#071A3D]/10">
                  {['All', 'Development', 'Welfare', 'Culture', 'Electorate', 'Political'].map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`text-[9px] font-display font-bold uppercase px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                        activeCategory === cat
                          ? 'bg-gradient-to-r from-saffron-start to-saffron-end text-white shadow-sm'
                          : 'text-[#071A3D]/50 hover:text-[#071A3D]/80'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid of Results */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-h-[360px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-saffron-start/50 scrollbar-track-[#F3F5F9]">
                {filteredCorpus.map(item => {
                  const isSelected = item.word === selectedWord.word;
                  return (
                    <button
                      key={item.word}
                      onClick={() => setSelectedWord(item)}
                      className={`p-3 rounded-xl border text-left flex flex-col gap-2 transition-all ${
                        isSelected
                          ? 'bg-[#F3F5F9] border-saffron-start shadow-[0_0_10px_rgba(255,106,0,0.06)]'
                          : 'bg-white border-[#071A3D]/5 hover:border-[#071A3D]/20'
                      }`}
                    >
                      <span className="text-xs font-display font-black text-[#071A3D] truncate">{item.word}</span>
                      <div className="flex justify-between items-center text-[8px] font-mono text-[#071A3D]/45 uppercase font-bold">
                        <span>{item.category}</span>
                        <span className={
                          item.polarity === 'Positive' 
                            ? 'text-emerald-600' 
                            : item.polarity === 'Negative' 
                              ? 'text-red-500' 
                              : 'text-amber-500'
                        }>{item.polarity}</span>
                      </div>
                    </button>
                  );
                })}

                {filteredCorpus.length === 0 && (
                  <div className="col-span-full py-8 text-center text-xs text-[#071A3D]/40 font-mono">
                    NO KEYWORDS MATCH SEARCH FILTER.
                  </div>
                )}
              </div>

              {/* Total count footer */}
              <div className="border-t border-[#071A3D]/5 pt-4 mt-6 flex justify-between items-center text-[9px] font-mono text-[#071A3D]/50">
                <span>DATABASE TOTAL: 100+ ELECTION KEYWORDS</span>
                <span>FILTER MATCHES: {filteredCorpus.length} WORDS</span>
              </div>

            </div>
          </div>

          {/* RIGHT: Detailed Ingestion Console */}
          <div className="lg:col-span-5">
            <div className="glass-panel-glow p-6 rounded-2xl border-saffron-start/20 flex flex-col gap-5 h-full relative">
              <div className="flex items-center justify-between border-b border-[#071A3D]/10 pb-3">
                <span className="text-xs font-display font-black tracking-widest text-[#071A3D] uppercase flex items-center gap-2">
                  <TrendingUp className="w-3.5 h-3.5 text-saffron-start" />
                  Sentiment Analysis Profile
                </span>
                <span className="text-[9px] font-mono text-[#071A3D]/40 uppercase font-bold bg-[#F3F5F9] px-2 py-0.5 rounded border border-[#071A3D]/5">
                  {selectedWord.category}
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] text-[#071A3D]/40 uppercase tracking-widest font-bold">VOTER TERM</span>
                <h3 className="font-display text-2xl font-black text-[#071A3D] flex items-center gap-2.5">
                  {selectedWord.word}
                  <span className={`w-2.5 h-2.5 rounded-full ${
                    selectedWord.polarity === 'Positive' 
                      ? 'bg-emerald-500 shadow-[0_0_8px_#10B981]' 
                      : selectedWord.polarity === 'Negative' 
                        ? 'bg-red-500 shadow-[0_0_8px_#EF4444]' 
                        : 'bg-amber-500 shadow-[0_0_8px_#F59E0B]'
                  }`} />
                </h3>
              </div>

              {/* Score bar */}
              <div className="flex flex-col gap-2 bg-[#F3F5F9]/60 p-4 rounded-xl border border-[#071A3D]/5">
                <div className="flex justify-between items-center text-[10px] font-mono text-[#071A3D]/60 font-bold">
                  <span>NET APPROVAL SENTIMENT INDEX</span>
                  <span className="text-saffron-start font-black text-xs">{selectedWord.score}% Positive</span>
                </div>
                <div className="w-full h-2 bg-white rounded-full overflow-hidden border border-[#071A3D]/5">
                  <div 
                    className="h-full bg-gradient-to-r from-saffron-start to-saffron-end rounded-full shadow-[0_0_8px_rgba(255,106,0,0.3)] transition-all duration-500 ease-out"
                    style={{ width: `${selectedWord.score}%` }}
                  />
                </div>
              </div>

              {/* Profile Details Rows */}
              <div className="flex flex-col gap-3.5 text-xs text-[#071A3D]/70 font-sans">
                <div className="flex justify-between border-b border-[#071A3D]/5 pb-2">
                  <span className="font-bold flex items-center gap-1"><Info className="w-3.5 h-3.5 text-[#071A3D]/40" /> Sentiment Polarity</span>
                  <span className={`font-mono font-black uppercase text-[10px] px-2 py-0.5 rounded ${
                    selectedWord.polarity === 'Positive' 
                      ? 'bg-emerald-100 text-emerald-700' 
                      : selectedWord.polarity === 'Negative' 
                        ? 'bg-red-100 text-red-700' 
                        : 'bg-amber-100 text-amber-700'
                  }`}>
                    {selectedWord.polarity}
                  </span>
                </div>

                <div className="flex justify-between border-b border-[#071A3D]/5 pb-2">
                  <span className="font-bold flex items-center gap-1"><Info className="w-3.5 h-3.5 text-[#071A3D]/40" /> Discussion Volume</span>
                  <span className="font-display font-black text-[#071A3D] uppercase text-[10px] tracking-wider">
                    {selectedWord.volume} Volume
                  </span>
                </div>

                <div className="flex justify-between border-b border-[#071A3D]/5 pb-2">
                  <span className="font-bold flex items-center gap-1"><Info className="w-3.5 h-3.5 text-[#071A3D]/40" /> Demographic Focus</span>
                  <span className="font-display font-black text-[#071A3D] text-[10px] text-right truncate max-w-[200px]">
                    {selectedWord.demographic}
                  </span>
                </div>

                <div className="flex flex-col gap-2 mt-1">
                  <span className="font-bold uppercase text-[9px] tracking-widest text-[#071A3D]/50">Strategic AI Context & Action</span>
                  <p className="p-3 bg-[#F3F5F9]/80 border border-[#071A3D]/5 rounded-xl font-mono text-[10px] text-[#071A3D]/65 leading-relaxed">
                    {selectedWord.context}
                  </p>
                </div>
              </div>
              
              <button 
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('contact');
                  } else {
                    const contactSec = document.getElementById('contact');
                    if (contactSec) {
                      contactSec.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
                className="magnetic-btn w-full mt-auto py-3 bg-gradient-to-r from-saffron-start to-saffron-end rounded-xl font-display text-[10px] font-black uppercase tracking-widest text-white hover:shadow-[0_0_20px_rgba(255,106,0,0.22)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Track Keyword In Campaign
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
