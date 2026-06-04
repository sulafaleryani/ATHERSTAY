import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Listings from './pages/Listings';
import PropertyDetail from './pages/PropertyDetail';
import CreateListing from './pages/CreateListing';
import Profile from './pages/Profile';

export default function App() {
  const [page, setPage] = useState('home'); // router matrix state
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);

  const renderActivePage = () => {
    switch (page) {
      case 'home':
        return <Home setPage={setPage} setSelectedPropertyId={setSelectedPropertyId} />;
      case 'listings':
        return <Listings setPage={setPage} setSelectedPropertyId={setSelectedPropertyId} />;
      case 'detail':
        return <PropertyDetail propertyId={selectedPropertyId} setPage={setPage} />;
      case 'create':
        return <CreateListing setPage={setPage} />;
      case 'profile':
        return <Profile setPage={setPage} setSelectedPropertyId={setSelectedPropertyId} />;
      default:
        return <Home setPage={setPage} setSelectedPropertyId={setSelectedPropertyId} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white antialiased flex flex-col">
      <Navbar setPage={setPage} currentPage={page} />
      <main className="flex-1 w-full max-w-none">
        {renderActivePage()}
      </main>
      <footer className="border-t border-zinc-100 py-6 text-center text-[11px] text-zinc-400 font-medium bg-zinc-50">
        © 2026 AetherStay Labs, Inc. Core Decentralized Grid Allocator Protocol Layer.
      </footer>
    </div>
  );
}
