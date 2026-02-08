'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode, useRef, useState } from 'react';

interface GlowButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  external?: boolean;
  magnetic?: boolean;
}

export default function GlowButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
  magnetic = true,
}: GlowButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!magnetic || !ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) / 10;
    const deltaY = (e.clientY - centerY) / 10;
    
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    primary: `
      relative overflow-hidden
      bg-gradient-to-r from-[#ec297b] to-[#f47fb0] 
      text-white font-bold rounded-full
      shadow-[0_0_20px_rgba(236,41,123,0.3)]
      hover:shadow-[0_0_40px_rgba(236,41,123,0.5)]
      transition-all duration-300
    `,
    secondary: `
      relative overflow-hidden
      bg-gradient-to-r from-[#0098ff] to-[#00f0ff]
      text-white font-bold rounded-full
      shadow-[0_0_20px_rgba(0,152,255,0.3)]
      hover:shadow-[0_0_40px_rgba(0,152,255,0.5)]
      transition-all duration-300
    `,
    ghost: `
      relative overflow-hidden
      bg-white/5 backdrop-blur-sm
      border border-white/20
      text-white font-semibold rounded-full
      hover:bg-white/10 hover:border-white/30
      transition-all duration-300
    `,
  };

  const buttonContent = (
    <>
      {/* Shine effect */}
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-[100%] transition-all duration-700 ease-out" />
      </span>
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      
      {/* Gradient border glow for primary */}
      {variant === 'primary' && (
        <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="absolute inset-[-2px] bg-gradient-to-r from-[#ec297b] via-[#00f0ff] to-[#ec297b] rounded-full blur-md animate-gradient-bg" style={{ backgroundSize: '200% 200%' }} />
        </span>
      )}
    </>
  );

  const combinedClassName = `
    group inline-flex items-center justify-center
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `;

  if (href) {
    const linkProps = external
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {};

    return (
      <motion.div
        style={{ x: position.x, y: position.y }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      >
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={combinedClassName}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          {...linkProps}
        >
          {buttonContent}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      style={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
    >
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        onClick={onClick}
        className={combinedClassName}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {buttonContent}
      </button>
    </motion.div>
  );
}
