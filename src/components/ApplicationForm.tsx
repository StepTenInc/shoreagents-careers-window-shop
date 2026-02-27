'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ApplicationFormProps {
  preselectedRole?: string;
  onClose?: () => void;
}

export default function ApplicationForm({ preselectedRole = '', onClose }: ApplicationFormProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: preselectedRole,
    experience: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 px-6"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="w-20 h-20 rounded-full bg-[#00e915]/20 flex items-center justify-center mx-auto mb-6"
        >
          <svg className="w-10 h-10 text-[#00e915]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
        <h3 className="text-2xl font-bold text-white mb-3">Application Submitted! 🎉</h3>
        <p className="text-gray-400 mb-8">
          Thanks for applying! Our recruitment team will review your application and be in touch soon.
        </p>
        {onClose && (
          <button
            onClick={onClose}
            className="px-8 py-3 bg-gradient-to-r from-[#ec297b] to-[#f47fb0] text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
          >
            Close
          </button>
        )}
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Full Name <span className="text-[#ec297b]">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Juan dela Cruz"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#ec297b] transition-colors"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Email Address <span className="text-[#ec297b]">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="juan@email.com"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#ec297b] transition-colors"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+63 912 345 6789"
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#ec297b] transition-colors"
          />
        </div>

        {/* Experience */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Years of Experience</label>
          <select
            name="experience"
            value={form.experience}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#0B1120] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#ec297b] transition-colors"
          >
            <option value="">Select...</option>
            <option value="0-1">Less than 1 year</option>
            <option value="1-2">1–2 years</option>
            <option value="2-5">2–5 years</option>
            <option value="5-10">5–10 years</option>
            <option value="10+">10+ years</option>
          </select>
        </div>
      </div>

      {/* Position */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Position Applying For <span className="text-[#ec297b]">*</span>
        </label>
        <input
          type="text"
          name="position"
          value={form.position}
          onChange={handleChange}
          required
          placeholder="e.g. Virtual Assistant, Customer Service..."
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#ec297b] transition-colors"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Tell Us About Yourself</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Briefly describe your background, skills, and why you'd like to join ShoreAgents..."
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#ec297b] transition-colors resize-none"
        />
      </div>

      {/* Error */}
      <AnimatePresence>
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm"
          >
            {errorMsg}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={status === 'loading'}
        whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-4 bg-gradient-to-r from-[#ec297b] to-[#f47fb0] text-white font-bold text-lg rounded-xl hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed relative overflow-hidden"
      >
        {status === 'loading' ? (
          <span className="flex items-center justify-center gap-3">
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Submitting...
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            Submit Application
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        )}
      </motion.button>

      <p className="text-center text-gray-500 text-xs">
        By submitting, you agree to ShoreAgents collecting and using your information for recruitment purposes.
      </p>
    </form>
  );
}
