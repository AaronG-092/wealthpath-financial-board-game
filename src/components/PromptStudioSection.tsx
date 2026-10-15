import React, { useState } from 'react';
import { IMAGE_PROMPTS } from '../data/gameData';
import { GAME_IMAGES } from '../data/assets';
import { 
  Sparkles, 
  Copy, 
  Check, 
  Maximize2, 
  Sliders, 
  Palette, 
  Layers, 
  Camera, 
  Info,
  ExternalLink
} from 'lucide-react';

export const PromptStudioSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeModalImage, setActiveModalImage] = useState<{ src: string; title: string; prompt: string } | null>(null);

  const copyPromptText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  const PROMPT_ART_MAP: Record<string, string> = {
    'prompt-1': GAME_IMAGES.boardTrack,
    'prompt-2': GAME_IMAGES.boxCover,
    'prompt-3': GAME_IMAGES.cardsArt,
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
              <span>Section 4 of 4: Multimedia Image Generation Prompts</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              AI Asset Prompts & Photographic Mockup Studio
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Three production-grade visual engineering prompts fine-tuned for 
              <strong className="text-emerald-400"> Google Imagen 3</strong>, 
              <strong className="text-sky-400"> Midjourney v6</strong>, and 
              <strong className="text-purple-400"> DALL-E 3</strong>. 
              Rendered below are real prototype outputs generated for this 15-mark university academic submission.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Optimized for Academic Poster & Presentation Slides</span>
          </div>
        </div>
      </div>

      {/* The 3 Prompt Cards with High-Res Artworks */}
      <div className="space-y-8">
        {IMAGE_PROMPTS.map((promptItem, index) => {
          const imgSrc = PROMPT_ART_MAP[promptItem.id];
          const isCopied = copiedId === promptItem.id;

          return (
            <div
              key={promptItem.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Visual Asset Preview Column */}
                <div className="lg:col-span-5 bg-slate-950 p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono uppercase text-emerald-400 font-bold bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                        Asset #{index + 1}: Generated Prototype
                      </span>
                      <button
                        onClick={() =>
                          setActiveModalImage({
                            src: imgSrc,
                            title: promptItem.title,
                            prompt: promptItem.promptText,
                          })
                        }
                        className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1"
                      >
                        <Maximize2 className="w-3.5 h-3.5" /> Zoom
                      </button>
                    </div>

                    <div
                      onClick={() =>
                        setActiveModalImage({
                          src: imgSrc,
                          title: promptItem.title,
                          prompt: promptItem.promptText,
                        })
                      }
                      className="cursor-pointer overflow-hidden rounded-xl border border-slate-800 group relative shadow-lg"
                    >
                      <img
                        src={imgSrc}
                        alt={promptItem.title}
                        className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                          <Maximize2 className="w-3.5 h-3.5" /> Click to view full resolution render
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between text-xs text-slate-400">
                    <span>Target: {promptItem.target}</span>
                    <span className="font-mono">{promptItem.aspectRatio}</span>
                  </div>
                </div>

                {/* Prompt Details & Copy Box Column */}
                <div className="lg:col-span-7 p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <Palette className="w-5 h-5 text-emerald-400" />
                        {promptItem.title}
                      </h3>
                      <span className="text-xs font-mono text-slate-400 px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700">
                        {promptItem.toolsOptimized}
                      </span>
                    </div>

                    {/* Features checklist */}
                    <div className="flex flex-wrap gap-1.5">
                      {promptItem.keyFeatures.map((feat, fIdx) => (
                        <span
                          key={fIdx}
                          className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700"
                        >
                          ✓ {feat}
                        </span>
                      ))}
                    </div>

                    {/* Prompt Box */}
                    <div className="relative mt-2">
                      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-emerald-300 leading-relaxed max-h-48 overflow-y-auto select-all">
                        {promptItem.promptText}
                      </div>

                      <button
                        onClick={() => copyPromptText(promptItem.id, promptItem.promptText)}
                        className={`absolute top-2.5 right-2.5 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all shadow-md ${
                          isCopied
                            ? 'bg-emerald-500 text-slate-950'
                            : 'bg-slate-800 hover:bg-slate-700 text-white'
                        }`}
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Copied to Clipboard!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Prompt</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Technical Prompt Engineering Rationale */}
                  <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80 text-xs text-slate-300 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block flex items-center gap-1">
                      <Sliders className="w-3 h-3 text-sky-400" />
                      Academic & Photorealistic Rendering Cues:
                    </span>
                    <p className="text-[11px] leading-relaxed text-slate-400">
                      Utilizes descriptive lighting modifiers (soft diffused lighting, studio product photography), high-contrast palette tokens (emerald, sapphire, gold, crimson), and explicit physical specs (poker card proportions, 2.5mm greyboard, wooden meeples) to avoid typical AI blurriness or illegible card gibberish.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Zoom Lightbox Modal */}
      {activeModalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative max-w-5xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950">
              <h3 className="font-bold text-white text-sm">{activeModalImage.title}</h3>
              <button
                onClick={() => setActiveModalImage(null)}
                className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg"
              >
                Close
              </button>
            </div>
            <div className="p-4 bg-slate-950 flex flex-col items-center">
              <img
                src={activeModalImage.src}
                alt={activeModalImage.title}
                className="max-h-[75vh] w-auto rounded-xl object-contain shadow-2xl border border-slate-800"
              />
              <p className="text-xs font-mono text-emerald-400 mt-3 text-center max-w-3xl line-clamp-2">
                "{activeModalImage.prompt}"
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
