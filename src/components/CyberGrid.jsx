import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';
import React, { useEffect } from 'react';

export default function CyberGrid() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) - 0.5;
      const y = (clientY / window.innerHeight) - 0.5;
      mouseX.set(x * 50);
      mouseY.set(y * 50);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Perspective Grid Container */}
      <motion.div 
        style={{ 
          y,
          x: springX,
          rotateX: 60,
          perspective: 1000
        }}
        className="absolute inset-0 origin-center"
      >
        <div 
          className="absolute inset-x-[-50%] inset-y-[-50%] w-[200%] h-[200%] bg-[linear-gradient(to_right,#10b98115_1px,transparent_1px),linear-gradient(to_bottom,#10b98115_1px,transparent_1px)] bg-[size:50px_50px]"
          style={{
            maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black, transparent 70%)',
          }}
        />
      </motion.div>

      {/* Interactive Flashlight Glow */}
      <motion.div 
        style={{
          left: useTransform(springX, (val) => `calc(50% + ${val * 2}px)`),
          top: useTransform(springY, (val) => `calc(30% + ${val * 2}px)`),
        }}
        className="absolute w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"
      />

      {/* Moving Highlights (Scanning Lines) */}
      <motion.div
        animate={{
          top: ['-10%', '110%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute left-0 right-0 h-[2px] bg-emerald-500/10 shadow-[0_0_20px_#10b981] z-10"
      />
    </div>
  );
}
