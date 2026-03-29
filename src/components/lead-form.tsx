"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function LeadForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Mock submit
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  if (status === "success") {
    return (
      <Card className="max-w-2xl mx-auto text-center p-12 space-y-6">
        <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <CardTitle className="text-2xl font-bold">Mesajınız Alındı!</CardTitle>
        <CardDescription className="text-base">
          Ekibimiz en kısa sürede sizinle iletişime geçecektir. Macework Creative'e gösterdiğiniz ilgi için teşekkürler.
        </CardDescription>
        <Button 
          variant="link"
          onClick={() => setStatus("idle")}
          className="text-macework h-auto p-0"
        >
          Yeni bir mesaj gönder
        </Button>
      </Card>
    );
  }

  return (
    <section id="lead" className="py-24">
      <div className="container">
        <div className="w-full">
          <div className="text-center mb-16 space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Yeni Bir Projeye Başlayalım</h2>
            <p className="text-lg text-muted-foreground">
              Fikrinizi ürüne dönüştürmek veya markanızı dijitalde büyütmek için ilk adımı atın.
            </p>
          </div>

          <Card className="overflow-hidden relative border-border/60 shadow-none bg-card/30 backdrop-blur-sm rounded-[2.5rem]">
            <CardHeader className="pb-0">
               <div className="absolute top-0 right-0 w-64 h-64 bg-macework/5 blur-[80px] -mr-32 -mt-32 pointer-events-none"></div>
            </CardHeader>
            
            <CardContent className="p-8 md:p-12 relative z-10">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ad Soyad</Label>
                  <Input 
                    id="name"
                    required
                    placeholder="Yaser Köse"
                    className="rounded-md"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Firma Adı</Label>
                  <Input 
                    id="company"
                    placeholder="Macework"
                    className="rounded-md"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-posta</Label>
                  <Input 
                    id="email"
                    required
                    type="email" 
                    placeholder="iletisim@macework.com"
                    className="rounded-md"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest">İlgilendiğiniz Alan</Label>
                  <Select name="interest" defaultValue="SaaS Ürünleri">
                    <SelectTrigger id="interest" className="rounded-md">
                      <SelectValue placeholder="Bir alan seçin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="SaaS Ürünleri">SaaS Ürünleri</SelectItem>
                      <SelectItem value="Web Tasarım & Yazılım">Web Tasarım & Yazılım</SelectItem>
                      <SelectItem value="E-Ticaret">E-Ticaret</SelectItem>
                      <SelectItem value="Dijital Pazarlama">Dijital Pazarlama</SelectItem>
                      <SelectItem value="Diger">Diğer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="message">Mesajınız</Label>
                  <Textarea 
                    id="message"
                    required
                    rows={4}
                    placeholder="Projenizden kısaca bahsedin..."
                    className="rounded-md resize-none"
                  />
                </div>

                <div className="md:col-span-2 pt-4">
                  <Button 
                    disabled={status === "submitting"}
                    className="w-full h-14 font-bold bg-macework hover:bg-macework-hover text-white shadow-none rounded-xl text-xs uppercase tracking-widest"
                  >
                    {status === "submitting" ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        Teklif Al
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                  <p className="text-center text-xs text-muted-foreground mt-4 italic">
                    * Bilgileriniz gizli tutulacak ve sadece görüşme amaçlı kullanılacaktır.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

