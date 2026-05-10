import { motion } from 'motion/react';
import { Zap } from 'lucide-react';
import { SKILLS } from '../constants';

export default function Skills() {
  return (
    <section id="skills" className="bg-[#022c22] py-28 px-6 border-t border-emerald-500/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-emerald-400 font-mono text-sm tracking-[0.4em] uppercase mb-4">Expertise</h2>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8">Technical Arsenal</h1>
            <p className="text-emerald-100/40 max-w-xl mx-auto text-lg leading-relaxed">
              A comprehensive stack of languages, frameworks, and tools that I leverage to build robust backend systems.
            </p>
            <p className="text-emerald-100/40 max-w-xl mx-auto text-sm leading-relaxed">
              **Just hover over them if you can't see them clearly!😉**
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#011a14] border border-emerald-500/10 rounded-[3rem] p-12 md:p-16 relative overflow-hidden"
        >
          {/* Decorative Background Icon */}
          <div className="absolute -top-10 -right-10 opacity-[0.03] rotate-12">
            <Zap size={240} className="text-emerald-400" />
          </div>

          <div className="space-y-16 relative z-10">
            {Object.entries(SKILLS).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-100/20 mb-8 border-b border-emerald-500/5 pb-2 text-center md:text-left">{category}</h3>
                <div className="flex flex-wrap gap-10 md:gap-14 justify-center md:justify-start">
                  {items.map((item) => (
                    <motion.div 
                      key={item.name}
                      whileHover={{ y: -8, scale: 1.05 }}
                      className="flex flex-col items-center gap-3 group px-4"
                    >
                      <div className="p-5 rounded-3xl bg-[#022c22] border border-emerald-500/10 
                        group-hover:border-emerald-400/70 
                        group-hover:bg-emerald-500/10 
                        transition-all duration-500 
                        flex items-center justify-center 
                        shadow-[0_0_20px_rgba(16,185,129,0.08)] 
                        group-hover:shadow-[0_0_35px_rgba(16,185,129,0.45)]">

                          <i
                            className={`devicon-${item.icon} colored text-5xl 
                            grayscale opacity-50 
                            group-hover:grayscale-0 
                            group-hover:opacity-100 
                            group-hover:drop-shadow-[0_0_18px_rgba(16,185,129,0.95)] 
                            transition-all duration-500`}
                          ></i>
                        </div>
                      <span className="text-[10px] font-black text-emerald-100/30 uppercase tracking-[0.2em] 
                        group-hover:text-emerald-100 
                        group-hover:[text-shadow:0_0_12px_rgba(167,243,208,0.8)] 
                        transition-all duration-500">{item.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
