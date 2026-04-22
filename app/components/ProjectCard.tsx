'use client';

import { Project } from '@/lib/projects';
import Image from 'next/image';

type ProjectCardProps = {
  project: Project;
  onOpen: (project: Project) => void;
};

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="inline-block px-3 py-1 text-xs font-bold text-white bg-gray-800/80 rounded-full">
            {project.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-1.5 h-8 bg-gray-500 rounded-full flex-shrink-0" />
          <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
        </div>
        <p className="text-gray-600 text-sm mb-4 h-10 overflow-hidden">{project.description}</p>
        <button
          onClick={() => onOpen(project)}
          className="inline-flex items-center gap-1.5 text-gray-600 hover:text-gray-800 font-semibold text-sm"
        >
          <span>Read more</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
