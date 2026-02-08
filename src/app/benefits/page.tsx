'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

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
    color: '#ec297b',
  },
  {
    title: 'Training & Development',
    description: 'Continuous learning opportunities and certifications to boost your skills.',
    icon: '📚',
    color: '#00e915',
  },
  {
    title: 'Fun Fridays',
    description: 'Weekly team activities, games, and celebrations to keep work enjoyable.',
    icon: '🎉',
    color: '#0098ff',
  },
  {
    title: 'Modern Office',
    description: 'State-of-the-art facilities with ergonomic workstations and break areas.',
    icon: '🏢',
    color: '#ec297b',
  },
  {
    title: 'Team Events',
    description: 'Regular team building, outings, and company-wide celebrations.',
    icon: '🎊',
    color: '#00e915',
  },
];

const perks = [
  'Free Coffee & Snacks',
  'Birthday Leave',
  'Anniversary Bonus',
  'Employee Referral Bonus',
  'Night Differential Pay',
  'Overtime Pay',
  'Transportation Allowance',
  'Mental Health Support',
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
      <section className="relative py-24 md:py-32 bg-[#0B1120]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#00e915] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#ec297b] rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Benefits & Perks</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We believe in taking care of our people. Discover the amazing benefits of being part of the ShoreAgents family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We <span className="gradient-text">Offer</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive benefits designed to support your wellbeing and growth
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass rounded-2xl p-6 group cursor-pointer"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#ec297b] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Perks */}
      <section className="py-16 md:py-24 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
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
                key={perk}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 glass rounded-full text-white font-medium hover:bg-[#ec297b]/20 transition-colors cursor-default"
              >
                {perk}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Life at <span className="gradient-text">ShoreAgents</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              See how we work hard and play harder
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-medium">{photo.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[#0B1120]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Enjoy These <span className="gradient-text">Benefits?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Join our team and start enjoying all the perks of being a ShoreAgent
            </p>
            <Link
              href="/jobs"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#ec297b] to-[#f47fb0] text-white font-bold rounded-full text-lg hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
            >
              Explore Opportunities
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
