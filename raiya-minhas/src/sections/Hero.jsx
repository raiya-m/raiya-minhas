import React from "react";
import { X, Minus, Plus, Folder } from "lucide-react";

function Hero() {
  return (
    <div className="h-screen flex items-center justify-center">
      {/* Terminal Window */}
      <div className="w-[90vw] max-w-2xl rounded-md shadow-lg border border-black bg-white">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 py-2 rounded-t-md bg-gradient-to-r from-orange-200 via-pink-300 to-blue-300">
          <div className="flex space-x-2 items-center">
            {/* Custom grey buttons with icons */}
            <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
              <X size={10} className="text-black" />
            </div>
            <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
              <Minus size={10} className="text-black" />
            </div>
            <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
              <Plus size={10} className="text-black" />
            </div>
          </div>

          {/* Folder name with icon */}
          <div className="flex items-center space-x-2 text-black text-sm font-medium">
            <Folder size={14} className="text-black" />
            <span>raiya-minhas</span>
          </div>

          <div className="w-6" /> {/* Spacer */}
        </div>

        {/* Terminal Content */}
        <div className="px-6 py-4 font-mono text-black text-sm whitespace-pre-wrap text-left">
{`┌─[raiya@dev-machine] - [~/home]
└─$ ./start.sh

> Hello, World! I am Raiya.
> Toronto, ON
> Computer Engineering @ University of Waterloo
> Compiling...build complete.`}
          <span className="ml-1 bg-black w-[8px] h-5 inline-block animate-blink align-baseline" />
        </div>
      </div>

      {/* Cursor Blink Animation */}
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 1s step-start infinite;
          }
        `}
      </style>
    </div>
  );
}

export default Hero;
