import React, { useState } from 'react';
import { ArrowLeft, Github, Twitter, Layers } from 'lucide-react';
import { PROJECTS } from './constants';
import { ProjectCard } from './components/ProjectCard';
import { Project } from './types';

const App: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // If a project is active, render the specific component view
  if (activeProject) {
    return (
      <div className="relative w-full h-full animate-in fade-in duration-500">
        {/* Floating Back Button */}
        <button 
          onClick={() => setActiveProject(null)}
          className="fixed top-6 left-6 z-[100] bg-black/50 hover:bg-black text-white p-3 rounded-full backdrop-blur-md border border-white/20 transition-all shadow-xl group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        </button>
        
        {/* The Project Component */}
        {activeProject.component}
      </div>
    );
  }

  // Otherwise, render the Portfolio Gallery
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-neon-green selection:text-black">
      
      {/* Header */}
      <header className="fixed top-0 w-full z-40 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-gradient-to-br from-neon-green to-emerald-600 rounded-lg flex items-center justify-center text-black font-bold text-xl">
               V
             </div>
             <div>
               <h1 className="font-bold text-lg tracking-tight">Visionary Portfolio</h1>
               <p className="text-[10px] text-gray-500 uppercase tracking-widest">UI/UX Collection</p>
             </div>
          </div>
          
          <div className="flex items-center gap-4 md:gap-6">
             <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
             <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
             <button className="hidden sm:block bg-white text-black px-5 py-2 rounded-full font-medium text-sm hover:bg-gray-200 transition-colors">
               Contact Me
             </button>
          </div>
        </div>
      </header>

      {/* Main Grid */}
      <main className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
         
         <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-600">
              Curated Digital Experiences
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              A collection of pixel-perfect recreations of modern web aesthetics. 
              Click on any project to interact with the live demo.
            </p>
         </div>

         {/* Filter Tabs (Visual Only for Demo) */}
         <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {['All Projects', 'SaaS', 'Mobile', 'Landing Page', 'Typography'].map((tab, i) => (
              <button 
                key={tab}
                className={`px-4 py-2 rounded-full text-sm border ${i === 0 ? 'bg-white text-black border-white' : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30'}`}
              >
                {tab}
              </button>
            ))}
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={setActiveProject} 
              />
            ))}
         </div>

         <div className="mt-20 border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>© 2024 Visionary Collection. All rights reserved.</p>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
               <Layers size={14} />
               <span>Built with React, Tailwind & Lucide</span>
            </div>
         </div>
      </main>
    </div>
  );
};

export default App;