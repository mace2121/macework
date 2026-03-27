"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { siteContent } from "../content/site-content";
import { cn } from "../lib/utils";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="lg:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 -mr-2 text-foreground transition-transform active:scale-95"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Full screen menu overlay */}
      <div 
        className={cn(
          "fixed inset-x-0 top-20 bottom-0 bg-background/95 backdrop-blur-md z-40 transition-all duration-300 px-6 py-8 overflow-y-auto flex flex-col",
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <nav className="flex flex-col gap-6">
          {siteContent.header.navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-2xl font-semibold text-foreground tracking-tight"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          
          <div className="mt-8 pt-8 border-t border-border">
            <Link
              href={siteContent.header.cta.href}
              className="flex items-center justify-center gap-2 w-full bg-macework text-white hover:bg-macework-hover transition-colors px-6 py-4 rounded-xl text-lg font-medium shadow-lg shadow-macework/20"
              onClick={() => setIsOpen(false)}
            >
              {siteContent.header.cta.label}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
