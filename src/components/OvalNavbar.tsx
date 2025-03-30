import { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BsDiscord, BsGithub, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { BiSolidBook } from 'react-icons/bi';
import { MdDarkMode } from 'react-icons/md';

const OvalNavbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    { icon: <AiFillHome size={24} />, link: '/' },
    { icon: <BiSolidBook size={24} />, link: '/docs' },
    { icon: <BsDiscord size={24} />, link: '/discord' },
    { icon: <BsGithub size={24} />, link: '/github' },
    { icon: <BsLinkedin size={24} />, link: '/linkedin' },
    { icon: <BsYoutube size={24} />, link: '/youtube' },
    { icon: <MdDarkMode size={24} />, link: '/theme' },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 
                    bg-gradient-to-r from-orange-400/80 via-pink-500/80 via-blue-500/80 to-purple-600/80
                    backdrop-blur-sm
                    rounded-full px-8 py-4 
                    shadow-lg shadow-black/5
                    transition-all duration-300 ease-in-out
                    hover:scale-105 hover:shadow-xl hover:shadow-black/10
                    border border-white/20">
      <ul className="flex items-center space-x-7">
        {navItems.map((item, index) => (
          <li key={index} className="relative group">
            <a
              href={item.link}
              className={`block p-2 rounded-full
                         transition-all duration-300 ease-in-out
                         group-hover:scale-125 group-hover:bg-white/10
                         ${activeIndex === index 
                           ? 'text-white scale-110' 
                           : 'text-white/80 hover:text-white'}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(index);
              }}
            >
              {item.icon}
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 
                            w-1 h-1 rounded-full bg-white scale-0 
                            transition-transform duration-300 ease-in-out
                            group-hover:scale-100" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default OvalNavbar; 