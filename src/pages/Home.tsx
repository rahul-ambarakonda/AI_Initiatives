import { useNavigate } from 'react-router-dom';
import { projects } from '@/lib/projects';

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

type HomeProps = {
  onContactOpen: () => void;
};

export default function Home({ onContactOpen }: HomeProps) {
  const navigate = useNavigate();
  const categoryCount = new Set(projects.map((p) => p.category)).size;
  const demoCount = projects.filter((p) => p.videoUrl).length;

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
          backgroundImage: 'radial-gradient(rgba(148, 163, 184, 0.16) 1px, transparent 1px)',
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
            Enterprise AI solutions for engineering excellence, quality assurance, and intelligent
            business automation
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            We architect AI-driven solutions that streamline complex engineering workflows, elevate
            operational standards, and accelerate time-to-delivery, empowering teams to transition
            from manual processes to scalable, modern digital systems.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => navigate('/solutions')}
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
              <div className="text-2xl font-bold text-slate-950">{projects.length}</div>
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
