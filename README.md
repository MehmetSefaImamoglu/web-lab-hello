# 🌐 Web LAB — Kişisel Portföy Projesi (LAB-1 → LAB-4)

## 📋 Hakkında

Bu proje, **Web Tasarımı ve Programlama** dersi kapsamında **Vite + React + TypeScript** kullanılarak geliştirilmektedir.

| Lab | Kapsam | Branch |
|-----|--------|--------|
| **LAB-1** | Geliştirme ortamı kurulumu, Vite + React + TypeScript, Git iş akışı | `main` |
| **LAB-2** | Semantik HTML5, Erişilebilirlik (a11y), Form yapıları, Lighthouse testi | `main` |
| **LAB-3** | Mobile-first responsive tasarım, CSS Flexbox & Grid, Design Tokens, Fluid Typography (`clamp()`) | `feature/responsive-layout` |
| **LAB-4** | Tailwind CSS v4, Utility-first CSS, Component kütüphanesi (Button/Input/Card/Alert), Dark mode, UI Kit | `feature/tailwind-ui-kit` |

---

## 👤 Geliştirici

| Alan | Bilgi |
|---|---|
| **Ad Soyad** | Sefa İMAMOĞLU |
| **Öğrenci No** | 230541038 |
| **Bölüm** | Yazılım Mühendisliği |

---

## 🛠️ Kullanılan Teknolojiler

- ⚛️ React 19 · 🔷 TypeScript · ⚡ Vite
- 🏗️ Semantik HTML5 · 🎨 CSS3 (Flexbox, Grid, Custom Properties)
- 💨 Tailwind CSS v4
- 📱 Mobile-First Responsive Tasarım

---

## 🚀 Kurulum ve Çalıştırma

```bash
npm install
npm run dev
```

Tarayıcıda `http://localhost:5173` adresini aç.

---

## 📁 Proje Yapısı

```
web-lab-hello/
├── src/
│   ├── components/
│   │   ├── Button.tsx      ← 4 renk × 3 boyut varyantı (LAB-4)
│   │   ├── Input.tsx       ← error/help/disabled varyantları (LAB-4)
│   │   ├── Card.tsx        ← elevated/outlined/filled (LAB-4)
│   │   └── Alert.tsx       ← info/success/warning/error (LAB-4)
│   ├── pages/
│   │   └── UIKit.tsx       ← 19+ varyant UI Kit sayfası (LAB-4)
│   ├── styles/
│   │   └── tokens.css      ← CSS Design Tokens (LAB-3)
│   ├── App.tsx             ← Ana portföy bileşeni
│   └── index.css           ← Tailwind + Global stiller
├── screenshots/
│   ├── screenshot-mobile.png   ← 375px görünüm (LAB-3)
│   ├── screenshot-tablet.png   ← 768px görünüm (LAB-3)
│   └── screenshot-desktop.png  ← 1280px görünüm (LAB-3)
├── CSS-KARARLARI.md        ← Tasarım kararları belgesi (LAB-3)
└── index.html
```

---

## ♿ Lighthouse Erişilebilirlik Testi (LAB-2)

**Accessibility Puanı: 92 / 100** ✅

![Lighthouse Erişilebilirlik Raporu](public/lighthouse.png)

---

## 📸 Responsive Ekran Görüntüleri (LAB-3)

| Mobil (375px) | Tablet (768px) | Masaüstü (1280px) |
|:---:|:---:|:---:|
| ![Mobil](screenshots/screenshot-mobile.png) | ![Tablet](screenshots/screenshot-tablet.png) | ![Masaüstü](screenshots/screenshot-desktop.png) |

---

## 🎨 UI Kit Bileşenleri (LAB-4)

Portföy sayfasında **🎨 UI Kit** butonuna tıklayarak tüm bileşenler görülebilir.

| Bileşen | Varyantlar |
|---------|------------|
| `Button` | primary · secondary · danger · ghost · sm · md · lg |
| `Input` | normal · error · helpText · disabled |
| `Card` | elevated · outlined · filled |
| `Alert` | info · success · warning · error · dismissible |
