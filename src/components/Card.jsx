import React from 'react';
import { Star, Sparkles, MapPin } from 'lucide-react';

export default function Card({ listing, onClick }) {
  return (
    <div 
      onClick={() => onClick(listing.id)}
      className="group cursor-pointer flex flex-col space-y-2.5"
    >
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-zinc-100 border border-zinc-100">
        <img 
          src={listing.images[0]} 
          alt={listing.title}
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        {listing.isAiRecommended && (
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm border border-zinc-200 text-zinc-900 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide shadow-sm flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-violet-600 fill-violet-600" />
            AI RECOMMENDED
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-medium text-sm text-zinc-900 tracking-tight group-hover:text-zinc-600 transition truncate">
            {listing.title}
          </h3>
          <div className="flex items-center gap-1 text-xs text-zinc-900 font-medium shrink-0">
            <Star className="w-3.5 h-3.5 fill-current text-zinc-900" />
            {listing.rating}
          </div>
        </div>

        <div className="flex items-center gap-1 text-xs text-zinc-500 mt-0.5">
          <MapPin className="w-3 h-3 shrink-0" />
          <span className="truncate">{listing.location}</span>
        </div>

        <p className="text-xs text-zinc-400 mt-1.5 line-clamp-2 leading-relaxed">
          {listing.shortDescription}
        </p>

        <div className="mt-auto pt-2.5 flex items-baseline gap-1 text-zinc-900">
          <span className="font-semibold text-sm">${listing.price}</span>
          <span className="text-zinc-400 text-[11px]">/ night</span>
        </div>
      </div>
    </div>
  );
}
