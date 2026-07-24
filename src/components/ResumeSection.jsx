import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink, Download, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function ResumeSection() {
  const resumeHighlights = [
    "Final Year IT Diploma Student at Vidyalankar Polytechnic",
    "Marketing Lead Intern at Kaevron Technologies",
    "Proficient in React, Tailwind CSS, JavaScript, SQL, Java & Prompt Engineering",
    "Hands-on AI software capstone product experience",
    "Proven track record in social media branding & creative direction"
  ];

  return (
    <section id="resume" className="py-24 relative border-t border-[#262626]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-[#262626] text-xs text-[#A1A1AA] uppercase tracking-widest font-mono">
            <FileText className="w-3 h-3 text-white" />
            <span>08. Official Resume</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Curriculum Vitae & Resume
          </h2>
          <p className="text-base text-[#A1A1AA] max-w-2xl">
            Review my official academic credentials, technical skills, internship experiences, and project portfolio.
          </p>
        </div>

        {/* Main Resume Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#111111] border border-[#262626] rounded-3xl p-6 sm:p-10 hover:border-white/20 transition-all duration-300 shadow-2xl relative overflow-hidden group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          
          {/* Left Column: Info & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#161616] border border-[#262626] flex items-center justify-center text-white">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Tanu Pal Resume
                </h3>
                <p className="text-xs font-mono text-[#A1A1AA]">
                  Updated 2026 • Information Technology
                </p>
              </div>
            </div>

            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              Comprehensive resume outlining technical proficiencies in frontend web development, AI integration, marketing campaign leadership, and academic coursework.
            </p>

            {/* Highlights list */}
            <div className="space-y-2.5">
              {resumeHighlights.map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
              
              <MagneticButton href="/assets/tanu-resume.pdf" target="_blank">
                <div className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)]">
                  <span>Open Resume</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </MagneticButton>

              <MagneticButton href="/assets/tanu-resume.pdf" download="Tanu_Pal_Resume.pdf">
                <div className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#161616] hover:bg-[#202020] text-white border border-[#262626] hover:border-white/40 font-medium text-sm transition-all">
                  <Download className="w-4 h-4 text-[#A1A1AA]" />
                  <span>Download PDF</span>
                </div>
              </MagneticButton>

            </div>
          </div>

          {/* Right Column: Embedded PDF Viewer Frame */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#262626] bg-[#050505] shadow-2xl h-[420px] group/frame">
              
              <object
                data="/assets/tanu-resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
                type="application/pdf"
                className="w-full h-full"
              >
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center space-y-4">
                  <FileText className="w-12 h-12 text-[#A1A1AA]" />
                  <p className="text-sm text-[#A1A1AA]">
                    Preview loading or PDF viewer available directly.
                  </p>
                  <a
                    href="/assets/tanu-resume.pdf"
                    target="_blank"
                    className="px-4 py-2 rounded-xl bg-white text-black text-xs font-semibold"
                  >
                    Click to Open Resume PDF
                  </a>
                </div>
              </object>

              {/* Bottom Quick Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-[#111111]/90 backdrop-blur-md border-t border-[#262626] flex items-center justify-between">
                <span className="text-xs font-mono text-[#A1A1AA] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Tanu Pal Resume.pdf</span>
                </span>
                <a
                  href="/assets/tanu-resume.pdf"
                  target="_blank"
                  className="text-xs font-semibold text-white hover:underline flex items-center gap-1"
                >
                  <span>Fullscreen</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
