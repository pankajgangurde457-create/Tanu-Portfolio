import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Send, Copy, Check, Sparkles, MessageSquare } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const emailAddress = "tanup200860@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 4000);
  };

  const contactDetails = [
    {
      icon: Mail,
      label: "Email",
      value: emailAddress,
      action: "copy",
      onClick: handleCopyEmail,
      badge: copied ? "Copied!" : "Click to Copy"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/tanu-pal-808036361",
      href: "https://linkedin.com/in/tanu-pal-808036361",
      badge: "Connect"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/tanupal15",
      href: "https://github.com/tanupal15",
      badge: "Repositories"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ambernath, Maharashtra, India",
      badge: "India"
    }
  ];

  return (
    <section id="contact" className="py-24 relative border-t border-[#262626]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-[#262626] text-xs text-[#A1A1AA] uppercase tracking-widest font-mono">
            <MessageSquare className="w-3 h-3 text-white" />
            <span>09. Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something Intelligent
          </h2>
          <p className="text-base text-[#A1A1AA] max-w-2xl">
            Whether you have an internship opportunity, project inquiry, or technical collaboration in mind, feel free to reach out!
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            {contactDetails.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  onClick={item.onClick}
                  className={`bg-[#111111] border border-[#262626] hover:border-white/30 rounded-2xl p-5 flex items-center justify-between transition-all duration-300 group ${
                    item.action === 'copy' ? 'cursor-pointer hover:shadow-[0_0_20px_rgba(255,255,255,0.06)]' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-[#161616] border border-[#262626] text-white group-hover:border-white/30 transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-[#A1A1AA] uppercase">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-sm font-semibold text-white group-hover:text-white/90 hover:underline"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="block text-sm font-semibold text-white">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-[#161616] border border-[#262626] text-[11px] font-mono text-[#A1A1AA]">
                      {item.badge}
                    </span>
                    {item.action === 'copy' && (
                      copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#A1A1AA] group-hover:text-white" />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Premium Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-[#111111] border border-[#262626] rounded-3xl p-6 sm:p-10 relative shadow-2xl"
          >
            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/30 flex items-center justify-center text-white animate-bounce">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-[#A1A1AA] max-w-md">
                  Thank you for getting in touch. Tanu will respond to your message shortly at <strong className="text-white">{emailAddress}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-[#A1A1AA] uppercase">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#161616] border border-[#262626] text-white placeholder-[#52525B] text-sm focus:outline-none focus:border-white/50 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-[#A1A1AA] uppercase">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#161616] border border-[#262626] text-white placeholder-[#52525B] text-sm focus:outline-none focus:border-white/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-[#A1A1AA] uppercase">Subject</label>
                  <input
                    type="text"
                    placeholder="e.g. Internship Inquiry / Project Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#161616] border border-[#262626] text-white placeholder-[#52525B] text-sm focus:outline-none focus:border-white/50 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-[#A1A1AA] uppercase">Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#161616] border border-[#262626] text-white placeholder-[#52525B] text-sm focus:outline-none focus:border-white/50 transition-colors resize-none"
                  />
                </div>

                <MagneticButton className="w-full">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,255,255,0.2)]"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 text-black" />
                  </button>
                </MagneticButton>

              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
