import { useState, useEffect } from 'react';
import Lenis from 'lenis';

// Core Layout Components
import { Preloader } from './components/Preloader';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Pages Ingestion (7 Dedicated Pages + 3 New Analytics Pages)
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ServicesPage } from './pages/ServicesPage';
import { WarRoomPage } from './pages/WarRoomPage';
import { ImpactPage } from './pages/ImpactPage';
import { SentimentEnginePage } from './pages/SentimentEnginePage';
import { ContactPage } from './pages/ContactPage';
import { TrendsPage } from './pages/TrendsPage';
import { BlogHubPage } from './pages/BlogHubPage';
import { ReportsPage } from './pages/ReportsPage';
import { SeoAboutPage } from './pages/SeoAboutPage';
import { TalkWithNetaji } from './components/TalkWithNetaji';

function App() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [transitionState, setTransitionState] = useState<'idle' | 'wiping' | 'revealing'>('idle');
  const [pendingPage, setPendingPage] = useState<string | null>(null);

  // Handle page changes with Coronation diagonal wipe
  const handleNavigate = (page: string) => {
    if (page === currentPage) return;
    setPendingPage(page);
    setTransitionState('wiping');
  };

  useEffect(() => {
    if (transitionState === 'wiping' && pendingPage) {
      const t = setTimeout(() => {
        // Sync URL Hash in browser address-bar
        window.location.hash = pendingPage === 'home' ? '' : pendingPage;
        setCurrentPage(pendingPage);
        window.scrollTo({ top: 0, behavior: 'instant' });
        setTransitionState('revealing');
      }, 700);
      return () => clearTimeout(t);
    }
    if (transitionState === 'revealing') {
      const t = setTimeout(() => {
        setTransitionState('idle');
        setPendingPage(null);
      }, 700);
      return () => clearTimeout(t);
    }
  }, [transitionState, pendingPage]);

  // Sync state router on direct address bar hash modifications (deep linking / back buttons)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setCurrentPage(hash);
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    if (loading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [loading]);

  return (
    <>
      {/* 0. Preloader Coronation Screen */}
      <Preloader onComplete={() => setLoading(false)} />

      {/* Main content wrapper */}
      <div className={`transition-all duration-1000 ${loading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        
        {/* 1. Header (Dynamic Floating Nav Bar) */}
        <Header currentPage={currentPage} onNavigate={handleNavigate} />

        {/* 2. Page Router State Render */}
        <main className="min-h-screen">
          {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
          {currentPage === 'about' && <About />}
          {currentPage === 'services' && <ServicesPage onNavigate={handleNavigate} />}
          {currentPage === 'warroom' && <WarRoomPage />}
          {currentPage === 'impact' && <ImpactPage />}
          {currentPage === 'sentiment-engine' && <SentimentEnginePage />}
          {currentPage === 'trends' && <TrendsPage />}
          {currentPage === 'blogs' && <BlogHubPage />}
          {currentPage === 'reports' && <ReportsPage />}
          {currentPage === 'contact' && <ContactPage />}
          {currentPage === 'political-strategy' && <SeoAboutPage />}
        </main>

        {/* 3. Footer (Dotted India map & Centerpiece) */}
        <Footer onNavigate={handleNavigate} />
        
        {/* 4. Global Strategy Chatbot (Talk with Netaji AI) */}
        <TalkWithNetaji />
      </div>

      {/* Coronation Page transition curtains */}
      {transitionState !== 'idle' && (
        <>
          <div 
            className={`fixed inset-0 z-[99998] pointer-events-none transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
              transitionState === 'wiping' ? 'translate-x-0' : '-translate-x-full'
            }`}
            style={{ background: 'linear-gradient(135deg, #FF6A00 0%, #FF9A3C 100%)' }}
          />
          <div 
            className={`fixed inset-0 z-[99999] pointer-events-none transition-transform duration-[700ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
              transitionState === 'wiping' ? 'translate-x-0' : '-translate-x-full'
            }`}
            style={{ background: '#02020a' }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center">
              <span className="font-serif italic text-2xl text-white tracking-[0.25em] opacity-80 uppercase animate-pulse">
                DATA • STRATEGY • LEADERSHIP
              </span>
              <div className="w-[120px] h-[1px] bg-saffron-start" />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
