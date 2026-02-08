'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedSection from '@/components/AnimatedSection';

const values = [
  {
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, delivering top-tier service to our clients and team members.',
    icon: '⭐',
  },
  {
    title: 'Growth',
    description: 'We invest in our people through continuous learning, training, and career development opportunities.',
    icon: '📈',
  },
  {
    title: 'Community',
    description: 'We build a supportive, inclusive workplace where everyone feels valued and can thrive.',
    icon: '🤝',
  },
  {
    title: 'Innovation',
    description: 'We embrace technology and new ways of working to stay ahead in the industry.',
    icon: '💡',
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
      <section className="relative py-24 md:py-32 bg-[#0B1120]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ec297b] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0098ff] rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Who We Are</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              ShoreAgents is a leading BPO company in the Philippines, helping businesses worldwide build exceptional remote teams while creating life-changing career opportunities for Filipinos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Founded in Clark Freeport Zone, Pampanga, ShoreAgents started with a simple mission: to bridge the gap between talented Filipino professionals and global businesses seeking excellence.
                </p>
                <p>
                  Over 5+ years, we&apos;ve grown from a small team to 200+ dedicated professionals, serving clients across real estate, healthcare, legal, and many other industries.
                </p>
                <p>
                  Our commitment to quality, continuous training, and employee wellbeing has made us one of the most sought-after employers in the region.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative aspect-video rounded-2xl overflow-hidden glow-pink"
              >
                <Image
                  src="/images/IMG_8025_OPTIMIZED.jpg"
                  alt="ShoreAgents Office"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass rounded-2xl p-6 text-center group"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#ec297b] transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Leadership</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Meet the team driving our success
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#ec297b]/30">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white">{person.name}</h3>
                <p className="text-[#ec297b]">{person.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 md:py-24 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Location</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Located in the heart of Clark Freeport Zone, Pampanga, Philippines, our state-of-the-art office provides a modern, comfortable, and inspiring work environment.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#ec297b]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#ec297b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Address</h4>
                    <p className="text-gray-400">Clark Freeport Zone, Pampanga, Philippines</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0098ff]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#0098ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <a href="mailto:recruitment@shoreagents.com" className="text-[#0098ff] hover:underline">
                      recruitment@shoreagents.com
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="aspect-video rounded-2xl overflow-hidden glass">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3850.124!2d120.5!3d15.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDEwJzQ4LjAiTiAxMjDCsDMwJzAwLjAiRQ!5e0!3m2!1sen!2sph!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
