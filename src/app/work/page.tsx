"use client";

import { siteContent } from "@/content/site-content";
import { ArrowRight, MoveRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { InfiniteGrid } from "@/components/ui/the-infinite-grid";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function WorksPage() {
  return (
    <main className="min-h-screen">
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <InfiniteGrid className="h-full opacity-30" />
        </div>
        
        <div className="container relative z-10 text-center mx-auto max-w-4xl">
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.h1 
              variants={item}
              className="text-5xl font-black tracking-tighter mb-6 text-gradient"
            >
              Neler Yaptık?
            </motion.h1>
            <motion.p 
              variants={item}
              className="text-lg text-muted-foreground mx-auto max-w-2xl mb-12"
            >
              {siteContent.works.sectionTitle} - Dijitalde iz bırakan, problem çözen ve 
              binlerce kullanıcıya ulaşan projelerimizden bazıları.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteContent.works.items.map((work) => (
              <Link
                key={work.id}
                href={`/work/${work.slug}`}
                className="group relative flex flex-col h-full bg-card border border-border p-8 rounded-3xl hover:border-macework/50 transition-all duration-300 hover:shadow-2xl hover:shadow-macework/5 overflow-hidden"
              >
                <div className="mb-auto">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-macework bg-macework/10 px-3 py-1 rounded-full">{work.year}</span>
                        <span className="text-[10px] font-medium text-muted-foreground">{work.category}</span>
                    </div>
                  
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-macework transition-colors">
                        {work.title}
                    </h3>
                  
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {work.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                         {work.technologies.slice(0, 3).map(tech => (
                             <span key={tech} className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-muted/60 text-muted-foreground border border-border/50">{tech}</span>
                         ))}
                    </div>
                </div>

                <div className="mt-4 flex items-center justify-between gap-2 text-sm font-bold text-foreground group/link">
                    <span className="group-hover/link:underline underline-offset-4 decoration-macework/50">Detayları İncele</span>
                    <div className="w-10 h-10 rounded-full bg-muted/50 border border-border flex items-center justify-center group-hover/link:bg-macework group-hover:text-white transition-all">
                       <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-32 p-12 rounded-[2.5rem] bg-card border border-border relative overflow-hidden text-center max-w-4xl mx-auto shadow-2xl">
             <div className="absolute top-0 right-0 w-64 h-64 bg-macework/10 blur-[100px] -mr-32 -mt-32"></div>
             <div className="relative z-10 space-y-8">
                 <h2 className="text-3xl md:text-5xl font-black tracking-tighter">Sizin Projeniz de Burada Olmalı mı?</h2>
                 <p className="text-lg text-muted-foreground max-w-xl mx-auto font-medium">
                     Markanız için en doğru teknoloji stratejisini belirleyelim ve birlikte dijitalin kurallarını yeniden yazalım.
                 </p>
                 <Link 
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-macework text-white px-10 py-5 rounded-full text-lg font-bold shadow-2xl shadow-macework/30 hover:scale-[1.03] active:scale-95 transition-all group"
                 >
                    Proje Başlat
                    <MoveRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                 </Link>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
