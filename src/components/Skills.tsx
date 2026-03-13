import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

const categoryColors: Record<string, string> = {
  "Backend & Cloud": "from-cyan-400/20 to-cyan-400/5 border-cyan-400/20 text-cyan-300",
  "Frontend": "from-violet-400/20 to-violet-400/5 border-violet-400/20 text-violet-300",
  "Tools & Practices": "from-emerald-400/20 to-emerald-400/5 border-emerald-400/20 text-emerald-300",
};

const badgeColors: Record<string, string> = {
  "Backend & Cloud": "bg-cyan-400/10 text-cyan-300 border-cyan-400/20 hover:bg-cyan-400/20",
  "Frontend": "bg-violet-400/10 text-violet-300 border-violet-400/20 hover:bg-violet-400/20",
  "Tools & Practices": "bg-emerald-400/10 text-emerald-300 border-emerald-400/20 hover:bg-emerald-400/20",
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14"
        >
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-3 block">
            Expertise
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
            Technical Skills
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-gradient-to-br ${categoryColors[category]} border rounded-2xl p-5 sm:p-6`}
            >
              <h3 className="font-bold text-white mb-4 text-base sm:text-lg">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs font-medium border rounded-full px-3 py-1 transition-colors cursor-default ${badgeColors[category]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
