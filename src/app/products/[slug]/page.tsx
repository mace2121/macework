"use client"

import { useParams } from "next/navigation";
import { siteContent } from "@/content/site-content";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { SubPageHeader } from "@/components/subpage-header";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = siteContent.products.items.find((item) => item.slug === slug);

  if (!product) {
    return notFound();
  }

  return (
    <main className="min-h-screen">
      <SubPageHeader 
        badge="Macework SaaS Ürünü"
        title={product.title}
        description={product.description}
      >
          <a 
              href={product.href} 
              target="_blank" 
              className="group inline-flex items-center gap-3 bg-macework text-white px-8 py-3.5 rounded-full text-base font-bold shadow-2xl shadow-macework/30 hover:scale-[1.03] active:scale-95 transition-all"
          >
              Platforma Git
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
      </SubPageHeader>

      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center mb-32">
             <div className="space-y-12">
                <div className="space-y-6">
                   <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">Ürün Nedir ve Ne İşe Yarar?</h2>
                   <div className="h-1.5 w-12 bg-macework rounded-full" />
                   <p className="text-xl text-muted-foreground">
                      {product.longDescription}
                   </p>
                </div>
                
                <div className="grid gap-3">
                   {product.features.map((feature, idx) => (
                      <motion.div 
                        key={feature} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50"
                      >
                         <CheckCircle2 className="w-5 h-5 text-macework" />
                         <span className="text-base font-semibold tracking-tight">{feature}</span>
                      </motion.div>
                   ))}
                </div>
             </div>

             <div className="relative aspect-square lg:aspect-[4/3] rounded-[2.5rem] bg-card border border-border shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-macework/5 blur-[100px] -mr-32 -mt-32"></div>
                <div className="w-full h-full flex flex-col p-10 space-y-8">
                   <div className="h-8 w-40 bg-muted/60 rounded" />
                   <div className="grid grid-cols-2 gap-6">
                      <div className="h-40 bg-muted/40 rounded-2xl" />
                      <div className="h-40 bg-muted/40 rounded-2xl" />
                   </div>
                   <div className="h-1/2 bg-muted/40 rounded-2xl flex items-center justify-center">
                       <Sparkles className="w-12 h-12 text-macework/40" />
                   </div>
                </div>
             </div>
          </div>

          <div className="p-12 md:p-20 rounded-[3rem] bg-card border border-border relative overflow-hidden text-center max-w-5xl mx-auto shadow-2xl">
             <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] -mr-48 -mt-48"></div>
             <div className="space-y-10 relative z-10">
                 <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight md:text-4xl">Geleceğin Teknolojisini<br/>Bugün Deneyin</h2>
                 <p className="text-lg text-muted-foreground max-w-xl mx-auto font-medium">
                    Yüzlerce mutlu kullanıcı arasına katılın ve işinizi Macework'ün yenilikçi SaaS ürünleriyle bir adım öne taşıyın.
                 </p>
                 <Link 
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-foreground text-background font-black px-12 py-5 rounded-full text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-2xl shadow-black/10"
                 >
                    Bizimle İletişime Geçin
                    <ArrowRight className="w-5 h-5" />
                 </Link>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
