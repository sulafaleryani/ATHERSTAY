import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery({ images }) {
  const [index, setIndex] = useState(0);

  const prev = (e) => {
    e.stopPropagation();
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = (e) => {
    e.stopPropagation();
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!images || images.length === 0) return <div className="bg-zinc-100 aspect-video rounded-2xl animate-pulse" />;

  return (
    <div className="relative w-full aspect-[21/9] bg-zinc-950 rounded-2xl overflow-hidden group border border-zinc-100 shadow-sm">
      <img 
        src={images[index]} 
        alt={`Asset composition view ${index + 1}`}
        className="w-full h-full object-cover select-none transition-all duration-700 ease-out"
      />
      
      {images.length > 1 && (
        <>
          <button 
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 shadow-lg text-zinc-900 hover:bg-white active:scale-95 opacity-0 group-hover:opacity-100 transition-all duration-200"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button 
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 shadow-lg text-zinc-900 hover:bg-white active:scale-95 opacity-0 group-hover:opacity-100 transition-all duration-200"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          
          <div className="absolute bottom-4 right-4 bg-zinc-900/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono tracking-widest text-zinc-300">
            {index + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}
