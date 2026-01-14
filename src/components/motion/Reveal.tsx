import React, { useRef } from 'react';
import { motion, useInView, UseInViewOptions } from 'framer-motion';
import { useReducedMotion } from './useReducedMotion';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  duration?: number;
  y?: number;
  threshold?: number;
  className?: string;
}

export const Reveal = ({ 
  children, 
  width = 'fit-content', 
  delay = 0.25, 
  duration = 0.5, 
  y = 20,
  threshold = 0.5,
  className = ""
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : y },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};
