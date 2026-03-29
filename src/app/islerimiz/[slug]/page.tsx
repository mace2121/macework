"use client"

import { useState } from "react";
import { useParams } from "next/navigation";
import { siteContent } from "@/content/site-content";
import { ArrowLeft, CheckCircle2, Globe, Calendar, Tag, ChevronLeft, ChevronRight, Link2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SubPageHeader } from "@/components/subpage-header";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";
import { SocialIcon } from 'react-social-icons';

export default function WorkDetailPage() {
  const { slug } = useParams();
  const work = siteContent.works.items.find((item: any) => item.slug === slug);
  const [currentImage, setCurrentImage] = useState(0);

  if (!work) {
    return notFound();
  }

  const images = work.gallery || [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000",
  ];

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    alert('Bağlantı kopyalandı!');
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <main className="min-h-screen" suppressHydrationWarning>
      <SubPageHeader 
        badge={`Proje / ${work.year}`}
        title={work.title}
        description={work.description}
      >
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-muted-foreground font-bold">
             <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider"><Calendar className="w-4 h-4 text-macework" /> {work.year}</div>
             <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider"><Tag className="w-4 h-4 text-macework" /> {work.category}</div>
             <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider"><Globe className="w-4 h-4 text-macework" /> Yayında</div>
          </div>
      </SubPageHeader>

      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-8 space-y-16">
               <div className="relative group">
                  <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden bg-card border border-border/60">
                     <AnimatePresence mode="wait">
                       <motion.img
                         key={currentImage}
                         src={images[currentImage]}
                         alt={`${work.title} - Galleri ${currentImage + 1}`}
                         className="w-full h-full object-cover"
                         initial={{ opacity: 0, scale: 1.05 }}
                         animate={{ opacity: 1, scale: 1 }}
                         exit={{ opacity: 0, scale: 0.95 }}
                         transition={{ duration: 0.6, ease: "easeInOut" }}
                       />
                     </AnimatePresence>

                     <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                     
                     <button 
                         onClick={prevImage}
                         className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white/20"
                     >
                         <ChevronLeft className="w-5 h-5" />
                     </button>

                     <button 
                         onClick={nextImage}
                         className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white/20"
                     >
                         <ChevronRight className="w-5 h-5" />
                     </button>

                     <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((_: any, idx: number) => (
                           <button 
                             key={idx}
                             onClick={() => setCurrentImage(idx)}
                             className={cn(
                                 "h-1 rounded-full transition-all duration-300",
                                 currentImage === idx ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60"
                             )}
                           />
                        ))}
                     </div>
                  </div>
               </div>

               <div className="space-y-6">
                  <h2 className="scroll-m-20 text-2xl font-bold tracking-tight flex items-center gap-3 text-foreground">
                     <span className="w-1.5 h-7 rounded-full bg-macework" />
                     Proje Hikayesi
                   </h2>
                  <p className="text-base text-muted-foreground leading-relaxed font-medium">
                    {work.longDescription}
                  </p>
               </div>

               <div className="space-y-6">
                  <h2 className="scroll-m-20 text-xl font-bold tracking-tight text-foreground">
                    Teknoloji Yığını
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                     {work.technologies.map((tech: string) => (
                       <div key={tech} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-macework/20 transition-all">
                         <div className="w-9 h-9 rounded-lg bg-macework/5 flex items-center justify-center text-macework">
                            <CheckCircle2 className="w-4 h-4" />
                         </div>
                         <span className="font-semibold text-sm tracking-tight text-foreground">{tech}</span>
                       </div>
                     ))}
                  </div>
               </div>
            </div>

            <div className="lg:col-span-4 select-none">
               <div className="p-10 rounded-[2.5rem] bg-card border border-border sticky top-32 space-y-10 shadow-sm shadow-black/5">
                  <div className="space-y-2">
                     <h3 className="scroll-m-20 text-xl font-bold tracking-tight text-foreground">Proje Bilgileri</h3>
                     <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest leading-none">Temel Bilgiler & Detaylar</p>
                  </div>

                  <div className="space-y-6">
                     <div className="flex justify-between items-center pb-4 border-b border-border/40 text-foreground">
                        <span className="text-muted-foreground text-[11px] font-bold uppercase tracking-widest">Müşteri</span>
                        <span className="font-bold text-sm tracking-tight">Gizlilik Kaydı</span>
                     </div>
                     <div className="flex justify-between items-center pb-4 border-b border-border/40 text-foreground">
                        <span className="text-muted-foreground text-[11px] font-bold uppercase tracking-widest">Süre</span>
                        <span className="font-bold text-sm tracking-tight">4-6 Ay</span>
                     </div>
                     <div className="flex justify-between items-center text-foreground">
                        <span className="text-muted-foreground text-[11px] font-bold uppercase tracking-widest">Yıl</span>
                        <span className="font-bold text-sm tracking-tight">{work.year}</span>
                     </div>
                  </div>
                  
                  <Link 
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full py-5 rounded-full bg-foreground text-background font-bold hover:scale-[1.02] active:scale-95 transition-all text-sm uppercase tracking-widest"
                  >
                    Teklif Al
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </Link>

                  {/* Standardized Social Share Buttons - Replicated from Blog */}
                  <div className="pt-8 space-y-6 flex flex-col items-center border-t border-border/40">
                     <p className="text-[10px] font-bold text-muted-foreground tracking-[0.2em] uppercase">Projeyi Paylaş</p>
                     <div className="flex items-center justify-between w-full max-w-[240px]">
                        <SocialIcon url={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} network="linkedin" className="!w-10 !h-10 hover:bg-muted rounded-full border border-border transform hover:scale-110 transition-all icon-gray-filter" bgColor="transparent" fgColor="currentColor" />
                        <SocialIcon url={`https://twitter.com/intent/tweet?url=${shareUrl}`} network="x" className="!w-10 !h-10 hover:bg-muted rounded-full border border-border transform hover:scale-110 transition-all icon-gray-filter" bgColor="transparent" fgColor="currentColor" />
                        <SocialIcon url={`https://www.instagram.com/`} network="instagram" className="!w-10 !h-10 hover:bg-muted rounded-full border border-border transform hover:scale-110 transition-all icon-gray-filter" bgColor="transparent" fgColor="currentColor" />
                        <SocialIcon url={`https://wa.me/?text=${shareUrl}`} network="whatsapp" className="!w-10 !h-10 hover:bg-muted rounded-full border border-border transform hover:scale-110 transition-all icon-gray-filter" bgColor="transparent" fgColor="currentColor" />
                        <button 
                            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-all active:scale-90 text-foreground" 
                            title="Bağlantıyı Kopyala"
                            onClick={copyToClipboard}
                        >
                           <Link2 className="w-5 h-5" />
                        </button>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
