"use client"

import { useParams } from "next/navigation";
import { siteContent } from "@/content/site-content";
import { ArrowRight, CheckCircle2, Layout, Zap, Smartphone, ShieldCheck, PieChart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { InfiniteGrid } from "@/components/ui/the-infinite-grid";
import Link from "next/link";
import { notFound } from "next/navigation";

const icons: Record<number, any> = {
  0: Layout,
  1: Zap,
  2: Smartphone,
  3: ShieldCheck,
  4: PieChart,
  5: Sparkles,
};

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = siteContent.products.items.find((item) => item.slug === slug);

  if (!product) {
    return notFound();
  }

  return (
    <main className="min-h-screen">
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <InfiniteGrid className="h-full opacity-30" />
        </div>
        
        <div className="container relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-macework/10 border border-macework/20 text-xs font-bold text-macework">
              Macework SaaS Ürünü
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-9xl font-black tracking-tighter mb-6 text-gradient"
          >
            {product.title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 font-medium"
          >
            {product.description}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
             <a 
                href={product.href} 
                target="_blank" 
                className="group inline-flex items-center gap-3 bg-macework text-white px-10 py-5 rounded-full text-lg font-bold shadow-2xl shadow-macework/30 hover:scale-[1.03] active:scale-95 transition-all"
             >
                Platforma Git
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </a>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
             <div className="space-y-8">
                <h2 className="text-4xl font-extrabold tracking-tight">Ürün Nedir ve Ne İşer Yarar?</h2>
                <div className="h-1 w-20 bg-macework rounded-full" />
                <p className="text-xl text-muted-foreground leading-relaxed">
                   {product.longDescription}
                </p>
                <div className="grid gap-4">
                   {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 p-4 rounded-2xl bg-card border border-border/50">
                         <CheckCircle2 className="w-5 h-5 text-macework" />
                         <span className="font-bold text-lg">{feature}</span>
                      </div>
                   ))}
                </div>
             </div>

             <div className="relative aspect-square lg:aspect-[4/3] rounded-[3rem] bg-card border border-border shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-macework/5 blur-[100px] -mr-32 -mt-32"></div>
                <div className="w-full h-full flex flex-col p-10 space-y-8">
                   <div className="h-8 w-40 bg-muted/60 rounded" />
                   <div className="grid grid-cols-2 gap-6">
                      <div className="h-40 bg-muted/40 rounded-3xl" />
                      <div className="h-40 bg-muted/40 rounded-3xl" />
                   </div>
                   <div className="h-1/2 bg-muted/40 rounded-3xl flex items-center justify-center">
                       <Sparkles className="w-12 h-12 text-macework/40" />
                   </div>
                </div>
             </div>
          </div>

          <div className="p-16 rounded-[4rem] bg-card border border-border relative overflow-hidden">
             <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] -mr-48 -mt-48"></div>
             <div className="flex flex-col items-center text-center space-y-10 relative z-10">
                 <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Geleceğin Teknolojisini<br/>Bugün Deneyin</h2>
                 <p className="text-xl text-muted-foreground max-w-2xl font-medium">
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
