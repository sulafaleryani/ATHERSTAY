import React, { useState } from 'react';
import { Search, Zap, Shield, Menu, User, Sparkles, MapPin, X, Send } from 'lucide-react';

const LISTINGS = [
  { id: 1, title: "Glass Pavilion", location: "Nordic Woods", price: "450", image: "https://images.adsttc.com/media/images/54bd/bd86/e58e/ce56/3700/003f/large_jpg/portada_IMG_0024_lr_0007.jpg?1421720939" },
  { id: 2, title: "Zen Studio", location: "Kyoto Suburbs", price: "320", image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQNIGgqqP5d8hKFH7mhI9or7N8sP9Ko8unj9uRwtHtVYwRwMw-Tx-s_w_yUijBUV8BdUppAXNc9MruZZTs" },
  { id: 3, title: "Monolith Loft", location: "Berlin Mitte", price: "290", image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTDvY5LHVX7W66dX8gP-y0DwsXpnVa5FnOkQrjbro3hXq0uK_xFDtkfDJzt6Fva16RiP5CWDY8jSVzo730" }
];

export default function App() {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([{ role: 'ai', text: "Welcome to ÆtherStay. How can I assist your autonomous journey today?" }]);
  const [input, setInput] = useState("");

  const handleBooking = (title) => {
    alert(`Initiating autonomous booking for: ${title}. Connecting to secure ledger...`);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const newMessages = [...messages, { role: 'user', text: input }];
    setMessages(newMessages);
    setInput("");

    // Simple AI simulation logic
    setTimeout(() => {
      setMessages([...newMessages, { role: 'ai', text: "I'm analyzing the availability of high-end autonomous spaces matching your request." }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-zinc-900 antialiased">
      {/* NAV */}
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-zinc-100 bg-white/70 px-8 py-5 backdrop-blur-xl">
        <div className="text-xl font-bold tracking-tighter uppercase italic">ÆtherStay</div>
        <div className="flex items-center gap-6">
          <button onClick={() => alert('Accessing secure owner dashboard...')} className="text-xs font-semibold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors">Portals</button>
          <div className="h-10 w-10 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center cursor-pointer hover:bg-zinc-200 transition-colors">
            <User size={16} />
          </div>
        </div>
      </nav>

      {/* HERO */}
      <main className="mx-auto max-w-7xl px-8 py-20">
        <div className="max-w-3xl mb-20">
          <h1 className="text-6xl font-light tracking-tight leading-[1.1] mb-8">Refined spaces for the <span className="italic font-serif">autonomous</span> age.</h1>
          <div className="flex items-center gap-4 p-2 bg-white border border-zinc-100 shadow-sm rounded-2xl max-w-xl">
            <Search className="ml-4 text-zinc-400" size={20} />
            <input type="text" placeholder="Search by AI signature or coordinates..." className="flex-1 py-3 outline-none text-sm" />
            <button className="bg-zinc-900 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-black transition-colors">Explore</button>
          </div>
        </div>

        {/* LISTINGS */}
        <div className="grid gap-12 md:grid-cols-3">
          {LISTINGS.map((item) => (
            <div key={item.id} className="group flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-zinc-100 mb-6">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover grayscale-[0.2] group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">Verified AI</div>
              </div>
              <div className="px-2">
                <div className="flex items-end justify-between mb-2">
                  <div>
                    <h3 className="text-2xl font-light mb-1">{item.title}</h3>
                    <p className="text-zinc-400 text-sm flex items-center gap-1"><MapPin size={12}/> {item.location}</p>
                  </div>
                  <p className="text-xl font-medium">${item.price}</p>
                </div>
                <button 
                  onClick={() => handleBooking(item.title)}
                  className="mt-6 w-full py-4 rounded-2xl border border-zinc-200 text-xs font-bold uppercase tracking-widest hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all duration-300"
                >
                  Confirm Stay
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* AI CONCIERGE CHAT WINDOW */}
      {showChat && (
        <div className="fixed bottom-24 right-8 w-[380px] h-[500px] bg-white shadow-2xl rounded-[2.5rem] border border-zinc-100 flex flex-col overflow-hidden z-[100] animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="p-6 border-b border-zinc-50 flex items-center justify-between bg-zinc-900 text-white">
            <div className="flex items-center gap-3">
              <Sparkles size={18} className="text-zinc-400" />
              <span className="text-xs font-bold uppercase tracking-tighter">Æ-Concierge</span>
            </div>
            <button onClick={() => setShowChat(false)}><X size={18}/></button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-5 py-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-zinc-900 text-white' : 'bg-zinc-100 text-zinc-700'}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className="p-4 bg-zinc-50 flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything..." 
              className="flex-1 bg-white border border-zinc-200 rounded-xl px-4 py-2 text-sm outline-none" 
            />
            <button type="submit" className="bg-zinc-900 text-white p-2 rounded-xl"><Send size={18}/></button>
          </form>
        </div>
      )}

      {/* FLOATING BUTTON */}
      <button 
        onClick={() => setShowChat(!showChat)}
        className={`fixed bottom-8 right-8 flex items-center gap-3 px-8 py-5 rounded-full shadow-2xl transition-all duration-500 hover:scale-105 z-[101] ${showChat ? 'bg-white text-zinc-900 border border-zinc-100' : 'bg-zinc-900 text-white'}`}
      >
        <Sparkles size={20} className={showChat ? 'text-zinc-400' : 'text-zinc-300'} />
        <span className="text-xs font-bold uppercase tracking-widest">{showChat ? 'Close Concierge' : 'Concierge AI'}</span>
      </button>
    </div>
  );
}
