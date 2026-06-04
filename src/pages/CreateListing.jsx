import React, { useState } from 'react';
import { Sparkles, Upload, FileText, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { generateAIDescription, generateAITags } from '../utils/aiEngine';

export default function CreateListing({ setPage }) {
  const [formData, setFormData] = useState({ title: '', price: '', location: '', description: '' });
  const [aiAnalysis, setAiAnalysis] = useState(null);
  const [aiTags, setAiTags] = useState([]);
  const [generatingDesc, setGeneratingDesc] = useState(false);
  const [generatingTags, setGeneratingTags] = useState(false);

  const triggerAIDescription = async () => {
    setGeneratingDesc(true);
    try {
      const data = await generateAIDescription(formData.title, formData.location, formData.description);
      setAiAnalysis(data);
    } catch (e) { console.error(e); }
    setGeneratingDesc(false);
  };

  const triggerAITags = async () => {
    setGeneratingTags(true);
    try {
      const tags = await generateAITags(formData.title, formData.description);
      setAiTags(tags);
    } catch (e) { console.error(e); }
    setGeneratingTags(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 animate-fadeIn">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900">Mint New Node Asset</h1>
        <p className="text-xs text-zinc-400 mt-0.5">Deploy an architecture allocation onto the Aether grid system.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Core Input Form Fields */}
        <div className="space-y-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Asset Structural Title</label>
            <input 
              type="text" 
              value={formData.title} 
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              placeholder="e.g., The Obsidian Pavilion" 
              className="text-xs p-3 bg-zinc-50 border border-zinc-200 rounded-xl outline-none focus:border-zinc-900 transition font-medium text-zinc-800"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Node Location</label>
              <input 
                type="text" 
                value={formData.location} 
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                placeholder="Kyoto, Japan" 
                className="text-xs p-3 bg-zinc-50 border border-zinc-200 rounded-xl outline-none focus:border-zinc-900 transition font-medium text-zinc-800"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Cycle Fee (USD/Night)</label>
              <input 
                type="number" 
                value={formData.price} 
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                placeholder="450" 
                className="text-xs p-3 bg-zinc-50 border border-zinc-200 rounded-xl outline-none focus:border-zinc-900 transition font-medium text-zinc-800"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Baseline Context Raw Input</label>
            <textarea 
              rows={4}
              value={formData.description} 
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              placeholder="Provide a raw description framework for the AI core engine to refine..." 
              className="text-xs p-3 bg-zinc-50 border border-zinc-200 rounded-xl outline-none focus:border-zinc-900 transition font-medium text-zinc-800 leading-relaxed resize-none"
            />
          </div>

          {/* Interactive Mock Multi-Image Upload Module Dropzone */}
          <div className="border-2 border-dashed border-zinc-200 rounded-xl p-6 text-center hover:bg-zinc-50 transition cursor-pointer">
            <Upload className="w-5 h-5 text-zinc-400 mx-auto mb-2" />
            <span className="block text-xs font-semibold text-zinc-700">Stream Asset Vision Arrays</span>
            <span className="block text-[10px] text-zinc-400 mt-0.5">HEIC, PNG or JPG upwards to 50MB total</span>
          </div>

          <div className="flex gap-3 pt-2">
            <Button 
              type="button" 
              variant="ai" 
              onClick={triggerAIDescription} 
              disabled={generatingDesc || !formData.title}
              className="flex-1"
            >
              <Sparkles className={`w-3.5 h-3.5 ${generatingDesc ? 'animate-spin' : ''}`} />
              {generatingDesc ? 'Synthesizing...' : 'Generate Description Matrix'}
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={triggerAITags} 
              disabled={generatingTags || !formData.title}
            >
              {generatingTags ? 'Parsing...' : 'Compute System Tags'}
            </Button>
          </div>
        </div>

        {/* AI Synthesis Previews Output Generation Column */}
        <div className="space-y-6 lg:sticky lg:top-24">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400">AI Core Synthesis Output Sandbox</label>
          
          <div className="border border-zinc-200 rounded-2xl bg-zinc-950 p-6 text-zinc-100 min-h-[320px] flex flex-col justify-between shadow-xl shadow-zinc-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            
            {!aiAnalysis && aiTags.length === 0 && (
              <div className="my-auto text-center space-y-2">
                <FileText className="w-8 h-8 text-zinc-700 mx-auto stroke-[1.5]" />
                <p className="text-xs font-medium text-zinc-500">Awaiting runtime compilation execution...</p>
              </div>
            )}

            {/* Generated Structural Analysis Fields Container */}
            <div className="space-y-5">
              {aiAnalysis && (
                <div className="space-y-3 animate-fadeIn">
                  <div className="text-[10px] uppercase tracking-widest font-mono text-indigo-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-indigo-400 fill-indigo-950" /> Structured Synopsis Built
                  </div>
                  <h3 className="text-sm font-semibold tracking-tight text-white">{aiAnalysis.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-normal">{aiAnalysis.description}</p>
                  
                  <div className="pt-2 border-t border-zinc-800 space-y-1">
                    <span className="text-[10px] font-mono text-zinc-500 block uppercase">Vibe Index Metrics</span>
                    <p className="text-xs italic text-indigo-200">"{aiAnalysis.vibe}"</p>
                  </div>
                </div>
              )}

              {/* Tags Output Display Grid blocks */}
              {aiTags.length > 0 && (
                <div className="space-y-2 animate-fadeIn pt-2 border-t border-zinc-800">
                  <span className="text-[10px] font-mono text-zinc-500 block uppercase">Generated Node System Tokens</span>
                  <div className="flex flex-wrap gap-1.5">
                    {aiTags.map((tag, idx) => (
                      <span key={idx} className="bg-zinc-900 border border-zinc-800 text-zinc-300 px-2 py-0.5 rounded text-[10px] font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {aiAnalysis && (
              <Button onClick={() => setPage('listings')} variant="secondary" className="w-full mt-6 bg-white text-zinc-950 hover:bg-zinc-100 text-xs">
                Commit & Register Node Live
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
