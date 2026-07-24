import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, GraduationCap, CheckCircle2, ArrowDown } from 'lucide-react';

export default function Education() {
  const steps = [
    {
      title: "SSC (Secondary School Certificate)",
      institution: "State Board",
      status: "Completed",
      period: "Completed with Distinction",
      desc: "Built early analytical skills, mathematical foundations, and interest in technology."
    },
    {
      title: "Vidyalankar Polytechnic",
      institution: "Mumbai, Maharashtra",
      status: "Premier Institute",
      period: "2023 - Present",
      desc: "Admitted into Vidyalankar Polytechnic, renowned for technical excellence and practical engineering education."
    },
    {
      title: "Diploma in Information Technology",
      institution: "Vidyalankar Polytechnic",
      status: "Specialization",
      period: "Core IT Curriculum",
      desc: "Comprehensive coursework in Java Programming, Relational Databases (SQL), Web Development, Operating Systems, and Cyber Security."
    },
    {
      title: "Final Year Student",
      institution: "Vidyalankar Polytechnic",
      status: "Current Status",
      period: "Final Semester",
      desc: "Focusing on AI-driven capstone projects, full-stack web applications, and industry internship experience."
    }
  ];

  return (
    <section id="education" className="py-24 relative border-t border-[#262626]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-[#262626] text-xs text-[#A1A1AA] uppercase tracking-widest font-mono">
            <GraduationCap className="w-3 h-3 text-white" />
            <span>02. Academic Pathway</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education & Learning Journey
          </h2>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#262626] via-white/20 to-[#262626] -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12 relative">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-8`}
                >
                  {/* Timeline Card */}
                  <div className="w-full sm:w-1/2">
                    <div className="bg-[#111111] border border-[#262626] hover:border-white/30 rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.06)] group">
                      
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="px-2.5 py-1 rounded-md bg-[#161616] border border-[#262626] text-[11px] font-mono text-white">
                          {step.status}
                        </span>
                        <span className="text-xs font-mono text-[#A1A1AA]">
                          {step.period}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white group-hover:text-white/90 transition-colors">
                        {step.title}
                      </h3>

                      <p className="text-xs font-medium text-[#A1A1AA] mb-3">
                        {step.institution}
                      </p>

                      <p className="text-xs sm:text-sm text-[#A1A1AA]/90 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center Node Badge */}
                  <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#111111] border border-white/30 text-white font-mono text-xs shadow-[0_0_15px_rgba(255,255,255,0.1)] shrink-0">
                    {idx + 1}
                  </div>

                  {/* Spacer for desktop symmetry */}
                  <div className="w-full sm:w-1/2 hidden sm:block" />
                </motion.div>
              );
            })}
          </div>

          {/* Timeline Down Arrow indicator */}
          <div className="flex justify-center mt-12">
            <div className="w-8 h-8 rounded-full bg-[#111111] border border-[#262626] flex items-center justify-center text-[#A1A1AA] animate-bounce">
              <ArrowDown className="w-4 h-4" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
