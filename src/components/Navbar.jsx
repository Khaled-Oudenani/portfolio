// import { useLocation } from "react-router-dom";
// import { useState } from "react";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Projects", path: "/projects" },
//     { name: "Contact", path: "/contact" },
//   ];

//   const isActive = (path) => location.pathname === path;

//   return (
//     <nav className="fixed z-10 w-full border-b-2 border-gray-900 dark:border-gray-50 dark:bg-gray-800/50 bg-white/50">
//       <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
//         <div className="flex justify-between items-center py-4">
//           {/* Logo Section */}
//           <div className="flex items-center gap-3">
//             <div className="w-7 h-7 bg-gradient-to-t from-blue-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
//               K
//             </div>
//             <h1 className="text-lg sm:text-xl font-bold">
//               <i>KHALED OUDENANI</i>
//             </h1>
//           </div>

//           {/* Desktop Navigation */}
//           <ul className="hidden md:flex flex-row gap-8 items-center">
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <a
//                   href={link.path}
//                   className={`text-base font-medium transition-colors duration-300 hover:text-blue-600 ${
//                     isActive(link.path)
//                       ? "text-blue-400 border-b-2 border-blue-700 pb-1"
//                       : "text-gray-300"
//                   }`}
//                 >
//                   {link.name}
//                 </a>
//               </li>
//             ))}
//           </ul>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {isMenuOpen ? (
//               <X className="w-6 h-6 text-gray-300" />
//             ) : (
//               <Menu className="w-6 h-6 text-gray-300" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden pb-4 animate-slideDown">
//             <ul className="flex flex-col gap-4">
//               {navLinks.map((link) => (
//                 <li key={link.name}>
//                   <a
//                     href={link.path}
//                     onClick={() => setIsMenuOpen(false)}
//                     className={`block px-4 py-2 rounded-lg text-base font-medium transition-colors duration-300 ${
//                       isActive(link.path)
//                         ? "bg-blue-50 text-blue-600"
//                         : "text-gray-200 hover:bg-gray-50"
//                     }`}
//                   >
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>

//       <style>{`
//         @keyframes slideDown {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-slideDown {
//           animation: slideDown 0.3s ease-out;
//         }
//       `}</style>
//     </nav>
//   );
// };

// export default Navbar;

import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Theme state: 'light' | 'dark'
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored) return stored;
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      )
        return "dark";
    } catch {
      /* ignore */
    }
    return "light";
  });

  useEffect(() => {
    try {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed z-10 w-full border-b-2 border-gray-900 dark:border-gray-50 dark:bg-gray-900/60">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-gradient-to-t from-blue-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
              K
            </div>
            <h1 className="text-lg sm:text-xl font-bold text-white">
              <i>KHALED OUDENANI</i>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex flex-row gap-8 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  className={`text-base font-medium transition-colors duration-300 hover:text-blue-400 ${
                    isActive(link.path)
                      ? "text-cyan-500 border-b-2 border-amber-100 pb-1"
                      : "text-gray-200"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle (visible on all sizes) */}
          <button
            onClick={toggleTheme}
            className="mr-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
            title={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-900" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-slideDown">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-2 rounded-lg text-base font-medium transition-colors duration-300 ${
                      isActive(link.path)
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
