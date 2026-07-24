import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Creative Gallery', href: '#gallery' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-[#262626] py-3 shadow-2xl' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#111111] border border-[#262626] flex items-center justify-center font-bold text-white tracking-wider group-hover:border-white/40 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all">
              TP
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-white tracking-tight group-hover:text-white/90 text-sm sm:text-base">
                Tanu Pal
              </span>
              <span className="text-[10px] text-[#A1A1AA] uppercase tracking-widest">
                IT Student & Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#111111]/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#262626]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-medium text-[#A1A1AA] hover:text-white hover:bg-white/5 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#resume"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-[#111111] hover:bg-[#161616] border border-[#262626] hover:border-white/30 rounded-xl transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] group"
            >
              <FileText className="w-3.5 h-3.5 text-[#A1A1AA] group-hover:text-white transition-colors" />
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 text-[#A1A1AA] group-hover:text-white transition-colors" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#A1A1AA] hover:text-white bg-[#111111] border border-[#262626] rounded-xl focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#050505] border-b border-[#262626] px-4 pt-4 pb-6 mt-3 space-y-3"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-[#A1A1AA] hover:text-white hover:bg-[#111111] rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-[#262626]">
              <a
                href="#resume"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-white bg-[#111111] border border-[#262626] rounded-xl"
              >
                <FileText className="w-4 h-4 text-[#A1A1AA]" />
                <span>View & Download Resume</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
