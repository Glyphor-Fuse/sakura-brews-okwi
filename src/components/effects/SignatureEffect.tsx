import React from 'react';

interface SignatureEffectProps {
  effect?: 'grain' | 'none';
}

export const SignatureEffect: React.FC<SignatureEffectProps> = ({ effect = 'grain' }) => {
  if (effect === 'grain') {
    return (
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999] opacity-[0.05]">
        <svg className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.9" 
              numOctaves="3" 
              stitchTiles="stitch" 
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>
    );
  }
  return null;
};
