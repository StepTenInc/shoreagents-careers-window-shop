'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import FloatingOrbs from '@/components/FloatingOrbs';
import ParticleBackground from '@/components/ParticleBackground';
import GlowButton from '@/components/GlowButton';
import GlassCard from '@/components/GlassCard';

const benefits = [
  {
    title: 'Health Insurance (HMO)',
    description: 'Comprehensive health coverage for you and your dependents from day one.',
    icon: '🏥',
    color: '#ec297b',
  },
  {
    title: 'Performance Bonuses',
    description: 'Quarterly and annual bonuses based on individual and team performance.',
    icon: '💰',
    color: '#00e915',
  },
  {
    title: 'Career Growth',
    description: 'Clear advancement paths with regular promotions and skill development.',
    icon: '📈',
    color: '#0098ff',
  },
  {
    title: 'Paid Time Off',
    description: 'Generous leave policies including vacation, sick leave, and holidays.',
    icon: '🏖️',
    color: '#00f0ff',
  },
  {
    title: 'Training & Development',
    description: 'Continuous learning opportunities and certifications to boost your skills.',
    icon: '📚',
    color: '#ec297b',
  },
  {
    title: 'Fun Fridays',
    description: 'Weekly team activities, games, and celebrations to keep work enjoyable.',
    icon: '🎉',
    color: '#00e915',
  },
  {
    title: 'Modern Office',
    description: 'State-of-the-art facilities with ergonomic workstations and break areas.',
    icon: '🏢',
    color: '#0098ff',
  },
  {
    title: 'Team Events',
    description: 'Regular team building, outings, and company-wide celebrations.',
    icon: '🎊',
    color: '#00f0ff',
  },
];

const perks = [
  { text: 'Free Coffee & Snacks', icon: '☕' },
  { text: 'Birthday Leave', icon: '🎂' },
  { text: 'Anniversary Bonus', icon: '🎁' },
  { text: 'Employee Referral Bonus', icon: '🤝' },
  { text: 'Night Differential Pay', icon: '🌙' },
  { text: 'Overtime Pay', icon: '⏰' },
  { text: 'Transportation Allowance', icon: '🚌' },
  { text: 'Mental Health Support', icon: '🧠' },
];

const photos = [
  { src: '/images/IMG_8025_OPTIMIZED.jpg', title: 'Team Building 2026' },
  { src: '/images/IMG_8025_OPTIMIZED.jpg', title: 'Fun Friday Games' },
  { src: '/images/IMG_8025_OPTIMIZED.jpg', title: 'Christmas Party' },
  { src: '/images/IMG_8025_OPTIMIZED.jpg', title: 'Office Life' },
  { src: '/images/IMG_8025_OPTIMIZED.jpg', title: 'Awards Night' },
  { src: '/images/IMG_8025_OPTIMIZED.jpg', title: 'Summer Outing' },
];

export default function BenefitsPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 bg-[#070a12] overflow-hidden">
        <FloatingOrbs orbs={[
          { color: 'green', size: 400, x: '30%', y: '30%', delay: 0, duration: 20 },
          { color: 'pink', size: 350, x: '70%', y: '70%', delay: 2, duration: 25 },
        ]} />
        <ParticleBackground variant="bubbles" className="opacity-30" />
        
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
              Join Our Team
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">Benefits & Perks</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We believe in taking care of our people. Discover the amazing benefits of being part of the ShoreAgents family.
            </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00e915]/50 to-transparent" />
      </section>

      {/* Benefits Grid */}
      <section className="relative py-20 md:py-32 bg-[#0B1120] overflow-hidden">
        <ParticleBackground variant="stars" className="opacity-20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <motion.span 
              className="inline-block px-4 py-1 mb-4 text-sm font-medium text-[#ec297b] bg-[#ec297b]/10 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              Benefits
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              What We <span className="gradient-text">Offer</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Comprehensive benefits designed to support your wellbeing and growth
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <StaggerItem key={benefit.title}>
                <GlassCard 
                  glowColor={index % 4 === 0 ? 'pink' : index % 4 === 1 ? 'green' : index % 4 === 2 ? 'blue' : 'cyan'}
                  className="p-6 h-full group"
                >
                  <motion.div 
                    className="text-5xl mb-4"
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.3 }}
                  >
                    {benefit.icon}
                  </motion.div>
                  <h3 
                    className="text-xl font-bold mb-3 transition-colors group-hover:text-white"
                    style={{ color: benefit.color }}
                  >
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                  
                  {/* Bottom accent */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(90deg, transparent, ${benefit.color}, transparent)` }}
                  />
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Additional Perks */}
      <section className="relative py-20 md:py-32 bg-[#070a12] overflow-hidden">
        <FloatingOrbs orbs={[
          { color: 'cyan', size: 300, x: '10%', y: '50%', delay: 0, duration: 25 },
          { color: 'pink', size: 250, x: '90%', y: '50%', delay: 3, duration: 20 },
        ]} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <motion.span 
              className="inline-block px-4 py-1 mb-4 text-sm font-medium text-[#00f0ff] bg-[#00f0ff]/10 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              Extras
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Even More <span className="gradient-text">Perks</span>
            </h2>
          </AnimatedSection>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {perks.map((perk, index) => (
              <motion.div
                key={perk.text}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-6 py-3 glass rounded-full text-white font-medium flex items-center gap-2 cursor-default group"
              >
                <span className="text-xl">{perk.icon}</span>
                <span className="group-hover:text-[#ec297b] transition-colors">{perk.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="relative py-20 md:py-32 bg-[#0B1120] overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <motion.span 
              className="inline-block px-4 py-1 mb-4 text-sm font-medium text-[#0098ff] bg-[#0098ff]/10 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              Gallery
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Life at <span className="gradient-text">ShoreAgents</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              See how we work hard and play harder
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                    style={{ boxShadow: 'inset 0 0 30px rgba(236, 41, 123, 0.3)' }} 
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white font-semibold">{photo.title}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-32 bg-[#070a12] overflow-hidden">
        <FloatingOrbs orbs={[
          { color: 'green', size: 300, x: '20%', y: '50%', delay: 0, duration: 20 },
          { color: 'blue', size: 250, x: '80%', y: '50%', delay: 2, duration: 25 },
        ]} />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <motion.div
              className="p-px rounded-3xl bg-gradient-to-r from-[#00e915] via-[#0098ff] to-[#ec297b] animate-gradient-bg"
              style={{ backgroundSize: '200% 200%' }}
            >
              <div className="bg-[#0B1120] rounded-3xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Ready to Enjoy These <span className="gradient-text">Benefits?</span>
                </h2>
                <p className="text-gray-400 text-lg mb-8">
                  Join our team and start enjoying all the perks of being a ShoreAgent
                </p>
                <GlowButton href="/jobs" variant="primary" size="lg">
                  Explore Opportunities
                </GlowButton>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
