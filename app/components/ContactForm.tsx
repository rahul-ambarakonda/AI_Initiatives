'use client';

import { useState } from 'react';
import { z } from 'zod';

const demoRequestSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(1, 'Company name is required'),
  phone: z.string().optional(),
  message: z.string().optional(),
  projectOfInterest: z.string().optional(),
  preferredDemoDate: z.string().optional(),
});

type DemoRequest = z.infer<typeof demoRequestSchema>;

export default function ContactForm() {
  const [formData, setFormData] = useState<DemoRequest>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    projectOfInterest: '',
    preferredDemoDate: '',
  });
  const [errors, setErrors] = useState<z.ZodError | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrors(null);

    const result = demoRequestSchema.safeParse(formData);
    if (!result.success) {
      setErrors(result.error);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/demos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(result.data),
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        projectOfInterest: '',
        preferredDemoDate: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
        />
        {errors?.issues.find((issue) => issue.path[0] === 'name') && (
          <p className="mt-2 text-sm text-red-600">{errors.issues.find((issue) => issue.path[0] === 'name')?.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
        />
        {errors?.issues.find((issue) => issue.path[0] === 'email') && (
          <p className="mt-2 text-sm text-red-600">{errors.issues.find((issue) => issue.path[0] === 'email')?.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700">
          Company
        </label>
        <input
          type="text"
          id="company"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
        />
        {errors?.issues.find((issue) => issue.path[0] === 'company') && (
          <p className="mt-2 text-sm text-red-600">{errors.issues.find((issue) => issue.path[0] === 'company')?.message}</p>
        )}
      </div>
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
      {submitStatus === 'success' && (
        <p className="mt-2 text-sm text-green-600">Your request has been submitted successfully.</p>
      )}
      {submitStatus === 'error' && <p className="mt-2 text-sm text-red-600">Something went wrong. Please try again.</p>}
    </form>
  );
}
