'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import FloatingOrbs from '@/components/FloatingOrbs';
import ParticleBackground from '@/components/ParticleBackground';
import GlowButton from '@/components/GlowButton';
import GlassCard from '@/components/GlassCard';

const jobs = [
  {
    id: 1,
    title: 'Real Estate Transaction Coordinator',
    department: 'Real Estate',
    type: 'Full-time',
    location: 'Clark, Philippines',
    salary: 'Competitive',
    description: 'Manage real estate transactions from contract to close, coordinating with agents, lenders, and title companies.',
    requirements: [
      '2+ years experience in real estate or transaction coordination',
      'Excellent attention to detail',
      'Strong communication skills',
      'Experience with CRM systems',
    ],
    color: '#ec297b',
  },
  {
    id: 2,
    title: 'Healthcare Virtual Assistant',
    department: 'Healthcare',
    type: 'Full-time',
    location: 'Clark, Philippines',
    salary: 'Competitive',
    description: 'Provide administrative support to healthcare providers, including scheduling, patient coordination, and documentation.',
    requirements: [
      'Experience in healthcare administration',
      'Knowledge of medical terminology',
      'HIPAA compliance awareness',
      'Excellent organizational skills',
    ],
    color: '#0098ff',
  },
  {
    id: 3,
    title: 'Legal Support Specialist',
    department: 'Legal',
    type: 'Full-time',
    location: 'Clark, Philippines',
    salary: 'Competitive',
    description: 'Assist legal teams with document preparation, research, case management, and administrative tasks.',
    requirements: [
      'Paralegal experience preferred',
      'Strong research skills',
      'Attention to detail',
      'Familiarity with legal software',
    ],
    color: '#00e915',
  },
  {
    id: 4,
    title: 'Customer Success Manager',
    department: 'Operations',
    type: 'Full-time',
    location: 'Clark, Philippines',
    salary: 'Competitive',
    description: 'Build and maintain strong relationships with clients, ensuring their success and satisfaction with our services.',
    requirements: [
      '3+ years in customer success or account management',
      'Excellent communication skills',
      'Problem-solving mindset',
      'Experience with CRM tools',
    ],
    color: '#00f0ff',
  },
  {
    id: 5,
    title: 'Social Media Manager',
    department: 'Marketing',
    type: 'Full-time',
    location: 'Clark, Philippines',
    salary: 'Competitive',
    description: 'Create and manage social media content, grow engagement, and develop social media strategies for clients.',
    requirements: [
      'Experience managing social media accounts',
      'Creative content creation skills',
      'Analytics and reporting experience',
      'Knowledge of social media trends',
    ],
    color: '#ec297b',
  },
  {
    id: 6,
    title: 'Bookkeeper',
    department: 'Finance',
    type: 'Full-time',
    location: 'Clark, Philippines',
    salary: 'Competitive',
    description: 'Manage financial records, process transactions, reconcile accounts, and prepare financial reports.',
    requirements: [
      'Accounting degree or equivalent',
      'Experience with QuickBooks/Xero',
      'Strong attention to detail',
      'Excel proficiency',
    ],
    color: '#0098ff',
  },
  {
    id: 7,
    title: 'E-Commerce Specialist',
    department: 'E-Commerce',
    type: 'Full-time',
    location: 'Clark, Philippines',
    salary: 'Competitive',
    description: 'Manage online store operations, product listings, inventory, and customer service for e-commerce clients.',
    requirements: [
      'Experience with Shopify/Amazon/eBay',
      'Product listing optimization',
      'Customer service skills',
      'Inventory management experience',
    ],
    color: '#00e915',
  },
  {
    id: 8,
    title: 'IT Support Specialist',
    department: 'Technology',
    type: 'Full-time',
    location: 'Clark, Philippines',
    salary: 'Competitive',
    description: 'Provide technical support, troubleshoot issues, and assist with IT infrastructure management.',
    requirements: [
      'IT support experience',
      'Knowledge of common software/hardware',
      'Troubleshooting skills',
      'Customer service orientation',
    ],
    color: '#00f0ff',
  },
];

const departments = ['All', ...new Set(jobs.map((job) => job.department))];

