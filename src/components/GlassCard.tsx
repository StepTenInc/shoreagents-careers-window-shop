'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
  glowColor?: 'pink' | 'blue' | 'green' | 'cyan';
  animatedBorder?: boolean;
  hoverLift?: boolean;
  onClick?: () => void;
}

export default function GlassCard({
  children,
  className = '',
  tilt = true,
  glowColor,
  animatedBorder = false,
  hoverLift = true,
  onClick,
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!tilt || !ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const glowClasses = {
    pink: 'hover:shadow-[0_0_40px_rgba(236,41,123,0.3)]',
    blue: 'hover:shadow-[0_0_40px_rgba(0,152,255,0.3)]',
    green: 'hover:shadow-[0_0_40px_rgba(0,233,21,0.3)]',
    cyan: 'hover:shadow-[0_0_40px_rgba(0,240,255,0.3)]',
  };

  const borderGradients = {
    pink: 'from-[#ec297b] via-[#f47fb0] to-[#ec297b]',
    blue: 'from-[#0098ff] via-[#00f0ff] to-[#0098ff]',
    green: 'from-[#00e915] via-[#7fff00] to-[#00e915]',
    cyan: 'from-[#00f0ff] via-[#0098ff] to-[#00f0ff]',
  };

  return (
    <motion.div
      ref={ref}
      style={tilt ? { rotateX, rotateY, transformStyle: 'preserve-3d' } : {}}
      whileHover={hoverLift ? { y: -8, scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`
        relative
        bg-white/[0.03] backdrop-blur-xl
        border border-white/10
        rounded-2xl
        transition-all duration-500
        ${glowColor ? glowClasses[glowColor] : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {/* Animated border gradient */}
      {animatedBorder && glowColor && (
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div 
            className={`
              absolute inset-[-2px] 
              bg-gradient-to-r ${borderGradients[glowColor]}
              opacity-0 group-hover:opacity-100
              transition-opacity duration-500
              animate-gradient-bg
            `}
            style={{ backgroundSize: '200% 200%' }}
          />
          <div className="absolute inset-[1px] bg-[#0B1120] rounded-2xl" />
        </div>
      )}
      
      {/* Spotlight effect */}
      {tilt && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            background: useTransform(
              [mouseXSpring, mouseYSpring],
              ([x, y]) =>
                `radial-gradient(600px circle at ${(Number(x) + 0.5) * 100}% ${(Number(y) + 0.5) * 100}%, rgba(236, 41, 123, 0.06), transparent 40%)`
            ),
          }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10" style={tilt ? { transform: 'translateZ(20px)' } : {}}>
        {children}
      </div>
    </motion.div>
  );
}
