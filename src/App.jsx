import React, { useState } from 'react';
import { Search, User, Sparkles, MapPin, X, Send, SlidersHorizontal, Cpu, ShieldCheck } from 'lucide-react';
import { generateAIDescription, generateAITags, getConciergeResponse } from './services/aiEngine';

// REALISTIC LUXURY DATASET GENERATOR (50 ITEMS)
const GENERATE_50_LISTINGS = () => {
  const architectures = [
    { title: "Glass Pavilion", loc: "Nordic Woods", price: 1495, img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=800", tags: ["glass", "sauna"] },
    { title: "Monolith Loft", loc: "Berlin Mitte", price: 425, img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800", tags: ["brutalist", "urban"] },
    { title: "Zen Studio", loc: "Kyoto Suburbs", price: 695, img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800", tags: ["minimalist", "nature"] },
    { title: "Concrete Retreat", loc: "Reykjavík Outskirts", price: 1150, img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800", tags: ["concrete", "geothermal"] },
    { title: "Obsidian Cube", loc: "Lofoten Islands", price: 1895, img: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=800", tags: ["fjord", "isolated"] },
    { title: "Brutalist Atelier", loc: "Antwerp Centre", price: 395, img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=800", tags: ["studio", "design"] },
    { title: "Timber Sanctuary", loc: "Black Forest", price: 545, img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800", tags: ["wood", "sauna"] },
    { title: "Linear Villa", loc: "Costa Brava", price: 2450, img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800", tags: ["pool", "ocean"] }
  ];

  let list = [];
  for (let i = 0; i < 50; i++) {
    const template = architectures[i % architectures.length];
    const uniqueId = i + 1;
    const priceVariance = (uniqueId % 3 === 0) ? template.price - 5 : template.price + (uniqueId * 4);
    list.push({
      id: uniqueId,
      title: `${template.title} 0${uniqueId}`,
      location: template.loc,
      price: priceVariance,
      image: template.img,
      features: [...template.tags, "wifi"]
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

  // States for your original AI generator panel
  const [synthesizedNode, setSynthesizedNode] = useState(null);
  const [isSynthesizing, setIsSynthesizing] = useState(false);

  // Search filter loop
  const filteredListings = DATASET.filter(item => {
    const query = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(query) ||
      item.location.toLowerCase().includes(query) ||
      item.features.some(tag => tag.toLowerCase().includes(query))
    );
  });

  // Handle the text conversation
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    const currentInput = input;
    setInput("");

    setTimeout(() => {
      const aiReplyText = getConciergeResponse(currentInput);
      setMessages([...updatedMessages, { role: 'ai', text: aiReplyText }]);
    }, 400);
  };

  // Triggers your original code functions smoothly inside the interface
  const runAISynthesis = async (item) => {
    setIsSynthesizing(true);
    setSynthesizedNode(null);
    try {
      const aiMeta = await generateAIDescription(item.title, item.location, "Premium architectural matrix configuration.");
      const aiTags = await generateAITags(item.title, aiMeta.description);
      setSynthesizedNode({ ...aiMeta, tags: aiTags, price: item.price });
    } catch (err) {
      console.error(err);
    } finally {
      setIsSynthesizing(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBFB] font-sans text-zinc-900 antialiased selection:bg-zinc-200">
      {/* HUD HEADER */}
      <nav className="sticky top-0 z-40 flex items-center justify-between border-b border-zinc-200/60 bg-white/80 px-8 py-5 backdrop-blur-xl">
        <div className="text-sm font-bold tracking-[0.3em] uppercase">ÆTHERSTAY</div>
        <div className="flex items-center gap-6">
          <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 bg-zinc-100 px-3 py-1 rounded-full">{filteredListings.length} Nodes Loaded</div>
          <div className="h-9 w-9 rounded-full bg-zinc-900 flex items-center justify-center text-white text-xs font-bold shadow-sm">SA</div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-8 py-16">
        {/* INTERACTIVE ENGINE BAR */}
        <div className="max-w-2xl mb-12">
          <h1 className="text-5xl font-light tracking-tight text-zinc-900 mb-8 leading-[1.1]">
            Search our <span className="italic font-serif">autonomous</span> landscape.
          </h1>
          <div className="flex items-center gap-4 p-2 bg-white border border-zinc-200 shadow-sm rounded-2xl transition-all focus-within:border-zinc-400">
            <Search className="ml-3 text-zinc-400" size={18} />
            <input 
              type="text" 
              placeholder="Search 50 units by word (e.g., 'wifi', 'sauna', 'Kyoto', 'brutalist')..." 
              className="flex-1 py-2 text-sm bg-transparent outline-none placeholder-zinc-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="p-2 text-zinc-400 border-l border-zinc-100">
              <SlidersHorizontal size={16} />
            </div>
          </div>
        </div>

        {/* ASYNC ANALYSIS PREVIEW WINDOW (YOUR CODE AT WORK) */}
        {(isSynthesizing || synthesizedNode) && (
          <div className="mb-16 p-8 bg-zinc-900 text-white rounded-[2.5rem] shadow-xl animate-in fade-in duration-300">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <Cpu className={`text-zinc-400 ${isSynthesizing ? 'animate-spin' : ''}`} size={20} />
                <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400">Live AI Synthesis Stream</h2>
              </div>
              <button onClick={() => setSynthesizedNode(null)} className="text-zinc-500 hover:text-white"><X size={18}/></button>
            </div>
            
            {isSynthesizing ? (
              <p className="text-sm font-mono tracking-wide text-zinc-400 animate-pulse">Running architectural compilation algorithms via aiEngine.js ...</p>
            ) : (
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-4">
                  <h3 className="text-2xl font-light">{synthesizedNode.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{synthesizedNode.description}</p>
                  <p className="text-xs text-zinc-300 italic font-serif">Vibe Vector: "{synthesizedNode.vibe}"</p>
                </div>
                <div className="bg-zinc-800/40 p-6 rounded-2xl space-y-4 border border-zinc-800">
                  <div className="text-xs uppercase font-bold text-zinc-500 tracking-wider">Generated Features</div>
                  <div className="space-y-1 text-xs font-medium">
                    {synthesizedNode.features.map((f, i) => <div key={i} className="flex items-center gap-2 text-zinc-300"><ShieldCheck size={12} className="text-zinc-400"/> {f}</div>)}
                  </div>
                  <div className="flex flex-wrap gap-1 pt-2">
                    {synthesizedNode.tags.map((t, i) => <span key={i} className="bg-zinc-800 text-[9px] text-zinc-400 font-bold uppercase px-2 py-0.5 rounded">{t}</span>)}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* SEARCH LABELS FOOTPRINT */}
        {filteredListings.length === 0 ? (
          <div className="py-20 text-center border border-dashed border-zinc-200 rounded-3xl bg-white">
            <p className="text-zinc-400 text-sm">No architectural footprints match your parameters.</p>
          </div>
        ) : (
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {filteredListings.map((item) => (
              <div key={item.id} className="group flex flex-col bg-white border border-zinc-100 rounded-[2.5rem] overflow-hidden p-4 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-zinc-50 mb-5">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-102" />
                  <div className="absolute bottom-4 left-4 flex gap-1.5 flex-wrap">
                    {item.features.map((tag, idx) => (
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
                  
                  <div className="flex gap-2">
                    <button 
                      onClick={() => runAISynthesis(item)}
                      className="px-3 rounded-xl bg-zinc-100 text-zinc-700 hover:bg-zinc-200 transition-colors flex items-center justify-center"
                      title="Synthesize Metadata"
                    >
                      <Cpu size={16} />
                    </button>
                    <button 
                      onClick={() => alert(`Securing stay at ${item.title} for $${item.price}/night...`)}
                      className="flex-1 py-3.5 rounded-xl bg-zinc-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors"
                    >
                      Confirm Authorization
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* CHAT SYNCHRONIZATION BAR */}
      {showChat && (
        <div className="fixed bottom-24 right-8 w-[380px] h-[500px] bg-white shadow-2xl rounded-[2.5rem] border border-zinc-200/60 flex flex-col overflow-hidden z-50 animate-in fade-in slide-in-from-bottom-4 duration-200">
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
              placeholder="Inquire with the concierge..." 
              className="flex-1 bg-zinc-50 rounded-xl px-4 py-2 text-xs outline-none border border-transparent focus:border-zinc-200" 
            />
            <button type="submit" className="bg-zinc-900 text-white px-4 rounded-xl text-xs font-bold">Send</button>
          </form>
        </div>
      )}

      {/* FLOATING ACTION TRIGGER */}
      <button 
        onClick={() => setShowChat(!showChat)} 
        className="fixed bottom-8 right-8 flex items-center gap-2 bg-zinc-900 text-white px-6 py-4 rounded-full shadow-xl hover:scale-102 transition-all z-50 text-xs font-bold uppercase tracking-widest"
      >
        <Sparkles size={16} />
        {showChat ? "Close Channel" : "Concierge Index"}
      </button>
    </div>
  );
}
