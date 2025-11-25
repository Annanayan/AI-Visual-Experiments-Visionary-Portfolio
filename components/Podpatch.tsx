import React from 'react';
import { Play, Check, MoreHorizontal, User } from 'lucide-react';

export const Podpatch: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#ff4d6d] via-[#a663cc] to-[#5f2eea] text-white font-sans overflow-x-hidden flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-6">
        <div className="flex items-center gap-2">
          <div className="bg-black text-white p-1 rounded-md">
             <div className="w-6 h-6 flex items-center justify-center font-bold text-xl">x</div>
          </div>
          <span className="font-bold text-xl tracking-tight">podpatch</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
          <a href="#" className="hover:text-white transition-colors">Latest Work</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
          <a href="#" className="hover:text-white transition-colors">FAQ</a>
          <a href="#" className="hover:text-white transition-colors">Services</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="hidden md:block text-sm font-medium hover:text-white/80">Sign In</a>
        </div>
      </nav>

      {/* Main Hero */}
      <main className="flex-1 flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-12 gap-12">
        
        {/* Left Content */}
        <div className="flex-1 max-w-2xl z-10">
          <p className="text-pink-100 font-medium mb-4 tracking-wide text-sm md:text-base">Build better podcasts</p>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 drop-shadow-sm">
            Taking the <br />
            stress out of <br />
            podcasting
          </h1>
          <p className="text-pink-100 text-lg md:text-xl mb-10 max-w-md leading-relaxed">
            A subscription based video podcast production service that frees up your time.
          </p>

          <div className="bg-[#1a1a1a] p-2 rounded-full flex items-center max-w-md shadow-2xl transform transition-transform hover:scale-[1.02]">
             <div className="pl-6 flex-1">
               <input 
                  type="email" 
                  placeholder="Enter your email..." 
                  className="bg-transparent w-full text-white focus:outline-none placeholder-gray-500 text-sm md:text-base"
               />
             </div>
             <button className="bg-[#a3ff12] hover:bg-[#b4ff40] text-black font-bold py-3 px-8 rounded-full transition-colors text-sm md:text-base">
               Get Started
             </button>
          </div>
          
          <p className="mt-4 text-xs text-pink-200/60 pl-4">
             By signing up you agree to our <span className="font-bold text-white cursor-pointer">Terms & Conditions</span>.
          </p>
        </div>

        {/* Right Visuals */}
        <div className="flex-1 relative w-full max-w-xl aspect-square lg:aspect-auto h-[400px] lg:h-[600px] flex items-center justify-center">
            
            {/* Main Image Mask */}
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-4 border-white/20 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
               <img 
                 src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1920&auto=format&fit=crop" 
                 alt="Podcaster" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Floating Card: Notification */}
            <div className="absolute top-10 -right-4 md:-right-12 bg-white rounded-xl p-4 shadow-xl flex items-center gap-3 animate-bounce-slow w-64 text-black">
               <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                 <img src="https://picsum.photos/100/100?random=1" className="w-full h-full object-cover" />
               </div>
               <div className="flex-1">
                 <h4 className="font-bold text-sm">Subscribed User</h4>
                 <div className="h-2 bg-gray-100 rounded-full w-20 mt-1"></div>
               </div>
            </div>

            {/* Floating Card: Player */}
            <div className="absolute bottom-10 -left-4 md:-left-12 bg-[#1a1a1a] rounded-2xl p-5 shadow-2xl w-64 border border-white/10 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
               <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                     <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-orange-400"></div>
                     <div>
                       <h5 className="font-bold text-sm flex items-center gap-1">podpatch <div className="w-3 h-3 bg-[#a3ff12] rounded-full flex items-center justify-center text-[8px] text-black">✓</div></h5>
                       <p className="text-[10px] text-gray-400">Job Done!</p>
                     </div>
                  </div>
               </div>
               <div className="space-y-2 mb-4">
                  <div className="h-1.5 bg-white/20 rounded-full w-full"></div>
                  <div className="h-1.5 bg-white/20 rounded-full w-3/4"></div>
                  <div className="h-1.5 bg-white/20 rounded-full w-1/2"></div>
               </div>
               <div className="flex justify-between items-center">
                  <button className="text-[10px] border border-white/20 rounded-full px-3 py-1 text-gray-400 hover:text-white hover:border-white transition-colors">
                    Learn More
                  </button>
                  <MoreHorizontal size={16} className="text-gray-500" />
               </div>
            </div>

        </div>
      </main>
    </div>
  );
};