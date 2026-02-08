'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

const industries = [
  {
    name: 'Real Estate',
    description: 'Transaction coordinators, listing specialists, and admin support for real estate teams worldwide.',
    icon: '🏠',
    roles: ['Transaction Coordinator', 'Listing Manager', 'Real Estate VA', 'Lead Manager'],
    color: '#ec297b',
  },
  {
    name: 'Healthcare',
    description: 'Medical billing, patient coordination, and administrative support for healthcare providers.',
    icon: '🏥',
    roles: ['Medical Biller', 'Patient Coordinator', 'Healthcare VA', 'Insurance Specialist'],
    color: '#0098ff',
  },
  {
    name: 'Legal',
    description: 'Legal assistants, paralegal support, and document management for law firms.',
    icon: '⚖️',
    roles: ['Legal Assistant', 'Paralegal Support', 'Document Specialist', 'Legal VA'],
    color: '#00e915',
  },
  {
    name: 'E-Commerce',
    description: 'Customer service, order management, and store operations for online businesses.',
    icon: '🛒',
    roles: ['Customer Service Rep', 'Order Manager', 'Product Lister', 'E-Commerce VA'],
    color: '#ec297b',
  },
  {
    name: 'Marketing',
    description: 'Digital marketing, social media management, and content creation services.',
    icon: '📱',
    roles: ['Social Media Manager', 'Content Creator', 'SEO Specialist', 'Marketing VA'],
    color: '#0098ff',
  },
  {
    name: 'Finance',
    description: 'Bookkeeping, accounting support, and financial administration services.',
    icon: '💰',
    roles: ['Bookkeeper', 'Accounts Payable', 'Financial Analyst', 'Finance VA'],
    color: '#00e915',
  },
  {
    name: 'Technology',
    description: 'IT support, software testing, and technical assistance for tech companies.',
    icon: '💻',
    roles: ['IT Support', 'QA Tester', 'Tech Support', 'Development Support'],
    color: '#ec297b',
  },
  {
    name: 'Insurance',
    description: 'Claims processing, policy management, and customer support for insurance agencies.',
    icon: '🛡️',
    roles: ['Claims Processor', 'Policy Admin', 'Insurance VA', 'Customer Support'],
    color: '#0098ff',
  },
];

export default function IndustriesPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-[#0B1120]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0098ff] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00e915] rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Industries We Serve</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We support businesses across multiple industries, connecting skilled Filipino professionals with global opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass rounded-2xl p-6 group cursor-pointer"
              >
                <div className="text-5xl mb-4">{industry.icon}</div>
                <h3
                  className="text-xl font-bold mb-2 transition-colors"
                  style={{ color: industry.color }}
                >
                  {industry.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{industry.description}</p>
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Popular Roles:</p>
                  <div className="flex flex-wrap gap-2">
                    {industry.roles.slice(0, 3).map((role) => (
                      <span
                        key={role}
                        className="px-2 py-1 text-xs rounded-full bg-white/5 text-gray-300"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Industries Trust Us */}
      <section className="py-16 md:py-24 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Businesses <span className="gradient-text">Trust Us</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#ec297b]/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Industry Expertise</h3>
              <p className="text-gray-400">
                Our team members are trained specifically for their industry, ensuring they understand the unique challenges and requirements.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#0098ff]/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Fast Integration</h3>
              <p className="text-gray-400">
                We prepare our team members with the tools and knowledge they need to hit the ground running from day one.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#00e915]/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
              <p className="text-gray-400">
                80% cost savings with no compromise on quality. Our clients see immediate ROI on their remote team investment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Find Your <span className="gradient-text">Industry</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Browse our current openings and find the perfect role for your skills and experience
            </p>
            <Link
              href="/jobs"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#ec297b] to-[#f47fb0] text-white font-bold rounded-full text-lg hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
            >
              Browse All Jobs
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
