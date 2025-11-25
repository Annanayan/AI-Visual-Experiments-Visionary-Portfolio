import React from 'react';
import { Menu, ArrowDown, ExternalLink } from 'lucide-react';

export const BrandIt: React.FC = () => {
  return (
    <div className="w-full h-screen bg-[#0a0a0a] text-white font-sans overflow-hidden relative selection:bg-[#00C9A7] selection:text-black">
      
      {/* Background Texture/Image */}
      <div className="absolute inset-0 z-0">
         {/* Using a mechanical/industrial abstract image */}
         <img 
            src="https://images.unsplash.com/photo-1565619624098-e6598844dbf2?q=80&w=2070&auto=format&fit=crop" 
            alt="Industrial Background" 
            className="w-full h-full object-cover opacity-30 grayscale contrast-125"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]/40" />
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-50 flex justify-between items-center px-8 py-6">
        <div className="flex items-center gap-3">
           <div className="border border-white/20 p-2">
             <span className="font-bold text-2xl tracking-tighter block leading-none text-[#00C9A7]">B</span>
           </div>
           <div className="flex flex-col">
             <span className="text-xs font-bold tracking-[0.2em] text-gray-300">THE</span>
             <span className="text-sm font-bold tracking-tight">BRANDIT</span>
             <span className="text-[10px] text-gray-500 tracking-widest">AGENCY</span>
           </div>
        </div>

        <div className="flex items-center gap-8">
           <button className="hidden md:block text-xs uppercase tracking-widest hover:text-[#00C9A7] transition-colors border border-white/20 px-6 py-2 rounded-full hover:border-[#00C9A7]">
             Let's Talk
           </button>
           <Menu className="text-white hover:text-[#00C9A7] cursor-pointer transition-colors" />
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col justify-center h-full px-8 md:px-24">
         
         <div className="max-w-4xl relative">
            {/* Decorative Brackets */}
            <div className="absolute -top-12 -left-12 w-24 h-24 border-t-2 border-l-2 border-[#00C9A7]/30 hidden md:block"></div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter uppercase mb-8 mix-blend-luminosity">
              Streamline <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700">&</span> <br/>
              Automate Your <br/>
              <span className="text-[#00C9A7]">Brand</span>
            </h1>

            <div className="flex flex-col md:flex-row gap-12 items-start mt-12">
               <div className="max-w-md text-sm text-gray-400 leading-relaxed border-l border-[#00C9A7] pl-6">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
               </div>
               
               <div className="relative group cursor-pointer">
                  <div className="border border-[#00C9A7] p-6 w-64 backdrop-blur-sm bg-black/20 group-hover:bg-[#00C9A7]/10 transition-colors">
                     <div className="grid grid-cols-2 gap-2 mb-4 opacity-50">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <div className="w-2 h-2 bg-[#00C9A7] rounded-full"></div>
                     </div>
                     <h3 className="text-white font-bold mb-1 uppercase tracking-wider">Lorem Ipsum</h3>
                     <p className="text-[#00C9A7] font-bold text-lg mb-2">DOLOR SIT</p>
                     <p className="text-[10px] text-gray-400">Consectetur adipiscing elit.</p>
                  </div>
                  {/* Decorative corner */}
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#00C9A7]"></div>
               </div>
            </div>
         </div>
         
         {/* Scroll Indicator */}
         <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 text-gray-500">
            <span className="text-[10px] uppercase tracking-[0.3em] rotate-90 whitespace-nowrap origin-center translate-y-12">Scroll Down</span>
            <div className="h-32 w-[1px] bg-gradient-to-b from-transparent via-[#00C9A7] to-transparent mt-24"></div>
         </div>

      </main>

      {/* Footer / Logo Strip */}
      <footer className="absolute bottom-0 w-full z-20 bg-[#001a15]/90 border-t border-[#00C9A7]/20 backdrop-blur-md">
         <div className="container mx-auto px-6 py-6 flex flex-wrap justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl font-bold font-serif">L'ORÉAL</span>
            <span className="text-xl font-bold flex items-center gap-1 border-x border-white/10 px-6">[ <span className="italic">VISA</span> ]</span>
            <span className="text-xl font-bold flex items-center gap-2"><div className="w-4 h-4 bg-white rotate-45"></div> PrivatBank</span>
            <span className="text-xl font-bold lowercase tracking-tight">monobank</span>
            <span className="text-xl font-bold border border-white rounded-full px-3 py-1 text-xs">Henkel</span>
            <span className="text-xl font-bold flex items-center gap-1">CORTEVA <span className="text-[8px] block leading-none">agriscience</span></span>
         </div>
      </footer>

    </div>
  );
};