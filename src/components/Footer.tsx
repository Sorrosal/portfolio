import { Github, Linkedin, Mail } from "lucide-react";
import { personal } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-sm font-mono text-cyan-400 font-bold">SS.dev</p>
          <p className="text-xs text-slate-500 mt-0.5">
            Built with React + TypeScript + Tailwind CSS
          </p>
        </div>

        <p className="text-xs text-slate-600">
          © {new Date().getFullYear()} Sergio Sorrosal. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-cyan-400/30 transition-all"
          >
            <Linkedin size={15} />
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-cyan-400/30 transition-all"
          >
            <Github size={15} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-cyan-400/30 transition-all"
          >
            <Mail size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
