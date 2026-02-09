'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ApplyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const benefits = [
  { icon: '💰', title: 'Competitive Pay', desc: 'Above-market salaries + bonuses' },
  { icon: '🏥', title: 'HMO Coverage', desc: 'Health insurance for you & family' },
  { icon: '🌴', title: 'Paid Time Off', desc: 'Generous vacation & sick leave' },
  { icon: '📈', title: 'Career Growth', desc: 'Clear promotion paths' },
  { icon: '🏢', title: 'Modern Office', desc: 'Work from Clark, Philippines' },
  { icon: '🎯', title: 'Zero-Trust Model', desc: 'Your work speaks for itself' },
];

export default function ApplyModal({ open, onOpenChange }: ApplyModalProps) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [step, setStep] = useState<'benefits' | 'signup'>('benefits');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (error) setError('');
  };

  const handleGoogleSignUp = () => {
    // Redirect to BPOC with Google OAuth
    window.location.href = 'https://www.bpoc.io/auth/callback?provider=google&source=shoreagents-careers';
  };

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email');
      return;
    }
    if (!formData.password || formData.password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);
    
    // Redirect to BPOC signup with pre-filled email
    const params = new URLSearchParams({
      email: formData.email,
      source: 'shoreagents-careers',
    });
    window.location.href = `https://www.bpoc.io/signup?${params.toString()}`;
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => onOpenChange(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-lg bg-[#0B1120] border border-gray-800 rounded-2xl shadow-2xl overflow-hidden">
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ec297b] via-[#0098ff] to-[#00e915]" />

              {/* Close button */}
              <button
                onClick={() => onOpenChange(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-4">
                    <img src="/images/SAC-LOGO-other.png" alt="ShoreAgents" className="h-12" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Join{' '}
                    <span className="bg-gradient-to-r from-[#ec297b] via-[#0098ff] to-[#00e915] bg-clip-text text-transparent">
                      ShoreAgents
                    </span>
                  </h2>
                  <p className="text-gray-400">
                    {step === 'benefits'
                      ? "Start your career with the Philippines' leading BPO"
                      : 'Create your account to get started'}
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {step === 'benefits' ? (
                    <motion.div
                      key="benefits"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                    >
                      {/* Benefits Grid */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {benefits.map((benefit, i) => (
                          <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 hover:border-[#0098ff]/50 transition-colors"
                          >
                            <div className="text-2xl mb-1">{benefit.icon}</div>
                            <div className="text-white text-sm font-medium">{benefit.title}</div>
                            <div className="text-gray-500 text-xs">{benefit.desc}</div>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA */}
                      <button
                        onClick={() => setStep('signup')}
                        className="w-full py-3 px-4 bg-gradient-to-r from-[#ec297b] to-[#f47fb0] hover:from-[#d12470] hover:to-[#e56fa0] text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-pink-500/25"
                      >
                        Apply Now →
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="signup"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      {/* Google Sign Up */}
                      <button
                        onClick={handleGoogleSignUp}
                        disabled={isLoading}
                        className="w-full py-3 px-4 bg-white hover:bg-gray-100 text-gray-900 font-medium rounded-lg flex items-center justify-center gap-3 transition-colors mb-4"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        Continue with Google
                      </button>

                      <div className="relative my-4">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-gray-700"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                          <span className="px-2 bg-[#0B1120] text-gray-500">or</span>
                        </div>
                      </div>

                      {/* Email Sign Up Form */}
                      <form onSubmit={handleEmailSignUp} className="space-y-4">
                        {error && (
                          <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3">
                            <p className="text-red-400 text-sm text-center">{error}</p>
                          </div>
                        )}

                        <input
                          type="email"
                          placeholder="Email address"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          disabled={isLoading}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0098ff] focus:border-transparent transition-all"
                        />

                        <input
                          type="password"
                          placeholder="Password (min 8 characters)"
                          value={formData.password}
                          onChange={(e) => handleInputChange('password', e.target.value)}
                          disabled={isLoading}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0098ff] focus:border-transparent transition-all"
                        />

                        <input
                          type="password"
                          placeholder="Confirm password"
                          value={formData.confirmPassword}
                          onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                          disabled={isLoading}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0098ff] focus:border-transparent transition-all"
                        />

                        <button
                          type="submit"
                          disabled={isLoading}
                          className="w-full py-3 px-4 bg-gradient-to-r from-[#ec297b] to-[#f47fb0] hover:from-[#d12470] hover:to-[#e56fa0] disabled:from-gray-600 disabled:to-gray-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-pink-500/25"
                        >
                          {isLoading ? 'Creating account...' : 'Create Account'}
                        </button>
                      </form>

                      <button
                        onClick={() => setStep('benefits')}
                        className="w-full mt-4 text-gray-500 hover:text-gray-300 text-sm transition-colors"
                      >
                        ← Back to benefits
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                <p className="text-center text-gray-600 text-xs mt-6">
                  By signing up, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
