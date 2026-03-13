import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin } from "lucide-react";
import { personal } from "../data/portfolio";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/sergiosorrosal",
    href: personal.linkedin,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personal.location,
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 flex justify-center">
      <div className="w-full max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-3 block">
            Get in touch
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4">
            Let's work together
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            I'm open to new opportunities, collaborations and interesting projects.
            Don't hesitate to reach out.
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-6 sm:gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
            {contactItems.map((item, i) => {
              const Icon = item.icon;
              const content = (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-[#0f172a] border border-white/5 rounded-2xl px-5 py-5 hover:border-cyan-400/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex flex-col items-center gap-3 text-center">
                    <div className="w-11 h-11 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                      <Icon size={18} className="text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium mb-0.5">{item.label}</p>
                      <p className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors break-all sm:break-normal">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 text-white font-bold px-10 py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-cyan-500/20 text-base"
            >
              <Mail size={18} />
              Send me an email
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
