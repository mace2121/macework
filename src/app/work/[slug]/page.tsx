"use client"

import { useParams } from "next/navigation";
import { siteContent } from "@/content/site-content";
import { ArrowLeft, CheckCircle2, Globe, Calendar, Tag } from "lucide-react";
import { motion } from "framer-motion";
import { SubPageHeader } from "@/components/subpage-header";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function WorkDetailPage() {
  const { slug } = useParams();
  const work = siteContent.works.items.find((item) => item.slug === slug);

  if (!work) {
    return notFound();
  }

  return (
    <main className="min-h-screen">
      <SubPageHeader 
        badge={`Proje / ${work.year}`}
        title={work.title}
        description={work.description}
      >
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-muted-foreground font-semibold">
             <div className="flex items-center gap-2 text-sm"><Calendar className="w-4 h-4 text-macework" /> {work.year}</div>
             <div className="flex items-center gap-2 text-sm"><Tag className="w-4 h-4 text-macework" /> {work.category}</div>
             <div className="flex items-center gap-2 text-sm"><Globe className="w-4 h-4 text-macework" /> Yayında</div>
          </div>
      </SubPageHeader>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
               <div className="space-y-6">
                 <h2 className="text-3xl font-bold flex items-center gap-3">
                   <div className="w-2 h-8 rounded-full bg-macework" />
                   Proje Hikayesi
                 </h2>
                 <p className="text-lg text-muted-foreground leading-relaxed">
                   {work.longDescription}
                 </p>
               </div>

               <div className="space-y-6">
                 <h2 className="text-2xl font-bold flex items-center gap-3">
                   Teknoloji Yığını
                 </h2>
                 <div className="grid sm:grid-cols-2 gap-3">
                    {work.technologies.map((tech) => (
                      <div key={tech} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50">
                        <CheckCircle2 className="w-4 h-4 text-macework" />
                        <span className="font-bold text-sm">{tech}</span>
                      </div>
                    ))}
                 </div>
               </div>
            </div>

            <div className="lg:col-span-4 select-none">
               <div className="p-8 rounded-3xl bg-card border border-border sticky top-32 space-y-8">
                  <h3 className="text-xl font-bold">Proje Kartı</h3>
                  <div className="space-y-4">
                     <div className="flex justify-between items-center py-2 border-b border-border/50">
                        <span className="text-muted-foreground text-sm font-medium">Müşteri</span>
                        <span className="font-bold text-sm">Gizlilik Sözleşmesi</span>
                     </div>
                     <div className="flex justify-between items-center py-2 border-b border-border/50">
                        <span className="text-muted-foreground text-sm font-medium">Teslim Süresi</span>
                        <span className="font-bold text-sm">4 Ay</span>
                     </div>
                     <div className="flex justify-between items-center py-2">
                        <span className="text-muted-foreground text-sm font-medium">Alan</span>
                        <span className="font-bold text-sm">{work.category}</span>
                     </div>
                  </div>
                  
                  <Link 
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-foreground text-background font-bold hover:scale-[1.02] active:scale-95 transition-all text-sm"
                  >
                    Benzer Proje Başlat
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
