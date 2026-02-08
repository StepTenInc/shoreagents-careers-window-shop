'use client';

import { motion } from 'framer-motion';

interface Orb {
  color: 'pink' | 'blue' | 'green' | 'cyan';
  size: number;
  x: string;
  y: string;
  delay: number;
  duration: number;
}

interface FloatingOrbsProps {
  className?: string;
  orbs?: Orb[];
}

const defaultOrbs: Orb[] = [
  { color: 'pink', size: 400, x: '20%', y: '20%', delay: 0, duration: 20 },
  { color: 'blue', size: 350, x: '70%', y: '60%', delay: 2, duration: 25 },
  { color: 'cyan', size: 300, x: '50%', y: '80%', delay: 4, duration: 22 },
  { color: 'green', size: 250, x: '80%', y: '30%', delay: 3, duration: 28 },
];

const colorMap = {
  pink: '#ec297b',
  blue: '#0098ff',
  green: '#00e915',
  cyan: '#00f0ff',
};

export default function FloatingOrbs({ className = '', orbs = defaultOrbs }: FloatingOrbsProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${colorMap[orb.color]} 0%, transparent 70%)`,
            filter: 'blur(60px)',
            opacity: 0.3,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            x: [0, 50, -30, 20, 0],
            y: [0, -40, 30, -20, 0],
            scale: [1, 1.1, 0.9, 1.05, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
