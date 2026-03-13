import { motion } from "framer-motion";
import { MapPin, Mail, Linkedin, Github, ArrowDown } from "lucide-react";
import { personal } from "../data/portfolio";
import profilePhoto from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-80 md:h-80 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-28 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Photo — appears first on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative flex-shrink-0 order-first lg:order-last"
        >
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
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
              className="absolute -bottom-5 -right-4 sm:-right-6 bg-[#0f172a] border border-white/10 rounded-2xl px-3 py-2 sm:px-4 shadow-xl"
            >
              <p className="text-xs text-slate-400 font-mono">Experience</p>
              <p className="text-lg sm:text-xl font-black text-white">
                6+ <span className="text-cyan-400">years</span>
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Text */}
        <div className="flex-1 text-center lg:text-left min-w-0">
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
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-4"
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
            className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-300 mb-2"
          >
            {personal.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base text-slate-500 mb-8 font-mono"
          >
            {personal.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap justify-center lg:justify-start items-center gap-3 mb-8 text-sm text-slate-500"
          >
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-cyan-400 shrink-0" />
              {personal.location}
            </span>
            <span className="hidden sm:flex items-center gap-1.5 min-w-0">
              <Mail size={14} className="text-cyan-400 shrink-0" />
              <span className="truncate">{personal.email}</span>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap justify-center lg:justify-start gap-3"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/20 text-sm"
            >
              Get in touch
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 bg-white/5 text-sm"
            >
              View my work
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border border-white/10 hover:border-cyan-400/40 rounded-xl text-slate-400 hover:text-cyan-400 transition-all duration-200 bg-white/5"
            >
              <Linkedin size={17} />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border border-white/10 hover:border-cyan-400/40 rounded-xl text-slate-400 hover:text-cyan-400 transition-all duration-200 bg-white/5"
            >
              <Github size={17} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
}
