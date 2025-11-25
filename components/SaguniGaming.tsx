import React from 'react';
import { ArrowLeft, ArrowRight, Menu, Circle, Youtube } from 'lucide-react';

const MobileFrame: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`relative w-[300px] h-[600px] rounded-[3rem] border-4 border-gray-700 bg-black overflow-hidden shadow-2xl flex-shrink-0 ${className}`}>
    {/* Notch */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-50"></div>
    {/* Grid Background */}
    <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
    {/* Content */}
    <div className="relative z-10 h-full overflow-y-auto hide-scrollbar text-white font-mono p-4 flex flex-col">
        {children}
    </div>
  </div>
);

export const SaguniGaming: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8 overflow-x-hidden">
      <div className="flex flex-col lg:flex-row gap-12 items-center py-12">
        
        {/* Screen 1: Home */}
        <MobileFrame className="hover:scale-105 transition-transform duration-500">
           <header className="flex justify-between items-center py-4 border-b border-white/10 mb-8">
              <div className="flex flex-col">
                 <span className="text-neon-green font-bold text-lg leading-none">SaGuNi</span>
                 <span className="text-[10px] text-gray-400 tracking-widest">STUDIOS</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                MENU <div className="p-1 border border-gray-600 rounded-full"><Menu size={10} /></div>
              </div>
           </header>
           
           <div className="flex gap-2 mb-4">
              <Circle size={12} fill="white" className="text-white"/>
              <Circle size={12} className="text-gray-600"/>
              <Circle size={12} className="text-gray-600"/>
              <span className="text-[10px] text-gray-400 ml-2">Crafting Digital</span>
           </div>

           <div className="relative mb-8">
             <h1 className="text-5xl font-bold text-white relative z-10 mix-blend-difference">
               BUILDING<br/>
               <span className="text-neon-green/80 italic blur-[1px]">FOR</span><br/>
               <span className="text-neon-green italic absolute top-[1.2em] left-0">FOR</span><br/>
               THE<br/>
               FUTURE
             </h1>
             {/* 3D Wireframe simulation */}
             <div className="absolute top-10 right-0 w-32 h-32 border border-neon-green/30 rounded-full animate-spin-slow pointer-events-none opacity-50" />
           </div>

           <div className="mt-auto border-t border-gray-800 pt-4">
             <p className="text-[10px] text-gray-400 leading-relaxed text-justify">
               Experience the full entertainment package at Saguni Studios! From games to digital worlds and stories, our passionate team of industry experts is here to redefine your digital experience.
             </p>
           </div>
        </MobileFrame>

        {/* Screen 2: Character/Carousel */}
        <MobileFrame className="lg:scale-110 shadow-[0_0_50px_rgba(0,255,157,0.1)] border-gray-600 z-10 hover:scale-105 lg:hover:scale-110 transition-transform duration-500">
           <div className="h-full flex flex-col justify-center relative">
              <div className="border border-neon-green/50 rounded-2xl p-4 bg-black/50 backdrop-blur-sm relative">
                  <div className="absolute -top-3 right-4 bg-black text-neon-green text-xs px-2 border border-neon-green/50">
                    CALLISTO
                  </div>
                  
                  <div className="w-full aspect-square bg-gray-800 rounded-lg mb-4 overflow-hidden relative group">
                    <img 
                      src="https://picsum.photos/400/400?random=1" 
                      alt="Character" 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute bottom-2 right-2">
                       <Youtube className="text-red-600 fill-red-600 w-6 h-6" />
                    </div>
                  </div>

                  <p className="text-[10px] text-gray-400 leading-relaxed mb-4">
                    Immerse yourself in an anime-inspired RPG classic where strategy meets action. Harness the power of your Evomons in thrilling real-time combat, conquer challenging PvE dungeons.
                  </p>
                  
                  <div className="flex justify-center gap-8 mt-4">
                    <button className="w-10 h-10 rounded-full bg-[#1a2e25] flex items-center justify-center text-neon-green/50 hover:bg-neon-green hover:text-black transition-colors">
                      <ArrowLeft size={16} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-neon-green flex items-center justify-center text-black hover:bg-white transition-colors shadow-[0_0_10px_rgba(0,255,157,0.5)]">
                      <ArrowRight size={16} />
                    </button>
                  </div>
              </div>

              <div className="absolute bottom-4 left-0 w-full flex justify-between items-center px-2">
                 <div className="flex gap-1">
                   <Circle size={8} className="text-gray-600"/>
                   <Circle size={8} className="text-gray-600"/>
                   <Circle size={8} fill="white" className="text-white"/>
                   <Circle size={8} className="text-gray-600"/>
                 </div>
                 <span className="text-[8px] text-gray-500 uppercase">Your WEB3 Partner</span>
              </div>
           </div>
        </MobileFrame>

        {/* Screen 3: Text Heavy */}
        <MobileFrame className="hover:scale-105 transition-transform duration-500">
           <div className="h-full flex flex-col pt-12">
              <div className="flex gap-2 mb-8">
                <Circle size={10} className="text-gray-600"/>
                <Circle size={10} className="text-gray-600"/>
                <Circle size={10} fill="white" className="text-white"/>
                <Circle size={10} className="text-gray-600"/>
                <span className="ml-auto text-[10px] text-gray-400">Your WEB3 Partner</span>
              </div>

              <h2 className="text-3xl font-bold uppercase leading-tight mb-8">
                Experience the full entertainment package at Saguni Studios!
              </h2>

              <div className="space-y-4 text-xs text-gray-400 leading-relaxed text-justify border-l border-neon-green/30 pl-4">
                <p>
                  From stories, our passionate team of industry experts is here to redefine your digital experience.
                </p>
                <p className="text-white font-bold">
                  GET READY FOR CREATIVITY, EXCELLENCE AND A WHOLE NEW LEVEL OF ENTERTAINMENT!
                </p>
              </div>
           </div>
        </MobileFrame>

      </div>
    </div>
  );
};