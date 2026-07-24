import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Github, Sparkles, CheckCircle2, X } from 'lucide-react';
import { projectsData } from '../data/projects';
import MagneticButton from './MagneticButton';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative border-t border-[#262626]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-[#262626] text-xs text-[#A1A1AA] uppercase tracking-widest font-mono">
            <FolderGit2 className="w-3 h-3 text-white" />
            <span>05. Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            AI & Web Software Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#111111] border border-[#262626] hover:border-white/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,255,255,0.08)] group relative overflow-hidden"
            >
              <div>
                {/* Project Banner Image */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mb-6 bg-[#050505] border border-[#262626] group-hover:border-white/20 transition-all">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-60" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#111111]/90 backdrop-blur-md border border-[#262626] text-xs font-mono text-white">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-white/95 transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-[#A1A1AA] mb-4">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-xl bg-[#161616] border border-[#262626] text-xs font-medium text-white/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-6 border-t border-[#262626] flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-white/80 hover:text-white underline underline-offset-4 transition-colors"
                >
                  View Details & Features →
                </button>

                <div className="flex items-center gap-3">
                  {/* GitHub Button */}
                  <MagneticButton href={project.githubUrl} target="_blank">
                    <div className="p-2.5 rounded-xl bg-[#161616] hover:bg-[#202020] border border-[#262626] hover:border-white/30 text-white transition-all">
                      <Github className="w-4 h-4 text-[#A1A1AA] group-hover:text-white" />
                    </div>
                  </MagneticButton>

                  {/* Live Demo Button */}
                  <MagneticButton href={project.liveUrl} target="_blank">
                    <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-neutral-200 text-black font-semibold text-xs transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </MagneticButton>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Detailed Modal View */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-[#111111] border border-[#262626] rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-xl bg-[#161616] border border-[#262626] text-[#A1A1AA] hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-6">
                  <div>
                    <span className="px-3 py-1 rounded-full bg-[#161616] border border-[#262626] text-xs font-mono text-[#A1A1AA]">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-2">
                      {selectedProject.title}
                    </h3>
                    <p className="text-xs font-mono text-[#A1A1AA]">
                      {selectedProject.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    {selectedProject.longDescription}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-xs font-mono uppercase text-[#A1A1AA] tracking-wider">
                      Key Highlights & Architecture
                    </h4>
                    <div className="space-y-2">
                      {selectedProject.highlights.map((item) => (
                        <div key={item} className="flex items-start gap-2.5 text-xs text-white">
                          <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#262626] flex items-center justify-end gap-3">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#161616] border border-[#262626] text-white text-xs font-semibold hover:border-white/30"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Repository</span>
                    </a>
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black text-xs font-semibold hover:bg-neutral-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Launch Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
