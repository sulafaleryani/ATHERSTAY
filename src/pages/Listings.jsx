import React, { useState, useEffect } from 'react';
import { SlidersHorizontal, ArrowDownAZ } from 'lucide-react';
import { MOCK_LISTINGS } from '../data/mockData';
import Card from '../components/Card';
import FilterSidebar from '../components/FilterSidebar';
import { CardSkeleton } from '../components/ui/Skeleton';

export default function Listings({ setPage, setSelectedPropertyId }) {
  const [loading, setLoading] = useState(true);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [sortOption, setSortOption] = useState('ai');
  const [filters, setFilters] = useState({
    maxPrice: 1500,
    category: 'All',
    amenities: []
  });

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, [filters, sortOption]);

  const handleCardClick = (id) => {
    setSelectedPropertyId(id);
    setPage('detail');
  };

  // Filter logic
  const filteredListings = MOCK_LISTINGS.filter(listing => {
    if (listing.price > filters.maxPrice) return false;
    if (filters.category !== 'All' && listing.category !== filters.category) return false;
    if (filters.amenities.length > 0 && !filters.amenities.every(amenity => listing.amenities?.includes(amenity))) return false;
    return true;
  });

  // Sorting Logic
  const sortedListings = [...filteredListings].sort((a, b) => {
    if (sortOption === 'low-high') return a.price - b.price;
    if (sortOption === 'high-low') return b.price - a.price;
    if (sortOption === 'ai') return (b.isAiRecommended ? 1 : 0) - (a.isAiRecommended ? 1 : 0);
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8 animate-fadeIn">
      {/* Desktop Filters */}
      <div className="hidden md:block shrink-0">
        <FilterSidebar filters={filters} setFilters={setFilters} />
      </div>

      {/* Mobile Filter Toggle Button */}
      <div className="flex md:hidden items-center justify-between gap-4">
        <button 
          onClick={() => setShowMobileFilters(true)}
          className="flex items-center gap-2 text-xs font-semibold px-4 py-2 border border-zinc-200 rounded-lg bg-white"
        >
          <SlidersHorizontal className="w-3.5 h-3.5" /> Filter Matrix
        </button>
        <div className="flex items-center gap-2">
          <ArrowDownAZ className="w-3.5 h-3.5 text-zinc-400" />
          <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} className="text-xs bg-transparent font-medium border-none outline-none">
            <option value="ai">AI Recommended</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Mobile Filters Drawer Overlay */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-end">
          <div className="w-80 h-full bg-white animate-slideLeft">
            <FilterSidebar filters={filters} setFilters={setFilters} onClose={() => setShowMobileFilters(false)} />
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 space-y-6">
        {/* Top bar for desktop */}
        <div className="hidden md:flex items-center justify-between">
          <p className="text-xs text-zinc-400 font-medium">Showing {sortedListings.length} results inside grid mesh</p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400 font-medium">Sort Strategy:</span>
            <select 
              value={sortOption} 
              onChange={(e) => setSortOption(e.target.value)} 
              className="text-xs bg-white border border-zinc-200 rounded-lg px-2.5 py-1.5 font-medium outline-none focus:border-zinc-900 transition"
            >
              <option value="ai">AI Match Synthesis</option>
              <option value="low-high">Cost: Scale Ascending</option>
              <option value="high-low">Cost: Scale Descending</option>
            </select>
          </div>
        </div>

        {/* Product Grid / Empty State Handling */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {Array(6).fill(0).map((_, i) => <CardSkeleton key={i} />)}
          </div>
        ) : sortedListings.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-zinc-200 rounded-2xl max-w-md mx-auto px-4 mt-8">
            <p className="font-semibold text-zinc-900 text-sm">No vector intersections found</p>
            <p className="text-xs text-zinc-400 mt-1 max-w-xs mx-auto">Try widening your price metrics or removing specialized infrastructure conditions.</p>
            <button 
              onClick={() => setFilters({ maxPrice: 1500, category: 'All', amenities: [] })}
              className="mt-4 text-xs font-semibold px-4 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition"
            >
              Clear Configurations
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {sortedListings.map(listing => (
              <Card key={listing.id} listing={listing} onClick={handleCardClick} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
