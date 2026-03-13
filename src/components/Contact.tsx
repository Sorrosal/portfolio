import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, MapPin } from "lucide-react";
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
    icon: Phone,
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\s/g, "")}`,
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

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {contactItems.map((item, i) => {
              const Icon = item.icon;
              const content = (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-[#0f172a] border border-white/5 rounded-2xl p-4 sm:p-5 hover:border-cyan-400/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center shrink-0 group-hover:bg-cyan-400/20 transition-colors">
                      <Icon size={16} className="text-cyan-400" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-slate-500 font-medium mb-0.5">{item.label}</p>
                      <p className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors truncate">
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
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 sm:mt-8 text-center"
          >
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-cyan-500/20 text-sm sm:text-base"
            >
              <Mail size={17} />
              Send me an email
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
