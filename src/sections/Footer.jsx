import React from "react";

function Footer() {
  return (
    <footer className="w-full mt-10 px-6 overflow-x-hidden items-center">
      <div className="w-[70vw] max-w-2xl mx-auto">
        {/* Divider line */}
        <div className="border-t border-gray-300 w-full" />

        {/* Footer text */}
        <div className="text-center text-sm text-gray-500 mt-4 mb-6">
        {"2025. Raiya Minhas. Compiled with 🩶 and .jsx"}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
