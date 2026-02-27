'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import Stats from '@/components/Stats';
import VideoEmbed from '@/components/VideoEmbed';
import ParticleBackground from '@/components/ParticleBackground';
import TypewriterText from '@/components/TypewriterText';
import GlowButton from '@/components/GlowButton';
import GlassCard from '@/components/GlassCard';
import FloatingOrbs from '@/components/FloatingOrbs';

const featuredJobs = [
  { title: 'Real Estate Transaction Coordinator', type: 'Full-time', location: 'Clark, Philippines', color: '#ec297b' },
  { title: 'Healthcare Virtual Assistant', type: 'Full-time', location: 'Clark, Philippines', color: '#0098ff' },
  { title: 'Legal Support Specialist', type: 'Full-time', location: 'Clark, Philippines', color: '#00e915' },
  { title: 'Customer Success Manager', type: 'Full-time', location: 'Clark, Philippines', color: '#00f0ff' },
];

const socialPosts = [
  { platform: 'Team Event', image: '/images/staff/staff-1.jpg', title: 'Our ShoreAgents Team' },
  { platform: 'Culture', image: '/images/staff/staff-2.jpg', title: 'Life at the Office' },
  { platform: 'Growth', image: '/images/staff/staff-3.jpg', title: 'Team Building' },
  { platform: 'Celebration', image: '/images/staff/staff-4.jpg', title: 'Our People' },
];

