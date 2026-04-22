'use client';

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';
import { projects, Project } from '@/lib/projects';
import Image from 'next/image';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleProjectOpen = (project: Project) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  const handleProjectModalClose = () => {
    setIsProjectModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header onContactOpen={() => setIsContactModalOpen(true)} />
      <Hero />

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured AI Initiatives
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our cutting-edge AI projects transforming digital engineering, quality, and business operations for industry leaders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={handleProjectOpen}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a range of services to help you achieve your business goals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Solution Development</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  End-to-end digital service designed to factor in all facets of modern engineering and design transformation.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Business Automation</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Boost revenue streams and stay ahead of competition with integrated digital automation solutions.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Quality Assurance</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Enhance product quality and reliability with our comprehensive digital quality assurance services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
