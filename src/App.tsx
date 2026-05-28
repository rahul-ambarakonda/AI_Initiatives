import { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectModal from '@/components/ProjectModal';
import ContactModal from '@/components/ContactModal';
import Home from '@/pages/Home';
import Solutions from '@/pages/Solutions';
import { type Project } from '@/lib/projects';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <ScrollToTop />
      <Header onContactOpen={() => setIsContactModalOpen(true)} />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home onContactOpen={() => setIsContactModalOpen(true)} />}
          />
          <Route
            path="/solutions"
            element={<Solutions onProjectOpen={setSelectedProject} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {isContactModalOpen && (
        <ContactModal onClose={() => setIsContactModalOpen(false)} />
      )}

      <Footer />
    </div>
  );
}
