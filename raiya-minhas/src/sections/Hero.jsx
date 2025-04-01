import React, { useEffect, useState } from "react";
import { X, Minus, Plus, Folder, ChevronDown } from "lucide-react";

function Hero() {
  const [showChevron, setShowChevron] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowChevron(window.scrollY < 20); // hide when user scrolls down a bit
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-screen flex items-center justify-center relative">
      {/* Terminal Window */}
      <div className="w-[90vw] max-w-2xl rounded-md shadow-lg border border-black bg-white">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 py-2 rounded-t-md bg-gradient-to-r from-orange-200 via-pink-300 to-blue-300">
          <div className="flex space-x-2 items-center">
            <div className="w-4 h-4 rounded-full bg-white border border-black flex items-center justify-center">
              <X size={10} strokeWidth={3} className="text-black" />
            </div>
            <div className="w-4 h-4 rounded-full bg-white border border-black flex items-center justify-center">
              <Minus size={10} strokeWidth={3} className="text-black" />
            </div>
            <div className="w-4 h-4 rounded-full bg-white border border-black flex items-center justify-center">
              <Plus size={10} strokeWidth={3} className="text-black" />
            </div>
          </div>

          <div className="flex items-center space-x-2 text-black text-sm font-medium">
            <Folder size={14} className="stroke-black" />
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
> Computer Engineering @ University of Waterloo`}
          <span className="ml-1 bg-black w-[6px] h-[1em] inline-block animate-blink align-middle" />
        </div>
      </div>

      {/* Bouncing Chevron (visible only when not scrolled) */}
      {showChevron && (
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce">
          <ChevronDown size={28} strokeWidth={1.5} />
        </div>
      )}

      {/* Custom Animations */}
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
