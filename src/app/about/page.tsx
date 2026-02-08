'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import VideoEmbed from '@/components/VideoEmbed';
import FloatingOrbs from '@/components/FloatingOrbs';
import GlassCard from '@/components/GlassCard';
import ParticleBackground from '@/components/ParticleBackground';

const values = [
  {
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, delivering top-tier service to our clients and team members.',
    icon: '⭐',
    color: '#ec297b',
  },
  {
    title: 'Growth',
    description: 'We invest in our people through continuous learning, training, and career development opportunities.',
    icon: '📈',
    color: '#00e915',
  },
  {
    title: 'Community',
    description: 'We build a supportive, inclusive workplace where everyone feels valued and can thrive.',
    icon: '🤝',
    color: '#0098ff',
  },
  {
    title: 'Innovation',
    description: 'We embrace technology and new ways of working to stay ahead in the industry.',
    icon: '💡',
    color: '#00f0ff',
  },
];

const leadership = [
  { name: 'Stephen Atcheler', role: 'Founder & CEO', image: '/images/IMG_8025_OPTIMIZED.jpg' },
  { name: 'Operations Team', role: 'Leadership', image: '/images/IMG_8025_OPTIMIZED.jpg' },
  { name: 'HR Team', role: 'People & Culture', image: '/images/IMG_8025_OPTIMIZED.jpg' },
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 bg-[#070a12] overflow-hidden">
        <FloatingOrbs />
        <ParticleBackground variant="stars" className="opacity-50" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block px-4 py-1 mb-6 text-sm font-medium text-[#ec297b] bg-[#ec297b]/10 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              About Us
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">Who We Are</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              ShoreAgents is a leading BPO company in the Philippines, helping businesses worldwide build exceptional remote teams while creating life-changing career opportunities for Filipinos.
            </p>
          </motion.div>
        </div>
        
        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ec297b]/50 to-transparent" />
      </section>

      {/* Company Video */}
      <section className="relative py-20 md:py-32 bg-[#0B1120] overflow-hidden">
        <FloatingOrbs orbs={[
          { color: 'pink', size: 300, x: '10%', y: '30%', delay: 0, duration: 25 },
          { color: 'blue', size: 250, x: '90%', y: '70%', delay: 2, duration: 20 },
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
              <span className="gradient-text">See Who We Are</span>
            </h2>
            <p className="text-gray-400 text-lg">Watch our story</p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl overflow-hidden glow-pink"
            >
              <VideoEmbed 
                driveId="1wvUXGIu3SyUWqk_J1_rzQ6t_dThJFMKA"
                title="ShoreAgents Company Video"
              />
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story */}
      <section className="relative py-20 md:py-32 bg-[#070a12] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection direction="left">
              <motion.span 
                className="inline-block px-4 py-1 mb-4 text-sm font-medium text-[#00e915] bg-[#00e915]/10 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                Our Journey
              </motion.span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
                <p>
                  Founded in Clark Freeport Zone, Pampanga, ShoreAgents started with a simple mission: to bridge the gap between talented Filipino professionals and global businesses seeking excellence.
                </p>
                <p>
                  Over <span className="text-[#0098ff] font-semibold">5+ years</span>, we&apos;ve grown from a small team to <span className="text-[#00e915] font-semibold">200+ dedicated professionals</span>, serving clients across real estate, healthcare, legal, and many other industries.
                </p>
                <p>
                  Our commitment to quality, continuous training, and employee wellbeing has made us one of the most sought-after employers in the region.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} direction="right">
              <motion.div
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {/* Glow effect behind image */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#ec297b]/30 to-[#0098ff]/30 blur-3xl scale-90" />
                
                <div className="relative aspect-video rounded-2xl overflow-hidden glow-pink">
                  <Image
                    src="/images/IMG_8025_OPTIMIZED.jpg"
                    alt="ShoreAgents Office"
                    fill
                    className="object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#ec297b]/20 to-transparent" />
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-20 md:py-32 bg-[#0B1120] overflow-hidden">
        <ParticleBackground variant="network" className="opacity-20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <motion.span 
              className="inline-block px-4 py-1 mb-4 text-sm font-medium text-[#00f0ff] bg-[#00f0ff]/10 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              Our Values
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              The principles that guide everything we do
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <StaggerItem key={value.title}>
                <GlassCard 
                  glowColor={index === 0 ? 'pink' : index === 1 ? 'green' : index === 2 ? 'blue' : 'cyan'}
                  className="p-6 h-full text-center group"
                >
                  <motion.div 
                    className="text-5xl mb-4"
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.3 }}
                  >
                    {value.icon}
                  </motion.div>
                  <h3 
                    className="text-xl font-bold mb-3 transition-colors"
                    style={{ color: value.color }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Leadership */}
      <section className="relative py-20 md:py-32 bg-[#070a12] overflow-hidden">
        <FloatingOrbs orbs={[
          { color: 'cyan', size: 300, x: '20%', y: '50%', delay: 0, duration: 20 },
          { color: 'pink', size: 250, x: '80%', y: '50%', delay: 3, duration: 25 },
        ]} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <motion.span 
              className="inline-block px-4 py-1 mb-4 text-sm font-medium text-[#ec297b] bg-[#ec297b]/10 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              Team
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">Leadership</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Meet the team driving our success
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {leadership.map((person, index) => (
              <StaggerItem key={person.name}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="text-center group"
                >
                  <motion.div 
                    className="relative w-48 h-48 mx-auto mb-6"
                    whileHover={{ scale: 1.05 }}
                  >
                    {/* Rotating border */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'conic-gradient(from 0deg, #ec297b, #0098ff, #00e915, #ec297b)',
                        padding: '3px',
                      }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    >
                      <div className="w-full h-full rounded-full bg-[#070a12]" />
                    </motion.div>
                    
                    {/* Image */}
                    <div className="absolute inset-1 rounded-full overflow-hidden">
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-white group-hover:text-[#ec297b] transition-colors">
                    {person.name}
                  </h3>
                  <p className="text-[#0098ff] font-medium">{person.role}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Location */}
      <section className="relative py-20 md:py-32 bg-[#0B1120] overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection direction="left">
              <motion.span 
                className="inline-block px-4 py-1 mb-4 text-sm font-medium text-[#0098ff] bg-[#0098ff]/10 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                Visit Us
              </motion.span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Location</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Located in the heart of Clark Freeport Zone, Pampanga, Philippines, our state-of-the-art office provides a modern, comfortable, and inspiring work environment.
              </p>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#ec297b]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#ec297b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Address</h4>
                    <p className="text-gray-400">Clark Freeport Zone, Pampanga, Philippines</p>
                  </div>
                </motion.div>
                
                <motion.a 
                  href="mailto:recruitment@shoreagents.com"
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0098ff]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0098ff]/30 transition-colors">
                    <svg className="w-6 h-6 text-[#0098ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Email</h4>
                    <p className="text-[#0098ff] group-hover:text-[#00f0ff] transition-colors">
                      recruitment@shoreagents.com
                    </p>
                  </div>
                </motion.a>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2} direction="right">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="aspect-video rounded-2xl overflow-hidden glass glow-blue"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3850.124!2d120.5!3d15.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDEwJzQ4LjAiTiAxMjDCsDMwJzAwLjAiRQ!5e0!3m2!1sen!2sph!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
