import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 flex justify-center ${
        scrolled
          ? "bg-[#030712]/90 backdrop-blur-md border-b border-white/5 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="w-full max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="font-mono text-sm font-semibold text-cyan-400 tracking-widest uppercase hover:text-cyan-300 transition-colors"
        >
          SS<span className="text-white/30">.</span>dev
        </a>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:sergiosorrosalgayan@gmail.com"
          className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 border border-cyan-400/40 px-4 py-1.5 rounded-full hover:bg-cyan-400/10 transition-all duration-200"
        >
          Hire me
        </a>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden text-slate-400 hover:text-white transition-colors p-1"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-16 inset-x-0 bg-[#030712]/97 backdrop-blur-md border-b border-white/5 overflow-hidden"
          >
            <ul className="flex flex-col px-4 pt-3 pb-4 gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 px-3 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-cyan-400/5 transition-colors font-medium text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-white/5 mt-1">
                <a
                  href="mailto:sergiosorrosalgayan@gmail.com"
                  onClick={() => setOpen(false)}
                  className="block py-2.5 px-3 rounded-lg text-cyan-400 font-semibold text-sm hover:bg-cyan-400/10 transition-colors"
                >
                  Hire me →
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
