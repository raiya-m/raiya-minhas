import { useEffect, useState } from "react";
import { Home, Send } from "lucide-react";

const icons = [
  { icon: <Home strokeWidth={1.25} />, href: "#hero" },
  { icon: <Send strokeWidth={1.25} />, href: "mailto:raiya.minhas@uwaterloo.ca" },
  { icon: <img src="github.png"/>, href: "https://github.com/raiya-m"},
  { icon: <img src="linkedin.png"/>, href: "https://www.linkedin.com/in/raiyaminhas"},

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
      className={`fixed z-50 transition-all duration-300 flex shadow-xl rounded-full
        ${
          isScrolled
            ? "top-[calc(50vh-58px)] left-4 flex-col items-center py-3 px-2 gap-3 w-14 bg-gradient-to-b from-orange-200 via-pink-300 to-blue-300"
            : "top-4 left-1/2 -translate-x-1/2 flex-row items-center px-6 py-2 gap-4 bg-gradient-to-r from-orange-200 via-pink-300 to-blue-300"
        }`}
    >
      {/* Icon Buttons */}
      {icons.map((item, idx) => (
        <a
          key={idx}
          href={item.href}
          className="group relative flex items-center justify-center p-2 rounded-full transition-all duration-200 hover:scale-110 hover:bg-white/20"
        >
          <div className="text-black">{item.icon}</div>
        </a>
      ))}

      {/* Text Links (horizontal only) */}
      {!isScrolled && (
        <div className="ml-4 flex gap-2 text-black font-medium text-sm">
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:underline transition-colors duration-150"
            >
              {link.label}
              {idx < navLinks.length - 1 && <span className="mx-2">/</span>}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
