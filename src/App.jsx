import React, { useState } from 'react';
import { Search, Zap, Shield, Menu, User, Sparkles, MapPin } from 'lucide-react';

// Mock Data - Structured for a High-End Aesthetic
const LISTINGS = [
  { id: 1, title: "Glass Pavilion", location: "Nordic Woods", price: "450", image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800" },
  { id: 2, title: "Zen Studio", location: "Kyoto Suburbs", price: "320", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800" },
  { id: 3, title: "Monolith Loft", location: "Berlin Mitte", price: "290", image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800" }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-[#F9F9F9] font-sans text-zinc-900 antialiased">
      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-zinc-200 bg-white/80 px-6 py-4 backdrop-blur-md">
        <div className="text-xl font-bold tracking-tight">ÆTHERSTAY</div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
          <a href="#" className="hover:text-zinc-900 transition-colors">Marketplace</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">Autonomous Tech</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">Ownership</a>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-zinc-100 rounded-full transition-all"
          >
            <Menu size={20} />
          </button>
          <div className="h-10 w-10 rounded-full bg-zinc-200 flex items-center justify-center">
            <User size={18} />
          </div>
        </div>
      </nav>

      {/* HERO / SEARCH */}
      <main className="mx-auto max-w-6xl px-6 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl mb-6">
            Future-Proof Your Stay.
          </h1>
          <div className="relative mx-auto max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
            <input 
              type="text" 
              placeholder="Search by AI capability or location..." 
              className="w-full rounded-2xl border border-zinc-200 bg-white py-4 pl-12 pr-4 shadow-sm outline-none ring-zinc-500 focus:ring-2 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </header>

        {/* LISTINGS GRID */}
        <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {LISTINGS.map((item) => (
            <div key={item.id} className="group cursor-pointer overflow-hidden rounded-3xl bg-white shadow-sm border border-zinc-100 transition-all hover:shadow-md">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <div className="flex items-center text-zinc-500 text-sm">
                    <MapPin size={14} className="mr-1" /> {item.location}
                  </div>
                </div>
                <p className="text-zinc-600 font-medium">${item.price} <span className="text-zinc-400 font-normal">/ night</span></p>
                <button className="mt-4 w-full rounded-xl bg-zinc-900 py-3 text-sm font-medium text-white transition-all hover:bg-zinc-800">
                  Book Autonomously
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* AI FLOATING ACTION */}
      <div className="fixed bottom-8 right-8">
        <button className="flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-4 text-white shadow-2xl hover:scale-105 transition-transform">
          <Sparkles size={20} />
          <span className="font-medium text-sm">Ask Concierge AI</span>
        </button>
      </div>
    </div>
  );
}
