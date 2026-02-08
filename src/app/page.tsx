'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import Stats from '@/components/Stats';
import VideoEmbed from '@/components/VideoEmbed';

const featuredJobs = [
  { title: 'Real Estate Transaction Coordinator', type: 'Full-time', location: 'Clark, Philippines' },
  { title: 'Healthcare Virtual Assistant', type: 'Full-time', location: 'Clark, Philippines' },
  { title: 'Legal Support Specialist', type: 'Full-time', location: 'Clark, Philippines' },
  { title: 'Customer Success Manager', type: 'Full-time', location: 'Clark, Philippines' },
];

const socialPosts = [
  { platform: 'Team Event', image: '/images/IMG_8025_OPTIMIZED.jpg', title: 'Fun Friday at the Office!' },
  { platform: 'Culture', image: '/images/IMG_8025_OPTIMIZED.jpg', title: 'Team Building 2026' },
  { platform: 'Growth', image: '/images/IMG_8025_OPTIMIZED.jpg', title: 'Career Development' },
  { platform: 'Celebration', image: '/images/IMG_8025_OPTIMIZED.jpg', title: 'Monthly Awards' },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/IMG_8025_OPTIMIZED.jpg"
            alt="ShoreAgents Office"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] via-transparent to-gray-900" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">Building Brighter</span>
              <br />
              <span className="text-white">Futures</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8"
          >
            Join the ShoreAgents team and unlock your potential. We&apos;re building the future of work from Clark Freeport Zone, Philippines.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/jobs"
              className="px-8 py-4 bg-gradient-to-r from-[#ec297b] to-[#f47fb0] text-white font-bold rounded-full text-lg hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 animate-pulse-glow"
            >
              Explore Opportunities
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 glass text-white font-semibold rounded-full text-lg hover:bg-white/20 transition-all duration-300"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
            >
              <motion.div className="w-1.5 h-3 bg-white/50 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Why ShoreAgents?</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We&apos;ve been building successful teams and careers for over 5 years.
            </p>
          </AnimatedSection>
          <Stats />
        </div>
      </section>

      {/* Social Feed Grid */}
      <section className="py-16 md:py-24 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Life at ShoreAgents</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              See what makes our team special
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[#ec297b] text-xs font-semibold">{post.platform}</span>
                  <p className="text-white font-medium text-sm">{post.title}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/life"
              className="inline-flex items-center gap-2 text-[#ec297b] hover:text-[#f47fb0] font-semibold transition-colors"
            >
              See More
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Company Video */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Our Story</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover what makes ShoreAgents the best place to build your career
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <VideoEmbed 
              driveId="1wvUXGIu3SyUWqk_J1_rzQ6t_dThJFMKA"
              title="ShoreAgents Company Video"
              className="glow-pink"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-16 md:py-24 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Featured Opportunities</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Start your journey with us today
            </p>
          </AnimatedSection>

          <div className="grid gap-4 md:gap-6">
            {featuredJobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="glass rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group cursor-pointer"
              >
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#ec297b] transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-4 mt-2 text-gray-400 text-sm">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {job.location}
                    </span>
                  </div>
                </div>
                <Link
                  href="/jobs"
                  className="px-6 py-3 bg-white/10 hover:bg-[#ec297b] text-white font-semibold rounded-full transition-all duration-300 text-center"
                >
                  Apply Now
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/jobs"
              className="px-8 py-4 bg-gradient-to-r from-[#ec297b] to-[#f47fb0] text-white font-bold rounded-full text-lg hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 inline-block"
            >
              View All Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#0B1120] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#ec297b]/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to <span className="gradient-text">Start Your Journey?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Join our team of 200+ professionals and build your career with one of the fastest-growing companies in the Philippines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/jobs"
                className="px-8 py-4 bg-gradient-to-r from-[#ec297b] to-[#f47fb0] text-white font-bold rounded-full text-lg hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
              >
                Browse Openings
              </Link>
              <a
                href="mailto:recruitment@shoreagents.com"
                className="px-8 py-4 glass text-white font-semibold rounded-full text-lg hover:bg-white/20 transition-all duration-300"
              >
                Contact Recruitment
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
