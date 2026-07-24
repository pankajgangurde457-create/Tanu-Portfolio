import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, Download, Eye, X, ShieldCheck } from 'lucide-react';
import { certificatesData } from '../data/certificates';
import MagneticButton from './MagneticButton';

export default function Certificates() {
  const [previewCert, setPreviewCert] = useState(null);

  return (
    <section id="certificates" className="py-24 relative border-t border-[#262626]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-[#262626] text-xs text-[#A1A1AA] uppercase tracking-widest font-mono">
            <Award className="w-3 h-3 text-white" />
            <span>07. Credentials & Verifications</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Technical Certifications
          </h2>
          <p className="text-base text-[#A1A1AA] max-w-2xl">
            Verified course certifications in Java Programming, SQL Data Analysis, Introduction to IoT, and Cyber Security & Threats.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-[#111111] border border-[#262626] hover:border-white/30 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.06)] group"
            >
              <div>
                {/* Certificate Preview Card */}
                <div 
                  onClick={() => setPreviewCert(cert)}
                  className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#050505] border border-[#262626] mb-5 cursor-pointer group-hover:border-white/30 transition-all"
                >
                  <img
                    src={cert.previewImg}
                    alt={cert.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-40" />

                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-[#111111]/90 backdrop-blur-md border border-[#262626] text-[11px] font-mono text-white flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      <span>Verified</span>
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="px-3.5 py-1.5 rounded-xl bg-white text-black font-semibold text-xs flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Preview</span>
                    </div>
                  </div>
                </div>

                {/* Info Header */}
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-white/90">
                  {cert.name}
                </h3>
                <p className="text-xs font-mono text-[#A1A1AA] mb-4">
                  {cert.issuer}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#262626] flex items-center justify-between gap-3">
                <MagneticButton href={cert.pdfPath} target="_blank">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#161616] hover:bg-[#202020] border border-[#262626] hover:border-white/30 text-xs font-semibold text-white transition-all">
                    <ExternalLink className="w-3.5 h-3.5 text-[#A1A1AA]" />
                    <span>View Certificate</span>
                  </div>
                </MagneticButton>

                <MagneticButton href={cert.pdfPath} download={`${cert.name.replace(/\s+/g, '_')}_Certificate.pdf`}>
                  <div className="p-2 rounded-xl bg-[#161616] hover:bg-[#202020] border border-[#262626] hover:border-white/30 text-white transition-all" title="Download PDF">
                    <Download className="w-4 h-4 text-[#A1A1AA] group-hover:text-white" />
                  </div>
                </MagneticButton>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Certificate Inspection Modal */}
        <AnimatePresence>
          {previewCert && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-[#111111] border border-[#262626] rounded-3xl max-w-3xl w-full p-6 relative shadow-2xl overflow-hidden"
              >
                <button
                  onClick={() => setPreviewCert(null)}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-[#161616] border border-[#262626] text-[#A1A1AA] hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white pr-10">
                    {previewCert.name}
                  </h3>

                  <div className="rounded-2xl overflow-hidden border border-[#262626] bg-black max-h-[60vh] flex items-center justify-center">
                    <img
                      src={previewCert.previewImg}
                      alt={previewCert.name}
                      className="max-h-[55vh] w-auto object-contain"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-2">
                    <a
                      href={previewCert.pdfPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#161616] border border-[#262626] text-white text-xs font-semibold hover:border-white/30"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Open Full PDF</span>
                    </a>
                    <a
                      href={previewCert.pdfPath}
                      download={`${previewCert.name.replace(/\s+/g, '_')}_Certificate.pdf`}
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-white text-black text-xs font-semibold hover:bg-neutral-200"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download PDF</span>
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
