'use client';

import { motion } from 'framer-motion';
import FloatingOrbs from '@/components/FloatingOrbs';
import ParticleBackground from '@/components/ParticleBackground';
import ApplicationForm from '@/components/ApplicationForm';

export default function ApplyPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-32 md:py-40 bg-[#070a12] overflow-hidden">
        <FloatingOrbs />
        <ParticleBackground variant="stars" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.span
              className="inline-block px-4 py-1 mb-6 text-sm font-medium text-[#ec297b] bg-[#ec297b]/10 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              Join Our Team
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">Apply Now</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Take the first step toward building your career with ShoreAgents. Fill in the form below and our recruitment team will be in touch.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ec297b]/50 to-transparent" />
      </section>

      {/* Form Section */}
      <section className="relative py-20 bg-[#0B1120] overflow-hidden">
        <FloatingOrbs orbs={[
          { color: 'pink', size: 300, x: '5%', y: '50%', delay: 0, duration: 20 },
          { color: 'blue', size: 250, x: '95%', y: '50%', delay: 2, duration: 25 },
        ]} />

        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 md:p-10 rounded-3xl"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <h2 className="text-2xl font-bold text-white mb-2">Your Application</h2>
            <p className="text-gray-400 mb-8 text-sm">All fields marked with <span className="text-[#ec297b]">*</span> are required.</p>
            <ApplicationForm />
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap justify-center gap-6 text-gray-500 text-sm"
          >
            {[
              { icon: '🔒', text: 'Your data is secure' },
              { icon: '⚡', text: 'Quick response within 48hrs' },
              { icon: '🇵🇭', text: 'Clark Freeport Zone, Philippines' },
            ].map((item) => (
              <span key={item.text} className="flex items-center gap-2">
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </span>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
