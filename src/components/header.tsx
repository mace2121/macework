"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteContent } from "../content/site-content";
import { cn } from "../lib/utils";
import { MegaMenu } from "./mega-menu";
import { MobileNav } from "./mobile-nav";
import { ArrowRight, Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);
      
      if (currentScrollY > lastScrollY && currentScrollY > 150 && !isMobileMenuOpen) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMobileMenuOpen]);

  return (
    <>
      {/* Mobile Drawer (Always outside any transform/clip) */}
      <MobileNav isOpen={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen} />

      <div className="fixed top-0 inset-x-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
        <AnimatePresence>
          {isVisible && (
            <motion.header
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "w-full max-w-7xl h-16 rounded-full transition-all duration-300 border border-border/40 backdrop-blur-md pointer-events-auto",
                scrolled
                  ? "bg-background/80 shadow-lg shadow-black/5"
                  : "bg-background/40"
              )}
            >
              <div className="container h-full flex items-center justify-between">
                {/* Logo */}
                <div className="flex-1 lg:flex-none">
                  <Link href="/" className="flex items-center gap-2 group">
                    <span className="text-xl font-bold tracking-tighter font-logo">
                      Macework<span className="text-macework">.</span>
                    </span>
                  </Link>
                </div>

                {/* Desktop Nav - Centered */}
                <nav className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-1.5 py-1 rounded-full">
                    {siteContent.header.navigation.map((item) => (
                      item.label === "Çözümler" ? (
                        <MegaMenu key={item.label} label={item.label} />
                      ) : (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="text-[13px] font-semibold px-4 py-2 rounded-full text-foreground/70 hover:text-foreground hover:bg-muted/60 transition-all"
                        >
                          {item.label}
                        </Link>
                      )
                    ))}
                  </div>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-3 flex-1 lg:flex-none justify-end">
                  <ModeToggle />
                  <Link
                    href={siteContent.header.cta.href}
                    className="hidden md:flex items-center gap-2 bg-foreground text-background dark:bg-zinc-100 dark:text-zinc-950 hover:bg-foreground/90 transition-all px-6 py-2.5 rounded-full text-xs font-bold shadow-sm"
                  >
                    {siteContent.header.cta.label}
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  {/* Mobile Nav Button */}
                  <div className="lg:hidden">
                    <button 
                       onClick={() => setIsMobileMenuOpen(true)}
                       className="p-2 -mr-2 hover:bg-muted transition-colors rounded-full"
                    >
                       <Menu className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.header>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
