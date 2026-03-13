import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import { certifications, education } from "../data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 sm:py-24 relative flex justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f172a]/40 to-transparent pointer-events-none" />
      <div className="w-full max-w-6xl px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-3 block">
            Credentials
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
            Certifications & Education
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <div className="w-8 h-8 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center shrink-0">
                <Award size={16} className="text-cyan-400" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">Certifications</h3>
            </div>
            <div className="space-y-2 sm:space-y-3">
              {certifications.map((cert, i) => (
                <motion.div
                  key={`${cert.name}-${i}`}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center justify-between bg-[#0f172a] border border-white/5 rounded-xl px-4 py-3 hover:border-cyan-400/20 transition-colors group"
                >
                  <div className="min-w-0 pr-2">
                    <p className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors leading-tight">
                      {cert.name}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">{cert.issuer}</p>
                  </div>
                  {cert.code && (
                    <span className="text-xs font-mono text-cyan-400 border border-cyan-400/30 bg-cyan-400/5 rounded-lg px-2 py-1 shrink-0">
                      {cert.code}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <div className="w-8 h-8 rounded-lg bg-violet-400/10 border border-violet-400/20 flex items-center justify-center shrink-0">
                <GraduationCap size={16} className="text-violet-400" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">Education</h3>
            </div>
            <div className="space-y-2 sm:space-y-3">
              {education.map((edu, i) => (
                <motion.div
                  key={`${edu.degree}-${i}`}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-[#0f172a] border border-white/5 rounded-xl px-4 py-4 hover:border-violet-400/20 transition-colors group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-violet-400 mt-2 shrink-0" />
                    <p className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors leading-relaxed">
                      {edu.degree}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
