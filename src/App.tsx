import { useState, useEffect } from 'react'
import type { Project, Category, SortField, SortOrder } from './types/project'
import { fetchProjects } from './services/projectService'
import { applyFilters } from './utils/projectHelpers'
import Button from './components/Button'
import Input from './components/Input'
import Card from './components/Card'
import Alert from './components/Alert'
import UIKit from './pages/UIKit'

function App() {
  // ===== GLOBAL STATE =====
  const [isDark, setIsDark] = useState(false)
  const [showUIKit, setShowUIKit] = useState(false)
  const [showAlert, setShowAlert] = useState(true)

  // ===== LAB-5: PROJE STATE'LERİ =====
  const [projects, setProjects] = useState<Project[]>([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<Category | 'all'>('all')
  const [sortField, setSortField] = useState<SortField>('year')
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // ===== DARK MODE =====
  const toggleDark = () => {
    const html = document.documentElement
    html.classList.toggle('dark')
    setIsDark(!isDark)
  }

  // ===== LAB-5: VERİ ÇEKME (useEffect + async/await) =====
  useEffect(() => {
    // useEffect içinde doğrudan async callback kullanılamaz!
    // Bu yüzden iç fonksiyon tanımlayıp çağırıyoruz.
    async function loadProjects() {
      try {
        setLoading(true)
        setError(null)
        const data = await fetchProjects()
        setProjects(data)
      } catch (err) {
        // err instanceof Error kontrolü — TypeScript tip güvenliği
        setError(
          err instanceof Error ? err.message : 'Bilinmeyen bir hata oluştu'
        )
      } finally {
        // Her durumda çalışır — loading spinner'ı kapat
        setLoading(false)
      }
    }

    loadProjects()
  }, []) // Boş bağımlılık dizisi → yalnızca ilk render'da çalışır

  // ===== LAB-5: TÜRETİLMİŞ (DERIVED) VERİ =====
  // State değiştiğinde otomatik yeniden hesaplanır
  const filteredProjects = applyFilters(
    projects,
    search,
    category,
    sortField,
    sortOrder
  )

  const categories: (Category | 'all')[] = [
    'all',
    'frontend',
    'fullstack',
    'backend',
  ]

  const categoryLabels: Record<Category | 'all', string> = {
    all: 'Tümü',
    frontend: 'Frontend',
    fullstack: 'Fullstack',
    backend: 'Backend',
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

      {/* ===== DARK MODE TOGGLE ===== */}
      <button
        onClick={toggleDark}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2.5 rounded-full shadow-lg hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Tema değiştir"
      >
        <span className="dark:hidden text-lg">🌙</span>
        <span className="hidden dark:inline text-lg">☀️</span>
      </button>

      {/* ===== HEADER ===== */}
      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="text-xl font-bold text-blue-800 dark:text-blue-300 tracking-tight">
            Sefa İmamoğlu
          </span>
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

      {/* ===== UI KIT SAYFASI ===== */}
      {showUIKit ? (
        <UIKit />
      ) : (
        <main id="main-content">

          {/* === HAKKIMDA === */}
          <section id="hakkimda" className="py-16 px-4 bg-white dark:bg-gray-950">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
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
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Hakkımda
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  Merhaba! Ben Sefa. Yazılım Mühendisliği okuyorum.
                  Web teknolojilerine ilgi duyuyorum ve modern arayüzler tasarlamayı,
                  geliştirmeyi seviyorum.
                </p>
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

          {/* === PROJELERİM — LAB-5: JSON'dan dinamik veri === */}
          <section id="projeler" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
                Projelerim
              </h2>

              {/* HATA DURUMU */}
              {error && (
                <div className="mb-6">
                  <Alert variant="error" title="Veri Yükleme Hatası">
                    {error}
                  </Alert>
                </div>
              )}

              {/* FİLTRELER — LAB-5: State ile yönetilen UI kontrolleri */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8 items-start sm:items-center flex-wrap">

                {/* Arama input'u — onChange direkt state günceller */}
                <div className="w-full sm:w-64">
                  <Input
                    id="project-search"
                    placeholder="Proje, teknoloji ara..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>

                {/* Kategori filtreleri */}
                <div className="flex gap-2 flex-wrap" role="group" aria-label="Kategori filtresi">
                  {categories.map((cat) => (
                    <Button
                      key={cat}
                      variant={category === cat ? 'primary' : 'ghost'}
                      size="sm"
                      onClick={() => setCategory(cat)}
                    >
                      {categoryLabels[cat]}
                    </Button>
                  ))}
                </div>

                {/* Sıralama kontrolleri */}
                <div className="flex gap-2 items-center">
                  <select
                    id="sort-field"
                    value={sortField}
                    onChange={(e) => setSortField(e.target.value as SortField)}
                    className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Sıralama alanı"
                  >
                    <option value="year">Yıl</option>
                    <option value="title">Başlık</option>
                  </select>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSortOrder((o) => (o === 'asc' ? 'desc' : 'asc'))}
                    aria-label={`Sıralama yönü: ${sortOrder === 'asc' ? 'artan' : 'azalan'}`}
                  >
                    {sortOrder === 'asc' ? '↑ Artan' : '↓ Azalan'}
                  </Button>
                </div>
              </div>

              {/* YÜKLENİYOR DURUMU */}
              {loading && (
                <div className="flex justify-center items-center py-16">
                  <div className="flex flex-col items-center gap-3 text-gray-500 dark:text-gray-400">
                    <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" aria-hidden="true" />
                    <p>Projeler yükleniyor...</p>
                  </div>
                </div>
              )}

              {/* SONUÇ YOK DURUMU */}
              {!loading && !error && filteredProjects.length === 0 && (
                <div className="text-center py-16 text-gray-500 dark:text-gray-400">
                  <p className="text-4xl mb-3">🔍</p>
                  <p className="text-lg font-medium">Eşleşen proje bulunamadı.</p>
                  <p className="text-sm mt-1">Arama terimini veya kategoriyi değiştirmeyi dene.</p>
                </div>
              )}

              {/* PROJE LİSTESİ — LAB-5: filtered (türetilmiş) veriyi render et */}
              {!loading && !error && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.map((project) => (
                    <Card
                      key={project.id}   // key olarak index değil id kullan!
                      variant="elevated"
                      title={project.title}
                      image={project.image}
                      imageAlt={`${project.title} ekran görüntüsü`}
                      footer={
                        <div className="flex flex-wrap gap-1">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-0.5 rounded-full"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      }
                    >
                      <p className="text-sm mb-3">{project.description}</p>
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-xs text-gray-400 dark:text-gray-500">
                          {project.year} · {project.category}
                          {project.featured && (
                            <span className="ml-2 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 text-xs px-1.5 py-0.5 rounded-full">
                              ⭐ Öne Çıkan
                            </span>
                          )}
                        </p>
                        <div className="flex gap-2">
                          {project.demoUrl && (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                            >
                              Demo
                            </a>
                          )}
                          {project.sourceUrl && (
                            <a
                              href={project.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-gray-600 dark:text-gray-400 hover:underline"
                            >
                              Kaynak
                            </a>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}

              {/* SONUÇ SAYACI */}
              {!loading && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-6 text-center">
                  {filteredProjects.length} / {projects.length} proje gösteriliyor
                </p>
              )}
            </div>
          </section>

          {/* === İLETİŞİM === */}
          <section id="iletisim" className="py-16 px-4 bg-white dark:bg-gray-950">
            <div className="max-w-lg mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
                İletişim
              </h2>

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
