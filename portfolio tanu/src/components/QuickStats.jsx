import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FolderGit2, Image, Briefcase, Award } from 'lucide-react';

function Counter({ end, suffix = "", duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function QuickStats() {
  const stats = [
    {
      icon: FolderGit2,
      label: "Projects",
      value: 5,
      suffix: "+",
      desc: "AI & Web Applications"
    },
    {
      icon: Image,
      label: "Social Media Creatives",
      value: 30,
      suffix: "+",
      desc: "Designed for Kaevron Technologies"
    },
    {
      icon: Briefcase,
      label: "Internship",
      value: 1,
      suffix: "",
      desc: "Marketing Lead Intern"
    },
    {
      icon: Award,
      label: "Certificates",
      value: 4,
      suffix: "+",
      desc: "Technical Certifications"
    }
  ];

  return (
    <section className="py-16 relative border-t border-[#262626]/50 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[#111111] border border-[#262626] hover:border-white/30 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.06)] group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#A1A1AA] uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <div className="p-2 rounded-xl bg-[#161616] border border-[#262626] text-white group-hover:border-white/30 transition-colors">
                    <IconComp className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-1 font-mono">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </h3>
                  <p className="text-xs text-[#A1A1AA]">
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
