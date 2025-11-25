import React, { useState } from 'react';
import { 
  Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, 
  Heart, Volume2, ListMusic, Mic2, Maximize2, Search,
  ChevronLeft, Settings, Mail, Shirt, FolderOpen, X
} from 'lucide-react';

const songs = [
  { id: 1, title: 'Space Song', artist: 'Beach House', album: 'Depression Cherry', time: '05:20', liked: false },
  { id: 2, title: 'Myth', artist: 'Beach House', album: 'Myth', time: '04:18', liked: false },
  { id: 3, title: 'Superstar', artist: 'Beach House', album: 'Once Twice Melody', time: '06:08', liked: true },
  { id: 4, title: 'Bluebird', artist: 'Beach House', album: 'Depression Cherry', time: '03:55', liked: false },
  { id: 5, title: 'Wildflower', artist: 'Beach House', album: 'Depression Cherry', time: '03:39', liked: false },
];

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSong, setCurrentSong] = useState(songs[2]);

  return (
    <div className="w-full h-screen bg-[#101012] text-gray-300 font-sans flex flex-col select-none overflow-hidden">
      {/* Top Bar */}
      <div className="h-14 flex items-center justify-between px-4 md:px-6 border-b border-[#232326]">
        <div className="flex items-center gap-4 md:gap-8 w-auto md:w-64">
           <div className="flex items-center gap-2 text-red-500 font-bold text-lg">
             <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white text-xs">♫</div>
             <span className="hidden md:inline">NetEase Cloud</span>
             <span className="md:hidden">Music</span>
           </div>
           <div className="hidden md:flex items-center gap-1 text-xs text-gray-500 hover:text-white cursor-pointer">
             History <ChevronLeft size={14} className="-rotate-90" />
           </div>
        </div>

        <div className="flex-1 max-w-xl hidden md:flex items-center gap-3">
          <div className="flex items-center gap-4 text-gray-400">
             <button className="w-6 h-6 bg-[#232326] rounded-full flex items-center justify-center"><ChevronLeft size={14}/></button>
          </div>
          <div className="relative flex-1">
             <Search className="absolute left-3 top-2.5 text-gray-500" size={16} />
             <input type="text" placeholder="Khalil Fong" className="w-full bg-[#232326] rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none" />
          </div>
          <button className="w-9 h-9 bg-[#232326] rounded-full flex items-center justify-center text-gray-400 hover:text-white"><Mic2 size={16} /></button>
        </div>

        <div className="flex items-center gap-3 md:gap-5 text-gray-500 w-auto md:w-64 justify-end">
           <img src="https://picsum.photos/30/30" className="rounded-full w-7 h-7" alt="User" />
           <span className="text-xs text-gray-300 hidden md:inline">Koala</span>
           <span className="text-[10px] bg-[#333] px-1 rounded text-red-400 hidden md:inline">VIP</span>
           <Mail size={18} className="hidden sm:block"/>
           <Settings size={18} className="hidden sm:block"/>
           <X size={18} />
        </div>
      </div>

      {/* Main Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-52 bg-[#101012] hidden md:flex flex-col py-4 gap-1 overflow-y-auto border-r border-[#232326]">
           {['Discover', 'Podcast', 'Live', 'Video', 'Friends'].map(item => (
             <div key={item} className="px-5 py-2 hover:bg-[#232326] cursor-pointer text-sm font-medium">{item}</div>
           ))}
           <div className="px-5 pt-4 pb-2 text-xs text-gray-500">MY MUSIC</div>
           {['Local Files', 'Downloads', 'Recent', 'Clouds'].map(item => (
             <div key={item} className="px-5 py-2 hover:bg-[#232326] cursor-pointer text-sm flex items-center gap-3">
                <ListMusic size={16} /> {item}
             </div>
           ))}
           <div className="px-5 pt-4 pb-2 text-xs text-gray-500 flex justify-between items-center">
             CREATED PLAYLISTS <span className="text-lg leading-none">+</span>
           </div>
           <div className="px-5 py-2 bg-[#232326] text-red-500 border-l-2 border-red-500 text-sm flex items-center gap-3 font-medium">
             <Heart size={16} fill="currentColor" /> My Favorites
           </div>
           {['Haze', 'Driving', 'Work Flow', 'Chill', 'Piano'].map(item => (
             <div key={item} className="px-5 py-2 hover:bg-[#232326] cursor-pointer text-sm flex items-center gap-3">
                <ListMusic size={16} /> {item}
             </div>
           ))}
        </div>

        {/* Content */}
        <div className="flex-1 bg-[#161618] p-4 md:p-8 overflow-y-auto">
           <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-8">
              <div className="w-48 h-48 mx-auto md:mx-0 rounded-lg overflow-hidden shadow-2xl relative group shrink-0">
                <img src="https://picsum.photos/400/400?grayscale" alt="Album Art" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
              </div>
              <div className="flex flex-col justify-end pb-2 text-center md:text-left">
                 <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                   <span className="border border-red-500 text-red-500 text-xs px-1 rounded">Album</span>
                   <h1 className="text-2xl md:text-3xl font-bold text-white">Once Twice Melody</h1>
                 </div>
                 <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-400 mb-6">
                    <img src="https://picsum.photos/20/20" className="rounded-full" />
                    <span className="text-blue-400 hover:underline cursor-pointer">Beach House</span>
                    <span className="mx-2 text-gray-600">2022-02-18</span>
                 </div>
                 <div className="flex gap-3 justify-center md:justify-start">
                   <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-full flex items-center gap-1 text-sm">
                     <Play size={16} fill="white" /> Play All
                   </button>
                   <button className="border border-gray-600 hover:border-white px-4 py-1.5 rounded-full text-sm">
                     Subscribed
                   </button>
                   <button className="border border-gray-600 hover:border-white px-4 py-1.5 rounded-full text-sm">
                     ...
                   </button>
                 </div>
              </div>
           </div>

           <div className="flex gap-6 border-b border-[#2b2b2e] pb-2 mb-4 text-sm">
              <span className="text-red-500 font-bold border-b-2 border-red-500 pb-2 -mb-2.5">Tracklist</span>
              <span className="cursor-pointer hover:text-white">Comments</span>
              <span className="cursor-pointer hover:text-white">Collectors</span>
           </div>

           <div className="space-y-0">
             <div className="flex text-xs text-gray-500 py-2 px-4">
               <span className="w-10">#</span>
               <span className="flex-1">TITLE</span>
               <span className="w-40 hidden md:block">ALBUM</span>
               <span className="w-16 text-right">TIME</span>
             </div>
             {songs.map((song, idx) => (
               <div 
                  key={song.id} 
                  onClick={() => setCurrentSong(song)}
                  className={`flex items-center text-sm py-3 px-4 rounded hover:bg-[#232326] group cursor-pointer ${currentSong.id === song.id ? 'bg-[#232326]' : ''}`}
               >
                 <span className="w-10 text-gray-500 text-xs flex items-center">
                    {currentSong.id === song.id ? <div className="text-red-500 text-[10px]">Playing</div> : (idx + 1).toString().padStart(2, '0')}
                 </span>
                 <div className="flex-1 flex flex-col justify-center">
                    <span className={`font-medium ${currentSong.id === song.id ? 'text-red-500' : 'text-gray-200'}`}>{song.title}</span>
                    {currentSong.id === song.id && <span className="text-[10px] text-yellow-600 border border-yellow-600 px-1 rounded w-fit scale-90 origin-left mt-1">SQ</span>}
                 </div>
                 <div className="w-40 text-gray-500 text-xs hidden md:block">{song.album}</div>
                 <div className="w-16 text-right text-gray-500 text-xs flex items-center justify-end gap-3">
                    <Heart size={14} className={`cursor-pointer ${song.liked ? 'text-red-500 fill-red-500' : 'hover:text-white'}`} />
                    <span className="hidden sm:inline">{song.time}</span>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </div>

      {/* Player Bar */}
      <div className="h-20 bg-[#212124] border-t border-[#333] flex items-center justify-between px-4 z-50">
         <div className="flex items-center gap-3 w-auto md:w-64">
           <img src={`https://picsum.photos/seed/${currentSong.id}/50/50`} className="rounded shadow-lg w-10 h-10 md:w-12 md:h-12" alt="Cover" />
           <div className="flex flex-col">
             <span className="text-sm text-gray-200 truncate max-w-[100px] md:max-w-none">{currentSong.title}</span>
             <span className="text-xs text-gray-500">{currentSong.artist}</span>
           </div>
           <Heart size={16} className={`ml-2 cursor-pointer hidden sm:block ${currentSong.liked ? 'text-red-500 fill-red-500' : 'text-gray-500 hover:text-white'}`} />
         </div>

         <div className="flex flex-col items-center flex-1 max-w-2xl gap-2 px-2">
            <div className="flex items-center gap-6 text-gray-400">
               <Shuffle size={16} className="cursor-pointer hover:text-white hidden sm:block" />
               <SkipBack size={20} className="cursor-pointer hover:text-white" />
               <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-9 h-9 bg-[#333] hover:bg-white hover:text-black rounded-full flex items-center justify-center text-white transition-all"
               >
                 {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" className="ml-1"/>}
               </button>
               <SkipForward size={20} className="cursor-pointer hover:text-white" />
               <Repeat size={16} className="cursor-pointer hover:text-white hidden sm:block" />
            </div>
            <div className="w-full hidden sm:flex items-center gap-3 text-xs text-gray-500 font-mono">
               <span>04:40</span>
               <div className="flex-1 h-1 bg-[#333] rounded-full relative group cursor-pointer">
                  <div className="absolute left-0 top-0 h-full bg-red-600 w-[70%] rounded-full"></div>
                  <div className="absolute left-[70%] top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 shadow"></div>
               </div>
               <span>{currentSong.time}</span>
            </div>
         </div>

         <div className="flex items-center gap-4 text-gray-500 w-auto md:w-64 justify-end">
            <div className="border border-gray-600 rounded px-1 text-[10px] hidden lg:block">Hi-Res</div>
            <Mic2 size={18} className="cursor-pointer hover:text-white hidden md:block" />
            <div className="items-center gap-2 w-20 group hidden md:flex">
               <Volume2 size={18} className="cursor-pointer hover:text-white" />
               <div className="h-1 bg-red-500 w-full rounded-full"></div>
            </div>
            <ListMusic size={18} className="cursor-pointer hover:text-white" />
         </div>
      </div>
    </div>
  );
};