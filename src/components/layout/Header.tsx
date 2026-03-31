import { useState } from "react";

// Navigasyon bağlantıları — tek yerde tanımla, map ile render et
const navLinks = [
  { href: "#hero", label: "Ana Sayfa" },
  { href: "#about", label: "Hakkımda" },
  { href: "#skills", label: "Yetenekler" },
  { href: "#projects", label: "Projeler" },
  { href: "#contact", label: "İletişim" },
];

export default function Header() {
  // Hamburger menü state'i — yalnızca mobile görünür
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <nav
        className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between"
        aria-label="Ana navigasyon"
      >
        {/* Logo / Site adı */}
        <a
          href="#hero"
          className="text-xl font-bold text-blue-600 dark:text-blue-400 tracking-tight hover:text-blue-700 transition-colors"
        >
          Sefa İmamoğlu
        </a>

        {/* Desktop navigasyon — md ve üzeri ekranlarda görünür */}
        <ul className="hidden md:flex gap-1 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-2 rounded-md text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger butonu — yalnızca mobile görünür */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {/* Hamburger çizgileri */}
          <div className="w-5 h-5 flex flex-col justify-between py-0.5">
            <span
              className={`block h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[9px]" : ""}`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menü — menuOpen true ise görünür */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
        >
          <ul className="px-4 py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)} // Tıklayınca menüyü kapat
                  className="block py-3 px-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 border-b border-gray-100 dark:border-gray-800 last:border-0 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
