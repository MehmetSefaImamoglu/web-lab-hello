import ContactForm from "../forms/ContactForm";

// ContactSection — İletişim formunu saran layout bölümü
export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-2xl mx-auto">
        {/* Başlık */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            İletişim
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-md mx-auto">
            Bir projen mi var? Sorun mu var? Ya da sadece selam vermek mi
            istiyorsun? Mesaj gönder, geri döneyim.
          </p>
        </div>

        {/* Kart içinde form */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-8">
          <ContactForm />
        </div>

        {/* Alternatif iletişim yolları */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center text-sm text-gray-500 dark:text-gray-400">
          <a
            href="mailto:sefa@example.com"
            className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <span aria-hidden="true">📧</span>
            sefa@example.com
          </a>
          <a
            href="https://github.com/example"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <span aria-hidden="true">💻</span>
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/example"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <span aria-hidden="true">🔗</span>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
