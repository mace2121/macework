"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteContent } from "../content/site-content";
import { cn } from "../lib/utils";
import { MegaMenu } from "./mega-menu";
import { MobileNav } from "./mobile-nav";
import { ArrowRight, Sparkles } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="fixed top-0 inset-x-0 z-50 flex flex-col items-center">
      {/* Announcement Bar */}
      <div className="w-full bg-macework py-2 px-4 flex items-center justify-center gap-2 text-[10px] md:text-xs font-bold text-white uppercase tracking-widest overflow-hidden">
        <motion.div 
          animate={{ x: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles className="w-3 h-3" />
        </motion.div>
        Yeni Nesil SaaS Çözümlerimizle Tanışın — Qrgetir V3 Yayında!
        <Link href="#products" className="underline hover:opacity-80 transition-opacity ml-2">İncele</Link>
      </div>

      <AnimatePresence>
        {isVisible && (
          <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "circOut" }}
            className={cn(
              "w-full transition-all duration-300 border-b border-transparent",
              scrolled
                ? "glass shadow-sm dark:bg-black/40 bg-white/70 backdrop-blur-xl border-border/50 py-1"
                : "bg-transparent py-4"
            )}
          >
            <div className="container flex items-center justify-between h-16 md:h-18">
              <Link href="/" className="flex items-center gap-2 z-50 group">
                <span className="text-xl md:text-2xl font-bold tracking-tighter group-hover:opacity-80 transition-opacity">
                  Macework<span className="text-macework">.</span>
                </span>
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden lg:flex items-center gap-1 bg-muted/20 p-1 rounded-full border border-border/10 backdrop-blur-md">
                {siteContent.header.navigation.map((item) => (
                  item.label === "Çözümler" ? (
                    <MegaMenu key={item.label} label={item.label} />
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-xs font-semibold px-4 py-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-all"
                    >
                      {item.label}
                    </Link>
                  )
                ))}
              </nav>

              <div className="hidden lg:flex items-center gap-3">
                <ModeToggle />
                <Link
                  href={siteContent.header.cta.href}
                  className="group relative flex items-center gap-2 bg-foreground text-background dark:bg-zinc-100 dark:text-zinc-950 hover:scale-[1.02] active:scale-95 transition-all px-6 py-2.5 rounded-full text-xs font-bold shadow-lg shadow-black/5"
                >
                  {siteContent.header.cta.label}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Mobile Controls */}
              <div className="flex lg:hidden items-center gap-2">
                <ModeToggle />
                <MobileNav />
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>
    </div>
  );
}
