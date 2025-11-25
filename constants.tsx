import React from 'react';
import { Project } from './types';
import { MyOpsDashboard } from './components/MyOpsDashboard';
import { SaguniGaming } from './components/SaguniGaming';
import { MusicPlayer } from './components/MusicPlayer';
import { HeartHero } from './components/HeartHero';
import { Podpatch } from './components/Podpatch';
import { LuminaGallery } from './components/LuminaGallery';

export const PROJECTS: Project[] = [
  {
    id: 'podpatch',
    title: 'Podpatch',
    category: 'SaaS / Illustration',
    thumbnail: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1920&auto=format&fit=crop',
    description: 'Vibrant, high-conversion landing page for a podcasting service. Features floating glassmorphism cards and a bold gradient aesthetic.',
    component: <Podpatch />
  },
  {
    id: 'lumina',
    title: 'Lumina Gallery',
    category: 'Minimalist / Art',
    thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop',
    description: 'A bonus project showcasing ultra-clean, Swiss-style minimalist design with a masonry photography grid and subtle interactions.',
    component: <LuminaGallery />
  },
  {
    id: 'myops',
    title: 'MyOps Financial Dashboard',
    category: 'SaaS / Fintech',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    description: 'A sophisticated dark-themed financial tracking dashboard featuring real-time data visualization with Recharts and glassmorphism UI elements.',
    component: <MyOpsDashboard />
  },
  {
    id: 'saguni',
    title: 'Saguni Studios',
    category: 'Gaming / Mobile',
    thumbnail: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1974&auto=format&fit=crop',
    description: 'A high-energy, mobile-first gaming studio portfolio using neon aesthetics, grid backgrounds, and 3D-style layout simulation.',
    component: <SaguniGaming />
  },
  {
    id: 'music',
    title: 'Netease Cloud Music Clone',
    category: 'App / Media',
    thumbnail: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=1974&auto=format&fit=crop',
    description: 'A pixel-perfect recreation of a classic desktop music player interface with playlist management, player controls, and dark mode.',
    component: <MusicPlayer />
  },
  {
    id: 'hearthero',
    title: 'HeartHero Landing',
    category: 'Product / Typography',
    thumbnail: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop',
    description: 'A bold, typographic-driven landing page for a medical device. Features high-contrast design and an immersive monochrome aesthetic.',
    component: <HeartHero />
  }
];