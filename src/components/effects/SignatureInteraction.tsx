import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

type InteractionType = 'parallax' | 'clip-reveal' | 'text-reveal' | 'none';

interface SignatureInteractionProps {
  type?: InteractionType;
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export const SignatureInteraction: React.FC<SignatureInteractionProps> = ({ 
  type = 'none', 
  children, 
  className = "",
  intensity = 0.2
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  if (type === 'parallax') {
    // Map scroll progress to Y translation
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    
    return (
      <div ref={ref} className={`overflow-hidden ${className}`}>
        <motion.div style={{ y, scale }} className="w-full h-full">
          {children}
        </motion.div>
      </div>
    );
  }

  if (type === 'clip-reveal') {
    return (
      <motion.div
        initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
        whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={className}>{children}</div>;
};
