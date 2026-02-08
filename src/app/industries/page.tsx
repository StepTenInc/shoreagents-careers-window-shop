'use client';

import { motion } from 'framer-motion';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import FloatingOrbs from '@/components/FloatingOrbs';
import ParticleBackground from '@/components/ParticleBackground';
import GlowButton from '@/components/GlowButton';
import GlassCard from '@/components/GlassCard';

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
    color: '#00f0ff',
  },
  {
    name: 'Marketing',
    description: 'Digital marketing, social media management, and content creation services.',
    icon: '📱',
    roles: ['Social Media Manager', 'Content Creator', 'SEO Specialist', 'Marketing VA'],
    color: '#ec297b',
  },
  {
    name: 'Finance',
    description: 'Bookkeeping, accounting support, and financial administration services.',
    icon: '💰',
    roles: ['Bookkeeper', 'Accounts Payable', 'Financial Analyst', 'Finance VA'],
    color: '#0098ff',
  },
  {
    name: 'Technology',
    description: 'IT support, software testing, and technical assistance for tech companies.',
    icon: '💻',
    roles: ['IT Support', 'QA Tester', 'Tech Support', 'Development Support'],
    color: '#00e915',
  },
  {
    name: 'Insurance',
    description: 'Claims processing, policy management, and customer support for insurance agencies.',
    icon: '🛡️',
    roles: ['Claims Processor', 'Policy Admin', 'Insurance VA', 'Customer Support'],
    color: '#00f0ff',
  },
];

const trustPoints = [
  {
    title: 'Industry Expertise',
    description: 'Our team members are trained specifically for their industry, ensuring they understand the unique challenges and requirements.',
    icon: '🎯',
    color: '#ec297b',
  },
  {
    title: 'Fast Integration',
    description: 'We prepare our team members with the tools and knowledge they need to hit the ground running from day one.',
    icon: '⚡',
    color: '#0098ff',
  },
  {
    title: 'Proven Results',
    description: '80% cost savings with no compromise on quality. Our clients see immediate ROI on their remote team investment.',
    icon: '📈',
    color: '#00e915',
  },
];

export default function IndustriesPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 bg-[#070a12] overflow-hidden">
        <FloatingOrbs orbs={[
          { color: 'blue', size: 400, x: '25%', y: '30%', delay: 0, duration: 20 },
          { color: 'green', size: 350, x: '75%', y: '70%', delay: 2, duration: 25 },
        ]} />
        <ParticleBackground variant="network" className="opacity-30" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block px-4 py-1 mb-6 text-sm font-medium text-[#0098ff] bg-[#0098ff]/10 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              8 Industries
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">Industries We Serve</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We support businesses across multiple industries, connecting skilled Filipino professionals with global opportunities.
            </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0098ff]/50 to-transparent" />
      </section>

      {/* Industries Grid */}
      <section className="relative py-20 md:py-32 bg-[#0B1120] overflow-hidden">
        <ParticleBackground variant="stars" className="opacity-20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <StaggerItem key={industry.name}>
                <GlassCard 
                  glowColor={index % 4 === 0 ? 'pink' : index % 4 === 1 ? 'blue' : index % 4 === 2 ? 'green' : 'cyan'}
                  className="p-6 h-full group"
                >
                  <motion.div 
                    className="text-5xl mb-4"
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.3 }}
                  >
                    {industry.icon}
                  </motion.div>
                  <h3 
                    className="text-xl font-bold mb-3 transition-colors"
                    style={{ color: industry.color }}
                  >
                    {industry.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{industry.description}</p>
                  
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Popular Roles:</p>
                    <div className="flex flex-wrap gap-2">
                      {industry.roles.slice(0, 3).map((role) => (
                        <motion.span
                          key={role}
                          whileHover={{ scale: 1.05 }}
                          className="px-2 py-1 text-xs rounded-full bg-white/5 text-gray-300 hover:bg-white/10 transition-colors"
                        >
                          {role}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Bottom accent on hover */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(90deg, transparent, ${industry.color}, transparent)` }}
                  />
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Industries Trust Us */}
      <section className="relative py-20 md:py-32 bg-[#070a12] overflow-hidden">
        <FloatingOrbs orbs={[
          { color: 'pink', size: 300, x: '10%', y: '50%', delay: 0, duration: 25 },
          { color: 'cyan', size: 250, x: '90%', y: '50%', delay: 3, duration: 20 },
        ]} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <motion.span 
              className="inline-block px-4 py-1 mb-4 text-sm font-medium text-[#00e915] bg-[#00e915]/10 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              Why Us
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Why Businesses <span className="gradient-text">Trust Us</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {trustPoints.map((point, index) => (
              <StaggerItem key={point.title}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="text-center"
                >
                  <motion.div 
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: `${point.color}20` }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-4xl">{point.icon}</span>
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{point.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-32 bg-[#0B1120] overflow-hidden">
        <ParticleBackground variant="network" className="opacity-20" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <motion.div
              className="p-px rounded-3xl bg-gradient-to-r from-[#0098ff] via-[#00e915] to-[#ec297b] animate-gradient-bg"
              style={{ backgroundSize: '200% 200%' }}
            >
              <div className="bg-[#070a12] rounded-3xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Find Your <span className="gradient-text">Industry</span>
                </h2>
                <p className="text-gray-400 text-lg mb-8">
                  Browse our current openings and find the perfect role for your skills and experience
                </p>
                <GlowButton href="/jobs" variant="primary" size="lg">
                  Browse All Jobs
                </GlowButton>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
