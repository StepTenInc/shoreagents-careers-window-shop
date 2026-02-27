'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface VideoEmbedProps {
  youtubeId?: string;
  driveId?: string;
  title?: string;
  className?: string;
  aspectRatio?: 'video' | 'square';
}

export default function VideoEmbed({ youtubeId, driveId, title, className = '', aspectRatio = 'video' }: VideoEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const aspectClass = aspectRatio === 'square' ? 'aspect-square' : 'aspect-video';

  const src = youtubeId
    ? `https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`
    : driveId
    ? `https://drive.google.com/file/d/${driveId}/preview`
    : null;

  if (!src) return null;

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className={`relative ${aspectClass} rounded-2xl overflow-hidden glass group ${className}`}
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 animate-pulse">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="w-8 h-8 border-2 border-[#ec297b] border-t-transparent rounded-full"
              />
            </div>
          </div>
        </div>
      )}

      <iframe
        src={src}
        title={title || 'Video'}
        width="100%"
        height="100%"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
        className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ border: 0 }}
        onLoad={() => setIsLoaded(true)}
      />

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl ring-2 ring-[#ec297b]/30" />
      </div>
    </motion.div>
  );
}
