import React, { useState, useEffect } from 'react';
import { Sparkles, Search, MapPin, ArrowUpRight } from 'lucide-react';
import { MOCK_LISTINGS, CATEGORIES } from '../data/mockData';
import Card from '../components/Card';
import { CardSkeleton } from '../components/ui/Skeleton';

export default function Home({ setPage, setSelectedPropertyId }) {
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleCardClick = (id) => {
    setSelectedPropertyId(id);
    setPage('detail');
  };

  const featured = MOCK_LISTINGS.filter(l => activeCategory === 'All' || l.category === activeCategory).slice(0, 4);

  return (
    <div className="space-y-16 pb-20 animate-fadeIn">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 text-center max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-50 border border-violet-100 text-violet-700 text-xs font-semibold tracking-wide mb-6 animate-pulse">
          <Sparkles className="w-3.5 h-3.5 fill-current" /> Next-Gen Spatial Matchmaking
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.1] mb-6">
          Architectural sanctuaries,<br />Curated by autonomous intelligence.
        </h1>
        <p className="text-zinc-500 text-sm sm:text-base max-w-xl mx-auto font-normal leading-relaxed mb-10">
          AetherStay synthesizes contextual preferences to match remote pioneers with premium living nodes globally.
        </p>

        {/* Big Search Bar */}
        <div className="max-w-2xl mx-auto p-2 bg-white rounded-2xl border border-zinc-200 shadow-xl shadow-zinc-100 flex flex-col sm:flex-row items-center gap-2">
          <div className="flex items-center gap-2.5 px-3 flex-1 w-full py-2 sm:py-0 border-b sm:border-b-0 sm:border-r border-zinc-100">
            <MapPin className="w-4 h-4 text-zinc-400 shrink-0" />
            <input type="text" placeholder="Where are you mapping next?" className="bg-transparent border-none outline-none text-xs text-zinc-800 placeholder-zinc-400 w-full font-medium" />
          </div>
          <button onClick={() => setPage('listings')} className="w-full sm:w-auto bg-zinc-900 text-white font-medium text-xs px-6 py-3 rounded-xl hover:bg-zinc-800 transition flex items-center justify-center gap-2 shadow-sm shrink-0">
            Execute Vector Search
          </button>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-zinc-100">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium border transition shrink-0 ${activeCategory === cat ? 'bg-zinc-900 border-zinc-900 text-white' : 'bg-transparent border-zinc-200 text-zinc-500 hover:border-zinc-300 hover:text-zinc-800'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight">Active Computational Pools</h2>
            <p className="text-xs text-zinc-400 mt-0.5">Top performing living architectures based on autonomous data parsing.</p>
          </div>
          <button onClick={() => setPage('listings')} className="group flex items-center gap-1 text-xs font-semibold text-zinc-900 hover:text-zinc-600 transition">
            View Complete Grid
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {loading 
            ? Array(4).fill(0).map((_, i) => <CardSkeleton key={i} />)
            : featured.map((listing) => <Card key={listing.id} listing={listing} onClick={handleCardClick} />)
          }
        </div>
      </section>
    </div>
  );
}
