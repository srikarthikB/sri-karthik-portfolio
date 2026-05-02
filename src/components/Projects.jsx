import { motion } from 'motion/react';
import { ExternalLink, Github, CheckCircle2, Star, LayoutGrid } from 'lucide-react';
import { PROJECTS } from '../constants';

export default function Projects() {
  const featured = PROJECTS.find(p => p.featured) || PROJECTS[0];
  const regular = PROJECTS.filter(p => !p.featured);

  return (
    <section id="projects" className="bg-[#022c22] py-28 px-6 border-t border-emerald-500/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-emerald-400 font-mono text-sm tracking-[0.3em] uppercase mb-4">Portfolio</h2>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8">Selected Works</h1>
            <p className="text-emerald-100/40 max-w-xl mx-auto text-lg leading-relaxed">
              Backend-focused projects demonstrating structured architecture, clean routing, and real-world deployment.
            </p>
          </motion.div>
        </div>

        <div className="space-y-24">
          {/* Featured Hero Project */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group lg:grid lg:grid-cols-2 gap-12 items-center bg-[#011a14] p-8 md:p-12 rounded-[3.5rem] border border-emerald-500/10 hover:border-emerald-500/30 transition-all shadow-2xl"
          >
            <div className="absolute -top-4 left-10">
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-600 text-white text-xs font-black uppercase tracking-[0.2em] rounded-full shadow-lg">
                <Star size={14} fill="currentColor" /> Featured Engineering
              </span>
            </div>

            <div className="rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl aspect-video mb-10 lg:mb-0">
              <img src={featured.ss} alt={featured.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none">{featured.name}</h2>
                <div className="flex gap-3">
                  <motion.a 
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(16, 185, 129, 0.2)", boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    href={featured.live} 
                    target="_blank" 
                    className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 backdrop-blur-md text-emerald-400 border border-emerald-500/20 rounded-xl text-xs font-bold transition-all uppercase tracking-widest"
                  >
                    Live Demo <ExternalLink size={14} />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                    whileTap={{ scale: 0.95 }}
                    href={featured.github} 
                    target="_blank" 
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md text-white/60 border border-white/10 rounded-xl text-xs font-bold transition-all uppercase tracking-widest"
                  >
                    Source <Github size={14} />
                  </motion.a>
                </div>
              </div>

              <p className="text-emerald-100/60 text-lg leading-relaxed">{featured.description}</p>

              <div className="grid sm:grid-cols-2 gap-4">
                {featured.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-emerald-500 mt-1 shrink-0" />
                    <span className="text-emerald-100/40 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Regular Projects Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {regular.map((project, i) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-[#011a14] border border-emerald-500/10 p-8 rounded-[2.5rem] hover:border-emerald-500/40 transition-all group flex flex-col h-full"
              >
                <div className="rounded-2xl overflow-hidden border border-white/5 mb-8 aspect-video">
                  <img src={project.ss} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>

                <div className="flex flex-col flex-grow space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-black text-white tracking-tight leading-none group-hover:text-emerald-400 transition-colors">{project.name}</h2>
                    <div className="flex gap-2">
                       <a href={project.live} target="_blank" className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/10 rounded-lg text-[10px] uppercase font-black tracking-widest hover:bg-emerald-500 hover:text-white transition-all">Live</a>
                       <a href={project.github} target="_blank" className="px-3 py-1 bg-white/5 text-white/40 border border-white/10 rounded-lg text-[10px] uppercase font-black tracking-widest hover:bg-white hover:text-black transition-all">GitHub</a>
                    </div>
                  </div>

                  <p className="text-emerald-100/40 text-sm leading-relaxed flex-grow">{project.description}</p>

                  <div className="space-y-2 pt-4 border-t border-emerald-500/5">
                    {project.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-emerald-100/30 font-bold uppercase tracking-wide">
                        <CheckCircle2 size={12} className="text-emerald-500" /> {h}
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <motion.a 
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(16, 185, 129, 0.2)", boxShadow: "0 0 15px rgba(16, 185, 129, 0.2)" }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github} 
                      className="flex-1 text-center py-3 bg-emerald-900/40 text-emerald-100 rounded-xl text-xs font-black uppercase tracking-widest transition-all border border-emerald-500/10 backdrop-blur-md"
                    >
                      Repository
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live} 
                      className="flex-1 text-center py-3 bg-white/5 text-white/50 rounded-xl text-xs font-black uppercase tracking-widest transition-all border border-white/5 backdrop-blur-md"
                    >
                      Live App
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
