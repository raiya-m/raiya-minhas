import { useEffect, useState } from "react";
import { Home, Send } from "lucide-react";

const icons = [
  { icon: <Home className="h-[20px] w-[20px]" strokeWidth={1.75} />, href: "#hero" },
  { icon: <Send className="h-[20px] w-[20px] mr-[0.9px]" strokeWidth={1.75} />, href: "mailto:raiya.minhas@uwaterloo.ca" },
  {
    icon: (
      <img
        src="github.png"
        alt="GitHub"
        className="w-[20px] h-[20px] min-w-[20px] min-h-[20px] object-contain mr-[0.8px]"
      />
    ),
    href: "https://github.com/raiya-m",
    external: true,
  },
  {
    icon: (
      <img
        src="linkedin.png"
        alt="LinkedIn"
        className="w-[20px] h-[20px] min-w-[20px] min-h-[20px] object-contain"
      />
    ),
    href: "https://www.linkedin.com/in/raiyaminhas",
    external: true,
  },
];

const navLinks = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" }
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
      className={`fixed z-50 transition-[top,left,transform] duration-300 ease-in-out
        bg-gradient-to-b from-sky-100 via-indigo-200 to-violet-200
        shadow-xl
        ${
          isScrolled
            ? "flex flex-col items-center gap-3 p-2 w-14 left-4 top-1/2 -translate-y-1/2 rounded-full"
            : "flex flex-row items-center justify-center gap-3 px-4 py-2 left-1/2 top-4 -translate-x-1/2 rounded-full bg-gradient-to-r max-w-full whitespace-nowrap overflow-hidden"
        }`}
    >
      {/* Icon links */}
      <div className={`flex ${isScrolled ? "flex-col" : "flex-row"} items-center gap-4`}>
        {icons.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className="flex items-center justify-center p-1 rounded-full transition-transform duration-150 hover:scale-115 hover:bg-white/20"
          >
            <div className="text-black">{item.icon}</div>
          </a>
        ))}
      </div>

      {/* Text nav links */}
      {!isScrolled && (
        <div className="flex items-center gap-1 ml-0 sm:ml-3 text-black text-sm whitespace-nowrap text-[11.5px] sm:text-[14px]">
          {navLinks.map((link, idx) => (
            <div key={link.label} className="flex items-center">
              <a
                href={link.href}
                className="hover:scale-106 transition-transform duration-100"
              >
                {link.label}
              </a>
              {idx < navLinks.length - 1 && (
                <span className="mx-1 font-extralight">/</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
