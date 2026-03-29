"use client"

import { useParams } from "next/navigation";
import { siteContent } from "@/content/site-content";
import { ArrowRight, CheckCircle2, Globe, ExternalLink, Box, Laptop, Smartphone, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { SubPageHeader } from "@/components/subpage-header";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = siteContent.products.items.find((item: any) => item.slug === slug);

  if (!product) {
    return notFound();
  }

  const productImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600";

  return (
    <main className="min-h-screen" suppressHydrationWarning>
      <SubPageHeader 
        badge={`${product.badge} / Ürünümüz`}
        title={product.title}
        description={product.description}
      >
          <div className="flex items-center gap-6 mt-4">
             <Link 
              href="/#products"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-muted/60 border border-border text-[11px] font-bold hover:bg-muted transition-all"
            >
              <ArrowRight className="w-3.5 h-3.5 rotate-180" />
              Ürünlere Dön
            </Link>
          </div>
      </SubPageHeader>

      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-16">
               {/* Featured Image */}
               <div className="relative aspect-[16/9] rounded-[2.5rem] overflow-hidden border border-border/60 bg-muted/20">
                  <img src={productImage} alt={product.title} className="w-full h-full object-cover" />
               </div>

               {/* Descriptions */}
               <div className="space-y-12">
                  <div className="space-y-6">
                    <h2 className="scroll-m-20 text-2xl font-bold tracking-tight flex items-center gap-3">
                        <span className="w-1.5 h-7 rounded-full bg-macework" />
                        Ürün Hakkında
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed font-medium">
                        {product.longDescription} Macework laboratuvarlarında titizlikle geliştirilen bu çözüm, modern işletmelerin en karmaşık süreçlerini bile kullanıcı dostu bir arayüzle yönetebilmeleri için tasarlanmıştır.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <h3 className="text-xl font-bold tracking-tight">Öne Çıkan Özellikler</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {product.features.map((feature: string) => (
                        <div key={feature} className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 group hover:border-macework/20 transition-all">
                            <div className="w-9 h-9 rounded-lg bg-macework/5 flex items-center justify-center text-macework">
                            <CheckCircle2 className="w-4 h-4" />
                            </div>
                            <span className="font-semibold text-xs tracking-tight">{feature}</span>
                        </div>
                        ))}
                    </div>
                  </div>
               </div>
            </div>

            {/* Right Sticky Sidebar - Product Info Card */}
            <div className="lg:col-span-4 select-none">
               <div className="p-10 rounded-[2.5rem] bg-card border border-border sticky top-32 space-y-10 shadow-sm shadow-black/5">
                  <div className="space-y-2">
                     <h3 className="scroll-m-20 text-xl font-bold tracking-tight text-foreground">Ürün Bilgileri</h3>
                     <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest leading-none">Proje Bilgilendirme Kartı</p>
                  </div>

                  <div className="space-y-6">
                     <div className="flex justify-between items-center pb-4 border-b border-border/40 text-foreground">
                        <span className="text-muted-foreground text-[11px] font-bold uppercase tracking-widest flex items-center gap-2">
                            <Rocket className="w-3.5 h-3.5" /> Yayın Tarihi
                        </span>
                        <span className="font-bold text-sm tracking-tight text-foreground">2026 / Mart</span>
                     </div>
                     <div className="flex justify-between items-center pb-4 border-b border-border/40 text-foreground">
                        <span className="text-muted-foreground text-[11px] font-bold uppercase tracking-widest flex items-center gap-2">
                            <Box className="w-3.5 h-3.5" /> Kategorisi
                        </span>
                        <span className="font-bold text-sm tracking-tight text-macework">{product.category}</span>
                     </div>
                     <div className="flex justify-between items-center pb-4 border-b border-border/40 text-foreground">
                        <span className="text-muted-foreground text-[11px] font-bold uppercase tracking-widest flex items-center gap-2">
                            <Laptop className="w-3.5 h-3.5" /> Platform
                        </span>
                        <span className="font-bold text-sm tracking-tight text-foreground italic">Bulut (SaaS)</span>
                     </div>
                  </div>
                  
                  <div className="pt-4">
                    <a 
                        href={product.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-5 rounded-full bg-foreground text-background font-bold hover:scale-[1.02] active:scale-95 transition-all text-xs uppercase tracking-widest"
                    >
                        Ürüne Git
                        <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="p-6 rounded-3xl bg-muted/30 border border-border/50 text-center space-y-3">
                     <p className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase">Destek Al</p>
                     <p className="text-[11px] text-muted-foreground leading-snug">Bu ürünle ilgili bir sorun mu yaşıyorsunuz?</p>
                     <Link href="/contact" className="inline-block text-[11px] font-bold text-macework underline underline-offset-4 decoration-macework/30 hover:decoration-macework transition-all">Müşteri Hizmetlerine Yazın</Link>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
