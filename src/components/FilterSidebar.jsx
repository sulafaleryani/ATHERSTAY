import React from 'react';
import { X, SlidersHorizontal } from 'lucide-react';
import { CATEGORIES } from '../data/mockData';

export default function FilterSidebar({ filters, setFilters, onClose }) {
  const amenitiesList = ['Wifi', 'Pool', 'Air Conditioning', 'EV Charger', 'Workspace', 'Sauna'];

  const toggleAmenity = (amenity) => {
    if (filters.amenities.includes(amenity)) {
      setFilters({ ...filters, amenities: filters.amenities.filter(a => a !== amenity) });
    } else {
      setFilters({ ...filters, amenities: [...filters.amenities, amenity] });
    }
  };

  return (
    <div className="w-full md:w-64 bg-white md:border-r border-zinc-100 p-5 flex flex-col gap-6 h-full overflow-y-auto">
      <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
        <div className="flex items-center gap-2 font-semibold text-sm tracking-tight">
          <SlidersHorizontal className="w-4 h-4" />
          Refine Network
        </div>
        {onClose && (
          <button onClick={onClose} className="md:hidden p-1 hover:bg-zinc-100 rounded">
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Price Range */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">Max Price (${filters.maxPrice})</label>
        <input 
          type="range" 
          min="100" 
          max="1500" 
          step="50"
          value={filters.maxPrice} 
          onChange={(e) => setFilters({ ...filters, maxPrice: parseInt(e.target.value) })}
          className="w-full accent-zinc-900 cursor-pointer bg-zinc-200 h-1 rounded-lg appearance-none"
        />
        <div className="flex justify-between text-[11px] text-zinc-400 mt-2 font-medium">
          <span>$100</span>
          <span>$1,500+</span>
        </div>
      </div>

      {/* Property Type */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">Architectural Typology</label>
        <select 
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          className="w-full text-xs p-2.5 bg-zinc-50 border border-zinc-200 rounded-lg outline-none focus:border-zinc-900 transition font-medium"
        >
          {CATEGORIES.map(cat => (
            <option key={cat} value={cat}>{cat === 'All' ? 'All Formats' : cat}</option>
          ))}
        </select>
      </div>

      {/* Amenities */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">Infrastructure</label>
        <div className="space-y-2.5">
          {amenitiesList.map((amenity) => (
            <label key={amenity} className="flex items-center gap-2.5 text-xs text-zinc-600 font-medium cursor-pointer">
              <input 
                type="checkbox" 
                checked={filters.amenities.includes(amenity)}
                onChange={() => toggleAmenity(amenity)}
                className="rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900 w-4 h-4 accent-zinc-900"
              />
              {amenity}
            </label>
          ))}
        </div>
      </div>

      <button 
        onClick={() => setFilters({ maxPrice: 1500, category: 'All', amenities: [] })}
        className="mt-auto text-xs font-semibold text-zinc-400 hover:text-zinc-900 transition py-2 text-center"
      >
        Reset Grid Configurations
      </button>
    </div>
  );
}
