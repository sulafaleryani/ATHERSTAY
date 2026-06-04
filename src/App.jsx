import React, { useState } from 'react';
import { Search, User, Sparkles, MapPin, X, Send, SlidersHorizontal } from 'lucide-react';

// REALISTIC LUXURY DATASET - 50 DISTINCT ARCHITECTURAL PROPERTIES
const GENERATE_50_LISTINGS = () => {
  const architectures = [
    { title: "Glass Pavilion", loc: "Nordic Woods", price: 1495, img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=800", tags: ["glass", "sauna", "wifi", "isolated"] },
    { title: "Monolith Loft", loc: "Berlin Mitte", price: 425, img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800", tags: ["brutalist", "workspace", "wifi", "urban"] },
    { title: "Zen Studio", loc: "Kyoto Suburbs", price: 695, img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800", tags: ["minimalist", "onsen", "wifi", "nature"] },
    { title: "Concrete Retreat", loc: "Reykjavík Outskirts", price: 1150, img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800", tags: ["concrete", "geothermal", "wifi"] },
    { title: "Obsidian Cube", loc: "Lofoten Islands", price: 1895, img: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=800", tags: ["fjord", "minimalist", "wifi", "isolated"] },
    { title: "Brutalist Atelier", loc: "Antwerp Centre", price: 395, img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=800", tags: ["studio", "workspace", "wifi", "design"] },
    { title: "Timber Sanctuary", loc: "Black Forest", price: 545, img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800", tags: ["wood", "sauna", "wifi", "cozy"] },
    { title: "Linear Villa", loc: "Costa Brava", price: 2450, img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800", tags: ["pool", "panoramic", "wifi", "ocean"] }
  ];

  let list = [];
  // Loop to generate 50 deep entries across varied coordinates and accurate premium pricing
  for (let i = 0; i < 50; i++) {
    const template = architectures[i % architectures.length];
    const uniqueId = i + 1;
    // Add unique pricing variance to feel hyper-realistic
    const priceVariance = (uniqueId % 3 === 0) ? template.price - 5 : template.price + (uniqueId * 4);
    list.push({
      id: uniqueId,
      title: `${template.title} 0${uniqueId}`,
      location: template.loc,
      price: priceVariance,
      image: template.img,
      features: template.tags
    });
  }
  return list;
};

const DATASET = GENERATE_50_LISTINGS();

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([{ role: 'ai', text: "Welcome back. Our system indices are fully synchronized. How can I guide your stay selection?" }]);
  const [input, setInput] = useState("");

  // FUNCTIONAL SEARCH ENGINE: Filters instantly against titles, locations, and structural tags
  const filteredListings = DATASET.filter(item => {
    const query = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(query) ||
      item.location.toLowerCase().includes(query) ||
      item.features.some(tag => tag.toLowerCase().includes(query))
    );
  });

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    const currentInput = input;
    setInput("");

    // Dynamic Context-Aware Local Parsing
    setTimeout(() => {
      const text = currentInput.toLowerCase();
      let response = "Analyzing data stream... Try searching specific architectural definitions like 'wifi', 'sauna', 'brutalist', or 'isolated'.";
      
      if (text.includes("wifi") || text.includes("internet")) {
        response = "Confirmed. 100% of our 50 global properties are structurally mapped with symmetrical high-speed Starlink architecture. Signal guarantees are locked at check-in.";
      } else if (text.includes("cheap") || text.includes("low") || text.includes("price")) {
        response = "The baseline optimization for our urban locations begins at $395/night within our European sectors, maintaining complete premium specifications.";
      } else if (text.includes("glass") || text.includes("nordic")) {
        response = "Filtering matrix for glass options. We currently feature several distinct Glass Pavilion variants across our Nordic nodes with structural thermal baselines.";
      }
      setMessages([...updatedMessages, { role: 'ai', text: response }]);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#FBFBFB] font-sans text-zinc-900 antialiased">
      {/* GLOBAL HUD/NAV */}
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-zinc-200/60 bg-white/80 px-8 py-5 backdrop-blur-xl">
        <div className="text-sm font-bold tracking-[0.3em] uppercase">ÆTHERSTAY</div>
        <div className="flex items-center gap-6">
          <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 bg-zinc-100 px-3 py-1 rounded-full">{filteredListings.length} Nodes Indexed</div>
          <div className="h-9 w-9 rounded-full bg-zinc-900 flex items-center justify-center text-white text-xs font-bold shadow-sm">SA</div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-8 py-16">
        {/* INTERACTIVE SEARCH ENGINE BLOCK */}
        <div className="max-w-2xl mb-16">
          <h1 className="text-5xl font-light tracking-tight text-zinc-900 mb-8 leading-[1.1]">
            Search our <span className="italic font-serif">autonomous</span> landscape.
          </h1>
          <div className="flex items-center gap-4 p-2 bg-white border border-zinc-200 shadow-sm rounded-2xl transition-all focus-within:border-zinc-400">
            <Search className="ml-3 text-zinc-400" size={18} />
            <input 
              type="text" 
              placeholder="Filter 50 properties by keyword (e.g., 'wifi', 'sauna', 'Kyoto', 'brutalist')..." 
              className="flex-1 py-2 text-sm bg-transparent outline-none placeholder-zinc-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="p-2 text-zinc-400 border-l border-zinc-100">
              <SlidersHorizontal size={16} />
            </div>
          </div>
        </div>

        {/* REAL-TIME DYNAMIC GRID */}
        {filteredListings.length === 0 ? (
          <div className="py-20 text-center border border-dashed border-zinc-200 rounded-3xl bg-white">
            <p className="text-zinc-400 text-sm">No architectural footprints match your search configuration.</p>
          </div>
        ) : (
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {filteredListings.map((item) => (
              <div key={item.id} className="group flex flex-col bg-white border border-zinc-100 rounded-[2.5rem] overflow-hidden p-4 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-zinc-50 mb-5">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-103" 
                  />
                  <div className="absolute bottom-4 left-4 flex gap-1.5 flex-wrap">
                    {item.features.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="bg-white/90 backdrop-blur-md text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full text-zinc-800 shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex-1 px-2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-medium tracking-tight text-zinc-900">{item.title}</h3>
                      <p className="text-lg font-semibold text-zinc-900">${item.price.toLocaleString()}<span className="text-xs font-normal text-zinc-400">/nt</span></p>
                    </div>
                    <p className="text-zinc-400 text-xs flex items-center gap-1 mb-6">
                      <MapPin size={12} className="text-zinc-300" /> {item.location}
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => alert(`Securing node ${item.title} at $${item.price}/night...`)}
                    className="w-full py-3.5 rounded-xl bg-zinc-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors"
                  >
                    Confirm Authorization
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* FLOATING CHAT SYNC */}
      {showChat && (
        <div className="fixed bottom-24 right-8 w-[380px] h-[500px] bg-white shadow-2xl rounded-[2.5rem] border border-zinc-200/60 flex flex-col overflow-hidden z-50">
          <div className="p-5 border-b border-zinc-100 flex items-center justify-between bg-zinc-900 text-white">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-zinc-400" />
              <span className="text-xs font-bold tracking-widest uppercase">Æ-Concierge</span>
            </div>
            <button onClick={() => setShowChat(false)}><X size={16}/></button>
          </div>
          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-[#FBFBFB]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-xs font-medium ${m.role === 'user' ? 'bg-zinc-900 text-white' : 'bg-white border border-zinc-200 text-zinc-700 shadow-sm'}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-zinc-100 flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Inquire with the index system..." 
              className="flex-1 bg-zinc-50 rounded-xl px-4 py-2 text-xs outline-none border border-transparent focus:border-zinc-200" 
            />
            <button type="submit" className="bg-zinc-900 text-white px-4 rounded-xl text-xs font-bold">Send</button>
          </form>
        </div>
      )}

      <button 
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-8 right-8 flex items-center gap-2 bg-zinc-900 text-white px-6 py-4 rounded-full shadow-xl hover:scale-102 transition-transform z-50 text-xs font-bold uppercase tracking-widest"
      >
        <Sparkles size={16} />
        {showChat ? "Close Channel" : "Concierge Index"}
      </button>
    </div>
  );
}
