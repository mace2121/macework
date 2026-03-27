import { siteContent } from "../content/site-content";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden w-full">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-full w-full bg-[radial-gradient(ellipse_at_top,#18181b,transparent_50%)]"></div>
      <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-macework/20 rounded-full blur-[128px]"></div>
      
      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-sm font-medium text-muted-foreground mb-6 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-macework mr-2"></span>
            {siteContent.hero.badge}
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6 whitespace-pre-line leading-[1.1]">
            {siteContent.hero.title}
          </h1>
          
          <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
            {siteContent.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link 
              href={siteContent.hero.primaryCta.href}
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-macework text-white hover:bg-macework-hover transition-colors px-8 py-4 rounded-full text-base font-semibold shadow-lg shadow-macework/20"
            >
              {siteContent.hero.primaryCta.label}
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link 
              href={siteContent.hero.secondaryCta.href}
              className="w-full sm:w-auto inline-flex justify-center items-center bg-transparent border border-border text-foreground hover:bg-muted transition-colors px-8 py-4 rounded-full text-base font-semibold"
            >
              {siteContent.hero.secondaryCta.label}
            </Link>
          </div>
        </div>
        
        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          {/* Abstract Mockup Area */}
          <div className="aspect-[4/3] rounded-2xl glass shadow-2xl border border-border flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/20 to-macework/5 p-4 relative group">
            <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px]" />
            <div className="absolute top-4 left-4 right-4 h-6 border-b border-white/10 flex items-center gap-1.5">
               <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
               <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
               <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
            </div>
            
            <div className="w-full h-full mt-8 rounded-xl border border-white/5 bg-background shadow-2xl overflow-hidden flex flex-col">
              <div className="p-4 border-b border-border flex items-center justify-between">
                <div className="h-4 w-32 bg-muted rounded"></div>
                <div className="h-8 w-8 bg-macework/20 rounded-full flex items-center justify-center group-hover:bg-macework/40 transition-colors">
                  <div className="w-3 h-3 rounded-full bg-macework"></div>
                </div>
              </div>
              <div className="flex-1 p-4 grid gap-4 grid-cols-2">
                <div className="bg-muted/40 rounded-lg p-3 space-y-3">
                   <div className="h-3 w-1/2 bg-muted rounded"></div>
                   <div className="h-8 w-3/4 bg-border rounded"></div>
                </div>
                <div className="bg-muted/40 rounded-lg p-3 space-y-3">
                   <div className="h-3 w-1/2 bg-muted rounded"></div>
                   <div className="h-2 w-full bg-border rounded"></div>
                   <div className="h-2 w-2/3 bg-border rounded"></div>
                </div>
                <div className="col-span-2 bg-muted/40 rounded-lg flex-1 p-3">
                  <div className="h-full w-full border border-dashed border-border rounded flex items-center justify-center text-muted-foreground text-xs font-mono">
                    System Active
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
