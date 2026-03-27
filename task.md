# Macework Creativ Landing Page - Task List

## Proje Hedefi
Macework Creativ için Next.js tabanlı, premium, modern, SaaS odaklı yeni landing page projesini kurmak ve deploy-ready hale getirmek.

---

## Faz 1 — Proje Başlangıcı

### Task 1.1
Yeni Next.js projesi oluştur.
- App Router
- TypeScript
- Tailwind CSS
- ESLint
- src yapısı kullanılabilir ama zorunlu değil
- temiz başlangıç

### Task 1.2
Temel klasör yapısını oluştur:
- app
- components
- content
- lib
- public
- public/brand
- public/images
- types

### Task 1.3
Global tasarım altyapısını kur:
- renk token’ları
- spacing mantığı
- container sistemi
- section spacing yapısı
- temel utility yaklaşımı

### Task 1.4
Site metadata yapısını kur:
- title
- description
- open graph
- twitter metadata
- favicon için placeholder alanı

---

## Faz 2 — İçerik ve Veri Modeli

### Task 2.1
Tüm landing page içeriklerini merkezi bir content dosyasında topla.

Önerilen içerik grupları:
- navigation
- hero
- products
- solutions
- stats
- featuredWork
- references
- process
- leadForm
- contact
- footer

### Task 2.2
SaaS ürün verilerini tanımla:
- Qrgetir
- Carigetir
- SociaMind
- byoo.pro

Alanlar:
- title
- description
- badge
- href
- category

### Task 2.3
Çözümler mega menu içeriğini tanımla.

Kolonlar:
- Dijital Çözümler
- Teknoloji Çözümleri
- Ürünlerimiz

Her öğe için:
- title
- description
- href
- iconName

---

## Faz 3 — Layout ve Header

### Task 3.1
Sticky header oluştur.
- şeffaf başlayabilir
- scroll sonrası hafif background alabilir
- premium görünmeli

### Task 3.2
Desktop navigasyonu oluştur:
- Ürünler
- Çözümler
- İşlerimiz
- Hakkımızda
- İletişim
- Teklif Al CTA

### Task 3.3
“Çözümler” için hover mega menu geliştir.
- geniş panel
- 3 kolonlu yapı
- ikon + başlık + açıklama
- hover highlight
- keyboard erişimi düşünülmeli
- panel flicker yapmamalı

### Task 3.4
Mobil menü oluştur.
- hamburger
- drawer veya full-screen panel
- çözümler alanı accordion olabilir
- CTA görünür olmalı

---

## Faz 4 — Ana Sayfa Bölümleri

### Task 4.1
Hero bölümü oluştur.
İçerik:
- güçlü başlık
- açıklama
- primary CTA
- secondary CTA
- sağ tarafta arayüz / product / dashboard hissi veren mock alan

### Task 4.2
SaaS Ürünlerimiz bölümü oluştur.
- 4 ürün kartı
- premium kart tasarımı
- hover durumları
- link yapısı

### Task 4.3
Çözümler bölümü oluştur.
- Macework’in sunduğu çözüm alanları
- servisleri “çözüm” diliyle sun
- grid yapı

### Task 4.4
Neden Macework bölümü oluştur.
- güven
- hız
- ürünleşme
- ölçeklenebilir sistem
- kreatif + teknik ekip dengesi

### Task 4.5
Seçili işler / referans preview alanı oluştur.
- birkaç örnek case kartı
- referans logo şeridi veya grid
- sade ama güven verici

### Task 4.6
Süreç bölümü oluştur.
Adım mantığı:
- ihtiyaç analizi
- çözüm tasarımı
- geliştirme
- yayına alma / büyütme

### Task 4.7
Lead form / teklif alma alanı oluştur.
- temiz form arayüzü
- select alanı
- net CTA
- güven metni

### Task 4.8
İletişim bölümü oluştur.
- e-posta
- telefon
- adres / kısa bilgi
- semantik linkler

### Task 4.9
Footer oluştur.
- kısa marka özeti
- linkler
- iletişim tekrarları
- copyright

---

## Faz 5 — Görsel ve UI Kalitesi

### Task 5.1
Minimal ama güçlü ikon sistemi seç.
- lucide-react tercih edilebilir

### Task 5.2
Kart sistemleri arasında görsel tutarlılık sağla.
- border
- radius
- shadow
- spacing
- typography hierarchy

### Task 5.3
Arkaplan kompozisyonunu geliştir.
- çok hafif gradient
- blur glow
- ama okunabilirliği bozmadan

### Task 5.4
Responsive ince ayarları yap.
- mobile
- tablet
- desktop
- large desktop

---

## Faz 6 — Teknik Kalite

### Task 6.1
SEO metadata iyileştir.
- title template
- description
- og tags
- twitter card

### Task 6.2
Performans düzenlemeleri yap.
- gereksiz client component kullanma
- uygun yerde server component kullan
- image optimizasyonu düşün
- animasyonları hafif tut

### Task 6.3
Erişilebilirlik iyileştirmeleri yap.
- aria labels
- keyboard navigation
- focus states
- semantic heading structure

### Task 6.4
Form için placeholder submit yapısı kur.
İlk sürümde:
- frontend form hazır olsun
- submit akışı mock veya basit endpoint olabilir

### Task 6.5
Kod temizliği yap.
- kullanılmayan importları kaldır
- class yapısını sadeleştir
- bileşenleri mantıklı böl

---

## Faz 7 — Git ve Deploy Hazırlığı

### Task 7.1
README hazırla.
İçerik:
- proje açıklaması
- kurulum
- local run
- build
- deploy notları

### Task 7.2
`.env.example` oluştur.
Örnek değişkenler:
- NEXT_PUBLIC_SITE_URL
- NEXT_PUBLIC_CONTACT_EMAIL
- NEXT_PUBLIC_CONTACT_PHONE

### Task 7.3
İlk git commit’ini al.
Commit mesajı:
- feat: initialize macework landing page

### Task 7.4
Projenin Vercel deploy’a uygun olduğundan emin ol.
- build error olmamalı
- lint temiz olmalı
- environment bağımlılıkları net olmalı

---

## Faz 8 — Final Kontrol

### Task 8.1
Şu kontrolleri yap:
- tasarım premium mu?
- “Çözümler” mega menu düzgün mü?
- SaaS ürünleri yeterince görünür mü?
- Macework ajans + ürün markası olarak net mi?
- mobil deneyim temiz mi?
- CTA alanları görünür mü?

### Task 8.2
Projeyi production-ready halde bırak.