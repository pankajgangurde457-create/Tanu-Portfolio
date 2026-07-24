import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code2, Database, Cpu, Wrench, Bot, Terminal, Layers } from 'lucide-react';
import { techStackData } from '../data/techStack';

export default function TechStack() {
  const getCategoryIcon = (category) => {
    if (category.includes("Frontend")) return Code2;
    if (category.includes("Backend")) return Terminal;
    if (category.includes("Database")) return Database;
    if (category.includes("Programming")) return Cpu;
    if (category.includes("Tools")) return Wrench;
    if (category.includes("Artificial")) return Bot;
    return Layers;
  };

  return (
    <section id="skills" className="py-24 relative border-t border-[#262626]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-[#262626] text-xs text-[#A1A1AA] uppercase tracking-widest font-mono">
            <Cpu className="w-3 h-3 text-white" />
            <span>04. Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Tech Stack & Expertise
          </h2>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStackData.map((cat, catIdx) => {
            const IconComp = getCategoryIcon(cat.category);
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIdx * 0.08 }}
                className="bg-[#111111] border border-[#262626] hover:border-white/30 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.06)] group"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="p-3 rounded-2xl bg-[#161616] border border-[#262626] text-white group-hover:border-white/30 transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-[#A1A1AA] bg-[#161616] px-2.5 py-1 rounded-lg border border-[#262626]">
                      {cat.skills.length} Skills
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-white/90">
                    {cat.category}
                  </h3>
                  
                  <p className="text-xs text-[#A1A1AA] mb-6 leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#161616] border border-[#262626] hover:border-white/40 text-xs font-medium text-white transition-all hover:scale-105"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
