'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const stats = [
  { value: 5, suffix: '+', label: 'Years of Excellence', color: '#0098ff' },
  { value: 200, suffix: '+', label: 'Team Members', color: '#00e915' },
  { value: 80, suffix: '%', label: 'Cost Savings', color: '#ec297b' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count}
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
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="glass rounded-2xl p-6 md:p-8 text-center"
        >
          <div
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
            style={{ color: stat.color }}
          >
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
          </div>
          <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
