import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Heart, Shield, Calendar, MapPin } from 'lucide-react';
import { MOCK_LISTINGS } from '../data/mockData';
import Gallery from '../components/Gallery';
import { Button } from '../components/ui/Button';

export default function PropertyDetail({ propertyId, setPage }) {
  const property = MOCK_LISTINGS.find(p => p.id === propertyId) || MOCK_LISTINGS[0];
  const [isSaved, setIsSaved] = useState(false);
  const [requestedStay, setRequestedStay] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      {/* Back Header Nav */}
      <div className="flex items-center justify-between">
        <button 
          onClick={() => setPage('listings')}
          className="flex items-center gap-1.5 text-xs font-semibold text-zinc-500 hover:text-zinc-900 transition"
        >
          <ArrowLeft className="w-4 h-4" /> Return to grid
        </button>
        <button 
          onClick={() => setIsSaved(!isSaved)}
          className={`flex items-center gap-2 text-xs font-medium px-3 py-1.5 border rounded-full transition ${isSaved ? 'bg-rose-50 border-rose-200 text-rose-600' : 'bg-white border-zinc-200 text-zinc-600 hover:bg-zinc-50'}`}
        >
          <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
          {isSaved ? 'Vaulted to Favorites' : 'Vault to Favorites'}
        </button>
      </div>

      {/* Main Image Deck */}
      <Gallery images={property.images} />

      {/* Primary Context Splits */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Details Column */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <div className="flex items-center gap-2 text-xs text-zinc-400 font-medium mb-1">
              <span>{property.category} Node</span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" /> {property.location}
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">{property.title}</h1>
          </div>

          {/* AI Core Metrics Section */}
          <div className="p-5 bg-gradient-to-br from-zinc-50 to-indigo-50/20 border border-zinc-200 rounded-xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-950">
              <Sparkles className="w-4 h-4 text-indigo-600 fill-indigo-100" />
              AI Cognitive Matrix Assessment
            </div>
            <p className="text-zinc-700 text-xs leading-relaxed font-normal">
              {property.shortDescription} This structure has been continuously analyzed for acoustic resilience and spatial ergonomics.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-2">
              {property.tags.map((tag, i) => (
                <span key={i} className="bg-white/80 border border-zinc-200 px-2 py-0.5 rounded text-[10px] font-medium text-zinc-600">
                  #{tag.replace(/\s+/g, '')}
                </span>
              ))}
            </div>
          </div>

          {/* Regular Asset Infrastructure Details */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Integrated Infrastructure</h3>
            <div className="grid grid-cols-2 gap-3">
              {property.amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-zinc-700 font-medium p-3 bg-zinc-50 rounded-lg">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-900" />
                  {amenity}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transaction Callout Module */}
        <div className="bg-white border border-zinc-200 p-6 rounded-2xl shadow-xl shadow-zinc-100 space-y-6 lg:sticky lg:top-24">
          <div className="flex justify-between items-baseline">
            <div>
              <span className="text-2xl font-bold text-zinc-900">${property.price}</span>
              <span className="text-xs text-zinc-400 font-medium"> / night</span>
            </div>
            <span className="text-xs font-medium text-zinc-500 bg-zinc-100 px-2 py-1 rounded">★ {property.rating}</span>
          </div>

          <div className="border border-zinc-200 rounded-xl overflow-hidden divide-y divide-zinc-200">
            <div className="p-3 bg-zinc-50 flex items-center gap-3">
              <Calendar className="w-4 h-4 text-zinc-400" />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-zinc-400 uppercase">Temporal Window</span>
                <span className="text-xs font-medium text-zinc-800">Select cycle timelines...</span>
              </div>
            </div>
            <div className="p-3 bg-zinc-50 flex items-center gap-3">
              <Shield className="w-4 h-4 text-zinc-400" />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-zinc-400 uppercase">Occupancy Encryption</span>
                <span className="text-xs font-medium text-zinc-800">1 Resident Vector</span>
              </div>
            </div>
          </div>

          <Button 
            variant={requestedStay ? 'secondary' : 'primary'} 
            className="w-full"
            onClick={() => setRequestedStay(true)}
            disabled={requestedStay}
          >
            {requestedStay ? 'Stay Strategy Dispatched' : 'Request Secure Allocation'}
          </Button>

          <p className="text-[10px] text-zinc-400 text-center leading-normal">
            By dispatching execution, you agree to autonomous routing protocol safety metrics.
          </p>
        </div>
      </div>
    </div>
  );
}
