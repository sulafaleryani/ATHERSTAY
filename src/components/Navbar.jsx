import React from 'react';
import { Sparkles, Search, User, Menu } from 'lucide-react';

export default function Navbar({ setPage, currentPage }) {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPage('home')}>
          <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-white font-bold tracking-tighter">
            Æ
          </div>
          <span className="font-semibold text-lg tracking-tight hidden sm:block">AetherStay</span>
        </div>

        {/* Dynamic Search Bar Trigger */}
        <div 
          onClick={() => setPage('listings')} 
          className="flex items-center gap-3 px-4 py-2 border border-zinc-200 rounded-full shadow-sm hover:shadow-md transition cursor-pointer max-w-md flex-1 mx-4 md:mx-0"
        >
          <Search className="w-4 h-4 text-zinc-400 shrink-0" />
          <span className="text-xs font-medium text-zinc-600 truncate">Explore global nodes...</span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setPage('create')}
            className={`hidden md:flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-full transition ${currentPage === 'create' ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-600 hover:bg-zinc-50'}`}
          >
            <Sparkles className="w-3.5 h-3.5 text-violet-500" />
            Mint Space
          </button>
          
          <div 
            onClick={() => setPage('profile')}
            className="flex items-center gap-2 p-1.5 border border-zinc-200 rounded-full hover:shadow-sm cursor-pointer transition bg-zinc-50"
          >
            <Menu className="w-4 h-4 text-zinc-500 ml-1.5 hidden sm:block" />
            <div className="w-7 h-7 rounded-full bg-zinc-900 flex items-center justify-center text-white text-xs font-bold">
              U
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
