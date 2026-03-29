"use client"

import { useParams } from "next/navigation";
import { siteContent } from "@/content/site-content";
import { ArrowLeft, Clock, Calendar, Tag, User, Link2 } from "lucide-react";
import { motion } from "framer-motion";
import { SubPageHeader } from "@/components/subpage-header";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SocialIcon } from 'react-social-icons';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const post = siteContent.blog.items.find((item: any) => item.slug === slug);

  if (!post) {
    return notFound();
  }

  const featuredImage = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000";
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    alert('Bağlantı kopyalandı!');
  };

  return (
    <main className="min-h-screen" suppressHydrationWarning>
      <SubPageHeader 
        badge={`${post.category} / Blog`}
        title={post.title}
        description={post.excerpt}
      >
          <div className="flex items-center gap-6 mt-4">
             <Link 
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-muted/60 border border-border text-[11px] font-bold hover:bg-muted transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Blog'a Dön
            </Link>
          </div>
      </SubPageHeader>

      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-8 space-y-16">
               <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-border/60 bg-muted/20">
                  <img src={featuredImage} alt={post.title} className="w-full h-full object-cover" />
               </div>

               <article className="prose prose-zinc dark:prose-invert max-w-none font-sans text-base leading-relaxed">
                  <div className="text-muted-foreground space-y-8" dangerouslySetInnerHTML={{ __html: post.content }} />
               </article>

               <div className="pt-10 border-t border-border/40 flex items-center flex-wrap gap-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mr-1">Etiketler:</span>
                  <span className="text-[10px] px-3 py-1 bg-muted/50 border border-border/50 rounded-full font-bold">#MACEWORK</span>
                  <span className="text-[10px] px-3 py-1 bg-muted/50 border border-border/50 rounded-full font-bold">#{post.category.toUpperCase()}</span>
               </div>
            </div>

            <div className="lg:col-span-4 select-none">
               <div className="p-10 rounded-[2.5rem] bg-card border border-border sticky top-32 space-y-10 shadow-sm shadow-black/5">
                  <div className="space-y-2">
                     <h3 className="scroll-m-20 text-xl font-bold tracking-tight text-foreground">Yazı Bilgileri</h3>
                     <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest">Yazar & Yayın Detayları</p>
                  </div>

                  <div className="space-y-6">
                     <div className="flex justify-between items-center pb-4 border-b border-border/40 text-foreground">
                        <span className="text-muted-foreground text-[11px] font-bold uppercase tracking-widest flex items-center gap-2"><User className="w-3.5 h-3.5" /> Yazar</span>
                        <span className="font-bold text-sm tracking-tight">{post.author}</span>
                     </div>
                     <div className="flex justify-between items-center pb-4 border-b border-border/40 text-foreground">
                        <span className="text-muted-foreground text-[11px] font-bold uppercase tracking-widest flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> Tarih</span>
                        <span className="font-bold text-sm tracking-tight">{post.date}</span>
                     </div>
                     <div className="flex justify-between items-center pb-4 border-b border-border/40 text-foreground">
                        <span className="text-muted-foreground text-[11px] font-bold uppercase tracking-widest flex items-center gap-2"><Clock className="w-3.5 h-3.5" /> Süre</span>
                        <span className="font-bold text-sm tracking-tight">{post.readTime}</span>
                     </div>
                     <div className="flex justify-between items-center text-foreground">
                        <span className="text-muted-foreground text-[11px] font-bold uppercase tracking-widest flex items-center gap-2"><Tag className="w-3.5 h-3.5" /> Kategori</span>
                        <span className="font-bold text-sm text-macework tracking-tight">{post.category}</span>
                     </div>
                  </div>
                  
                  {/* Standardized Social Share Buttons - Single Row */}
                  <div className="pt-8 space-y-6 flex flex-col items-center border-t border-border/40">
                     <p className="text-[10px] font-bold text-muted-foreground tracking-[0.2em] uppercase">Yazıyı Paylaş</p>
                     <div className="flex items-center justify-between w-full max-w-[240px]">
                        <SocialIcon url={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} network="linkedin" className="!w-10 !h-10 hover:bg-muted rounded-full border border-border transform hover:scale-110 transition-all" bgColor="transparent" fgColor="currentColor" />
                        <SocialIcon url={`https://twitter.com/intent/tweet?url=${shareUrl}`} network="x" className="!w-10 !h-10 hover:bg-muted rounded-full border border-border transform hover:scale-110 transition-all" bgColor="transparent" fgColor="currentColor" />
                        <SocialIcon url={`https://www.instagram.com/`} network="instagram" className="!w-10 !h-10 hover:bg-muted rounded-full border border-border transform hover:scale-110 transition-all" bgColor="transparent" fgColor="currentColor" />
                        <SocialIcon url={`https://wa.me/?text=${shareUrl}`} network="whatsapp" className="!w-10 !h-10 hover:bg-muted rounded-full border border-border transform hover:scale-110 transition-all" bgColor="transparent" fgColor="currentColor" />
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
