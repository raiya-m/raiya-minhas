import { useEffect, useState } from "react";
import { Home, Book} from "lucide-react";
import { Send } from 'lucide-react';

const icons = [
  { name: "Home", icon: <Home strokeWidth={1.5} />, href: "#" },
  { name: "Send", icon: <Send strokeWidth={1.5} />, href: "mailto:raiya.minhas@uwaterloo.ca" },

];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed z-50 transition-all duration-300 ${
        isScrolled
          ? "top-1/2 -translate-y-1/2 left-4 flex-col h-[420px] w-16"
          : "top-4 left-1/2 -translate-x-1/2 flex-row w-fit px-4 h-13.5"
      } flex items-center justify-between bg-gradient-to-r from-orange-200 via-pink-300 to-blue-300 rounded-full shadow-xl`}
    >
      {icons.map((item, idx) => (
        <a
          key={idx}
          href={item.href}
          className="group relative flex items-center justify-center m-1 p-3 rounded-full transition-all duration-300 hover:scale-125 hover:bg-white/20"
        >
          <div className="text-black group-hover:text-white">{item.icon}</div>
          <span className="absolute -top-6 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {item.name}
          </span>
        </a>
      ))}
    </div>
  );
}

