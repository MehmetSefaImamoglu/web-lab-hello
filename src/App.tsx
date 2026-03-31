import { useState } from "react";

// Layout
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Sections
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import ProjectList from "./components/sections/ProjectList";
import ContactSection from "./components/sections/ContactSection";

/**
 * App — Orkestra şefi component
 *
 * LAB-6 mimarisine göre bu component yalnızca bölümleri bir araya getirir.
 * Her bölüm kendi state'ini ve iş mantığını kendi içinde yönetir.
 * App sadece dark mode toggle'ı ve sayfa iskeleti ile ilgilenir.
 */
export default function App() {
  // Dark mode state'i — HTML kök elementine 'dark' sınıfı ekler/çıkarır
  const [isDark, setIsDark] = useState(false);

  function toggleDarkMode() {
    const root = document.documentElement;
    root.classList.toggle("dark");
    setIsDark((prev) => !prev);
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Skip link — klavye kullanıcıları için erişilebilirlik */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white px-4 py-2 z-[100] rounded-br-lg text-sm font-medium"
      >
        Ana içeriğe git
      </a>

      {/* Dark mode toggle — sabit konumda */}
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-6 right-6 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-3 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label={isDark ? "Açık moda geç" : "Karanlık moda geç"}
        title={isDark ? "Açık mod" : "Karanlık mod"}
      >
        <span className="block text-xl leading-none" aria-hidden="true">
          {isDark ? "☀️" : "🌙"}
        </span>
      </button>

      {/* Sticky navigasyon */}
      <Header />

      {/* Ana içerik — her section kendi id'si ile smooth scroll hedefi */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <ProjectList />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
