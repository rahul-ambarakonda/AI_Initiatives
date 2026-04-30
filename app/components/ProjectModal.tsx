'use client';

import { Project } from '@/lib/projects';
import Image from 'next/image';

type ProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
  onRequestDemo: () => void; // ADDED
};

export default function ProjectModal({ isOpen, onClose, project, onRequestDemo }: ProjectModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors bg-white/50 hover:bg-white rounded-full p-2 z-20"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Modal Body */}
        <div className="overflow-y-auto">

          {/* Project Image Header */}
          <div className="relative h-72 w-full">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-800/20 to-transparent" />
          </div>

          <div className="p-8 md:p-12">

            {/* Title section */}
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-2 text-sm font-bold text-gray-600 bg-gray-100 rounded-full mb-6">
                {project.category}
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {project.title}
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                {project.description}
              </p>
            </div>

            {/* Problem Statement */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-gray-600 pl-4">
                Problem Statement
              </h3>

              <ul className="space-y-3 pl-4">
                {project.problemStatement.map((problem, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="text-gray-600 font-bold flex-shrink-0 mt-1">›</span>
                    <span className="leading-relaxed">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-gray-600 pl-4">
                Our Solution
              </h3>

              <p className="text-gray-800 leading-relaxed pl-4">
                {project.solution}
              </p>
            </div>

            {/* Key Benefits */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-gray-600 pl-4">
                Key Benefits
              </h3>

              <div className="grid md:grid-cols-2 gap-4 pl-4">
                {project.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-gray-800">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span className="leading-relaxed font-semibold">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-gray-600 pl-4">
                Key Features
              </h3>

              <div className="flex flex-wrap gap-3 pl-4">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="text-gray-800 py-2 px-4 rounded-full bg-gray-100 border border-gray-200 font-semibold"
                  >
                    {feature}
                  </div>
                ))}
              </div>

              {/* Request Demo Button */}
              <div className="mt-12 flex justify-center">
                <button
                  onClick={onRequestDemo}   // ADDED
                  className="group w-full md:w-[70%] flex items-center justify-center gap-2 py-4 rounded-full font-semibold text-white 
                  bg-gradient-to-r from-blue-600 to-purple-600
                  hover:from-blue-700 hover:to-purple-700
                  transition-all duration-300
                  transform hover:scale-[1.02] hover:shadow-xl"
                >
                  Request a demo

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z"
                    />
                  </svg>

                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}