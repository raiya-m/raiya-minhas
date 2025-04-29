import React from "react";
import { X, Minus, Plus } from "lucide-react";

function Aboutheader() {
  return (
    <div className="w-[80vw] max-w-2xl rounded-md shadow-md border border-black bg-white">
      
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
          <div className="w-6" />
        </div>

        {/* This is the solid black line below top bar */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-black" />
      </div>

      {/* Terminal Content */}
      <div className="px-6 py-3 font-mono text-black whitespace-pre-wrap text-left text-[15.5px]">
        <pre>
          <code>
            {`About Me`}
          </code>
        </pre>
      </div>
    </div>
  );
}

export default Aboutheader;
