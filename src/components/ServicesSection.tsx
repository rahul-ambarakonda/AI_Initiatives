const SERVICES = [
  {
    title: 'Digital Solution Development',
    description:
      'End-to-end digital service designed to factor in all facets of modern engineering and design transformation.',
  },
  {
    title: 'Digital Business Automation',
    description:
      'Boost revenue streams and stay ahead of competition with integrated digital automation solutions.',
  },
  {
    title: 'Digital Quality Assurance',
    description:
      'Enhance product quality and reliability with our comprehensive digital quality assurance services.',
  },
];

export default function ServicesSection() {
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
          {SERVICES.map(({ title, description }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl bg-blue-50 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-purple-400/0 to-blue-400/0 transition duration-500 group-hover:from-cyan-400/10 group-hover:via-purple-400/10 group-hover:to-blue-400/10" />
              <div className="relative p-6">
                <h3 className="mb-3 text-xl font-bold text-slate-950 transition-colors duration-300 group-hover:text-indigo-600">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-700">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
