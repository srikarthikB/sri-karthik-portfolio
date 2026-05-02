import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Home, User, Zap, Briefcase, Mail } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: <Home size={18} /> },
    { name: 'Skills', href: '#skills', icon: <Zap size={18} /> },
    { name: 'About', href: '#about', icon: <User size={18} /> },
    { name: 'Projects', href: '#projects', icon: <Briefcase size={18} /> },
    { name: 'Contact', href: '#contact', icon: <Mail size={18} /> },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navClasses = isMobile
    ? scrolled
      ? "bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-fit px-4 py-2 rounded-2xl flex-row"
      : "top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-fit px-6 py-3 rounded-full flex-row"
    : scrolled
      ? "left-6 top-1/2 -translate-y-1/2 w-20 flex-col py-10 rounded-3xl"
      : "left-1/2 top-6 -translate-x-1/2 w-[90%] max-w-fit px-10 py-4 rounded-full flex-row";

  return (
    <motion.nav 
      layout
      transition={{ duration: 0.3 }}
      className={`fixed z-50 transition-all ${navClasses} flex items-center justify-between gap-3 md:gap-8 bg-emerald-950/10 backdrop-blur-[32px] border border-white/[0.08] shadow-[0_30px_60px_rgba(0,0,0,0.4)] hover:border-emerald-500/20 transition-colors group/nav`}
    >
      {/* Brand */}
      <motion.a 
        layout
        href="#home" 
        onClick={(e) => handleNavClick(e, '#home')}
        className={`text-white font-black tracking-tighter transition-all duration-150 ${
          isMobile && scrolled ? "hidden" : "block"
        } ${!isMobile && scrolled ? "text-xl" : "text-xl md:text-2xl"}`}
      >
        {!isMobile && scrolled ? (
          <div className="flex flex-col items-center">
            <span className="scale-110">S</span>
            <span className="text-emerald-500 scale-110">K</span>
          </div>
        ) : (
          <div className="hover:scale-105 transition-transform flex items-center">
            SRI <span className="text-emerald-500 ml-1">{isMobile ? "K" : "KARTHIK"}</span>
          </div>
        )}
      </motion.a>

      {/* Links */}
      <motion.div 
        layout
        className={`flex ${!isMobile && scrolled ? "flex-col gap-6" : "gap-2 md:gap-8"}`}
      >
        {navLinks.map((link) => (
          <motion.a
            layout
            key={link.name}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            whileHover={{ 
              scale: isMobile ? 1.1 : 1.4,
              backgroundColor: "rgba(16, 185, 129, 0.15)",
              boxShadow: "0 0 30px rgba(16, 185, 129, 0.5)",
              borderColor: "rgba(16, 185, 129, 0.3)"
            }}
            className="group relative w-9 h-9 md:w-11 md:h-11 flex items-center justify-center rounded-xl md:rounded-2xl text-emerald-100/40 transition-all duration-150 ease-in-out hover:text-white border border-transparent"
          >
            {link.icon}
            
            {/* Tooltip */}
            {!isMobile && (
              <span className={`absolute ${!isMobile && scrolled ? "left-full ml-6" : "top-full mt-6"} px-3 py-1.5 bg-[#011a14]/90 backdrop-blur-md border border-emerald-500/20 text-[10px] font-black uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 whitespace-nowrap pointer-events-none shadow-2xl`}>
                {link.name}
              </span>
            )}
          </motion.a>
        ))}
      </motion.div>

      {/* Decorative pulse */}
      <div className={isMobile && scrolled ? "hidden" : "block"}>
        {!isMobile && scrolled ? (
          <motion.div 
            animate={{ opacity: [0.1, 0.4, 0.1], scaleY: [0.8, 1.1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1.5px] h-8 bg-gradient-to-b from-transparent via-emerald-500 to-transparent"
          />
        ) : (
          <div className="w-[1px] h-3 bg-white/5" />
        )}
      </div>
    </motion.nav>
  );
}