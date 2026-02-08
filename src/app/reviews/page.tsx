'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import VideoEmbed from '@/components/VideoEmbed';

// Real employee video testimonials from Google Drive
const videoTestimonials = [
  {
    name: 'Diane Monterey',
    driveId: '19qdZ4SsMqGmat2Hhk2S4GGwla5Xkji9z',
  },
  {
    name: 'Arman Jara',
    driveId: '1fTsXkaA4v93kQKGZu5QCPRisY0JfpbsJ',
  },
  {
    name: 'Jacinto Darca',
    driveId: '1f2gBDpdZzMqiNaah5NUrrek89WV95SpE',
  },
  {
    name: 'Catherine Cunanan',
    driveId: '1-8Jw_Cey8jojhHzMU41k186Qycbxy_nb',
  },
  {
    name: 'Kiel Tayag',
    driveId: '1ZVicSmPa8vmuMCacFJU3oFwDHZo2D_2q',
  },
  {
    name: 'Ericka Imbornal',
    driveId: '10hv2wWz54-W4fto0Qaxl_1FAKpR5i5Fl',
  },
  {
    name: 'Reachelle Dela Cruz',
    driveId: '1PasIZs_R-f0j5IZDpatVOatXYtXH7OKd',
  },
  {
    name: 'Ryan Bautista',
    driveId: '1f8VBuElEU75RGmzS7J9wHRgxVxWB4JOJ',
  },
  {
    name: 'Jonathan Castro',
    driveId: '1rI_pKKRpj43y3UbhhI102olLNhYg5WRM',
  },
];

const stats = [
  { value: '4.8', label: 'Google Rating', icon: '⭐' },
  { value: '95%', label: 'Employee Satisfaction', icon: '😊' },
  { value: '85%', label: 'Retention Rate', icon: '🤝' },
  { value: '200+', label: 'Happy Team Members', icon: '🎉' },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function ReviewsPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-[#0B1120]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ec297b] rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">What Our Team Says</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear directly from real ShoreAgents team members about their experience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Meet Our Team</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Watch real stories from our amazing team members
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <VideoEmbed 
                  driveId={testimonial.driveId}
                  title={`${testimonial.name} - ShoreAgents`}
                  className="mb-3"
                />
                <h3 className="text-lg font-semibold text-white group-hover:text-[#ec297b] transition-colors">
                  {testimonial.name}
                </h3>
                <p className="text-gray-400 text-sm">ShoreAgents Team Member</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonial - Box Brownie */}
      <section className="py-16 md:py-24 bg-[#0B1120]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Client Testimonial</span>
            </h2>
            <p className="text-gray-400">What our clients say about working with ShoreAgents</p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <VideoEmbed 
              driveId="15h-uIngTA8rfu2Ws8KVv3RauFW_8jv1V"
              title="Box Brownie Testimonial"
              className="glow-blue"
            />
            <p className="text-center text-white font-semibold mt-4">Box Brownie</p>
            <p className="text-center text-gray-400 text-sm">ShoreAgents Client Partner</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <div className="glass rounded-2xl p-8 md:p-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <div className="text-left">
                  <p className="text-2xl font-bold text-white">4.8 / 5.0</p>
                  <p className="text-gray-400">Based on Google Reviews</p>
                </div>
              </div>
              <div className="flex justify-center mb-6">
                <StarRating rating={5} />
              </div>
              <p className="text-gray-300 text-lg mb-6">
                Our team members consistently rate us as one of the best places to work in Clark Freeport Zone
              </p>
              <a
                href="https://google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#ec297b] hover:text-[#f47fb0] font-semibold transition-colors"
              >
                See All Reviews
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[#0B1120]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Write Your Own <span className="gradient-text">Success Story?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Join our team and become part of the ShoreAgents family
            </p>
            <Link
              href="/jobs"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#ec297b] to-[#f47fb0] text-white font-bold rounded-full text-lg hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
            >
              View Open Positions
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
