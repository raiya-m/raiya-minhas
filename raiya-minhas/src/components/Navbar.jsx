import { useEffect, useState } from "react";
import { Home, Send } from "lucide-react";

const icons = [
  { icon: <Home className="h-[22px] w-[22px] object-contain" strokeWidth={1.75} />, href: "#hero" },
  { icon: <Send className="h-[22px] w-[22px] object-contain" strokeWidth={1.75} />, href: "mailto:raiya.minhas@uwaterloo.ca" },
  {
    icon: (
      <img
        src="github.png"
        alt="GitHub"
        className="w-[24px] h-[24px] object-contain"
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
        className="w-[24px] h-[24px] object-contain"
      />
    ),
    href: "https://www.linkedin.com/in/raiyaminhas",
    external: true,
  },
];

const navLinks = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "blog", href: "#blog" },
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
      className={`fixed z-50 flex rounded-full shadow-xl
        transition-[top,left,transform] duration-320 ease-in-out
        bg-gradient-to-b from-orange-200 via-pink-300 to-blue-300
        ${
          isScrolled
            ? "flex-col items-center gap-3 p-2 w-14 left-4 top-1/2 -translate-y-1/2 translate-x-0"
            : "flex-row items-center gap-1 px-6 py-2 left-1/2 top-4 -translate-x-1/2 translate-y-0 bg-gradient-to-r"
        }`}
    >
      {icons.map((item, idx) => (
        <a
          key={idx}
          href={item.href}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noopener noreferrer" : undefined}
          className={`group relative flex items-center justify-center p-1 rounded-full transition-transform duration-150 hover:scale-110 hover:bg-white/20 ${
            idx === 1 ? "-ml-1" : ""
          }`}
        >
          <div className="text-black">{item.icon}</div>
        </a>
      ))}

      {!isScrolled && (
        <div className="ml-4 flex gap-2 text-black text-sm">
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:underline transition-colors duration-150"
            >
              {link.label}
              {idx < navLinks.length - 1 && <span className="mx-2 font-light">/</span>}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