export default function JobsPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const filteredJobs =
    selectedDepartment === 'All'
      ? jobs
      : jobs.filter((job) => job.department === selectedDepartment);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 bg-[#070a12] overflow-hidden">
        <FloatingOrbs />
        <ParticleBackground variant="network" className="opacity-30" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block px-4 py-1 mb-6 text-sm font-medium text-[#00e915] bg-[#00e915]/10 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              {jobs.length} Open Positions
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">Open Positions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find your perfect role and start building your career with ShoreAgents
            </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00e915]/50 to-transparent" />
      </section>

      {/* Jobs Listing */}
      <section className="relative py-20 md:py-32 bg-[#0B1120] overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <AnimatedSection className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {departments.map((dept, index) => (
                <motion.button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                    selectedDepartment === dept
                      ? 'bg-gradient-to-r from-[#ec297b] to-[#f47fb0] text-white shadow-lg shadow-pink-500/30'
                      : 'glass text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {dept}
                </motion.button>
              ))}
            </div>
          </AnimatedSection>

          {/* Job Count */}
          <motion.p 
            className="text-gray-400 text-center mb-8"
            key={filteredJobs.length}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Showing <span className="text-[#ec297b] font-semibold">{filteredJobs.length}</span> position{filteredJobs.length !== 1 ? 's' : ''}
          </motion.p>

          {/* Job Cards */}
          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <GlassCard 
                    className="overflow-hidden"
                    tilt={false}
                    hoverLift={false}
                  >
                    <div
                      className="p-6 cursor-pointer"
                      onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-start gap-4 flex-1">
                          {/* Icon */}
                          <motion.div 
                            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: `${job.color}20` }}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <svg className="w-6 h-6" style={{ color: job.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </motion.div>
                          
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <span 
                                className="px-3 py-1 text-xs font-semibold rounded-full"
                                style={{ backgroundColor: `${job.color}20`, color: job.color }}
                              >
                                {job.department}
                              </span>
                              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/5 text-gray-400">
                                {job.type}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                            <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
                              <span className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                </svg>
                                {job.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {job.salary}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <motion.div
                          animate={{ rotate: expandedJob === job.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center"
                        >
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </motion.div>
                      </div>
                    </div>

                    <AnimatePresence>
                      {expandedJob === job.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-2 border-t border-white/5">
                            <p className="text-gray-300 mb-6 leading-relaxed">{job.description}</p>
                            <h4 className="text-sm font-semibold text-white mb-3">Requirements:</h4>
                            <ul className="space-y-2 mb-6">
                              {job.requirements.map((req, i) => (
                                <motion.li 
                                  key={i} 
                                  className="text-gray-400 text-sm flex items-start gap-3"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                >
                                  <svg className="w-5 h-5 text-[#00e915] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  {req}
                                </motion.li>
                              ))}
                            </ul>
                            <GlowButton 
                              href="mailto:recruitment@shoreagents.com" 
                              variant="primary"
                              external
                            >
                              Apply Now
                            </GlowButton>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </GlassCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* No Jobs Message */}
          {filteredJobs.length === 0 && (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-gray-400 text-lg">No positions found in this department.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-32 bg-[#070a12] overflow-hidden">
        <FloatingOrbs orbs={[
          { color: 'pink', size: 300, x: '20%', y: '50%', delay: 0, duration: 20 },
          { color: 'blue', size: 250, x: '80%', y: '50%', delay: 2, duration: 25 },
        ]} />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <motion.div
              className="p-px rounded-3xl bg-gradient-to-r from-[#ec297b] via-[#0098ff] to-[#00e915] animate-gradient-bg"
              style={{ backgroundSize: '200% 200%' }}
            >
              <div className="bg-[#0B1120] rounded-3xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Don&apos;t See Your <span className="gradient-text">Perfect Role?</span>
                </h2>
                <p className="text-gray-400 text-lg mb-8">
                  Send us your resume anyway! We&apos;re always looking for talented individuals to join our team.
                </p>
                <GlowButton href="mailto:recruitment@shoreagents.com" variant="ghost" size="lg" external>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Your Resume
                </GlowButton>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
