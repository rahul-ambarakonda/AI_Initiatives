import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProjectCard from '@/components/ProjectCard';
import ServicesSection from '@/components/ServicesSection';
import { projects, type Project } from '@/lib/projects';

type SolutionsProps = {
  onProjectOpen: (project: Project) => void;
};

export default function Solutions({ onProjectOpen }: SolutionsProps) {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  }, [hash]);

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
              Explore our cutting-edge AI projects transforming digital engineering, quality, and
              business operations for industry leaders.
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
