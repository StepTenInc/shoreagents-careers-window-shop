'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useApplyModal } from '@/context/ApplyModalContext';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Benefits', href: '/benefits' },
  { name: 'Life', href: '/life' },
  { name: 'Industries', href: '/industries' },
  { name: 'Jobs', href: '/jobs' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Apply', href: '/apply' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { openApplyModal } = useApplyModal();
  
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(11, 17, 32, 0.5)', 'rgba(11, 17, 32, 0.95)']
  );
  
  const headerBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(10px)', 'blur(20px)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      style={{ backgroundColor: headerBackground, backdropFilter: headerBlur }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        hasScrolled ? 'border-white/10' : 'border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex-shrink-0 relative group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Image
                src="/images/SAC-LOGO-other.png"
                alt="ShoreAgents Careers"
                width={180}
                height={50}
                className="h-10 md:h-12 w-auto"
              />
            </motion.div>
            {/* Logo glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-[#ec297b]/30" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={item.href}
                  className="relative px-4 py-2 text-sm text-gray-300 hover:text-white rounded-lg transition-all duration-300 group"
                >
                  <span className="relative z-10">{item.name}</span>
                  {/* Hover background */}
                  <motion.span
                    className="absolute inset-0 bg-white/0 rounded-lg"
                    whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  />
                  {/* Underline effect */}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-[#ec297b] to-[#0098ff] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </motion.div>
            ))}
            

          </div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden relative p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <div className="w-6 h-6 flex flex-col items-center justify-center">
              <motion.span
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 8 : 0,
                }}
                className="w-5 h-0.5 bg-current rounded-full transition-colors"
              />
              <motion.span
                animate={{
                  opacity: isOpen ? 0 : 1,
                  x: isOpen ? 20 : 0,
                }}
                className="w-5 h-0.5 bg-current rounded-full mt-1.5 transition-colors"
              />
              <motion.span
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -8 : 0,
                }}
                className="w-5 h-0.5 bg-current rounded-full mt-1.5 transition-colors"
              />
            </div>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0B1120]/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, type: 'spring', stiffness: 200 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all active:scale-95"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
