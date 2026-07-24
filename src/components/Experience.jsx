import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle, Sparkles, Building2, Calendar, Target, Layers } from 'lucide-react';

export default function Experience() {
  const responsibilities = [
    { title: "Social Media Marketing", desc: "Executed digital growth strategies across multiple channels to elevate company presence." },
    { title: "Branding & Visual Identity", desc: "Crafted brand identity, visual guidelines, and consistent creative assets for Kaevron products." },
    { title: "Content Planning & Campaigns", desc: "Planned end-to-end content calendars, campaign briefs, and engaging technical posts." },
    { title: "Created Professional Creatives", desc: "Designed 30+ high-converting social media carousels and visual assets using Canva and Figma." },
    { title: "Developer Collaboration", desc: "Collaborated directly with engineering teams to translate product features into compelling user messaging." },
    { title: "AI-Powered Software Products", desc: "Worked hands-on with AI software products, testing prompt strategies and product marketing flows." }
  ];

  return (
    <section id="experience" className="py-24 relative border-t border-[#262626]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-[#262626] text-xs text-[#A1A1AA] uppercase tracking-widest font-mono">
            <Briefcase className="w-3 h-3 text-white" />
            <span>03. Industry Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Professional Internship & Impact
          </h2>
        </div>

        {/* Experience Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#111111] border border-[#262626] rounded-3xl p-8 sm:p-12 hover:border-white/20 transition-all duration-300 shadow-2xl relative overflow-hidden group"
        >
          {/* Top Info Banner */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 mb-8 border-b border-[#262626]">
            
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#161616] border border-[#262626] flex items-center justify-center text-white shrink-0 group-hover:border-white/30 transition-colors">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Marketing Lead Intern
                  </h3>
                  <span className="px-3 py-0.5 rounded-full bg-white/10 text-white text-xs font-mono border border-white/20">
                    Internship
                  </span>
                </div>
                <p className="text-base font-medium text-white/90 mt-1 flex items-center gap-2">
                  <span>Kaevron Technologies</span>
                  <span className="text-[#A1A1AA]">• AI Software Company</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#A1A1AA] bg-[#161616] px-4 py-2 rounded-xl border border-[#262626] self-start md:self-auto">
              <Calendar className="w-4 h-4 text-white" />
              <span>Role: Marketing Lead</span>
            </div>

          </div>

          {/* Responsibilities Grid */}
          <div className="space-y-4">
            <h4 className="text-sm font-mono text-[#A1A1AA] uppercase tracking-wider mb-6 flex items-center gap-2">
              <Target className="w-4 h-4 text-white" />
              <span>Core Responsibilities & Achievements</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {responsibilities.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-[#161616] border border-[#262626] hover:border-white/30 rounded-2xl p-5 transition-all duration-300 group/card"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-white shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-sm font-semibold text-white group-hover/card:text-white/90">
                        {item.title}
                      </h5>
                      <p className="text-xs text-[#A1A1AA] mt-1.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Kaevron Badge Summary */}
          <div className="mt-10 p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-white shrink-0" />
              <p className="text-xs sm:text-sm text-[#A1A1AA]">
                Collaborated directly on AI software products and created over <strong className="text-white">30+ social media carousels and creatives</strong>.
              </p>
            </div>
            <a
              href="#gallery"
              className="px-4 py-2 text-xs font-semibold text-white bg-[#161616] hover:bg-[#202020] border border-[#262626] hover:border-white/30 rounded-xl transition-all whitespace-nowrap"
            >
              View Creative Gallery →
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
