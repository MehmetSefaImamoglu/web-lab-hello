import { useState, useEffect, useMemo } from "react";
import type { Project, Category, SortField, SortOrder } from "../../types/project";
import { fetchProjects } from "../../services/projectService";
import { applyFilters } from "../../utils/projectHelpers";
import ProjectFilter from "../forms/ProjectFilter";

export default function ProjectList() {
  // --- State tanımları ---
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category | "all">("all");
  const [sortField, setSortField] = useState<SortField>("year");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // --- Veri çekme: yalnızca ilk render'da çalışır (boş bağımlılık dizisi) ---
  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Bilinmeyen bir hata oluştu"
        );
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // --- useMemo: Yalnızca bağımlılıklar değiştiğinde filtrelemeyi yeniden hesapla ---
  // Her render'da yeniden çalışmasını önler — büyük veri setlerinde kritik
  const filteredProjects = useMemo(
    () => applyFilters(projects, search, category, sortField, sortOrder),
    [projects, search, category, sortField, sortOrder]
  );

  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        {/* Başlık */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Projelerim
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
          <p className="text-gray-500 dark:text-gray-400 mt-4">
            Üzerinde çalıştığım ve geliştirdiğim projeler
          </p>
        </div>

        {/* Hata durumu */}
        {error && (
          <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-xl p-5 mb-8 flex items-start gap-3">
            <span className="text-xl shrink-0" aria-hidden="true">❌</span>
            <div>
              <p className="font-semibold text-red-800 dark:text-red-300 mb-1">
                Veri Yükleme Hatası
              </p>
              <p className="text-sm text-red-700 dark:text-red-400">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-2 text-sm text-red-600 dark:text-red-400 underline hover:no-underline"
              >
                Tekrar dene
              </button>
            </div>
          </div>
        )}

        {/* Filtreler — yalnızca veriler yüklendikten sonra göster */}
        {!loading && !error && (
          <ProjectFilter
            search={search}
            onSearchChange={setSearch}
            category={category}
            onCategoryChange={setCategory}
            sortField={sortField}
            onSortFieldChange={setSortField}
            sortOrder={sortOrder}
            onSortOrderChange={setSortOrder}
            resultCount={filteredProjects.length}
            totalCount={projects.length}
          />
        )}

        {/* Yükleniyor spinner'ı */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div
              className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"
              aria-hidden="true"
            />
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Projeler yükleniyor...
            </p>
          </div>
        )}

        {/* Boş sonuç durumu */}
        {!loading && !error && filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">🔍</p>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">
              Eşleşen proje bulunamadı.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Arama terimini veya kategoriyi değiştirmeyi dene.
            </p>
          </div>
        )}

        {/* Proje grid'i — map() ile liste render, key olarak id kullan */}
        {!loading && !error && filteredProjects.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              // key olarak asla index değil, benzersiz id kullan!
              <article
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Proje görseli */}
                <div className="h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-gray-700 dark:to-gray-600">
                  <img
                    src={project.image}
                    alt={`${project.title} ekran görüntüsü`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      // Görsel yüklemezse placeholder göster
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                {/* Kart içeriği */}
                <div className="p-5">
                  {/* Başlık + Öne Çıkan badge */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-gray-900 dark:text-white leading-tight">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="shrink-0 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 text-xs px-2 py-0.5 rounded-full font-medium">
                        ⭐ Öne Çıkan
                      </span>
                    )}
                  </div>

                  {/* Açıklama */}
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Teknoloji etiketleri — her etiket için key olarak değerin kendisi */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 text-xs px-2 py-0.5 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Alt bilgi: yıl, kategori ve bağlantılar */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      {project.year} · {project.category}
                    </p>
                    <div className="flex gap-3">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-medium"
                        >
                          Demo ↗
                        </a>
                      )}
                      {project.sourceUrl && (
                        <a
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-gray-500 dark:text-gray-400 hover:underline font-medium"
                        >
                          Kaynak ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
