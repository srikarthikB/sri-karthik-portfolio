import { motion } from 'motion/react';
import { Download, GraduationCap, Code2, Cpu } from 'lucide-react';
import { SKILLS, EDUCATION } from '../constants';

export default function About() {
  return (
    <section id="about" className="bg-[#022c22] py-28 px-6 border-t border-emerald-500/10">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-20 flex-wrap gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-emerald-400 font-mono text-sm tracking-[0.3em] uppercase mb-4">Background</h2>
            <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter">About Me</h1>
          </motion.div>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(16, 185, 129, 0.4)", backgroundColor: "rgba(16, 185, 129, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/20 text-emerald-400 font-bold rounded-xl transition-all"
          >
            <Download size={20} /> Download Resume
          </motion.button>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group relative bg-[#011a14] p-10 md:p-12 rounded-[2.5rem] border border-emerald-500/10 hover:border-emerald-500/30 transition-all mb-20"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Code2 size={120} className="text-emerald-400" />
          </div>
          <p className="text-emerald-100/70 leading-relaxed text-xl relative z-10">
            I am a <span className="text-emerald-400 font-bold">Computer Science student</span> focused on backend development and data structures & algorithms. I enjoy designing clean architecture, building structured applications, and understanding how systems work behind the scenes.
            <br /><br />
            My goal is to become a strong <span className="text-emerald-400 font-bold">backend engineer</span> by mastering core fundamentals rather than relying only on frameworks. I believe in the power of logic and clean code to solve complex real-world problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-10">
              <GraduationCap className="text-emerald-400" size={28} />
              <h2 className="text-3xl font-bold text-white tracking-tight">Education</h2>
            </div>
            <div className="space-y-10 pl-2 relative border-l border-emerald-500/10">
              {EDUCATION.map((edu, i) => (
                <div key={i} className="relative pl-8 group">
                  <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981] group-hover:scale-125 transition-transform" />
                  <h3 className="text-xl font-bold text-emerald-50 leading-tight">{edu.degree}</h3>
                  <p className="text-emerald-400/80 mt-2 font-medium">{edu.institution}</p>
                  <p className="text-emerald-100/30 text-sm font-mono mt-2 uppercase tracking-widest">{edu.period}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-10">
              <Cpu className="text-emerald-400" size={28} />
              <h2 className="text-3xl font-bold text-white tracking-tight">Philosophy</h2>
            </div>
            <div className="bg-[#011a14] p-10 rounded-[2rem] border border-emerald-500/10">
              <h3 className="text-2xl font-bold text-emerald-400 mb-6">Backend & DSA Focus</h3>
              <p className="text-emerald-100/60 leading-relaxed text-lg">
                Strong backend systems are built on <span className="font-semibold text-emerald-100 italic">clear logic, efficient data handling, and clean architecture</span> — not just frameworks.
                <br /><br />
                My focus is mastering core data structures and algorithms to write systems that are functional, structured, and scalable from the ground up.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
