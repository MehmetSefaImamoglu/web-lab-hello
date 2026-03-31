# Web LAB Projesi (LAB-1 → LAB-6 Ara Checkpoint #1)

Web Tasarımı ve Programlama dersi kapsamında geliştirdiğim kişisel portföy projesi.  
Vite + React + TypeScript altyapısıyla başladı, her lab'da yeni bir katman eklendi.

## Geliştirici

**Sefa İMAMOĞLU** — 230541038 — Yazılım Mühendisliği

---

## Lab Özeti

| Lab | Konu | Ne Yaptım |
|-----|------|-----------|
| **LAB-1** | Ortam Kurulumu | Vite + React + TypeScript kurulumu, Git ile versiyon kontrolü |
| **LAB-2** | Semantik HTML & Erişilebilirlik | Semantik HTML5 yapısı, a11y, form, Lighthouse skoru 92/100 |
| **LAB-3** | Responsive CSS | Mobile-first tasarım, Flexbox & Grid, Design Tokens, `clamp()` fluid typography |
| **LAB-4** | Tailwind CSS & UI Kit | Tailwind v4 entegrasyonu, Button/Input/Card/Alert bileşenleri, dark mode |
| **LAB-5** | JavaScript/TypeScript & State | Fetch API, async/await, TypeScript tipleri, state yönetimi, filtreleme & sıralama |
| **LAB-6** | React Component Mimarisi & State Yönetimi | Props/State kullanımı, useMemo ile optimizasyon, Controlled Form validasyonu, Checkpoint #1 entegrasyonu |

---

## Kullanılan Teknolojiler

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS v4** — dark mode desteği
- **Semantik HTML5**, CSS3 (Flexbox, Grid, Custom Properties)
- **ES Modules**, async/await, Fetch API
- Mobile-first responsive tasarım

---

## Çalıştırmak İçin

```bash
npm install
npm run dev
```

`http://localhost:5173` adresine git.

---

## Proje Yapısı

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx          ← LAB-6: Sticky header, hamburger menü state
│   │   └── Footer.tsx          ← LAB-6: Dinamik yıl, nav linkleri
│   ├── ui/
│   │   ├── Button.tsx          ← LAB-4/6: variant, size, fullWidth
│   │   ├── Input.tsx           ← LAB-4/6: label, error, helpText
│   │   ├── Card.tsx            ← LAB-4/6: elevated, outlined, filled
│   │   └── Alert.tsx           ← LAB-4/6: info, success, warning, error
│   ├── sections/
│   │   ├── Hero.tsx            ← LAB-6: Gradient hero, CTA butonları
│   │   ├── About.tsx           ← LAB-6: Profil, bio, skill etiketleri
│   │   ├── Skills.tsx          ← LAB-6: Progress bar'lı kategori kartları
│   │   ├── ProjectList.tsx     ← LAB-6: useEffect fetch + useMemo filtre
│   │   └── ContactSection.tsx  ← LAB-6: ContactForm sarmalayıcısı
│   └── forms/
│       ├── ContactForm.tsx     ← LAB-6: Controlled form, validasyon, async submit
│       └── ProjectFilter.tsx   ← LAB-6: Arama, kategori, sıralama (lifting state up)
├── services/
│   └── projectService.ts       ← LAB-5: Fetch API servisi
├── types/
│   └── project.ts              ← LAB-5: TypeScript tipleri
├── utils/
│   └── projectHelpers.ts       ← LAB-5: Filtreleme & sıralama
├── App.tsx                     ← LAB-6: Orkestra şefi — sadece dark mode yönetir
└── index.css
public/
└── data/
    └── projects.json           ← LAB-5: Mock proje verisi (6 proje)
```

---

## LAB-6 (Ara Checkpoint #1) Öne Çıkan Özellikler

- **Asenkron veri çekme** — `useEffect` ve Fetch API ile `public/data/projects.json` üzerinden veri yükleme; yükleniyor ve hata durumları ekranda gösteriliyor.
- **Performans optimizasyonu** — `useMemo` ile arama, kategori ve sıralama filtrelerinin kombinasyonu önbellekleniyor; yalnızca bağımlılıklar değiştiğinde yeniden hesaplanıyor.
- **Controlled İletişim Formu** — Tüm form alanları `value` + `onChange` ile React state'ine bağlı; regex e-posta kontrolü, minimum karakter validasyonu ve anlık per-field hata mesajları.
- **Hamburger Menü** — `useState` ile yönetilen mobil menü; animasyonlu toggle butonu, tıklandığında kendiliğinden kapanıyor.
- **Sıfır `any` — tam TypeScript strict mod** — `npx tsc --noEmit` sıfır hata, tüm prop ve state tipleri `interface` ile tanımlı.
- **Lifting State Up** — `ProjectFilter` tüm kontrol state'lerini parent `ProjectList`'ten props olarak alır; tek yönlü veri akışı.
- **Component Mimarisi** — `layout/`, `ui/`, `sections/`, `forms/` klasör ayrımıyla bağımsız, test edilebilir ve yeniden kullanılabilir bileşenler.

---

## LAB-5 Öne Çıkan Özellikler

- **JSON'dan dinamik veri çekme** — `fetchProjects()` ile `async/await` + hata yönetimi
- **TypeScript tip güvenliği** — `interface Project`, `type Category`, sıfır `any`
- **State yönetimi** — `useState` + `useEffect`, DOM'a dokunmadan UI güncelleme
- **Arama filtresi** — başlık, açıklama ve teknoloji alanlarında eş zamanlı arama
- **Kategori filtresi** — Frontend / Fullstack / Backend / Tümü
- **Sıralama** — Yıla veya başlığa göre artan/azalan

---

## Lighthouse Erişilebilirlik Skoru (LAB-2)

**92 / 100**

![Lighthouse Raporu](public/lighthouse.png)

---

## UI Bileşenleri (LAB-4 / LAB-6)

| Bileşen | Varyantlar |
|---------|------------|
| `Button` | primary, secondary, danger, ghost · sm, md, lg |
| `Input`  | normal, error, helpText, disabled |
| `Card`   | elevated, outlined, filled |
| `Alert`  | info, success, warning, error, dismissible |

---

## Git Branch Yapısı

```
main
├── feature/tailwindcss-ui-kit    ← LAB-4
├── feature/typescript-projects   ← LAB-5
└── feature/checkpoint-1          ← LAB-6 (Ara Checkpoint #1)
```
