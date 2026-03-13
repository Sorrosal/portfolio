import { motion } from "framer-motion";
import { MapPin, Mail, Linkedin, Github, ArrowDown } from "lucide-react";
import { personal } from "../data/portfolio";
import profilePhoto from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-16">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 border border-cyan-400/30 rounded-full px-4 py-1.5 mb-6 bg-cyan-400/5"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Available for new projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-4"
          >
            {personal.name.split(" ")[0]}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
              {personal.name.split(" ")[1]}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl lg:text-2xl font-semibold text-slate-300 mb-2"
          >
            {personal.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base text-slate-500 mb-8 font-mono"
          >
            {personal.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mb-10 text-sm text-slate-500"
          >
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-cyan-400" />
              {personal.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={14} className="text-cyan-400" />
              {personal.email}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/20"
            >
              Get in touch
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 bg-white/5"
            >
              View my work
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 border border-white/10 hover:border-cyan-400/40 rounded-xl text-slate-400 hover:text-cyan-400 transition-all duration-200 bg-white/5"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 border border-white/10 hover:border-cyan-400/40 rounded-xl text-slate-400 hover:text-cyan-400 transition-all duration-200 bg-white/5"
            >
              <Github size={18} />
            </a>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative flex-shrink-0"
        >
          <div className="relative w-64 h-64 lg:w-80 lg:h-80">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/30 to-violet-400/30 blur-2xl" />
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={profilePhoto}
                alt={personal.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 bg-[#0f172a] border border-white/10 rounded-2xl px-4 py-2 shadow-xl"
            >
              <p className="text-xs text-slate-400 font-mono">Experience</p>
              <p className="text-xl font-black text-white">6+ <span className="text-cyan-400">years</span></p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
}
