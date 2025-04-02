import React from "react";
import Blogheader from "../components/Blogheader";

function Blog() {
  return (
    <div
      id="about"
      className="px-6 pt-16 flex flex-col items-center justify-start bg-white"
    >
      <Blogheader />

      <div className="w-[90vw] max-w-2xl mt-4 md:mt-6 text-left text-black font-sans text-[17px] leading-relaxed">
        <p className="mb-4">
          RAIYA
        </p>
      </div>
    </div>
  );
}

export default Blog;
