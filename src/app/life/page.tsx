'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import FloatingOrbs from '@/components/FloatingOrbs';
import ParticleBackground from '@/components/ParticleBackground';
import GlowButton from '@/components/GlowButton';
import GlassCard from '@/components/GlassCard';

const socialContent = [
  { type: 'video', platform: 'YouTube', title: 'A Day in the Life at ShoreAgents', thumbnail: '/images/staff/staff-1.jpg', color: '#FF0000' },
  { type: 'video', platform: 'TikTok', title: 'Fun Friday Highlights', thumbnail: '/images/staff/staff-2.jpg', color: '#00f2ea' },
  { type: 'image', platform: 'Facebook', title: 'Team Building 2026', thumbnail: '/images/staff/staff-3.jpg', color: '#1877F2' },
  { type: 'video', platform: 'YouTube', title: 'Office Tour', thumbnail: '/images/staff/staff-4.jpg', color: '#FF0000' },
  { type: 'image', platform: 'Instagram', title: 'Christmas Party', thumbnail: '/images/staff/staff-5.jpg', color: '#E4405F' },
  { type: 'video', platform: 'TikTok', title: 'Behind the Scenes', thumbnail: '/images/staff/staff-6.jpg', color: '#00f2ea' },
  { type: 'image', platform: 'Facebook', title: 'New Hire Welcome', thumbnail: '/images/staff/staff-1.jpg', color: '#1877F2' },
  { type: 'video', platform: 'YouTube', title: 'Employee Testimonials', thumbnail: '/images/staff/staff-2.jpg', color: '#FF0000' },
];

const culture = [
  { title: 'Work-Life Balance', description: 'We respect your time and prioritize healthy work-life balance.', icon: '⚖️', color: '#ec297b' },
  { title: 'Inclusive Environment', description: 'Everyone is welcome and valued for who they are.', icon: '🌈', color: '#0098ff' },
  { title: 'Continuous Learning', description: 'We invest in your growth with training and development.', icon: '📚', color: '#00e915' },
  { title: 'Celebrate Success', description: 'We recognize achievements and celebrate milestones together.', icon: '🎉', color: '#00f0ff' },
];

const socialLinks = [
  { name: 'Facebook', href: 'https://facebook.com/shoreagents', color: '#1877F2', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { name: 'TikTok', href: 'https://tiktok.com/@shoreagents', color: '#00f2ea', icon: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z' },
  { name: 'YouTube', href: 'https://youtube.com/@shoreagents', color: '#FF0000', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
  { name: 'Instagram', href: 'https://www.instagram.com/shoreagentscareers?igsh=bWI0bTVuZWZqM3Fy', color: '#E4405F', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
];

export default function LifePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 bg-[#070a12] overflow-hidden">
        <FloatingOrbs />
        <ParticleBackground variant="bubbles" className="opacity-40" />
        
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
              Our Culture
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">Life at ShoreAgents</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get a glimpse of what it&apos;s really like to be part of our amazing team
            </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ec297b]/50 to-transparent" />
      </section>

      {/* Social Wall */}
      <section className="relative py-20 md:py-32 bg-[#0B1120] overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <motion.span 
              className="inline-block px-4 py-1 mb-4 text-sm font-medium text-[#0098ff] bg-[#0098ff]/10 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              Social
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">Social Wall</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Follow us on social media for the latest updates
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialContent.map((item, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
                  
                  {/* Platform badge */}
                  <div 
                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-white text-xs font-bold"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.platform}
                  </div>
                  
                  {/* Play button for videos */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        className="w-14 h-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center"
                        whileHover={{ scale: 1.2 }}
                      >
                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </motion.div>
                    </div>
                  )}
                  
                  {/* Glow border on hover */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                    style={{ boxShadow: `inset 0 0 30px ${item.color}50` }} 
                  />
                  
                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold text-sm drop-shadow-lg">{item.title}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -3 }}
                className="px-6 py-3 glass rounded-full text-white font-medium flex items-center gap-2 group"
              >
                <svg 
                  className="w-5 h-5 transition-colors" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  style={{ color: link.color }}
                >
                  <path d={link.icon} />
                </svg>
                <span className="group-hover:text-white transition-colors">{link.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="relative py-20 md:py-32 bg-[#070a12] overflow-hidden">
        <FloatingOrbs orbs={[
          { color: 'pink', size: 300, x: '10%', y: '30%', delay: 0, duration: 25 },
          { color: 'cyan', size: 250, x: '90%', y: '70%', delay: 3, duration: 20 },
        ]} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <motion.span 
              className="inline-block px-4 py-1 mb-4 text-sm font-medium text-[#00e915] bg-[#00e915]/10 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              Values
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Culture</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              What makes ShoreAgents a great place to work
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {culture.map((item, index) => (
              <StaggerItem key={item.title}>
                <GlassCard 
                  glowColor={index % 4 === 0 ? 'pink' : index % 4 === 1 ? 'blue' : index % 4 === 2 ? 'green' : 'cyan'}
                  className="p-6 h-full text-center"
                >
                  <motion.div 
                    className="text-5xl mb-4"
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: item.color }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
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
              className="p-px rounded-3xl bg-gradient-to-r from-[#ec297b] via-[#0098ff] to-[#00e915] animate-gradient-bg"
              style={{ backgroundSize: '200% 200%' }}
            >
              <div className="bg-[#070a12] rounded-3xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Want to Be Part of <span className="gradient-text">This?</span>
                </h2>
                <p className="text-gray-400 text-lg mb-8">
                  Join our amazing team and create memories that last a lifetime
                </p>
                <GlowButton href="/jobs" variant="primary" size="lg">
                  Join the Team
                </GlowButton>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
