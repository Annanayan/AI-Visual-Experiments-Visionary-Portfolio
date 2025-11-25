import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';
import { Search, Bell, Grid, User, ArrowUpRight, Plus, MoreHorizontal, Menu } from 'lucide-react';

const data = [
  { name: 'Mon', value: 20 },
  { name: 'Tue', value: 45 },
  { name: 'Wed', value: 35 },
  { name: 'Thu', value: 70 },
  { name: 'Fri', value: 55 },
  { name: 'Sat', value: 85 },
  { name: 'Sun', value: 100 },
];

export const MyOpsDashboard: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#05110e] text-white font-sans overflow-hidden flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 md:px-8 py-4 border-b border-white/5 bg-[#05110e]/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-12">
          <h1 className="text-xl font-bold tracking-tight">MyOps</h1>
          <div className="hidden lg:flex items-center gap-6 text-sm text-gray-400">
            <span className="text-white font-medium cursor-pointer">Home</span>
            <span className="hover:text-white transition-colors cursor-pointer">Why MyOps</span>
            <span className="hover:text-white transition-colors cursor-pointer">Pricing</span>
            <span className="hover:text-white transition-colors cursor-pointer">Our Story</span>
          </div>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <span className="hidden md:block text-sm font-medium cursor-pointer hover:text-emerald-400">Login</span>
          <button className="hidden md:block bg-emerald-500 hover:bg-emerald-400 text-black px-5 py-2 rounded-full text-sm font-semibold transition-all">
            Create an account
          </button>
          <button className="lg:hidden text-gray-300">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 relative overflow-y-auto">
        {/* Decorative Gradients */}
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-emerald-900/20 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-emerald-500 text-xs font-bold tracking-widest uppercase mb-2 block">Why MyOps</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Smart Budgeting</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
              Track, Analyze, and Optimize Your Finances with Ease. With MyOps financial tracker sheets and real-time analytics, you get a clear picture of your spending.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Card 1: Sales Volume */}
            <div className="col-span-1 lg:col-span-1 flex flex-col gap-6">
              <div className="bg-[#0f2520]/60 border border-white/5 p-6 rounded-3xl backdrop-blur-sm hover:border-emerald-500/30 transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Total Summary</p>
                    <h3 className="text-2xl font-bold text-white">$ 6.54M <span className="text-sm text-gray-400 font-normal">(17 Sales)</span></h3>
                  </div>
                  <div className="bg-emerald-500/10 p-2 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                    <ArrowUpRight className="w-5 h-5 text-emerald-500" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                    <span className="text-gray-400">Avg. Sales Price</span>
                    <span className="font-medium">$ 464k</span>
                  </div>
                   <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                    <span className="text-gray-400">Volume Sold to Date</span>
                    <span className="font-medium">$ 6.54M</span>
                  </div>
                   <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Avg. List Price</span>
                    <span className="font-medium">$ 2.24M</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-white/5">
                  <h4 className="text-sm font-semibold text-white mb-1">Financial Performance Tracking</h4>
                  <p className="text-xs text-gray-500">Monitor expenses, revenue, and profitability in one place.</p>
                </div>
              </div>
            </div>

            {/* Card 2: Main Chart */}
            <div className="col-span-1 lg:col-span-1 bg-[#0f2520]/60 border border-white/5 p-6 rounded-3xl backdrop-blur-sm flex flex-col justify-between hover:border-emerald-500/30 transition-all min-h-[300px]">
               <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs text-gray-300">Live Updates</span>
                  </div>
                   <button className="text-xs bg-white/5 hover:bg-white/10 px-3 py-1 rounded-full text-gray-300 transition-colors">
                    Weekly
                  </button>
               </div>

               <div className="mb-4">
                  <p className="text-xs text-emerald-400 mb-1">+Infinity% of target</p>
                  <h3 className="text-3xl font-bold">$21.75M</h3>
               </div>

               <div className="flex-1 w-full min-h-[150px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#10b981" 
                        strokeWidth={2}
                        fillOpacity={1} 
                        fill="url(#colorValue)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
               </div>
               
               <div className="mt-4">
                  <h4 className="text-sm font-semibold text-white mb-1">Real-Time Analytics</h4>
                  <p className="text-xs text-gray-500">Make data-driven decisions on budgets, growth, and operational efficiency.</p>
                </div>
            </div>

            {/* Card 3: Interactions */}
            <div className="col-span-1 lg:col-span-1 flex flex-col gap-6">
                {/* Search Bar Widget */}
                <div className="bg-[#0f2520]/60 border border-white/5 p-6 rounded-3xl backdrop-blur-sm relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-4">
                      <MoreHorizontal className="text-gray-500 w-5 h-5 cursor-pointer hover:text-white" />
                   </div>
                   
                   {/* Chat bubbles simulation */}
                   <div className="flex flex-col gap-3 mb-6 mt-2">
                      <div className="self-end bg-[#1a3830] text-gray-200 text-xs py-2 px-3 rounded-l-xl rounded-tr-xl max-w-[80%] border border-white/5">
                        How well does the vendor's system integrate with your internal tools?
                      </div>
                      <div className="self-start text-gray-500 text-[10px] ml-1">20 sec ago</div>
                   </div>

                   <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Ask Maria..." 
                        className="w-full bg-[#0a1612] border border-white/10 rounded-full py-3 px-10 text-sm text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
                      />
                      <Search className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                      <div className="absolute right-2 top-2 bg-emerald-500/80 p-1.5 rounded-full cursor-pointer hover:bg-emerald-500">
                         <ArrowUpRight className="w-3 h-3 text-black" />
                      </div>
                   </div>
                </div>

                <div className="flex-1 bg-gradient-to-br from-[#0f2520]/80 to-[#05110e] border border-white/5 p-6 rounded-3xl flex items-center justify-center relative overflow-hidden min-h-[150px]">
                     {/* Abstract decorative graphic */}
                     <div className="absolute inset-0 opacity-20">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                           <defs>
                              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                 <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
                              </pattern>
                           </defs>
                           <rect width="100%" height="100%" fill="url(#grid)" />
                        </svg>
                     </div>
                     <div className="text-center relative z-10">
                        <h4 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-white">$0M</h4>
                        <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Projected Loss</p>
                     </div>
                </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};