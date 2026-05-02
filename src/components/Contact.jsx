import { motion } from 'motion/react';
import { Github, Linkedin, Instagram, Phone, Send, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState(null);

  const socials = [
    { icon: Github, href: "https://github.com/srikarthikB", hoverColor: "hover:text-gray-300", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sri-karthik-b-060106324/", hoverColor: "hover:text-[#0A66C2]", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/karthik__616", hoverColor: "hover:text-pink-400", label: "Instagram" },
    { icon: Phone, href: "tel:+916309121289", hoverColor: "hover:text-emerald-400", label: "Phone" },
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_bpl9g3h",
      "template_zsef6xq",   
      formRef.current,
      "7WZHByvKqpiuynMAJ"      
    )
    .then(() => {
      setStatus("success");
      formRef.current.reset();

      setTimeout(() => setStatus(null), 3000);
    })
    .catch(() => {
      setStatus("error");

      setTimeout(() => setStatus(null), 3000);
    });
  };

  return (
    <section id="contact" className="bg-[#022c22] py-32 px-6 border-t border-emerald-500/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-emerald-400 font-mono text-sm tracking-[0.4em] uppercase mb-4">Connection</h2>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">Get In Touch</h1>
            <p className="text-emerald-100/40 text-lg max-w-xl mx-auto">
              Whether you have an opportunity, a question, or just want to connect — feel free to reach out.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 bg-[#011a14] rounded-[3.5rem] border border-emerald-500/10 overflow-hidden shadow-2xl">
          
          {/* FORM */}
          <div className="lg:col-span-3 p-10 md:p-16">
            <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
              <MessageSquare className="text-emerald-500" /> Send a Message
            </h3>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="block text-emerald-100/30 text-[10px] font-black uppercase tracking-widest">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-[#022c22] border border-emerald-500/10 rounded-2xl p-4 text-emerald-50 outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all placeholder:text-emerald-900"
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-emerald-100/30 text-[10px] font-black uppercase tracking-widest">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-[#022c22] border border-emerald-500/10 rounded-2xl p-4 text-emerald-50 outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all placeholder:text-emerald-900"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-emerald-100/30 text-[10px] font-black uppercase tracking-widest">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Let's build something together..."
                  className="w-full bg-[#022c22] border border-emerald-500/10 rounded-2xl p-4 text-emerald-50 outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all placeholder:text-emerald-900 resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(16, 185, 129, 0.8)",
                  boxShadow: "0 0 30px rgba(16, 185, 129, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-5 bg-emerald-600/80 backdrop-blur-md text-white rounded-2xl transition-all border border-emerald-500/20 font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3"
              >
                Dispatch Message <Send size={18} />
              </motion.button>
            </form>
          </div>

          {/* SOCIALS */}
          <div className="lg:col-span-2 bg-[#022c22] p-10 md:p-16 flex flex-col justify-between items-center text-center border-l border-emerald-500/10">
            <div className="space-y-6">
              <h3 className="text-3xl font-black text-white tracking-tight">Direct Channels</h3>
              <p className="text-emerald-100/30 text-sm font-medium">
                Prefer a direct line? Pick your preferred mode of contact.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 w-full max-w-xs">
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -5, scale: 1.1 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center gap-3 p-6 bg-[#011a14] rounded-[2rem] border border-emerald-500/5 transition-all text-emerald-100/20 ${social.hoverColor} group`}
                >
                  <social.icon size={32} strokeWidth={1.5} />
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>

            <div className="pt-8 border-t border-emerald-500/5 w-full">
              <p className="text-[10px] font-mono text-emerald-500/40 uppercase tracking-[0.2em]">
                Based in • India
              </p>
            </div>
          </div>
        </div>
      </div>
      {status && (
        <div className={`fixed bottom-6 right-6 px-6 py-4 rounded-xl shadow-lg text-white font-semibold transition-all duration-300
          ${status === "success" ? "bg-emerald-600" : "bg-red-500"}`}>
          
          {status === "success" 
            ? "Message sent successfully 🚀" 
            : "Something went wrong 😢"}
        </div>
      )}
    </section>
  );
}