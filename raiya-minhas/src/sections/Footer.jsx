import React from "react";

function Footer() {
  return (
    <footer className="w-full mt-20 px-6">
      <div className="w-[90vw] max-w-2xl mx-auto">
        {/* Divider line */}
        <div className="border-t border-gray-300 w-full" />

        {/* Footer text */}
        <div className="text-center text-sm text-gray-500 mt-4 mb-8">
        {"2025. Designed and built by Raiya Minhas. All bugs are features :)"}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
