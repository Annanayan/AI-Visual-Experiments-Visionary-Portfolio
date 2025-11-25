import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const images = [
  "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=2058&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501854140884-074cf2b21d25?q=80&w=2071&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1948&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop"
];

export const LuminaGallery: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 transition-all">
        <div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between">
           <h1 className="text-2xl font-bold tracking-tight">Lumina.</h1>
           <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-gray-500">
              <a href="#" className="hover:text-black transition-colors">Works</a>
              <a href="#" className="hover:text-black transition-colors">Exhibitions</a>
              <a href="#" className="hover:text-black transition-colors">Artists</a>
              <a href="#" className="hover:text-black transition-colors">Contact</a>
           </nav>
           <button className="w-10 h-10 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors">
              <ArrowUpRight size={18} />
           </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 px-6 pb-20 max-w-[1600px] mx-auto">
         <div className="mb-24 max-w-2xl">
            <h2 className="text-6xl md:text-8xl font-light mb-8 leading-[0.9]">
               Seeing the <br/>
               <span className="italic font-serif">Unseen</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
               A curated collection of contemporary photography capturing the raw essence of nature and humanity. Minimalist approach. Maximalist impact.
            </p>
         </div>

         {/* Masonry-ish Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((src, idx) => (
               <div key={idx} className={`group relative overflow-hidden cursor-pointer ${idx % 2 === 0 ? 'md:mt-12' : ''}`}>
                  <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                     <img 
                        src={src} 
                        alt="Gallery Item" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                     />
                  </div>
                  <div className="absolute inset-0 bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-center">
                     <span className="text-xs uppercase tracking-widest text-gray-400 mb-2">Collection 0{idx + 1}</span>
                     <h3 className="text-2xl font-serif italic mb-4">Ethereal Moments</h3>
                     <p className="text-sm text-gray-600 max-w-[200px]">Captured in natural light using 35mm film format.</p>
                     <button className="mt-6 text-xs font-bold border-b border-black pb-1">VIEW PROJECT</button>
                  </div>
               </div>
            ))}
         </div>

         <div className="mt-32 border-t border-gray-100 pt-12 flex justify-between items-end">
            <div className="text-9xl font-bold opacity-5">2024</div>
            <div className="text-right">
               <p className="font-serif italic text-2xl mb-2">Lumina Gallery</p>
               <p className="text-xs uppercase tracking-widest text-gray-400">New York • Tokyo • London</p>
            </div>
         </div>
      </main>
    </div>
  );
};