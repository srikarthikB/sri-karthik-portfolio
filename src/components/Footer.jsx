import { Github, Linkedin, Instagram, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-20 px-6 bg-[#011a14] border-t border-emerald-500/10 text-white overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
        <div className="text-center md:text-left space-y-4">
          <h3 className="text-3xl font-black tracking-tighter">
            SRI <span className="text-emerald-500">KARTHIK</span>
          </h3>
          <p className="text-emerald-100/30 text-sm font-medium max-w-xs leading-relaxed uppercase tracking-widest">
            Building the backbone of modern web applications with structured logic & clean code.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-4">
            {[
              { icon: Github, href: "https://github.com/srikarthikB" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/sri-karthik-b-060106324/" },
              { icon: Instagram, href: "https://instagram.com/karthik__616" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#022c22] border border-emerald-500/5 text-emerald-100/40 hover:text-emerald-400 hover:border-emerald-500/40 transition-all group"
              >
                <social.icon size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-[10px] font-black text-emerald-500/40 uppercase tracking-[0.4em]">
              © {currentYear} • Engineered by Sri Karthik
            </p>
          </div>
        </div>
      </div>

      {/* Background Decorative Text */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[15vw] font-black text-emerald-500/[0.02] whitespace-nowrap select-none pointer-events-none tracking-tighter">
        SRI KARTHIK 2026
      </div>
    </footer>
  );
}
