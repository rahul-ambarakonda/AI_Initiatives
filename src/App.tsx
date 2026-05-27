import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import ContactModal from '@/components/ContactModal';
import Footer from '@/components/Footer';
import { projects, Project } from '@/lib/projects';

function ArrowRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="m12 3 1.7 5.2L19 10l-5.3 1.8L12 17l-1.7-5.2L5 10l5.3-1.8Z" />
      <path d="m5 18 1 3 1 3 1-3 1-3 1-1-1-1-1-3-1 3-1 1Z" />
    </svg>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="bg-slate-100 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">
            Services
          </p>
          <h2 className="mt-4 text-4xl font-bold text-slate-950 md:text-5xl">Our Services</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            We offer a range of services to help you achieve your business goals.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="group relative overflow-hidden rounded-2xl bg-blue-50 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-purple-400/0 to-blue-400/0 transition duration-500 group-hover:from-cyan-400/10 group-hover:via-purple-400/10 group-hover:to-blue-400/10" />
            <div className="relative p-6">
              <h3 className="mb-3 text-xl font-bold text-slate-950 transition-colors duration-300 group-hover:text-indigo-600">
                Digital Solution Development
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                End-to-end digital service designed to factor in all facets of modern engineering and design transformation.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-blue-50 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-purple-400/0 to-blue-400/0 transition duration-500 group-hover:from-cyan-400/10 group-hover:via-purple-400/10 group-hover:to-blue-400/10" />
            <div className="relative p-6">
              <h3 className="mb-3 text-xl font-bold text-slate-950 transition-colors duration-300 group-hover:text-indigo-600">
                Digital Business Automation
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                Boost revenue streams and stay ahead of competition with integrated digital automation solutions.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-blue-50 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-purple-400/0 to-blue-400/0 transition duration-500 group-hover:from-cyan-400/10 group-hover:via-purple-400/10 group-hover:to-blue-400/10" />
            <div className="relative p-6">
              <h3 className="mb-3 text-xl font-bold text-slate-950 transition-colors duration-300 group-hover:text-indigo-600">
                Digital Quality Assurance
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                Enhance product quality and reliability with our comprehensive digital quality assurance services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoverPage({
  onSolutionsOpen,
  onContactOpen,
  projectsCount,
  categoryCount,
  demoCount,
}: {
  onSolutionsOpen: () => void;
  onContactOpen: () => void;
  projectsCount: number;
  categoryCount: number;
  demoCount: number;
}) {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(248, 251, 255, 0.98) 0%, rgba(242, 245, 255, 0.96) 38%, rgba(252, 250, 255, 0.98) 72%, rgba(255, 255, 255, 1) 100%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-50 mix-blend-multiply"
        style={{
          backgroundImage:
            'radial-gradient(rgba(148, 163, 184, 0.16) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute inset-0">
        <div className="absolute left-[-6rem] top-16 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-[-5rem] top-24 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute bottom-[-5rem] left-1/3 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            <SparkIcon />
            AI - COE Digital Engineering Solutions
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Enterprise AI solutions for engineering excellence, quality assurance, and intelligent business automation
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            We architect AI-driven solutions that streamline complex engineering workflows, elevate operational standards, and accelerate time-to-delivery, empowering teams to transition from manual processes to scalable, modern digital systems.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onSolutionsOpen}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Solutions
              <ArrowRightIcon />
            </button>
            <button
              onClick={onContactOpen}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              Contact us
            </button>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
              <div className="text-2xl font-bold text-slate-950">{projectsCount}</div>
              <div className="mt-1 text-sm text-slate-600">Featured projects</div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
              <div className="text-2xl font-bold text-slate-950">{categoryCount}</div>
              <div className="mt-1 text-sm text-slate-600">Delivery tracks</div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
              <div className="text-2xl font-bold text-slate-950">{demoCount}</div>
              <div className="mt-1 text-sm text-slate-600">Demo-ready builds</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionsPage({
  onBackToCover,
  onProjectOpen,
}: {
  onBackToCover: () => void;
  onProjectOpen: (project: Project) => void;
}) {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(135deg, rgba(248, 251, 255, 0.98) 0%, rgba(242, 245, 255, 0.96) 38%, rgba(252, 250, 255, 0.98) 72%, rgba(255, 255, 255, 1) 100%)',
          }}
        />
        <div className="absolute inset-0">
          <div className="absolute left-[-6rem] top-16 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute right-[-5rem] top-24 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
          <div className="absolute bottom-[-5rem] left-1/3 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">
              Solutions
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Enterprise AI Strategies & Solutions
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Explore our cutting-edge AI projects transforming digital engineering, quality, and business operations for industry leaders.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={onProjectOpen} />
            ))}
          </div>
        </div>
      </section>

      <ServicesSection />
    </>
  );
}

export default function App() {
  const [route, setRoute] = useState(() => ({
    pathname: window.location.pathname,
    hash: window.location.hash,
  }));
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const categoryCount = new Set(projects.map((project) => project.category)).size;
  const demoCount = projects.filter((project) => project.videoUrl).length;

  useEffect(() => {
    const onPopState = () => {
      setRoute({ pathname: window.location.pathname, hash: window.location.hash });
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    if (route.pathname === '/solutions' && route.hash) {
      const id = route.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [route.pathname, route.hash]);

  const navigateTo = (pathname: string, hash = '') => {
    const nextUrl = `${pathname}${hash}`;
    if (window.location.pathname + window.location.hash !== nextUrl) {
      window.history.pushState({}, '', nextUrl);
      setRoute({ pathname, hash });
    }
  };

  const handleProjectOpen = (project: Project) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  const handleProjectModalClose = () => {
    setIsProjectModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Header
        onHomeOpen={() => navigateTo('/')}
        onSolutionsOpen={() => navigateTo('/solutions')}
        onServicesOpen={() => navigateTo('/solutions', '#services')}
        onContactOpen={() => setIsContactModalOpen(true)}
        currentPath={route.pathname}
      />

      {route.pathname === '/solutions' ? (
        <SolutionsPage
          onBackToCover={() => navigateTo('/')}
          onProjectOpen={handleProjectOpen}
        />
      ) : (
        <CoverPage
          onSolutionsOpen={() => navigateTo('/solutions')}
          onContactOpen={() => setIsContactModalOpen(true)}
          projectsCount={projects.length}
          categoryCount={categoryCount}
          demoCount={demoCount}
        />
      )}

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isProjectModalOpen}
          onClose={handleProjectModalClose}
        />
      )}

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      <Footer />
    </main>
  );
}
