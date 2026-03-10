import { useState } from 'react'
import Button from './components/Button'
import Input from './components/Input'
import Card from './components/Card'
import Alert from './components/Alert'
import UIKit from './pages/UIKit'

function App() {
  // Dark mode state — HTML'e .dark class'ı ekler/çıkarır
  const [isDark, setIsDark] = useState(false)
  // UIKit sayfasını göster/gizle
  const [showUIKit, setShowUIKit] = useState(false)
  // Alert kapatma
  const [showAlert, setShowAlert] = useState(true)

  const toggleDark = () => {
    const html = document.documentElement
    html.classList.toggle('dark')
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">

      {/* ===== SKIP LINK — Erişilebilirlik (LAB-2'den) ===== */}
      <a
        href="#main-content"
        className="skip-link absolute -top-full left-0 bg-blue-800 text-white px-4 py-2 z-50 focus:top-0 rounded-br-lg"
      >
        Ana içeriğe atla
      </a>

      {/* ===== DARK MODE TOGGLE BUTONU ===== */}
      <button
        onClick={toggleDark}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2.5 rounded-full shadow-lg hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Tema değiştir"
      >
        {/* Açık temada: ay ikonu; karanlık temada: güneş ikonu */}
        <span className="dark:hidden text-lg">🌙</span>
        <span className="hidden dark:inline text-lg">☀️</span>
      </button>

      {/* ===== HEADER — Flexbox ile sticky navigasyon ===== */}
      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">

          {/* Site başlığı / logo */}
          <span className="text-xl font-bold text-blue-800 dark:text-blue-300 tracking-tight">
            Sefa İmamoğlu
          </span>

          {/* Navigasyon */}
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-1">
              <li>
                <a href="#hakkimda" className="px-3 py-1.5 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Hakkımda
                </a>
              </li>
              <li>
                <a href="#projeler" className="px-3 py-1.5 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Projeler
                </a>
              </li>
              <li>
                <a href="#iletisim" className="px-3 py-1.5 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">
                  İletişim
                </a>
              </li>
              {/* UI Kit sekme butonu */}
              <li>
                <button
                  onClick={() => setShowUIKit(!showUIKit)}
                  className="px-3 py-1.5 rounded-md text-sm bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300 hover:bg-violet-200 dark:hover:bg-violet-800 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 font-medium"
                >
                  {showUIKit ? '← Portföy' : '🎨 UI Kit'}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* ===== UI KIT SAYFASI (toggle ile açılır) ===== */}
      {showUIKit ? (
        <UIKit />
      ) : (
        <main id="main-content">

          {/* === HAKKIMDA === */}
          <section id="hakkimda" className="py-16 px-4 bg-white dark:bg-gray-950">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">

              {/* Profil fotoğrafı */}
              <figure className="shrink-0">
                <img
                  src="/sefa.jpeg"
                  alt="Sefa İmamoğlu'nun profil fotoğrafı"
                  className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-blue-800 dark:border-blue-400"
                />
                <figcaption className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2 italic">
                  Sefa İmamoğlu
                </figcaption>
              </figure>

              {/* Metin ve beceriler */}
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Hakkımda
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  Merhaba! Ben Sefa. Yazılım Mühendisliği okuyorum.
                  Web teknolojilerine ilgi duyuyorum ve modern arayüzler tasarlamayı,
                  geliştirmeyi seviyorum.
                </p>

                {/* Beceri etiketleri — Flexbox toolbar */}
                <ul className="flex flex-wrap gap-2 justify-center md:justify-start" role="list" aria-label="Beceri etiketleri">
                  {['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Tailwind', 'Git'].map((skill) => (
                    <li
                      key={skill}
                      className="bg-blue-800 dark:bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* === PROJELERİM === */}
          <section id="projeler" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
                Projelerim
              </h2>

              {/* Mobil: 1 sütun | Tablet: 2 sütun | Masaüstü: 3 sütun */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                <Card
                  variant="elevated"
                  title="Web LAB-1 Projesi"
                  image="https://placehold.co/600x300/1E3A8A/FFFFFF?text=Web+LAB+1"
                  imageAlt="Web LAB-1 projesinin ekran görüntüsü"
                  footer={
                    <div className="flex gap-2 flex-wrap">
                      {['React', 'TypeScript', 'Vite'].map(t => (
                        <span key={t} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-0.5 rounded-full">{t}</span>
                      ))}
                    </div>
                  }
                >
                  Vite + React + TypeScript ile oluşturulan kişisel tanıtım sayfası.
                </Card>

                <Card
                  variant="elevated"
                  title="Kişisel Portföy (LAB-2)"
                  image="https://placehold.co/600x300/7C3AED/FFFFFF?text=Portföy+Sayfası"
                  imageAlt="Kişisel portföy sayfasının ekran görüntüsü"
                  footer={
                    <div className="flex gap-2 flex-wrap">
                      {['HTML5', 'CSS3', 'a11y'].map(t => (
                        <span key={t} className="bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-200 text-xs px-2 py-0.5 rounded-full">{t}</span>
                      ))}
                    </div>
                  }
                >
                  Semantik HTML5 ve erişilebilirlik ilkeleri ile oluşturulan portföy sayfası.
                </Card>

                <Card
                  variant="elevated"
                  title="Responsive Layout (LAB-3)"
                  image="https://placehold.co/600x300/2563EB/FFFFFF?text=Responsive+Layout"
                  imageAlt="Responsive layout projesinin ekran görüntüsü"
                  footer={
                    <div className="flex gap-2 flex-wrap">
                      {['CSS Grid', 'Flexbox', 'Mobile-First'].map(t => (
                        <span key={t} className="bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200 text-xs px-2 py-0.5 rounded-full">{t}</span>
                      ))}
                    </div>
                  }
                >
                  Mobile-first yaklaşım, CSS Grid ve Flexbox ile 3 breakpoint'te çalışan portföy.
                </Card>

              </div>
            </div>
          </section>

          {/* === İLETİŞİM === */}
          <section id="iletisim" className="py-16 px-4 bg-white dark:bg-gray-950">
            <div className="max-w-lg mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
                İletişim
              </h2>

              {/* Örnek Alert — bilgilendirme */}
              {showAlert && (
                <div className="mb-6">
                  <Alert
                    variant="info"
                    title="Bilgi"
                    dismissible
                    onDismiss={() => setShowAlert(false)}
                  >
                    Bu form şu an demo amaçlıdır. Gerçek bir backend'e bağlı değil.
                  </Alert>
                </div>
              )}

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <fieldset className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 space-y-4">
                  <legend className="text-lg font-bold text-blue-800 dark:text-blue-300 px-2">
                    İletişim Formu
                  </legend>

                  {/* Input component'leri */}
                  <Input id="name" label="Ad Soyad" placeholder="Örn. Ahmet Yılmaz" required />
                  <Input id="email" label="E-posta" type="email" placeholder="ad@mail.com" helpText="Spam göndermiyoruz, söz." required />

                  <div className="space-y-1">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Konu
                    </label>
                    <select
                      id="subject"
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    >
                      <option value="">-- Seçiniz --</option>
                      <option value="is">İş Teklifi</option>
                      <option value="soru">Soru</option>
                      <option value="oneri">Öneri</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-vertical"
                    />
                  </div>

                  {/* Button component */}
                  <Button variant="primary" size="lg" type="submit" className="w-full sm:w-auto">
                    Gönder
                  </Button>
                </fieldset>
              </form>
            </div>
          </section>

          {/* ===== FOOTER ===== */}
          <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm">
            <p>© 2025 Sefa İmamoğlu. Tüm hakları saklıdır.</p>
            <p className="mt-1 text-xs">
              Yapıldı: HTML5 · CSS3 · React · TypeScript · Tailwind CSS
            </p>
          </footer>

        </main>
      )}
    </div>
  )
}

export default App
