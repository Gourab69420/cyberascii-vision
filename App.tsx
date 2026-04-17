import React, { useState } from 'react';
import { AsciiCanvas } from './components/AsciiCanvas';
import { ControlPanel } from './components/ControlPanel';
import { AsciiOptions } from './types';
import { Terminal } from 'lucide-react';

const App: React.FC = () => {
  const [options, setOptions] = useState<AsciiOptions>({
    fontSize: 12,
    brightness: 1.0,
    contrast: 1.0,
    colorMode: 'matrix',
    density: 'complex',
    resolution: 0.2, // Factor of window size
  });

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex flex-col">
      {/* Header / HUD */}
      <header className="absolute top-0 left-0 w-full p-4 z-20 flex justify-between items-center pointer-events-none bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center gap-2 text-green-500 pointer-events-auto">
          <Terminal className="w-6 h-6 animate-pulse" />
          <h1 className="text-xl font-bold tracking-widest uppercase">CyberAscii<span className="text-xs ml-1 opacity-70">v1.0</span></h1>
        </div>
        <div className="text-green-800 text-xs flex gap-4 font-mono">
          <span>SYS.STATUS: ONLINE</span>
          <span>CAM.FEED: ACTIVE</span>
          <span className="animate-pulse">REC ●</span>
        </div>
      </header>

      {/* Main Canvas Area */}
      <main className="flex-grow relative z-10">
        <AsciiCanvas options={options} />
      </main>

      {/* Controls */}
      <ControlPanel options={options} setOptions={setOptions} />

      {/* Decorative overlaid scanlines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
    </div>
  );
};

export default App;