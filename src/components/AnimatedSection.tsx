'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  stagger?: boolean;
  once?: boolean;
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up',
  duration = 0.6,
  stagger = false,
  once = true,
}: AnimatedSectionProps) {
  
  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: 60, x: 0 };
      case 'down': return { y: -60, x: 0 };
      case 'left': return { x: 60, y: 0 };
      case 'right': return { x: -60, y: 0 };
      case 'none': return { x: 0, y: 0 };
      default: return { y: 60, x: 0 };
    }
  };

  const containerVariants: Variants = {
    hidden: { 
      opacity: 0,
      ...getInitialPosition(),
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
        ...(stagger && {
          staggerChildren: 0.1,
          delayChildren: delay,
        }),
      },
    },
  };

  const childVariants: Variants = {
    hidden: { 
      opacity: 0,
      y: 30,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-80px' }}
      variants={containerVariants}
      className={className}
    >
      {stagger ? (
        <motion.div variants={childVariants}>
          {children}
        </motion.div>
      ) : (
        children
      )}
    </motion.div>
  );
}

// Export a reveal variant for text
export function TextReveal({ 
  children, 
  className = '',
  delay = 0,
}: { 
  children: ReactNode; 
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        variants={{
          hidden: { y: '100%', opacity: 0 },
          visible: { 
            y: 0, 
            opacity: 1,
            transition: {
              duration: 0.8,
              delay,
              ease: [0.25, 0.4, 0.25, 1],
            },
          },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

// Export a stagger container for lists
export function StaggerContainer({ 
  children, 
  className = '',
  delay = 0,
  staggerDelay = 0.1,
}: { 
  children: ReactNode; 
  className?: string;
  delay?: number;
  staggerDelay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ 
  children, 
  className = '',
}: { 
  children: ReactNode; 
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.4, 0.25, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
