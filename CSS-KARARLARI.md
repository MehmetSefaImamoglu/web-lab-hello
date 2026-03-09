# CSS Kararları — LAB-3

## 1. Breakpoint Seçimi

**Neden 640px ve 1024px?**

640px, büyük akıllı telefonların yatay modunu ve küçük tabletleri kapsar — bu noktada tek sütunlu dikey düzenden iki sütunlu yatay düzene geçmek mantıklıdır. 1024px ise tabletlerin yatay modu ve küçük dizüstü bilgisayarları örter; bu noktada içerik genişliği 1200px ile sınırlanarak daha geniş ekranlarda okunabilirlik korunur. Her iki noktada "içerik bozulmaya başlıyor mu?" sorusunu sorarak seçim yapıldı, cihaz modeline göre değil.

**İçerik değişimi:**
- 0–639px: Nav dikey yığın, hakkımda tek sütun, proje kartları tek sütun, buton tam genişlik
- 640px+: Nav yatay, hakkımda (fotoğraf + metin) yan yana, buton içeriğine göre genişlik
- 1024px+: main max-width: 1200px (ortalanmış), proje kartları sabit 3 sütun

---

## 2. Layout Tercihleri

**Header için neden Flexbox?**

Header, logo ve nav'ı *tek bir eksen* (önce dikey mobilde, sonra yatay tablet/masaüstünde) boyunca hizalamak için kullanılır. Bu tek boyutlu hizalama Flexbox'ın güçlü olduğu alandır. `justify-content: space-between` ile logo sola, nav sağa itilir; `flex-wrap: wrap` mobilde alta kaymasını sağlar.

**Proje kartları için neden Grid?**

Proje kartları hem satır hem sütun boyutunda tutarlı hizalama gerektirir — bu iki boyutlu düzen Grid'in amacıdır. `repeat(auto-fit, minmax(280px, 1fr))` sayesinde tek bir satır CSS ile media query yazmadan responsive grid elde edildi.

**`auto-fit` mi, `auto-fill` mi?**

`auto-fit` kullandım. `auto-fill` boş sütunları korurken, `auto-fit` boş sütunları daraltır ve mevcut kartlar genişler. 3'ten az kart sayısında bile ekranda düzgün görünmesi için `auto-fit` tercih edildi.

---

## 3. Design Tokens

**Renk paleti:**

`#1E3A8A` (koyu lacivert) temel renk olarak seçildi — güven, profesyonellik ve yetkinlik çağrışımı yapar, bir portföy sayfası için uygun. `#2563EB` hover/interaktif durumlar için açık ton, `#7C3AED` vurgu için mor eklendi. Hepsini `tokens.css` içindeki `:root` değişkenlerine aldım; herhangi birini değiştirmek tüm sayfayı tek seferinde günceller.

**Spacing skalası:**

`--space-xs` (4px) ile `--space-3xl` (64px) arasında 7 adımlı bir skala. Hem mobil hem masaüstünde tutarlı padding/gap değerleri için bu tokenları kullandım; böylece "bu burada 16px miydi, 14px mıydı?" karmaşası ortadan kalktı.

**Fluid typography `clamp()` değerleri:**

Her `--text-*` değişkeni üç parametre içeriyor: minimum (küçük ekranda), tercih (vw birimi ile orantılı), maksimum (büyük ekranda). Yalnızca `vw` kullanmadım çünkü tarayıcı zoom'unda `vw` değişmez ve erişilebilirlik ihlali oluşur. `rem + vw` karışımı bu sorunu çözer.

---

## 4. Responsive Stratejiler

**Mobile-first uygulaması:**

`index.css`'deki tüm "varsayılan" kurallar mobil ekrana göre yazıldı (0–639px). Ardından `@media (min-width: 640px)` ve `@media (min-width: 1024px)` ile büyük ekranlara kural eklendi. `max-width` media query kullanılmadı; tutarlı mobile-first için her zaman `min-width` kullanıldı.

**Breakpoint'lerde değişen elemanlar:**
1. `header` / `nav ul`: flex-direction column → row
2. `.about-content`: flex-direction column → row, text-align center → left
3. `button[type="submit"]`: width 100% → auto
4. `section`: küçük padding → daha geniş padding
5. `main`: max-width kaldırılmış mobilde → 1200px + margin: 0 auto masaüstünde
6. `.project-grid`: auto-fit → repeat(3, 1fr) masaüstünde

**Görsel boyutları:**

Tüm görsellere `max-width: 100%` + `height: auto` uygulandı (genel reset). Proje kart görselleri `height: 200px` + `object-fit: cover` ile sabit yükseklikte tutuldu; böylece farklı boyutlardaki görseller kartları bozmuyor.
