import React from 'react';
import { Bookmark, LayoutGrid, Radio, ShieldAlert } from 'lucide-react';
import { MOCK_LISTINGS } from '../data/mockData';
import Card from '../components/Card';

export default function Profile({ setPage, setSelectedPropertyId }) {
  // Mock subsetting vectors for user contextual dashboards
  const savedListings = MOCK_LISTINGS.slice(0, 2);
  const myListings = MOCK_LISTINGS.slice(2, 3);

  const handleCardClick = (id) => {
    setSelectedPropertyId(id);
    setPage('detail');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 animate-fadeIn">
      {/* User Information Identity Passport Header Block */}
      <section className="flex items-center gap-5 pb-8 border-b border-zinc-100">
        <div className="w-16 h-16 rounded-2xl bg-zinc-950 text-white font-bold text-xl flex items-center justify-center shadow-lg tracking-tighter">
          U1
        </div>
        <div>
          <h1 className="text-xl font-bold text-zinc-900 tracking-tight">User Node Alpha-01</h1>
          <p className="text-xs font-mono text-zinc-400 mt-0.5">Identity Protocol Hash: usr_90xK71fN82vLLm</p>
        </div>
      </section>

      {/* Grid segments dashboard display loops section layers */}
      <div className="space-y-10">
        {/* Saved Listings */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400">
            <Bookmark className="w-3.5 h-3.5 text-zinc-900" /> Vaulted Nodes ({savedListings.length})
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {savedListings.map(listing => (
              <Card key={listing.id} listing={listing} onClick={handleCardClick} />
            ))}
          </div>
        </div>

        {/* Managed Properties Infrastructure List */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400">
            <LayoutGrid className="w-3.5 h-3.5 text-zinc-900" /> Active System Allocations Under Custody ({myListings.length})
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {myListings.map(listing => (
              <Card key={listing.id} listing={listing} onClick={handleCardClick} />
            ))}
          </div>
        </div>

        {/* Realtime Stream Transmissions Activity Queue Log List */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400">
            <Radio className="w-3.5 h-3.5 text-violet-500 animate-pulse" /> Active Network Transmission Stream Operations Queue
          </div>
          <div className="border border-zinc-200 rounded-xl overflow-hidden divide-y divide-zinc-100 bg-white shadow-sm">
            <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="space-y-0.5">
                <span className="font-semibold text-zinc-900">Allocation Verification Requested: The Obsidian Pavilion</span>
                <p className="text-zinc-400 text-[11px]">Lifecycle timeline execution context: August 14 - August 21, 2026</p>
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase bg-amber-50 border border-amber-100 text-amber-700 w-fit self-start sm:self-center">
                Awaiting Mesh Signature
              </span>
            </div>
            <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="space-y-0.5">
                <span className="font-semibold text-zinc-900">Allocation Confirmed: Nordic Steading Cabin</span>
                <p className="text-zinc-400 text-[11px]">Lifecycle timeline execution context: November 02 - November 09, 2026</p>
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase bg-emerald-50 border border-emerald-100 text-emerald-700 w-fit self-start sm:self-center">
                Fully Synchronized
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
