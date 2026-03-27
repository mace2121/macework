export const siteContent = {
  header: {
    navigation: [
      { label: "Anasayfa", href: "/" },
      { label: "Ürünler", href: "/#products" },
      { label: "Çözümler", href: "/#solutions" },
      { label: "İşlerimiz", href: "/work" },
      { label: "Hakkımızda", href: "/#about" },
      { label: "Blog", href: "/blog" },
      { label: "İletişim", href: "/contact" },
    ],
    cta: {
      label: "Teklif Al",
      href: "/contact",
    },
  },

  hero: {
    badge: "Yaratıcı Teknoloji Stüdyosu",
    title: "Sadece hizmet değil,\nbirlikte öne çıkan\nürünler geliştiriyoruz.",
    description: "Macework Creativ, ölçeklenebilir dijital altyapılar ve kendi inovatif SaaS ürünlerini tasarlayan, aynı vizyonu markanıza da taşıyan 360 derece teknoloji ajansıdır.",
    primaryCta: { label: "Çözümleri İncele", href: "/#solutions" },
    secondaryCta: { label: "Ürünlere Göz At", href: "/#products" },
  },

  products: {
    sectionTitle: "Öne Çıkan Ürünlerimiz",
    sectionDescription: "Kendi laboratuvarımızdan çıkan ve binlerce işletme tarafından kullanılan dijital SaaS projelerimiz.",
    items: [
      {
        id: "qrgetir",
        slug: "qrgetir",
        title: "Qrgetir",
        description: "Restoranlar için yeni nesil QR menü ve dijital sipariş yönetim sistemi.",
        longDescription: "Qrgetir, restoran ve kafelerin dijitalleşme sürecindeki en büyük yardımcısıdır. Temassız sipariş, dijital ödeme entegrasyonu ve akıllı mutfak yönetimi ile operasyonel verimliliği maksimuma çıkarır.",
        features: ["Dijital Menü Yönetimi", "Garson Çağırma Sistemi", "Online Sipariş & Ödeme", "Mutfak Yönetim Paneli", "Analiz & Raporlama"],
        badge: "SaaS",
        href: "https://qrgetir.com",
        category: "Dijital Menü",
      },
      {
        id: "carigetir",
        slug: "carigetir",
        title: "Carigetir",
        description: "KOBİ'ler için hızlı, güvenli ve akıllı cari hesap yönetim uygulaması.",
        longDescription: "Carigetir, karmaşık muhasebe süreçlerini basitleştirerek KOBİ'lerin finansal sağlıklarını her an her yerden takip edebilmelerini sağlar. Otomatik hatırlatmalar ve raporlar ile tahsilat süreçlerini hızlandırır.",
        features: ["Cari Takibi", "Gelir-Gider Yönetimi", "Otomatik Tahsilat Hatırlatma", "Bulut Tabanlı Veri Saklama", "Pro Analiz Modülü"],
        badge: "SaaS",
        href: "https://carigetir.com",
        category: "Fintek",
      },
      {
        id: "sociamind",
        slug: "sociamind",
        title: "SociaMind",
        description: "Yapay zeka destekli sosyal medya planlama ve içerik otomasyonu.",
        longDescription: "SociaMind, sosyal medya yöneticilerinin ve markaların içerik üretim yükünü yapay zeka ile hafifletir. Trend analizi yaparak en etkili paylaşım zamanlarını ve görselleri sizin yerinize optimize eder.",
        features: ["AI İçerik Üretimi", "Akıllı Zamanlama", "Rakip Analizi", "Otomatik Görsel Tasarım", "Haftalık Performans Özeti"],
        badge: "AI",
        href: "https://sociamind.app",
        category: "Pazarlama Otomasyonu",
      },
      {
        id: "byoo",
        slug: "byoo",
        title: "byoo.pro",
        description: "Profesyoneller için gelişmiş kişisel bio link ve dijital profil aracı.",
        longDescription: "byoo.pro, dijital dünyadaki tüm varlığınızı tek bir şık ve profesyonel linkte toplamanızı sağlar. Kişiselleştirilebilir temalar ve analiz araçları ile dijital kimliğinizi güçlendirin.",
        features: ["Full Özelleştirilebilir Temalar", "Gelişmiş Ziyaretçi Analizi", "CRM & Form Entegrasyonu", "Özel QR Kod Oluşturma", "Ödeme Alma Linkleri"],
        badge: "Link in Bio",
        href: "https://byoo.pro",
        category: "Dijital Profil",
      },
    ],
  },

  solutionsMegaMenu: {
    columns: [
      {
        title: "Dijital Çözümler",
        items: [
          { slug: "web-tasarim", title: "Web Tasarım", description: "Premium ve kullanıcı odaklı arayüzler", href: "/solutions/web-tasarim", iconName: "layout" },
          { slug: "kurumsal-kimlik", title: "Kurumsal Kimlik", description: "Modern ve akılda kalıcı marka vizyonu", href: "/solutions/kurumsal-kimlik", iconName: "brush" },
          { slug: "seo-stratejisi", title: "SEO Stratejisi", description: "Veri odaklı arama motoru optimizasyonu", href: "/solutions/seo-stratejisi", iconName: "line-chart" },
          { slug: "sosyal-medya", title: "Sosyal Medya", description: "Yaratıcı etkileşim ve iletişim", href: "/solutions/sosyal-medya", iconName: "share-2" },
        ],
      },
      {
        title: "Teknoloji Çözümleri",
        items: [
          { slug: "web-yazilim", title: "Web Yazılım", description: "Güvenli ve ölçeklenebilir altyapılar", href: "/solutions/web-yazilim", iconName: "code" },
          { slug: "e-ticaret", title: "E-Ticaret", description: "Dönüşüm odaklı online satış sistemleri", href: "/solutions/e-ticaret", iconName: "shopping-bag" },
          { slug: "api-integrasyonlari", title: "API Entegrasyonları", description: "Kusursuz sistem bağlantıları", href: "/solutions/api-integrasyonlari", iconName: "network" },
          { slug: "saas-gelistirme", title: "SaaS Geliştirme", description: "Fikirden ürüne özel yazılım projeleri", href: "/solutions/saas-gelistirme", iconName: "box" },
        ],
      },
    ],
  },

  solutionsDetail: [
    {
      slug: "web-tasarim",
      title: "Premium Web Tasarım",
      description: "Markanızı dijitalde parlatacak, kullanıcı deneyimini merkeze koyan modern web tasarım süreçleri.",
      features: ["UX/UI Tasarım", "Responsive Mimari", "Etkileşimli Deneyim", "Branding Entegrasyonu"],
    },
    {
      slug: "web-yazilim",
      title: "Özel Web Yazılım",
      description: "İhtiyacınıza özel, modern teknolojilerle (Next.js, Node.js) inşa edilmiş güvenli ve hızlı yazılım çözümleri.",
      features: ["Modern Stack Geliştirme", "Yüksek Performans", "API Tasarımı", "Veri Güvenliği"],
    },
    {
        slug: "kurumsal-kimlik",
        title: "Kurumsal Kimlik & Branding",
        description: "Markanızın ruhunu yansıtan, profesyonel ve modern görsel kimlik tasarımı.",
        features: ["Logo Tasarımı", "Marka Kitabı", "Kartvizit & Antetli Kağıt", "Renk Teorisi Deneyimi"],
    },
    {
        slug: "e-ticaret",
        title: "E-Ticaret Çözümleri",
        description: "Dönüşüm oranları optimize edilmiş, mobil uyumlu ve hızlı e-ticaret altyapıları.",
        features: ["Shopify & Custom Entegrasyon", "Ödeme Sistemleri", "Stok Yönetimi", "SEO Odaklı Kategori Yapısı"],
    }
  ],

  works: {
    sectionTitle: "Seçkin İşlerimiz",
    items: [
      {
        id: "lux-estate",
        slug: "lux-estate",
        title: "Lux Estate Portal",
        category: "Emlak Teknolojileri",
        description: "Yapay zeka tabanlı gayrimenkul değerleme ve listeleme platformu.",
        longDescription: "Lüks gayrimenkul pazarı için geliştirilen bu portal, veri analitiği ve 3D tur entegrasyonu ile sektörde fark yaratan bir platformdur.",
        technologies: ["Next.js", "Python AI", "Three.js", "MongoDB"],
        year: "2025"
      },
      {
        id: "global-logistics",
        slug: "global-logistics",
        title: "Global Lojistik Takip",
        category: "Lojistik & Taşıma",
        description: "Uluslararası konteyner takip ve rota optimizasyon sistemi.",
        longDescription: "Gerçek zamanlı lokasyon takibi ve maliyet optimizasyonu algoritmalarıyla donatılmış modern lojistik yönetim yazılımı.",
        technologies: ["React Native", "Go", "PostgreSQL", "Google Maps API"],
        year: "2024"
      },
      {
        id: "health-hub",
        slug: "health-hub",
        title: "HealthHub Pro",
        category: "Sağlık Yazılımları",
        description: "Özel klinikler için randevu ve hasta takip otomasyonu.",
        longDescription: "Doktor ve hastalar arasındaki iletişimi dijitalleştiren, online konsültasyon ve randevu takip modülleri içeren kapsamlı sağlık platformu.",
        technologies: ["React", "FastAPI", "Redis", "Supabase"],
        year: "2025"
      }
    ]
  },

  reasons: {
    sectionTitle: "Neden Macework?",
    sectionDescription: "Biz sıradan bir ajans değiliz. İhtiyaçlarınızı, ürün vizyonuyla ele alan yaratıcı teknoloji partneriniziz.",
    items: [
      { title: "Ürün Odaklılık", description: "Problem çözen, son kullanıcıya hazır SaaS mantığında projeler teslim ederiz.", iconName: "layers" },
      { title: "Ölçeklenebilir Mimari", description: "Büyüdükçe tıkanmayan, sağlam ve modern teknoloji yığınları kullanırız.", iconName: "server" },
      { title: "Hız ve Güven", description: "Taahhüt ettiğimiz kaliteyi, şeffaf süreçlerle zamanında canlıya alırız.", iconName: "zap" },
      { title: "Kreatif & Teknik Denge", description: "Hem mükemmel görünen hem de kusursuz çalışan hibrit yapılar inşa ederiz.", iconName: "palette" },
    ],
  },

  process: {
    sectionTitle: "Nasıl Çalışırız?",
    items: [
      { step: "01", title: "İhtiyaç Analizi", description: "Projeyi, hedeflerinizi ve vizyonunuzu en ince ayrıntısına kadar dinliyoruz." },
      { step: "02", title: "Çözüm Tasarımı", description: "Size özel mimariyi, kullanıcı deneyimini ve ürün rotasını çiziyoruz." },
      { step: "03", title: "Geliştirme", description: "Modern teknolojilerle güvenilir, hızlı ve ölçeklenebilir ürününüzü inşa ediyoruz." },
      { step: "04", title: "Yayına Alma & Büyütme", description: "Projenizi sorunsuz şekilde yayına alıyor ve büyüme yolculuğunda yanınızda oluyoruz." },
    ],
  },

  contact: {
    email: "iletisim@macework.com",
    phone: "+90 (212) 000 0000",
    address: "Ihsaniye Mah. Sultan Sok. No: 12\nBursa / Türkiye",
    social: [
      { label: "LinkedIn", href: "#", icon: "linkedin" },
      { label: "Twitter", href: "#", icon: "twitter" },
      { label: "Instagram", href: "#", icon: "instagram" },
    ]
  },

  footer: {
    description: "Macework Creativ, yenilikçi dijital ürünler geliştiren ve kurumlar için yeni nesil teknoloji çözümleri üreten kreatif bir stüdyodur.",
    copyright: "© 2026 Macework Creativ. Tüm hakları saklıdır."
  }
};
