"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteContent } from "../content/site-content";
import { cn } from "../lib/utils";
import { MegaMenu } from "./mega-menu";
import { MobileNav } from "./mobile-nav";
import { ArrowRight } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled
          ? "glass shadow-sm"
          : "bg-transparent py-2"
      )}
    >
      <div className="container flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2 z-50">
          <span className="text-2xl font-bold tracking-tight">Macework<span className="text-macework">.</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {siteContent.header.navigation.map((item) => (
            item.label === "Çözümler" ? (
              <MegaMenu key={item.label} label={item.label} />
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            href={siteContent.header.cta.href}
            className="group flex items-center gap-2 bg-foreground text-background hover:bg-muted-foreground transition-colors px-5 py-2.5 rounded-full text-sm font-medium"
          >
            {siteContent.header.cta.label}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Nav */}
        <MobileNav />
      </div>
    </header>
  );
}
