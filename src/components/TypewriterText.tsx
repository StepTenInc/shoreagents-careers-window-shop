'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TypewriterTextProps {
  texts: string[];
  className?: string;
  speed?: number;
  deleteSpeed?: number;
  delayBetween?: number;
  cursor?: boolean;
}

export default function TypewriterText({
  texts,
  className = '',
  speed = 100,
  deleteSpeed = 50,
  delayBetween = 2000,
  cursor = true,
}: TypewriterTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const targetText = texts[currentTextIndex];

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, delayBetween);
      return () => clearTimeout(pauseTimeout);
    }

    if (!isDeleting && currentText === targetText) {
      setIsPaused(true);
      return;
    }

    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          setCurrentText((prev) => prev.slice(0, -1));
        } else {
          setCurrentText((prev) => targetText.slice(0, prev.length + 1));
        }
      },
      isDeleting ? deleteSpeed : speed
    );

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, isPaused, texts, speed, deleteSpeed, delayBetween]);

  return (
    <span className={className}>
      <AnimatePresence mode="popLayout">
        {currentText.split('').map((char, index) => (
          <motion.span
            key={`${currentTextIndex}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.1 }}
          >
            {char}
          </motion.span>
        ))}
      </AnimatePresence>
      {cursor && <span className="typing-cursor" />}
    </span>
  );
}
