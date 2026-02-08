'use client';

import { motion } from 'framer-motion';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import FloatingOrbs from '@/components/FloatingOrbs';
import ParticleBackground from '@/components/ParticleBackground';
import GlowButton from '@/components/GlowButton';
import GlassCard from '@/components/GlassCard';

const steps = [
  {
    number: '01',
    title: 'Apply Online',
    description: 'Browse our job openings and submit your application. Make sure your resume highlights your skills and experience.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    color: '#ec297b',
  },
  {
    number: '02',
    title: 'Initial Screening',
    description: 'Our recruitment team reviews your application. If you match our requirements, we\'ll reach out for an initial phone interview.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    color: '#0098ff',
  },
  {
    number: '03',
    title: 'Skills Assessment',
    description: 'Complete role-specific assessments to showcase your abilities. This helps us understand your strengths and match you with the right position.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    color: '#00e915',
  },
  {
    number: '04',
    title: 'Final Interview',
    description: 'Meet with our hiring managers and team leads. This is your chance to learn more about the role and company culture.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: '#00f0ff',
  },
  {
    number: '05',
    title: 'Welcome Aboard!',
    description: 'Receive your offer and join the ShoreAgents family! You\'ll go through comprehensive onboarding and training to set you up for success.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: '#ec297b',
  },
];

const tips = [
  {
    title: 'Update Your Resume',
    description: 'Make sure your resume is current and highlights relevant experience',
    icon: '📄',
  },
  {
    title: 'Research the Company',
    description: 'Learn about ShoreAgents and the role you\'re applying for',
    icon: '🔍',
  },
  {
    title: 'Prepare Your Setup',
    description: 'Ensure you have a quiet space and stable internet for interviews',
    icon: '💻',
  },
  {
    title: 'Be Yourself',
    description: 'We value authenticity and want to get to know the real you',
    icon: '✨',
  },
];

export default function HowItWorksPage() {
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
              className="inline-block px-4 py-1 mb-6 text-sm font-medium text-[#0098ff] bg-[#0098ff]/10 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              5 Simple Steps
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">How It Works</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your journey to an exciting career at ShoreAgents is just 5 simple steps away
            </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0098ff]/50 to-transparent" />
      </section>

      {/* Timeline */}
      <section className="relative py-20 md:py-32 bg-[#0B1120] overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Animated vertical line */}
            <motion.div 
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5"
              style={{
                background: 'linear-gradient(to bottom, #ec297b, #0098ff, #00e915, #00f0ff, #ec297b)',
              }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex items-start gap-8 mb-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Circle with pulse effect */}
                <motion.div
                  className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10"
                  whileHover={{ scale: 1.2 }}
                >
                  {/* Pulse ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: step.color }}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  {/* Circle */}
                  <div 
                    className="relative w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: step.color }}
                  >
                    {index + 1}
                  </div>
                </motion.div>

                {/* Content */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-20 md:text-right' : 'md:pl-20'}`}>
                  <GlassCard 
                    glowColor={index % 4 === 0 ? 'pink' : index % 4 === 1 ? 'blue' : index % 4 === 2 ? 'green' : 'cyan'}
                    className="p-6"
                    tilt={false}
                  >
                    <div
                      className={`flex items-center gap-4 mb-4 ${
                        index % 2 === 0 ? 'md:justify-end' : ''
                      }`}
                    >
                      <motion.div
                        className="w-14 h-14 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${step.color}20` }}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div style={{ color: step.color }}>{step.icon}</div>
                      </motion.div>
                      <div className={index % 2 === 0 ? 'md:order-first md:text-right' : ''}>
                        <span className="text-xs font-bold" style={{ color: step.color }}>
                          STEP {step.number}
                        </span>
                        <h3 className="text-xl font-bold text-white">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                  </GlassCard>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="relative py-20 md:py-32 bg-[#070a12] overflow-hidden">
        <FloatingOrbs orbs={[
          { color: 'green', size: 300, x: '10%', y: '50%', delay: 0, duration: 25 },
          { color: 'cyan', size: 250, x: '90%', y: '50%', delay: 3, duration: 20 },
        ]} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <motion.span 
              className="inline-block px-4 py-1 mb-4 text-sm font-medium text-[#00e915] bg-[#00e915]/10 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              Pro Tips
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Tips for <span className="gradient-text">Success</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Set yourself up for success with these helpful tips
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, index) => (
              <StaggerItem key={tip.title}>
                <GlassCard className="p-6 h-full text-center" glowColor="green">
                  <motion.div 
                    className="text-5xl mb-4"
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                  >
                    {tip.icon}
                  </motion.div>
                  <h3 className="text-lg font-bold text-white mb-2">{tip.title}</h3>
                  <p className="text-gray-400 text-sm">{tip.description}</p>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-32 bg-[#0B1120] overflow-hidden">
        <ParticleBackground variant="stars" className="opacity-20" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <motion.div
              className="p-px rounded-3xl bg-gradient-to-r from-[#0098ff] via-[#00e915] to-[#ec297b] animate-gradient-bg"
              style={{ backgroundSize: '200% 200%' }}
            >
              <div className="bg-[#070a12] rounded-3xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Ready to <span className="gradient-text">Get Started?</span>
                </h2>
                <p className="text-gray-400 text-lg mb-8">
                  Browse our current openings and take the first step towards your new career
                </p>
                <GlowButton href="/jobs" variant="primary" size="lg">
                  View Open Positions
                </GlowButton>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
