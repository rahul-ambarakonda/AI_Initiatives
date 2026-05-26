type HeaderProps = {
  onContactOpen: () => void;
};

function BriefcaseIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1" />
      <rect x="3" y="7" width="18" height="14" rx="2" />
      <path d="M3 12h18" />
      <path d="M10 12v1a2 2 0 0 0 4 0v-1" />
    </svg>
  );
}

function MailIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function ArrowRightIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

const navItems = [
  { id: 'projects', label: 'Projects', icon: BriefcaseIcon },
  { id: 'services', label: 'Services', icon: ArrowRightIcon },
];

export default function Header({ onContactOpen }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-3 rounded-full px-2 py-1 transition-all duration-300 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-300"
            aria-label="Go to top"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect x="5" y="8" width="14" height="9" rx="3" />
                <path d="M12 3v3" />
                <circle cx="9" cy="12" r="1" />
                <circle cx="15" cy="12" r="1" />
                <path d="M9 15h6" />
              </svg>
            </div>

            <div className="text-left">
              <span className="block text-lg font-bold tracking-tight text-blue-700">
                AI - COE
              </span>
              <span className="block text-xs text-slate-500">
                Digital Engineering Solutions
              </span>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-2">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="group inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 hover:text-slate-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                <span>{label}</span>
              </button>
            ))}

            <button
              onClick={onContactOpen}
              className="group ml-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <MailIcon className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
              <span>Contact us</span>
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
