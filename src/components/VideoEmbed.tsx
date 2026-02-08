'use client';

import { motion } from 'framer-motion';

interface VideoEmbedProps {
  driveId: string;
  title?: string;
  className?: string;
  aspectRatio?: 'video' | 'square';
}

export default function VideoEmbed({ driveId, title, className = '', aspectRatio = 'video' }: VideoEmbedProps) {
  const aspectClass = aspectRatio === 'square' ? 'aspect-square' : 'aspect-video';
  
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`relative ${aspectClass} rounded-2xl overflow-hidden glass ${className}`}
    >
      <iframe
        src={`https://drive.google.com/file/d/${driveId}/preview`}
        title={title || 'Video'}
        width="100%"
        height="100%"
        allow="autoplay; fullscreen"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
      />
    </motion.div>
  );
}
