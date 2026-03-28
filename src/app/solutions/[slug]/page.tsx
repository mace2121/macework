"use client"

import { useParams } from "next/navigation";
import { siteContent } from "@/content/site-content";
import { CheckCircle2, MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import { SubPageHeader } from "@/components/subpage-header";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function SolutionDetailPage() {
  const { slug } = useParams();
  const solution = siteContent.solutionsDetail.find((item) => item.slug === slug);

  if (!solution) {
    return notFound();
  }

  return (
    <main className="min-h-screen">
      <SubPageHeader 
        badge="Macework Çözümleri"
        title={solution.title}
        description={solution.description}
      />

      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
             <div className="space-y-12">
                <div className="space-y-6">
                   <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">Neler Sunuyoruz?</h2>
                   <div className="h-1.5 w-12 bg-macework rounded-full" />
                   <p className="text-xl text-muted-foreground">
                      Sektörel standartların üzerinde, markanıza değer katan ve dönüşümü odağa alan profesyonel {solution.title} süreçleri.
                   </p>
                </div>

                <div className="grid gap-4">
                   {solution.features.map((feature, idx) => (
                      <motion.div 
                        key={feature} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 group hover:border-macework/30 transition-all"
                      >
                         <div className="w-10 h-10 rounded-xl bg-macework/10 flex items-center justify-center text-macework group-hover:scale-110 transition-transform">
                            <CheckCircle2 className="w-5 h-5" />
                         </div>
                         <span className="text-lg font-semibold tracking-tight">{feature}</span>
                      </motion.div>
                   ))}
                </div>
             </div>

             <div className="p-10 rounded-[2.5rem] bg-card border border-border shadow-2xl relative overflow-hidden group space-y-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-macework/5 blur-[80px] -mr-32 -mt-32"></div>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Sürecimiz Nasıl İşler?</h3>
                <div className="space-y-6">
                   {[
                      { step: 1, label: "Keşif & Analiz", color: "bg-macework" },
                      { step: 2, label: "Strateji & Planlama", color: "bg-primary" },
                      { step: 3, label: "Tasarım & Geliştirme", color: "bg-blue-500" },
                      { step: 4, label: "Test & Teslimat", color: "bg-green-500" },
                   ].map(s => (
                      <div key={s.step} className="flex items-center gap-5 group/step">
                         <div className={`w-10 h-10 rounded-full ${s.color} text-white flex items-center justify-center font-bold group-hover/step:scale-110 transition-transform shrink-0`}>
                            {s.step}
                         </div>
                         <span className="text-lg font-bold text-muted-foreground group-hover/step:text-foreground transition-colors">{s.label}</span>
                      </div>
                   ))}
                </div>

                <Link 
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-foreground text-background font-black hover:scale-[1.02] active:scale-95 transition-all text-base shadow-2xl shadow-black/10"
                 >
                    Proje Başlatın
                    <MoveRight className="w-5 h-5" />
                 </Link>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
