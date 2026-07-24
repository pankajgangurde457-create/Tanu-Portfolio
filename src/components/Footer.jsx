import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-[#262626] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#111111] border border-[#262626] flex items-center justify-center font-bold text-white text-xs">
              TP
            </div>
            <div>
              <p className="text-xs text-[#A1A1AA] tracking-wide">
                Designed & Developed by <strong className="text-white font-semibold">Tanu Pal</strong> © {currentYear}
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/tanu-pal-808036361"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-[#111111] hover:bg-[#161616] border border-[#262626] text-[#A1A1AA] hover:text-white transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/tanupal15"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-[#111111] hover:bg-[#161616] border border-[#262626] text-[#A1A1AA] hover:text-white transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="mailto:tanup200860@gmail.com"
              className="p-2 rounded-xl bg-[#111111] hover:bg-[#161616] border border-[#262626] text-[#A1A1AA] hover:text-white transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-[#111111] hover:bg-[#161616] border border-[#262626] text-[#A1A1AA] hover:text-white transition-colors ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
