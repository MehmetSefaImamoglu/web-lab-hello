// Footer — tüm sayfanın altında görünen basit footer bileşeni
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Üst satır — logo ve navigasyon */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
            Sefa İmamoğlu
          </span>
          <nav aria-label="Footer navigasyon">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-sm text-gray-500 dark:text-gray-400">
              {["#hero", "#about", "#skills", "#projects", "#contact"].map(
                (href, i) => {
                  const labels = [
                    "Ana Sayfa",
                    "Hakkımda",
                    "Yetenekler",
                    "Projeler",
                    "İletişim",
                  ];
                  return (
                    <li key={href}>
                      <a
                        href={href}
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {labels[i]}
                      </a>
                    </li>
                  );
                }
              )}
            </ul>
          </nav>
        </div>

        {/* Alt satır — telif ve stack */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>© {currentYear} Sefa İmamoğlu. Tüm hakları saklıdır.</p>
          <p className="mt-1 text-xs">
            React · TypeScript · Tailwind CSS · Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
