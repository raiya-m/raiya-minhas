import React from "react";
import { X, Minus, Plus } from "lucide-react";

function Skillsheader() {
  return (
    <div className="w-[90vw] max-w-2xl rounded-md shadow-md border border-black bg-white">
      <div className="flex items-center justify-between px-4 py-2 rounded-t-md bg-gradient-to-r from-sky-100 via-indigo-200 to-violet-200 border-b border-black">
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

      <div className="px-6 py-3 font-mono text-black text-sm whitespace-pre-wrap text-left text-[15.5px]">
        <pre>
          <code>
            {`My Technical Skills`}
          </code>
        </pre>
      </div>
    </div>
  );
}

export default Skillsheader;