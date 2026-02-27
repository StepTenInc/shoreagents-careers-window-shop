'use client';

import { motion } from 'framer-motion';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import VideoEmbed from '@/components/VideoEmbed';
import FloatingOrbs from '@/components/FloatingOrbs';
import ParticleBackground from '@/components/ParticleBackground';
import GlowButton from '@/components/GlowButton';
import GlassCard from '@/components/GlassCard';

const videoTestimonials = [
  { name: 'ShoreAgents Team', youtubeId: 'Ckz4pCIQhJo' },
];

const stats = [
  { value: '4.8', label: 'Google Rating', icon: '⭐', color: '#FFD700' },
  { value: '95%', label: 'Employee Satisfaction', icon: '😊', color: '#00e915' },
  { value: '85%', label: 'Retention Rate', icon: '🤝', color: '#0098ff' },
  { value: '200+', label: 'Happy Team Members', icon: '🎉', color: '#ec297b' },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <motion.svg
        key={i}
        className={`w-6 h-6 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: i * 0.1 }}
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </motion.svg>
    ))}
  </div>
);

export default function ReviewsPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 bg-[#070a12] overflow-hidden">
        <FloatingOrbs orbs={[
          { color: 'pink', size: 400, x: '25%', y: '30%', delay: 0, duration: 20 },
          { color: 'cyan', size: 350, x: '75%', y: '70%', delay: 2, duration: 25 },
        ]} />
        <ParticleBackground variant="stars" className="opacity-50" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block px-4 py-1 mb-6 text-sm font-medium text-[#FFD700] bg-[#FFD700]/10 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              ⭐ 4.8 / 5.0 on Google
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">What Our Team Says</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear directly from real ShoreAgents team members about their experience
            </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD700]/50 to-transparent" />
      </section>

      {/* Stats */}
      <section className="relative py-16 bg-[#0B1120] overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StaggerItem key={stat.label}>
                <GlassCard className="p-6 text-center" glowColor={index === 0 ? 'cyan' : index === 1 ? 'green' : index === 2 ? 'blue' : 'pink'}>
                  <motion.div 
                    className="text-4xl mb-2"
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                  >
                    {stat.icon}
                  </motion.div>
                  <div 
                    className="text-3xl md:text-4xl font-bold mb-1"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="relative py-20 md:py-32 bg-[#0B1120] overflow-hidden">
        <ParticleBackground variant="network" className="opacity-20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <motion.span 
              className="inline-block px-4 py-1 mb-4 text-sm font-medium text-[#ec297b] bg-[#ec297b]/10 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              Video Stories
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">Meet Our Team</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Watch real stories from our amazing team members
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoTestimonials.map((testimonial, index) => (
              <StaggerItem key={testimonial.name}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="rounded-2xl overflow-hidden mb-4 glow-pink">
                    <VideoEmbed 
                      youtubeId="Ckz4pCIQhJo"
                      title={`${testimonial.name} - ShoreAgents`}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#ec297b] transition-colors">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00e915]" />
                    ShoreAgents Team Member
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="relative py-20 md:py-32 bg-[#070a12] overflow-hidden">
        <FloatingOrbs orbs={[
          { color: 'blue', size: 300, x: '20%', y: '50%', delay: 0, duration: 25 },
          { color: 'green', size: 250, x: '80%', y: '50%', delay: 3, duration: 20 },
        ]} />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <motion.span 
              className="inline-block px-4 py-1 mb-4 text-sm font-medium text-[#0098ff] bg-[#0098ff]/10 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              Client Story
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">Client Testimonial</span>
            </h2>
            <p className="text-gray-400 text-lg">What our clients say about working with ShoreAgents</p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl overflow-hidden glow-blue"
            >
              <VideoEmbed 
                youtubeId="Ckz4pCIQhJo"
                title="Box Brownie Testimonial"
              />
            </motion.div>
            <div className="text-center mt-6">
              <h3 className="text-xl font-bold text-white">Box Brownie</h3>
              <p className="text-[#0098ff]">ShoreAgents Client Partner</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="relative py-20 md:py-32 bg-[#0B1120] overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <motion.div
              className="p-px rounded-3xl bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] animate-gradient-bg"
              style={{ backgroundSize: '200% 200%' }}
            >
              <div className="bg-[#070a12] rounded-3xl p-8 md:p-12 text-center">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <motion.svg 
                    className="w-14 h-14 text-white" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </motion.svg>
                  <div className="text-left">
                    <p className="text-3xl font-bold text-white">4.8 / 5.0</p>
                    <p className="text-gray-400">Based on Google Reviews</p>
                  </div>
                </div>
                
                <div className="flex justify-center mb-8">
                  <StarRating rating={5} />
                </div>
                
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Our team members consistently rate us as one of the best places to work in Clark Freeport Zone
                </p>
                
                <motion.a
                  href="https://google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 text-[#FFD700] hover:text-[#FFA500] font-semibold transition-colors"
                >
                  See All Reviews
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-32 bg-[#070a12] overflow-hidden">
        <FloatingOrbs orbs={[
          { color: 'pink', size: 300, x: '20%', y: '50%', delay: 0, duration: 20 },
          { color: 'cyan', size: 250, x: '80%', y: '50%', delay: 2, duration: 25 },
        ]} />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Write Your Own <span className="gradient-text">Success Story?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Join our team and become part of the ShoreAgents family
            </p>
            <GlowButton href="/jobs" variant="primary" size="lg">
              View Open Positions
            </GlowButton>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
