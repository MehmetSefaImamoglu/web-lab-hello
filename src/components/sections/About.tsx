// About Bölümü — hakkımda bilgisi ve beceri etiketleri
const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Git",
  "REST API",
  "Vite",
  "Node.js",
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-white dark:bg-gray-950"
    >
      <div className="max-w-5xl mx-auto">
        {/* Başlık */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Hakkımda
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* İçerik — iki sütun */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Profil görseli */}
          <figure className="shrink-0 text-center">
            <img
              src="/sefa.jpeg"
              alt="Sefa İmamoğlu'nun profil fotoğrafı"
              className="w-44 h-44 rounded-full object-cover shadow-xl border-4 border-blue-600 dark:border-blue-400"
            />
            <figcaption className="text-sm text-gray-500 dark:text-gray-400 mt-2 italic">
              Sefa İmamoğlu
            </figcaption>
          </figure>

          {/* Bio metni */}
          <div className="flex-1">
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-lg">
              Merhaba! Yazılım Mühendisliği öğrencisiyim ve modern web
              teknolojilerine tutkuyla bağlıyım. Temiz, erişilebilir ve
              performanslı kod yazmayı öncelik olarak görüyorum.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Özellikle React ekosistemi ve TypeScript ile sağlam frontend mimarileri
              kurmaktan keyif alıyorum. Her projede kullanıcı deneyimini ve kod
              kalitesini en üst düzeyde tutmaya çalışıyorum.
            </p>

            {/* Beceri etiketleri */}
            <div>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                Teknoloji Stacki
              </h3>
              <ul
                className="flex flex-wrap gap-2"
                role="list"
                aria-label="Beceri etiketleri"
              >
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
