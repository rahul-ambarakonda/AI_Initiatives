'use client';

import Image from 'next/image';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const aiSolutions = [
    {
      title: '3D Design Automation',
      description: 'AI-powered design generation and optimization',
      imageUrl: '/assets/kumpan-electric-SYo5eazBrls-unsplash.jpg', // Abstract 3D/geometric
    },
    {
      title: 'Code Quality Analysis',
      description: 'Real-time code quality and performance insights',
      imageUrl: '/assets/stephen-dawson-qwtCeJ5cLYs-unsplash.jpg', // Code on screen
    },
    {
      title: 'Document Intelligence',
      description: 'Intelligent document processing and extraction',
      imageUrl: '/assets/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg', // Person writing/documents
    },
    {
      title: 'Vendor Analytics',
      description: 'Performance monitoring and optimization',
      imageUrl: '/assets/stephen-phillips-hostreviews-co-uk-shr_Xn8S8QU-unsplash.jpg', // Dashboard/Analytics
    },
  ];

  return (
    <section id="ai-solutions" className="relative bg-gray-800 text-white py-32">
      <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/assets/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg')"}}>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/80"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero content */}
        <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              AI-Powered Digital Solutions
            </h1>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">
              Our team leverages cutting-edge artificial intelligence to transform complex engineering challenges. We deliver innovative solutions across 3D design automation, CAD integration, code quality analysis, document intelligence, and vendor performance optimization.
            </p>
        </div>

        {/* AI Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aiSolutions.map((solution, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-white/20">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={solution.imageUrl}
                  alt={solution.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-md font-bold text-white mb-2">{solution.title}</h3>
                <p className="text-sm text-white/80">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
