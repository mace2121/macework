# Macework Creativ Landing Page - Implementation Guide

## 1. Genel Yaklaşım

Bu proje tek sayfalık modern bir landing page olarak başlayacak.
Ana hedef hızlı, temiz ve Vercel dostu bir yapı kurmak.

Tech stack:
- Next.js
- App Router
- TypeScript
- Tailwind CSS
- Lucide React
- gerektiğinde clsx / cn helper
- mümkün olduğunca az bağımlılık

İlk sürümde CMS gerekmiyor.
İçerik statik data dosyasından beslenecek.

---

## 2. Klasör Yapısı

Önerilen yapı:

```txt
/app
  /api
    /lead
      route.ts
  globals.css
  layout.tsx
  page.tsx

/components
  header.tsx
  mega-menu.tsx
  mobile-nav.tsx
  hero.tsx
  section-heading.tsx
  product-card.tsx
  solution-card.tsx
  case-card.tsx
  lead-form.tsx
  footer.tsx

/content
  site-content.ts

/lib
  utils.ts

/public
  /brand
  /images

/types
  index.ts