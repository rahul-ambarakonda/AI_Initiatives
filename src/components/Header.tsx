import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

type HeaderProps = {
  onContactOpen: () => void;
};

function HomeIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5.5 10.5V20h13V10.5" />
      <path d="M9.5 20v-6h5v6" />
    </svg>
  );
}

function MailIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function ArrowRightIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export default function Header({ onContactOpen }: HeaderProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navBtn = 'group inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 hover:text-slate-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-200';
  const mobileNavBtn = 'flex items-center gap-3 w-full rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-700';

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-gradient-to-r from-white via-slate-50 to-blue-50/80 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">

          {/* Logo */}
          <button
            onClick={() => navigate('/')}
            className="group flex items-center gap-3 rounded-full px-2 py-1 transition-all duration-300 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-300"
            aria-label="Go to home"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <rect x="5" y="8" width="14" height="9" rx="3" />
                <path d="M12 3v3" />
                <circle cx="9" cy="12" r="1" />
                <circle cx="15" cy="12" r="1" />
                <path d="M9 15h6" />
              </svg>
            </div>
            <div className="text-left">
              <span className="block text-lg font-bold tracking-tight text-blue-700">AI - COE</span>
              <span className="block text-xs text-slate-500">Digital Engineering Solutions</span>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2">
            <button onClick={() => navigate('/')} className={navBtn}>
              <HomeIcon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              <span>Home</span>
            </button>

            <button onClick={() => navigate('/solutions')} className={navBtn}>
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              <span>Solutions</span>
            </button>

            <button onClick={() => navigate('/solutions#services')} className={navBtn}>
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              <span>Services</span>
            </button>

            <button
              onClick={onContactOpen}
              className="group ml-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <MailIcon className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
              <span>Contact us</span>
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center h-10 w-10 rounded-full text-slate-600 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-300"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M18 6 6 18" /><path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md px-4 py-3 flex flex-col gap-1">
          <button onClick={() => navigate('/')} className={mobileNavBtn}>
            <HomeIcon className="h-4 w-4 text-blue-600" />
            Home
          </button>
          <button onClick={() => navigate('/solutions')} className={mobileNavBtn}>
            <ArrowRightIcon className="h-4 w-4 text-blue-600" />
            Solutions
          </button>
          <button onClick={() => navigate('/solutions#services')} className={mobileNavBtn}>
            <ArrowRightIcon className="h-4 w-4 text-blue-600" />
            Services
          </button>
          <button
            onClick={() => { onContactOpen(); setMobileOpen(false); }}
            className="flex items-center gap-3 w-full rounded-xl px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-200 hover:opacity-90 mt-1"
          >
            <MailIcon className="h-4 w-4" />
            Contact us
          </button>
        </div>
      )}
    </header>
  );
}
