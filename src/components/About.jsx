import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Sparkles, Code, Brain, Target } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Vidyalankar Polytechnic",
      subtitle: "Diploma in Information Technology",
      desc: "Gaining strong foundations in computer science, software engineering, databases, and Java programming."
    },
    {
      icon: Briefcase,
      title: "Kaevron Technologies",
      subtitle: "Marketing Lead Intern",
      desc: "Managed brand campaigns, content creation, social media growth, and collaborated on AI software initiatives."
    },
    {
      icon: Brain,
      title: "Tech + Creativity",
      subtitle: "Problem Solving",
      desc: "Combining frontend technical capabilities with creative brand strategy and prompt engineering to deliver real-world impact."
    }
  ];

  return (
    <section id="about" className="py-24 relative border-t border-[#262626]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-[#262626] text-xs text-[#A1A1AA] uppercase tracking-widest font-mono">
            <Sparkles className="w-3 h-3 text-white" />
            <span>01. About Me</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Combining Technology, Creativity & Strategy
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Story Narrative Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-[#111111] border border-[#262626] rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-white/20 transition-all duration-300 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.02] rounded-full blur-3xl pointer-events-none group-hover:bg-white/[0.04] transition-all" />
            
            <div className="space-y-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#161616] border border-[#262626] flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                Building impactful digital solutions through modern technology & clean design.
              </h3>

              <div className="space-y-4 text-[#A1A1AA] text-base leading-relaxed font-normal">
                <p>
                  I am a <strong className="text-white font-medium">Final Year Diploma student in Information Technology</strong> at Vidyalankar Polytechnic.
                </p>
                <p>
                  I worked as a <strong className="text-white font-medium">Marketing Lead Intern at Kaevron Technologies</strong> where I managed branding, social media content, marketing campaigns and collaborated on multiple AI-powered software projects.
                </p>
                <p>
                  I enjoy combining technology, creativity and problem-solving to build impactful digital solutions that deliver seamless user experiences and real business value.
                </p>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-[#262626] flex flex-wrap items-center gap-6 text-xs text-[#A1A1AA]">
              <div>
                <span className="block text-white font-semibold text-sm">Location</span>
                <span>Ambernath, Maharashtra</span>
              </div>
              <div className="h-8 w-px bg-[#262626]" />
              <div>
                <span className="block text-white font-semibold text-sm">Focus</span>
                <span>Frontend & AI Development</span>
              </div>
              <div className="h-8 w-px bg-[#262626]" />
              <div>
                <span className="block text-white font-semibold text-sm">Status</span>
                <span>Final Year Student</span>
              </div>
            </div>
          </motion.div>

          {/* Key Highlights Cards Stack */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            {highlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-[#111111] border border-[#262626] hover:border-white/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.06)] group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#161616] border border-[#262626] text-white group-hover:border-white/30 transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white group-hover:text-white/90">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#A1A1AA] font-mono mt-0.5">
                        {item.subtitle}
                      </p>
                      <p className="text-xs text-[#A1A1AA]/90 mt-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
