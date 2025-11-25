import React from 'react';

export const HeartHero: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#111] text-white font-oswald relative overflow-hidden flex flex-col">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop" 
          alt="Mountains" 
          className="w-full h-full object-cover grayscale opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 py-8 text-xs tracking-widest border-b border-white/10">
        <div className="flex items-center gap-2">
           {/* Logo Icon */}
           <div className="w-6 h-6 bg-white text-black flex items-center justify-center font-bold rounded-sm">H</div>
           <span className="font-bold text-lg">HeartHero</span>
        </div>

        <div className="hidden md:flex gap-12 font-sans font-medium text-gray-400">
           <a href="#" className="hover:text-white transition-colors">ELLIOT</a>
           <a href="#" className="hover:text-white transition-colors">EDUCATIONAL</a>
           <a href="#" className="hover:text-white transition-colors">OUR MISSION</a>
           <a href="#" className="hover:text-white transition-colors">CONTACTS</a>
        </div>

        <div className="border border-white/30 px-6 py-2 hover:bg-white hover:text-black transition-all cursor-pointer">
           LET'S CONNECT
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-24 py-12">
         <h1 className="text-5xl md:text-7xl lg:text-[10rem] font-bold leading-[0.9] uppercase tracking-tighter mix-blend-overlay opacity-90 break-words">
           The Portable <br/>
           Defibrillator <br/>
           Built For Real <br/>
           Moments
         </h1>

         <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full max-w-6xl mt-8 text-red-600 text-xs font-mono tracking-widest gap-2 md:gap-0">
            <span>[ PORTABLE.</span>
            <span>POWERFUL.</span>
            <span>READY. ]</span>
         </div>
      </div>

      {/* Footer / Product Details overlay */}
      <div className="relative z-20 px-6 md:px-12 pb-12 pt-12 md:pt-24 bg-gradient-to-t from-black to-transparent">
         <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-12">
            <div className="max-w-md">
               <p className="font-mono text-xs text-gray-400 leading-relaxed mb-2">
                 Elliot is a portable defibrillator that's easy to use and always within reach. Built for moments when every second counts — helping you act fast, with confidence. Always ready. Always by your side.
               </p>
            </div>
            
            <div className="hidden md:flex flex-col items-center gap-2">
               <div className="w-[1px] h-12 bg-white/30 animate-pulse"></div>
               <span className="font-mono text-[10px] text-gray-500 uppercase">Scroll to explore</span>
            </div>

            <div className="font-mono text-xs text-gray-400">
               .DEVICE ID: <span className="text-white font-bold">ELLIOT</span>
            </div>
         </div>
      </div>
    </div>
  );
};