'use client';

import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { ISourceOptions } from '@tsparticles/engine';

interface ParticleBackgroundProps {
  className?: string;
  variant?: 'default' | 'stars' | 'network' | 'bubbles';
}

export default function ParticleBackground({ className = '', variant = 'default' }: ParticleBackgroundProps) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(() => {
    const baseConfig = {
      fullScreen: { enable: false },
      fpsLimit: 60,
      detectRetina: true,
    };

    switch (variant) {
      case 'stars':
        return {
          ...baseConfig,
          particles: {
            number: { value: 100, density: { enable: true } },
            color: { value: ['#ec297b', '#0098ff', '#00f0ff', '#ffffff'] },
            shape: { type: 'circle' },
            opacity: {
              value: { min: 0.1, max: 0.8 },
              animation: { enable: true, speed: 1, minimumValue: 0.1 },
            },
            size: {
              value: { min: 0.5, max: 3 },
              animation: { enable: true, speed: 2, minimumValue: 0.5 },
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: 'none' as const,
              random: true,
              outModes: { default: 'out' as const },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'bubble' },
            },
            modes: {
              bubble: { distance: 200, size: 6, duration: 2, opacity: 0.8 },
            },
          },
        };

      case 'network':
        return {
          ...baseConfig,
          particles: {
            number: { value: 60, density: { enable: true } },
            color: { value: '#ec297b' },
            shape: { type: 'circle' },
            opacity: { value: 0.5 },
            size: { value: 2 },
            links: {
              enable: true,
              distance: 150,
              color: '#0098ff',
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'none' as const,
              outModes: { default: 'bounce' as const },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'grab' },
            },
            modes: {
              grab: { distance: 200, links: { opacity: 0.5 } },
            },
          },
        };

      case 'bubbles':
        return {
          ...baseConfig,
          particles: {
            number: { value: 30, density: { enable: true } },
            color: { value: ['#ec297b', '#0098ff', '#00f0ff'] },
            shape: { type: 'circle' },
            opacity: { value: { min: 0.1, max: 0.3 } },
            size: { value: { min: 20, max: 80 } },
            move: {
              enable: true,
              speed: 1,
              direction: 'top' as const,
              outModes: { default: 'out' as const },
            },
          },
        };

      default:
        return {
          ...baseConfig,
          particles: {
            number: { value: 80, density: { enable: true } },
            color: { value: ['#ec297b', '#0098ff', '#00f0ff', '#00e915'] },
            shape: { type: 'circle' },
            opacity: {
              value: { min: 0.1, max: 0.5 },
              animation: { enable: true, speed: 0.5, minimumValue: 0.1 },
            },
            size: {
              value: { min: 1, max: 4 },
            },
            move: {
              enable: true,
              speed: 0.8,
              direction: 'none' as const,
              random: true,
              straight: false,
              outModes: { default: 'out' as const },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'repulse' },
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
        };
    }
  }, [variant]);

  if (!init) {
    return null;
  }

  return (
    <Particles
      className={`absolute inset-0 z-0 ${className}`}
      options={options}
    />
  );
}
