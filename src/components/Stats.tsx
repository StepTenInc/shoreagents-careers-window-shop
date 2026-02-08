'use client';

import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { value: 5, suffix: '+', label: 'Years of Excellence', color: '#0098ff', icon: '🏆' },
  { value: 200, suffix: '+', label: 'Team Members', color: '#00e915', icon: '👥' },
  { value: 80, suffix: '%', label: 'Cost Savings', color: '#ec297b', icon: '💰' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [displayValue, setDisplayValue] = useState(0);
  
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 30,
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(Math.floor(latest));
    });
    return () => unsubscribe();
  }, [springValue]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.15,
            type: 'spring',
            stiffness: 100,
          }}
          whileHover={{ 
            scale: 1.05, 
            y: -10,
          }}
          className="group relative"
        >
          {/* Animated border gradient */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <motion.div
              className="absolute inset-[-2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `linear-gradient(90deg, ${stat.color}, transparent, ${stat.color})`,
                backgroundSize: '200% 100%',
              }}
              animate={{ backgroundPosition: ['0% 0%', '200% 0%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
            <div className="absolute inset-[1px] bg-[#0B1120] rounded-2xl" />
          </div>
          
          {/* Card content */}
          <div className="relative glass rounded-2xl p-6 md:p-8 text-center overflow-hidden">
            {/* Glow effect on hover */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${stat.color}20 0%, transparent 70%)`,
              }}
            />
            
            {/* Icon with bounce */}
            <motion.div 
              className="text-4xl mb-4"
              whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.4 }}
            >
              {stat.icon}
            </motion.div>
            
            {/* Counter */}
            <div
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 relative"
              style={{ color: stat.color }}
            >
              {/* Text glow */}
              <span 
                className="absolute inset-0 blur-lg opacity-50"
                style={{ color: stat.color }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="relative">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </span>
            </div>
            
            <p className="text-gray-400 text-sm md:text-base font-medium">
              {stat.label}
            </p>
            
            {/* Bottom accent line */}
            <motion.div
              className="absolute bottom-0 left-1/2 h-1 rounded-full"
              style={{ backgroundColor: stat.color }}
              initial={{ width: 0, x: '-50%' }}
              whileInView={{ width: '60%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
