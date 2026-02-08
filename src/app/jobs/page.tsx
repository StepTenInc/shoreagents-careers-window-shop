'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

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
      <section className="relative py-24 md:py-32 bg-[#0B1120]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#ec297b] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#0098ff] rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Open Positions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find your perfect role and start building your career with ShoreAgents
            </p>
          </motion.div>
        </div>
      </section>

      {/* Jobs Listing */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <AnimatedSection className="mb-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedDepartment === dept
                      ? 'bg-gradient-to-r from-[#ec297b] to-[#f47fb0] text-white'
                      : 'glass text-gray-300 hover:text-white hover:bg-white/20'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Job Count */}
          <p className="text-gray-400 text-center mb-8">
            Showing {filteredJobs.length} position{filteredJobs.length !== 1 ? 's' : ''}
          </p>

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
                  className="glass rounded-2xl overflow-hidden"
                >
                  <div
                    className="p-6 cursor-pointer"
                    onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#ec297b]/20 text-[#ec297b]">
                            {job.department}
                          </span>
                          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#0098ff]/20 text-[#0098ff]">
                            {job.type}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">{job.title}</h3>
                        <div className="flex items-center gap-4 text-gray-400 text-sm">
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
                      <div className="flex items-center gap-3">
                        <motion.div
                          animate={{ rotate: expandedJob === job.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </motion.div>
                      </div>
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
                        <div className="px-6 pb-6 pt-2 border-t border-white/10">
                          <p className="text-gray-300 mb-4">{job.description}</p>
                          <h4 className="text-sm font-semibold text-white mb-2">Requirements:</h4>
                          <ul className="space-y-1 mb-6">
                            {job.requirements.map((req, i) => (
                              <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                                <svg className="w-4 h-4 text-[#00e915] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                {req}
                              </li>
                            ))}
                          </ul>
                          <a
                            href="mailto:recruitment@shoreagents.com"
                            className="inline-block px-6 py-3 bg-gradient-to-r from-[#ec297b] to-[#f47fb0] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
                          >
                            Apply Now
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* No Jobs Message */}
          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">No positions found in this department.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[#0B1120]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Don&apos;t See Your <span className="gradient-text">Perfect Role?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Send us your resume anyway! We&apos;re always looking for talented individuals to join our team.
            </p>
            <a
              href="mailto:recruitment@shoreagents.com"
              className="inline-block px-8 py-4 glass text-white font-semibold rounded-full text-lg hover:bg-white/20 transition-all duration-300"
            >
              Send Your Resume
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
