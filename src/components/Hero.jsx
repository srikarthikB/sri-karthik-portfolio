import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import SpotlightReveal from "./SpotlightReveal";
import CyberGrid from "./CyberGrid";

export default function Hero() {
  const stats = [
    { label: "DSA Problems Solved", value: "150+" },
    { label: "Backend Projects", value: "3+" },
    { label: "Live Deployed Apps", value: "2" },
    { label: "Focused Development", value: "Backend" },
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-[#022c22]">
      <CyberGrid />
      {/* HERO MAIN */}
      <div className="min-h-screen text-white flex items-center px-6 lg:px-16 relative z-10">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

          {/* LEFT SIDE: Text Content */}
          <div className="space-y-10 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-6">
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 0.9, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-emerald-400 font-mono text-sm tracking-[0.3em] uppercase"
              >
                Backend Architecture & Engineering
              </motion.p>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl md:text-[88px] font-black tracking-tighter leading-[0.95] md:leading-[0.9]"
              >
                B Sri <span className="text-emerald-400">Karthik</span>
              </motion.h1>

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="pt-2 space-y-2"
              >
                <p className="text-emerald-100/60 text-lg md:text-xl font-medium italic">
                  “I don’t just build APIs — I design systems that hold up under pressure.”
                </p>
              </motion.div>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-emerald-100/70 text-xl max-w-xl leading-relaxed mx-auto lg:mx-0"
            >
              From structuring backend logic to optimizing data flow, I focus on writing code that’s fast, reliable, and actually makes sense.<br/>Good systems aren’t just functional — they’re intentional.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-4"
            >
              <motion.a 
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                href="#projects" 
                className="px-8 py-4 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20 text-emerald-400 font-bold rounded-xl hover:bg-emerald-500 hover:text-white transition-all flex items-center gap-3"
              >
                Explore My Work
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-emerald-100 font-bold rounded-xl transition-all"
              >
                Contact Me
              </motion.a>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Visual Content */}
          <div className="relative flex justify-center items-center order-1 lg:order-2">
            {/* Decorative backdrop glow */}
            <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="w-full max-w-[440px] md:max-w-[480px] lg:scale-110 lg:pl-10"
            >
              <SpotlightReveal />
            </motion.div>
          </div>

        </div>
      </div>

      {/* STATS SECTION */}
      <div className="bg-[#011a14] border-y border-emerald-500/10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-6 rounded-2xl hover:bg-emerald-500/5 transition-colors"
              >
                <h3 className="text-4xl font-black text-white group-hover:text-emerald-400 transition-colors">
                  {stat.value}
                </h3>
                <p className="text-emerald-500/50 mt-3 text-xs font-bold uppercase tracking-widest leading-none">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CURRENTLY EXPLORING SECTION */}
      <div className="bg-[#022c22] py-24 px-6 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Currently Exploring
            </h2>
            <p className="text-emerald-100/40 mb-12 text-lg">
              Things I'm actively learning and building with
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {["Advanced Flask Architecture", "REST API Design Principles", "Database Optimization & Scaling"].map((item, i) => (
              <motion.span 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + (i * 0.1) }}
                className="px-6 py-3 bg-emerald-900/20 text-emerald-300 rounded-2xl text-sm font-bold border border-emerald-500/10 hover:border-emerald-500/30 transition-all cursor-default"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
