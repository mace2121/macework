"use client";

import { motion } from "framer-motion";
import { InfiniteGrid } from "@/components/ui/the-infinite-grid";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    slug: "saas-ux-tasarimi",
    title: "SaaS Dünyasında UX Tasarımının Dönüşüm Oranlarına Etkisi",
    excerpt: "Neden bazı SaaS ürünleri milyonlarca kullanıcıya ulaşırken bazıları ilk ayda veda ediyor? Yanıt kullanıcı deneyiminde gizli.",
    date: "25 Mart 2026",
    author: "Yaser Köse",
    category: "Tasarım",
    readTime: "6 dk okuma"
  },
  {
    id: 2,
    slug: "nextjs-16-gelecek",
    title: "Next.js 16 ile Geleceğin Web Uygulamalarını İnşa Etmek",
    excerpt: "Modern web geliştirme süreçlerinde performans ve SEO dengesi nasıl kurulur? Next.js'in yeni özelliklerini inceliyoruz.",
    date: "18 Mart 2026",
    author: "Macework Tech Team",
    category: "Teknoloji",
    readTime: "8 dk okuma"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <InfiniteGrid className="h-full opacity-30" />
        </div>
        
        <div className="container relative z-10 text-center mx-auto max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-6 text-gradient"
          >
            Blog & Haberler
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground mx-auto max-w-2xl"
          >
            Teknoloji, tasarım ve dijital ürün dünyasından güncel içerikler, vaka analizleri ve ajans günlüğümüz.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full bg-card border border-border p-8 rounded-[2.5rem] hover:border-macework/50 transition-all duration-300 hover:shadow-2xl hover:shadow-macework/5"
              >
                <div className="mb-auto">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-macework bg-macework/10 px-3 py-1 rounded-full">{post.category}</span>
                        <span className="text-xs text-muted-foreground font-medium">{post.readTime}</span>
                    </div>
                  
                    <h3 className="text-2xl font-semibold tracking-tight text-foreground mb-4 group-hover:text-macework transition-colors leading-tight">
                        {post.title}
                    </h3>
                  
                    <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                        {post.excerpt}
                    </p>
                </div>

                <div className="pt-6 border-t border-border/50">
                    <div className="flex items-center justify-between">
                         <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-[10px] font-bold">M</div>
                            <div>
                                <div className="text-xs font-bold">{post.author}</div>
                                <div className="text-[10px] text-muted-foreground">{post.date}</div>
                            </div>
                         </div>
                         <div className="w-10 h-10 rounded-full bg-muted/50 border border-border flex items-center justify-center group-hover:bg-macework group-hover:text-white transition-all">
                            <ArrowRight className="w-4 h-4" />
                         </div>
                    </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
