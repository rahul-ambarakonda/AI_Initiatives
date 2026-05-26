import { useState } from 'react';
import { Project } from '@/lib/projects';
import VideoModal from './VideoModal';

type ProjectCardProps = {
  project: Project;
  onOpen: (project: Project) => void;
};

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => onOpen(project)}
        className="group relative rounded-xl overflow-hidden shadow-lg transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.03] hover:shadow-2xl cursor-pointer bg-white"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-cyan-400/10 via-purple-400/10 to-blue-400/10 transition duration-500"></div>

        {/* Image Section */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />

          {/* Category Badge */}
          <div className="absolute bottom-4 left-4 transform translate-y-2 group-hover:translate-y-0 transition duration-500">
            <span className="inline-block px-3 py-1 text-xs font-bold text-white bg-gray-900/80 backdrop-blur-sm rounded-full">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 relative">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-1.5 h-8 bg-gray-500 rounded-full flex-shrink-0 group-hover:bg-indigo-500 transition-colors duration-300" />
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
              {project.title}
            </h3>
          </div>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-between">
            {/* Show Demo — left edge */}
            {project.videoUrl && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsVideoOpen(true);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-md"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Show Demo
              </button>
            )}

            {/* Read more */}
            <div className="inline-flex items-center gap-2 text-gray-600 font-semibold text-sm group-hover:text-indigo-600 transition-all duration-300">
              <span className="relative">
                Read more
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </span>
              <svg
                className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        title={project.title}
        videoUrl={project.videoUrl}
      />
    </>
  );
}
