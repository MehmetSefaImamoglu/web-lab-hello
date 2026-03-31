// Hero Bölümü — landing page'in ilk göze çarpan kısmı
export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 px-4"
    >
      <div className="text-center max-w-3xl mx-auto">
        {/* Selamlama */}
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-3 text-lg tracking-wide">
          👋 Merhaba, ben
        </p>

        {/* İsim */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight tracking-tight">
          Sefa İmamoğlu
        </h1>

        {/* Başlık */}
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 font-light">
          Frontend Developer
        </p>
        <p className="text-base md:text-lg text-blue-700 dark:text-blue-400 font-semibold mb-8">
          React · TypeScript · Tailwind CSS
        </p>

        {/* Kısa açıklama */}
        <p className="text-gray-500 dark:text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
          Modern, erişilebilir ve performanslı web uygulamaları geliştiriyorum.
          Temiz koda ve harika kullanıcı deneyimlerine inanıyorum.
        </p>

        {/* CTA butonları */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-lg shadow-blue-200 dark:shadow-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            🚀 Projelerimi Gör
          </a>
          <a
            href="#contact"
            className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-8 py-3.5 rounded-xl font-semibold hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            📩 İletişime Geç
          </a>
        </div>

        {/* Aşağı kaydır oku */}
        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            aria-label="Aşağı kaydır"
            className="text-gray-400 dark:text-gray-600 hover:text-blue-500 transition-colors animate-bounce"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
