import React, { useState, useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'motion/react';
import img1 from '../assets/images/karthik-normal.png';
import img2 from '../assets/images/karthik-hover.png';

/**
 * SpotlightReveal
 * A hero section component that reveals a background image 
 * through a circular spotlight that follows the cursor, now with 3D Tilt.
 */
const SpotlightReveal = () => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for the tilt
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  // Transforms for 3D rotation
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

  // Spotlight position relative to container
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Relative position for tilt (-0.5 to 0.5)
    const relX = (e.clientX - rect.left) / width - 0.5;
    const relY = (e.clientY - rect.top) / height - 0.5;

    x.set(relX);
    y.set(relY);

    // Absolute position for spotlight mask (in pixels)
    const absX = e.clientX - rect.left;
    const absY = e.clientY - rect.top;
    setSpotlightPos({ x: absX, y: absY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div className="perspective-[1000px] w-full max-w-[380px] mx-auto relative">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-emerald-500/20 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-emerald-500/5 rounded-full"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[125%] h-[125%] border border-emerald-500/5 rounded-full border-dashed"
        />
      </div>

      <motion.div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative aspect-[3/4] rounded-[32px] overflow-hidden cursor-none bg-[#022c22] border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7),0_30px_60px_-30px_rgba(16,185,129,0.3)] group transition-shadow duration-500 hover:shadow-[0_70px_120px_-20px_rgba(0,0,0,0.8),0_0_30px_rgba(16,185,129,0.2)]"
      >
        {/* Decorative Internal Border */}
        <div className="absolute inset-4 border border-white/5 rounded-[24px] pointer-events-none z-30" />

        {/* Base Photo */}
        <img 
          src={img1} 
          alt="Sri Karthik" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Background/Alternate Photo (Revealed via Spotlight) */}
        <div 
          className="absolute inset-0 z-10 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            backgroundImage: `url(${img2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            WebkitMaskImage: `radial-gradient(circle 220px at ${spotlightPos.x}px ${spotlightPos.y}px, black 0%, transparent 70%)`,
            maskImage: `radial-gradient(circle 220px at ${spotlightPos.x}px ${spotlightPos.y}px, black 0%, transparent 70%)`
          }}
        />

        {/* Tech Accents */}
        <div className="absolute bottom-10 left-10 z-20 space-y-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-10 h-1 bg-emerald-500 shadow-[0_0_10px_#10b981]" />
          <div className="flex gap-1">
            <div className="w-1 h-1 rounded-full bg-emerald-500/40" />
            <div className="w-1 h-1 rounded-full bg-emerald-500/40" />
            <div className="w-1 h-1 rounded-full bg-emerald-500" />
          </div>
        </div>

        {/* Shine Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>
    </div>
  );
};

export default SpotlightReveal;
