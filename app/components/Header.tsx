'use client';

import Image from 'next/image';

type HeaderProps = {
  onContactOpen: () => void;
};

export default function Header({ onContactOpen }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If on a different page, navigate first, then scroll
      window.location.href = `/#${id}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span className="text-xl font-bold text-gray-800">AI Initiatives</span>
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('ai-solutions')}
              className="text-gray-900 hover:text-gray-700 font-semibold text-sm transition-colors"
            >
              AI Solutions
            </button>
            <button
              onClick={onContactOpen}
              className="text-gray-900 hover:text-gray-700 font-semibold text-sm transition-colors"
            >
              Contact us
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
