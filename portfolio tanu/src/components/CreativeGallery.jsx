import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon, Sparkles, Eye, Layers, ChevronRight } from 'lucide-react';
import { galleryData } from '../data/gallery';
import LightboxModal from './LightboxModal';

export default function CreativeGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImages, setActiveImages] = useState([]);
  const [activeTitle, setActiveTitle] = useState('');
  const [initialIndex, setInitialIndex] = useState(0);

  const openCarouselLightbox = (item, slideIndex = 0) => {
    let images = [];
    if (item.isSingle) {
      images = [item.cover];
    } else {
      for (let i = 1; i <= item.slidesCount; i++) {
        images.push(`/assets/carousels/${item.folder}/slide_${i}.png`);
      }
    }
    setActiveImages(images);
    setActiveTitle(item.title);
    setInitialIndex(slideIndex);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="py-24 relative border-t border-[#262626]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111] border border-[#262626] text-xs text-[#A1A1AA] uppercase tracking-widest font-mono">
            <ImageIcon className="w-3 h-3 text-white" />
            <span>06. Creative Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Kaevron Social Media Carousels & Visuals
          </h2>
          <p className="text-base text-[#A1A1AA] max-w-2xl">
            Multi-page social media carousels and visual assets designed during my Marketing Lead Internship at Kaevron Technologies.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryData.map((item, idx) => {
            // Generate list of slides for preview strip
            const slideImages = [];
            if (!item.isSingle) {
              for (let i = 1; i <= item.slidesCount; i++) {
                slideImages.push(`/assets/carousels/${item.folder}/slide_${i}.png`);
              }
            } else {
              slideImages.push(item.cover);
            }

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#111111] border border-[#262626] hover:border-white/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,255,255,0.08)] group"
              >
                <div>
                  {/* Cover Display Frame */}
                  <div 
                    onClick={() => openCarouselLightbox(item, 0)}
                    className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#050505] border border-[#262626] cursor-pointer mb-6 group-hover:border-white/30 transition-all"
                  >
                    <img
                      src={item.cover}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-50" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#111111]/90 backdrop-blur-md border border-[#262626] text-xs font-mono text-white flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-white" />
                        <span>{item.isSingle ? 'Single Graphic' : `${item.slidesCount} Carousel Pages`}</span>
                      </span>
                    </div>

                    {/* Quick Eye Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs flex items-center gap-2 shadow-2xl">
                        <Eye className="w-4 h-4" />
                        <span>Inspect Carousel Pages</span>
                      </div>
                    </div>
                  </div>

                  {/* Header Title */}
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-white/95 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-[#A1A1AA] mb-3">
                    {item.company} • {item.role}
                  </p>
                  <p className="text-xs text-[#A1A1AA]/90 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Slide Strip */}
                {!item.isSingle && (
                  <div className="pt-4 border-t border-[#262626] flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 overflow-x-auto py-1">
                      {slideImages.map((src, slideIdx) => (
                        <div
                          key={slideIdx}
                          onClick={(e) => {
                            e.stopPropagation();
                            openCarouselLightbox(item, slideIdx);
                          }}
                          className="w-12 h-12 rounded-lg overflow-hidden border border-[#262626] hover:border-white cursor-pointer shrink-0 transition-all hover:scale-105"
                          title={`Page ${slideIdx + 1}`}
                        >
                          <img src={src} alt={`Slide ${slideIdx + 1}`} className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => openCarouselLightbox(item, 0)}
                      className="px-3.5 py-2 rounded-xl bg-[#161616] hover:bg-[#202020] border border-[#262626] text-xs font-semibold text-white whitespace-nowrap flex items-center gap-1 transition-all"
                    >
                      <span>Expand</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

              </motion.div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        <LightboxModal
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          images={activeImages}
          initialIndex={initialIndex}
          title={activeTitle}
        />

      </div>
    </section>
  );
}
