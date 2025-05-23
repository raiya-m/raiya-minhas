import React, { useEffect, useState } from "react";
import { X, Minus, Plus, Folder, ChevronsDown } from "lucide-react";

function Home() {
  const [showChevron, setShowChevron] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowChevron(window.scrollY < 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const terminalOutput = `┌─[raiya@dev-machine] - [~/home]
└─$ ./start.sh

> Hello, World! I am Raiya.
> Toronto, ON
> Computer Engineering @ University of Waterloo`;

  return (
    <div className="h-screen flex flex-col items-start sm:items-center justify-start sm:justify-center relative overflow-x-hidden pt-48 sm:pt-0">
      {/* Terminal Window */}
      <div className="w-[80vw] max-w-2xl rounded-md shadow-lg border border-black bg-white">
        
        {/* Top Bar with Proper Border */}
        <div className="relative">
          <div className="flex items-center justify-between px-4 py-2 rounded-t-md bg-gradient-to-r from-sky-100 via-indigo-200 to-violet-200">
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

            <div className="flex items-center space-x-2 text-black text-sm font-medium leading-tight">
              <Folder size={15} className="stroke-black align-middle" />
              <span className="align-middle">raiya-minhas</span>
            </div>

            <div className="w-3" />
          </div>

          {/* This is the solid black line below top bar */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-black" />
        </div>

        {/* Terminal Content */}
        <div className="px-6 py-4 font-mono text-black text-sm whitespace-pre-wrap text-left break-words">
          <code>{terminalOutput}</code>
        </div>
      </div>

      {/* Bouncing Chevron */}
      {showChevron && (
        <div className="absolute bottom-40 sm:bottom-15 md:bottom-28 lg:bottom-16 left-1/2 -translate-x-1/2 text-gray-400 animate-bounce">
          <ChevronsDown size={28} strokeWidth={1.5} className="scale-x-130" />
        </div>
      )}
    </div>
  );
}

export default Home;
