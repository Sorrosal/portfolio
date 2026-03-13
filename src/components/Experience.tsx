import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 relative flex justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f172a]/30 to-transparent pointer-events-none" />
      <div className="w-full max-w-6xl px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-3 block">
            Career
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
            Work Experience
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-5 sm:space-y-6">
          {experience.map((job, i) => (
            <motion.div
              key={`${job.company}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="bg-[#0f172a] border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-cyan-400/15 transition-all duration-300 group">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {job.role}
                      </h3>
                      {job.current && (
                        <span className="text-xs font-mono text-cyan-400 border border-cyan-400/30 bg-cyan-400/5 rounded-full px-2.5 py-0.5 shrink-0">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-cyan-400 font-semibold text-base">{job.company}</p>
                  </div>
                  <div className="flex sm:flex-col sm:items-end gap-x-5 gap-y-1 text-xs text-slate-500 shrink-0">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} className="shrink-0" />
                      {job.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} className="shrink-0" />
                      {job.location}
                    </span>
                  </div>
                </div>
                {/* Bullet points */}
                <ul className="space-y-2.5">
                  {job.description.map((item, j) => (
                    <li key={j} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                      <span className="text-cyan-400 mt-1 shrink-0">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
