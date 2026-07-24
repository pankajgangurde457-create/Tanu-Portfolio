import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Download, Maximize2 } from 'lucide-react';

export default function LightboxModal({ isOpen, onClose, images, initialIndex = 0, title = "" }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images]);

  if (!isOpen || !images || images.length === 0) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-8">
        
        {/* Top Control Bar */}
        <div className="absolute top-4 left-4 right-4 z-50 flex items-center justify-between px-4 py-3 rounded-2xl bg-[#111111]/80 backdrop-blur-md border border-[#262626]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#A1A1AA]">
              {title}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#161616] text-[11px] font-mono text-white border border-[#262626]">
              {currentIndex + 1} / {images.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={images[currentIndex]}
              download={`gallery-slide-${currentIndex + 1}.png`}
              className="p-2 rounded-xl bg-[#161616] hover:bg-[#202020] border border-[#262626] text-white transition-colors"
              title="Download High Res Slide"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#161616] hover:bg-[#202020] border border-[#262626] text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Previous Button */}
        {images.length > 1 && (
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-[#111111]/80 hover:bg-[#161616] border border-[#262626] text-white hover:scale-110 transition-all shadow-xl"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Main Image Stage */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="max-w-5xl max-h-[80vh] w-full h-full flex items-center justify-center p-4 relative"
        >
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="max-w-full max-h-[75vh] object-contain rounded-2xl border border-[#262626] shadow-2xl"
          />
        </motion.div>

        {/* Next Button */}
        {images.length > 1 && (
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-[#111111]/80 hover:bg-[#161616] border border-[#262626] text-white hover:scale-110 transition-all shadow-xl"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Bottom Thumbnail Strip */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 p-2 rounded-2xl bg-[#111111]/90 backdrop-blur-md border border-[#262626] max-w-full overflow-x-auto">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-10 h-10 rounded-lg overflow-hidden border transition-all shrink-0 ${
                  currentIndex === idx ? 'border-white scale-110 shadow-[0_0_10px_rgba(255,255,255,0.3)]' : 'border-[#262626] opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

      </div>
    </AnimatePresence>
  );
}
