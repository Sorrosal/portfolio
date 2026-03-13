import { motion } from "framer-motion";
import { personal } from "../data/portfolio";

const stats = [
  { value: "6+", label: "Years of experience" },
  { value: "15+", label: "Microservices built" },
  { value: "7", label: "Developers mentored" },
  { value: "4", label: "Companies worked" },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Centered section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-3 block">
            About me
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
            Building scalable systems{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
              that make a difference
            </span>
          </h2>
        </motion.div>

        {/* Content: summary + stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start"
        >
          <div className="flex-1">
            <p className="text-slate-400 leading-relaxed text-base sm:text-lg text-center lg:text-left">
              {personal.summary}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full lg:w-auto lg:min-w-[300px] xl:min-w-[320px]">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-[#0f172a] border border-white/5 rounded-2xl p-4 sm:p-6 text-center hover:border-cyan-400/20 transition-colors"
              >
                <p className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 mb-1">
                  {stat.value}
                </p>
                <p className="text-xs text-slate-500 font-medium leading-tight">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
