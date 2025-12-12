import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(timer);
  }, [images.length]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative group w-full max-w-5xl mx-auto h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-dark-lighter">
      {/* Main Image Container */}
      <div 
        className="w-full h-full flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative flex items-center justify-center bg-slate-100 dark:bg-black">
             {/* Blurred Background for aspect ratio filling */}
             <div 
               className="absolute inset-0 bg-cover bg-center opacity-30 blur-2xl transform scale-110"
               style={{ backgroundImage: `url(${img})` }}
             />
             {/* Actual Image */}
             <img 
               src={img} 
               alt={`Slide ${index + 1}`}
               className="relative h-full w-full object-contain z-10"
             />
          </div>
        ))}
      </div>

      {/* Controls */}
      <button 
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/40 dark:bg-black/40 text-slate-900 dark:text-white hover:bg-primary hover:text-white transition-all backdrop-blur-sm opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/40 dark:bg-black/40 text-slate-900 dark:text-white hover:bg-primary hover:text-white transition-all backdrop-blur-sm opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20 bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-full">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'bg-primary w-8' : 'bg-white/50 w-2 hover:bg-white'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;