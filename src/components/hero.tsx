"use client";

import { siteContent } from "../content/site-content";
import Link from "next/link";
import { ArrowRight, MoveRight, ChevronRight } from "lucide-react";
import { InfiniteGrid } from "./ui/the-infinite-grid";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.4,
    },
  },
} as const;

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
} as const;

export function Hero() {
  return (
    <InfiniteGrid className="pt-52 pb-24 lg:pt-64 lg:pb-40 w-full min-h-screen flex flex-col justify-center">
      <div className="container relative z-10">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={item} className="mb-10">
            <Link 
              href="#products" 
              className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-muted/30 px-4 py-1.5 text-xs font-semibold text-muted-foreground hover:border-macework/30 hover:text-foreground transition-all backdrop-blur-md group"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-macework animate-pulse" />
              {siteContent.hero.badge}
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
          
          {/* Title */}
          <motion.h1 
            variants={item}
            className="text-5xl font-black tracking-tighter text-foreground mb-8 whitespace-pre-line leading-[1.1] text-gradient"
          >
            {siteContent.hero.title.replace(/\n/g, ' ')}
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            variants={item}
            className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-2xl font-medium"
          >
            {siteContent.hero.description}
          </motion.p>
          
          {/* CTAs */}
          <motion.div 
            variants={item}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Link 
              href={siteContent.hero.primaryCta.href}
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-macework text-white hover:bg-macework-hover transition-all px-10 py-5 rounded-full text-base font-bold shadow-2xl shadow-macework/40 shadow-spread hover:scale-[1.03] active:scale-95 group"
            >
              {siteContent.hero.primaryCta.label}
              <MoveRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </Link>
            
            <Link 
              href={siteContent.hero.secondaryCta.href}
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-transparent border border-border/50 text-foreground hover:bg-muted/30 hover:border-macework/20 transition-all px-10 py-5 rounded-full text-base font-bold backdrop-blur-sm"
            >
              {siteContent.hero.secondaryCta.label}
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
            </Link>
          </motion.div>

          {/* Brands / Proof - Premium Detail */}
          <motion.div 
             variants={item}
             className="mt-24 pt-10 border-t border-border/10 w-full"
          >
             <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60 mb-8">
               REFERANSLARIMIZ & ÜRÜNLERİMİZ
             </p>
             <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale opacity-40 hover:opacity-70 transition-opacity">
                {["Qrgetir", "Carigetir", "SociaMind", "byoo.pro"].map((p, i) => (
                  <span key={i} className="text-lg font-black tracking-tighter">{p}</span>
                ))}
             </div>
          </motion.div>
        </motion.div>
      </div>
    </InfiniteGrid>
  );
}
