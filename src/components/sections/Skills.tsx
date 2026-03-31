// Skills Bölümü — teknik beceri kategorileri ve seviye göstericiler

interface SkillItem {
  name: string;
  level: number; // 0–100 arası yüzde
}

interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React", level: 80 },
      { name: "TypeScript", level: 75 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML5 / CSS3", level: 90 },
    ],
  },
  {
    id: "tools",
    title: "Araçlar & DevOps",
    icon: "🛠️",
    skills: [
      { name: "Git / GitHub", level: 80 },
      { name: "Vite", level: 75 },
      { name: "ESLint / Prettier", level: 70 },
      { name: "REST API", level: 75 },
    ],
  },
  {
    id: "backend",
    title: "Backend & Veritabanı",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 60 },
      { name: "Express.js", level: 55 },
      { name: "PostgreSQL", level: 50 },
      { name: "MongoDB", level: 55 },
    ],
  },
];

// SkillBar: tek bir beceriyi progress bar olarak gösteren alt component
interface SkillBarProps {
  name: string;
  level: number;
}

function SkillBar({ name, level }: SkillBarProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {name}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {level}%
        </span>
      </div>
      {/* Progress track */}
      <div
        className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name}: ${level}%`}
      >
        <div
          className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-700"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-5xl mx-auto">
        {/* Başlık */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Yetenekler
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-lg mx-auto">
            Kullandığım teknolojiler ve her birindeki deneyim seviyem.
          </p>
        </div>

        {/* Kategori grid'i */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl" aria-hidden="true">
                  {cat.icon}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {cat.title}
                </h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