const typewriterTexts = [
  'Brighter Futures',
  'Amazing Careers',
  'Your Potential',
  'Success Stories',
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section - SICK */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated gradient mesh background */}
        <div className="absolute inset-0 mesh-gradient" />
        
        {/* Floating orbs */}
        <FloatingOrbs />
        
        {/* Particles */}
        <ParticleBackground variant="stars" />
        
        {/* Background Image with parallax */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY, scale: heroScale }}
        >
          <Image
            src="/images/staff/staff-1.jpg"
            alt="ShoreAgents Office"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 hero-gradient" />
        </motion.div>

        {/* Animated gradient border at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ec297b] to-transparent opacity-50" />

        {/* Content */}
        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          style={{ opacity: heroOpacity }}
        >
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass border border-white/10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e915] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00e915]" />
            </span>
            <span className="text-sm text-gray-300">Now hiring across all departments</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6">
              <span className="text-white">Building</span>
              <br />
              <span className="gradient-text text-glow-pink">
                <TypewriterText texts={typewriterTexts} speed={80} deleteSpeed={40} delayBetween={2500} />
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Join the ShoreAgents team and unlock your potential. We&apos;re building the future of work from{' '}
            <span className="text-[#00f0ff]">Clark Freeport Zone</span>, Philippines.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <GlowButton href="/jobs" variant="primary" size="lg">
              <span>Explore Opportunities</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </GlowButton>
            <GlowButton href="/about" variant="ghost" size="lg">
              Learn More
            </GlowButton>
          </motion.div>

          {/* Stats preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {[
              { value: '5+', label: 'Years' },
              { value: '200+', label: 'Team' },
              { value: '80%', label: 'Savings' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text-fast">{stat.value}</div>
                <div className="text-gray-500 text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>

        {/* Scroll indicator - anchored to section, not content div */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
              <motion.div 
                className="w-1.5 h-3 bg-gradient-to-b from-[#ec297b] to-[#0098ff] rounded-full"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 md:py-32 bg-[#070a12] overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
        
        <FloatingOrbs orbs={[
          { color: 'pink', size: 300, x: '10%', y: '50%', delay: 0, duration: 25 },
          { color: 'blue', size: 250, x: '90%', y: '50%', delay: 2, duration: 20 },
        ]} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <motion.span 
              className="inline-block px-4 py-1 mb-4 text-sm font-medium text-[#ec297b] bg-[#ec297b]/10 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              Why Us
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">Why ShoreAgents?</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We&apos;ve been building successful teams and careers for over 5 years.
            </p>
          </AnimatedSection>
          <Stats />
        </div>
      </section>

      {/* Social Feed Grid */}
      <section className="relative py-20 md:py-32 bg-[#0B1120] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ec297b]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0098ff]/30 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <motion.span 
              className="inline-block px-4 py-1 mb-4 text-sm font-medium text-[#00f0ff] bg-[#00f0ff]/10 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              Culture
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">Life at ShoreAgents</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              See what makes our team special
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialPosts.map((post, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Glow border on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                    style={{ boxShadow: 'inset 0 0 30px rgba(236, 41, 123, 0.3)' }} 
                  />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[#ec297b] text-xs font-bold uppercase tracking-wider">{post.platform}</span>
                    <p className="text-white font-semibold mt-1">{post.title}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <motion.div 
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/life"
              className="inline-flex items-center gap-2 text-[#ec297b] hover:text-[#f47fb0] font-semibold transition-colors group"
            >
              <span>See More</span>
              <motion.svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ x: 5 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Company Video */}
      <section className="relative py-20 md:py-32 bg-[#070a12] overflow-hidden">
        <FloatingOrbs orbs={[
          { color: 'pink', size: 400, x: '20%', y: '30%', delay: 0, duration: 20 },
          { color: 'cyan', size: 300, x: '80%', y: '70%', delay: 3, duration: 25 },
        ]} />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <motion.span 
              className="inline-block px-4 py-1 mb-4 text-sm font-medium text-[#0098ff] bg-[#0098ff]/10 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              Watch
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">Our Story</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Discover what makes ShoreAgents the best place to build your career
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden glow-pink"
            >
              <VideoEmbed 
                youtubeId="Ckz4pCIQhJo"
                title="ShoreAgents Company Video"
              />
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="relative py-20 md:py-32 bg-[#0B1120] overflow-hidden">
        <ParticleBackground variant="network" className="opacity-30" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <motion.span 
              className="inline-block px-4 py-1 mb-4 text-sm font-medium text-[#00e915] bg-[#00e915]/10 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              Careers
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">Featured Opportunities</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Start your journey with us today
            </p>
          </AnimatedSection>

          <div className="grid gap-4 md:gap-6">
            {featuredJobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard 
                  glowColor={index % 4 === 0 ? 'pink' : index % 4 === 1 ? 'blue' : index % 4 === 2 ? 'green' : 'cyan'}
                  className="p-6 group cursor-pointer"
                  tilt={false}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      {/* Animated icon */}
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
                      
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-[#ec297b] transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 mt-2 text-gray-400 text-sm">
                          <span className="flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: job.color }} />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                            {job.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05, x: 5 }}
                    >
                      <Link
                        href="/jobs"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-gradient-to-r hover:from-[#ec297b] hover:to-[#f47fb0] text-white font-semibold rounded-full transition-all duration-300"
                      >
                        Apply Now
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </motion.div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlowButton href="/jobs" variant="primary" size="lg">
              View All Jobs
            </GlowButton>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 bg-[#070a12] overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ec297b]/20 via-[#0098ff]/20 to-[#00e915]/20 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <motion.div
              className="p-px rounded-3xl bg-gradient-to-r from-[#ec297b] via-[#0098ff] to-[#00e915] animate-gradient-bg"
              style={{ backgroundSize: '200% 200%' }}
            >
              <div className="bg-[#0B1120] rounded-3xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Ready to <span className="gradient-text">Start Your Journey?</span>
                </h2>
                <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                  Join our team of 200+ professionals and build your career with one of the fastest-growing companies in the Philippines.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <GlowButton href="/jobs" variant="primary" size="lg">
                    Browse Openings
                  </GlowButton>
                  <GlowButton href="mailto:recruitment@shoreagents.com" variant="ghost" size="lg" external>
                    Contact Recruitment
                  </GlowButton>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
