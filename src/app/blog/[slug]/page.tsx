"use client"

import { useParams } from "next/navigation";
import { siteContent } from "@/content/site-content";
import { ArrowLeft, Clock, Share2, Globe, Link2, Share } from "lucide-react";
import { motion } from "framer-motion";
import { SubPageHeader } from "@/components/subpage-header";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const post = siteContent.blog.items.find((item) => item.slug === slug);

  if (!post) {
    return notFound();
  }

  return (
    <main className="min-h-screen">
      <SubPageHeader 
        badge={`${post.category} / ${post.date}`}
        title={post.title}
        description={post.excerpt}
      >
          <div className="flex items-center gap-6 mt-4">
             <Link 
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-muted/60 border border-border text-xs font-bold hover:bg-muted transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Blog'a Dön
            </Link>
            <span className="text-xs text-muted-foreground font-semibold flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
          </div>
      </SubPageHeader>

      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <article className="prose prose-zinc dark:prose-invert max-w-none">
             <div 
               className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-6"
               dangerouslySetInnerHTML={{ __html: post.content }}
             />
          </article>

          {/* Share Section */}
          <div className="mt-20 pt-10 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-6">
             <div className="text-sm font-bold text-muted-foreground flex items-center gap-2 uppercase tracking-widest">
                <Share2 className="w-4 h-4" /> Yazıyı Paylaş
             </div>
             <div className="flex gap-4">
                <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-all active:scale-95"><Globe className="w-5 h-5" /></button>
                <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-all active:scale-95"><Link2 className="w-5 h-5" /></button>
                <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-all active:scale-95"><Share className="w-5 h-5" /></button>
             </div>
          </div>
          
          <div className="mt-20 p-10 rounded-3xl bg-muted/30 border border-border flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
             <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center text-2xl font-black shrink-0">M</div>
             <div className="space-y-2">
                <h4 className="text-xl font-bold">{post.author} tarafından yazıldı</h4>
                <p className="text-sm text-muted-foreground">Macework ekibi olarak dijital dünyadaki tecrübelerimizi ve vizyonumuzu sizlerle paylaşıyoruz.</p>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
