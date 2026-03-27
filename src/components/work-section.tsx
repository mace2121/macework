"use client";

import Link from "next/link";
import { ArrowRight, MoveRight } from "lucide-react";
import { siteContent } from "@/content/site-content";
import { motion } from "framer-motion";

export function WorkSection() {
  return (
    <section id="work" className="py-24 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter">Seçkin İşlerimiz</h2>
            <p className="text-lg text-muted-foreground font-medium">
              Dijitalde iz bırakan, problem çözen ve binlerce kullanıcıya ulaşan projelerimizden bazıları.
            </p>
          </div>
          <Link 
            href="/work" 
            className="group inline-flex items-center gap-2 text-sm font-bold text-macework py-2 px-1 border-b border-transparent hover:border-macework transition-all"
          >
            Tüm Projeleri Gör
            <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteContent.works.items.map((work, idx) => (
            <Link
              key={work.id}
              href={`/work/${work.slug}`}
              className="group relative flex flex-col h-full bg-card border border-border p-8 rounded-[2.5rem] hover:border-macework/50 transition-all duration-300 hover:shadow-2xl hover:shadow-macework/5 overflow-hidden"
            >
              <div className="mb-auto">
                  <div className="flex items-center justify-between mb-6">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-macework bg-macework/10 px-3 py-1 rounded-full">{work.year}</span>
                      <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">{work.category}</span>
                  </div>
                
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-macework transition-colors leading-tight">
                      {work.title}
                  </h3>
                
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                      {work.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                       {work.technologies.slice(0, 3).map(tech => (
                           <span key={tech} className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-muted/60 text-muted-foreground border border-border/50">{tech}</span>
                       ))}
                  </div>
              </div>

              <div className="mt-8 flex items-center justify-between gap-2 text-xs font-bold text-foreground group-hover:text-macework transition-colors">
                  <span>Projeyi İncele</span>
                  <div className="w-10 h-10 rounded-full bg-muted/50 border border-border flex items-center justify-center group-hover:bg-macework group-hover:text-white transition-all">
                     <ArrowRight className="w-4 h-4" />
                  </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
