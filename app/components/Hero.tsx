'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const aiSolutions = [
    {
      title: '3D Design Automation',
      description: 'AI-powered design generation and optimization',
      category: 'Engineering',
      imageUrl: '/assets/kumpan-electric-SYo5eazBrls-unsplash.jpg',
    },
    {
      title: 'Code Quality Analysis',
      description: 'Real-time code quality and performance insights',
      category: 'Quality',
      imageUrl: '/assets/stephen-dawson-qwtCeJ5cLYs-unsplash.jpg',
    },
    {
      title: 'Document Intelligence',
      description: 'Intelligent document processing and extraction',
      category: 'Intelligence',
      imageUrl: '/assets/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg',
    },
    {
      title: 'Vendor Analytics',
      description: 'Performance monitoring and optimization',
      category: 'Analytics',
      imageUrl: '/assets/stephen-phillips-hostreviews-co-uk-shr_Xn8S8QU-unsplash.jpg',
    },
    {
      title: 'AI SDLC Orchestration',
      description: 'Project intake, Jira planning, coding, testing, and release review',
      category: 'Automation',
      imageUrl: '/assets/vitaly-gariev-omGSZqBXkqY-unsplash.jpg',
    },
  ];

  const categories = ['All', ...new Set(aiSolutions.map((solution) => solution.category))];
  const filteredSolutions = aiSolutions.filter((solution) => {
    const matchesSearch =
      searchTerm.trim().length === 0 ||
      [solution.title, solution.description, solution.category]
        .join(' ')
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' || solution.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="ai-solutions" className="relative bg-gray-800 text-white py-32">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/80"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero content */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            AI-Powered Digital Solutions
          </h1>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            Our team leverages cutting-edge artificial intelligence to transform complex engineering
            challenges. We deliver innovative solutions across 3D design automation, CAD integration,
            code quality analysis, document intelligence, vendor analytics, and AI SDLC orchestration.
          </p>
        </div>

        {/* Search + Classification */}
        <div className="mb-10 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-4 md:p-5 shadow-lg">
          <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <label className="block text-xs font-semibold tracking-[0.2em] text-white/70 uppercase mb-2">
                Search solutions
              </label>
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by title, description, or category"
                className="w-full rounded-xl border border-white/15 bg-gray-950/40 px-4 py-3 text-white placeholder:text-white/45 outline-none focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-300/20"
              />
            </div>

            <div className="md:justify-self-end">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      selectedCategory === category
                        ? 'bg-cyan-400 text-gray-900 shadow-lg shadow-cyan-400/20'
                        : 'bg-white/10 text-white/80 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AI Solutions Grid */}
        {filteredSolutions.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredSolutions.map((solution) => (
              <div
                key={solution.title}
                className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 shadow-lg 
                transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.03] hover:shadow-2xl group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={solution.imageUrl}
                    alt={solution.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center rounded-full bg-black/60 px-3 py-1 text-xs font-bold tracking-wide text-white backdrop-blur-sm">
                      {solution.category}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-md font-bold text-white mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-white/80">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-8 text-center text-white/80">
            No solutions match your search. Try a different keyword or category.
          </div>
        )}
      </div>
    </section>
  );
}
