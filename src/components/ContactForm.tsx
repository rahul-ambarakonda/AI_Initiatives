import type { FormEvent } from 'react';
import { useState } from 'react';
import { z } from 'zod';

const demoRequestSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(1, 'Company name is required'),
  project: z.string().min(1, 'Please choose a project of interest'),
  description: z.string().min(1, 'Please add a short description'),
});

type DemoRequest = z.infer<typeof demoRequestSchema>;

const EMPTY_FORM: DemoRequest = { name: '', email: '', company: '', project: '', description: '' };

export default function ContactForm() {
  const [formData, setFormData] = useState<DemoRequest>(EMPTY_FORM);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValidationError(null);
    setSubmitStatus(null);

    const result = demoRequestSchema.safeParse(formData);
    if (!result.success) {
      setValidationError(result.error.issues[0]?.message ?? 'Please fix the highlighted fields.');
      return;
    }

    setIsSubmitting(true);
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_API_URL ?? 'https://api.ai-coe.net';
      const response = await fetch(`${backendUrl}/api/submissions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result.data),
      });

      if (!response.ok) throw new Error('Request failed');

      setSubmitStatus('success');
      setFormData(EMPTY_FORM);
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const field = (key: keyof DemoRequest, value: string) =>
    setFormData((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="bg-blue-50 border border-gray-200 rounded-2xl shadow-lg p-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-700">FULL NAME *</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => field('name', e.target.value)}
                className="mt-2 w-full rounded-xl border border-gray-300 bg-gray-200 px-4 py-3 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">WORK EMAIL *</label>
              <input
                type="email"
                placeholder="Enter your work email"
                value={formData.email}
                onChange={(e) => field('email', e.target.value)}
                className="mt-2 w-full rounded-xl border border-gray-300 bg-gray-200 px-4 py-3 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-700">COMPANY *</label>
              <input
                type="text"
                placeholder="Enter your company name"
                value={formData.company}
                onChange={(e) => field('company', e.target.value)}
                className="mt-2 w-full rounded-xl border border-gray-300 bg-gray-200 px-4 py-3 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">PROJECT INTERESTED IN *</label>
              <select
                value={formData.project}
                onChange={(e) => field('project', e.target.value)}
                className="mt-2 w-full rounded-xl border border-gray-300 bg-gray-200 px-4 py-3 focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
              >
                <option value="">Select an option</option>
                <option>Design Document to 3D Model</option>
                <option>CodeLens AI</option>
                <option>Agentic CAD to Creo</option>
                <option>Enterprise Document Intelligence</option>
                <option>Vendor Performance Analytics</option>
                <option>AI SDLC</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">DESCRIPTION *</label>
            <textarea
              rows={4}
              placeholder="What problem are you trying to solve?"
              value={formData.description}
              onChange={(e) => field('description', e.target.value)}
              className="mt-2 w-full rounded-xl border border-gray-300 bg-gray-200 px-4 py-3 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition disabled:opacity-60"
            >
              {isSubmitting ? 'Submitting...' : 'Send request'}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" />
              </svg>
            </button>
          </div>

          <p className="text-sm text-gray-500">
            By submitting, you agree to be contacted about your demo request.
          </p>

          {validationError && (
            <p className="text-red-600 text-sm">{validationError}</p>
          )}
          {submitStatus === 'success' && (
            <p className="text-green-600 text-sm">Request submitted successfully!</p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </div>
  );
}
