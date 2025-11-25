import React from 'react';
import { ExternalLink, Play } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      className="group relative aspect-[4/3] bg-gray-900 rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-2xl"
      onClick={() => onClick(project)}
    >
      <img 
        src={project.thumbnail} 
        alt={project.title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
      
      <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-mono text-neon-green uppercase tracking-wider px-2 py-1 bg-neon-green/10 rounded border border-neon-green/20">
            {project.category}
          </span>
          <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
            <Play size={14} fill="currentColor" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
        <p className="text-sm text-gray-400 line-clamp-2">{project.description}</p>
      </div>
    </div>
  );
};
