import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, ExternalLink, Mail, Sparkles, Code2, Bot, Megaphone } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function Hero() {
  const roleTags = [
    { title: "Frontend Developer", icon: Code2 },
    { title: "AI Enthusiast", icon: Bot },
    { title: "Marketing Lead", icon: Megaphone }
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[90vh] flex items-center">
      
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-white/[0.015] rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#262626]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-[#A1A1AA] tracking-wide">
                Final Year IT Diploma Student • Open to Opportunities
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-2">
              <span className="text-lg md:text-xl font-medium text-[#A1A1AA] block tracking-wide">
                Hi, I'm
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
                Tanu Pal
              </h1>
            </div>

            {/* Subtitle */}
            <h2 className="text-lg sm:text-2xl font-semibold text-white/90 tracking-tight">
              Final Year Diploma Student in Information Technology
            </h2>

            {/* Role Tags */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              {roleTags.map((tag) => {
                const IconComponent = tag.icon;
                return (
                  <div 
                    key={tag.title}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#111111] border border-[#262626] text-xs font-medium text-white shadow-sm hover:border-white/30 transition-colors"
                  >
                    <IconComponent className="w-3.5 h-3.5 text-[#A1A1AA]" />
                    <span>• {tag.title}</span>
                  </div>
                );
              })}
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#A1A1AA] max-w-2xl leading-relaxed font-normal">
              Passionate about building intelligent web applications, exploring Artificial Intelligence, and creating modern digital experiences through clean design and innovative technology.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
              
              {/* Button 1: View Projects */}
              <MagneticButton href="#projects">
                <div className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:shadow-[0_0_35px_rgba(255,255,255,0.35)] group">
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
                </div>
              </MagneticButton>

              {/* Button 2: Open Resume */}
              <MagneticButton href="/assets/tanu-resume.pdf" target="_blank">
                <div className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-[#111111] hover:bg-[#161616] text-white border border-[#262626] hover:border-white/40 font-medium text-sm transition-all group">
                  <ExternalLink className="w-4 h-4 text-[#A1A1AA] group-hover:text-white transition-colors" />
                  <span>Open Resume</span>
                </div>
              </MagneticButton>

              {/* Button 3: Download Resume */}
              <MagneticButton href="/assets/tanu-resume.pdf" download="Tanu_Pal_Resume.pdf">
                <div className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-[#111111] hover:bg-[#161616] text-white border border-[#262626] hover:border-white/40 font-medium text-sm transition-all group">
                  <Download className="w-4 h-4 text-[#A1A1AA] group-hover:text-white transition-colors" />
                  <span>Download Resume</span>
                </div>
              </MagneticButton>

              {/* Button 4: Contact Me */}
              <MagneticButton href="#contact">
                <div className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-[#111111] hover:bg-[#161616] text-white border border-[#262626] hover:border-white/40 font-medium text-sm transition-all group">
                  <Mail className="w-4 h-4 text-[#A1A1AA] group-hover:text-white transition-colors" />
                  <span>Contact Me</span>
                </div>
              </MagneticButton>

            </div>

          </motion.div>

          {/* Right Column: Professional Photo Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group w-full max-w-md">
              
              {/* Outer Glow frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-white/20 via-white/5 to-white/20 rounded-[32px] blur-xl opacity-40 group-hover:opacity-75 transition duration-700" />

              {/* Photo Container Card */}
              <div className="relative rounded-[28px] bg-[#111111] border border-[#262626] p-3 shadow-2xl overflow-hidden group-hover:border-white/30 transition-all duration-300">
                <div className="relative overflow-hidden rounded-[20px] aspect-[4/5] bg-[#050505]">
                  <img
                    src="/assets/tanu-photo.jpeg"
                    alt="Tanu Pal"
                    className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                    onError={(e) => {
                      // Fallback placeholder if missing
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Overlay Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#111111]/90 backdrop-blur-md border border-[#262626] flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-semibold text-white">Tanu Pal</h4>
                      <p className="text-xs text-[#A1A1AA]">Information Technology • Vidyalankar</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#161616] border border-[#262626] flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
