import type { Category, SortField, SortOrder } from "../../types/project";

// Props arayüzü — tüm kontroller parent'tan gelir (lifting state up deseni)
interface ProjectFilterProps {
  search: string;
  onSearchChange: (value: string) => void;
  category: Category | "all";
  onCategoryChange: (value: Category | "all") => void;
  sortField: SortField;
  onSortFieldChange: (value: SortField) => void;
  sortOrder: SortOrder;
  onSortOrderChange: (value: SortOrder) => void;
  resultCount: number;
  totalCount: number;
}

// Sabit kategori listesi
const CATEGORIES: { value: Category | "all"; label: string }[] = [
  { value: "all", label: "Tümü" },
  { value: "frontend", label: "Frontend" },
  { value: "fullstack", label: "Full Stack" },
  { value: "backend", label: "Backend" },
];

export default function ProjectFilter({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  sortField,
  onSortFieldChange,
  sortOrder,
  onSortOrderChange,
  resultCount,
  totalCount,
}: ProjectFilterProps) {
  return (
    <div className="space-y-4 mb-8">
      {/* Arama alanı */}
      <div className="relative">
        <label htmlFor="project-search" className="sr-only">
          Proje ara
        </label>
        {/* Büyüteç ikonu */}
        <span
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          aria-hidden="true"
        >
          🔍
        </span>
        <input
          id="project-search"
          type="search"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Proje, teknoloji veya açıklama ara..."
          className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-2.5 pl-10 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          aria-label="Proje ara"
        />
      </div>

      {/* Kategori + Sıralama satırı */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        {/* Kategori butonları */}
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Kategori filtresi"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => onCategoryChange(cat.value)}
              aria-pressed={category === cat.value}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 ${
                category === cat.value
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Sıralama kontrolleri */}
        <div className="flex gap-2 items-center shrink-0">
          <label htmlFor="sort-field" className="sr-only">
            Sıralama alanı
          </label>
          <select
            id="sort-field"
            value={sortField}
            onChange={(e) => onSortFieldChange(e.target.value as SortField)}
            className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1.5 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Sıralama alanı"
          >
            <option value="year">Yıl</option>
            <option value="title">Başlık</option>
          </select>
          <button
            onClick={() =>
              onSortOrderChange(sortOrder === "asc" ? "desc" : "asc")
            }
            className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1.5 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={`Sıralama yönü: ${sortOrder === "asc" ? "artan" : "azalan"}`}
          >
            {sortOrder === "asc" ? "↑ Artan" : "↓ Azalan"}
          </button>
        </div>
      </div>

      {/* Sonuç sayacı */}
      <p className="text-sm text-gray-500 dark:text-gray-400">
        <span className="font-semibold text-gray-700 dark:text-gray-300">
          {resultCount}
        </span>{" "}
        / {totalCount} proje gösteriliyor
      </p>
    </div>
  );
}
